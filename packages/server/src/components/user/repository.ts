import { get } from "http";
import { User, IUser } from "./mongoose"

export class UserRepository {
    getUsers = async () => {
        const users = await User.find({});
        return users;
    }

    getUserById = async (userId: String) => {
        const result = await User.findOne({ id: userId })
        return result;

    }
    findByPhone = async (phone: String) => {
        const result = await User.findOne({ phoneNo: phone });
        return result;
    }
    createUser = async (user: IUser) => {
        const userModel = new User(user);
        const result = await userModel.save();
        return result;
    }
    updateUser = async (user: IUser) => {
        const result = await User.findOneAndUpdate({ id: user.id }, user, { new: true });
        return result;
    }
    deleteUser = async (userId: String) => {
        const result = await User.findOneAndDelete({ id: userId });
        return result;
    }

    getSortedUsers = async () => {
        const result = await User.find({}).sort({createdDate : -1});
        //console.log(result);
        return result;
    }
}