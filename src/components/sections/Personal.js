import {Component} from "react";

class Personal extends Component {
  render() {
    const {mode, data} = this.props;

    // if displaying
    const show = (
      <div>
        <h1>{data.name}</h1>
        <p>{data.about}</p>
      </div>
    );

    // if editing
    const inputs = (
      <div>
        <h1>TODO</h1>
        <p>TODO</p>
      </div>
    );

    return (mode === "show" ? show : inputs);
  }
}

export default Personal;
