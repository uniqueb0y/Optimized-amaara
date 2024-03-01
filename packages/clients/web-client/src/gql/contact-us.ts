import { gql } from "@apollo/client";

export const CREATE_CONTACT_US = gql`
    mutation CreateContactUs($contactUsInput: ContactUsInput!) {
        createContactUs(contactUsInput: $contactUsInput) {
            id
            isSuccess
            error
        }
    }
`;