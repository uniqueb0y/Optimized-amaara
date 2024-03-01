import { ISeetu } from './mongoose';
import { SeetuRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class SeetuService {
    seetuRepository: SeetuRepository;
    constructor(_seetuRepository: SeetuRepository) {
        this.seetuRepository = _seetuRepository;
    }
    getSeetu = () => {
        return this.seetuRepository.getSeetu();
    }

    getSeetuById = (seetuId: String) => {
      const result = this.seetuRepository.getSeetuById(seetuId);
      return result;
    }

    createSeetu = (seetu: ISeetu) => {
        seetu.id = uuidv4();
        const result = this.seetuRepository.createSeetu(seetu);
        return result;
    }
    updateSeetu = (seetu: ISeetu) => {
        const result = this.seetuRepository.updateSeetu(seetu);
        return result;
    }
    deleteSeetu = (seetuId: String) => {
        const result = this.seetuRepository.deleteSeetu(seetuId);
        return result;
    }
}