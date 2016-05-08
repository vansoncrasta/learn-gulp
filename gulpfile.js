var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs =  require('gulp-jscs');

//Watch task
gulp.task('default', function () {
    gulp.src('./src/**/*.js')
        .pipe(jscs())
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish",{verbose:true}));
});


