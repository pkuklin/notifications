import { create } from 'zustand'

export type Notification = {
    message: string
    type: string
    createdAt: string
}

type StoreStateWithActions = {
    notifications: Notification[],
    setNotifications: (notifications: Notification[]) => void
    addNotification: (newNotification: Notification) => void
    removeAllNotifications: () => void
}

export const useNotificationsStore = create<StoreStateWithActions>((set) => ({
    notifications: [],
    setNotifications: (notifications: Notification[]) => set({ notifications }),
    addNotification: (newNotification: Notification) => set((state) => ({ notifications: [newNotification, ...state.notifications] })),
    removeAllNotifications: () => set({ notifications: [] }),
}))

export default useNotificationsStore