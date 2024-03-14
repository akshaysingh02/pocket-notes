import submitIcon from "../images/submit_icon.svg";
import "../styles/NotesHolder.scss";
import { useState } from "react";

const getInitials = (name) => {
  const words = name.trim().split(" ");
  const firstInitial = words[0][0] || "";
  const lastInitial = words.length > 1 ? words[words.length - 1][0] : "";
  return (firstInitial + lastInitial).toUpperCase();
};

function NotesHolder({ group }) {
  const [note, setNote] = useState("");
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
  };

  return (
    <>
      <div className="notes-area">
        <div className="notes-header" style={{ backgroundColor: "blue" }}>
          <div
            className="group-initials_header"
            // style={{ backgroundColor: group.color }}
          >
            MN
          </div>
          <h3>My groups</h3>
        </div>

        <div className="notes-content-wrapper">
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
          <div className="notes-block">
            <div className="notes-data">
              <p>
                Another productive way to use this tool to begin a daily writing
                routine. One way is to generate a random paragraph with the
                intention to try to rewrite it while still keeping the original
                meaning. The purpose here is to just get the writing started so
                that when the writer goes onto their day's writing projects,
                words are already flowing from their fingers.
              </p>
            </div>
            <div className="notes-creation-time">
              <p>9 Mar 2023</p>
              <div className="divider" />
              <p>10:10 AM</p>
            </div>
          </div>
        </div>

        <div
          className="notes-writing-wrapper"
          style={{ backgroundColor: "blue" }}
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
              style={{ cursor: note.trim() ? 'pointer' : 'not-allowed' }}
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
