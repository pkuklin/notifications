import { Notification } from '../models/notification';

export async function getNotifications() {
    try {
        const notifications = await Notification.find({}, { '_id': false, __v: false }).sort({ createdAt: -1 });

        return notifications
    } catch (err) {
        console.error('Error finding notifications:', err);
    }
}