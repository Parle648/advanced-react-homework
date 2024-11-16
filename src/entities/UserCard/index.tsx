import { FC } from "react"
import { IUser } from "../../shared/types/interfaces"
import "./styles.css"

const UserCard: FC<IUser> = ({ email, first_name, last_name, avatar }) => {
  return (
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
  )
}
export default UserCard
