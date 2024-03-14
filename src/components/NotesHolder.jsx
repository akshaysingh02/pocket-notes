import submitIcon from "../images/submit_icon.svg";
import "../styles/NotesHolder.scss";
import { useState } from "react";

const getInitials = (name) => {
  const words = name.trim().split(" ");
  const firstInitial = words[0][0] || "";
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : "";
  return (firstInitial + lastInitial).toUpperCase();
};

function NotesHolder({ selectedGroup, notes, setNotes }) {
  const [note, setNote] = useState("");
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    const newNote = {
      content: note,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    setNotes([...notes, newNote]);
    setNote("");
  };

  return (
    <>
      <div className="notes-area">
        <div className="notes-header" style={{ backgroundColor: "#001F8B" }}>
          <div
            className="group-initials_header"
            style={{ backgroundColor: selectedGroup.color }}
          >
            {getInitials(selectedGroup.name)}
          </div>
          <h3>{selectedGroup.name}</h3>
        </div>

        <div className="notes-content-wrapper">
          {notes.map((note, index) => (
            <div className="notes-block" key={index}>
              <div className="notes-data">
                <p>{note.content}</p>
              </div>
              <div className="notes-creation-time">
                <p>{note.date}</p>
                <div className="divider" />
                <p>{note.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="notes-writing-wrapper"
          style={{ backgroundColor: "#001F8B" }}
        >
          <div className="notes-input-wrapper">
            <textarea
              type="text"
              placeholder="Enter your text here..........."
              onChange={handleChange}
            />
            <button
              className="notes-submit-button"
              disabled={!note.trim()}
              onClick={handleSubmit}
              style={{ cursor: note.trim() ? "pointer" : "not-allowed" }}
            >
              <img
                src={submitIcon}
                alt=""
                style={{ filter: note.trim() ? "none" : "grayscale(100%)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesHolder;
