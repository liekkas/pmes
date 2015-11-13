'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('jsons', function() {

  return gulp.src(config.jsons.src)
    .pipe(changed(config.jsons.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.jsons.dest))
    .pipe(browserSync.stream({ once: true }));

});
