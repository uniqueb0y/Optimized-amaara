import { Promotion, IPromotion } from "./mongoose"

export class PromotionRepository {
    getPromotions = async () => {
        const promotions = await Promotion.find({});
        return promotions;
    }

    getPromotionByName = async (promotionName: String) => {
        const result = await Promotion.findOne({ name: promotionName })
        return result;

    }
    createPromotion = async (promotion: IPromotion) => {
        const promotionModel = new Promotion(promotion);
        const result = await promotionModel.save();
        return result;
    }
    updatePromotion = async (promotion: IPromotion) => {
        const result = await Promotion.findOneAndUpdate({ id: promotion.id }, promotion, { new: true });
        return result;
    }
    deletePromotion = async (promotionId: String) => {
        const result = await Promotion.findOneAndDelete({ id: promotionId });
        return result;
    }
}