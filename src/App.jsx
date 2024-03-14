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

  // useEffect(() => {
  //   if (selectedGroup) {
  //     const storedNotes =
  //       JSON.parse(localStorage.getItem(`notes_${selectedGroup}`)) || [];
  //     setNotes(storedNotes);
  //   }
  // }, [selectedGroup]);

  const addGroup = (group) => {
    const newGroup = { ...group, id: Date.now().toString() };
    setGroups([...groups, newGroup]);
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
  };

  // const selectGroup = (groupId) => {
  //   setSelectedGroup(groupId);
  // };


  return (
    <div className="App">
      <ModalContextProvider>
        <GroupList groups={groups}  />
        <NoteTakingArea
          notes={notes}
          setNotes={setNotes}
        />
        <PopupModal addGroup={addGroup}/>
      </ModalContextProvider>
    </div>
  );
}

export default App;
