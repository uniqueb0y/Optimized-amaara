import { gql } from "@apollo/client";

export const GET_NOTIFICATION_BY_USER_ID = gql`
    query GetNotificationByUserId($userId: ID) {
        getNotificationByUserId(userId: $userId) {
            id
            message
            sentDate
            sentTo
        }
    }
`;
