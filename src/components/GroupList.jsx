import "../styles/GroupList.scss";
import Group from "./Group";
import { useModalContext } from "../Contexts/ModalContext";

function GroupList({ groups, onGroupSelect, selectedGroupId,isMobile,sidebarVisibility,setSideBarVisibility }) {
  const { showPopup } = useModalContext();

  const handleClick = (item)=>{
    onGroupSelect(item)
    isMobile && setSideBarVisibility(false) // this will only trigger on mobile
    
  }

  return (
    <>
      <div className={`left-wrapper ${sidebarVisibility ? '' : 'hidden'}`} >
        <div className="heading-wrapper">
          <h1>Pocket Notes</h1>
        </div>
        <div className="groups-container">
          <ul>
            {groups.map((group) => (
              <li
                key={group.id}
                className={selectedGroupId === group.id ? "active" : ""}
                onClick={()=>handleClick(group.id)}
              >
                <Group key={group.id} group={group} />
              </li>
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
