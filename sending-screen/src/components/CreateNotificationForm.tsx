import './CreateNotificationForm.css'
import React, { useState } from 'react'
import { createNotification } from '../services/notificationService';

enum NotificationType {
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

const typeOptions = [
  NotificationType.ERROR,
  NotificationType.INFO,
  NotificationType.WARNING
]

const defaultState = { type: '', message: '' }

const CreateNotificationForm: React.FC = () => {
  const [newNotification, setNewNotification] = useState<{ type: string, message: string }>(defaultState);

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();

    createNotification({ newNotification, onSuccess: () => setNewNotification(defaultState) })
  }

  function handleChangeType(event: React.ChangeEvent<HTMLSelectElement>): void {
    setNewNotification({ ...newNotification, type: event.target.value })
  }

  function handleChangeMessage(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewNotification({ ...newNotification, message: event.target.value })
  }

  return (
    <form className='create-notification-form' onSubmit={handleSubmit}>
      <h3 className='type-select-label'>Create notification</h3>
      <select className='select' value={newNotification.type} onChange={handleChangeType}>
        <option value="">Select Type</option>
        {typeOptions.map((option) => <option className='option' key={option} value={option}>{option.toUpperCase()}</option>)}
      </select>
      <input
        className='message-input'
        type="text"
        value={newNotification.message}
        onChange={handleChangeMessage}
        placeholder="Type your notification message"
      />
      <button className='submit-button' type='submit'>Create Notification</button>
    </form>
  )
}

export default CreateNotificationForm