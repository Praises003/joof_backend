const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({
  name: String,
  position: String,
  imageUrl: String,
  socialLinks: {
    facebook: String,
    linkedin: String,
    instagram: String
  }
});

module.exports = mongoose.model('Management', managementSchema);
