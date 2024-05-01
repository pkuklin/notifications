const SERVER_URL = 'http://localhost:3000';

type CreateNotificationParams = {
    newNotification: { type: string, message: string },
    onSuccess: () => void
}

export async function createNotification({ newNotification, onSuccess }: CreateNotificationParams) {
    try {
        if (!newNotification.type.trim() || !newNotification.message.trim()) return;

        await fetch(`${SERVER_URL}/notifications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNotification),
        });

        onSuccess()
    } catch (error) {
        console.error('Error creating notification:', error);
    }
}