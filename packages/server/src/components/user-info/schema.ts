import { gql } from 'graphql-tag';

const userInfoTypeDefs = gql` 

type UserInfoResult {
    id: ID!
    userId: ID
    firstName: String
    lastName: String
    phoneNo: String
    dateOfBirth: String
    emergencyPhoneNo: String
    addressProofOne: String
    addressProofTwo: String
    image: String
    isKycDone: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
  }

  input UserInfoInput {
    id: ID
    userId: ID
    firstName: String
    lastName: String
    phoneNo: String
    dateOfBirth: String
    emergencyPhoneNo: String
    addressProofOne: String
    addressProofTwo: String
    image: String
    isKycDone: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
  }

  type Query {
    getUserInfo: [UserInfoResult]
    getUserInfoById (id: ID!): UserInfoResult
  }

  type Mutation {
    createUserInfo(userInfoInput: UserInfoInput!): UserInfoResult!
    updateUserInfo(userInfoInput: UserInfoInput!): UserInfoResult!
    deleteUserInfo(id: ID!): UserInfoResult!
  }
`;

export default userInfoTypeDefs;