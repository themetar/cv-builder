import {Component} from "react";

class Skills extends Component {
  render() {
    const {data} = this.props;

    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {data.map(skill => {
            return (
              <li key={skill}>{skill}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
