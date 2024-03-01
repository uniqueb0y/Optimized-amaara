import { NotificationRepository } from "./repository";
import { NotificationService } from "./service";

export const notificationResolvers = {
    Query: {
        getCustomNotifications: async (_, args, context) => {
            const notificationRepo = new NotificationRepository();
            const notificationService = new NotificationService(notificationRepo);
            const result = notificationService.getCustomNotifications();
            return result;
        },
        getNotificationByUserId: async (_, args, context) => {
            const notificationRepo = new NotificationRepository();
            const notificationService = new NotificationService(notificationRepo);
            const result = notificationService.getNotificationByUserId(args.userId);
            return result;
        },
    },
    Mutation: {
        createNotification: async (_, args, context) => {
            const notificationRepo = new NotificationRepository();
            const notificationService = new NotificationService(notificationRepo);
            const result = notificationService.createNotification(args.notificationInput);
            return result;
        },
        deleteNotification: async (_, args, context) => {
            const notificationRepo = new NotificationRepository();
            const notificationService = new NotificationService(notificationRepo);
            const result = await notificationService.deleteNotification(args.id);
            if (result) return { isSuccess: true, id: result.value, error: null };
            else return { isSuccess: false, error: 'Error' };
        },
    }
}