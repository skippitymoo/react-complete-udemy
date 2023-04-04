import Button from "./Button";
import "./_popup.scss";

const Popup = (props) => {
  return (
    <div className="popup" id="popup">
      <div className="popup__container">
        <header className="popup__header">{props.message.header}</header>
        <section className="popup__content">
          <p className="popup__text">{props.message.text}</p>
        </section>
        <footer className="popup__footer">
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default Popup;
