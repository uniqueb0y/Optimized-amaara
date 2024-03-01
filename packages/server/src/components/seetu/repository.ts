import { Seetu, ISeetu } from "./mongoose"

export class SeetuRepository {
    getSeetu = async () => {
        const result = await Seetu.find({});
        return result;
    }

    getSeetuById = async(seetuId : String) => {
        const result = await Seetu.findOne({id: seetuId})
        return result;

    }
    createSeetu = async (seetu: ISeetu) => {
        const seetuModel = new Seetu(seetu);
        const result = await seetuModel.save();
        return result;
    }

    updateSeetu = async (seetu: ISeetu) => {
        const result = await Seetu.findOneAndUpdate({id: seetu.id}, seetu, {new : true});
        return result;
    }

    deleteSeetu = async (seetuId: String) => {
        const result = await Seetu.findOneAndDelete({id: seetuId});
        return result;
    }
}