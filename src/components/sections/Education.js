import {Component} from "react";

/*
  Renders (a single entry of) the person's education history.
*/
class Education extends Component {
  constructor(props) {
    super(props);

    this.inputHandlers = [];

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(index, field, event) {
    const data = this.props.data.slice(); // copy array
    data[index] = {...data[index]}; // copy entry
    data[index][field] = event.target.value; // change field
    this.props.onChange(data);
  }

  handleAdd() {
    const data = this.props.data.slice(); // copy array

    const year = (new Date()).getFullYear();

    // add new entry
    data.push({
      from: year,
      until: year,
      where: "Enter School name",
      what: "Enter Degree",
    });

    // send data
    this.props.onChange(data);
  }

  handleRemove() {
    const data = this.props.data.slice(); // copy array
    if (data.length > 1) {
      data.pop(); // remove last
      // send data
      this.props.onChange(data);
    }
  }

  render() {
    const {mode} = this.props;
    const entries = this.props.data;

    // add handlers if needed
    for(var i = this.inputHandlers.length; i < entries.length; i++) {
      this.inputHandlers.push({
        handleFrom:   this.handleChange.bind(this, i, "from"),
        handleUntil:  this.handleChange.bind(this, i, "until"),
        handleWhere:  this.handleChange.bind(this, i, "where"),
        handleWhat:   this.handleChange.bind(this, i, "what"),
      });
    }

    // remove handlers if extra
    this.inputHandlers.splice(entries.length, this.inputHandlers.length - entries.length);

    const mapFunc = mode === "show" ? this.mapShow : this.mapEdit;

    return (
      <div>
        {entries.map(mapFunc)}
        {mode === "edit" && (
          <div>
            <button onClick={this.handleAdd}>Add</button>
            {entries.length > 1 && <button onClick={this.handleRemove}>Remove</button>}
          </div>
        )}
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
