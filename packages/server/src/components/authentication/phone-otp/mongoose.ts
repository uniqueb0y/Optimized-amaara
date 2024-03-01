import { Schema, model } from "mongoose";

export interface IPhoneOtp {
    id: String;
    phone: Number;
    otp: Number;
    expiresIn: Number;
  }


  const phoneOtpSchema = new Schema<IPhoneOtp>({
    id: { type: String, required: true, unique: true, index: true },
    phone: { type: Number, required: true },
    otp: { type: Number },
    expiresIn: { type: Number },
  });

  export const PhoneOtp = model<IPhoneOtp>('phoneOtp', phoneOtpSchema, 'phoneOtp');
