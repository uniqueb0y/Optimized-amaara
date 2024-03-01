import { RoleRepository, RoleService } from '../role';
import { IPromotion } from './mongoose';
import { PromotionRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class PromotionService {
    promotionRepository: PromotionRepository;
    constructor(_promotionRepository: PromotionRepository) {
        this.promotionRepository = _promotionRepository;
    }
    getPromotions = () => {
        return this.promotionRepository.getPromotions();
    }

    getPromotionByName = (promotionName: String) => {
      const result = this.promotionRepository.getPromotionByName(promotionName);
      return result;
    }
    createPromotion = (promotion: IPromotion) => {
        promotion.id = uuidv4();
        const result = this.promotionRepository.createPromotion(promotion);
        return result;
    }
    updatePromotion = (promotion: IPromotion) => {
        const result = this.promotionRepository.updatePromotion(promotion);
        return result;
    }
    deletePromotion = (promotionId: String) => {
        const result = this.promotionRepository.deletePromotion(promotionId);
        return result;
    }
    
}