import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../slices/usersThunks"
import toast, { Toaster } from "react-hot-toast"

const AddUserForm = () => {
  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await dispatch(addUser({ first_name: name, job: "as" }) as any)
      toast.success("User added successfully!")
    } catch (error) {
      toast.error("Failed to add user!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder="Job"
      />
      <button type="submit">Add User</button>
      <Toaster />
    </form>
  )
}

export default AddUserForm
