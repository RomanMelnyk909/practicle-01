import { useState } from "react";
import UserInput from "./components/UserInput";
import UsersList from "./components/UsersList"

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (user) => {
    setUsers( prevUsers => [user, ...prevUsers])
  }

  console.log(users)


  return (
    <div className="App">
      <UserInput onAddUser={addUsersHandler} />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
