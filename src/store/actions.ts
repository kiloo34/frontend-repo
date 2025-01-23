// store/actions.ts
import { setUser, clearUser } from './reducers';

// Action to set user data
export const setUserData = (userData: { email: string; displayName: string }) => {
    return (dispatch: any) => {
        dispatch(setUser(userData));
    };
};

// Action to clear user data
export const clearUserData = () => {
    return (dispatch: any) => {
        dispatch(clearUser());
    };
};
