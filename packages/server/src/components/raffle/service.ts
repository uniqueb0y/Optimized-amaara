import { IRaffle } from './mongoose';
import { RaffleRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class RaffleService {
    raffleRepository: RaffleRepository;
    constructor(_raffleRepository: RaffleRepository) {
        this.raffleRepository = _raffleRepository;
    }
    getRaffle = () => {
        return this.raffleRepository.getRaffle();
    }
    createRaffle = (raffle: IRaffle) => {
        raffle.id = uuidv4();
        raffle.createdDate = new Date().toDateString();
        const result = this.raffleRepository.createRaffle(raffle);
        return result;
    }
    deleteRaffle = (raffaleId: String) => {
        const result = this.raffleRepository.deleteRaffle(raffaleId);
        return result;
    }
}