import { useState, useEffect } from "react";
import "./App.css";
import GroupList from "./components/GroupList";
import NoteTakingArea from "./components/NoteTakingArea";
import PopupModal from "./components/PopupModal";
import { ModalContextProvider } from "./Contexts/ModalContext";

function App() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);


  const addGroup = (group) => {
    const newGroup = { ...group, id: Date.now().toString() };
    setGroups([...groups, newGroup]);
    localStorage.setItem("groups", JSON.stringify([...groups, newGroup]));
  };

  return (
    <div className="App">
      <ModalContextProvider>
        <GroupList groups={groups} />
        <NoteTakingArea />
        <PopupModal addGroup={addGroup} />
      </ModalContextProvider>
    </div>
  );
}

export default App;
