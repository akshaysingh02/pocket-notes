import Popup from "./Popup";
import { useModalContext } from "../Contexts/ModalContext";

function PopupModal({addGroup}) {
  const {popupVisibility} = useModalContext();
  return (
    <>
        {popupVisibility ? <Popup addGroup={addGroup}/> : <></>}
    </>
  );
}

export default PopupModal;
