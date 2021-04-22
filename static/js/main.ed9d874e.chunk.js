(this.webpackJsonpperformeter=this.webpackJsonpperformeter||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);t(12);var c=t(1),a=t.n(c),s=t(6),i=t.n(s),l=(t(17),t(10)),r=t(4),o=(t(18),t(0)),d=function(e){return Object(o.jsxs)("nav",{className:"navbar is-light",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsx)("a",{className:"navbar-item",href:"/",children:Object(o.jsx)("h1",{className:"title is-4",children:"Performeter"})})}),Object(o.jsx)("div",{className:"navbar-menu",children:Object(o.jsx)("div",{className:"navbar-end",children:Object(o.jsx)("div",{className:"navbar-item",children:Object(o.jsx)("button",{className:"button",onClick:e.export,children:"Export as Plain Text"})})})})]})},m=function(e){var n={Communication:0,"Decision Making":0,"Diversity, Equity, Inclusion":0,"Health and Safety":0,Leadership:0,"Problem Solving and Innovation":0,"Quality Improvement":0,"Service Focus":0,"Stewardship and Managing Resources":0,"Strategic Planning":0,Teamwork:0,"Managing People (Supervisors)":0};return n=e.comments.reduce((function(e,n){return"Select"!==n.competency&&(e[n.competency]+=1),e}),n),Object(o.jsxs)("div",{className:"fixed",children:[Object(o.jsx)("h1",{className:"title is-6",children:"Core Competencies"}),Object(o.jsx)("ul",{className:"unstyled-list",children:Object.keys(n).map((function(e,t){return Object(o.jsx)("li",{style:{padding:"3px"},children:Object(o.jsxs)("div",{className:"tags has-addons",children:[Object(o.jsx)("span",{className:"tag "+(n[e]>1?"is-success":""),children:n[e]}),Object(o.jsx)("span",{className:"tag "+(n[e]>1?"is-success":""),children:e})]})},"key + ".concat(t))}))})]})},j=function(e){var n=a.a.useState({percent:"0%"}),t=Object(r.a)(n,2),c=t[0],s=t[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h2",{className:"subtitle",children:"Job Function"}),Object(o.jsx)("progress",{className:"progress is-success",value:e.comments.length,max:parseInt(c.percent)/10,children:"0%"}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Percentage"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("div",{className:"select is-small",children:Object(o.jsxs)("select",{onChange:function(e){s({percent:e.target.value})},children:[Object(o.jsx)("option",{children:"Select"}),[100,90,80,70,60,50,40,30,20,10].map((function(e){return Object(o.jsx)("option",{children:"".concat(e,"%")},e)}))]})})})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Description"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{className:"textarea",placeholder:"Copy and paste job function here"})})]}),Object(o.jsx)("button",{className:"button",onClick:e.addComment,children:"Add Supporting Comment"}),e.children]})})},u=t(7),b=t(11),h=t(9),p=t(8),x=t.n(p),O=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(e){var c;return Object(u.a)(this,t),(c=n.call(this,e)).handleChange=function(e){c.setState({html:e.target.value})},c.handleFocus=function(e){e.target.innerText===c.props.initialValue&&c.setState({html:"<span></span>"})},c.handleBlur=function(e){""===e.target.innerText.replace(/(\r\n|\n|\r)/gm,"")&&c.setState({html:"<span>".concat(c.props.initialValue,"</span>")})},c.render=function(){return Object(o.jsx)(x.a,{innerRef:c.contentEditable,html:c.state.html,onChange:c.handleChange,onFocus:c.handleFocus,onBlur:c.handleBlur,style:{display:"inline",minWidth:"2em",padding:"0.25em",outline:"none",borderBottom:"1px rgba(0,0,0,0.3) solid"}})},c.contentEditable=a.a.createRef(),c.state={html:"<span>".concat(e.initialValue,"</span>")},c}return t}(a.a.Component),v=function(e){return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{style:{display:"block"},children:["In the competency of"," ",Object(o.jsx)("div",{className:"select is-small",children:Object(o.jsxs)("select",{defaultValue:e.competency,onChange:function(n){var t={competency:n.target.value,indicator:e.indicator,example:e.example};e.updateComment(e.commentIndex,t)},children:[Object(o.jsx)("option",{value:"Select",children:"Select One"}),["Communication","Decision Making","Diversity, Equity, Inclusion","Health and Safety","Leadership","Problem Solving and Innovation","Quality Improvement","Service Focus","Stewardship and Managing Resources","Strategic Planning","Teamwork","Managing People (Supervisors)"].map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))]})}),", I ",Object(o.jsx)(O,{initialValue:e.indicator}),"by ",Object(o.jsx)(O,{initialValue:e.example})]})})};var g=function(){var e=a.a.useState([]),n=Object(r.a)(e,2),t=n[0],c=n[1],s=function(e,n){var a=t.map((function(t,c){return c===e&&(t=n),t}));c(a)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),Object(o.jsx)("section",{className:"section",children:Object(o.jsxs)("div",{className:"columns",children:[Object(o.jsx)("div",{className:"column is-one-quarter",children:Object(o.jsx)(m,{comments:t})}),Object(o.jsxs)("div",{className:"column is-three-quarters",children:[Object(o.jsxs)("h1",{className:"title",children:["Job Functions",Object(o.jsx)("button",{className:"button",style:{marginLeft:"1em"},children:"Add Job Function"})]}),Object(o.jsx)(j,{comments:t,addComment:function(e){c([].concat(Object(l.a)(t),[{competency:"Select",indicator:"[behavioral indicator]",example:"[specific example]"}]))},updateComment:s,children:t.map((function(e,n){return Object(o.jsx)(v,{commentIndex:n,competency:e.competency,indicator:e.indicator,example:e.example,updateComment:s},e.competency+n)}))})]})]})})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ed9d874e.chunk.js.map