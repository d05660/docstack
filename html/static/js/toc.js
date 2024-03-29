/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/@firstandthird/toc@1.4.1/dist/toc.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var FirstandthirdToc=function(){"use strict";function u(t,e){var n=d(t,e);return n.length?n[0]:null}function d(t){var e,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(t instanceof HTMLElement||t instanceof Node||null!=(e=t)&&e===e.window)return[t];if(t instanceof NodeList)return[].slice.call(t);if("string"==typeof t){var o=n?u(n):document;return[].slice.call(o.querySelectorAll(t))}return[]}function h(t,e,n){var o=3<arguments.length&&void 0!==arguments[3]&&arguments[3];if(Array.isArray(t))t.forEach(function(t){return h(t,e,n,o)});else{var i={cb:n,capture:o};window._domassistevents||(window._domassistevents={}),window._domassistevents["_"+e]=i;var r=d(t);r.length&&r.forEach(function(t){t.addEventListener(e,n,o)})}}var e=window.CustomEvent;var i=function(){try{var t=new e("t",{detail:{a:"b"}});return"t"===t.type&&"b"===t.detail.a}catch(t){return!1}}()?e:function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n};function f(t,n,o){if(Array.isArray(t))return t.forEach(function(t){return f(t,n,o)});var e=d(t);return e.length?(e.forEach(function(t){var e=new i(n,o);t.dispatchEvent(e)}),e):void 0}var n=void 0;n=function(){if(n)return n;var t=window.document.documentElement,e=void 0;return(t.scrollTop=1)===t.scrollTop?(t.scrollTop=0,e=t):e=document.body,n=e}();var o,t=(o=[],function(t){function e(){for(;o.length;){var t=o.shift();"function"==typeof t&&t()}}o.push(t),setTimeout(function(){if("loading"!==document.readyState)return e()},0),document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()})});var r=function(o,i,r){var s=void 0;return function(){var t=this,e=arguments,n=r&&!s;clearTimeout(s),s=setTimeout(function(){s=null,r||o.apply(t,e)},i),n&&o.apply(t,e)}},s=(function(){function l(t){this.value=t}function t(i){var r,s;function a(t,e){try{var n=i[t](e),o=n.value;o instanceof l?Promise.resolve(o.value).then(function(t){a("next",t)},function(t){a("throw",t)}):c(n.done?"return":"normal",n.value)}catch(t){c("throw",t)}}function c(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?a(r.key,r.arg):s=null}this._invoke=function(o,i){return new Promise(function(t,e){var n={key:o,arg:i,resolve:t,reject:e,next:null};s?s=s.next=n:(r=s=n,a(o,i))})},"function"!=typeof i.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(t){return this._invoke("next",t)},t.prototype.throw=function(t){return this._invoke("throw",t)},t.prototype.return=function(t){return this._invoke("return",t)}}(),function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}()),a={In:"scrolltriggers:inView",Out:"scrolltriggers:outOfView",Pause:"scrolltriggers:pause",Resume:"scrolltriggers:resume"},c=function(){function c(t,e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),t.hasAttribute("data-scroll-init")||(this.added=!1,this.el=t,this.options=e,this.eventHandler=r(this.onScroll.bind(this),10,!0),this.dCalcBounds=r(this.calcBounds.bind(this),10),this.paused=!1,this.disabled=!1,(this.options.image||this.options.srcset)&&(this.options.offset=-1*Math.max((document.documentElement.clientHeight,(window.innerHeight||0)/2)),this.options.once=!0),t.setAttribute("data-scroll-init","true"),this.calcBounds(),window.addEventListener("scroll",this.eventHandler),window.addEventListener("resize",this.dCalcBounds),h(this.el,a.Pause,function(){n.paused=!0}),h(this.el,a.Resume,function(){n.paused=!1}),setTimeout(this.eventHandler,400))}return s(c,[{key:"calcBounds",value:function(){var t=!0===this.options.progress||void 0!==this.options.fixed;if(this.el.offsetParent||t){this.disabled=!1;var e=this.options.position||"bottom";this.startEl=this.options.start?u(this.options.start):this.el,c.checkElement(this.startEl,"start",this.options.start);var n=this.startEl.getBoundingClientRect(),o=c.getScrollY(),i=n.top+o+(this.options.offset||0);if(this.start=c.processPosition(e,i),this.options.end){var r=u(this.options.end),s=r.getBoundingClientRect().top+o,a=this.options.positionEnd||"bottom";"auto"===a&&(a="top"),this.end=c.processPosition(a,s),"auto"===this.options.positionEnd&&(this.end-=this.el.offsetHeight),c.checkElement(r,"end",this.options.end)}this.eventHandler()}else this.disabled=!0}},{key:"inView",value:function(){var t=this.options,e=t.className,n=t.inView;e&&this.el.classList&&function e(t,n){if(Array.isArray(t))return t.forEach(function(t){return e(t,n)});var o=d(t);if(o.length){var i=[].concat(n);return o.forEach(function(e){i.forEach(function(t){e.classList.add(t)})}),o}}(this.el,e);var o=this.options.image,i=this.options.srcset;o&&("IMG"===this.el.tagName?this.el.setAttribute("src",o):function e(t,n){Array.isArray(t)&&t.forEach(function(t){return e(t,n)});var o=d(t);o.length&&o.forEach(function(e){Object.keys(n).forEach(function(t){e.style[t]=n[t]})})}(this.el,{backgroundImage:"url("+o+")",backgroundRepeat:"no-repeat"})),i&&this.el.setAttribute("srcset",i),"function"==typeof n&&n(this.el,this.options),f(this.el,a.In,{bubbles:!0,detail:this.options}),this.options.once&&(this.disabled=!0,window.removeEventListener("scroll",this.eventHandler),window.removeEventListener("resize",this.dCalcBounds)),this.added=!0}},{key:"outOfView",value:function(){var t=this.options,e=t.className,n=t.outOfView;e&&this.el.classList&&function e(t,n){if(Array.isArray(t))return t.forEach(function(t){return e(t,n)});var o=d(t);if(o.length){var i=[].concat(n);return o.forEach(function(e){i.forEach(function(t){e.classList.remove(t)})}),o}}(this.el,e),"function"==typeof n&&n(this.el,this.options),f(this.el,a.Out,{bubbles:!0,detail:this.options}),this.added=!1}},{key:"onScroll",value:function(){var t=c.getScrollY();if(!this.paused&&!this.disabled){if(this.options.progress){var e=t/(document.documentElement.scrollHeight-window.innerHeight);this.el.style.width=100*e+"%"}t<this.start||this.end&&t>this.end?this.added&&this.outOfView():this.added||this.inView()}}}],[{key:"checkElement",value:function(t,e,n){if(!t)throw new Error(e+" element doesn't match any element with selector: \""+n+'"')}},{key:"getScrollY",value:function(){return window.pageYOffset||document.documentElement.scrollTop}},{key:"processPosition",value:function(t,e){return"top"===t?e:e-="middle"===t?window.innerHeight/2:"bottom"===t?window.innerHeight:window.innerHeight*(parseInt(t,10)/100)}}]),c}(),v=function(t){var n=[];if(t&&Array.isArray(t))t.forEach(function(e){var t=d(e.el);if(null===t)throw new Error("unknown element");t.forEach(function(t){delete e.el,n.push(new c(t,e))})});else{if(t)throw new Error("please convert object to array");d("[data-scroll]").forEach(function(t){var o,i,r,e=(o="scroll",i=t,r={},Object.keys(i.dataset).forEach(function(t){if(t.match(new RegExp("^"+o))&&t!==o){var e=t.replace(o,""),n=!1;e.match(/^Global/)&&(e=e.replace("Global",""),n=!0),e=""+e[0].toLowerCase()+e.slice(1),r[e]=n?window[i.dataset[t]]:i.dataset[t]}}),r);null!==e.progress&&void 0!==e.progress&&(e.progress=!0),e.className=e.class,e.offset&&(e.offset=parseInt(e.offset,10)),void 0!==e.once&&(e.once=!0),n.push(new c(t,e))})}return n};"complete"!==document.readyState&&document.addEventListener("readystatechange",function(){"complete"===document.readyState&&f(window,"resize")}),t(v),v.Events=a,v.ScrollTrigger=c;var p=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,o=3<arguments.length&&void 0!==arguments[3]&&arguments[3];f(t,"smoothscroll:start",{bubbles:!0});var i=t.getBoundingClientRect(),r=window.pageYOffset||document.documentElement.scrollTop,s=Math.round(i.top+r)+n,a=new Date;t.hasAttribute("tabindex")||(t.tabIndex="-1"),o||window.history.pushState(null,"Scroll",e),function t(e,n,o){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:function(){},r=(new Date).getTime(),s=o-n,a=s<0;if(0!==s){var c,l,u,d=Math.round((c=r-e,l=n,u=s,(c/=500)<1?u/2*c*c*c*c+l:-u/2*((c-=2)*c*c*c-2)+l));!a&&o<d&&(d=o),a&&d<o&&(d=o),window.scrollTo(0,d),d!==o?d<0||window.requestAnimationFrame(function(){return t(e,n,o,i)}):setTimeout(i)}}(a.getTime(),r,s,function(){f(t,"smoothscroll:end",{bubbles:!0})}),t.focus()},l=function(n,o){n.dataset.smoothActive||(n.dataset.smoothActive=!0,n.addEventListener("click",function(t){var e=n.getAttribute("href");"#"===e[0]&&(t.preventDefault(),p(document.querySelector(e),e,o))}))},m=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"[data-smooth]",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;if(window.requestAnimationFrame){var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n instanceof Element&&(n=[n]);for(var o=0,i=n.length;o<i;o++){var r=n[o];l(r,e)}}};function w(t){if(t){if(t){var e=t.dataset.tocContainer&&u(t.dataset.tocContainer)||document.body,n=t.dataset.toc.split(",").map(function(t){return t.trim()}),r=[],o=t.dataset.tocOffset?parseInt(t.dataset.tocOffset,10):1,s=1;n.forEach(function(i){d(i,e).forEach(function(t){var e=t.id||"toc-"+s++,n=t.dataset.tocTitle?t.dataset.tocTitle.trim():t.textContent.trim(),o="toc-"+i.replace(/((:+[\w-\d]*)|[^A-z0-9-\s])/g," ").replace(/\s{2,}/g," ").trim();t.id!==e&&(t.id=e),r.push({index:e,text:n,className:o})})});var i="<ul>",a=[];r.forEach(function(t,e){var n=r[e+1],o={el:".toc-li-"+e,fixed:"true",start:"#"+t.index,position:"top",positionEnd:"top",className:"toc-visible"};i+='\n<li class="toc-li-'+e+" "+t.className+'"><a href="#'+t.index+'">'+t.text+"</a></li>",n&&(o.end="#"+n.index),a.push(o)}),i+="</ul>",t.innerHTML=i;var c=d("li",t),l=d("a",t);v(a),m(l,o),h(document.body,"smoothscroll:start",function(){f(c,"scrolltriggers:pause")}),h(document.body,"smoothscroll:end",function(){f(c,"scrolltriggers:resume"),f(window,"scroll")}),window.location.hash&&l.some(function(t){var e=t.getAttribute("href")===window.location.hash;return e&&setTimeout(function(){var t=u(window.location.hash);t&&p(t,null,o,!0)}),e})}}else(t=d("[data-toc]")).forEach(function(t){return w(t)})}return window.addEventListener("DOMContentLoaded",function(){m()}),t(w),w}();
//# sourceMappingURL=/sm/6e9a33003470bca9b03ec5d29871643ecb3500dd8ad5cf9dc5f5f3db3873cf97.map