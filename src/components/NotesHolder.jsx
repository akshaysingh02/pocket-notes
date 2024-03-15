import submitIcon from "../images/submit_icon.svg";
import "../styles/NotesHolder.scss";
import { useState } from "react";
import { getInitials } from "../util/GetInitials";
import { format } from "date-fns";
import backArrow from "../images/back-arrow.svg";

function NotesHolder({
  selectedGroupId,
  onAddNote,
  groups,
  isMobile,
  sidebarVisibility,
  setSideBarVisibility,
}) {
  const [newNote, setNewNote] = useState("");

  const handleClick = () => {
    setSideBarVisibility(true); // Handle sidebar visibility on mobile
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const newNoteObject = {
        text: newNote,
        date: format(new Date(), "dd MMM yyyy"),
        time: format(new Date(), "hh:mm a"),
      };
      onAddNote(selectedGroupId, newNoteObject);
      setNewNote("");
    }
  };

  const displayNotesForGroup = (groupId) => {
    const group = groups.find((group) => group.id === selectedGroupId);
    if (group) {
      return group.notes.map((note, index) => (
        <div className="notes-block" key={index}>
          <div className="notes-data">
            <p>{note.text}</p>
          </div>
          <div className="notes-creation-time">
            <p>{note.date}</p>
            <div className="divider" />
            <p>{note.time}</p>
          </div>
        </div>
      ));
    }
  };

  const selectedGroupName = groups.find(
    (group) => group.id === selectedGroupId
  )?.name;
  const selectedGroupColor = groups.find(
    (group) => group.id === selectedGroupId
  )?.color;
  return (
    <>
      {selectedGroupId && (
        <div className={isMobile && sidebarVisibility ? "right-wrapper hidden" : "right-wrapper"}>
          <div className="notes-header">
            {isMobile && (
              <div
                className="arrow-wrapper"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                <img src={backArrow} alt="" />
              </div>
            )}
            <div
              className="group-initials_header"
              style={{ backgroundColor: selectedGroupColor }}
            >
              {getInitials(selectedGroupName)}
            </div>
            <h3>{selectedGroupName}</h3>
          </div>

          <div className="notes-content-wrapper">
            {displayNotesForGroup(selectedGroupId)}
          </div>

          <div className="notes-writing-wrapper">
            <div className="notes-input-wrapper">
              <textarea
                type="text"
                placeholder="Enter your text here..........."
                value={newNote}
                onChange={handleNoteChange}
              />
              <button
                className="notes-submit-button"
                disabled={!newNote.trim()}
                style={{ cursor: newNote.trim() ? "pointer" : "not-allowed" }}
                onClick={handleAddNote}
              >
                <img
                  src={submitIcon}
                  alt=""
                  style={{
                    filter: newNote.trim() ? "none" : "grayscale(100%)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NotesHolder;
