import "./AddUser.scss";

const AddUser = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.hash = "popup";
  };

  return (
    <div className="users__add">
      <form className="form user-form" onSubmit={handleSubmit}>
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
        <button className="btn form__button user-form__button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
