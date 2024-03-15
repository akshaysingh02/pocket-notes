import NotesHolder from "./NotesHolder";
import '../styles/notes.scss'

function NoteTakingArea({selectedGroupId,onAddNote,groups}) {
  return (
    <>
          <NotesHolder  selectedGroupId={selectedGroupId} onAddNote={onAddNote} groups={groups} />
    </>
  );
}

export default NoteTakingArea;
