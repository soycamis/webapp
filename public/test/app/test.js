/*jshint expr: true*/
define([
        'chai',
        'app/models/place'
    ], function (Chai, PlaceModel) {
        'use strict';

        var expect = Chai.expect;

        describe('#Model.Place', function () {
            describe('@Constructor', function () {
                it('PlaceModel is ok', function () {
                    expect(new PlaceModel()).to.be.ok;
                });

                it('place should instance PlaceModel', function () {
                    var place = new PlaceModel();
                    expect(place).to.be.instanceOf(PlaceModel);
                });
            });

            describe('@Attributes', function () {
                it('sets passed attributes', function () {
                    var place = new PlaceModel({
                        name: 'Salto de jimenoa',
                        description: 'Este es un lugar bonito'
                    });

                    expect(place.get('name')).to.equal('Salto de jimenoa');
                });
            });
        });
    });