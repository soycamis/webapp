module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            }
        },
        mochacli: {
            options: {
                bail: true,
                debug: true,
                reporter: 'spec'
            }
        }
    });
};