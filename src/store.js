import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import appReducer from './reducers/appReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
