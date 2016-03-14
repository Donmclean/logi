/**
 * Created by donmclean on 3/13/16.
 */
"use strict";
const
    gulp            = require('gulp'),
    $               = require('gulp-load-plugins')({lazy: true, DEBUG: false, scope: ['devDependencies']}),
    _               = require('lodash'),
    Q               = require('q'),
    qfs             = require('q-io/fs'),
    runSequence     = require('run-sequence'),

    basePath        = process.cwd(),
    src             = basePath+'/src',
    dist            = basePath+'/dist',
    mainFileName    = 'logi';


gulp.task('default', (cb) => {
    runSequence('build',cb);
});

gulp.task('build', () => {
    var deferred = Q.defer();

    try {

        gulp.src([src+'/config.js', src+'/base.js', src+'/actions.js', src+'/index.js'])
            .pipe($.plumber())
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.jshint.reporter('fail'))
            .pipe($.debug({title: 'linting js src files:'}))
            .pipe($.concat(mainFileName + '.js'))
            .pipe($.babel({presets: ['es2015']}))
            .pipe(gulp.dest(dist))
            .pipe($.size({showFiles:true}))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.uglify())
            .pipe($.size({showFiles:true}))
            .pipe(gulp.dest(dist))
            .pipe($.livereload())
            .on('error', (err) => {$.util.log($.util.colors.red(err));})
            .on('end', () => {
                deferred.resolve();
            });

        return deferred.promise;

    }

    catch (err) {

        $.util.log($.util.colors.red(err));

    }

});
