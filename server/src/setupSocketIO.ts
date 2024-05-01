import { Server as HttpServer } from "http"
import { Server } from "socket.io";
import { getNotifications } from "./usecases/getNotifications";
import { Notification } from "./models/notification";

function setupSocketIO(server: HttpServer) {
    const io = new Server(server, {
        cors: { origin: '*' }
    });

    io.on('connection', async (socket) => {
        console.log('User connected');
        try {
            // Fetch all notifications from MongoDB
            const notifications = await getNotifications()

            // Emit all notifications to the client
            socket.emit('notifications', notifications);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }

        // Subscribe to changes in 'notifications' collection
        const changeStream = Notification.watch();

        changeStream.on('change', (change) => {
            // Broadcast cahanges to all connected users
            if (change.operationType === 'insert') {
                const { type, message, createdAt } = change.fullDocument;

                socket.emit('notification', { type, message, createdAt });
            }
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
            changeStream.close();
        });
    });
}

export default setupSocketIO