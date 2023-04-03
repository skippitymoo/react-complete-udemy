const Button = (props) => {
  const btnType = props.type ? props.type : "button";

  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={btnType}
    >
      {props.children}
    </button>
  );
};

export default Button;
