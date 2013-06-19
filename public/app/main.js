require.config({
    baseUrl: '../',
    urlArgs: 'bust=' +  (new Date()).getTime(),
    paths: {
        'jquery'    : 'app/vendor/jquery/jquery',
        'underscore': 'app/vendor/underscore-amd/underscore',
        'backbone'  : 'app/vendor/backbone-amd/backbone',
        'text'      : 'app/vendor/text/text',
        'Handlebars': 'app/vendor/handlebars/handlebars'
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([], function () {
    'use strict';

    console.log('Helloooo!!');
});