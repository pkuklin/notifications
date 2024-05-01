import './Notification.css'
import React from "react"
import DateTime from './DateTime'

type NotificationProps = {
    message: string
    type: string
    createdAt: string
}

const Notification: React.FC<NotificationProps> = ({ message, type, createdAt }: NotificationProps) => {
    return (
        <div className={`notification ${type}`} key={createdAt}>
            <div className='message'>{message}</div>
            <DateTime createdAt={createdAt} />
        </div>
    )
}

export default Notification