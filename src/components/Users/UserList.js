import User from "./User";

import styles from "./UserList.module.scss";

const UserList = (props) => {
  return (
    <div className={styles.users__list}>
      {props.users.map((u) => (
        <User Name={u.name} Age={u.age} key={u.name} />
      ))}
    </div>
  );
};

export default UserList;
