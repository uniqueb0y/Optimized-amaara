var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventType = new Schema({
  id: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  amountPaid: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  }
});