const mongoose = require("mongoose");

const profileReg = new mongoose.Schema({
    name : { 
        type:String,
        required:true
    },
    usn : {         
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique: true
    },
    phone : { 
        type:String,
        required:true
    },
    branch : {
        type:String,
        required:true
    }
});

const Upload = new mongoose.model("Upload", profileReg);

module.exports = Upload;