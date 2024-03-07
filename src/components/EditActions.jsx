import './EditActions.css';

function EditActions(props) {

  function handleClick(event) {
    props.onAction(event.currentTarget.dataset.action);
  }

  const {mode} = props;

  return (
    <div className="EditActions">
      {mode === "show" &&
          <button data-action="edit" onClick={handleClick} className="edit-button"
                  title="Edit">
            <span aria-hidden="true" className="icon-pencil"></span>
            <span className="screen-reader-text">Edit</span>
          </button>
      }
      {mode !== "show" &&
          <button data-action="save" onClick={handleClick} className="edit-button m-b-1/2 pop-in"
                  title="Save">
            <span aria-hidden="true" className="icon-checkmark"></span>
            <span className="screen-reader-text">Save</span>
          </button>
      }
      {mode !== "show" &&
          <button data-action="cancel" onClick={handleClick} className="edit-button pop-in"
                  title="Cancel">
            <span aria-hidden="true" className="icon-undo"></span>
            <span className="screen-reader-text">Cancel</span>
          </button>
      }
    </div>
  );
}

export default EditActions;
