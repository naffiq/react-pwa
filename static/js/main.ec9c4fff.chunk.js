(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,n,t){e.exports=t(266)},143:function(e,n,t){},266:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(33),c=t.n(o),i=(t(143),t(110)),l=t(111),s=t(126),u=t(112),f=t(127),m=t(273),d=t(277),h=(t(144),t(125)),g=t(278),w=t(271),p=t(276),E=t(75),v=t(274),b=t(275),k=t(272),y=function(e){var n=e.user,t=e.loading;return r.a.createElement(v.a,null,t?r.a.createElement(b.a,null,r.a.createElement(b.a.Image,{square:!0})):r.a.createElement(k.a,{src:n.avatar}),r.a.createElement(v.a.Content,null,t?r.a.createElement(b.a,null,r.a.createElement(b.a.Header,null,r.a.createElement(b.a.Line,{length:"very short"}),r.a.createElement(b.a.Line,{length:"medium"})),r.a.createElement(b.a.Paragraph,null,r.a.createElement(b.a.Line,{length:"short"}))):r.a.createElement(a.Fragment,null,r.a.createElement(v.a.Header,null,n.first_name," ",n.last_name))))},j=function(){var e=r.a.useState(null),n=Object(h.a)(e,2),t=n[0],a=n[1];return r.a.useEffect(function(){fetch("https://reqres.in/api/users").then(function(e){e.json().then(function(e){a(e.data)})})},[]),r.a.createElement(g.a,{className:"full-height"},r.a.createElement(w.a,{text:!0},r.a.createElement("br",null),r.a.createElement(p.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(E.a,{name:"users",circular:!0}),r.a.createElement(p.a.Content,null,"Users")),r.a.createElement(v.a.Group,{doubling:!0,itemsPerRow:3,stackable:!0},!t&&new Array(3).fill(!0).map(function(e,n){return r.a.createElement(y,{loading:e,user:!1,key:"loading-".concat(n)})}),!!t&&t.map(function(e){return r.a.createElement(y,{user:e,key:e.id})}))))},A=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.a,{path:"/",component:j}))}}]),n}(a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/react-pwa","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):W(n,e)})}}()}},[[138,1,2]]]);
//# sourceMappingURL=main.ec9c4fff.chunk.js.map