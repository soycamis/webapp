'use strict';

var User,
	UsersSchema,
	PlacesSchema = require('./places').PlacesSchema,
	mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

UsersSchema = new Schema({
    createAt    : {type: Date, 'default': Date.now},
    photo       : {type: String},
    provider    : {type: String},
    provider_id : {type: String, unique: true},
    username    : {type: String, unique: true, required: true},
    token       : {type: String},
    tokenSecret : {type: String},
    places      : [PlacesSchema]
});

UsersSchema.statics.findOrCreate = function (profile, done) {
    this.findOne({provider_id: profile.provider_id}, function (err, user) {
        if (err) { return done(err); }
        if (user) { return done(null, user); }

        user = new User(profile);
        user.save(done);
    });
};

User = module.exports = mongoose.model('user', UsersSchema);