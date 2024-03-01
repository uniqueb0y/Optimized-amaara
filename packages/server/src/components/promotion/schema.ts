import { gql } from 'graphql-tag';

const promotionTypeDefs = gql` 
type PromotionResult {
    id: ID!
    name: String
    image: String
    isActive: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
    deletedBy: String
    deletedDate: String
  }

  input PromotionInput {
    id: ID!
    name: String
    image: String
    isActive: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
    deletedBy: String
    deletedDate: String
  }

  type Query {
    getPromotions: [PromotionResult]
    getPromotionByName (name : String): PromotionResult!
  }

  type Mutation {
    createPromotion(promotionInput: PromotionInput!): PromotionResult!
    updatePromotion(promotionInput: PromotionInput!): PromotionResult!
    deletePromotion(id: ID!): PromotionResult!
  }
`;

export default promotionTypeDefs;