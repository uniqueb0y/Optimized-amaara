import { IUserInfo } from "./mongoose";
import { UserInfoRepository } from "./repository";
import { UserInfoService } from "./service";

export const userInfoResolvers = {
    Query: {
        getUserInfo: async () => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            const userInfo = userInfoService.getUserInfo();
            return userInfo;
        },
        getUserInfoById: async (_, args, context) => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            const userInfo = userInfoService.getUserInfoById(args.id);
            return userInfo;
        },
    },
    Mutation: {
        createUserInfo: (_, args, context) => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            return userInfoService.createUserInfo(args.userInfoInput);
        },
        updateUserInfo: (_, args, context) => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            return userInfoService.updateUserInfo(args.userInfoInput);
        },
        deleteUserInfo: (_, args, context) => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            return userInfoService.deleteUserInfo(args.id);
        }
    }
}