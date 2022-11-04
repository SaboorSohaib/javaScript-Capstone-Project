(()=>{"use strict";var r,n,e,t,o,i,a,s,c,l,d,p,u,f,m={28:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([r.id,"/* Google font */\r\n\r\n/* page reset styles */\r\n*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --font-mont: 'Montserrat', sans-serif;\r\n  --clr-dark: #fff, sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  min-height: 100vh;\r\n}\r\n\r\n.flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.flex-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem 0.2rem;\r\n  gap: 2rem;\r\n  background-color: rgb(31, 21, 21);\r\n  color: white;\r\n  font-weight: 600;\r\n  transition: all 0.3s ease-in-out;\r\n  position: fixed;\r\n  width: 7rem;\r\n  left: -7rem;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.nav__item {\r\n  width: max-content;\r\n}\r\n\r\n.open {\r\n  left: 0;\r\n}\r\n\r\n.hamburger {\r\n  position: absolute;\r\n  top: 1rem;\r\n  right: -2.5rem;\r\n}\r\n\r\n.hamburger:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger span {\r\n  display: block;\r\n  background-color: black;\r\n  margin: 0.4rem 0;\r\n  height: 0.4rem;\r\n  width: 2.1rem;\r\n  border-radius: 0.15rem;\r\n  transition: 0.3s all ease-in-out;\r\n  position: relative;\r\n}\r\n\r\n.change.first-bar {\r\n  top: 0.8rem;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.change.second-bar {\r\n  opacity: 0;\r\n}\r\n\r\n.change.third-bar {\r\n  bottom: 0.755rem;\r\n  transform: rotate(-45deg);\r\n}\r\n\r\n.brand__name b {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.item_number {\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  color: red;\r\n  padding: 0.1rem 0.5rem;\r\n  position: absolute;\r\n  margin-top: -1.2rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.nav__menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n.nav__menu li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid transparent;\r\n  transition: border 0.3s ease-in-out;\r\n}\r\n\r\n.nav__menu li:hover {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  body {\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  nav {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 1rem 2rem;\r\n    position: static;\r\n    width: 100vw;\r\n  }\r\n\r\n  .hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .nav__menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 3rem;\r\n  }\r\n\r\n  .foods__container {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .food__item {\r\n    width: 40vw;\r\n  }\r\n\r\n  .shift .food__item {\r\n    margin-left: 0;\r\n    width: 40vw;\r\n  }\r\n\r\n  img {\r\n    width: 25vw;\r\n    height: 40vw;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .foods__container {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n\r\n  .food__item {\r\n    width: 20vw;\r\n  }\r\n\r\n  .shift .food__item {\r\n    width: 20vw;\r\n  }\r\n\r\n  img {\r\n    width: 12.5vw;\r\n    height: 20vw;\r\n  }\r\n}\r\n",""]);const s=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,t);t.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=t(r,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},h={};function v(r){var n=h[r];if(void 0!==n)return n.exports;var e=h[r]={id:r,exports:{}};return m[r](e,e.exports,v),e.exports}v.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return v.d(n,{a:n}),n},v.d=(r,n)=>{for(var e in n)v.o(n,e)&&!v.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},v.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),v.nc=void 0,r=v(379),n=v.n(r),e=v(795),t=v.n(e),o=v(569),i=v.n(o),a=v(565),s=v.n(a),c=v(216),l=v.n(c),d=v(589),p=v.n(d),u=v(28),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();