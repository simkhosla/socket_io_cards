var gulp        = require('gulp');
var browserSync = require('browser-sync');
var less        = require('gulp-sass')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');
var vueify      = require('vueify');




//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./clientVue/*.js'], ['vueify'])
  gulp.watch(['./server/public/stylesheets/*.scss'], ['compile-sass'])
  // gulp.watch("./server/views/*.html").on('change', browserSync.reload);
})

gulp.task('vueify', function(){
  return browserify({
            entries: './clientVue/main',
            extensions: ['.js'],
            debug: true
          })
          .transform('babelify', {presets: ["vue", "es2015"]})
          .bundle()
          .pipe(source('build.js'))
          .pipe(gulp.dest('./server/public/build'))
})

gulp.task('compile-sass', function(){
  gulp.src('./server/public/stylesheets/style.scss')
  .pipe(less())
  .pipe(gulp.dest('./server/public/stylesheets'));
})


gulp.task('default', ['compile-sass', 'vueify', 'watch'])
