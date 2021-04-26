/*
  Render Skills section data.
  On input, sends data via callback.
*/
function Skills(props) {

  /*
    On user input, transform to string array and send to parent via callback
  */
  function handleChange(event) {
    const raw = event.target.value;
    const data = raw.split(",");
    props.onChange(data);
  }

  const {mode, data} = props;

  // when displaying
  const show = (
    <ul className="skills">
      {data.map(skill => {
        return (
          <li key={skill}>{skill}</li>
        );
      })}
    </ul>
  );

  // when editing
  const edit = (
    <textarea value={data.join(",")} onChange={handleChange} className="skills-input" />
  ); 

  return (
    mode === "show" ? show : edit
  );

}

export default Skills;
