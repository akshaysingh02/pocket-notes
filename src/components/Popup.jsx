import "../styles/Popup.scss";
import { useModalContext } from "../Contexts/ModalContext";
import { useState } from "react";

const colors = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];



function Popup({ addGroup }) {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [error, setError] = useState('')
  const { hidePopup } = useModalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!groupName.trim()){
      setError('Please enter a group name')
      return;
    }
    addGroup({ name: groupName, color: selectedColor });
    hidePopup();
  };
  const handleChange = (e) =>{
    setGroupName(e.target.value)
    setError('')
  }

  return (
    <div className="ModalWrapper">
      <div className="bg-click" onClick={hidePopup}></div>
      <form className="create-group-wrapper" onSubmit={handleSubmit}>
        <h3>Create New Group</h3>
        <div className="group-name-wrapper">
          <p>Group Name</p>
          <input
            type="text"
            id="groupName"
            placeholder="Enter group name"
            value={groupName}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-text" >{error}</p>}
        <div className="color-picker-wrapper">
          <p>Choose colour</p>
          <div className="color-wrapper">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`circle ${selectedColor === color ? "selected" : ""}`}
                style={{ backgroundColor: color }}
                onClick={()=>setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="create-button" onClick={handleSubmit} >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Popup;
