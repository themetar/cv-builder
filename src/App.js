import './App.css';
import {Component} from "react";
import Section from "./components/Section";

class App extends Component {
  constructor() {
    super();

    // All of the CV data is held in root state, and propagated to components
    this.state = {
      cv: {
        personal: {
          name: "Your Name",
          about: "About yourself",
        },
        skills: [
          "Web development",
          "Brick-laying",
        ],
      },
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  /*
    Update callback. Icorporates updates from edited sections into state.cv

    section - Which section the data is for
    data - New data
  */
  handleUpdate(section, data) {
    const cv = {...this.state.cv, [section]: data}
    this.setState({cv: cv});
  }

  render() {
    const {personal, skills} = this.state.cv;

    return (
      <div className="App">
        <Section type="personal" data={personal} onUpdate={this.handleUpdate} />
        <Section type="skills" data={skills} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
