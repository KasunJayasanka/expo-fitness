import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './slices/exerciseSlice';

const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});

export default store;
