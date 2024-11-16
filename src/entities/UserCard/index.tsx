import { FC } from "react"
import { Link } from "react-router-dom"
import { IUser } from "../../shared/types/interfaces"
import "./styles.css"

const UserCard: FC<IUser> = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <Link to={`/users/${id}`}>
      <div className={"card"}>
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className={"avatar"}
        />
        <div className={"info"}>
          <h2 className={"name"}>
            {first_name} {last_name}
          </h2>
          <p className={"email"}>{email}</p>
        </div>
      </div>
    </Link>
  )
}
export default UserCard
