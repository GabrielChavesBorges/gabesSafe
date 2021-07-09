(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(11),r=a.n(o),i=a(7),s=a(23),c=a(14),l=a(160),d=a(139),p=a(141),j=a(143),u=a(78),m=Object(u.a)({palette:{primary:{main:"#0275d8",contrastText:"#fff"},secondary:{main:"#fff",contrastText:"#0275d8"}},typography:{fontFamily:["Montserrat","Helvetica Neue","sans-serif"].join(",")}}),b=a(2),h=Object(d.a)((function(){return{root:{flexGrow:1},content:{textAlign:"center"},button:{display:"block",margin:"30px auto",width:"300px",height:"70px","font-weight":"500","font-size":"1.2rem"},slogan:{padding:"12%","padding-bottom":"8%","font-size":"1.5rem","font-weight":"700"},image:{width:"100%",height:"100%","border-left-style":"solid","border-left-color":m.palette.secondary.main,"border-left-width":"20px"}}}));var x=function(){var e=h();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(p.a,{container:!0,spacing:0,children:[Object(b.jsxs)(p.a,{className:e.content,item:!0,lg:6,md:6,sm:12,xs:12,children:[Object(b.jsx)("p",{className:e.slogan,children:"Keep your passwords safe without headaches. Gabe's safe will remember all your passwords for you."}),Object(b.jsx)(s.b,{to:"/login",children:Object(b.jsx)(j.a,{className:e.button,color:"secondary",variant:"outlined",type:"button",children:"Log in"})}),Object(b.jsx)(s.b,{to:"/register",children:Object(b.jsx)(j.a,{className:e.button,color:"primary",variant:"contained",type:"button",children:"Register"})})]}),Object(b.jsx)(p.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(b.jsx)("img",{className:e.image,src:"https://images.unsplash.com/photo-1582139329536-e7284fece509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",alt:"Safe vault."})})]})})},f=a(10),O=a(15),g=a(161),w=a(144),y=a(145),v=a(146),C=a(147),k="https://gabes-safe.herokuapp.com",N=Object(d.a)((function(e){return{form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},textAlign:"center",marginTop:"75px",marginBottom:"75px",borderStyle:"solid",borderColor:m.palette.primary.main,borderWidth:"medium",borderRadius:"5%",backgroundColor:m.palette.secondary.main,display:"inline-block",padding:"10px 20px 30px"},button:{marginTop:"15px"},header:{color:m.palette.primary.main}}}));var T=function(e){var t=/(.+)@(.+){2,}\.(.+){2,}/,a=Object(c.f)(),o={email:"",password:"",passwordConfirmation:""},r=Object(n.useState)(o),s=Object(i.a)(r,2),l=s[0],d=s[1],p={email:!1,password:!1,passwordConfirmation:!1},u=Object(n.useState)(p),m=Object(i.a)(u,2),h=m[0],x=m[1],T={email:"",password:"",passwordConfirmation:""},S=Object(n.useState)(T),P=Object(i.a)(S,2),E=P[0],D=P[1],L=Object(n.useState)("password"),I=Object(i.a)(L,2),A=I[0],B=I[1],W=N();function M(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},a,n))}))}function F(e,t){x((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(f.a)({},e,!0))})),D((function(a){return Object(O.a)(Object(O.a)({},a),{},Object(f.a)({},e,t))}))}function J(){if(x(p),D(T),""===l.email)return F("email","Please enter an email"),!1;if(""===l.password)return F("password","Please enter a password"),!1;if(""===l.passwordConfirmation){return F("passwordConfirmation","Please enter the password confirmation"),!1}return t.test(l.email)?l.password===l.passwordConfirmation||(F("passwordConfirmation","Passwords don't match."),!1):(F("email","Invalid email."),!1)}function R(){B((function(e){return"password"===e?"text":"password"}))}function _(e){e.preventDefault()}return Object(b.jsxs)("form",{className:W.form,children:[Object(b.jsx)("h1",{className:W.header,children:"Register"}),Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{className:"loginInput",required:!0,name:"email",type:"email",variant:"outlined",label:h.email?"Error":"Email",error:h.email,helperText:E.email,value:l.email,onChange:M})}),Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{required:!0,name:"password",type:A,InputProps:{endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:_,edge:"end",children:"text"===A?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})},variant:"outlined",label:h.password?"Error":"Password",error:h.password,helperText:E.password,value:l.password,onChange:M})}),Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{required:!0,name:"passwordConfirmation",type:A,InputProps:{endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:_,edge:"end",children:"text"===A?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})},variant:"outlined",label:h.passwordConfirmation?"Error":"Confirm Password",error:h.passwordConfirmation,helperText:E.passwordConfirmation,value:l.passwordConfirmation,onChange:M})}),Object(b.jsx)(j.a,{className:W.button,size:"large",variant:"contained",color:"primary",type:"button",onClick:function(t){J()&&fetch("".concat(k,"/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:l.email,password:l.password})}).then((function(e){return e.text()})).then((function(t){"User already exists."===t?F("email",t):"User created."===t?e.onRegister(l.email,a):(F("email","Error: please try again."),d(o))})),t.preventDefault()},children:"Register"})]})},S=Object(d.a)((function(){return{root:{textAlign:"center"}}}));var P=function(e){var t=S();return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(T,{onRegister:function(t,a){e.signin(t,a)}})})},E=Object(d.a)((function(e){return{form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},textAlign:"center",marginTop:"75px",marginBottom:"75px",borderStyle:"solid",borderColor:m.palette.primary.main,borderWidth:"medium",borderRadius:"5%",backgroundColor:m.palette.secondary.main,display:"inline-block",padding:"10px 20px 30px"},button:{marginTop:"15px"},header:{color:m.palette.primary.main}}}));var D=function(e){var t=/(.+)@(.+){2,}\.(.+){2,}/,a=Object(c.f)(),o=Object(n.useState)({email:"",password:""}),r=Object(i.a)(o,2),s=r[0],l=r[1],d={email:!1,password:!1,passwordConfirmation:!1},p=Object(n.useState)(d),u=Object(i.a)(p,2),m=u[0],h=u[1],x={email:"",password:"",passwordConfirmation:""},N=Object(n.useState)(x),T=Object(i.a)(N,2),S=T[0],P=T[1],D=Object(n.useState)("password"),L=Object(i.a)(D,2),I=L[0],A=L[1],B=E();function W(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},a,n))}))}function M(e,t){h((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(f.a)({},e,!0))})),P((function(a){return Object(O.a)(Object(O.a)({},a),{},Object(f.a)({},e,t))}))}function F(){return h(d),P(x),""===s.email?(M("email","Please your account email"),!1):""===s.password?(M("password","Please enter your password"),!1):!!t.test(s.email)||(M("email","Invalid email."),!1)}return Object(b.jsxs)("form",{className:B.form,children:[Object(b.jsx)("h1",{className:B.header,children:"Login"}),Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{className:"loginInput",required:!0,name:"email",type:"email",variant:"outlined",label:m.email?"Error":"Email",error:m.email,helperText:S.email,value:s.email,onChange:W})}),Object(b.jsx)("div",{children:Object(b.jsx)(g.a,{required:!0,name:"password",type:I,InputProps:{endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){A((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===I?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})},variant:"outlined",label:m.password?"Error":"Password",error:m.password,helperText:S.password,value:s.password,onChange:W})}),Object(b.jsx)(j.a,{className:B.button,size:"large",variant:"contained",color:"primary",type:"button",onClick:function(){F()&&fetch("".concat(k,"/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:s.email,password:s.password})}).then((function(e){return e.text()})).then((function(t){"User not found."===t?M("email",t):"Invalid password."===t?M("password",t):"Login successful."===t?e.onLogin(s.email,a):M("email","Error: please try again")}))},children:"Login"})]})},L=Object(d.a)((function(){return{root:{textAlign:"center"}}}));var I=function(e){var t=L();return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(D,{onLogin:function(t,a){e.signin(t,a)}})})},A=a(29),B=a(37),W=a.n(B),M=a(60),F=a(153),J=a(154),R=a(155),_=a(156),G=a(158),q=a(151),z=a(152),H=a(79),U=a(164),Y=a(157),K=a(163),V=a(148),Q=a(149),X=a(150),Z=Object(d.a)({header:{color:m.palette.primary.main},actions:{marginTop:"10px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},button:{color:m.palette.secondary.main,backgroundColor:m.palette.primary.main,width:"100px","&:hover":{backgroundColor:m.palette.primary.light}}});var $=function(e){var t=Z(),a=Object(n.useState)({_id:"",title:"",link:"",login:"",password:""}),o=Object(i.a)(a,2),r=o[0],s=o[1],c=Object(n.useState)("password"),l=Object(i.a)(c,2),d=l[0],p=l[1],u=e.visible;function m(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},a,n))}))}function h(){e.onCloseEdit()}return Object(n.useEffect)((function(){s(e.entry)}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)(K.a,{open:u,onClose:h,"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(V.a,{className:t.header,children:"Edit password"}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:m,value:r.title,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:m,value:r.login,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:d,InputProps:{endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){p((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===d?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})},onChange:m,value:r.password,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:m,value:r.link,fullWidth:!0})}),Object(b.jsxs)(X.a,{className:t.actions,children:[Object(b.jsx)(j.a,{className:t.button,onClick:h,children:"Cancel"}),Object(b.jsx)(j.a,{className:t.button,onClick:function(){e.onSubmit(r),h()},children:"Ok"})]})]})})},ee=Object(d.a)({root:{width:"290px",paddingBottom:"20px"},header:{color:m.palette.primary.dark},passwordInput:{width:"210px",marginTop:"10px"},copyIcon:{position:"relative",top:"15px"},menuItem:{position:"relative",left:"5px"},link:{color:m.palette.primary.dark,"&:visited":{color:m.palette.primary.dark},"&:hover":{color:m.palette.primary.light}}});var te=function(e){var t=ee(),a=Object(A.useToasts)().addToast,o=Object(n.useState)(!1),r=Object(i.a)(o,2),s=r[0],c=r[1],l=Object(n.useState)(null),d=Object(i.a)(l,2),p=d[0],j=d[1],u=Object(n.useState)("password"),m=Object(i.a)(u,2),h=m[0],x=m[1],f=e.content,O=f._id,k=f.title,N=f.link,T=f.login,S=f.password;function P(){j(null)}function E(){return(E=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(N);case 2:P(),a("Link copied to clipboard.",{appearance:"success"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(T);case 2:a("Login copied to clipboard.",{appearance:"success"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(S);case 2:a("Password copied to clipboard.",{appearance:"success"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I,B=/^http:/.test(I=N)?I:/^www./.test(I)?"http://".concat(I):"http://www.".concat(I);return Object(b.jsxs)(q.a,{className:t.root,children:[Object(b.jsx)(z.a,{className:t.header,title:Object(b.jsx)("a",{className:t.link,href:B,children:k}),action:Object(b.jsx)(y.a,{children:Object(b.jsx)(F.a,{onClick:function(e){j(e.target)},color:"primary"})})}),Object(b.jsxs)(H.a,{anchorEl:p,open:Boolean(p),onClose:P,children:[Object(b.jsxs)(U.a,{onClick:function(){return E.apply(this,arguments)},children:[Object(b.jsx)(J.a,{color:"primary"}),Object(b.jsx)("span",{className:t.menuItem,children:"Copy Link"})]}),Object(b.jsxs)(U.a,{onClick:function(){P(),c(!0)},children:[Object(b.jsx)(R.a,{color:"primary"}),Object(b.jsx)("span",{className:t.menuItem,children:"Edit"})]}),Object(b.jsxs)(U.a,{onClick:function(){e.onDelete(O),P()},children:[Object(b.jsx)(_.a,{color:"primary"}),Object(b.jsx)("span",{className:t.menuItem,children:"Delete"})]})]}),Object(b.jsxs)(Y.a,{children:[Object(b.jsxs)("div",{className:t.input,children:[Object(b.jsx)(g.a,{id:"".concat(O,"login"),label:"Login",value:T,variant:"standard",margin:"normal",InputProps:{readOnly:!0}}),Object(b.jsx)(y.a,{className:t.copyIcon,"aria-label":"copy login",onClick:function(){return D.apply(this,arguments)},children:Object(b.jsx)(G.a,{color:"primary"})})]}),Object(b.jsxs)("div",{className:t.input,children:[Object(b.jsx)(g.a,{className:t.passwordInput,id:"".concat(O,"password"),label:"Password",value:S,variant:"standard",type:h,InputProps:{readOnly:!0,endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){x((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===h?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})}}),Object(b.jsx)(y.a,{className:t.copyIcon,"aria-label":"copy password",onClick:function(){return L.apply(this,arguments)},children:Object(b.jsx)(G.a,{color:"primary"})})]})]}),Object(b.jsx)($,{onCloseEdit:function(){c(!1)},onSubmit:function(t){e.onEdit(t)},entry:f,visible:s})]})},ae=Object(d.a)((function(e){return{root:{flexGrow:1,maxWidth:"95%",marginLeft:"35px",marginTop:"20px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var ne=function(e){var t=ae(),a=e.entries,n=a._id;function o(t){e.onDelete(t)}function r(t){e.onEdit(t)}return Object(b.jsx)(A.ToastProvider,{autoDismiss:!0,autoDismissTimeout:2e3,children:Object(b.jsx)(p.a,{className:t.root,container:!0,spacing:3,children:a.map((function(e){return Object(b.jsx)(p.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(b.jsx)(te,{className:t.paper,content:e,onDelete:o,onEdit:r},n)},"".concat(n,"grid"))}))})})},oe=a(159),re=Object(d.a)((function(){return{addEntryButton:{display:"block",margin:"40px auto",width:"250px",height:"70px","&:hover":{backgroundColor:"#F9F9F9",borderColor:m.palette.primary.dark}},addButtonText:{position:"relative",bottom:"6px",left:"5px"},header:{color:m.palette.primary.main},actions:{marginTop:"10px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},formButton:{color:m.palette.secondary.main,backgroundColor:m.palette.primary.main,width:"100px","&:hover":{backgroundColor:m.palette.primary.light}}}}));var ie=function(e){var t=re(),a=Object(A.useToasts)().addToast,o={title:"",link:"",login:"",password:""},r=Object(n.useState)(!1),s=Object(i.a)(r,2),c=s[0],l=s[1],d=Object(n.useState)(o),p=Object(i.a)(d,2),u=p[0],m=p[1],h=Object(n.useState)("password"),x=Object(i.a)(h,2),k=x[0],N=x[1];function T(e){var t=e.target,a=t.name,n=t.value;m((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(f.a)({},a,n))}))}function S(){m(o),l(!1)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)(j.a,{className:t.addEntryButton,variant:"contained",color:"secondary",onClick:function(){l(!0)},children:[Object(b.jsx)(oe.a,{}),Object(b.jsx)("span",{className:t.addButtonText,children:"Add new password"})]}),Object(b.jsxs)(K.a,{open:c,onClose:S,"aria-labelledby":"form-dialog-title",children:[Object(b.jsx)(V.a,{className:t.header,children:"Add new password"}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:T,value:u.title,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:T,value:u.login,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:k,InputProps:{endAdornment:Object(b.jsx)(w.a,{position:"end",children:Object(b.jsx)(y.a,{"aria-label":"toggle password visibility",onClick:function(){N((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===k?Object(b.jsx)(v.a,{color:"primary"}):Object(b.jsx)(C.a,{color:"primary"})})})},onChange:T,value:u.password,fullWidth:!0})}),Object(b.jsx)(Q.a,{children:Object(b.jsx)(g.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:T,value:u.link,fullWidth:!0})}),Object(b.jsxs)(X.a,{className:t.actions,children:[Object(b.jsx)(j.a,{className:t.formButton,onClick:S,children:"Cancel"}),Object(b.jsx)(j.a,{className:t.formButton,onClick:function(){""===u.title&&""===u.link&&""===u.login&&""===u.password?a("Please insert some information before adding.",{appearance:"error"}):(e.onSubmit(u),S())},children:"Ok"})]})]})]})},se=Object(d.a)({root:{minHeight:"450px"}});var ce=function(e){var t=Object(c.f)(),a=Object(n.useState)([]),o=Object(i.a)(a,2),r=o[0],s=o[1],l=se();return Object(n.useEffect)((function(){""===e.login?t.push("/"):fetch("".concat(k,"/populateDeck"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(b.jsxs)("div",{className:l.root,children:[Object(b.jsx)(ne,{entries:r,onDelete:function(t){fetch("".concat(k,"/entry"),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entryId:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))},onEdit:function(t){fetch("".concat(k,"/entry"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,updatedEntry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}}),Object(b.jsx)(A.ToastProvider,{autoDismiss:!0,autoDismissTimeout:5e3,children:Object(b.jsx)(ie,{onSubmit:function(t){fetch("".concat(k,"/insertEntry"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}})})]})},le=Object(d.a)({navbar:{backgroundColor:"#fff",height:"25px",padding:"15px",borderBottomStyle:"solid",borderBottomColor:m.palette.primary.dark,borderBottomWidth:"medium"},logo:{width:"30px"},logoText:{position:"relative",left:"10px",bottom:"7px",display:"inline",fontSize:"1.2rem",color:"#0275d8"}});var de=function(){var e=le();return Object(b.jsx)("header",{children:Object(b.jsx)("nav",{className:e.navbar,children:Object(b.jsxs)(s.b,{className:"navbar-brand",to:"/",children:[Object(b.jsx)("img",{className:e.logo,src:"https://image.flaticon.com/icons/png/512/2488/2488702.png",alt:"Logo"}),Object(b.jsx)("h1",{className:e.logoText,children:"Gabe's Safe"})]})})})},pe=Object(d.a)((function(){return{footer:{backgroundColor:m.palette.secondary.main,borderTopStyle:"solid",borderTopColor:m.palette.primary.dark,borderTopWidth:"medium",textAlign:"center",padding:"30px 0"},signature:{color:m.palette.primary.main,fontWeight:"700",position:"relative",bottom:"3.5px"},creativeCommonsLogo:{width:"20px"},credits:{color:m.palette.primary.main,fontSize:"0.7rem",marginTop:"20px"},creditLink:{fontWeight:"bold",color:m.palette.primary.dark,"&:hover":{color:m.palette.primary.light}}}}));var je=function(){var e=pe(),t=(new Date).getFullYear();return Object(b.jsxs)("footer",{className:e.footer,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:e.creativeCommonsLogo,src:"https://cdn.worldvectorlogo.com/logos/creative-commons.svg",alt:"Creative Commons"}),Object(b.jsx)("span",{className:e.signature,children:" ".concat(t," Gabriel Borges")})]}),Object(b.jsxs)("div",{className:e.credits,children:[Object(b.jsxs)("div",{children:["Photo by",Object(b.jsx)("a",{className:e.creditLink,href:"https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:" Jason Dent"})," on",Object(b.jsx)("a",{className:e.creditLink,href:"https://unsplash.com/s/photos/safe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:" Unsplash"})]}),Object(b.jsxs)("div",{children:["Logo made by",Object(b.jsx)("a",{className:e.creditLink,href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:" Smashicons"})," from",Object(b.jsx)("a",{className:e.creditLink,href:"https://www.flaticon.com/",title:"Flaticon",children:" www.flaticon.com"})]})]})]})};var ue=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1];function r(e,t){o(e),t.push("/safe")}return Object(b.jsx)(l.a,{theme:m,children:Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(de,{}),Object(b.jsxs)(c.c,{children:[Object(b.jsx)(c.a,{path:"/",exact:!0,children:Object(b.jsx)(x,{})}),Object(b.jsx)(c.a,{path:"/register",children:Object(b.jsx)(P,{signin:r})}),Object(b.jsx)(c.a,{path:"/login",children:Object(b.jsx)(I,{signin:r})}),Object(b.jsx)(c.a,{path:"/safe",children:Object(b.jsx)(ce,{login:a})})]}),Object(b.jsx)(je,{})]})})})};r.a.render(Object(b.jsx)(ue,{}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.147cbc32.chunk.js.map