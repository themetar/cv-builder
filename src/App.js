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
          id: "personal",
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
          id: "skills",
          title: "Skills",
          data: [
            "Web development",
            "Brick-laying",
          ],
        },
        {
          type: "chronicle",
          id: "education",
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
          type: "chronicle",
          id: "work",
          title: "Work",
          data: [
            {
              from: "2018",
              until: "2019",
              where: "Business Company",
              what: "Intern",
              description: "Doing business",
            },
          ]
        },
        {
          type: "otherSkills",
          id: "other",
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
    this.handlePrintButton = this.handlePrintButton.bind(this);
  }

  /*
    Update callback. Icorporates updates from edited sections into state.cv

    section - Which section the data is for
    data - New data
  */
  handleUpdate(sectionId, data) {
    const cv = this.state.cv.slice();
    cv[cv.findIndex(entry => entry.id === sectionId)].data = data;
    this.setState({cv: cv});
  }

  /*
    Click handler for the print button.
  */
  handlePrintButton(event) {
    window.print();
  }

  render() {
    const sections = this.state.cv;

    return (
      <div className="App">
        {sections.map(section => (
          <Section key={section.id} id={section.id} type={section.type} title={section.title} data={section.data} onUpdate={this.handleUpdate} />
        ))}
        <button onClick={this.handlePrintButton} className="print-btn"
                title="Print your CV">Print</button>
        <footer>
          Made by <a href="https://github.com/themetar" target="_blank">@themetar</a>
        </footer>
      </div>
    );
  }
}

export default App;
