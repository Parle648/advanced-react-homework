import { useParams } from "react-router-dom"
import { users } from "../shared/constants/users-mock-data"
import { IUser } from "../shared/types/interfaces"
import UserCard from "../entities/UserCard"

const UserDetailsPage = () => {
  const { id } = useParams()
  const currentUser: IUser = users.find((user) => `${user.id}` === id) as IUser

  return (
    <div>
      {
        <UserCard
          id={currentUser.id}
          email={currentUser.email}
          first_name={currentUser.first_name}
          last_name={currentUser.last_name}
          avatar={currentUser.avatar}
        />
      }
    </div>
  )
}

export default UserDetailsPage
