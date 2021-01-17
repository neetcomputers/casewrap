import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import designReducer from '../features/design/designSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    design: designReducer
  },
});
