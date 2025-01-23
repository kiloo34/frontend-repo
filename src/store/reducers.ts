// store/reducers.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    email: string;
    displayName: string;
}

const initialState: UserState = {
    email: '',
    displayName: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
        },
        clearUser: (state) => {
            state.email = '';
            state.displayName = '';
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
