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
  }

  handleAction(action) {
    if (action === "edit") {
      this.setState({mode: "edit"});
    }
    if (action === "cancel") {
      this.setState({mode: "show"});
    }
  }

  render() {
    const {mode} = this.state
    const {type} = this.props;
    const {data} = mode === "show" ? this.props : this.state;

    return (
      <section>
        {type === "personal" && <Personal data={data} mode={mode} />}
        {type === "skills" && <Skills data={data} mode={mode} />}
        <EditActions mode={mode} onAction={this.handleAction}/>
      </section>
    );
  }
}

export default Section;
