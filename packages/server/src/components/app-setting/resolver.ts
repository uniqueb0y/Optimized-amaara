import { IAppSetting } from "./mongoose";
import { AppSettingRepository } from "./repository";
import { AppSettingService } from "./service";

export const appSettingResolvers = {
    Query: {
        getAppSetting: () => {
            const appSettingRepo = new AppSettingRepository();
            const appSettingService = new AppSettingService(appSettingRepo);
            const appSetting = appSettingService.getAppSetting();
            return appSetting;
        },
    },
    Mutation: {
        createAppSetting: (_, args, context ) => {
            const appSettingRepo = new AppSettingRepository();
            const appSettingService = new AppSettingService(appSettingRepo);
            return appSettingService.createAppSetting(args.appSettingInput);
        },
        updateAppSetting: (_, args, context) => {
            const appSettingRepo = new AppSettingRepository();
            const appSettingService = new AppSettingService(appSettingRepo);
            return appSettingService.updateAppSetting(args.appSettingInput);
    },
}}