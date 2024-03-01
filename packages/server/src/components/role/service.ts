import { IRole } from './mongoose';
import { RoleRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class RoleService {
    roleRepository: RoleRepository;
    constructor(_roleRepository: RoleRepository) {
        this.roleRepository = _roleRepository;
    }
    getRole = () => {
        return this.roleRepository.getRole();
    }
    createRole = (role: IRole) => {
        role.id = uuidv4();
        const result = this.roleRepository.createRole(role);
        return result;
    }
    updateRole = (role: IRole) => {
        const result = this.roleRepository.updateRole(role);
        return result;
    }
    deleteRole = (roleId: String) => {
        const result = this.roleRepository.deleteRole(roleId);
        return result;
    }
    getRoleById = (roleId: String) => {
        const result = this.roleRepository.getRoleById(roleId);
        return result;
    }
    getRoleByName = async (roleName: String) => {
        const result = await this.roleRepository.getRoleByName(roleName);
        return result;
    }
}