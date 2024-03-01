var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserInfo = new Schema({
  id: {
    type: Schema.Types.Mixed,
    required: true
  },
  
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  isMainAccount: {
    type: Boolean,
    required: 1
  },
  email: {
    type: String,
    required: true
  },
    authToken: {
    type: String,
    required: true
  },
    isActive:{
    type:Boolean,
    required : false,
  },
  createdBy: {
    type: Schema.Types.Mixed,
    required: true
  },
  createdDate: {
    type: String,
    required: true
  },
  updatedBy: {
    type: Schema.Types.Mixed,
    required: true
  },
  updatedDate: {
    type: String,
    required: true
  },
  blockedBy: {
    type: String,
    required: true
  },
  blockedDate: {
    type: String,
    required: true
  },
  deletedBy: {
    type: String,
    required: true
  },
  deletedDate: {
    type: String,
    required: true
  }
});