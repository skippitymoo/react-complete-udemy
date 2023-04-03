import Popup from "./components/UI/Popup";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
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
          <AddUser />
          <UserList users={users} />
        </div>
      </div>
      <Popup />
    </>
  );
};

export default App;
