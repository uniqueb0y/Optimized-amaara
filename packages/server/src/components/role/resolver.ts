import { IRole } from "./mongoose";
import { RoleRepository } from "./repository";
import { RoleService } from "./service";

export const roleResolvers = {
    Query: {
        getRole: async () => {
            const roleRepo = new RoleRepository();
            const roleService = new RoleService(roleRepo);
            const role = roleService.getRole();
            return role;
        },
    },
    Mutation: {
        createRole: (_, args, context) => {
            const roleRepo = new RoleRepository();
            const roleService = new RoleService(roleRepo);
            return roleService.createRole(args.roleInput);
        },
        updateRole: (_, args, context) => {
            const roleRepo = new RoleRepository();
            const roleService = new RoleService(roleRepo);
            return roleService.updateRole(args.roleInput);
        },
        deleteRole: (_, args, context) => {
            const roleRepo = new RoleRepository();
            const roleService = new RoleService(roleRepo);
            return roleService.deleteRole(args.id);
        }
    }
}