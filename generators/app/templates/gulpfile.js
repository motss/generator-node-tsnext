const gulp = require('gulp');
const builder = require('@messageflow/build').builder();

gulp.task('lint', builder.lint);
gulp.task('default', builder.default);
