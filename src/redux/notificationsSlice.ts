import { createSlice } from '@reduxjs/toolkit';
import { Notification } from '../type/type'

const initialState: Notification[] = [
    {
        type: 'error',
        title: 'first',
        body: 'first toast',
        id: 1
    },
    {
        type: 'successful',
        title: 'second',
        body: 'second toast',
        id: 2
    },
];

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotifications(state, action) {
            return [...state, action.payload]
        },
        deleteNotifications(state, action) {
            const newState = state.filter((nt) => nt.id !== action.payload)
            return newState;
        },
    }
});

export const { addNotifications, deleteNotifications } = notificationsSlice.actions;

export default notificationsSlice.reducer;