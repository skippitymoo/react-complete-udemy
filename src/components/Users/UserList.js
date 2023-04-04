import User from "./User";

import styles from "./UserList.module.scss";

const UserList = (props) => {
  return (
    <ul className={styles.users__list}>
      {props.users.map((u) => (
        <li key={u.name}>
          <User Name={u.name} Age={u.age} key={u.name} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
