import { FC } from "react"
import { useForm } from "react-hook-form"

interface ICreateUserForm {
  email: string
  first_name: string
  last_name: string
}

const errorMessageStyle = {
  color: "red",
  fontSize: "0.875rem",
  fontWeight: "bold",
  marginTop: "0.5rem",
}

const CreateUserForm: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUserForm>()

  const createUserRequest = (data: ICreateUserForm) => {
    console.log(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(createUserRequest)}
      style={{ marginTop: "150px" }}
    >
      <h5>Enter user email</h5>
      <input
        {...register("email", {
          required: "email shouldn't be empty",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "email has invalid format",
          },
        })}
      />
      <br />
      <span style={errorMessageStyle}>
        {errors.email && errors.email.message}
      </span>
      <h5>Enter user first name</h5>
      <input
        {...register("first_name", {
          required: "First name shouldn't be empty",
          minLength: {
            value: 3,
            message: "Name has to be longer than 3 characters",
          },
        })}
      />
      <br />
      <span style={errorMessageStyle}>
        {errors.first_name && errors.first_name.message}
      </span>
      <h5>Enter user last name</h5>
      <input
        {...register("last_name", {
          required: "First name shouldn't be empty",
          minLength: {
            value: 3,
            message: "Name has to be longer than 3 characters",
          },
        })}
      />
      <br />
      <span style={errorMessageStyle}>
        {errors.last_name && errors.last_name.message}
      </span>
      <br />
      <button type="submit">+ Add new user</button>
    </form>
  )
}

export default CreateUserForm
