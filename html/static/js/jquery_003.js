/**
 * Minified by jsDelivr using UglifyJS v3.4.5.
 * Original file: /npm/jquery-unveil@1.3.2/jquery.unveil.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(l){l.fn.unveil=function(t,i){var e,r=l(window),u=t||0,n=1<window.devicePixelRatio?"data-src-retina":"data-src",o=this;function s(){var t=o.filter(function(){var t=l(this),i=r.scrollTop(),e=i+r.height(),n=t.offset().top,o=n+t.height();return i-u<=o&&n<=e+u});e=t.trigger("unveil"),o=o.not(e)}return this.one("unveil",function(){var t=this.getAttribute(n);(t=t||this.getAttribute("data-src"))&&(this.setAttribute("src",t),"function"==typeof i&&i.call(this))}),r.on("scroll.unveil resize.unveil lookup.unveil",s),s(),this}}(window.jQuery||window.Zepto);
//# sourceMappingURL=/sm/7604ae169eb1c3373a73d108e1014b436e66b7dde73d3955c7661de8c48a1f98.map