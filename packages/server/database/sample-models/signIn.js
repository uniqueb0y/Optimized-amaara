var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = new Schema({
  id: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  Otp: {
    type: String,
    required : true 
  }
});