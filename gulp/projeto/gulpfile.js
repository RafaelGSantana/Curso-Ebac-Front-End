import gulp from 'gulp';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import image from 'gulp-image';

function tarefasCSS(cb) {
   return gulp.src('./vendor/**/*.css')
      .pipe(concat('libs.css'))
      .pipe(cssmin())
      .pipe(rename({ suffix: '.min' })) // libs.min.css
      .pipe(gulp.dest('./dist/css'));
}

function tarefasJS() {
   return gulp.src('./vendor/**/*.js')
      .pipe(concat('libs.js')) // une os arquivos .js das bibliotecas utilizadas
      .pipe(uglify()) // minifica o arquivo libs.js
      .pipe(rename({ suffix: '.min' })) // libs.min.js
      .pipe(gulp.dest('./dist/js')); // Cria o arquivo lib.min.js no diretório dist/js
}

function tarefasImagem() {
   return gulp.src('./src/images/*')
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
}

export {tarefasCSS as styles}
export {tarefasJS as scripts}
export {tarefasImagem as images}
