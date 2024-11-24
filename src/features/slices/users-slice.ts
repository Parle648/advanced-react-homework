import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../shared/types/interfaces"

interface IUserSlice {
  users: IUser[]
  loading: boolean
  error: null | string
}

const initialState: IUserSlice = {
  users: [],
  loading: false,
  error: null,
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true
      state.error = null
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload)
    },
  },
})

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserSuccess,
} = usersSlice.actions

export default usersSlice.reducer
