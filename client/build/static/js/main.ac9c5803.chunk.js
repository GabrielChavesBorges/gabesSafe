(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{90:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(11),c=n.n(i),o=n(10),s=n(22),r=n(13),l=n(2);var j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)(s.b,{to:"/register",children:Object(l.jsx)("button",{children:"Register"})}),Object(l.jsx)(s.b,{to:"/login",children:Object(l.jsx)("button",{children:"Log in"})})]})},d=n(12),b=n(20);var u=function(e){var t=Object(r.f)(),n=/(.+)@(.+){2,}\.(.+){2,}/,i={email:"",password:"",passwordConfirmation:""},c=Object(a.useState)(i),s=Object(o.a)(c,2),j=s[0],u=s[1],p=Object(a.useState)(""),h=Object(o.a)(p,2),O=h[0],f=h[1];function m(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{name:"email",placeholder:"Email",type:"email",value:j.email,onChange:m}),Object(l.jsx)("input",{name:"password",placeholder:"Password",type:"password",value:j.password,onChange:m}),Object(l.jsx)("input",{name:"passwordConfirmation",placeholder:"Confirm your password",type:"password",value:j.passwordConfirmation,onChange:m}),Object(l.jsx)("button",{onClick:function(a){""===j.email||""===j.password||""===j.passwordConfirmation?f("Please fill out all fields."):n.test(j.email)?j.password!==j.passwordConfirmation?(f("Passwords don't match."),u(i)):fetch("https://gabes-safe.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:j.email,password:j.password})}).then((function(e){return e.text()})).then((function(n){"User already exists."===n?(f(n),u(i)):"User created."===n?(f(n),e.signin(j.email,t)):(f("Error, please try again."),u(i))})):(f("Invalid email."),u(i)),a.preventDefault()},children:"Register"})]}),Object(l.jsx)("p",{children:O})]})};var p=function(e){var t=Object(r.f)(),n=/(.+)@(.+){2,}\.(.+){2,}/,i={email:"",password:""},c=Object(a.useState)(""),s=Object(o.a)(c,2),j=s[0],u=s[1],p=Object(a.useState)(i),h=Object(o.a)(p,2),O=h[0],f=h[1];function m(e){var t=e.target,n=t.name,a=t.value;f((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{name:"email",placeholder:"Email",type:"email",value:O.email,onChange:m}),Object(l.jsx)("input",{name:"password",placeholder:"Password",type:"password",value:O.password,onChange:m}),Object(l.jsx)("button",{onClick:function(a){""===O.email||""===O.password?u("Please fill out all fields."):n.test(O.email)?fetch("https://gabes-safe.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:O.email,password:O.password})}).then((function(e){return e.text()})).then((function(n){"User not found."===n||"Invalid password."===n?(u(n),f(i)):"Login successful."===n?e.signin(O.email,t):(console.log("Unrecognized return from server."),f(i))})):(u("Invalid email."),f(i)),a.preventDefault()},children:"Login"})]}),Object(l.jsx)("p",{children:j})]})},h=n(130),O=n(134),f=n(131),m=n(132),x=n(93),g=n(133),v=n(122),y=n(64),w=n.n(y),C=n(137),S=n(126),k=n(127),N=n(135),E=n(128),T=n(129),P=n(63),W=n.n(P);var A=function(e){var t={_id:"",title:"",link:"",login:"",password:""},n=Object(a.useState)(!1),i=Object(o.a)(n,2),c=i[0],s=i[1],r=Object(a.useState)(t),j=Object(o.a)(r,2),u=j[0],p=j[1];function h(e){var t=e.target,n=t.name,a=t.value;p((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}var O=function(){p(t),s(!1)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(v.a,{onClick:function(){p(e.entry),s(!0)},children:Object(l.jsx)(W.a,{})}),Object(l.jsxs)(C.a,{open:c,onClose:O,"aria-labelledby":"form-dialog-title",children:[Object(l.jsx)(S.a,{id:"form-dialog-title",children:"Edit password"}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:h,value:u.title,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:h,value:u.login,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:"password",onChange:h,value:u.password,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:h,value:u.link,fullWidth:!0})}),Object(l.jsxs)(E.a,{children:[Object(l.jsx)(T.a,{onClick:O,color:"primary",children:"Cancel"}),Object(l.jsx)(T.a,{onClick:function(){e.onSubmit(u),O()},color:"primary",children:"Submit"})]})]})]})},D=Object(h.a)({root:{minWidth:275},label:{fontSize:14,color:"#4b7bec"},info:{fontSize:18,color:"#4b6584"}});var L=function(e){var t=D();return Object(l.jsxs)(f.a,{className:t.root,children:[Object(l.jsxs)(m.a,{children:[Object(l.jsx)(x.a,{className:t.label,children:"Title"}),Object(l.jsx)(x.a,{className:t.info,children:e.content.title}),Object(l.jsx)(x.a,{className:t.label,children:"Link"}),Object(l.jsx)(x.a,{className:t.info,children:e.content.link}),Object(l.jsx)(x.a,{className:t.label,children:"Login"}),Object(l.jsx)(x.a,{className:t.info,children:e.content.login}),Object(l.jsx)(x.a,{className:t.label,children:"Password"}),Object(l.jsx)(x.a,{className:t.info,children:e.content.password})]}),Object(l.jsxs)(g.a,{children:[Object(l.jsx)(v.a,{onClick:function(){e.onDelete(e.content._id)},children:Object(l.jsx)(w.a,{})}),Object(l.jsx)(A,{entry:e.content,onSubmit:function(t){e.onEdit(t)}})]})]})},J=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var I=function(e){var t=J();function n(t){e.onDelete(t)}function a(t){e.onEdit(t)}return Object(l.jsx)("div",{className:t.root,children:Object(l.jsx)(O.a,{container:!0,spacing:3,children:e.entries.map((function(e){return Object(l.jsx)(O.a,{item:!0,xs:3,children:Object(l.jsx)(L,{content:e,onDelete:n,onEdit:a},e._id)},e._id+"grid")}))})})},U=n(65),_=n.n(U);var z=function(e){var t={title:"",link:"",login:"",password:""},n=Object(a.useState)(!1),i=Object(o.a)(n,2),c=i[0],s=i[1],r=Object(a.useState)(t),j=Object(o.a)(r,2),u=j[0],p=j[1],h=Object(a.useState)(""),O=Object(o.a)(h,2),f=O[0],m=O[1];function x(e){var t=e.target,n=t.name,a=t.value;p((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},n,a))}))}var g=function(){p(t),s(!1)};return Object(l.jsxs)("div",{children:[Object(l.jsx)(T.a,{variant:"outlined",color:"primary",onClick:function(){s(!0)},children:Object(l.jsxs)("p",{children:[Object(l.jsx)(_.a,{})," Add new password"]})}),Object(l.jsxs)(C.a,{open:c,onClose:g,"aria-labelledby":"form-dialog-title",children:[Object(l.jsx)(S.a,{id:"form-dialog-title",children:"Add new password"}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:x,value:u.title,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:x,value:u.login,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:"password",onChange:x,value:u.password,fullWidth:!0})}),Object(l.jsx)(k.a,{children:Object(l.jsx)(N.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:x,value:u.link,fullWidth:!0})}),Object(l.jsx)("p",{children:f}),Object(l.jsxs)(E.a,{children:[Object(l.jsx)(T.a,{onClick:g,color:"primary",children:"Cancel"}),Object(l.jsx)(T.a,{onClick:function(){""===u.title&&""===u.link&&""===u.login&&""===u.password?m("Please insert some information before adding."):(e.onSubmit(u),g())},color:"primary",children:"Add"})]})]})]})};var F=function(e){var t=Object(r.f)(),n=Object(a.useState)([]),i=Object(o.a)(n,2),c=i[0],s=i[1],j="https://gabes-safe.herokuapp.com";return Object(a.useEffect)((function(){""===e.login?t.push("/"):fetch(j+"/populateDeck",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Safe"}),Object(l.jsx)(I,{entries:c,onDelete:function(t){fetch(j+"/entry",{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entryId:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))},onEdit:function(t){fetch(j+"/entry",{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,updatedEntry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}}),Object(l.jsx)(z,{onSubmit:function(t){fetch(j+"/insertEntry",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}})]})};var R=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)("h1",{children:"Gabe's Safe"})})})};var G=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Creative Commons \u24d2 ",e]})})};var B=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1];function c(e,t){i(e),t.push("/safe")}return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(R,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,children:Object(l.jsx)(j,{})}),Object(l.jsx)(r.a,{path:"/register",children:Object(l.jsx)(u,{signin:c})}),Object(l.jsx)(r.a,{path:"/login",children:Object(l.jsx)(p,{signin:c})}),Object(l.jsx)(r.a,{path:"/safe",children:Object(l.jsx)(F,{login:n})})]}),Object(l.jsx)(G,{})]})})};c.a.render(Object(l.jsx)(B,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.ac9c5803.chunk.js.map