import './App.css';
import {Component} from "react";
import Section from "./components/Section";

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
        <Section type="personal" data={personal} />
        <Section type="skills" data={skills} />
      </div>
    );
  }
}

export default App;
