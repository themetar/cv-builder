import {Component} from "react";

class EditActions extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onAction(event.target.dataset.action);
  }

  render() {
    const {mode} = this.props;

    return (
      <div>
        {mode === "show" && <button data-action="edit" onClick={this.handleClick}>Edit</button>}
        {mode !== "show" && <button data-action="save" onClick={this.handleClick}>Save</button>}
        {mode !== "show" && <button data-action="cancel" onClick={this.handleClick}>Cancel</button>}
        {mode !== "show" && <button data-action="delete" onClick={this.handleClick}>Delete</button>}
      </div>
    )
  }
}

export default EditActions;
