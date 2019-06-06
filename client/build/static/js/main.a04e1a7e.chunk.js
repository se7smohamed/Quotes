(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(20),r=a.n(s),c=a(8),i=a(9),l=a(11),u=a(10),m=a(12),h=(a(29),a(30),a(6)),d=a(7),v=(a(31),function(e){function t(e){var a;return Object(c.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e)),console.log(a.props),a.vote=a.vote.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"vote",value:function(e){var t=this,a=e.target.id,n={type:a="upvote"===a?1:-1,id:this.props.id};fetch("/api/quote/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){console.log(e),t.props.updateVotes(e.votes)})}},{key:"render",value:function(){return console.log("vote state--",this.state),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"vote-div"},o.a.createElement("i",{onClick:this.vote,title:"How much did you like this quote? You can vote as many times as you want",id:"upvote",className:"vote-el vote-btn fas fa-chevron-up"}),o.a.createElement("span",{className:"vote-el vote-count"},this.props.votes),o.a.createElement("i",{onClick:this.vote,title:"How much did you like this quote? You can vote as many times as you want",id:"downvote",className:"vote-el vote-btn fas fa-chevron-down"})))}}]),t}(o.a.Component)),f=function(){return o.a.createElement(o.a.Fragment,null," Whoops, Couldn't find any usefeul quotes. why don't you submit yours ",o.a.createElement(d.b,{to:"/new"},"here"),". ")},p=function(e){return o.a.createElement("div",null,o.a.createElement("figure",{className:"quote"},o.a.createElement("blockquote",null,-1===e.quote?o.a.createElement(f,null):e.quote,o.a.createElement(v,{id:e.id,votes:e.votes,updateVotes:e.updateVotes})),o.a.createElement("figcaption",{className:"by"},e.by?"\u2014":""," ",e.by)))},b=function(e){return o.a.createElement("div",{className:"share-div"},o.a.createElement("i",{className:"fas fa-link"})," ",o.a.createElement("span",{className:"share-link"},"Share!"),o.a.createElement("br",null),e.link?o.a.createElement(d.b,{to:"/quote/"+e.link,className:"share-link"}," ","/quote/"+e.link," "):null)},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={quote:"",by:"",_id:"",votes:"",comp:!1},a.updateVotes=a.updateVotes.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateVotes",value:function(e){this.setState({votes:e})}},{key:"componentDidMount",value:function(){var e=this,t="/api/quote/",a=this.props.match.params.id;t=a?t+a:t,this.setState({id:a}),fetch(t).then(function(e){return e.json()}).then(function(t){if(!t||!Object.keys(t).length)return e.setState({quote:-1}),0;console.log(t),e.setState(t)})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{quote:this.state.quote||!1,id:this.state._id,by:this.state.by,votes:this.state.votes,updateVotes:this.updateVotes}),o.a.createElement(b,{link:this.state._id}))}}]),t}(o.a.Component),y=a(23),E=(a(40),a(2)),w=function(e){return o.a.createElement("div",{className:"alert alert-".concat(e.type),style:{width:"100%"},role:"alert"},e.msg)},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={quote:"",by:"",errorMsg:!1,succMsg:!1,sentQuote:{}},a.formInput=a.formInput.bind(Object(h.a)(a)),a.formSubmit=a.formSubmit.bind(Object(h.a)(a)),a.isValid=a.isValid.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"formInput",value:function(e){this.setState(Object(y.a)({},e.target.id,e.target.value))}},{key:"isValid",value:function(){return this.state.quote.length<=10?(console.log(this.state.quote.length),this.setState({errorMsg:"Quotes have to be at least 10 characters."}),!1):this.state.quote.length>=200?(console.log(this.state.quote.length),this.setState({errorMsg:"Quotes cann't be longer than 200 characters."}),!1):(this.setState({errorMsg:!1}),!0)}},{key:"formSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target;if(this.isValid()){var n={quote:this.state.quote,by:this.state.by};fetch("/api/quote",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){e.succ&&(a.reset(),t.setState({succMsg:"Quote submitted successfully!",sentQuote:e._doc}),console.log(t.state.sentQuote))})}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"jumbotron mt-sm-5"},o.a.createElement("form",{className:"container send-form",onSubmit:function(t){return e.formSubmit(t)}},this.state.errorMsg?o.a.createElement(w,{type:"danger",msg:this.state.errorMsg}):null,this.state.succMsg?o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{type:"success",msg:this.state.succMsg}),o.a.createElement(E.a,{to:"quote/".concat(this.state.sentQuote._id)})):null,o.a.createElement("textarea",{type:"text",id:"quote",placeholder:"Quote",className:"form-control",onInput:this.formInput}),o.a.createElement("input",{type:"text",id:"by",placeholder:"By",className:"form-control",onInput:this.formInput}),o.a.createElement("input",{type:"submit",className:"form-control btn btn-primary"})))}}]),t}(o.a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:"navbar-expand"},o.a.createElement("nav",{className:"navbar navbar-light"},o.a.createElement("div",{className:"container"},o.a.createElement(d.b,{to:"/",className:"navbar-brand"},"Quote"),o.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item mr-sm-3"},o.a.createElement(d.c,{activeClassName:"active",exact:!0,className:"nav-link",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item mr-sm-3"},o.a.createElement(d.c,{activeClassName:"active",className:"nav-link",to:"/new"},"New"))))))),o.a.createElement(E.d,null,o.a.createElement(E.b,{exact:!0,path:"/",component:g}),o.a.createElement(E.b,{exact:!0,path:"/quote/:id",component:g}),o.a.createElement(E.b,{exact:!0,path:"/new",component:j}))))}}]),t}(o.a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):O(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.a04e1a7e.chunk.js.map