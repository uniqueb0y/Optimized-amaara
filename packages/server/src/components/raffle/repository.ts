import { Raffle, IRaffle } from "./mongoose"

export class RaffleRepository {
    getRaffle = async () => {
        const result = await Raffle.find({}).sort({createdDate : -1});
        return result;
    }
    createRaffle = async (raffle: IRaffle) => {
        const RaffleModel = new Raffle(raffle);
        const result = await RaffleModel.save();
        return result;
    }
    deleteRaffle = async (RaffleId: String) => {
        const result = await Raffle.findOneAndDelete({ id: RaffleId });
        return result;
    }
}