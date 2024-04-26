const mongoose = require('mongoose');

const academySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const Academy = mongoose.model('Academy', academySchema);

module.exports = Academy;
