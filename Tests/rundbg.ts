﻿var gulp = require('gulp');
var tsproject = require('./../src/tsproject.js');
//var tsprojectmin = require( './tsprojectmin.js' );

tsproject.src( './../src/tsconfig.json', {
    logLevel: 3,
    compilerOptions: {
        watch: false,
        listFiles: false
    }
});