
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

const appStore = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default appStore;