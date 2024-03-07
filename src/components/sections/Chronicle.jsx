import AddRemoveBtns from "../CollectionButtons";

/*
  Renders a history of time periods.
  Each entry has a start year, an end year, location, title, and an optional description text.
*/
function Chronicle(props) {

  function handleChange(index, field, event) {
    const data = props.data.slice(); // copy array
    data[index] = {...data[index]}; // copy entry
    data[index][field] = event.target.value; // change field
    props.onChange(data);
  }

  function handleAdd() {
    const data = props.data.slice(); // copy array

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
    props.onChange(data);
  }

  function handleRemove() {
    const data = props.data.slice(); // copy array
    if (data.length > 1) {
      data.pop(); // remove last
      // send data
      props.onChange(data);
    }
  }

  const {mode} = props;
  const entries = props.data;

  /*
    Render show elements
  */
  const mapShow = (entry, index) => {
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
  const mapEdit = (entry, index) => {
    const {from, until, where, what, description} = entry;

    const handleFrom  =   handleChange.bind(this, index, "from");
    const handleUntil =   handleChange.bind(this, index, "until");
    const handleWhere =   handleChange.bind(this, index, "where");
    const handleWhat  =   handleChange.bind(this, index, "what");
    const handleDescription =   handleChange.bind(this, index, "description");


    return (
      <div key={index} className="chrono-entry">
        <div className="edit-when-where m-b-1">
          <input type="number" min="1900" value={from} onChange={handleFrom}/>
          <input type="number" min="1900" value={until} onChange={handleUntil}/>
          <input type="text" value={where} onChange={handleWhere}/>
        </div>
        <input type="text" value={what} onChange={handleWhat} className="m-b-1"/>
        <input type="text" value={description} placeholder="Optional details" onChange={handleDescription}/>
      </div>
    );
  };

  const mapFunc = mode === "show" ? mapShow : mapEdit;

  return (
    <div>
      {entries.map(mapFunc)}
      {mode === "edit" && (
        <AddRemoveBtns handleAdd={handleAdd} handleRemove={handleRemove} count={entries.length} />
      )}
    </div>
  );
}

export default Chronicle;
