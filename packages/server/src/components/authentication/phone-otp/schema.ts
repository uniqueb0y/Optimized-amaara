import { gql } from 'graphql-tag';

const phoneOtpTypeDefs = gql`  

  input PhoneOtpInput {
    id: ID!
    phone: Float!
    otp: Int
    expiresIn: Int
  }
  type OtpResult {
    success: Boolean!
    message: String!
    jwt: String
  }

  type OtpResultAll {
    id: ID!
    phone: Float!
    otp: Int
    expiresIn: Float
  }


  type Query {
    getPhoneOtp: [OtpResultAll]
  }

  type Mutation {
    sendPhoneOtp(phoneOtpInput: PhoneOtpInput!): OtpResult!
    verifyPhoneOtp(phoneOtpInput: PhoneOtpInput!): OtpResult!
    deletePhoneOtp(id: ID!): OtpResult!
  }
`;

export default phoneOtpTypeDefs;
