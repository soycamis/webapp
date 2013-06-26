define(
    [
        'underscore',
        'backbone',
        'leaflet'
    ], 
    function(_, Backbone, L) {
        'use strict';

        var MapView;

        MapView = Backbone.View.extend({
            id: 'map',
            tagName: 'div',
            initialize: function() {
                this.createMap();
            },
            createMap: function() {
                var map;

                map = L.map(this.id).setView([51.505, -0.09], 13);

                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: 'Openstreetmaps'
                }).addTo(map);
            }
        });

        return MapView;
    }
);