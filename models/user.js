const mongoose = require('mongoose');
// const Band = require('../band.js');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: String,
  image: String,
  content: String,
  rating: Number,
  genre: String
});

const userSchema = new Schema({
  firstName: {type:String, required: true},
  lastName: {type:String, required: true},
  userName: {type:String, required: true, unique: true},
  vluchtnummer: {type:String, required: true},
  downloaded_stories: [storySchema]
});


  module.exports = mongoose.model('User', userSchema);
