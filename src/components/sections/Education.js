import {Component} from "react";

/*
  Renders (a single entry of) the person's education history.
*/
class Education extends Component {
  constructor(props) {
    super(props);

    this.inputHandlers = this.props.data.map((_, index) => ({
      handleFrom:   this.handleChange.bind(this, index, "from"),
      handleUntil:  this.handleChange.bind(this, index, "until"),
      handleWhere:  this.handleChange.bind(this, index, "where"),
      handleWhat:   this.handleChange.bind(this, index, "what"),
    }));
  }

  handleChange(index, field, event) {
    const data = this.props.data.slice(); // copy array
    data[index] = {...data[index]}; // copy entry
    data[index][field] = event.target.value; // change field
    this.props.onChange(data);
  }

  render() {
    const {mode} = this.props;

    const mapFunc = mode === "show" ? this.mapShow : this.mapEdit;

    return (
      <div>
        {this.props.data.map(mapFunc)}
      </div>
    );
  }

  /*
    Render show elements
  */
  mapShow = (entry, index) => {
    const {from, until, where, what} = entry;

    return (
      <div key={index}>
        <p>
          <span>{from}</span>
          <span>{until}</span>  
          <span> {where}</span>
        </p>
        <p>
          {what}
        </p>
      </div>
    );
  }

  /*
    Render edit  elements
  */
  mapEdit = (entry, index) => {
    const {from, until, where, what} = entry;

    const {handleFrom, handleUntil, handleWhere, handleWhat} = this.inputHandlers[index];

    return (
      <div key={index}>
        <input type="number" min="1900" value={from} onChange={handleFrom}/>
        <input type="number" min="1900" value={until} onChange={handleUntil}/>
        <input type="text" value={where} onChange={handleWhere}/>
        <input type="text" value={what} onChange={handleWhat}/>
      </div>
    );
  }
}

export default Education;
