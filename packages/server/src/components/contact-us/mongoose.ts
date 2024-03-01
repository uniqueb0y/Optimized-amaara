import { Schema, model } from "mongoose";

export interface IContactUs {
    id: String,
    firstName: String;
    lastName: String;
    phone: String;
    email: String;
    message: String;
    date: String
  }


  const contactUsSchema = new Schema<IContactUs>({
    id: { type: String, required: true, unique: true, index: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: String, default: null },
  });

  export const ContactUs = model<IContactUs>('ContactUs', contactUsSchema, 'contactUs');
