(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(11),r=a.n(o),i=a(8),s=a(23),c=a(14),l=a(160),d=a(138),p=a(141),j=a(143),u=a(2),b=Object(d.a)((function(){return{root:{height:"91vh"},content:{textAlign:"center"},button:{display:"block",margin:"30px auto",width:"300px",height:"70px","font-weight":"500","font-size":"1.2rem"},slogan:{padding:"12%","padding-bottom":"8%","font-size":"1.5rem","font-weight":"700"},image:{backgroundImage:'url("'.concat("https://images.unsplash.com/photo-1582139329536-e7284fece509?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",'")'),backgroundSize:"cover"}}}));var m=function(){var e=b();return Object(u.jsxs)(p.a,{className:e.root,container:!0,spacing:0,children:[Object(u.jsxs)(p.a,{className:e.content,item:!0,lg:6,md:12,children:[Object(u.jsx)("p",{className:e.slogan,children:"Keep your passwords safe without headaches. Gabe's safe will remember all your passwords for you."}),Object(u.jsx)(s.b,{to:"/login",children:Object(u.jsx)(j.a,{className:e.button,color:"secondary",variant:"outlined",type:"button",children:"Log in"})}),Object(u.jsx)(s.b,{to:"/register",children:Object(u.jsx)(j.a,{className:e.button,color:"primary",variant:"contained",type:"button",children:"Register"})})]}),Object(u.jsx)(p.a,{className:e.image,item:!0,lg:6,md:12})]})},h=a(7),x=a(15),f=a(161),O=a(144),g=a(145),w=a(146),y=a(147),v="https://gabes-safe.herokuapp.com",C=a(78),k=Object(C.a)({palette:{primary:{main:"#0275d8",contrastText:"#fff"},secondary:{main:"#fff",contrastText:"#0275d8"}},typography:{fontFamily:["Montserrat","Helvetica Neue","sans-serif"].join(",")}}),N=Object(d.a)((function(e){return{form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},textAlign:"center",marginTop:"50px",borderStyle:"solid",borderColor:k.palette.primary.main,borderWidth:"medium",borderRadius:"5%",backgroundColor:k.palette.secondary.main,display:"inline-block",padding:"10px 20px 30px"},button:{marginTop:"15px"},header:{color:k.palette.primary.main}}}));var T=function(e){var t=/(.+)@(.+){2,}\.(.+){2,}/,a=Object(c.f)(),o={email:"",password:"",passwordConfirmation:""},r=Object(n.useState)(o),s=Object(i.a)(r,2),l=s[0],d=s[1],p={email:!1,password:!1,passwordConfirmation:!1},b=Object(n.useState)(p),m=Object(i.a)(b,2),C=m[0],k=m[1],T={email:"",password:"",passwordConfirmation:""},S=Object(n.useState)(T),P=Object(i.a)(S,2),E=P[0],D=P[1],I=Object(n.useState)("password"),L=Object(i.a)(I,2),A=L[0],B=L[1],W=N();function M(e){var t=e.target,a=t.name,n=t.value;d((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},a,n))}))}function F(e,t){k((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(h.a)({},e,!0))})),D((function(a){return Object(x.a)(Object(x.a)({},a),{},Object(h.a)({},e,t))}))}function J(){if(k(p),D(T),""===l.email)return F("email","Please enter an email"),!1;if(""===l.password)return F("password","Please enter a password"),!1;if(""===l.passwordConfirmation){return F("passwordConfirmation","Please enter the password confirmation"),!1}return t.test(l.email)?l.password===l.passwordConfirmation||(F("passwordConfirmation","Passwords don't match."),!1):(F("email","Invalid email."),!1)}function R(){B((function(e){return"password"===e?"text":"password"}))}function _(e){e.preventDefault()}return Object(u.jsxs)("form",{className:W.form,children:[Object(u.jsx)("h1",{className:W.header,children:"Register"}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{className:"loginInput",required:!0,name:"email",type:"email",variant:"outlined",label:C.email?"Error":"Email",error:C.email,helperText:E.email,value:l.email,autoComplete:"off",onChange:M})}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{required:!0,name:"password",type:A,InputProps:{endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:_,edge:"end",children:"text"===A?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})},variant:"outlined",label:C.password?"Error":"Password",error:C.password,helperText:E.password,value:l.password,onChange:M})}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{required:!0,name:"passwordConfirmation",type:A,InputProps:{endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:_,edge:"end",children:"text"===A?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})},variant:"outlined",label:C.passwordConfirmation?"Error":"Confirm Password",error:C.passwordConfirmation,helperText:E.passwordConfirmation,value:l.passwordConfirmation,onChange:M})}),Object(u.jsx)(j.a,{className:W.button,size:"large",variant:"contained",color:"primary",type:"button",onClick:function(t){J()&&fetch("".concat(v,"/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:l.email,password:l.password})}).then((function(e){return e.text()})).then((function(t){"User already exists."===t?F("email",t):"User created."===t?e.onRegister(l.email,a):(F("email","Error: please try again."),d(o))})),t.preventDefault()},children:"Register"})]})},S=Object(d.a)((function(e){return{root:Object(h.a)({textAlign:"center",minHeight:"500px",height:"86vh"},e.breakpoints.down("xs"),{height:"120vh"})}}));var P=function(e){var t=S();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(T,{onRegister:function(t,a){e.signin(t,a)}})})},E=Object(d.a)((function(e){return{form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"},textAlign:"center",marginTop:"50px",borderStyle:"solid",borderColor:k.palette.primary.main,borderWidth:"medium",borderRadius:"5%",backgroundColor:k.palette.secondary.main,display:"inline-block",padding:"10px 20px 30px"},button:{marginTop:"15px"},header:{color:k.palette.primary.main}}}));var D=function(e){var t=/(.+)@(.+){2,}\.(.+){2,}/,a=Object(c.f)(),o=Object(n.useState)({email:"",password:""}),r=Object(i.a)(o,2),s=r[0],l=r[1],d={email:!1,password:!1,passwordConfirmation:!1},p=Object(n.useState)(d),b=Object(i.a)(p,2),m=b[0],C=b[1],k={email:"",password:"",passwordConfirmation:""},N=Object(n.useState)(k),T=Object(i.a)(N,2),S=T[0],P=T[1],D=Object(n.useState)("password"),I=Object(i.a)(D,2),L=I[0],A=I[1],B=E();function W(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},a,n))}))}function M(e,t){C((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(h.a)({},e,!0))})),P((function(a){return Object(x.a)(Object(x.a)({},a),{},Object(h.a)({},e,t))}))}function F(){return C(d),P(k),""===s.email?(M("email","Please your account email"),!1):""===s.password?(M("password","Please enter your password"),!1):!!t.test(s.email)||(M("email","Invalid email."),!1)}return Object(u.jsxs)("form",{className:B.form,children:[Object(u.jsx)("h1",{className:B.header,children:"Login"}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{className:"loginInput",required:!0,name:"email",type:"email",variant:"outlined",label:m.email?"Error":"Email",error:m.email,helperText:S.email,value:s.email,autoComplete:!1,onChange:W})}),Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{required:!0,name:"password",type:L,InputProps:{endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){A((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===L?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})},variant:"outlined",label:m.password?"Error":"Password",error:m.password,helperText:S.password,value:s.password,onChange:W})}),Object(u.jsx)(j.a,{className:B.button,size:"large",variant:"contained",color:"primary",type:"button",onClick:function(){F()&&fetch("".concat(v,"/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:s.email,password:s.password})}).then((function(e){return e.text()})).then((function(t){"User not found."===t?M("email",t):"Invalid password."===t?M("password",t):"Login successful."===t?e.onLogin(s.email,a):M("email","Error: please try again")}))},children:"Login"})]})},I=Object(d.a)((function(e){return{root:Object(h.a)({textAlign:"center",minHeight:"430px",height:"86vh"},e.breakpoints.down("xs"),{height:"100vh"})}}));var L=function(e){var t=I();return Object(u.jsx)("div",{className:t.root,children:Object(u.jsx)(D,{onLogin:function(t,a){e.signin(t,a)}})})},A=a(29),B=a(37),W=a.n(B),M=a(60),F=a(153),J=a(154),R=a(155),_=a(156),H=a(158),z=a(151),G=a(152),q=a(79),U=a(164),Y=a(157),K=a(163),V=a(148),X=a(149),Q=a(150),Z=Object(d.a)({header:{color:k.palette.primary.main},actions:{marginTop:"10px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},button:{color:k.palette.secondary.main,backgroundColor:k.palette.primary.main,width:"100px","&:hover":{backgroundColor:k.palette.primary.light}}});var $=function(e){var t=Z(),a=Object(n.useState)({_id:"",title:"",link:"",login:"",password:""}),o=Object(i.a)(a,2),r=o[0],s=o[1],c=Object(n.useState)("password"),l=Object(i.a)(c,2),d=l[0],p=l[1],b=e.visible;function m(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},a,n))}))}function v(){e.onCloseEdit()}return Object(n.useEffect)((function(){s(e.entry)}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)(K.a,{open:b,onClose:v,"aria-labelledby":"form-dialog-title",children:[Object(u.jsx)(V.a,{className:t.header,children:"Edit password"}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:m,value:r.title,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:m,value:r.login,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:d,InputProps:{endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){p((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===d?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})},onChange:m,value:r.password,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:m,value:r.link,fullWidth:!0})}),Object(u.jsxs)(Q.a,{className:t.actions,children:[Object(u.jsx)(j.a,{className:t.button,onClick:v,children:"Cancel"}),Object(u.jsx)(j.a,{className:t.button,onClick:function(){e.onSubmit(r),v()},children:"Ok"})]})]})})},ee=Object(d.a)({root:{width:"270px",paddingBottom:"20px",margin:"0"},header:{color:k.palette.primary.dark},loginInput:{width:"180px"},passwordInput:{width:"180px",marginTop:"10px"},copyIcon:{position:"relative",top:"15px"},menuItem:{position:"relative",left:"5px"},link:{color:k.palette.primary.dark,"&:visited":{color:k.palette.primary.dark},"&:hover":{color:k.palette.primary.light}}});var te=function(e){var t=ee(),a=Object(A.useToasts)().addToast,o=Object(n.useState)(!1),r=Object(i.a)(o,2),s=r[0],c=r[1],l=Object(n.useState)(null),d=Object(i.a)(l,2),p=d[0],j=d[1],b=Object(n.useState)("password"),m=Object(i.a)(b,2),h=m[0],x=m[1],v=e.content,C=v._id,k=v.title,N=v.link,T=v.login,S=v.password;function P(){j(null)}function E(){return(E=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(N);case 2:P(),a("Link copied to clipboard.",{appearance:"success"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(T);case 2:a("Login copied to clipboard.",{appearance:"success"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(M.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(S);case 2:a("Password copied to clipboard.",{appearance:"success"});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L,B=/^http:/.test(L=N)?L:/^www./.test(L)?"http://".concat(L):"http://www.".concat(L);return Object(u.jsxs)(z.a,{className:t.root,children:[Object(u.jsx)(G.a,{className:t.header,title:Object(u.jsx)("a",{className:t.link,href:B,children:k}),action:Object(u.jsx)(g.a,{children:Object(u.jsx)(F.a,{onClick:function(e){j(e.target)},color:"primary"})})}),Object(u.jsxs)(q.a,{anchorEl:p,open:Boolean(p),onClose:P,children:[Object(u.jsxs)(U.a,{onClick:function(){return E.apply(this,arguments)},children:[Object(u.jsx)(J.a,{color:"primary"}),Object(u.jsx)("span",{className:t.menuItem,children:"Copy Link"})]}),Object(u.jsxs)(U.a,{onClick:function(){P(),c(!0)},children:[Object(u.jsx)(R.a,{color:"primary"}),Object(u.jsx)("span",{className:t.menuItem,children:"Edit"})]}),Object(u.jsxs)(U.a,{onClick:function(){e.onDelete(C),P()},children:[Object(u.jsx)(_.a,{color:"primary"}),Object(u.jsx)("span",{className:t.menuItem,children:"Delete"})]})]}),Object(u.jsxs)(Y.a,{children:[Object(u.jsxs)("div",{className:t.input,children:[Object(u.jsx)(f.a,{className:t.loginInput,id:"".concat(C,"login"),label:"Login",value:T,variant:"standard",margin:"normal",InputProps:{readOnly:!0}}),Object(u.jsx)(g.a,{className:t.copyIcon,"aria-label":"copy login",onClick:function(){return D.apply(this,arguments)},children:Object(u.jsx)(H.a,{color:"primary"})})]}),Object(u.jsxs)("div",{className:t.input,children:[Object(u.jsx)(f.a,{className:t.passwordInput,id:"".concat(C,"password"),label:"Password",value:S,variant:"standard",type:h,InputProps:{readOnly:!0,endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){x((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===h?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})}}),Object(u.jsx)(g.a,{className:t.copyIcon,"aria-label":"copy password",onClick:function(){return I.apply(this,arguments)},children:Object(u.jsx)(H.a,{color:"primary"})})]})]}),Object(u.jsx)($,{onCloseEdit:function(){c(!1)},onSubmit:function(t){e.onEdit(t)},entry:v,visible:s})]})},ae=Object(d.a)((function(e){return{root:{flexGrow:1,maxWidth:"95%",margin:"20px auto 0 auto"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},parent:{overflowX:"hidden"}}}));var ne=function(e){var t=ae(),a=e.entries,n=a._id;function o(t){e.onDelete(t)}function r(t){e.onEdit(t)}return Object(u.jsx)(A.ToastProvider,{autoDismiss:!0,autoDismissTimeout:2e3,children:Object(u.jsx)("div",{className:t.parent,children:Object(u.jsx)(p.a,{className:t.root,container:!0,spacing:3,children:a.map((function(e){return Object(u.jsx)(p.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(u.jsx)(te,{className:t.paper,content:e,onDelete:o,onEdit:r},n)},"".concat(n,"grid"))}))})})})},oe=a(159),re=Object(d.a)((function(){return{addEntryButton:{display:"block",margin:"40px auto",width:"250px",height:"70px","&:hover":{backgroundColor:"#F9F9F9",borderColor:k.palette.primary.dark}},addButtonText:{position:"relative",bottom:"6px",left:"5px"},header:{color:k.palette.primary.main},actions:{marginTop:"10px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},formButton:{color:k.palette.secondary.main,backgroundColor:k.palette.primary.main,width:"100px","&:hover":{backgroundColor:k.palette.primary.light}}}}));var ie=function(e){var t=re(),a=Object(A.useToasts)().addToast,o={title:"",link:"",login:"",password:""},r=Object(n.useState)(!1),s=Object(i.a)(r,2),c=s[0],l=s[1],d=Object(n.useState)(o),p=Object(i.a)(d,2),b=p[0],m=p[1],v=Object(n.useState)("password"),C=Object(i.a)(v,2),k=C[0],N=C[1];function T(e){var t=e.target,a=t.name,n=t.value;m((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(h.a)({},a,n))}))}function S(){m(o),l(!1)}return Object(u.jsxs)("div",{children:[Object(u.jsxs)(j.a,{className:t.addEntryButton,variant:"contained",color:"secondary",onClick:function(){l(!0)},children:[Object(u.jsx)(oe.a,{}),Object(u.jsx)("span",{className:t.addButtonText,children:"Add new password"})]}),Object(u.jsxs)(K.a,{open:c,onClose:S,"aria-labelledby":"form-dialog-title",children:[Object(u.jsx)(V.a,{className:t.header,children:"Add new password"}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{autoFocus:!0,margin:"dense",id:"title",label:"Title",name:"title",autoComplete:"off",type:"text",onChange:T,value:b.title,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"userName",label:"Login",name:"login",autoComplete:"off",type:"text",onChange:T,value:b.login,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"password",label:"Password",name:"password",autoComplete:"off",type:k,InputProps:{endAdornment:Object(u.jsx)(O.a,{position:"end",children:Object(u.jsx)(g.a,{"aria-label":"toggle password visibility",onClick:function(){N((function(e){return"password"===e?"text":"password"}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:"text"===k?Object(u.jsx)(w.a,{color:"primary"}):Object(u.jsx)(y.a,{color:"primary"})})})},onChange:T,value:b.password,fullWidth:!0})}),Object(u.jsx)(X.a,{children:Object(u.jsx)(f.a,{margin:"dense",id:"link",label:"Website link",name:"link",autoComplete:"off",type:"url",onChange:T,value:b.link,fullWidth:!0})}),Object(u.jsxs)(Q.a,{className:t.actions,children:[Object(u.jsx)(j.a,{className:t.formButton,onClick:S,children:"Cancel"}),Object(u.jsx)(j.a,{className:t.formButton,onClick:function(){""===b.title&&""===b.link&&""===b.login&&""===b.password?a("Please insert some information before adding.",{appearance:"error"}):(e.onSubmit(b),S())},children:"Ok"})]})]})]})},se=Object(d.a)({root:{minHeight:"71vh",width:"98vw"}});var ce=function(e){var t=Object(c.f)(),a=Object(n.useState)([]),o=Object(i.a)(a,2),r=o[0],s=o[1],l=se();return Object(n.useEffect)((function(){""===e.login?t.push("/"):fetch("".concat(v,"/populateDeck"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(u.jsxs)("div",{className:l.root,children:[Object(u.jsx)(ne,{entries:r,onDelete:function(t){fetch("".concat(v,"/entry"),{method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entryId:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))},onEdit:function(t){fetch("".concat(v,"/entry"),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,updatedEntry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}}),Object(u.jsx)(A.ToastProvider,{autoDismiss:!0,autoDismissTimeout:5e3,children:Object(u.jsx)(ie,{onSubmit:function(t){fetch("".concat(v,"/insertEntry"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({login:e.login,entry:t})}).then((function(e){return e.json()})).then((function(e){return s(e)}))}})})]})},le=Object(d.a)({navbar:{backgroundColor:"#fff",height:"30px",padding:"10px",borderBottomStyle:"solid",borderBottomColor:k.palette.primary.dark,borderBottomWidth:"medium"},logo:{width:"30px"},logoText:{position:"relative",left:"10px",bottom:"7px",display:"inline",fontSize:"1.2rem",color:"#0275d8"}});var de=function(){var e=le();return Object(u.jsx)("header",{children:Object(u.jsx)("nav",{className:e.navbar,children:Object(u.jsxs)(s.b,{className:"navbar-brand",to:"/",children:[Object(u.jsx)("img",{className:e.logo,src:"https://image.flaticon.com/icons/png/512/2488/2488702.png",alt:"Logo"}),Object(u.jsx)("h1",{className:e.logoText,children:"Gabe's Safe"})]})})})},pe=Object(d.a)((function(){return{footer:{backgroundColor:k.palette.secondary.main,borderTopStyle:"solid",borderTopColor:k.palette.primary.dark,borderTopWidth:"medium",textAlign:"center",padding:"20px 0",height:"100px"},signature:{color:k.palette.primary.main,fontWeight:"700",position:"relative",bottom:"3.5px",left:"5px"},creativeCommonsLogo:{width:"20px"},credits:{color:k.palette.primary.main,fontSize:"0.7rem",marginTop:"20px"},creditLink:{fontWeight:"bold",color:k.palette.primary.dark,"&:hover":{color:k.palette.primary.light}}}}));var je=function(){var e=pe(),t=(new Date).getFullYear(),a=Object(c.g)();return Object(u.jsxs)("footer",{className:e.footer,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:e.creativeCommonsLogo,src:"https://cdn.worldvectorlogo.com/logos/creative-commons.svg",alt:"Creative Commons"}),Object(u.jsxs)("span",{className:e.signature,children:["".concat(t," "),Object(u.jsx)("a",{className:e.creditLink,href:"https://gabrielcborges.notion.site/Hi-I-am-Gabriel-Borges-9bee8d23d2b249edb3f6c59d71e209d6",children:"Gabriel Borges"})]})]}),Object(u.jsxs)("div",{className:e.credits,children:["/"===a.pathname?Object(u.jsxs)("div",{children:["Photo by",Object(u.jsx)("a",{className:e.creditLink,href:"https://unsplash.com/@jdent?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:" Jason Dent"})," on",Object(u.jsx)("a",{className:e.creditLink,href:"https://unsplash.com/s/photos/safe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:" Unsplash"})]}):"",Object(u.jsxs)("div",{children:["Logo made by",Object(u.jsx)("a",{className:e.creditLink,href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",children:" Smashicons"})," from",Object(u.jsx)("a",{className:e.creditLink,href:"https://www.flaticon.com/",title:"Flaticon",children:" www.flaticon.com"})]})]})]})};var ue=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1];function r(e,t){o(e),t.push("/safe")}return Object(u.jsx)(l.a,{theme:k,children:Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(de,{}),Object(u.jsxs)(c.c,{children:[Object(u.jsx)(c.a,{path:"/",exact:!0,children:Object(u.jsx)(m,{})}),Object(u.jsx)(c.a,{path:"/register",children:Object(u.jsx)(P,{signin:r})}),Object(u.jsx)(c.a,{path:"/login",children:Object(u.jsx)(L,{signin:r})}),Object(u.jsx)(c.a,{path:"/safe",children:Object(u.jsx)(ce,{login:a})})]}),Object(u.jsx)(je,{})]})})})};r.a.render(Object(u.jsx)(ue,{}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.39b022a1.chunk.js.map