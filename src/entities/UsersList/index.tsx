import { FC, useEffect } from "react"
import "./styles.css"
import UserCard from "../UserCard"
import { RootState } from "../../app/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../features/slices/usersThunks"

const UsersList: FC = () => {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  )

  useEffect(() => {
    dispatch(fetchUsers() as any)
  }, [dispatch])

  return (
    <>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="users-list">
          {users.map((user) => {
            return (
              <UserCard
                key={user.id}
                id={user.id}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
              />
            )
          })}
        </ul>
      )}
    </>
  )
}

export default UsersList
