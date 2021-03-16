import {Component} from "react";

/*
  Displays a collection of topics and information about them
*/
class OtherSkills extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.inputHandlers = [];

    this.editMap = this.editMap.bind(this);
  }

  handleAdd() {
    const data = this.props.data.slice(); // copy array

    // add new entry
    data.push({
      topic: "",
      details: "",
    });

    // send data
    this.props.onChange(data);
  }

  handleRemove() {
    const data = this.props.data.slice(); // copy array
    
    if (data.length > 1) {
      // remove last
      data.pop();
      // send data
      this.props.onChange(data);
    }
  }

  handleInput(index, field, event) {
    const data = this.props.data.slice();
    data[index][field] = event.target.value;
    this.props.onChange(data);
  }

  render() {
    const {data, mode} = this.props;

    // add handlers if needed
    for(var i = this.inputHandlers.length; i < data.length; i++) {
      this.inputHandlers.push({
        handleTopic:   this.handleInput.bind(this, i, "topic"),
        handleDetails:  this.handleInput.bind(this, i, "details"),
      });
    }

    // remove handlers if extra
    this.inputHandlers.splice(data.length, this.inputHandlers.length - data.length);

    return (
      <div>
        <div>
        {
          mode === "show" && data.map(this.showMap)
        }
        {
          mode === "edit" && data.map(this.editMap)
        }
        </div>
        {mode === "edit" && (
          <div>
            <button onClick={this.handleAdd}>
              <span aria-hidden="true" className="icon-plus"></span>
              <span className="screen-reader-text">Add</span>
            </button>
            {data.length > 1 && <button onClick={this.handleRemove}>
                <span aria-hidden="true" className="icon-cross"></span>
                <span className="screen-reader-text">Remove</span>
              </button>}
          </div>
        )}
      </div>
    );
  }

  showMap(skill, index) {
    return (
      <div key={index}>
        <h3>{skill.topic}</h3>
        <p>{skill.details}</p>
      </div>
    );
  }

  editMap(skill, index) {
    return (
      <div key={index}>
        <input type="text" value={skill.topic} onChange={this.inputHandlers[index].handleTopic} />
        <textarea value={skill.details} onChange={this.inputHandlers[index].handleDetails}/>
      </div>
    );
  }
}

export default OtherSkills;
