import styles from "./User.module.scss";

const User = (props) => {
  return (
    <div className={styles.user}>
      <span>
        {props.Name} ({props.Age} years old)
      </span>
    </div>
  );
};

export default User;
