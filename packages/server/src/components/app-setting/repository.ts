import { AppSetting, IAppSetting } from "./mongoose"

export class AppSettingRepository {
    getAppSetting = async () => {
        const appSetting = await AppSetting.findOne();
        return appSetting;
    }
    createAppSetting = async (appSetting: IAppSetting) => {
        const appSettingModel = new AppSetting(appSetting);
        const result = await appSettingModel.save();
        return result;
    }
    updateAppSetting = async (appSetting: IAppSetting) => {
        const result = await AppSetting.findOneAndUpdate({id: appSetting.id}, appSetting, {new : false});
        return result;
    }
}