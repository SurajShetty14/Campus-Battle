const mongoose = require("mongoose");
const registrationSchema = new mongoose.Schema({
    eventName: String,
    profileDetails: Object
  });
  const Registration = mongoose.model('Registration', registrationSchema);