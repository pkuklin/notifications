import { Request, Response } from 'express';
import { createNotification, CreateNotificationParams } from '../usecases/createNotification';

export async function createNotificationController(req: Request, res: Response) {
    try {
        const { type, message }: CreateNotificationParams = req.body;

        // Validate the input
        if (!type || !message) {
            return res.status(400).json({ error: 'Type and message are required' });
        }

        // Call the use case to create the notification
        await createNotification({ type, message });

        // Return a success response
        return res.status(201).json({ message: 'Notification created successfully' });
    } catch (err) {
        console.error('Error creating notification:', err);
        return res.status(500).json({ error: 'Error creating notification' });
    }
}