require.config({
    baseUrl: '../',
    urlArgs: 'bust=' +  (new Date()).getTime(),
    paths: {
        'mocha': 'test/lib/mocha',
        'chai' : 'test/lib/chai'
    },
    shim: {
        'mocha': {
            exports: 'mocha'
        }
    }
});

require(['require', 'mocha'], function (require, mocha) {
    'use strict';

    mocha.setup('bdd');

    require([], function () {
        (window.mochaPhantomJS || mocha).run();
    });
});