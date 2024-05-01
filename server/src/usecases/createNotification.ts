import { Notification } from '../models/notification'
import { NotificationType } from '../types/notification';

export type CreateNotificationParams = {
    type: NotificationType,
    message: string
}

export async function createNotification({ type, message }: CreateNotificationParams) {
    try {
        const notification = new Notification({ type, message });

        await notification.save();

        console.log(`New notification: ${type} - ${message}`);
    } catch (err) {
        console.error('Error creating new notification:', err);
    }
}