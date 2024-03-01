import { RoleRepository, RoleService } from "../role";
import { UserInfoRepository, UserInfoService } from "../user-info";
import { IUser } from "./mongoose";
import { UserRepository } from "./repository";
import { UserService } from "./service";

export const userResolvers = {
    Query: {
        getUsers: async () => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            const users = userService.getUsers();
            return users;
        },

        getUserById: async (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            const user = userService.getUserById(args.id);
            return user;
        },
        getUserByPhone: async (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            const user = await userService.getUserByPhone(args.phone);
            return user;
        },
        testReferenceNo: async () => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            const users = await userService.testReferenceNo();
            return users;
        },
    },
    Mutation: {
        createUser: (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            return userService.createUser(args.userInput);
        },
        createUserByAdmin: (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            return userService.createUserByAdmin(args.userByAdminInput);
        },
        updateUser: (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            return userService.updateUser(args.userInput);
        },
        deleteUser: (_, args, context) => {
            const userRepo = new UserRepository();
            const userService = new UserService(userRepo);
            return userService.deleteUser(args.id);
        }
    },
    UserResult: {
        role: async (parent, args, context) => {
            const roleRepo = new RoleRepository();
            const roleService = new RoleService(roleRepo);
            const result = await roleService.getRoleById(parent.roleId);
            return result;
        },
        userInfo: async (parent, args, context) => {
            const userInfoRepo = new UserInfoRepository();
            const userInfoService = new UserInfoService(userInfoRepo);
            const result = await userInfoService.getUserInfoByUserId(parent.id);
            return result;
        }
    }
}