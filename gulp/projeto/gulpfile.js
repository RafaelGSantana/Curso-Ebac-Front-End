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

const reload = browserSync.reload;

function tarefasCSS(cb) {
   gulp.src([
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './vendor/fontawesome/fontawesome.css',
      './vendor/owl/css/owl.css',
      './src/css/style.css'
   ])
      .pipe(concat('styles.css'))
      .pipe(cssmin())
      .pipe(rename({ suffix: '.min' })) // styles.min.css
      .pipe(gulp.dest('./dist/css'));

      return cb();
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
const process = series(tarefasHTML, tarefasCSS, tarefasJS, tarefasImagem, end); 

exports.default = process;
