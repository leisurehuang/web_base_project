var gulp = require('gulp');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function () {
  return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'));
});


gulp.task('serve', function() {
  browserSync.init({
      server: "./"
  });
  gulp.watch(['./src/*.scss',], ['sass']).on('change', browserSync.reload);
  gulp.watch(['./*.html', './src/images/***']).on('change', browserSync.reload);
});

gulp.task('default',['images','sass','serve'],function(){

});
