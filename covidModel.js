var mongoose = require('mongoose');

//schema
var covidSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    casos_novos: {
        type: Number,
        required: true
    },
    casos_internados: {
        type: Number,
        required: true
    }
});

// Export Covid Model
var Covid = module.exports = mongoose.model('covid', covidSchema);

module.exports.get = function (callback, limit) {
   Covid.find(callback).limit(limit); 
}