var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserRole = new Schema({
  id: {
    type: Schema.Types.Mixed,
    required: true
  },
  notificationDescription: {
    type: String,
    required: true
  }
});