import { SubUser, ISubUser } from "./mongoose"

export class SubUserRepository {
    getSubUsers = async () => {
        const subUsers = await SubUser.find({});
        return subUsers;
    }

    getSubUserById = async (subUserId: String) => {
        const result = await SubUser.findOne({ id: subUserId })
        return result;

    }

    getSubUserByParentId = async (subUserParentId: String) => {
        //console.log(subUserParentId);
        const result = await SubUser.find({ parentId: subUserParentId })
        //console.log(result);
        return result;

    }

    getParentReferenceNo = async () =>
    {
        const result = await SubUser.find ()
    }
    createSubUser = async (subUser: ISubUser) => {
        const subUserModel = new SubUser(subUser);
        const result = await subUserModel.save();
        return result;
    }
    updateSubUser = async (subUser: ISubUser) => {
        const result = await SubUser.findOneAndUpdate({ id: subUser.id }, subUser, { new: true });
        return result;
    }
    deleteSubUser = async (subUserId: String) => {
        const result = await SubUser.findOneAndDelete({ id: subUserId });
        return result;
    }

    getSortedSubUsers = async (parentId: String) => {
        const result = await SubUser.find({ parentId: parentId }).sort({createdDate : -1});
        return result;
    }

}