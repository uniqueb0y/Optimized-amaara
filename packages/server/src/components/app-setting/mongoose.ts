import { Schema, model } from "mongoose";

export interface IAppSetting {
  id: String;
  banner: String;
  promotionOne: String;
  promotionTwo: String;
  promotionThree: String;
  promotionFour: String;
  promotionFive: String;
  promotionSix: String;
  }


  const appSettingSchema = new Schema<IAppSetting>({
    id: { type: String, required: true },
    banner: { type: String, required: false, default: null },
    promotionOne: { type: String, required: false, default: null },
    promotionTwo: { type: String, required: false, default: null },
    promotionThree: { type: String, required: false, default: null },
    promotionFour: { type: String, required: false, default: null },
    promotionFive: { type: String, required: false, default: null },
    promotionSix: { type: String, required: false, default: null },
  });

  export const AppSetting = model<IAppSetting>('appSetting', appSettingSchema, 'appSetting');
