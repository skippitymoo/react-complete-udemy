import "./User.scss";

const User = (props) => {
  return (
    <div className="user">
      <span>
        {props.Name} ({props.Age} years old)
      </span>
    </div>
  );
};

export default User;
