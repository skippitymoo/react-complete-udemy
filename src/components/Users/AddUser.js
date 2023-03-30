import { useState } from "react";
import "./AddUser.scss";

const AddUser = () => {
  const [usernameVal, setUserName] = useState("");
  const [ageVal, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    //const data = new FormData(event.target);

    if (!usernameVal || !ageVal) {
      window.location.hash = "popup";
    } else {
      setUserName("");
      setAge("");
    }

    // const fieldsMissing = [...data.entries()].some((field) => !field[1]);

    // if (fieldsMissing) {
    //   window.location.hash = "popup";
    // } else {
    //   event.target.reset();
    // }
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
          value={usernameVal}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="form__label" htmlFor="age">
          Age (Years)
        </label>
        <input
          className="form__input"
          type="number"
          name="age"
          id="age"
          value={ageVal}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="btn form__button add-user__button">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
