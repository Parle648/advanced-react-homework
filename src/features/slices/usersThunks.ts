import axios from "axios"
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserSuccess,
} from "./users-slice"
import { Dispatch } from "redux"
import { IUser } from "../../shared/types/interfaces"

export const fetchUsers = () => async (dispatch: Dispatch) => {
  dispatch(fetchUsersRequest())
  try {
    const response = await axios.get("https://reqres.in/api/users")
    dispatch(fetchUsersSuccess(response.data.data))
  } catch (error: any) {
    dispatch(fetchUsersFailure(error.message))
  }
}

export const addUser = (user: IUser) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post("https://reqres.in/api/users", user)
    dispatch(addUserSuccess(response.data))
  } catch (error: any) {
    console.error(error.message)
  }
}
