require.config({
    baseUrl: '../',
    urlArgs: 'bust=' +  (new Date()).getTime(),
    paths: {
        'jquery'    : 'app/vendor/jquery/jquery',
        'underscore': 'app/vendor/underscore-amd/underscore',
        'backbone'  : 'app/vendor/backbone-amd/backbone',
        'leaflet'   : 'app/vendor/leaflet/dist/leaflet',
        'text'      : 'app/vendor/text/text',
        'Handlebars': 'app/vendor/handlebars/handlebars'
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        },
        'leaflet': {
            exports: 'L'
        }
    }
});

require(
    [
        'jquery',
        'underscore',
        'backbone',
        'leaflet',
        'app/views/map'
    ],
    function ($, _, Backbone, L, MapView) {
        'use strict';

        var app = {};

        function initialize() {
            app.map = new MapView();
        }

        $(document).on('ready', initialize);
    }
);