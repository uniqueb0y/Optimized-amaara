import { Schema, model } from "mongoose";

export interface IUserInfo {
    id: String;
    userId: String;
    firstName: String;
    lastName: String;
    phoneNo : String;
    emergencyPhoneNo : String;
    dateOfBirth: String;
    addressProofOne: String;
    addressProofTwo: String;
    image: String;
    isKycDone: Boolean;
    createdBy: String;
    createdDate: String;
    updatedBy: String;
    updatedDate: String;
  }


  const userInfoSchema = new Schema<IUserInfo> ({
    id: { type: String, required: true, unique: true, index: true },
    userId: { type: String, required: true },
    phoneNo: { type: String, required: true },
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    emergencyPhoneNo: { type: String, default: null },
    dateOfBirth: { type: String, default: null },
    addressProofOne: { type: String, default: null },
    addressProofTwo: { type: String, default: null },
    image: { type: String, default: null },
    isKycDone: { type: Boolean, default: false },
    createdBy: { type: String, default: null },
    createdDate: { type: String, default: null },
    updatedBy: { type: String, default: null },
    updatedDate: { type: String, default: null }
  });

  export const UserInfo = model<IUserInfo>('userInfo', userInfoSchema, 'userInfo');