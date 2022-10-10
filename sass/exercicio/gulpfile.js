const { series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('node-sass'));

const reload = browserSync.reload;

function tarefasCSS(cb) {
   gulp.src([
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './vendor/fontawesome/fontawesome.css',
      './vendor/owl/css/owl.css',
   ])
      .pipe(concat('css-libs.css'))       // mescla os arquivos css das libs
      .pipe(cssmin())                     // minifica o css das libs
      .pipe(rename({ suffix: '.min' }))   // css-libs.min.css
      .pipe(gulp.dest('./dist/css'));     // cria arquivo "css-libs.min.css" em novo diretório

      return cb();
}

function tarefasSASS(cb) {
   gulp.src('./src/scss/**/*.scss') // busca todos os arquivos sass, que estão dentro do diretório informado
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))  // transforma o sass em css comprimido & exibe erro caso ocorra 
   .pipe(gulp.dest('./dist/css'))   // cria o arquivo em novo diretório da pasta dist

   cb();
}

function tarefasJS(cb) {
   gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './vendor/owl/js/owl.js',
      './vendor/jquery-mask/jquery.mask.js',
      './src/js/custom.js'
   ])
      .pipe(babel({
         comments: false,
         presets: ['@babel/env']
      })) // Compila o código javascript com o babel.
      .pipe(concat('scripts.js')) // une todos os arquivos .js da aplicação, sejam das bibliotecas utilizadas como o que eu criei
      .pipe(uglify()) // minifica o arquivo libs.js
      .pipe(rename({ suffix: '.min' })) // scripts.min.js
      .pipe(gulp.dest('./dist/js')); // Cria o arquivo lib.min.js no diretório dist/js

   return cb();
}

function tarefasImagem(cb) {
   gulp.src('./src/images/*')
      .pipe(image({
         pngquant: true,
         optipng: false,
         zopflipng: true,
         jpegRecompress: false,
         mozjpeg: true,
         gifsicle: true,
         svgo: true,
         concurrent: 10,
         quiet: true
      }))
      .pipe(gulp.dest('./dist/images'))

   return cb();
}

function tarefasHTML(cb) {
   gulp.src('./src/**/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./dist'))

   return cb();
}

gulp.task('serve', function() {
   // Configuração do servidor gulp
   browserSync.init({
      server: {
         baseDir: './dist'
      }
   });
   // Sempre que hover alteração no diretório src, executa o process
   gulp.watch('./src/**/*').on('change', process);
   // Sempre que houver alteração no diretório dist (após a execução de process), faz o reload do servidor
   gulp.watch('./dist/**/*').on('change', reload);
});

function end(cb) {
   console.log("tarefas concluídas");
   return cb()
}
// Sempre que for executado, executa as tarefas do gulp, alterando o diretório dist
const process = series(tarefasHTML, tarefasCSS, tarefasSASS, tarefasJS, tarefasImagem, end); 

exports.default = process;

