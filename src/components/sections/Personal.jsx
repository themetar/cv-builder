/*
  Renders the personal info section elements.
  On input, sends data via callback.
*/
function Personal(props) {

  function handleChange(field, event) {
    const data = {...props.data};
    data[field] = event.target.value;
    props.onChange(data);
  }

  function handleContactChange(field, event) {
    /* shallow copy the contact data */
    const data = {...props.data};
    data.contactList = data.contactList.slice();
    
    /* modify the apropriate field */
    const index = event.target.dataset.index;
    data.contactList[index] = {...data.contactList[index]};
    data.contactList[index][field] = event.target.value;
    
    /* invoke callback */
    props.onChange(data);
  }

  const {mode, data} = props;
  
  const typeToType = new Map([["tel", "tel"], ["web", "url"], ["email", "email"]]);

  // when displaying
  const show = (
    <div>
      <h1 className="bio-name">{data.name}</h1>
      <p className="bio-about">{data.about}</p>
      <ul className="contact-info">
      {
        data.contactList.filter(c => c.value.replace(/\s/g, "") != "").map((c, i) => {
          if (c.type === "address") return <li key={i}><span className="icon-map">&nbsp;</span>{c.value}</li>;
          if (c.type === "tel") return <li key={i}><span className="icon-phone">&nbsp;</span><a href={`tel:${c.value}`}>{c.value}</a></li>;
          if (c.type === "web") return <li key={i}><span className="icon-earth">&nbsp;</span><a href={c.value}>{c.value.replace(/(http|https):\/\//, '')}</a></li>;
          /* if (c.type === "email") */ return <li key={i}><span className="icon-envelope">&nbsp;</span><a href={`mailto:${c.value}`}>{c.value}</a></li>;
        })
      }
      </ul>
    </div>
  );

  const handleNameChange  = handleChange.bind(null, "name");
  const handleAboutChange = handleChange.bind(null, "about");

  const handleContactTypeChange  = handleContactChange.bind(null, "type");
  const handleContactValueChange = handleContactChange.bind(null, "value");

  // when editing
  const inputs = (
    <div>
      <input type="text" value={data.name} onChange={handleNameChange} className="bio-name m-b-1" />
      <input type="text" value={data.about} onChange={handleAboutChange} className="bio-about m-b-1" />
      <ul className="contact-info">
      {
        data.contactList.map((c, i) => {
          return (
            <li key={i}>
              <select value={c.type} data-index={i} onChange={handleContactTypeChange}>
                <option value="tel">Telephone</option>
                <option value="web">Web site</option>
                <option value="address">Address</option>
                <option value="email">e-mail</option>
              </select>
              <input type={typeToType.has(c.type) ? typeToType.get(c.type) : "text"} data-index={i} value={c.value} onChange={handleContactValueChange}/>
            </li>
          );
        })
      }
      </ul>
    </div>
  );

  return (mode === "show" ? show : inputs);
}

export default Personal;
