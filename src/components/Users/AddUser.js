import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    //const data = new FormData(event.target);

    if (!enteredUserName || !enteredAge) {
      props.onPopUp({
        header: "Invalid input",
        text: "Please enter a valid age and name (non-empty values).",
      });

      return;
    }

    if (+enteredAge < 1) {
      props.onPopUp({
        header: "Invalid input",
        text: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.onNewUser({ name: enteredUserName, age: enteredAge });
    setEnteredUserName("");
    setEnteredAge("");

    // const fieldsMissing = [...data.entries()].some((field) => !field[1]);

    // if (fieldsMissing) {
    //   window.location.hash = "popup";
    // } else {
    //   event.target.reset();
    // }
  };

  return (
    <div className={styles["add-user"]}>
      <form
        className={`form ${styles["add-user__form"]}`}
        onSubmit={submitHandler}
      >
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          name="username"
          id="username"
          value={enteredUserName}
          onChange={(e) => setEnteredUserName(e.target.value)}
        />
        <label className="form__label" htmlFor="age">
          Age (Years)
        </label>
        <input
          className="form__input"
          type="number"
          name="age"
          id="age"
          value={enteredAge}
          onChange={(e) => setEnteredAge(e.target.value)}
        />
        <Button
          className={`form__button ${styles["add-user__button"]}`}
          type="submit"
        >
          Add User
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
