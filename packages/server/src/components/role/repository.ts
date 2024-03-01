import { Role, IRole } from "./mongoose"

export class RoleRepository {
    getRole = async () => {
        const role = await Role.find({});
        return role
    }
    createRole = async (role: IRole) => {
        const roleModel = new Role(role);
        const result = await roleModel.save();
        return result;
    }
    updateRole = async (role: IRole) => {
        const result = await Role.findOneAndUpdate({id: role.id}, role);
        return result;
    }
    deleteRole = async (roleId: String) => {
        const result = await Role.findOneAndDelete({id: roleId});
        return result;
    }
    getRoleById = async (roleId: String) => {
        const result = await Role.findOne({id: roleId});
        return result;
    }
    getRoleByName = async (roleName: String) => {
        const result = await Role.findOne({name: roleName});
        return result;
    }
}