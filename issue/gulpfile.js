var gulp = require('gulp');
var tsProject = require('tsproject');

gulp.task('build', function() {
  return tsProject.src('src/tsconfig.json').pipe(gulp.dest('dist'));
});