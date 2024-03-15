import { useState, useEffect } from "react";
import "./App.css";
import GroupList from "./components/GroupList";
import NoteTakingArea from "./components/NoteTakingArea";
import PopupModal from "./components/PopupModal";
import { ModalContextProvider } from "./Contexts/ModalContext";
import EmptyArea from "./components/emptyArea";
import "./styles/notes.scss";
// import { format } from "date-fns";

const initialGroups = JSON.parse(localStorage.getItem("groups")) || [];

function App() {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    const newGroup = { ...group, id: Date.now().toString(), notes: [] };
    setGroups([...groups, newGroup]);
  };

  const addNoteToGroup = (groupId, note) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        return { ...group, notes: [...group.notes, note] };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleGroupSelect = (groupId) => {
    setSelectedGroupId(groupId);
  };

  return (
    <div className="App">
      <ModalContextProvider>
        <GroupList
          groups={groups}
          onGroupSelect={handleGroupSelect}
          selectedGroupId={selectedGroupId}
        />
        <div className="right-wrapper">
          {selectedGroupId ? (
            <NoteTakingArea
              selectedGroupId={selectedGroupId}
              onAddNote={addNoteToGroup}
              groups={groups}
            />
          ) : (
            <EmptyArea /> // Display EmptyArea when no group is selected
          )}
        </div>
        <PopupModal addGroup={addGroup} />
      </ModalContextProvider>
    </div>
  );
}

export default App;
