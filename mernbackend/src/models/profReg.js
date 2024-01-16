
const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  usn: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: false // Allow for null values
  },
  phone: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Upload', UploadSchema);