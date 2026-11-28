import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/storage';

interface UserState {
    isAuthenticated: boolean;
    role: 'guest' | 'user' | 'admin';
    username: string | null;
}

const initialState: UserState = getItem('user') || {
    isAuthenticated: false,
    role: 'guest',
    username: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ username: string; role: 'admin' | 'user' }>) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = null;
            state.role = 'guest';
        }
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;