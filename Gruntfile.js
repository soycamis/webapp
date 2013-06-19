module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            front: [
                'public/app/**/*.js',
                '!public/app/vendor/**/*.js',
                'public/test/{,*/}*.js',
                '!public/test/lib/**/*.js'
            ],
            back: [
                'app/**/*.js',
                'test/**/*.js',
                '*.js',
                '!node_modules/**/*.js'
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
            },
            all: ['test/**/*.js']
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
                    baseUrl: 'public/app',
                    dir: 'public/js',
                    mainConfigFile: 'public/app/main.js',
                    optimize: 'uglify',
                    preserveLicenseComments: true
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
                          'public/js/models',
                          'public/js/assets']
                }]
            }
        },
        watch: {
            front: {
                files: ['public/test/**/*.js', 'public/app/**/*.js'],
                tasks: ['test_front']
            },
            back: {
                files: ['app/**/*.js', 'test/**/*.js'],
                tasks: ['test_back']
            }
        }
    });

    grunt.registerTask('test_front', ['jshint:front', 'mocha_phantomjs']);
    grunt.registerTask('test_back', ['jshint:back', 'mochacli']);
    grunt.registerTask('build', ['clean:dist', 'requirejs', 'clean:rjs']);
};