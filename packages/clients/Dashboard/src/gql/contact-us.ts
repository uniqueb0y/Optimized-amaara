import { gql } from "@apollo/client";

export const GET_CONTACT_US = gql`
    query GetContactUs {
        getContactUs {
            id
            firstName
            lastName
            email
            phone
            message
            date
        }
    }
`;