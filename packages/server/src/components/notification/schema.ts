import { gql } from 'graphql-tag';

const notificationTypeDefs = gql` 

input NotificationInput {
    sentBy: String!
    sentTo: String
    message: String!
  }

type NotificationResult {
    id: String
    sentBy: String
    sentTo: String
    sentDate: String
    message: String
  }

  type DeleteNotification {
    isSuccess: Boolean!
    id: String
    error: String
  }

  type Query {
    getCustomNotifications: [NotificationResult]
    getNotificationByUserId(userId: ID): [NotificationResult]
  }

  type Mutation {
    createNotification(notificationInput: NotificationInput): NotificationResult
    deleteNotification(id: ID!): DeleteNotification!
  }
`;

export default notificationTypeDefs;