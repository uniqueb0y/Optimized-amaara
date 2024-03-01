import { RoleRepository, RoleService } from "../role";
import { IPromotion } from "./mongoose";
import { PromotionRepository } from "./repository";
import { PromotionService } from "./service";

export const promotionResolvers = {
    Query: {
        getPromotions: async () => {
            const promotionRepo = new PromotionRepository();
            const promotionService = new PromotionService(promotionRepo);
            const promotions = promotionService.getPromotions();
            return promotions;
        },

        getPromotionByName: async (_, args, context) => {
            const promotionRepo = new PromotionRepository();
            const promotionService = new PromotionService(promotionRepo);
            const promotion = promotionService.getPromotionByName(args.name);
            return promotion;
        }
    },
    Mutation: {
        createPromotion: (_, args, context) => {
            const promotionRepo = new PromotionRepository();
            const promotionService = new PromotionService(promotionRepo);
            return promotionService.createPromotion(args.promotionInput);
        },
        updatePromotion: (_, args, context) => {
            const promotionRepo = new PromotionRepository();
            const promotionService = new PromotionService(promotionRepo);
            return promotionService.updatePromotion(args.promotionInput);
        },
        deletePromotion: (_, args, context) => {
            const promotionRepo = new PromotionRepository();
            const promotionService = new PromotionService(promotionRepo);
            return promotionService.deletePromotion(args.id);
        }
    }
}