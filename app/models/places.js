var Places,
    PlacesSchema,
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

PlacesSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    geo: {
        type: { type: String, required: true },
        coord: { type: Array, required: true }
    }
});

Places = mongoose.model('places', PlacesSchema);

module.exports = exports = Places;