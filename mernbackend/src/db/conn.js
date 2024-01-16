const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sports")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });
