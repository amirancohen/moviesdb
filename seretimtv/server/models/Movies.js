const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
});

const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = Movie;