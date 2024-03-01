import { IUserInfo } from './mongoose';
import { UserInfoRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class UserInfoService {
    userInfoRepository: UserInfoRepository;
    constructor(_userInfoRepository: UserInfoRepository) {
        this.userInfoRepository = _userInfoRepository;
    }
    getUserInfo = () => {
        return this.userInfoRepository.getUserInfo();
    }

    getUserInfoById = (userInfoId: String) => {
        const result = this.userInfoRepository.getUserInfoById(userInfoId);
        return result;
    }
    getUserInfoByUserId = (userId: String) => {
        const result = this.userInfoRepository.getUserInfoByUserId(userId);
        return result;
    }
    createUserInfo = (userInfo: IUserInfo) => {
        userInfo.id = uuidv4();
        const result = this.userInfoRepository.createUserInfo(userInfo);
        return result;
    }
    updateUserInfo = (userInfo: IUserInfo) => {
        userInfo.updatedDate = new Date().toDateString();
        userInfo.updatedBy = userInfo.userId;
        const result = this.userInfoRepository.updateUserInfo(userInfo);
        return result;
    }
    deleteUserInfo = (userInfoId: String) => {
        const result = this.userInfoRepository.deleteUserInfo(userInfoId);
        return result;
    }
}