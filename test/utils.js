/*jshint loopfunc: true */
'use strict';

var mongoose = require('mongoose'),
    DB       = 'mongodb://localhost:27017/test';
process.env.NODE_ENV = 'test';

beforeEach(function (done) {
    function clearDB() {
        var i, collections;

        collections = mongoose.connection.collections;

        for (i in collections) {
            if (collections.hasOwnProperty(i)) {
                mongoose.connection.collections[i].remove(function () {});
            }
        }

        return done();
    }

    function reconnect() {
        mongoose.connect(DB, function (err) {
            if (err) { throw err; }
            return clearDB();
        });
    }

    function checkState() {
        switch(mongoose.connection.readyState) {
        case 0:
            reconnect();
            break;
        case 1:
            clearDB();
            break;
        default:
            process.nextTick(checkState);
        }
    }

    checkState();
});

afterEach(function (done) {
    mongoose.disconnect();
    return done();
});