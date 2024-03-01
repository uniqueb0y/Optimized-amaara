import { Schema, model } from "mongoose";

export interface IPromotion {
    id: String;
    name: String;
    image: String
    isActive: Boolean;
    createdBy: String;
    createdDate: String;
    updatedBy: String;
    updatedDate: String;
    deletedBy: String;
    deletedDate: String;
  }


  const promotionSchema = new Schema<IPromotion> ({
    id: { type: String, unique: true, index: true },
    name: { type: String, required : true },
    image: { type: String, default: null },
    isActive: { type: Boolean, default: true},
    createdBy: { type: String, default: null },
    createdDate: { type: String, default: null },
    updatedBy: { type: String, default: null },
    updatedDate: { type: String, default: null },
    deletedBy: { type: String, default: null },
    deletedDate: { type: String, default: null }
  });

  export const Promotion = model<IPromotion>('promotion', promotionSchema, 'promotion');