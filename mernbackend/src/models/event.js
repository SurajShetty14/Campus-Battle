const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   usn:{
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   phone: {
      type: String,
      required: true
   },
   branch: {
      type: String,
      required: true
   },
   eventName: {
      type: String,
      required: true
   } // Added field for event name
 });

 const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
