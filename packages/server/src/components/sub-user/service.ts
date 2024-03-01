import { ISubUser } from './mongoose';
import { SubUserRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';
import { UserRepository , UserService} from '../user';

export class SubUserService {
    
    subUserRepository: SubUserRepository;
    constructor(_subUserRepository: SubUserRepository) {
        this.subUserRepository = _subUserRepository;
    }

    getSubUsers = () => {
        return this.subUserRepository.getSubUsers();
    }

    getSubUserById = (subUserId: String) => {
      const result = this.subUserRepository.getSubUserById(subUserId);
      return result;
    }

    getSubUserByParentId = (parentId: String) => {
        const result = this.subUserRepository.getSubUserByParentId(parentId);
        return result;
      }
    createSubUser = async (subUser: ISubUser) => {
        //subUser.id = uuidv4();
        const referenceNo = await this.generateSubUserReferenceNo(subUser.parentId);
        // console.log (phone);
          const newSubUser: ISubUser = {
              id: uuidv4(),
              parentId : subUser.parentId, 
              firstName: subUser.firstName,
              lastName: subUser.lastName,
              relation : subUser.relation,
              dob: subUser.dob,
              referenceNo: referenceNo,
              createdBy: subUser.createdBy,
              createdDate: new Date().toString(),
              updatedBy: subUser.updatedBy,
              updatedDate: new Date().toString(),
          }
        const result = await this.subUserRepository.createSubUser(newSubUser);
        return result;
    }
    updateSubUser = (subUser: ISubUser) => {
        const result = this.subUserRepository.updateSubUser(subUser);
        return result;
    }
    deleteSubUser = (subUserId: String) => {
        const result = this.subUserRepository.deleteSubUser(subUserId);
        return result;
    }

    generateSubUserReferenceNo = async(parentId: String) =>
    {
        const result = await this.subUserRepository.getSortedSubUsers(parentId);
        console.log(result);
        let lastReferenceNo = result[0]?.referenceNo;
        //console.log(lastReferenceNo);
        //console.log(Number(lastReferenceNo.slice(7,10)));
        if (!lastReferenceNo)
        {
            lastReferenceNo = await this.getReferenceNo(parentId,0);
        } else
        {

            const currentNumber = Number(lastReferenceNo.slice(7,10));
          //  console.log(currentNumber+ " 111111");
            lastReferenceNo = await this.getReferenceNo(parentId,currentNumber);
        }

        //console.log (lastReferenceNo+"2222222");
        return lastReferenceNo;
    }

     getReferenceNo =  async ( parentId : String ,currentNumber : number) =>
    {
        currentNumber += 1;
        /*if (currentNumber > 99999) {
        currentNumber = 1;
        }*/
        const parentReferenceNo = await this.getParentReferenceNo(parentId);
        return `${parentReferenceNo}${'-'}${String(currentNumber).padStart(3, '0')}`;
        //console.log (abc);
        //return abc;
    }
    
    async getParentReferenceNo(parentId : String) {
        const userService = new UserService(new UserRepository());
        const userResult = await userService.getUserById(parentId);
        const result = userResult.referenceNo;
        //console.log (result + "A");
        return result; 
    }

    
}