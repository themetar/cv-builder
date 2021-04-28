import AddRemoveBtns from "../CollectionButtons";

/*
  Displays a collection of topics and information about them
*/
function OtherSkills(props) {
  const {data, mode} = props;

  function handleInput(index, field, event) {
    const data = props.data.slice();
    data[index] = {...data[index]}; // copy object
    data[index][field] = event.target.value;
    props.onChange(data);
  }

  const showMap = (skill, index) => {
    return (
      <div key={index}>
        <h3>{skill.topic}</h3>
        <p>{skill.details}</p>
      </div>
    );
  };

  const editMap = (skill, index) => {
    const handleTopic =   handleInput.bind(null, index, "topic");
    const handleDetails = handleInput.bind(null, index, "details");

    return (
      <div key={index}>
        <input type="text" value={skill.topic} onChange={handleTopic} className="m-b-1/2" />
        <textarea value={skill.details} onChange={handleDetails}/>
      </div>
    );
  };

  function handleAdd() {
    const data = props.data.slice(); // copy array

    // add new entry
    data.push({
      topic: "",
      details: "",
    });

    // send data
    props.onChange(data);
  }

  function handleRemove() {
    const data = props.data.slice(); // copy array
    
    if (data.length > 1) {
      // remove last
      data.pop();
      // send data
      props.onChange(data);
    }
  }

  return (
    <div className="OtherSkills">
      <div className="grid m-b-2">
      {
        mode === "show" && data.map(showMap)
      }
      {
        mode === "edit" && data.map(editMap)
      }
      </div>
      {mode === "edit" && (
        <AddRemoveBtns handleAdd={handleAdd} handleRemove={handleRemove} count={data.length} />
      )}
    </div>
  );  
}

export default OtherSkills;
