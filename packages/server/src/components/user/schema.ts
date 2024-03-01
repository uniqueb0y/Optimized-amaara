import { gql } from 'graphql-tag';

const userTypeDefs = gql` 
type UserResult {
    id: ID!
    phoneNo: String!
    referenceNo: String
    roleId: String
    isActive: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
    blockedBy: String
    blockedDate: String
    deletedBy: String
    deletedDate: String
    role: RoleResult
    userInfo: UserInfoResult
  }

  input UserInput {
    id: ID!
    phoneNo: String!
    referenceNo: String
    roleId: String
    isActive: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
    blockedBy: String
    blockedDate: String
    deletedBy: String
    deletedDate: String
  }

  input UserByAdminInput {
    id: ID
    phoneNo: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    emergencyPhoneNo: String!
    addressProofOne: String
    addressProofTwo: String
    createdBy: String!
  }

  type Query {
    getUsers: [UserResult]
    getUserById (id : ID!): UserResult!
    getUserByPhone(phone: String!) : UserResult
    testReferenceNo: String
  }

  type Mutation {
    createUser(userInput: UserInput!): UserResult!
    createUserByAdmin(userByAdminInput: UserByAdminInput!): UserResult!
    updateUser(userInput: UserInput!): UserResult!
    deleteUser(id: ID!): UserResult!
  }
`;

export default userTypeDefs;