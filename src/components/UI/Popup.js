import Button from "./Button";
import "./_popup.scss";

const Popup = () => {
  const handleClick = (event) => {
    window.location.hash = "";
  };

  return (
    <div className="popup" id="popup">
      <div className="popup__container">
        <header className="popup__header">Invalid input</header>
        <section className="popup__content">
          <p className="popup__text">
            Please enter a valid age and name (non-empty values).
          </p>
        </section>
        <footer className="popup__footer">
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default Popup;
