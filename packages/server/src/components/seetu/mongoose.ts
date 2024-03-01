import { Schema, model } from "mongoose";

export interface ISeetu {
    id: String;
    userId: String;
    name: String;
    amountPaid: Number
    dueDate: Date;
    isCompleted : Boolean;
    createdBy: String;
    createdDate: String;
    updatedBy: String;
    updatedDate: String;
    deletedBy: String;
    deletedDate: String;
  }


  const SeetuSchema = new Schema<ISeetu>({
    id: { type: String, required: true, unique: true, index: true },
    userId: { type: String },
    name: { type: String },
    amountPaid: { type: Number },
    dueDate: { type: Date },
    isCompleted: { type: Boolean },
    createdBy: {type: String},
    createdDate: {type: String},
    updatedBy: {type: String},
    updatedDate: {type: String},
    deletedBy: {type: String},
    deletedDate: {type: String}
     });

  export const Seetu = model<ISeetu>('seetu', SeetuSchema, 'seetu');
