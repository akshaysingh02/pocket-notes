import NotesHolder from "./NotesHolder";
import EmptyArea from "./emptyArea";


function NoteTakingArea({selectedGroup,notes,setNotes}) {
  return (
    <>
      <div className="right-wrapper">
      {selectedGroup ? (
          <NotesHolder selectedGroup={selectedGroup} notes={notes} setNotes={setNotes}/>
        ) : (
          <EmptyArea />
        )}
      </div>
    </>
  );
}

export default NoteTakingArea;
