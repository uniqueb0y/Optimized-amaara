import { gql } from "@apollo/client";

export const GET_USER_BY_PHONE = gql`
    query GetUserByPhone($phone: String!) {
        getUserByPhone(phone: $phone) {
            id
            phoneNo
            referenceNo
            isActive
            blockedBy
            deletedBy
            userInfo {
                firstName
                lastName
                dateOfBirth
                addressProofOne
                addressProofTwo
                emergencyPhoneNo
                isKycDone
                image
            }
            role {
                name
            }
    }
}
`;

export const GET_USERS = gql`
    query GetUsers {
        getUsers {
            id
            phoneNo
            referenceNo
            isActive
            blockedBy
            deletedBy
            createdDate
            createdBy
            userInfo {
                firstName
                lastName
                dateOfBirth
                addressProofOne
                addressProofTwo
                emergencyPhoneNo
                isKycDone
                image
            }
            role {
                name
            }
    }
}
`;

export const CREATE_USER_BY_ADMIN = gql`
    mutation CreateUserByAdmin($userByAdminInput: UserByAdminInput!) {
        createUserByAdmin(userByAdminInput: $userByAdminInput) {
            id
            phoneNo
            referenceNo
        }
    }
`;