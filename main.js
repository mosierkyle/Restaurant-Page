(()=>{"use strict";var e,t,n,r,i,o,a,c,s,d,l,u,p,m,f={150:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n/* header css */\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 20vh;\n    min-height: 120px;\n    gap: 2rem;\n    background-image: linear-gradient(90deg,rgb(83, 68, 52), rgb(113, 91, 70), rgb(83, 68, 52));\n    color: rgb(255, 255, 255);\n    border-bottom: 1px solid gray;\n}\n\n#title {\n    font-size: 3rem;\n}\n\n#tabs-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    align-items: center;\n    gap: 1.5rem;\n}\n\n.tab {\n    font-size: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab:hover {\n    cursor: pointer;\n}\n\n\n/* initial page css */\n#page1 {\n    width: 100vw;\n    height: 160vh;\n}\n\n#hero-div {\n    width: 100vw;\n    height: 80vh;\n    display: grid;\n    grid-template-rows: 2fr 3fr;\n    justify-content: center;\n    align-items: center;\n    background-image: url(https://www.thrillist.com/stories/best-italian-restaurants-in-america/assets/7.webp);\n    background-size: cover;\n    color: white;\n}\n\n#hero-div h1{\n    display: flex;\n    justify-content: center;\n}\n\n#headline {\n    font-size: 3rem;\n    color: white;\n    font-weight: 900;\n    background-color: rgba(0,0,0,0.5);\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n\n#hero-copy {\n    display: flex;\n    justify-content: center;\n    color: white;\n    font-size: 2rem;\n    font-weight: 500;\n    height: 100%;\n    align-items: center;\n    background-color: rgba(0,0,0,0.5);\n\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=r(e,i),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function v(e){var t=h[e];if(void 0!==t)return t.exports;var n=h[e]={id:e,exports:{}};return f[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.nc=void 0,e=v(379),t=v.n(e),n=v(795),r=v.n(n),i=v(569),o=v.n(i),a=v(565),c=v.n(a),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(150),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const e=document.querySelector("#header"),t=document.createElement("h1"),n=document.createElement("div"),r=document.createElement("p"),i=document.createElement("p"),o=document.createElement("p");t.setAttribute("id","title"),n.setAttribute("id","tabs-container"),r.setAttribute("class","tab"),i.setAttribute("class","tab"),o.setAttribute("class","tab"),t.textContent="Dimaggio's",r.textContent="Home",i.textContent="Menu",o.textContent="Contact",n.appendChild(r),n.appendChild(i),n.appendChild(o),e.appendChild(t),e.appendChild(n)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h1"),i=document.createElement("p");document.createElement("div"),document.createElement("h1"),document.createElement("div"),t.setAttribute("id","page1"),n.setAttribute("id","hero-div"),r.setAttribute("id","headline"),i.setAttribute("id","hero-copy"),r.textContent="Little Sicily",i.textContent="We're not Italian... We're Sicilian ",e.appendChild(t),t.appendChild(n),n.appendChild(r),n.appendChild(i)})()})();