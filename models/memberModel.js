const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  position: String,
  imageUrl: String,
  socialLinks: {
    facebook: String,
    linkedin: String,
    instagram: String
  }
});

module.exports = mongoose.model('Member', memberSchema);
