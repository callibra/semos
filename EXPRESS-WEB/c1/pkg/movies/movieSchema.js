const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Mora da ima naslov'],
    trim: true, // trim gi brishe praznite mesta
    minlength: 1,
    maxlength: [255, 'Naslovot e preolg'],
  },
  year: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear(),
  },
  genre: {
    type: String,
    enum: ['Action', 'Comedy', 'Drama', 'Fantasy'],
  },
  slika: {
    type: String,
    default: 'default.jpg',
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
