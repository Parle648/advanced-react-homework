import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "../features/users-slice"

export const appStateStore = configureStore({
  reducer: {
    users: usersSlice,
  },
})

export type RootState = ReturnType<typeof appStateStore.getState>
