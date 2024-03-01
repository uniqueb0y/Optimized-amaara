//import { RoleType } from '@amaaraseetu/types';
import { RoleRepository, RoleService } from '../role';
import { UserInfoRepository, UserInfoService } from '../user-info';
import { IUser } from './mongoose';
import { UserRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
    userRepository: UserRepository;
    constructor(_userRepository: UserRepository) {
        this.userRepository = _userRepository;
    }
    getUsers = () => {
        return this.userRepository.getUsers();
    }

    getUserById = (userId: String) => {
      const result = this.userRepository.getUserById(userId);
      return result;
    }
    getUserByPhone = async (phone: string) => {
        if (!phone) return null;
        let user = await this.userRepository.findByPhone(phone);
        if (!user) user = await this.createUserByPhone(phone);
        return user;
    }
    createUser = async (user: IUser) => {
        user.id = uuidv4();
        const result = await this.userRepository.createUser(user);
        return result;
    }
    updateUser = (user: IUser) => {
        const result = this.userRepository.updateUser(user);
        return result;
    }
    deleteUser = (userId: String) => {
        const result = this.userRepository.deleteUser(userId);
        return result;
    }

    testReferenceNo = async () =>
    {
        const result = await this.generateReferenceNo();
        return result;
    }

    generateReferenceNo = async() =>
    {
        const result = await this.userRepository.getSortedUsers();
        //console.log(result);
        let lastReferenceNo = result[0]?.referenceNo;
        //let lastReferenceNo = 'A00010';
        if (!lastReferenceNo)
        {
            lastReferenceNo = this.getReferenceNo('A',0);
        } else
        {
            const currentLetter = lastReferenceNo.slice(0, 1);
            const currentNumber = Number(lastReferenceNo.slice(1));
            //console.log(currentNumber);
            lastReferenceNo = this.getReferenceNo(currentLetter, currentNumber);
        }
       // console.log (lastReferenceNo);
        return lastReferenceNo;
    }

    getReferenceNo =  (currentLetter: string, currentNumber : number) =>
    {
        currentNumber += 1;
        if (currentNumber > 99999) {
        currentLetter = this.incrementLetter(currentLetter);
        currentNumber = 1;
        }
        return `${currentLetter}${String(currentNumber).padStart(5, '0')}`;
    }

     incrementLetter= (letter:string) => {
        if (letter === 'Z') {
          throw new Error("Reached the maximum reference number with Z99999.");
        }
        return String.fromCharCode(letter.charCodeAt(0) + 1);
      }

    createUserByPhone = async (phone: string) => {
        const normalRole = await new RoleService(new RoleRepository()).getRoleByName('NORMAL');
        const referenceNo = await this.generateReferenceNo();
        const user: IUser = {
            id: uuidv4(),
            phoneNo: phone,
            referenceNo: referenceNo,
            roleId: normalRole.id,
            isActive: true,
            createdBy: 'login',
            createdDate: new Date().toString(),
            updatedBy: 'login',
            updatedDate: new Date().toString(),
            blockedBy: null,
            blockedDate: null,
            deletedBy: null,
            deletedDate: null,
        }
        const result = await this.createUser(user);
        const userInfoService = new UserInfoService(new UserInfoRepository());
        await userInfoService.createUserInfo({
            id: uuidv4(),
            userId: user.id,
            firstName: null,
            lastName: null,
            phoneNo: phone,
            dateOfBirth: null,
            emergencyPhoneNo: null,
            addressProofOne: null,
            addressProofTwo: null,
            image: null,
            isKycDone: false,
            createdBy: user.id,
            createdDate: new Date().toString(),
            updatedBy: user.id,
            updatedDate: new Date().toString(),
        });
        return result;
    }

    createUserByAdmin = async (userInput: any) => {
        const normalRole = await new RoleService(new RoleRepository()).getRoleByName('NORMAL');
        const referenceNo = await this.generateReferenceNo();
        const user: IUser = {
            id: uuidv4(),
            phoneNo: userInput.phoneNo,
            referenceNo: referenceNo,
            roleId: normalRole.id,
            isActive: true,
            createdBy: userInput.createdBy,
            createdDate: new Date().toString(),
            updatedBy: userInput.createdBy,
            updatedDate: new Date().toString(),
            blockedBy: null,
            blockedDate: null,
            deletedBy: null,
            deletedDate: null,
        }
        const result = await this.createUser(user);

        const userInfoService = new UserInfoService(new UserInfoRepository());
        await userInfoService.createUserInfo({
            id: uuidv4(),
            userId: user.id,
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            phoneNo: userInput.phoneNo,
            dateOfBirth: userInput.dateOfBirth,
            emergencyPhoneNo: userInput.emergencyPhoneNo,
            addressProofOne: userInput.addressProofOne,
            addressProofTwo: userInput.addressProofTwo,
            image: null,
            isKycDone: true,
            createdBy: userInput.createdBy,
            createdDate: new Date().toString(),
            updatedBy: userInput.createdBy,
            updatedDate: new Date().toString(),
        });
        return result;
    }
}