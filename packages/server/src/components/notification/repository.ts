import { Notification, INotification } from "./mongoose"

export class NotificationRepository {
    createNotification = async (notification: INotification) => {
        const notificationModel = new Notification(notification);
        const result = await notificationModel.save();
        return result;
    }
    getCustomNotifications = async () => {
        const result = await Notification.find({ sentTo: null });
        return result;
    }
    getNotificationByUserId = async (userId: String) => {
        const result = await Notification.find({$or:[{ sentTo: userId }, { sentTo: null }]});
        return result;
    }
    deleteNotification = async (id: String) => {
        const result = await Notification.findOneAndDelete({id: id});
        return result;
    }
}