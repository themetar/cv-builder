import Personal from "./sections/Personal";
import Skills from "./sections/Skills";
import OtherSkills from "./sections/OtherSkills";
import Chronicle from "./sections/Chronicle";
import EditActions from "./EditActions";
import { useState } from "react";

/*
  Renders a CV section, depending on section type. Manages the edit actions (edit, save, delete..) input.
*/
function Section(props) {
  
  /*
    State holds a copy of it's section data. This is the working copy that gets modified in edit mode.
    The local state data gets sent upwards on save, and discarded on cancel.
  */
  
  const [mode, setMode] = useState("show");
  const [data, setData] = useState(props.data);  

  /*
    Callback for the EditActions component

    action - "edit" | "cancel" | "save" | "delete"
  */
  const handleAction = (action) => {
    const {id, onUpdate} = props;

    if (action === "edit") {
      // change the display mode to editing
      setMode("edit");
    }
    if (action === "cancel") {
      // change the display mode to showing,
      setMode("show");
      // and reset state data
      setData(props.data);
    }
    if (action === "save") {
      // change the display mode to showing
      setMode("show");
      /* send state data to parent component,
         where it will be merged with rest of the CV,
         and passed back down as prop */
      onUpdate(id, data);
    }
  }

  /*
    User input callback. Updates local state with user's input.
  */
  const handleChange = (newData) => {
    setData(newData);
  }

  
  const {type, title} = props;
  const renderData = mode === "show" ? props.data : data;

  return (
    <section>
      {title && <h2>{title}</h2>}
      {type === "personal" && <Personal data={renderData} mode={mode} onChange={handleChange} />}
      {type === "skills" && <Skills data={renderData} mode={mode} onChange={handleChange} />}
      {type === "chronicle" && <Chronicle data={renderData} mode={mode} onChange={handleChange} />}
      {type === "otherSkills" && <OtherSkills data={renderData} mode={mode} onChange={handleChange} />}
      <EditActions mode={mode} onAction={handleAction}/>
    </section>
  );
}

export default Section;
