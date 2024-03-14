import { useState, useEffect } from "react";
import "./App.css";
import GroupList from "./components/GroupList";
import NoteTakingArea from "./components/NoteTakingArea";
import PopupModal from "./components/PopupModal";
import { ModalContextProvider } from "./Contexts/ModalContext";

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    if (selectedGroup) {
      const storedNotes =
        JSON.parse(localStorage.getItem(`notes_${selectedGroup}`)) || [];
      setNotes(storedNotes);
    }
  }, [selectedGroup]);

  const addGroup = (group) => {
    const newGroup = { ...group, id: Date.now().toString() };
    setGroups([...groups, newGroup]);
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));

    setNotes([
      ...notes,
      {
        content: "Thank you for choosing pocket notes",
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    ]);
    localStorage.setItem(
      `notes_${newGroup.id}`,
      JSON.stringify([
        {
          content: "Thank you for choosing pocket notes",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
        },
      ])
    );
  };

  const selectGroup = (groupId) => {
    setSelectedGroup(groupId);
  };

  const selectedGroupData = selectGroup
    ? groups.find((group) => group.id === selectGroup)
    : null;

  return (
    <div className="App">
      <ModalContextProvider>
        <GroupList groups={groups} selectGroup={selectGroup} />
        <NoteTakingArea
          selectedGroup={selectedGroupData}
          notes={notes}
          setNotes={setNotes}
        />
        <PopupModal addGroup={addGroup} />
      </ModalContextProvider>
    </div>
  );
}

export default App;
