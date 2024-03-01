import { gql } from "@apollo/client";


export const CREATE_USER_INFO = gql`
    mutation CreateUserInfo($userInfoInput: UserInfoInput) {
        createUserInfo(userInfoInput: $userInfoInput) {
            id
            firstName
            lastName
            userId
        }
    }
`;

export const UPDATE_USER_INFO = gql`
    mutation UpdateUserInfo($userInfoInput: UserInfoInput) {
        updateUserInfo(userInfoInput: $userInfoInput) {
            id
            firstName
            lastName
            userId
        }
    }
`;