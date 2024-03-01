import { gql } from 'graphql-tag';

const seetuTypeDefs = gql` 
type SeetuResult {
    id: ID!
    userId: String!
    name: String!
    amountPaid: String!
    dueDate: String!
    isCompleted: Boolean!
    createdBy: String!
    createdDate: String!
    updatedBy: String!
    updatedDate: String!
    deletedBy: String!
    deletedDate: String!
  }
  input SeetuInput {
    id: ID!
    userId: String
    name: String
    amountPaid: String
    dueDate: String
    isCompleted: Boolean
    createdBy: String
    createdDate: String
    updatedBy: String
    updatedDate: String
    deletedBy: String
    deletedDate: String
  }
  type Query {
    getSeetu: [SeetuResult]
    getSeetuById (id : ID!): SeetuResult!
  }
  type Mutation {
    createSeetu(seetuInput: SeetuInput!): SeetuResult!
    updateSeetu(seetuInput: SeetuInput!): SeetuResult!
    deleteSeetu(id: ID!): SeetuResult!
  }
`;

export default seetuTypeDefs;