import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['error', 'warning', 'info']
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Notification = mongoose.model('Notification', notificationSchema)