import {Component} from "react";
/*
  Render Skills section data.
  On input, sends data via callback.
*/
class Skills extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /*
    On user input, transform to string array and send to parent via callback
  */
  handleChange(event) {
    const raw = event.target.value;
    const data = raw.split(",");
    this.props.onChange(data);
  }

  render() {
    const {mode, data} = this.props;

    // when displaying
    const show = (
      <ul>
        {data.map(skill => {
          return (
            <li key={skill}>{skill}</li>
          );
        })}
      </ul>
    );

    // when editing
    const edit = (
      <textarea value={data.join(",")} onChange={this.handleChange} />
    ); 

    return (
      <div>
        <h2>Skills</h2>
        {mode === "show" ? show : edit}
      </div>
    );
  }
}

export default Skills;
