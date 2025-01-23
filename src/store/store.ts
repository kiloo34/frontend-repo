// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './reducers';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
