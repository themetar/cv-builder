import './App.css';
import {Component} from "react";

class App extends Component {
  constructor() {
    super()
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
  }

  render() {
    const {personal, skills} = this.state.cv;

    return (
      <div className="App">
        <section>
          <h1>{personal.name}</h1>
          <p>{personal.about}</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, i) => {
              return (
                <li>{skill}</li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
