import { useState } from "react";

const UserInput = (props) => {
  const [userName, setUserName] = useState("");

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const submitHandler = () => {
    props.onAddUser(userName);
  }

  return (
    <div>
      <input type="text" placeholder="user name" onChange={changeNameHandler} />
      <input type="number" step="1" />
      <input type="button" value="Submit" onClick={submitHandler} />
    </div>
  );
};

export default UserInput;
