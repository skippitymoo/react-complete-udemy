import Button from "./Button";
import "./_popup.scss";

const Popup = (props) => {
  const handleClick = () => {
    window.location.hash = "";
  };

  return (
    <div className="popup" id="popup">
      <div className="popup__container">
        <header className="popup__header">{props.message.header}</header>
        <section className="popup__content">
          <p className="popup__text">{props.message.text}</p>
        </section>
        <footer className="popup__footer">
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default Popup;
