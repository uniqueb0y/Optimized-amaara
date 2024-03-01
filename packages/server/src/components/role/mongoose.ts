import { Schema, model } from "mongoose";

export interface IRole {
    id: String;
    name: String;
  }


  const roleSchema = new Schema<IRole> ({
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true }
  });

  export const Role = model<IRole>('Role', roleSchema, 'role');