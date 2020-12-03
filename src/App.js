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
          contactList: [
            {
              type: "email", value: "user@example.org",
            },
            {
              type: "address", value: "East Street 100, SW",
            },
            {
              type: "tel", value: "555-666-444",
            },
            {
              type: "web", value: "http://example.org",
            },
          ],
        },
        skills: [
          "Web development",
          "Brick-laying",
        ],
        education: [
          {
            from: "2016",
            until: "2020",
            where: "School Name",
            what: "Degree title",
          },
        ],
        otherSkills: [
          {
            topic: "Bilingual",
            details: "I speak Italian"
          },
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
    const {personal, skills, education, otherSkills} = this.state.cv;

    return (
      <div className="App">
        <Section type="personal" data={personal} onUpdate={this.handleUpdate} />
        <Section type="skills" data={skills} onUpdate={this.handleUpdate} />
        <Section type="education" data={education} onUpdate={this.handleUpdate} />
        <Section type="otherSkills" data={otherSkills} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
