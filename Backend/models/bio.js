const mongoose = require('mongoose');

const BioSchema = new mongoose.Schema({
  bio: {
    type: String,
    required: true,
  }
});

const Bio = mongoose.model("Bio", BioSchema);
module.exports = Bio;