import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice' // example reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
})

// Types for use with TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
