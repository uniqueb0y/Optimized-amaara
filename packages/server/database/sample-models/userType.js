var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Badge = new Schema({
  id: {
    type: String,
    required: true
  },
    type : {
    type: String,
    required: true
  }
});