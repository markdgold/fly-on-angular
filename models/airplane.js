var mongoose = require('mongoose');

var AirplaneSchema = new mongoose.Schema({
    manufacturer: String,
    model: String,
    engines: Number,
    image: String
});

var Airplane = mongoose.model('Airplane', AirplaneSchema);

module.exports = Airplane;
