const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: String,
  image: String,
  content: String,
  rating: Number,
  genre: String, 
  path: String
});


const Story = module.exports = mongoose.model('Story', storySchema);
