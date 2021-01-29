import {Component} from "react";

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
      <div>
        {mode === "show" &&
            <button data-action="edit" onClick={this.handleClick}>
              <span aria-hidden="true" className="icon-pencil"></span>
              <span className="screen-reader-text">Edit</span>
            </button>
        }
        {mode !== "show" &&
            <button data-action="save" onClick={this.handleClick}>
              <span aria-hidden="true" className="icon-checkmark"></span>
              <span className="screen-reader-text">Save</span>
            </button>
        }
        {mode !== "show" &&
            <button data-action="cancel" onClick={this.handleClick}>
              <span aria-hidden="true" className="icon-undo"></span>
              <span className="screen-reader-text">Cancel</span>
            </button>
        }
        {mode !== "show" && <button data-action="delete" onClick={this.handleClick}>Delete</button>}
      </div>
    )
  }
}

export default EditActions;
