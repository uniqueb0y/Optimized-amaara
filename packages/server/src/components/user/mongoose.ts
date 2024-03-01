import { Schema, model } from "mongoose";

export interface IUser {
    id: String;
    phoneNo: String;
    referenceNo: String;
    roleId: String;
    isActive: Boolean;
    createdBy: String;
    createdDate: String;
    updatedBy: String;
    updatedDate: String;
    blockedBy: String;
    blockedDate: String;
    deletedBy: String;
    deletedDate: String;
  }


  const userSchema = new Schema<IUser> ({
    id: { type: String, unique: true, index: true },
    phoneNo: { type: String, required : true },
    referenceNo: { type: String, default: null },
    roleId: { type: String, required: true, default: true },
    isActive: { type: Boolean, default: true},
    createdBy: { type: String, default: null },
    createdDate: { type: String, default: null },
    updatedBy: { type: String, default: null },
    updatedDate: { type: String, default: null },
    blockedBy: { type: String, default: null },
    blockedDate: { type: String, default: null },
    deletedBy: { type: String, default: null },
    deletedDate: { type: String, default: null }
  });

  export const User = model<IUser>('user', userSchema, 'user');