!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,d=0,l=[],u=n(4);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(y(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(y(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function g(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=s(e.insertAt.before,n);n.insertBefore(t,a)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function w(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),g(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var i=d++;n=c||(c=w(t)),r=x.bind(null,n,i,!1),a=x.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),a=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=w(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(s=o[i.id]).refs--,r.push(s)}e&&p(h(e,t),t);for(a=0;a<r.length;a++){var s;if(0===(s=r[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var v,b=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function x(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".cards {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\theight: 90%;\r\n\ttransition: .6s ease-out;\r\n}\r\n.card {\r\n\tposition: relative;\r\n\tmargin: 0 1%;\r\n\tmin-width: 23%;\r\n\tfont-size: 13px;\r\n\toverflow: hidden;\r\n\tbackground:white;\r\n\ttransition: 0.3s;\r\n\tbox-shadow: black 0 20px 10px -5px;\r\n}\r\n.card:hover {\r\n    box-shadow: none;\r\n}\r\n.card__title {\r\n\tposition: absolute;\r\n    text-align: center;\r\n    padding: 5% 0;\r\n    margin-top: 20%;\r\n    width: 100%;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n    background: white;\r\n}\r\n.card__img {\r\n\tgrid-row: 1/5;\r\n\twidth: 100%;\r\n    border-radius: 0 0 15% 15%;\r\n}\r\n.card__author {\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin: 4% 0;\r\n}\r\n.card__date{\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin: 4% 0;\r\n}\r\n.card__view{\r\n\tdisplay: inline-block;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tmargin: 4% 0;\r\n}\r\n.card__description{\r\n\ttext-align: center;\r\n\twidth: 95%;\r\n\tmargin: 4% auto;\r\n\tword-wrap: break-word;\r\n}\r\n@media only screen and (max-width: 950px) and (min-width: 501px) {\r\n\t.card {\r\n\t\tmargin: 0 8%;\r\n    \tmin-width: 34%;\r\n\t}\r\n}\r\n@media only screen and (max-width: 500px) {\r\n\r\n\t.card {\r\n    \tmargin: 0 10%;\r\n    \tmin-width: 80%;\r\n\t}\r\n}\r\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".pagination {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    width: 300px;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n}\r\n.pagination-chip {\r\n    position: relative;\r\n    text-align: center;\r\n    width: 40px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    border-radius: 15px;\r\n    box-shadow: black 0px 2px 0px 1px;\r\n    cursor: pointer;\r\n    background: white;\r\n\r\n}\r\n.chip-first-page {\r\n    display: none;\r\n}\r\n.chip-prev-page{\r\n    display: none;\r\n}\r\n.pop-up {\r\n    position: absolute;\r\n    top:-20px;\r\n    left: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background:white;\r\n}\r\n",""])},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"@keyframes stripes {\r\n  0% {background-position: 0 0;}\r\n  100% {background-position: 50px 0;}\r\n}\r\n* {\r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\nbody {\r\n  background-image: linear-gradient(#666 30% , #fff 85%);\r\n  background-repeat: no-repeat;\r\n}\r\n.app {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n.app__search-panel {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 10vh;\r\n}\r\n.search-panel__input {\r\n  padding-left: 1%;\r\n  width: 75%;\r\n  height: 20px;\r\n}\r\n.search-panel__btn {\r\n  cursor: pointer;\r\n  width: 70px;\r\n  color: #888;\r\n  height: 26px;\r\n}\r\n.loading{\r\n  animation: stripes .75s infinite linear;\r\n  background: linear-gradient(45deg, rgba(30,255,188,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%, rgba(30,255,188,1) 50%,      rgba(30,255,188,1) 75%, rgba(255,255,255,1) 75%, rgba(255,255,255,1));\r\n  background-size: 10px 10px;\r\n  color: #FF50E5;\r\n}\r\n.app__app-label {\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.app__search-result {\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  height: 450px;\r\n  cursor: grab;\r\n  overflow-x: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .search-panel__btn {\r\n    width: 40px;\r\n  }\r\n}",""])},function(e,t,n){"use strict";n.r(t);class r{constructor(){this.gKey="AIzaSyBAw16oVHPCI33-zwVfhySzWVPk3YXO2Vg",this.maxResult=20}static extractData(e){const t=[];return e.forEach(e=>{t.push({videoLink:`https://www.youtube.com/watch?v=${e.id}`,title:e.snippet.title,author:e.snippet.channelTitle,date:e.snippet.publishedAt.slice(0,10),viewCount:e.statistics.viewCount,description:e.snippet.description.slice(0,100),img:e.snippet.thumbnails.medium.url})}),t}async getSearchResult(e){window.q||(window.q=e);let t=`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=${this.maxResult}&key=${this.gKey}&q=${e}`;window.nextPageToken&&(t=`https://www.googleapis.com/youtube/v3/search?type=video&pageToken=${window.nextPageToken}&part=snippet&maxResults=${this.maxResult}&key=${this.gKey}&q=${window.q}`);const n=await fetch(t),a=await n.json();window.nextPageToken=a.nextPageToken;const o=[];for(let e=0;e<a.items.length;e+=1)a.items[e].id.videoId&&o.push(a.items[e].id.videoId);const i=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${this.gKey}&id=${o.join(",")}&part=snippet,statistics`),s=await i.json(),c=r.extractData(s.items);return window.loadPage+=Math.floor(c.length/window.cardsOnPage),c}}class a{constructor(e){this.cards=document.querySelector(".cards"),this.data=e,this.structure={tag:"div",className:"card",child:[{tag:"a",className:"card__title",content:"title",href:"videoLink"},{tag:"img",className:"card__img",content:"img"},{tag:"span",className:"card__author",content:"author"},{tag:"span",className:"card__date",content:"date"},{tag:"span",className:"card__view",content:"viewCount"},{tag:"p",className:"card__description",content:"description"}]}}static createCardElement(e,t){const{tag:n,className:r,content:a,href:o}=e,i=document.createElement(n);return i.setAttribute("class",r),o?(i.setAttribute("href",t[o]),i.innerHTML=t[a]):"img"===a?i.setAttribute("src",t[a]):i.innerHTML=t[a],i}static createCard(e,t){const{tag:n,className:r,child:o}=e,i=document.createElement(n);return i.setAttribute("class",r),o&&o.forEach(e=>{i.appendChild(a.createCardElement(e,t))}),i}render(){this.data.forEach(e=>{const t=a.createCard(this.structure,e);this.cards.appendChild(t)})}removeCards(){this.cards.innerHTML=""}}n(2);var o=a;class i{constructor(){this.structure={tag:"div",className:"pagination",child:[{tag:"div",className:"pagination-chip chip-first-page",content:'<i class="fas fa-angle-double-left"></i>'},{tag:"div",className:"pagination-chip chip-prev-page",content:'<i class="fas fa-angle-left"></i>'},{tag:"div",className:"pagination-chip chip-current-page",content:window.currentPage+1},{tag:"div",className:"pagination-chip chip-next-page",content:'<i class="fas fa-angle-right"></i>'}]}}static createPagination(e){const t=e=>{const{tag:n,className:r,content:a,child:o}=e,i=document.createElement(n);return i.setAttribute("class",r),a&&(i.innerHTML=a),o&&o.forEach(e=>{i.appendChild(t(e))}),i};return t(e)}render(){const e=i.createPagination(this.structure);document.querySelector(".app").appendChild(e),c.nextPage(),c.prevPage(),c.firstPage(),c.popup()}removePagination(){if(null!==document.querySelector(".pagination")){const e=document.querySelector(".pagination");document.querySelector(".app").removeChild(e)}}}n(5);var s=i;var c={appWidthWatcher(){const{body:e}=document;e.onresize=(e=>{const t=e.target.innerWidth;if(t>950?4!==window.cardsOnPage&&(2===window.cardsOnPage?(window.currentPage=Math.floor(window.currentPage/2),window.loadPage=Math.floor(window.loadPage/2)):1===window.cardsOnPage&&(window.currentPage=Math.floor(window.currentPage/4),window.loadPage=Math.floor(window.loadPage/4)),window.cardsOnPage=4):t>500&&t<951?(2!==window.cardsOnPage&&(1===window.cardsOnPage?(window.currentPage=Math.floor(window.currentPage/2),window.loadPage=Math.floor(window.loadPage/2)):4===window.cardsOnPage&&(window.currentPage=Math.floor(2*window.currentPage),window.loadPage=Math.floor(2*window.loadPage)),window.cardsOnPage=4),window.cardsOnPage=2):t<501&&(1!==window.cardsOnPage&&(2===window.cardsOnPage?(window.currentPage=Math.floor(2*window.currentPage),window.loadPage=Math.floor(4*window.loadPage)):4===window.cardsOnPage&&(window.currentPage=Math.floor(4*window.currentPage),window.loadPage=Math.floor(4*window.loadPage)),window.cardsOnPage=4),window.cardsOnPage=1),document.querySelector(".cards").firstChild){const e=document.querySelector(".cards"),t=.9*document.body.offsetWidth;e.style.transform=`translateX(${-window.currentPage*t}px)`}document.querySelector(".chip-current-page").innerHTML=window.currentPage+1})},translateRigth(){if(window.currentPage<window.loadPage-1&&(window.currentPage+=1,window.currentPage===window.loadPage-1)){const e=document.querySelector(".app__app-label");e.classList.add("loading"),(new r).getSearchResult().then(t=>{e.classList.remove("loading"),new o(t).render()})}const e=document.querySelector(".cards"),t=.9*document.body.offsetWidth;e.style.transform=`translateX(${-window.currentPage*t}px)`,window.currentPage>0&&(document.getElementsByClassName("chip-prev-page")[0].style.display="block"),window.currentPage>1&&(document.getElementsByClassName("chip-first-page")[0].style.display="block"),document.querySelector(".chip-current-page").innerHTML=window.currentPage+1},translateLeft(){const e=document.querySelector(".cards"),t=.9*document.body.offsetWidth;window.currentPage>0&&(window.currentPage-=1,e.style.transform=`translateX(${-window.currentPage*t}px)`),1===window.currentPage&&(document.querySelector(".chip-first-page").style.display="none"),0===window.currentPage&&(document.querySelector(".chip-prev-page").style.display="none"),document.querySelector(".chip-current-page").innerHTML=window.currentPage+1},imposeSwipe(){const{body:e}=document,t=document.querySelector(".cards");let n,r=!1;e.addEventListener("mousedown",e=>{document.querySelector(".app__search-result").style.cursor="grabbing",n=e.clientX,r=!0}),e.addEventListener("mousemove",e=>{if(e.preventDefault(),!r)return;const a=.9*document.body.offsetWidth,o=e.clientX-n;t.style.transform=`translateX(${-window.currentPage*a+o}px)`,t.style.transition="0s"}),e.addEventListener("mouseup",e=>{r=!1,document.querySelector(".app__search-result").style.cursor="grab";const a=.9*document.body.offsetWidth;t.style.transition=".6s",t.style.transform=`translateX(${-window.currentPage*a}px)`,document.body.onmousemove=null;const o=n-e.clientX;o<-50?this.translateLeft():o>50&&this.translateRigth()})},imposeTouchSwipe(){const{body:e}=document;let t,n=!1;const r=document.querySelector(".cards");e.addEventListener("touchstart",e=>{n=!0,t=e.changedTouches[0].clientX}),e.addEventListener("touchmove",e=>{if(e.preventDefault(),!n)return;const a=.9*document.body.offsetWidth,o=e.changedTouches[0].clientX-t;r.style.transform=`translateX(${-window.currentPage*a+o}px)`,r.style.transition="0s"}),e.addEventListener("touchend",e=>{n=!1;const a=.9*document.body.offsetWidth,o=t-e.changedTouches[0].clientX;r.style.transition=".6s",r.style.transform=`translateX(${-window.currentPage*a}px)`,o<-50?this.translateLeft():o>50&&this.translateRigth()})},firstPage(){document.querySelector(".chip-first-page").addEventListener("click",()=>{window.currentPage=0,document.querySelector(".chip-current-page").innerHTML=window.currentPage+1,document.querySelector(".cards").style.transform="translateX(0px)",document.querySelectorAll(".chip-prev-page").style.display="none",document.querySelectorAll(".chip-first-page").style.display="none"})},prevPage(){document.querySelector(".chip-prev-page").addEventListener("click",()=>{this.translateLeft()})},nextPage(){document.querySelector(".chip-next-page").addEventListener("click",()=>{this.translateRigth()})},popup(){const e=document.querySelectorAll(".pagination-chip"),t=document.createElement("div");t.setAttribute("class","pop-up");for(let n=0;n<e.length;n+=1)e[n].addEventListener("mousedown",()=>{"chip-first-page"===e[n].classList[1]?(t.innerHTML=1,e[n].appendChild(t)):"chip-prev-page"===e[n].classList[1]?(t.innerHTML=window.currentPage,e[n].appendChild(t)):"chip-next-page"===e[n].classList[1]&&(t.innerHTML=window.currentPage+2,e[n].appendChild(t))}),e[n].addEventListener("mouseup",()=>{e[n].removeChild(t)})},startSearch(e,t){e.addEventListener(t,e=>{const n=document.querySelector(".search-panel__input");if(window.loadPage=0,window.currentPage=0,window.nextPageToken=void 0,"keydown"===t&&13===e.keyCode){document.querySelector(".cards").style.transform="translateX(0px)",document.querySelector(".app__app-label").classList.add("loading"),new r(this.state).getSearchResult(n.value).then(e=>{n.value="",document.querySelector(".app__app-label").classList.remove("loading");const t=new o(e);t.removeCards(),t.render();const r=new s;r.removePagination(),r.render()})}if("click"===t){document.querySelector(".cards").style.transform="translateX(0px)",n.value="",document.querySelector(".app__app-label").classList.add("loading"),(new r).getSearchResult(n.value).then(e=>{document.querySelector(".app__app-label").classList.remove("loading");const t=new o(e);t.removeCards(),t.render();const n=new s;n.removePagination(),n.render()})}})}};class d{constructor(){this.structure={tag:"div",className:"app",child:[{tag:"div",className:"app__search-panel",child:[{tag:"input",className:"search-panel__input",placeholder:"SEARCH"},{tag:"button",className:"search-panel__btn",content:'<i class="fas fa-search"></i>'}]},{tag:"h1",className:"app__app-label",content:"YOUTUBE CLIENT"},{tag:"div",className:"app__search-result",child:[{tag:"div",className:"cards"}]}]}}static createLayout(e){const t=e=>{const{tag:n,className:r,content:a,placeholder:o,child:i}=e,s=document.createElement(n);return s.setAttribute("class",r),a&&(s.innerHTML=a),o&&s.setAttribute("placeholder","SEARCH"),i&&i.forEach(e=>{s.appendChild(t(e))}),s};return t(e)}renderLayout(){const e=d.createLayout(this.structure);document.body.appendChild(e),c.startSearch(document.querySelector(".search-panel__input"),"keydown"),c.startSearch(document.querySelector(".search-panel__btn"),"click"),c.imposeSwipe(),c.imposeTouchSwipe()}}n(7);var l=d;class u{constructor(){this.cardsOnPage={cardsOnMaxWidth:4,cardsOnMidWidth:2,cardsOnMinWidth:1},this.widthPoint={maxPoint:951,minPoint:501}}static checkWidth(e,t,n){const{cardsOnMaxWidth:r,cardsOnMidWidth:a,cardsOnMinWidth:o}=n,{maxPoint:i,minPoint:s}=t;e>=i?window.cardsOnPage=r:e>=s&&e<i?window.cardsOnPage=a:e<s&&(window.cardsOnPage=o)}run(){u.checkWidth(document.body.offsetWidth,this.widthPoint,this.cardsOnPage),c.appWidthWatcher(),(new l).renderLayout()}}(new u).run()}]);
//# sourceMappingURL=app.bundle.js.map