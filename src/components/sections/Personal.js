import {Component} from "react";

/*
  Renders the personal info section elements.
  On input, sends data via callback.
*/
class Personal extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleChange.bind(this, "name");
    this.handleAboutChange = this.handleChange.bind(this, "about");

    this.handleContactTypeChange = this.handleContactChange.bind(this, "type");
    this.handleContactValueChange = this.handleContactChange.bind(this, "value");
  }

  handleChange(field, event) {
    const data = {...this.props.data};
    data[field] = event.target.value;
    this.props.onChange(data);
  }

  handleContactChange(field, event) {
    /* shallow copy the contact data */
    const data = {...this.props.data};
    data.contactList = data.contactList.slice();
    
    /* modify the apropriate field */
    const index = event.target.dataset.index;
    data.contactList[index] = {...data.contactList[index]};
    data.contactList[index][field] = event.target.value;
    
    /* invoke callback */
    this.props.onChange(data);
  }

  render() {
    const {mode, data} = this.props;

    // when displaying
    const show = (
      <div>
        <h1 className="bio-name">{data.name}</h1>
        <p className="bio-about">{data.about}</p>
        <ul className="contact-info">
        {
          data.contactList.map((c, i) => {
            if (c.type === "address") return <li key={i}>{c.value}</li>;
            if (c.type === "tel") return <li key={i}><a href={`tel:${c.value}`}>{c.value}</a></li>;
            if (c.type === "web") return <li key={i}><a href={c.value}>{c.value.replace(/(http|https):\/\//, '')}</a></li>;
            /* if (c.type === "email") */ return <li key={i}><a href={`mailto:${c.value}`}>{c.value}</a></li>;
          })
        }
        </ul>
      </div>
    );

    // when editing
    const inputs = (
      <div>
        <input type="text" value={data.name} onChange={this.handleNameChange} className="bio-name m-b-1" />
        <input type="text" value={data.about} onChange={this.handleAboutChange} className="bio-about m-b-1" />
        <ul className="contact-info">
        {
          data.contactList.map((c, i) => {
            return (
              <li key={i}>
                <select value={c.type} data-index={i} onChange={this.handleContactTypeChange}>
                  <option value="tel">Telephone</option>
                  <option value="web">Web site</option>
                  <option value="address">Address</option>
                  <option value="email">e-mail</option>
                </select>
                <input type={this.typeToType.has(c.type) ? this.typeToType.get(c.type) : "text"} data-index={i} value={c.value} onChange={this.handleContactValueChange}/>
              </li>
            );
          })
        }
        </ul>
      </div>
    );

    return (mode === "show" ? show : inputs);
  }

  typeToType = new Map([["tel", "tel"], ["web", "url"], ["email", "email"]]);
}

export default Personal;
