var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function () {
  return gulp.src('./out/**/*')
    .pipe(sftp({
    }));
});