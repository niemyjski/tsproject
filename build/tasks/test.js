﻿var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var tsproject = require('../../src/TsProject');
var tsprojectmin = require( '../../src/tsproject' );

gulp.task('test', function () {
    return tsproject.src( "./tests/minifier/tsconfig.json", { logLevel: 4 })
        .pipe( gulp.dest( paths.testDir ));
});

gulp.task('test-min', function () {
    return tsprojectmin.src( "./tests/minifier/tsconfig.json", { logLevel: 4 })
        .pipe( gulp.dest( paths.testDir ));
});