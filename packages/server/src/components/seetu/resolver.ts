import { ISeetu } from "./mongoose";
import { SeetuRepository } from "./repository";
import { SeetuService } from "./service";

export const seetuResolvers = {
    Query: {
        getSeetu: async () => {
            const seetuRepo = new SeetuRepository();
            const seetuService = new SeetuService(seetuRepo);
            const seetu = seetuService.getSeetu();
            return seetu;
        },

        getSeetuById: async (_, args, context) => {
            const seetuRepo = new SeetuRepository();
            const seetuService = new SeetuService(seetuRepo);
            const seetu = seetuService.getSeetuById(args.id);
            return seetu;
        },
    },
    Mutation: {
        createSeetu: (_, args, context) => {
            const seetuRepo = new SeetuRepository();
            const seetuService = new SeetuService(seetuRepo);
            return seetuService.createSeetu(args.seetuInput);
        },
        updateSeetu: (_, args, context) => {
            const seetuRepo = new SeetuRepository();
            const seetuService = new SeetuService(seetuRepo);
            return seetuService.updateSeetu(args.seetuInput);
        },
        deleteSeetu: (_, args, context) => {
            const seetuRepo = new SeetuRepository();
            const seetuService = new SeetuService(seetuRepo);
            return seetuService.deleteSeetu(args.id);
        }
    }
}