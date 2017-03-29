var gulp        = require('gulp');
var browserSync = require('browser-sync');
var less        = require('gulp-less')
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var watch       = require('gulp-watch');
var vueify      = require('vueify');




//  first arguement is the files I want to watch, the second is the task to run
gulp.task('watch', function(){
  gulp.watch(['./clientVue/*.js'], ['vueify'])
  gulp.watch(['./public/stylesheets/*.less'], ['compile-less'])
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
          .pipe(gulp.dest('./public/build'))
})

gulp.task('compile-less', function(){
  gulp.src('./server/public/stylesheets/main.less')
  .pipe(less())
  .pipe(gulp.dest('./public/stylesheets'));
})


gulp.task('default', ['compile-less', 'vueify', 'watch'])
