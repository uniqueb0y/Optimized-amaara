import { RoleRepository, RoleService } from "../role";
import { ISubUser } from "./mongoose";
import { SubUserRepository } from "./repository";
import { SubUserService } from "./service";

export const subUserResolvers = {
    Query: {
        getSubUsers: async () => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            const subUsers = subUserService.getSubUsers();
            return subUsers;
        },

        getSubUserById: async (_, args, context) => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            const subUser = subUserService.getSubUserById(args.id);
            return subUser;
        },

        getSubUserByParentId: async (_, args, context) => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            const subUser = await subUserService.getSubUserByParentId(args.parentId);
            return subUser;
        },
    },
    Mutation: {
        createSubUser: (_, args, context) => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            return subUserService.createSubUser(args.subUserInput);
        },
        updateSubUser: (_, args, context) => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            return subUserService.updateSubUser(args.subUserInput);
        },
        deleteSubUser: (_, args, context) => {
            const subUserRepo = new SubUserRepository();
            const subUserService = new SubUserService(subUserRepo);
            return subUserService.deleteSubUser(args.id);
        }
    }
}