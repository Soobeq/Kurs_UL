var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
    gulp.src('src/*.js')
    .pipe(concat('build/calc.js'))
});