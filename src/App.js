import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
import "./App.scss";

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
    <div className="main">
      <div className="users">
        <AddUser />
        <UserList users={users} />
      </div>
    </div>
  );
};

export default App;
