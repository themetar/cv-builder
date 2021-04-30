(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),s=a(5),r=a.n(s),l=(a(11),a(12),a(3)),o=(a(13),a(2));var d=function(e){function t(t,a){var n=Object(o.a)({},e.data);n[t]=a.target.value,e.onChange(n)}function a(t,a){var n=Object(o.a)({},e.data);n.contactList=n.contactList.slice();var c=a.target.dataset.index;n.contactList[c]=Object(o.a)({},n.contactList[c]),n.contactList[c][t]=a.target.value,e.onChange(n)}var c=e.mode,i=e.data,s=new Map([["tel","tel"],["web","url"],["email","email"]]),r=Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"bio-name",children:i.name}),Object(n.jsx)("p",{className:"bio-about",children:i.about}),Object(n.jsx)("ul",{className:"contact-info",children:i.contactList.filter((function(e){return""!=e.value.replace(/\s/g,"")})).map((function(e,t){return"address"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-map",children:"\xa0"}),e.value]},t):"tel"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-phone",children:"\xa0"}),Object(n.jsx)("a",{href:"tel:".concat(e.value),children:e.value})]},t):"web"===e.type?Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-earth",children:"\xa0"}),Object(n.jsx)("a",{href:e.value,children:e.value.replace(/(http|https):\/\//,"")})]},t):Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"icon-envelope",children:"\xa0"}),Object(n.jsx)("a",{href:"mailto:".concat(e.value),children:e.value})]},t)}))})]}),l=t.bind(null,"name"),d=t.bind(null,"about"),j=a.bind(null,"type"),h=a.bind(null,"value"),u=Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",value:i.name,onChange:l,className:"bio-name m-b-1"}),Object(n.jsx)("input",{type:"text",value:i.about,onChange:d,className:"bio-about m-b-1"}),Object(n.jsx)("ul",{className:"contact-info",children:i.contactList.map((function(e,t){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("select",{value:e.type,"data-index":t,onChange:j,children:[Object(n.jsx)("option",{value:"tel",children:"Telephone"}),Object(n.jsx)("option",{value:"web",children:"Web site"}),Object(n.jsx)("option",{value:"address",children:"Address"}),Object(n.jsx)("option",{value:"email",children:"e-mail"})]}),Object(n.jsx)("input",{type:s.has(e.type)?s.get(e.type):"text","data-index":t,value:e.value,onChange:h})]},t)}))})]});return"show"===c?r:u};var j=function(e){var t=e.mode,a=e.data,c=Object(n.jsx)("ul",{className:"skills",children:a.map((function(e){return Object(n.jsx)("li",{children:e},e)}))}),i=Object(n.jsx)("textarea",{value:a.join(","),onChange:function(t){var a=t.target.value.split(",");e.onChange(a)},className:"skills-input"});return"show"===t?c:i};a(14);var h=function(e){var t=e.handleAdd,a=e.handleRemove,c=e.count;return Object(n.jsxs)("div",{className:"CollectionButtons",children:[Object(n.jsxs)("button",{onClick:t,className:"plus-btn pop-in",title:"Add another item",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-plus"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Add"})]}),c>1&&Object(n.jsxs)("button",{onClick:a,className:"cross-btn pop-in",title:"Remove item",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-cross"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Remove"})]})]})};var u=function(e){var t=e.data,a=e.mode;function c(t,a,n){var c=e.data.slice();c[t]=Object(o.a)({},c[t]),c[t][a]=n.target.value,e.onChange(c)}return Object(n.jsxs)("div",{className:"OtherSkills",children:[Object(n.jsxs)("div",{className:"grid m-b-2",children:["show"===a&&t.map((function(e,t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:e.topic}),Object(n.jsx)("p",{children:e.details})]},t)})),"edit"===a&&t.map((function(e,t){var a=c.bind(null,t,"topic"),i=c.bind(null,t,"details");return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"text",value:e.topic,onChange:a,className:"m-b-1/2"}),Object(n.jsx)("textarea",{value:e.details,onChange:i})]},t)}))]}),"edit"===a&&Object(n.jsx)(h,{handleAdd:function(){var t=e.data.slice();t.push({topic:"",details:""}),e.onChange(t)},handleRemove:function(){var t=e.data.slice();t.length>1&&(t.pop(),e.onChange(t))},count:t.length})]})};var b=function(e){var t=this;function a(t,a,n){var c=e.data.slice();c[t]=Object(o.a)({},c[t]),c[t][a]=n.target.value,e.onChange(c)}var c=e.mode,i=e.data,s="show"===c?function(e,t){var a=e.from,c=e.until,i=e.where,s=e.what,r=e.description;return Object(n.jsxs)("div",{className:"chrono-entry",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"year-from",children:a}),Object(n.jsx)("span",{className:"year-until",children:c}),Object(n.jsx)("span",{className:"organization",children:i})]}),Object(n.jsx)("p",{className:"gained-title",children:s}),r&&Object(n.jsx)("p",{children:r})]},t)}:function(e,c){var i=e.from,s=e.until,r=e.where,l=e.what,o=e.description,d=a.bind(t,c,"from"),j=a.bind(t,c,"until"),h=a.bind(t,c,"where"),u=a.bind(t,c,"what"),b=a.bind(t,c,"description");return Object(n.jsxs)("div",{className:"chrono-entry",children:[Object(n.jsxs)("div",{className:"edit-when-where m-b-1",children:[Object(n.jsx)("input",{type:"number",min:"1900",value:i,onChange:d}),Object(n.jsx)("input",{type:"number",min:"1900",value:s,onChange:j}),Object(n.jsx)("input",{type:"text",value:r,onChange:h})]}),Object(n.jsx)("input",{type:"text",value:l,onChange:u,className:"m-b-1"}),Object(n.jsx)("input",{type:"text",value:o,placeholder:"Optional details",onChange:b})]},c)};return Object(n.jsxs)("div",{children:[i.map(s),"edit"===c&&Object(n.jsx)(h,{handleAdd:function(){var t=e.data.slice(),a=(new Date).getFullYear();t.push({from:a,until:a,where:"Enter Organization name",what:"Enter Gained Title",description:""}),e.onChange(t)},handleRemove:function(){var t=e.data.slice();t.length>1&&(t.pop(),e.onChange(t))},count:i.length})]})};a(15);var p=function(e){function t(t){e.onAction(t.currentTarget.dataset.action)}var a=e.mode;return Object(n.jsxs)("div",{className:"EditActions",children:["show"===a&&Object(n.jsxs)("button",{"data-action":"edit",onClick:t,className:"edit-button",title:"Edit",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-pencil"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Edit"})]}),"show"!==a&&Object(n.jsxs)("button",{"data-action":"save",onClick:t,className:"edit-button m-b-1/2 pop-in",title:"Save",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-checkmark"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Save"})]}),"show"!==a&&Object(n.jsxs)("button",{"data-action":"cancel",onClick:t,className:"edit-button pop-in",title:"Cancel",children:[Object(n.jsx)("span",{"aria-hidden":"true",className:"icon-undo"}),Object(n.jsx)("span",{className:"screen-reader-text",children:"Cancel"})]})]})};var m=function(e){var t=Object(c.useState)("show"),a=Object(l.a)(t,2),i=a[0],s=a[1],r=Object(c.useState)(e.data),o=Object(l.a)(r,2),h=o[0],m=o[1],x=function(e){m(e)},O=e.type,v=e.title,f="show"===i?e.data:h;return Object(n.jsxs)("section",{children:[v&&Object(n.jsx)("h2",{children:v}),"personal"===O&&Object(n.jsx)(d,{data:f,mode:i,onChange:x}),"skills"===O&&Object(n.jsx)(j,{data:f,mode:i,onChange:x}),"chronicle"===O&&Object(n.jsx)(b,{data:f,mode:i,onChange:x}),"otherSkills"===O&&Object(n.jsx)(u,{data:f,mode:i,onChange:x}),Object(n.jsx)(p,{mode:i,onAction:function(t){var a=e.id,n=e.onUpdate;"edit"===t&&s("edit"),"cancel"===t&&(s("show"),m(e.data)),"save"===t&&(s("show"),n(a,h))}})]})};var x=function(){var e=Object(c.useState)([{type:"personal",id:"personal",data:{name:"Harry James Potter",about:"Wizard. Head of the Department of Magical Law Enforcement. The boy who lived.",contactList:[{type:"email",value:"hpotter@mom.gov.mag"},{type:"address",value:"Some Street 100, London, England, Great Britain"},{type:"tel",value:"555-666-444"},{type:"web",value:"https://harrypotter.fandom.com/wiki/Harry_Potter"}]}},{type:"skills",id:"skills",title:"Skills",data:["Defence against Dark Arts","Advanced broomstick piloting","Care of Magical Animals","Parseltongue","MS Office"]},{type:"chronicle",id:"education",title:"Education",data:[{from:"1991",until:"1997",where:"Hogwarts School of Witchcraft and Wizardry",what:"Graduate"}]},{type:"chronicle",id:"work",title:"Work",data:[{from:"2017",until:"",where:"British Ministry of Magic",what:"Head of the Department of Magical Law Enforcement",description:"Oversees all operations of all subsections of the Department"},{from:"2007",until:"2016",where:"British Ministry of Magic",what:"Auror",description:"Revolutionised the Auror Department at the Ministry of Magic"}]},{type:"otherSkills",id:"other",title:"Other Skills",data:[{topic:"Quidditch",details:"Won two Quidditch cups."}]}]),t=Object(l.a)(e,2),a=t[0],i=t[1];function s(e,t){var n=a.slice();n[a.findIndex((function(t){return t.id===e}))].data=t,i(n)}return Object(n.jsxs)("div",{className:"App",children:[a.map((function(e){return Object(n.jsx)(m,{id:e.id,type:e.type,title:e.title,data:e.data,onUpdate:s},e.id)})),Object(n.jsx)("button",{onClick:function(e){window.print()},className:"print-btn",title:"Print your CV",children:"Print"}),Object(n.jsxs)("footer",{children:["Made by ",Object(n.jsx)("a",{href:"https://github.com/themetar",target:"_blank",children:"@themetar"})]})]})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.93e58707.chunk.js.map