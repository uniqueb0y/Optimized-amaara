import { gql } from 'graphql-tag';

const contactUsTypeDefs = gql` 
  type ContactUsResult {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    phone: String
    message: String!
    isDeleted: Boolean
    date: String

  }

  input ContactUsInput {
    id: ID
    firstName: String!
    lastName: String
    email: String!
    phone: String
    message: String!
    date: String
  }

  type Query {
    getContactUs: [ContactUsResult!]
  }

  type Mutation {
    createContactUs(contactUsInput: ContactUsInput!): CommonResult
  }
`;

export default contactUsTypeDefs;