import {Component} from "react";

/*
  Renders the personal info section elements.
  On input, sends data via callback.
*/
class Personal extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleChange.bind(this, "name");
    this.handleAboutChange = this.handleChange.bind(this, "about");
  }

  handleChange(field, event) {
    const data = {...this.props.data};
    data[field] = event.target.value;
    this.props.onChange(data);
  }

  render() {
    const {mode, data} = this.props;

    // when displaying
    const show = (
      <div>
        <h1>{data.name}</h1>
        <p>{data.about}</p>
      </div>
    );

    // when editing
    const inputs = (
      <div>
        <input type="text" value={data.name} onChange={this.handleNameChange} />
        <input type="text" value={data.about} onChange={this.handleAboutChange} />
      </div>
    );

    return (mode === "show" ? show : inputs);
  }
}

export default Personal;
