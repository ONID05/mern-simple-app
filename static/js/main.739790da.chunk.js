(this.webpackJsonpreact_step_form=this.webpackJsonpreact_step_form||[]).push([[0],{123:function(e,t,a){e.exports=a(266)},128:function(e,t,a){},129:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(128),a(19)),o=a(20),u=a(22),s=a(21),m=(a(129),a(115)),p=a(31),h=a.n(p),f=a(32),b=a.n(f),v=a(26),E=a.n(v),y=a(36),g=a.n(y),d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Enter User Details"}),r.a.createElement(E.a,{hintText:"Enter Your Firstname",floatingLabelText:"First Name",onChange:a("firstname"),defaultValue:t.firstname}),r.a.createElement("br",null),r.a.createElement(E.a,{hintText:"Enter Your lastname",floatingLabelText:"Last Name",onChange:a("lastname"),defaultValue:t.lastname}),r.a.createElement("br",null),r.a.createElement(E.a,{hintText:"Enter Your Email",floatingLabelText:"Email",onChange:a("email"),defaultValue:t.email}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!1,style:x.button,onClick:this.continue})))}}]),a}(n.Component),x={button:{margin:15}},C=d,O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Enter Personal Details"}),r.a.createElement(E.a,{hintText:"Enter Your Occupation",floatingLabelText:"Occupation",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement("br",null),r.a.createElement(E.a,{hintText:"Enter Your City",floatingLabelText:"City",onChange:a("city"),defaultValue:t.city}),r.a.createElement("br",null),r.a.createElement(E.a,{hintText:"Enter Your Bio",floatingLabelText:"Bio",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement("br",null),r.a.createElement(g.a,{label:"Continue",primary:!0,style:j.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",primary:!1,style:j.button,onClick:this.back})))}}]),a}(n.Component),j={button:{margin:15}},k=O,S=a(37),T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstname,a=e.lastname,n=e.email,l=e.occupation,c=e.city,i=e.bio;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Confirm User Data"}),r.a.createElement(S.List,null,r.a.createElement(S.ListItem,{primaryText:"First Name",secondaryText:t}),r.a.createElement(S.ListItem,{primaryText:"Last Name",secondaryText:a}),r.a.createElement(S.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement(S.ListItem,{primaryText:"Occupation",secondaryText:l}),r.a.createElement(S.ListItem,{primaryText:"City",secondaryText:c}),r.a.createElement(S.ListItem,{primaryText:"Bio",secondaryText:i})),r.a.createElement(g.a,{label:"Confirm & Continue",primary:!0,style:w.button,onClick:this.continue}),r.a.createElement(g.a,{label:"Back",primary:!0,style:w.button,onClick:this.back})))}}]),a}(n.Component),w={button:{margin:15}},L=T,D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Success"}),r.a.createElement("h1",null,"Thank You For Your Submission"),r.a.createElement("p",null,"You will get an email with further instructions")))}}]),a}(n.Component),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,firstname:"",lastname:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(m.a)({},t,a.target.value))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstname:t.firstname,lastname:t.lastname,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(C,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(k,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(L,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(D,null)}}}]),a}(n.Component),F=(a(116),a(117),a(287));a(290),a(288),a(286),a(289);Object(F.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,display:"flex",height:224},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}));var B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.739790da.chunk.js.map