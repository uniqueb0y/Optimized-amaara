import { gql } from 'graphql-tag';

const raffleTypeDefs = gql` 
type RaffleResult {
    id: ID!
    winnerName: String
    month: String
    year: String
    image: String
    link: String
    createdBy: String
    createdDate: String
    deletedBy: String
    deletedDate: String
  }

  input RaffleInput {
    id: ID
    winnerName: String
    month: String
    year: String
    image: String
    link: String
    createdBy: String
    createdDate: String
    deletedBy: String
    deletedDate: String
  }

  type Query {
    getRaffle: [RaffleResult]
  }

  type Mutation {
    createRaffle(raffleInput: RaffleInput!): CommonResult!
    deleteRaffle(id: ID!): CommonResult!
  }
`;

export default raffleTypeDefs;