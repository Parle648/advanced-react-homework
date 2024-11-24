import UsersList from "../entities/UsersList"
import AddUserForm from "../features/AddUserForm"

const UsersPage = () => {
  return (
    <>
      <AddUserForm />
      <UsersList />
    </>
  )
}

export default UsersPage
