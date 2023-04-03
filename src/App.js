import Popup from "./components/UI/Popup";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import styles from "./App.module.scss";

const users = [
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
  return (
    <>
      <div className={styles.main}>
        <div className={styles.users}>
          <Card>
            <AddUser />
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
