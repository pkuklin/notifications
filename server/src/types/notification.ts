export enum NotificationType {
    ERROR = 'error',
    INFO = 'info',
    WARNING = 'warning'
}

export type Notification = {
    type: NotificationType
    message: string
    createdAt: Date
}