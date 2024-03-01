import { RaffleRepository } from "./repository";
import { RaffleService } from "./service";

export const raffleResolvers = {
    Query: {
        getRaffle: async () => {
            const raffleRepo = new RaffleRepository();
            const raffleService = new RaffleService(raffleRepo);
            const raffale = raffleService.getRaffle();
            return raffale;
        },
    },
    Mutation: {
        createRaffle: async (_, args, context) => {
            const raffleRepo = new RaffleRepository();
            const raffleService = new RaffleService(raffleRepo);
            const result = await raffleService.createRaffle(args.raffleInput);
            if (result) return { isSuccess: true, id: result.id, error: null };
            else return { isSuccess: false, error: 'We are facing some issue. Please try again after sometime.' };
        },
        deleteRaffle: async (_, args, context) => {
            const raffleRepo = new RaffleRepository();
            const raffleService = new RaffleService(raffleRepo);
            const result = await raffleService.deleteRaffle(args.id);
            if (result) return { isSuccess: true, id: result.value, error: null };
            else return { isSuccess: false, error: 'We are facing some issue. Please try again after sometime.' };
        }
    }
}