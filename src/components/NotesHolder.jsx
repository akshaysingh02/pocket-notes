import submitIcon from "../images/submit_icon.svg";
import "../styles/NotesHolder.scss";
import { useState } from "react";
import { format } from "date-fns";

const getInitials = (name) => {
  const words = name.trim().split(" ");
  const firstInitial = words[0][0] || "";
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : "";
  return (firstInitial + lastInitial).toUpperCase();
};

function NotesHolder({}) {
  const [note, setNote] = useState("");
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    const newNote = {
      content: note,
      date: format(new Date(), "dd MMM yyyy"),
      time: format(new Date(), "hh:mm a")
    };
    setNote("")
  };

  return (
    <>
      <div className="notes-area">
        <div className="notes-header" style={{ backgroundColor: "#001F8B" }}>
          <div className="group-initials_header">
            MN
          </div>
          <h3>My groups </h3>
        </div>

        <div className="notes-content-wrapper">
          <div className="notes-block">
            <div className="notes-data">
              <p>content</p>
            </div>
            <div className="notes-creation-time">
              <p>content</p>
              <div className="divider" />
              <p>content</p>
            </div>
          </div>
        </div>

        <div
          className="notes-writing-wrapper"
          style={{ backgroundColor: "#001F8B" }}
        >
          <div className="notes-input-wrapper">
            <textarea
              type="text"
              placeholder="Enter your text here..........."
              value={note}
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
