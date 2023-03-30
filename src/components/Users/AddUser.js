import "./AddUser.scss";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const fieldsMissing = [...data.entries()].some((field) => !field[1]);

    if (fieldsMissing) {
      window.location.hash = "popup";
    } else {
      event.target.reset();
    }
  };

  return (
    <div className="add-user">
      <form className="form add-user__form" onSubmit={submitHandler}>
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          name="username"
          id="username"
        />
        <label className="form__label" htmlFor="age">
          Age (Years)
        </label>
        <input className="form__input" type="number" name="age" id="age" />
        <button className="btn form__button add-user__button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
