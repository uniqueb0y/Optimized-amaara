import { gql } from 'graphql-tag';

const subUserTypeDefs = gql` 
type SubUserResult {
    id: ID!
    parentId: String!
    firstName: String!
    lastName: String!
    relation: String!
    dob: String!
    referenceNo: String!
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
  }

  input SubUserInput {
    id: ID
    parentId: String
    firstName: String
    lastName: String
    relation: String
    dob: String
    referenceNo: String
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
  }

  type Query {
    getSubUsers: [SubUserResult]
    getSubUserById (id : ID!): SubUserResult!
    getSubUserByParentId (parentId : String!): [SubUserResult!]
  }

  type Mutation {
    createSubUser(subUserInput: SubUserInput!): SubUserResult!
    updateSubUser(subUserInput: SubUserInput!): SubUserResult!
    deleteSubUser(id: ID!): SubUserResult!
  }
`;

export default subUserTypeDefs;