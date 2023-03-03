import User from "./User";

import "./UserList.scss";

const UserList = (props) => {
  return (
    <div className="users__list">
      {props.users.map((u) => (
        <User Name={u.name} Age={u.age} key={u.name} />
      ))}
    </div>
  );
};

export default UserList;
