import {Component} from "react";

/*
  Renders (a single entry of) the person's education history.
*/
class Education extends Component {
  constructor(props) {
    super(props);

    this.handleFrom = this.handleChange.bind(this, "from");
    this.handleUntil = this.handleChange.bind(this, "until");
    this.handleWhere = this.handleChange.bind(this, "where");
    this.handleWhat = this.handleChange.bind(this, "what");
  }

  handleChange(field, event) {
    const data = this.props.data.slice(); // copy array
    data[0] = {...data[0]}; // copy entry
    data[0][field] = event.target.value; // change field
    this.props.onChange(data);
  }

  render() {
    const {mode} = this.props;
    const {from, until, where, what} = this.props.data[0]; // first entry

    const output = mode === "show" ? (
      // when displaying
      <div>
        <p>
          <span>{from}</span>
          <span>{until}</span>  
          <span> {where}</span>
        </p>
        <p>
          {what}
        </p>
      </div>
    ) : (
      // when editing
      <div>
        <input type="number" min="1900" value={from} onChange={this.handleFrom}/>
        <input type="number" min="1900" value={until} onChange={this.handleUntil}/>
        <input type="text" value={where} onChange={this.handleWhere}/>
        <input type="text" value={what} onChange={this.handleWhat}/>
      </div>
    );

    return output;
  }
}

export default Education;
