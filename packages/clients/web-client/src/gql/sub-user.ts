import { gql } from "@apollo/client";

export const GET_SUB_USERS = gql`
    query GetSubUsers {
        getSubUsers {
            id
            parentId
            firstName
            lastName
            relation 
            dob
            referenceNo
        }
    }
`;

// export const DELETE_NOTIFICATION = gql`
//     mutation DeleteNotification($id: ID!) {
//         deleteNotification(id: $id) {
//             id
//             isSuccess
//             error
//         }
//     }
// `;

export const CREATE_SUB_USER = gql`
mutation CreateSubUser($subUserInput: SubUserInput!) {
    createSubUser(subUserInput: $subUserInput) {
        id
        parentId
        firstName
        lastName
        relation 
        dob
        referenceNo
    }
}
`;