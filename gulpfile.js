/**
 * Created by Mattily on 3/17/2016.
 */

var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src(['./src/js/*.js', './src/js/**/*.js'])
        .pipe(react())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./src/js/*.js', './src/js/**/*.js'], ['default'])

});