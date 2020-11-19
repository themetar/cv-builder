import {Component} from "react";

class Personal extends Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.about}</p>
      </div>
    );
  }
}

export default Personal;
