
import UsersItem from "./UsersItem"

const UsersList = props => {
 return <ul>
     {props.users.map(item => <UsersItem name={item}  key={Math.random().toString()}/>)}
 </ul>
}

export default UsersList;