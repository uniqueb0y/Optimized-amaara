import { INotification } from './mongoose';
import { NotificationRepository } from './repository';
import { v4 as uuidv4 } from 'uuid';

export class NotificationService {
    notificationRepository: NotificationRepository;
    constructor(_notificationRepository: NotificationRepository) {
        this.notificationRepository = _notificationRepository;
    }
    createNotification = (notification: INotification) => {
        notification.id = uuidv4();
        notification.sentDate = new Date().toDateString();
        const result = this.notificationRepository.createNotification(notification);
        return result;
    }
    getCustomNotifications = async () => {
        const result = await this.notificationRepository.getCustomNotifications();
        const sortedNotifications = result.sort((a, b) => a.sentDate < b.sentDate ? 1 :-1);
        return sortedNotifications;
    }
    getNotificationByUserId = async (userId: String) => {
        const result = await this.notificationRepository.getNotificationByUserId(userId);
        const sortedNotifications = result.sort((a, b) => a.sentDate < b.sentDate ? 1 :-1);
        return sortedNotifications;
    }
    deleteNotification = (id: String) => {
        const result = this.notificationRepository.deleteNotification(id);
        return result;
    }
}