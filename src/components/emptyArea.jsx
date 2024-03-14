import illustration from "../images/illustration.png";
import lockIcon from "../images/lock-icon.svg";
import "../styles/notes.scss";

function EmptyArea() {
  return (
    <>
      <div className="empty-area">
        <img src={illustration} alt="" />
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="encryption-text-wrapper">
        <img src={lockIcon} alt="" />
        <p>end-to-end encrypted</p>
      </div>
    </>
  );
}

export default EmptyArea;
