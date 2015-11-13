'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = false;

  runSequence(['vendors','styles', 'images', 'jsons','views', 'scripts'], 'watch', cb);

});
