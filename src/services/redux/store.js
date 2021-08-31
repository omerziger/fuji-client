import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice/authReducer';
import feedReducer from './slices/feedSlice/feedReducer';
import chatReducer from './slices/chatSlice/chatReducer';
import themeReducer from './slices/themeSlice/themeReducer';
import newPostReducer from './slices/newPostSlice/newPostReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
    newPost: newPostReducer,
    chat: chatReducer,
    theme: themeReducer,
  },
});

export default store;
