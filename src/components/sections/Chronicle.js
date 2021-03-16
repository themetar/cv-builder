import {Component} from "react";
import AddRemoveBtns from "../CollectionButtons";

/*
  Renders a history of time periods.
  Each entry has a start year, an end year, location, title, and an optional description text.
*/
class Chronicle extends Component {
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
      where: "Enter Organization name",
      what: "Enter Gained Title",
      description: "",
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
        handleDescription:   this.handleChange.bind(this, i, "description"),
      });
    }

    // remove handlers if extra
    this.inputHandlers.splice(entries.length, this.inputHandlers.length - entries.length);

    const mapFunc = mode === "show" ? this.mapShow : this.mapEdit;

    return (
      <div>
        {entries.map(mapFunc)}
        {mode === "edit" && (
          <AddRemoveBtns handleAdd={this.handleAdd} handleRemove={this.handleRemove} count={entries.length} />
        )}
      </div>
    );
  }

  /*
    Render show elements
  */
  mapShow = (entry, index) => {
    const {from, until, where, what, description} = entry;

    return (
      <div key={index} className="chrono-entry">
        <p>
          <span className="year-from">{from}</span>
          <span className="year-until">{until}</span>  
          <span className="organization">{where}</span>
        </p>
        <p className="gained-title">
          {what}
        </p>
        {description && <p>{description}</p>}
      </div>  
    );
  }

  /*
    Render edit elements
  */
  mapEdit = (entry, index) => {
    const {from, until, where, what, description} = entry;

    const {handleFrom, handleUntil, handleWhere, handleWhat, handleDescription} = this.inputHandlers[index];

    return (
      <div key={index} className="chrono-entry">
        <div className="edit-when-where m-b-1">
          <input type="number" min="1900" value={from} onChange={handleFrom}/>
          <input type="number" min="1900" value={until} onChange={handleUntil}/>
          <input type="text" value={where} onChange={handleWhere}/>
        </div>
        <input type="text" value={what} onChange={handleWhat} className="m-b-1"/>
        <input type="text" value={description} placeholder="Optional details" onChange={handleDescription} className="m-b-1"/>
      </div>
    );
  }
}

export default Chronicle;
