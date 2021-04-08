(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(2),s=a.n(i),c=a(9),l=a.n(c),h=(a(15),a(16),a(3)),r=a(4),d=a(1),o=a(6),p=a(5),u=(a(17),a(7)),j=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).typeToType=new Map([["tel","tel"],["web","url"],["email","email"]]),n.handleNameChange=n.handleChange.bind(Object(d.a)(n),"name"),n.handleAboutChange=n.handleChange.bind(Object(d.a)(n),"about"),n.handleContactTypeChange=n.handleContactChange.bind(Object(d.a)(n),"type"),n.handleContactValueChange=n.handleContactChange.bind(Object(d.a)(n),"value"),n}return Object(r.a)(a,[{key:"handleChange",value:function(e,t){var a=Object(u.a)({},this.props.data);a[e]=t.target.value,this.props.onChange(a)}},{key:"handleContactChange",value:function(e,t){var a=Object(u.a)({},this.props.data);a.contactList=a.contactList.slice();var n=t.target.dataset.index;a.contactList[n]=Object(u.a)({},a.contactList[n]),a.contactList[n][e]=t.target.value,this.props.onChange(a)}},{key:"render",value:function(){var e=this,t=this.props,a=t.mode,i=t.data,s=Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"bio-name",children:i.name}),Object(n.jsx)("p",{className:"bio-about",children:i.about}),Object(n.jsx)("ul",{className:"contact-info",children:i.contactList.filter((function(e){return""!=e.value.replace(/\s/g,"")})).map((function(e,t){return"address"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-map",children:"\xa0"}),e.value]},t):"tel"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-phone",children:"\xa0"}),Object(n.jsx)("a",{href:"tel:".concat(e.value),children:e.value})]},t):"web"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-earth",children:"\xa0"}),Object(n.jsx)("a",{href:e.value,children:e.value.replace(/(http|https):\/\//,"")})]},t):Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-envelope",children:"\xa0"}),Object(n.jsx)("a",{href:"mailto:".concat(e.value),children:e.value})]},t)}))})]}),c=Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",value:i.name,onChange:this.handleNameChange,className:"bio-name m-b-1"}),Object(n.jsx)("input",{type:"text",value:i.about,onChange:this.handleAboutChange,className:"bio-about m-b-1"}),Object(n.jsx)("ul",{className:"contact-info",children:i.contactList.map((function(t,a){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("select",{value:t.type,"data-index":a,onChange:e.handleContactTypeChange,children:[Object(n.jsx)("option",{value:"tel",children:"Telephone"}),Object(n.jsx)("option",{value:"web",children:"Web site"}),Object(n.jsx)("option",{value:"address",children:"Address"}),Object(n.jsx)("option",{value:"email",children:"e-mail"})]}),Object(n.jsx)("input",{type:e.typeToType.has(t.type)?e.typeToType.get(t.type):"text","data-index":a,value:t.value,onChange:e.handleContactValueChange})]},a)}))})]});return"show"===a?s:c}}]),a}(i.Component),b=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value.split(",");this.props.onChange(t)}},{key:"render",value:function(){var e=this.props,t=e.mode,a=e.data,i=Object(n.jsx)("ul",{className:"skills",children:a.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}),s=Object(n.jsx)("textarea",{value:a.join(","),onChange:this.handleChange,className:"skills-input"});return"show"===t?i:s}}]),a}(i.Component);a(18);var m=function(e){var t=e.handleAdd,a=e.handleRemove,i=e.count;return Object(n.jsxs)("div",{className:"CollectionButtons",children:[Object(n.jsxs)("button",{onClick:t,className:"plus-btn pop-in",title:"Add another item",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-plus"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Add"})]}),i>1&&Object(n.jsxs)("button",{onClick:a,className:"cross-btn pop-in",title:"Remove item",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-cross"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Remove"})]})]})},v=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleAdd=n.handleAdd.bind(Object(d.a)(n)),n.handleRemove=n.handleRemove.bind(Object(d.a)(n)),n.inputHandlers=[],n.editMap=n.editMap.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"handleAdd",value:function(){var e=this.props.data.slice();e.push({topic:"",details:""}),this.props.onChange(e)}},{key:"handleRemove",value:function(){var e=this.props.data.slice();e.length>1&&(e.pop(),this.props.onChange(e))}},{key:"handleInput",value:function(e,t,a){var n=this.props.data.slice();n[e][t]=a.target.value,this.props.onChange(n)}},{key:"render",value:function(){for(var e=this.props,t=e.data,a=e.mode,i=this.inputHandlers.length;i<t.length;i++)this.inputHandlers.push({handleTopic:this.handleInput.bind(this,i,"topic"),handleDetails:this.handleInput.bind(this,i,"details")});return this.inputHandlers.splice(t.length,this.inputHandlers.length-t.length),Object(n.jsxs)("div",{className:"OtherSkills",children:[Object(n.jsxs)("div",{className:"grid m-b-2",children:["show"===a&&t.map(this.showMap),"edit"===a&&t.map(this.editMap)]}),"edit"===a&&Object(n.jsx)(m,{handleAdd:this.handleAdd,handleRemove:this.handleRemove,count:t.length})]})}},{key:"showMap",value:function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.topic}),Object(n.jsx)("p",{children:e.details})]},t)}},{key:"editMap",value:function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",value:e.topic,onChange:this.inputHandlers[t].handleTopic,className:"m-b-1/2"}),Object(n.jsx)("textarea",{value:e.details,onChange:this.inputHandlers[t].handleDetails})]},t)}}]),a}(i.Component),O=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).mapShow=function(e,t){var a=e.from,i=e.until,s=e.where,c=e.what,l=e.description;return Object(n.jsxs)("div",{className:"chrono-entry",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"year-from",children:a}),Object(n.jsx)("span",{className:"year-until",children:i}),Object(n.jsx)("span",{className:"organization",children:s})]}),Object(n.jsx)("p",{className:"gained-title",children:c}),l&&Object(n.jsx)("p",{children:l})]},t)},i.mapEdit=function(e,t){var a=e.from,s=e.until,c=e.where,l=e.what,h=e.description,r=i.inputHandlers[t],d=r.handleFrom,o=r.handleUntil,p=r.handleWhere,u=r.handleWhat,j=r.handleDescription;return Object(n.jsxs)("div",{className:"chrono-entry",children:[Object(n.jsxs)("div",{className:"edit-when-where m-b-1",children:[Object(n.jsx)("input",{type:"number",min:"1900",value:a,onChange:d}),Object(n.jsx)("input",{type:"number",min:"1900",value:s,onChange:o}),Object(n.jsx)("input",{type:"text",value:c,onChange:p})]}),Object(n.jsx)("input",{type:"text",value:l,onChange:u,className:"m-b-1"}),Object(n.jsx)("input",{type:"text",value:h,placeholder:"Optional details",onChange:j})]},t)},i.inputHandlers=[],i.handleAdd=i.handleAdd.bind(Object(d.a)(i)),i.handleRemove=i.handleRemove.bind(Object(d.a)(i)),i}return Object(r.a)(a,[{key:"handleChange",value:function(e,t,a){var n=this.props.data.slice();n[e]=Object(u.a)({},n[e]),n[e][t]=a.target.value,this.props.onChange(n)}},{key:"handleAdd",value:function(){var e=this.props.data.slice(),t=(new Date).getFullYear();e.push({from:t,until:t,where:"Enter Organization name",what:"Enter Gained Title",description:""}),this.props.onChange(e)}},{key:"handleRemove",value:function(){var e=this.props.data.slice();e.length>1&&(e.pop(),this.props.onChange(e))}},{key:"render",value:function(){for(var e=this.props.mode,t=this.props.data,a=this.inputHandlers.length;a<t.length;a++)this.inputHandlers.push({handleFrom:this.handleChange.bind(this,a,"from"),handleUntil:this.handleChange.bind(this,a,"until"),handleWhere:this.handleChange.bind(this,a,"where"),handleWhat:this.handleChange.bind(this,a,"what"),handleDescription:this.handleChange.bind(this,a,"description")});this.inputHandlers.splice(t.length,this.inputHandlers.length-t.length);var i="show"===e?this.mapShow:this.mapEdit;return Object(n.jsxs)("div",{children:[t.map(i),"edit"===e&&Object(n.jsx)(m,{handleAdd:this.handleAdd,handleRemove:this.handleRemove,count:t.length})]})}}]),a}(i.Component),x=(a(19),function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"handleClick",value:function(e){this.props.onAction(e.currentTarget.dataset.action)}},{key:"render",value:function(){var e=this.props.mode;return Object(n.jsxs)("div",{className:"EditActions",children:["show"===e&&Object(n.jsxs)("button",{"data-action":"edit",onClick:this.handleClick,className:"edit-button",title:"Edit",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-pencil"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Edit"})]}),"show"!==e&&Object(n.jsxs)("button",{"data-action":"save",onClick:this.handleClick,className:"edit-button m-b-1/2 pop-in",title:"Save",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-checkmark"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Save"})]}),"show"!==e&&Object(n.jsxs)("button",{"data-action":"cancel",onClick:this.handleClick,className:"edit-button pop-in",title:"Cancel",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-undo"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Cancel"})]})]})}}]),a}(i.Component)),g=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={mode:"show",data:e.data},n.handleAction=n.handleAction.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"handleAction",value:function(e){var t=this.props.onUpdate,a=this.props.id;"edit"===e&&this.setState({mode:"edit"}),"cancel"===e&&this.setState({mode:"show",data:this.props.data}),"save"===e&&(this.setState({mode:"show"}),t(a,this.state.data))}},{key:"handleChange",value:function(e){this.setState({data:e})}},{key:"render",value:function(){var e=this.state.mode,t=this.props,a=t.type,i=t.title,s=("show"===e?this.props:this.state).data;return Object(n.jsxs)("section",{children:[i&&Object(n.jsx)("h2",{children:i}),"personal"===a&&Object(n.jsx)(j,{data:s,mode:e,onChange:this.handleChange}),"skills"===a&&Object(n.jsx)(b,{data:s,mode:e,onChange:this.handleChange}),"chronicle"===a&&Object(n.jsx)(O,{data:s,mode:e,onChange:this.handleChange}),"otherSkills"===a&&Object(n.jsx)(v,{data:s,mode:e,onChange:this.handleChange}),Object(n.jsx)(x,{mode:e,onAction:this.handleAction})]})}}]),a}(i.Component),f=function(e){Object(o.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={cv:[{type:"personal",id:"personal",data:{name:"Harry James Potter",about:"Wizard. Head of the Department of Magical Law Enforcement. The boy who lived.",contactList:[{type:"email",value:"hpotter@mom.gov.mag"},{type:"address",value:"Some Street 100, London, England, Great Britain"},{type:"tel",value:"555-666-444"},{type:"web",value:"https://harrypotter.fandom.com/wiki/Harry_Potter"}]}},{type:"skills",id:"skills",title:"Skills",data:["Defence against Dark Arts","Advanced broomstick piloting","Care of Magical Animals","Parseltongue","MS Office"]},{type:"chronicle",id:"education",title:"Education",data:[{from:"1991",until:"1997",where:"Hogwarts School of Witchcraft and Wizardry",what:"Graduate"}]},{type:"chronicle",id:"work",title:"Work",data:[{from:"2017",until:"",where:"British Ministry of Magic",what:"Head of the Department of Magical Law Enforcement",description:"Oversees all operations of all subsections of the Department"},{from:"2007",until:"2016",where:"British Ministry of Magic",what:"Auror",description:"Revolutionised the Auror Department at the Ministry of Magic"}]},{type:"otherSkills",id:"other",title:"Other Skills",data:[{topic:"Quidditch",details:"Won two Quidditch cups."}]}]},e.handleUpdate=e.handleUpdate.bind(Object(d.a)(e)),e.handlePrintButton=e.handlePrintButton.bind(Object(d.a)(e)),e}return Object(r.a)(a,[{key:"handleUpdate",value:function(e,t){var a=this.state.cv.slice();a[a.findIndex((function(t){return t.id===e}))].data=t,this.setState({cv:a})}},{key:"handlePrintButton",value:function(e){window.print()}},{key:"render",value:function(){var e=this,t=this.state.cv;return Object(n.jsxs)("div",{className:"App",children:[t.map((function(t){return Object(n.jsx)(g,{id:t.id,type:t.type,title:t.title,data:t.data,onUpdate:e.handleUpdate},t.id)})),Object(n.jsx)("button",{onClick:this.handlePrintButton,className:"print-btn",title:"Print your CV",children:"Print"}),Object(n.jsxs)("footer",{children:["Made by ",Object(n.jsx)("a",{href:"https://github.com/themetar",target:"_blank",children:"@themetar"})]})]})}}]),a}(i.Component);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.9dc0ac34.chunk.js.map