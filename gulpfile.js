/**
 * Created by donmclean on 4/18/16.
 */

"use strict";
const
    gulp            = require('gulp'),
    $               = require('gulp-load-plugins')({lazy: true, DEBUG: false, scope: ['devDependencies']}),
    basePath        = process.cwd();

gulp.task('lint', () => {
    gulp.src([basePath+'/src/*',basePath+'/tests/*',basePath+'/index.js'])
        .pipe($.debug({title: 'linting js src files:'}))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['lint']);