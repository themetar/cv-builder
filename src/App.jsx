import { useState } from 'react';
import './App.css';
import Section from "./components/Section";
import {data as defaultData} from "./data";

function App() {
    // All of the CV data is held in root state, and propagated to components
    const [cv, setCV] = useState(defaultData);

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
