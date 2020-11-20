import {Component} from "react";
import Personal from "./sections/Personal";
import Skills from "./sections/Skills";
import EditActions from "./EditActions";

class Section extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mode: "show",
      data: props.data,
    };

    this.handleAction = this.handleAction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAction(action) {
    const {onUpdate} = this.props;
    const {type} = this.props;

    if (action === "edit") {
      this.setState({mode: "edit"});
    }
    if (action === "cancel") {
      this.setState({mode: "show", data: this.props.data});
    }
    if (action === "save") {
      this.setState({mode: "show"});
      onUpdate(type, this.state.data); // TODO: use id or sectionName other identifier (add to props) instead of 'type'
    }
  }

  handleChange(newData) {
    this.setState({data: newData});
  }

  render() {
    const {mode} = this.state
    const {type} = this.props;
    const {data} = mode === "show" ? this.props : this.state;

    return (
      <section>
        {type === "personal" && <Personal data={data} mode={mode} onChange={this.handleChange} />}
        {type === "skills" && <Skills data={data} mode={mode} />}
        <EditActions mode={mode} onAction={this.handleAction}/>
      </section>
    );
  }
}

export default Section;
