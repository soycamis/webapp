require('./utils');

var ValidationError = require('mongoose').Error.ValidationError,
    Places          = require('../app/models/places'),
    expect          = require('chai').expect;

describe('#Places', function () {
    'use strict';

    beforeEach(function () {
        this.place = new Places({
            name: 'Salto Jimenoa',
            description: 'Este es un lugar bonito',
            geo: {
                type: 'Point',
                coord: [231, 345]
            }
        });
    });

    describe('@Constructor', function () {
        it('place should a instance Places', function () {
            expect(this.place).to.be.a.instanceOf(Places);
        });
    });

    describe('@Atributtes', function () {
        it('place should have attr', function () {
            expect(this.place.name).to.equal('Salto Jimenoa');
            expect(this.place.description).to.equal('Este es un lugar bonito');
        });

        it('place geo should is object', function () {
            expect(this.place.geo).to.be.an('object');
        });

        it('place.geo should have type and coord ', function () {
            expect(this.place.geo).to.contain.keys('type', 'coord');
        });

        it('place.geo type should match [Point]', function () {
            expect(this.place.geo.type).to.match(/^Point$/);
        });

        it('place.geo coord shoudl is an Array', function () {
            expect(this.place.geo.coord).to.be.an('array');
        });
    });

    describe('@Save', function () {
        it('should return throw if geo not exists', function (done) {
            this.place.geo = undefined;

            this.place.save(function (err) {
                expect(err).to.be.a.instanceOf(ValidationError);
                done();
            });
        });

        it('should save place', function (done) {
            this.place.save(done);
        });
    });

    afterEach(function () {
        this.place = null;
    });
});