import {Component} from "react";
import Personal from "./sections/Personal";
import Skills from "./sections/Skills";

class Section extends Component {
  render() {
    const {type, data} = this.props;

    return (
      <section>
        {type === "personal" && <Personal data={data} />}
        {type === "skills" && <Skills data={data} />}
      </section>
    );
  }
}

export default Section;
