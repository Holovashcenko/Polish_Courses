const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function style() {
    return gulp.src('./src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}).on('error',sass.logError))
    .pipe(concat('all.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

function script (){
  return gulp.src('./src/es6/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/es5'));
}

function watch() {
    browserSync.init({
        server: {
           baseDir: './',
           index: 'index.html'
        }
    });
    gulp.watch('./src/es6/*.js', script);
    gulp.watch('./src/sass/*.scss', style);
    gulp.watch('*.html').on('change',browserSync.reload);
}

exports.script = script;
exports.style = style;
exports.watch = watch;
exports.default = gulp.parallel(style, script, watch);