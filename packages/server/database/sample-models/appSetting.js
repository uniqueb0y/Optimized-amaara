var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserRole = new Schema({
  id: {
    type: Schema.Types.Mixed,
    required: true
  },
  appName: {
    type: String,
    required: true
  },
  tagLine: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  supportEmail: {
    type: String,
    required: true
  }
});