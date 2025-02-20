import { configureStore } from '@reduxjs/toolkit'

import todoSlice from './slices'

export const store = configureStore({
  reducer: {
    cartItem: todoSlice
  }
})
