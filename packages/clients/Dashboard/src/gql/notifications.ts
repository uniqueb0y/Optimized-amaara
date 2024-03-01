import { gql } from "@apollo/client";

export const GET_CUSTOM_NOTIFICATIONS = gql`
    query GetCustomNotifications {
        getCustomNotifications {
            id
            message
            sentDate
            sentTo
        }
    }
`;

export const DELETE_NOTIFICATION = gql`
    mutation DeleteNotification($id: ID!) {
        deleteNotification(id: $id) {
            id
            isSuccess
            error
        }
    }
`;

export const CREATE_NOTIFICATION= gql`
mutation CreateNotification($notificationInput: NotificationInput) {
    createNotification(notificationInput: $notificationInput) {
        id
        message
        sentDate
        sentTo
    }
}
`;