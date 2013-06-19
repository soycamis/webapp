module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            front: [
                'public/test/{,*/}*.js',
                '!public/test/lib/{,*/}*.js'
            ]
        },
        mocha_phantomjs: {
            all: ['public/test/{,*/}*.html']
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
                    optimize: 'uglify',
                    preserveLicenseComments: false
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
        },
        watch: {
            front: {
                files: ['public/test/{,*/}*.js', 'public/app/{,*/}*.js'],
                tasks: ['test_front']
            }
        }
    });

    grunt.registerTask('test_front', ['jshint:front', 'mocha_phantomjs']);
};