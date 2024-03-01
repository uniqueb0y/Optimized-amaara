import { UserInfo, IUserInfo } from "./mongoose"

export class UserInfoRepository {
    getUserInfo = async () => {
        const userInfo = await UserInfo.find({});
        return userInfo
    }

    getUserInfoById = async(userInfoId : String) => {
        const result = await UserInfo.findOne({id: userInfoId})
        return result;

    }
    getUserInfoByUserId = async (userId: String) => {
        const userInfoByUserId = await UserInfo.findOne({ userId: userId });
        return userInfoByUserId;
    }
    createUserInfo = async (userInfo: IUserInfo) => {
        const userInfoModel = new UserInfo(userInfo);
        const result = await userInfoModel.save();
        return result;
    }
    updateUserInfo = async (userInfo: IUserInfo) => {
        const result = await UserInfo.findOneAndUpdate({userId: userInfo.userId}, userInfo, {new : false});
        return result;
    }
    deleteUserInfo = async (userInfoId: String) => {
        const result = await UserInfo.findOneAndDelete({id: userInfoId});
        return result;
    }
}