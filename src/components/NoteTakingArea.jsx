import NotesHolder from "./NotesHolder";
import EmptyArea from "./emptyArea";


function NoteTakingArea() {
  return (
    <>
      <div className="right-wrapper">
        {/* <EmptyArea /> */}
        <NotesHolder />
      </div>
    </>
  );
}

export default NoteTakingArea;
