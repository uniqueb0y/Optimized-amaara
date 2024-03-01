import { Schema, model } from "mongoose";

export interface IRaffle {
  id: String;
  winnerName: String;
  month: String;
  year: String;
  image: String;
  link : String;
  createdBy: String;
  createdDate: String;
  deletedBy: String;
  deletedDate: String;
}


const RaffleSchema = new Schema<IRaffle> ({
  id: { type: String, unique: true, index: true },
  winnerName: { type: String,required : true },
  month: { type: String , default: null,required : true},
  year: { type: String,default: null,required : true},
  image: { type: String,default: null},
  link: { type: String,default: null},
  createdBy: { type: String,default: null },
  createdDate: { type: String ,default: null},
  deletedBy: { type: String ,default: null},
  deletedDate: { type: String ,default: null}
});

  export const Raffle = model<IRaffle>('raffle', RaffleSchema, 'raffle');
