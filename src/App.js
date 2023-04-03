import Popup from "./components/UI/Popup";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import styles from "./App.module.scss";
import { useState } from "react";

const defaultUsers = [
  {
    name: "yoyo",
    age: 123,
  },
  {
    name: "bender",
    age: 765,
  },
];

const App = () => {
  const [users, setUsers] = useState(defaultUsers);

  const newUserHandler = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.users}>
          <Card>
            <AddUser onNewUser={newUserHandler} />
          </Card>
          <Card>
            <UserList users={users} />
          </Card>
        </div>
      </div>
      <Popup />
    </>
  );
};

export default App;
