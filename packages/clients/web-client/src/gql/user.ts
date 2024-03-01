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
