require.config({
    baseUrl: '../',
    urlArgs: 'bust=' +  (new Date()).getTime(),
    paths: {
        'mocha' : 'test/lib/mocha',
        'chai'  : 'test/lib/chai',
        'jquery'    : 'app/vendor/jquery/jquery',
        'underscore': 'app/vendor/underscore-amd/underscore',
        'backbone'  : 'app/vendor/backbone-amd/backbone',
        'text'      : 'app/vendor/text/text',
        'Handlebars': 'app/vendor/handlebars/handlebars'
    },
    shim: {
        'mocha': {
            exports: 'mocha'
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    'use strict';

    mocha.setup('bdd');

    require(['test/app/test'], function () {
        (window.mochaPhantomJS || mocha).run();
    });
});