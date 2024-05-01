import React, { useEffect } from 'react'
import io from 'socket.io-client';
import './Notifications.css'
import Notification from './Notification';
import { Notification as NotificationType, useNotificationsStore}  from '../store/useNotificationsStore';

const SERVER_URL = 'http://localhost:3000';

const Notifications: React.FC = () => {
    const { notifications, setNotifications, addNotification, removeAllNotifications } = useNotificationsStore();

    useEffect(() => {
        const socket = io(SERVER_URL);

        socket.on('notifications', (notifications: NotificationType[]) => {
            setNotifications(notifications);
        });

        // Listen for 'notification' event from the server
        socket.on('notification', (notification: NotificationType) => {
            addNotification(notification)
        });

        return () => {
            socket.disconnect();
            removeAllNotifications();
        };
    }, []);

    return (
        <div className='notifications-container'>
            <h3 className='notifications-header'>Notifications</h3>
            <div className='notifications'>
                {notifications.map(({ message, type, createdAt }) =>
                    <Notification key={createdAt} message={message} type={type} createdAt={createdAt} />
                )}
            </div>
        </div>
    )
}

export default Notifications