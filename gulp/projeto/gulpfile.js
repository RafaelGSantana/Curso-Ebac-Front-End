import gulp from 'gulp';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import image from 'gulp-image';

function tarefasCSS(cb) {
   return gulp.src([
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './vendor/fontawesome/fontawesome.css',
      './vendor/owl/css/owl.css',
      './src/css/style.css'
   ])
      .pipe(concat('styles.css'))
      .pipe(cssmin())
      .pipe(rename({ suffix: '.min' })) // styles.min.css
      .pipe(gulp.dest('./dist/css'));
}

function tarefasJS() {
   return gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './vendor/owl/js/owl.js',
      './vendor/jquery-mask/jquery.mask.js',
      './src/js/custom.js'
   ])
      .pipe(concat('scripts.js')) // une todos os arquivos .js da aplicação, sejam das bibliotecas utilizadas como o que eu criei
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
