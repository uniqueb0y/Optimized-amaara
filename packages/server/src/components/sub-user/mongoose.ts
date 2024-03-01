import { Schema, model } from "mongoose";

export interface ISubUser {
    id: String;
    parentId: String;
    firstName: String;
    lastName: String;
    relation: String;
    dob: String;
    referenceNo: String;
    createdBy: String;
    createdDate: String;
    updatedBy: String;
    updatedDate: String;
  }


  const subUserSchema = new Schema<ISubUser> ({
    id: { type: String, unique: true, index: true },
    parentId: { type: String, default : null },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    relation: { type: String, default: null},
    dob: { type: String, default: null},
    referenceNo: { type: String, unique: true },
    createdBy: { type: String, default: null },
    createdDate: { type: String, default: null },
    updatedBy: { type: String, default: null },
    updatedDate: { type: String, default: null },
  });

  export const SubUser = model<ISubUser>('subUser', subUserSchema, 'subUser');