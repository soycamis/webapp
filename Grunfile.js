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
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'public/js/app',
                    dir: 'public/dist',
                    mainConfigFile: 'public/js/app/main.js',
                    name: 'main',
                    optimize: 'uglify'
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['public/js']
                }]
            },
            rjs: {
                files: [{
                    dot: true,
                    src: ['public/js/vendor',
                          'public/js/views',
                          'public/js/build.txt',
                          'public/js/collections',
                          'public/js/model',
                          'public/js/templates']
                }]
            }
        }
    });
};