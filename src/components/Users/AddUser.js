import { useState } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Popup from "../UI/Popup";
import styles from "./AddUser.module.scss";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [popupMessage, setPopupMessage] = useState({
    header: "",
    text: "",
    show: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    //const data = new FormData(event.target);

    if (!enteredUserName || !enteredAge) {
      setPopupMessage({
        header: "Invalid input",
        text: "Please enter a valid age and name (non-empty values).",
        show: true,
      });

      return;
    }

    if (+enteredAge < 1) {
      setPopupMessage({
        header: "Invalid input",
        text: "Please enter a valid age (> 0).",
        show: true,
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

  const popupCloseHandler = () => {
    setPopupMessage({
      header: "",
      text: "",
      show: false,
    });
  };

  return (
    <>
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
      {ReactDOM.createPortal(
        <Popup message={popupMessage} onConfirm={popupCloseHandler} />,
        document.getElementById("popup-root")
      )}
    </>
  );
};

export default AddUser;
