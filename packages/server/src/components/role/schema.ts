import { gql } from 'graphql-tag';

const roleTypeDefs = gql` 

type RoleResult {
    id: ID!
    name: RoleType!
  }

  input RoleInput {
    id: ID
    name: RoleType!
  }

  type Query {
    getRole: [RoleResult]
  }

  type Mutation {
    createRole(roleInput: RoleInput!): RoleResult!
    updateRole(roleInput: RoleInput!): RoleResult!
    deleteRole(id: ID!): RoleResult!
  }
  enum RoleType {
    NORMAL
    MANAGER
    ADMIN
    SUPERADMIN
  }
`;

export default roleTypeDefs;