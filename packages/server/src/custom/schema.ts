
import { gql } from 'graphql-tag';

const customTypeDefs = gql` 
  type CommonResult {
    isSuccess: Boolean!
    id: String
    error: String
  }
`;

export default customTypeDefs;