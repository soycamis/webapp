module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            }
        },
        mocha_phantomjs: {
            all: ['']
        },
        mochacli: {
            options: {
                bail: true,
                debug: true,
                reporter: 'spec'
            }
        },
        stylus: {
            compile: {
                options: {
                    compress: false,
                    use: [require('fluidity')]
                },
                files: {
                    'public/app/assets/css/app.css': 'public/app/assets/stylus/app.styl'
                }
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