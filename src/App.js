import './App.css';
import {Component} from "react";
import Section from "./components/Section";

class App extends Component {
  constructor() {
    super();

    // All of the CV data is held in root state, and propagated to components
    this.state = {
      cv: [
        {
          type: "personal",
          data: {
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
        },
        {
          type: "skills",
          title: "Skills",
          data: [
            "Web development",
            "Brick-laying",
          ],
        },
        {
          type: "education",
          title: "Education",
          data: [
            {
              from: "2016",
              until: "2020",
              where: "School Name",
              what: "Degree title",
            },
          ]
        },
        {
          type: "otherSkills",
          title: "Other Skills",
          data: [
            {
              topic: "Bilingual",
              details: "I speak Italian"
            },
          ]
        },
      ],
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  /*
    Update callback. Icorporates updates from edited sections into state.cv

    section - Which section the data is for
    data - New data
  */
  handleUpdate(section, data) {
    const cv = this.state.cv.slice();
    cv[cv.findIndex(entry => entry.type === section)].data = data;
    this.setState({cv: cv});
  }

  render() {
    const sections = this.state.cv;

    return (
      <div className="App">
        {sections.map(section => (
          <Section key={section.type + section.title} type={section.type} title={section.title} data={section.data} onUpdate={this.handleUpdate} />
        ))}
      </div>
    );
  }
}

export default App;
