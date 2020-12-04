import {Component} from "react";
import Personal from "./sections/Personal";
import Skills from "./sections/Skills";
import OtherSkills from "./sections/OtherSkills";
import Chronicle from "./sections/Chronicle";
import EditActions from "./EditActions";

/*
  Renders a CV section, depending on section type. Manages the edit actions (edit, save, delete..) input.
*/
class Section extends Component {
  constructor(props) {
    super(props);
    
    /*
      State holds a copy of it's section data. This is the working copy that gets modified in edit mode.
      The local state data gets sent upwards on save, and discarded on cancel.
    */
    this.state = {
      mode: "show",
      data: props.data,
    };

    this.handleAction = this.handleAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
    Callback for the EditActions component

    action - "edit" | "cancel" | "save" | "delete"
  */
  handleAction(action) {
    const {onUpdate} = this.props;
    const {id} = this.props;

    if (action === "edit") {
      // change the display mode to editing
      this.setState({mode: "edit"});
    }
    if (action === "cancel") {
      // change the display mode to showing, and
      // reset state data
      this.setState({mode: "show", data: this.props.data});
    }
    if (action === "save") {
      // change the display mode to showing
      this.setState({mode: "show"});
      /* send state data to parent component,
         where it will be merged with rest of the CV,
         and passed back down as prop */
      onUpdate(id, this.state.data);
    }
  }

  /*
    User input callback. Updates local state with user's input.
  */
  handleChange(newData) {
    this.setState({data: newData});
  }

  render() {
    const {mode} = this.state
    const {type, title} = this.props;
    const {data} = mode === "show" ? this.props : this.state;

    return (
      <section>
        {title && <h2>{title}</h2>}
        {type === "personal" && <Personal data={data} mode={mode} onChange={this.handleChange} />}
        {type === "skills" && <Skills data={data} mode={mode} onChange={this.handleChange} />}
        {type === "chronicle" && <Chronicle data={data} mode={mode} onChange={this.handleChange} />}
        {type === "otherSkills" && <OtherSkills data={data} mode={mode} onChange={this.handleChange} />}
        <EditActions mode={mode} onAction={this.handleAction}/>
      </section>
    );
  }
}

export default Section;
