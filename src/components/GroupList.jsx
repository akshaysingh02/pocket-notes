import "../styles/GroupList.scss";
import Group from "./Group";
import { useModalContext } from "../Contexts/ModalContext";

function GroupList({ groups, selectGroup }) {
  const { showPopup } = useModalContext();
  return (
    <>
      <div className="left-wrapper">
        <div className="heading-wrapper">
          <h1>Pocket Notes</h1>
        </div>
        <div className="groups-container">
        <ul>
          {groups.map((group) => (
            <Group key={group.id} group={group} selectGroup={selectGroup} />
          ))}
        </ul>
        </div>
        <div className="add-group-btn" onClick={showPopup}>
          +
        </div>
      </div>
    </>
  );
}

export default GroupList;
