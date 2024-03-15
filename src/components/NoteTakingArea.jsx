import NotesHolder from "./NotesHolder";
import '../styles/notes.scss'

function NoteTakingArea({selectedGroupId,onAddNote,groups,isMobile,sidebarVisibility,setSideBarVisibility}) {
  return (
    <>
          <NotesHolder  selectedGroupId={selectedGroupId} onAddNote={onAddNote} groups={groups} isMobile={isMobile} sidebarVisibility={sidebarVisibility} setSideBarVisibility={setSideBarVisibility} />
    </>
  );
}

export default NoteTakingArea;
