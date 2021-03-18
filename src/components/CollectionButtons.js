import "./CollectionButtons.css";

function CollectionButtons(props) {
  const {handleAdd, handleRemove, count} = props;

  return (
    <div className="CollectionButtons">
      <button onClick={handleAdd} className="plus-btn">
        <span aria-hidden="true" className="icon-plus"></span>
        <span className="screen-reader-text">Add</span>
      </button>
      {count > 1 &&
        <button onClick={handleRemove} className="cross-btn">
          <span aria-hidden="true" className="icon-cross"></span>
          <span className="screen-reader-text">Remove</span>
        </button>}
    </div>
  );
}

export default CollectionButtons;
