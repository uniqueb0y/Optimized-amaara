import { IAppSetting } from './mongoose';
import { AppSettingRepository } from './repository';
//import { v4 as uuidv4 } from 'uuid';

export class AppSettingService {
    appSettingRepository: AppSettingRepository;
    constructor(_appSettingRepository: AppSettingRepository) {
        this.appSettingRepository = _appSettingRepository;
    }
    getAppSetting = () => {
        return this.appSettingRepository.getAppSetting();
    }
    createAppSetting = (appSetting: IAppSetting) => {
        const result = this.appSettingRepository.createAppSetting(appSetting);
        return result;
    }
    updateAppSetting = (appSetting: IAppSetting) => {
        const result = this.appSettingRepository.updateAppSetting(appSetting);
        return result;
    }
}