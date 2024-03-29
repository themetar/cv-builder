import { useState } from 'react';
import './App.css';
import Section from "./components/Section";

function App() {
    // All of the CV data is held in root state, and propagated to components
    const [cv, setCV] = useState([
      {
        type: "personal",
        id: "personal",
        data: {
          name: "Harry James Potter",
          about: "Wizard. Head of the Department of Magical Law Enforcement. The boy who lived.",
          contactList: [
            {
              type: "email", value: "hpotter@mom.gov.mag",
            },
            {
              type: "address", value: "Some Street 100, London, England, Great Britain",
            },
            {
              type: "tel", value: "555-666-444",
            },
            {
              type: "web", value: "https://harrypotter.fandom.com/wiki/Harry_Potter",
            },
          ],
        },
      },
      {
        type: "skills",
        id: "skills",
        title: "Skills",
        data: [
          "Defence against Dark Arts",
          "Advanced broomstick piloting",
          "Care of Magical Animals",
          "Parseltongue",
          "MS Office",
        ],
      },
      {
        type: "chronicle",
        id: "education",
        title: "Education",
        data: [
          {
            from: "1991",
            until: "1997",
            where: "Hogwarts School of Witchcraft and Wizardry",
            what: "Graduate",
          },
        ]
      },
      {
        type: "chronicle",
        id: "work",
        title: "Work",
        data: [
          {
            from: "2017",
            until: "",
            where: "British Ministry of Magic",
            what: "Head of the Department of Magical Law Enforcement",
            description: "Oversees all operations of all subsections of the Department",
          },
          {
            from: "2007",
            until: "2016",
            where: "British Ministry of Magic",
            what: "Auror",
            description: "Revolutionised the Auror Department at the Ministry of Magic",
          },
        ]
      },
      {
        type: "otherSkills",
        id: "other",
        title: "Other Skills",
        data: [
          {
            topic: "Quidditch",
            details: "Won two Quidditch cups."
          },
        ]
      },
    ]);

  /*
    Update callback. Icorporates updates from edited sections into cv

    section - Which section the data is for
    data - New data
  */
  function handleUpdate(sectionId, data) {
    const updated = cv.slice();
    updated[cv.findIndex(entry => entry.id === sectionId)].data = data;
    setCV(updated);
  }

  /*
    Click handler for the print button.
  */
  function handlePrintButton(event) {
    window.print();
  }

  return (
    <div className="App">
      {cv.map(section => (
        <Section key={section.id} id={section.id} type={section.type} title={section.title} data={section.data} onUpdate={handleUpdate} />
      ))}
      <button onClick={handlePrintButton} className="print-btn"
              title="Print your CV">Print</button>
      <footer>
        Made by <a href="https://github.com/themetar" target="_blank">@themetar</a>
      </footer>
    </div>
  );
  
}


export default App;
