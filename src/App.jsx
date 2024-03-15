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

  //for mobile display logic
  const [sidebarVisibility, setSideBarVisibility] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600); // Initial mobile check

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // Update mobile state on resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures useEffect runs only once

  //resize component ends here

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    const newGroup = { ...group, id: Date.now().toString(), notes: [] };
    setGroups([...groups, newGroup]);
    setSelectedGroupId(newGroup.id);
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
          isMobile={isMobile}
          sidebarVisibility={sidebarVisibility}
          setSideBarVisibility={setSideBarVisibility}
        />
        <div className={isMobile && sidebarVisibility ? "right-wrapper hidden" : "right-wrapper"}>
          {selectedGroupId ? (
            <NoteTakingArea
              selectedGroupId={selectedGroupId}
              onAddNote={addNoteToGroup}
              groups={groups}
              isMobile={isMobile}
              sidebarVisibility={sidebarVisibility}
              setSideBarVisibility={setSideBarVisibility}
            />
          ) : (
            <EmptyArea />
          )}
        </div>
        <PopupModal addGroup={addGroup} />
      </ModalContextProvider>
    </div>
  );
}

export default App;
