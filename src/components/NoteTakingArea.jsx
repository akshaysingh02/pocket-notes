import illustration from "../images/illustration.png";
import lockIcon from "../images/lock-icon.svg";
function NoteTakingArea() {
  return (
    <>
      <div className="right-wrapper">
        <div className="empty-area">
          <img src={illustration} alt="" />
          <h2>Pocket Notes</h2>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
          <div>
            <img src={lockIcon} alt="" />
            <p>end-to-end encrypted</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteTakingArea;
