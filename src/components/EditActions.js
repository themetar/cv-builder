import {Component} from "react";
import './EditActions.css';

class EditActions extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onAction(event.currentTarget.dataset.action);
  }

  render() {
    const {mode} = this.props;

    return (
      <div className="EditActions">
        {mode === "show" &&
            <button data-action="edit" onClick={this.handleClick} className="edit-button">
              <span aria-hidden="true" className="icon-pencil"></span>
              <span className="screen-reader-text">Edit</span>
            </button>
        }
        {mode !== "show" &&
            <button data-action="save" onClick={this.handleClick} className="edit-button m-b-1/2 pop-in">
              <span aria-hidden="true" className="icon-checkmark"></span>
              <span className="screen-reader-text">Save</span>
            </button>
        }
        {mode !== "show" &&
            <button data-action="cancel" onClick={this.handleClick} className="edit-button pop-in">
              <span aria-hidden="true" className="icon-undo"></span>
              <span className="screen-reader-text">Cancel</span>
            </button>
        }
      </div>
    )
  }
}

export default EditActions;
