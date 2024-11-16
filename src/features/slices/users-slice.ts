import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../shared/types/interfaces"

interface IUserSlice {
  users: IUser[]
}

const initialState: IUserSlice = {
  users: [],
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(store, action: PayloadAction<IUser[]>) {
      store.users = action.payload
    },
    pushUser(store, action: PayloadAction<IUser>) {
      store.users.push(action.payload)
    },
  },
})

export const { setUsers, pushUser } = usersSlice.actions
export default usersSlice.reducer
