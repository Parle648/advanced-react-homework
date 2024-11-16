import UsersList from "../entities/UsersList"
import CreateUserForm from "../features/CreateUserForm"
import { users } from "../shared/constants/users-mock-data"

const UsersPage = () => {
  return (
    <>
      <CreateUserForm />
      <UsersList users={users} />
    </>
  )
}

export default UsersPage
