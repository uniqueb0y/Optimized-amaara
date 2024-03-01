var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommunityRole = new Schema({
  id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});