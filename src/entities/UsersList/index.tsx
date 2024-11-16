import { FC } from "react"
import "./styles.css"
import UserCard from "../UserCard"
import { IUser } from "../../shared/types/interfaces"

const UsersList: FC<{ users: IUser[] }> = ({ users }) => {
  return (
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
  )
}

export default UsersList
