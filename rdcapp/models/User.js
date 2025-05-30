const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  healthStatus: String,
  coughAudioPath: String,
  speechAudioPath: String
});

module.exports = mongoose.model('User', userSchema);
