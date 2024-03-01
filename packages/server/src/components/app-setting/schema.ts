import { gql } from 'graphql-tag';

const appSettingTypeDefs = gql`
  type AppSettingResult {
    id: ID!
    banner: String
    promotionOne: String
    promotionTwo: String
    promotionThree: String
    promotionFour: String
    promotionFive: String
    promotionSix: String
  }

  input AppSettingInput {
    id: ID
    banner: String
    promotionOne: String
    promotionTwo: String
    promotionThree: String
    promotionFour: String
    promotionFive: String
    promotionSix: String
  }

  type Query {
    getAppSetting: AppSettingResult
  }

  type Mutation {
    createAppSetting(appSettingInput: AppSettingInput!): AppSettingResult!
    updateAppSetting(appSettingInput: AppSettingInput!): AppSettingResult!
  }
`;


export default appSettingTypeDefs;