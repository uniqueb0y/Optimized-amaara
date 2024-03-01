import { Schema, model } from "mongoose";

export interface INotification {
    id: String;
    sentBy: String;
    sentTo: String;
    sentDate: String;
    message: String;
  }


  const notificationSchema = new Schema<INotification> ({
    id: { type: String, required: true, unique: true, index: true },
    sentBy: { type: String, required: true },
    sentTo: { type: String, required: false, default: null },
    sentDate: { type: String, required: true },
    message: { type: String, required: true },
  });

  export const Notification = model<INotification>('notification', notificationSchema, 'notification');