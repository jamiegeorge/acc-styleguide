/*!
 * Materialize v0.97.8 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
// Check for jQuery.
if (typeof(jQuery) === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof(require) === 'function') {
    jQuery = $ = require('jquery');
  // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */;    // Custom Easing
    jQuery.extend( jQuery.easing,
    {
      easeInOutMaterial: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return c/4*((t-=2)*t*t + 2) + b;
      }
    });

;/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,a=r.type(e);return"function"===a||r.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===a||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return null!=e&&e==e.window},r.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(a){return!1}for(t in e);return void 0===t||o.call(e,t)},r.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},r.data=function(e,t,n){if(void 0===n){var o=e[r.expando],i=o&&a[o];if(void 0===t)return i;if(i&&t in i)return i[t]}else if(void 0!==t){var o=e[r.expando]||(e[r.expando]=++r.uuid);return a[o]=a[o]||{},a[o][t]=n,n}},r.removeData=function(e,t){var n=e[r.expando],o=n&&a[n];o&&r.each(t,function(e,t){delete o[t]})},r.extend=function(){var e,t,a,n,o,i,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);u>l;l++)if(null!=(o=arguments[l]))for(n in o)e=s[n],a=o[n],s!==a&&(c&&a&&(r.isPlainObject(a)||(t=r.isArray(a)))?(t?(t=!1,i=e&&r.isArray(e)?e:[]):i=e&&r.isPlainObject(e)?e:{},s[n]=r.extend(c,i,a)):void 0!==a&&(s[n]=a));return s},r.queue=function(e,a,n){function o(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){a=(a||"fx")+"queue";var i=r.data(e,a);return n?(!i||r.isArray(n)?i=r.data(e,a,o(n)):i.push(n),i):i||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,a){t=t||"fx";var n=r.queue(a,t),o=n.shift();"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),o.call(a,function(){r.dequeue(a,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),a=this.offset(),n=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:r(e).offset();return a.top-=parseFloat(t.style.marginTop)||0,a.left-=parseFloat(t.style.marginLeft)||0,e.style&&(n.top+=parseFloat(e.style.borderTopWidth)||0,n.left+=parseFloat(e.style.borderLeftWidth)||0),{top:a.top-n.top,left:a.left-n.left}}};var a={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var n={},o=n.hasOwnProperty,i=n.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)n["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function i(e){var t=f.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return m.isString(e)?b.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?s.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=b.Easings[b.defaults.easing]?b.defaults.easing:v),r}function c(e){if(e){var t=(new Date).getTime(),r=b.State.calls.length;r>1e4&&(b.State.calls=n(b.State.calls));for(var o=0;r>o;o++)if(b.State.calls[o]){var s=b.State.calls[o],l=s[0],u=s[2],d=s[3],g=!!d,y=null;d||(d=b.State.calls[o][3]=t-16);for(var h=Math.min((t-d)/u.duration,1),v=0,x=l.length;x>v;v++){var P=l[v],V=P.element;if(i(V)){var C=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];f.each(T,function(e,t){S.setPropertyValue(V,"display",t)})}S.setPropertyValue(V,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&S.setPropertyValue(V,"visibility",u.visibility);for(var k in P)if("element"!==k){var A,F=P[k],j=m.isString(F.easing)?b.Easings[F.easing]:F.easing;if(1===h)A=F.endValue;else{var E=F.endValue-F.startValue;if(A=F.startValue+E*j(h,u,E),!g&&A===F.currentValue)continue}if(F.currentValue=A,"tween"===k)y=A;else{if(S.Hooks.registered[k]){var H=S.Hooks.getRoot(k),N=i(V).rootPropertyValueCache[H];N&&(F.rootPropertyValue=N)}var L=S.setPropertyValue(V,k,F.currentValue+(0===parseFloat(A)?"":F.unitType),F.rootPropertyValue,F.scrollData);S.Hooks.registered[k]&&(i(V).rootPropertyValueCache[H]=S.Normalizations.registered[H]?S.Normalizations.registered[H]("extract",null,L[1]):L[1]),"transform"===L[0]&&(C=!0)}}u.mobileHA&&i(V).transformCache.translate3d===a&&(i(V).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&S.flushTransformCache(V)}}u.display!==a&&"none"!==u.display&&(b.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(b.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],h,Math.max(0,d+u.duration-t),d,y),1===h&&p(o)}}b.State.isTicking&&w(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var r=b.State.calls[e][0],n=b.State.calls[e][1],o=b.State.calls[e][2],s=b.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&(f.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var d=!1;f.each(S.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(d=!0,delete i(p).transformCache[t])}),o.mobileHA&&(d=!0,delete i(p).transformCache.translate3d),d&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(g){setTimeout(function(){throw g},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&(f.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&f.dequeue(p,o.queue)}b.State.calls[e]=!1;for(var m=0,y=b.State.calls.length;y>m;m++)if(b.State.calls[m]!==!1){l=!0;break}l===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var f,d=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(f=e,y=!0):f=t.Velocity.Utilities,8>=d&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=d)return void(jQuery.fn.velocity=jQuery.fn.animate);var h=400,v="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:f,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:h,easing:v,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){f.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o,i,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0,p=1e-4,f=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,l.tension=e,l.friction=t,o=null!==n,o?(c=a(e,t),i=c/n*f):i=f;s=r(s||l,i),u.push(1+s.x),c+=16,Math.abs(s.x)>p&&Math.abs(s.v)>p;);return o?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},f.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var S=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++){var t="color"===S.Lists.colors[e]?"0 0 0 1":"255 255 255 1";S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(d)for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(S.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),S.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in S.Hooks.templates){a=S.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;S.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var n,o,i=a[0],s=a[1];return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[s]=t,o=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=d)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=d||b.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":b.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:S.RegEx.isHex.test(n)?i="rgb("+S.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=d||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=d?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=d?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(d||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[n]))return b.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,a){return t+t+r+r+a+a}),t=a.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=d)l=f.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var g;g=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===d&&"filter"===r?g.getPropertyValue(r):g[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var m=s(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(r))&&(l=f(e).position()[r]+"px")}return l}var l;if(S.Hooks.registered[r]){var u=r,c=S.Hooks.getRoot(u);n===a&&(n=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(n=S.Normalizations.registered[c]("extract",e,n)),l=S.Hooks.extractValue(u,n)}else if(S.Normalizations.registered[r]){var p,g;p=S.Normalizations.registered[r]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[r]&&(g=S.Hooks.templates[r][1])),l=S.Normalizations.registered[r]("extract",e,g)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(m){l=0}else l=e.getAttribute(r);else l=s(e,S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[r]&&"transform"===S.Normalizations.registered[r]("name",e))S.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(S.Hooks.registered[r]){var l=r,u=S.Hooks.getRoot(r);n=n||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,n),r=u}if(S.Normalizations.registered[r]&&(a=S.Normalizations.registered[r]("inject",e,a),r=S.Normalizations.registered[r]("name",e)),s=S.Names.prefixCheck(r)[0],8>=d)try{e.style[s]=a}catch(c){b.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&S.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;b.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((d||b.State.isAndroid&&!b.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;f.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===d&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),b.hook=function(e,t,r){var n=a;return e=o(e),f.each(e,function(e,o){if(i(o)===a&&b.init(o),r===a)n===a&&(n=b.CSS.getPropertyValue(o,t));else{var s=b.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&b.CSS.flushTransformCache(o),n=s}}),n};var P=function(){function e(){return s?k.promise||null:l}function n(){function e(e){function p(e,t){var r=a,n=a,i=a;return m.isArray(e)?(r=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||S.RegEx.isHex.test(e[1])?i=e[1]:(m.isString(e[1])&&!S.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(n=t?e[1]:u(e[1],s.duration),e[2]!==a&&(i=e[2]))):r=e,t||(n=n||s.easing),m.isFunction(r)&&(r=r.call(o,V,w)),m.isFunction(i)&&(i=i.call(o,V,w)),[r||0,n,i]}function d(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function h(){var e={myParent:o.parentNode||r.body,position:S.getPropertyValue(o,"position"),fontSize:S.getPropertyValue(o,"fontSize")},a=e.position===L.lastPosition&&e.myParent===L.lastParent,n=e.fontSize===L.lastFontSize;L.lastParent=e.myParent,L.lastPosition=e.position,L.lastFontSize=e.fontSize;var s=100,l={};if(n&&a)l.emToPx=L.lastEmToPx,l.percentToPxWidth=L.lastPercentToPxWidth,l.percentToPxHeight=L.lastPercentToPxHeight;else{var u=i(o).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");b.init(u),e.myParent.appendChild(u),f.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(u,t,"hidden")}),b.CSS.setPropertyValue(u,"position",e.position),b.CSS.setPropertyValue(u,"fontSize",e.fontSize),b.CSS.setPropertyValue(u,"boxSizing","content-box"),f.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(u,t,s+"%")}),b.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=L.lastEmToPx=(parseFloat(S.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===L.remToPx&&(L.remToPx=parseFloat(S.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=L.remToPx,l.vwToPx=L.vwToPx,l.vhToPx=L.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),o),l}if(s.begin&&0===V)try{s.begin.call(g,g)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===A){var P,C,T,F=/^x$/i.test(s.axis)?"Left":"Top",j=parseFloat(s.offset)||0;s.container?m.isWrapped(s.container)||m.isNode(s.container)?(s.container=s.container[0]||s.container,P=s.container["scroll"+F],T=P+f(o).position()[F.toLowerCase()]+j):s.container=null:(P=b.State.scrollAnchor[b.State["scrollProperty"+F]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===F?"Top":"Left")]],T=f(o).offset()[F.toLowerCase()]+j),l={scroll:{rootPropertyValue:!1,startValue:P,currentValue:P,endValue:T,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:F,alternateValue:C}},element:o},b.debug&&console.log("tweensContainer (scroll): ",l.scroll,o)}else if("reverse"===A){if(!i(o).tweensContainer)return void f.dequeue(o,s.queue);"none"===i(o).opts.display&&(i(o).opts.display="auto"),"hidden"===i(o).opts.visibility&&(i(o).opts.visibility="visible"),i(o).opts.loop=!1,i(o).opts.begin=null,i(o).opts.complete=null,v.easing||delete s.easing,v.duration||delete s.duration,s=f.extend({},i(o).opts,s);var E=f.extend(!0,{},i(o).tweensContainer);for(var H in E)if("element"!==H){var N=E[H].startValue;E[H].startValue=E[H].currentValue=E[H].endValue,E[H].endValue=N,m.isEmptyObject(v)||(E[H].easing=s.easing),b.debug&&console.log("reverse tweensContainer ("+H+"): "+JSON.stringify(E[H]),o)}l=E}else if("start"===A){var E;i(o).tweensContainer&&i(o).isAnimating===!0&&(E=i(o).tweensContainer),f.each(y,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(S.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(n),u=i?S.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),y[e+s[c]]=f}delete y[e]}}});for(var z in y){var O=p(y[z]),q=O[0],$=O[1],M=O[2];z=S.Names.camelCase(z);var I=S.Hooks.getRoot(z),B=!1;if(i(o).isSVG||"tween"===I||S.Names.prefixCheck(I)[1]!==!1||S.Normalizations.registered[I]!==a){(s.display!==a&&null!==s.display&&"none"!==s.display||s.visibility!==a&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!M&&0!==q&&(M=0),s._cacheValues&&E&&E[z]?(M===a&&(M=E[z].endValue+E[z].unitType),B=i(o).rootPropertyValueCache[I]):S.Hooks.registered[z]?M===a?(B=S.getPropertyValue(o,I),M=S.getPropertyValue(o,z,B)):B=S.Hooks.templates[I][1]:M===a&&(M=S.getPropertyValue(o,z));var W,G,Y,D=!1;if(W=d(z,M),M=W[0],Y=W[1],W=d(z,q),q=W[0].replace(/^([+-\/*])=/,function(e,t){return D=t,""}),G=W[1],M=parseFloat(M)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,G="em"):/^scale/.test(z)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,G="")),/[\/*]/.test(D))G=Y;else if(Y!==G&&0!==M)if(0===q)G=Y;else{n=n||h();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)||"x"===z?"x":"y";switch(Y){case"%":M*="x"===Q?n.percentToPxWidth:n.percentToPxHeight;break;case"px":break;default:M*=n[Y+"ToPx"]}switch(G){case"%":M*=1/("x"===Q?n.percentToPxWidth:n.percentToPxHeight);break;case"px":break;default:M*=1/n[G+"ToPx"]}}switch(D){case"+":q=M+q;break;case"-":q=M-q;break;case"*":q=M*q;break;case"/":q=M/q}l[z]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:q,unitType:G,easing:$},b.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(l[z]),o)}else b.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}l.element=o}l.element&&(S.Values.addClass(o,"velocity-animating"),R.push(l),""===s.queue&&(i(o).tweensContainer=l,i(o).opts=s),i(o).isAnimating=!0,V===w-1?(b.State.calls.push([R,g,s,null,k.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,c())):V++)}var n,o=this,s=f.extend({},b.defaults,v),l={};switch(i(o)===a&&b.init(o),parseFloat(s.delay)&&s.queue!==!1&&f.queue(o,s.queue,function(e){b.velocityQueueEntryFlag=!0,i(o).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=h;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}b.mock!==!1&&(b.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(b.mock)||1,s.delay*=parseFloat(b.mock)||1)),s.easing=u(s.easing,s.duration),s.begin&&!m.isFunction(s.begin)&&(s.begin=null),s.progress&&!m.isFunction(s.progress)&&(s.progress=null),s.complete&&!m.isFunction(s.complete)&&(s.complete=null),s.display!==a&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=b.CSS.Values.getDisplayType(o))),s.visibility!==a&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():f.queue(o,s.queue,function(t,r){return r===!0?(k.promise&&k.resolver(g),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===f.queue(o)[0]||f.dequeue(o)}var s,l,d,g,y,v,x=arguments[0]&&(arguments[0].p||f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(s=!1,d=0,g=this,l=this):(s=!0,d=1,g=x?arguments[0].elements||arguments[0].e:arguments[0]),g=o(g)){x?(y=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(y=arguments[d],v=arguments[d+1]);var w=g.length,V=0;if(!/^(stop|finish)$/i.test(y)&&!f.isPlainObject(v)){var C=d+1;v={};for(var T=C;T<arguments.length;T++)m.isArray(arguments[T])||!/^(fast|normal|slow)$/i.test(arguments[T])&&!/^\d/.test(arguments[T])?m.isString(arguments[T])||m.isArray(arguments[T])?v.easing=arguments[T]:m.isFunction(arguments[T])&&(v.complete=arguments[T]):v.duration=arguments[T]}var k={promise:null,resolver:null,rejecter:null};s&&b.Promise&&(k.promise=new b.Promise(function(e,t){k.resolver=e,k.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"finish":case"stop":f.each(g,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var F=[];return f.each(b.State.calls,function(e,t){t&&f.each(t[1],function(r,n){var o=v===a?"":v;return o===!0||t[2].queue===o||v===a&&t[2].queue===!1?void f.each(g,function(r,a){a===n&&((v===!0||m.isString(v))&&(f.each(f.queue(a,m.isString(v)?v:""),function(e,t){
m.isFunction(t)&&t(null,!0)}),f.queue(a,m.isString(v)?v:"",[])),"stop"===y?(i(a)&&i(a).tweensContainer&&o!==!1&&f.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),F.push(e)):"finish"===y&&(t[2].duration=1))}):!0})}),"stop"===y&&(f.each(F,function(e,t){p(t,!0)}),k.promise&&k.resolver(g)),e();default:if(!f.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var j=f.extend({},v),E=j.duration,H=j.delay||0;return j.backwards===!0&&(g=f.extend(!0,[],g).reverse()),f.each(g,function(e,t){parseFloat(j.stagger)?j.delay=H+parseFloat(j.stagger)*e:m.isFunction(j.stagger)&&(j.delay=H+j.stagger.call(t,e,w)),j.drag&&(j.duration=parseFloat(E)||(/^(callout|transition)/.test(y)?1e3:h),j.duration=Math.max(j.duration*(j.backwards?1-e/w:(e+1)/w),.75*j.duration,200)),b.Redirects[y].call(t,t,j||{},e,w,g,k.promise?k:a)}),e()}var N="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise?k.rejecter(new Error(N)):console.log(N),e()}A="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];f.each(g,function(e,t){m.isNode(t)&&n.call(t)});var z,j=f.extend({},b.defaults,v);if(j.loop=parseInt(j.loop),z=2*j.loop-1,j.loop)for(var O=0;z>O;O++){var q={delay:j.delay,progress:j.progress};O===z-1&&(q.display=j.display,q.visibility=j.visibility,q.complete=j.complete),P(g,"reverse",q)}return e()}};b=f.extend(P,b),b.animate=P;var w=t.requestAnimationFrame||g;return b.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(w=function(e){return setTimeout(function(){e(!0)},16)},c()):w=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=P,e.fn.velocity.defaults=b.defaults),f.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===a&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){d[r]=e.style[r];var a=b.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}d.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in d)e.style[t]=d[t];c&&c.call(i,i),s&&s.resolver(i)},b(e,p,l)}}),f.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=f.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}));
;!function(a,b,c,d){"use strict";function k(a,b,c){return setTimeout(q(a,c),b)}function l(a,b,c){return Array.isArray(a)?(m(a,c[b],c),!0):!1}function m(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function n(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function o(a,b){return n(a,b,!0)}function p(a,b,c){var e,d=b.prototype;e=a.prototype=Object.create(d),e.constructor=a,e._super=d,c&&n(e,c)}function q(a,b){return function(){return a.apply(b,arguments)}}function r(a,b){return typeof a==g?a.apply(b?b[0]||d:d,b):a}function s(a,b){return a===d?b:a}function t(a,b,c){m(x(b),function(b){a.addEventListener(b,c,!1)})}function u(a,b,c){m(x(b),function(b){a.removeEventListener(b,c,!1)})}function v(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function w(a,b){return a.indexOf(b)>-1}function x(a){return a.trim().split(/\s+/g)}function y(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function z(a){return Array.prototype.slice.call(a,0)}function A(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];y(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function B(a,b){for(var c,f,g=b[0].toUpperCase()+b.slice(1),h=0;h<e.length;){if(c=e[h],f=c?c+g:b,f in a)return f;h++}return d}function D(){return C++}function E(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function ab(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){r(a.options.enable,[a])&&c.handler(b)},this.init()}function bb(a){var b,c=a.options.inputClass;return b=c?c:H?wb:I?Eb:G?Gb:rb,new b(a,cb)}function cb(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&O&&0===d-e,g=b&(Q|R)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,db(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function db(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=gb(b)),e>1&&!c.firstMultiple?c.firstMultiple=gb(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=hb(d);b.timeStamp=j(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=lb(h,i),b.distance=kb(h,i),eb(c,b),b.offsetDirection=jb(b.deltaX,b.deltaY),b.scale=g?nb(g.pointers,d):1,b.rotation=g?mb(g.pointers,d):0,fb(c,b);var k=a.element;v(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function eb(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===O||f.eventType===Q)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function fb(a,b){var f,g,h,j,c=a.lastInterval||b,e=b.timeStamp-c.timeStamp;if(b.eventType!=R&&(e>N||c.velocity===d)){var k=c.deltaX-b.deltaX,l=c.deltaY-b.deltaY,m=ib(e,k,l);g=m.x,h=m.y,f=i(m.x)>i(m.y)?m.x:m.y,j=jb(k,l),a.lastInterval=b}else f=c.velocity,g=c.velocityX,h=c.velocityY,j=c.direction;b.velocity=f,b.velocityX=g,b.velocityY=h,b.direction=j}function gb(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:h(a.pointers[c].clientX),clientY:h(a.pointers[c].clientY)},c++;return{timeStamp:j(),pointers:b,center:hb(b),deltaX:a.deltaX,deltaY:a.deltaY}}function hb(a){var b=a.length;if(1===b)return{x:h(a[0].clientX),y:h(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:h(c/b),y:h(d/b)}}function ib(a,b,c){return{x:b/a||0,y:c/a||0}}function jb(a,b){return a===b?S:i(a)>=i(b)?a>0?T:U:b>0?V:W}function kb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function lb(a,b,c){c||(c=$);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function mb(a,b){return lb(b[1],b[0],_)-lb(a[1],a[0],_)}function nb(a,b){return kb(b[0],b[1],_)/kb(a[0],a[1],_)}function rb(){this.evEl=pb,this.evWin=qb,this.allow=!0,this.pressed=!1,ab.apply(this,arguments)}function wb(){this.evEl=ub,this.evWin=vb,ab.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function Ab(){this.evTarget=yb,this.evWin=zb,this.started=!1,ab.apply(this,arguments)}function Bb(a,b){var c=z(a.touches),d=z(a.changedTouches);return b&(Q|R)&&(c=A(c.concat(d),"identifier",!0)),[c,d]}function Eb(){this.evTarget=Db,this.targetIds={},ab.apply(this,arguments)}function Fb(a,b){var c=z(a.touches),d=this.targetIds;if(b&(O|P)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=z(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return v(a.target,i)}),b===O)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Q|R)&&delete d[g[e].identifier],e++;return h.length?[A(f.concat(h),"identifier",!0),h]:void 0}function Gb(){ab.apply(this,arguments);var a=q(this.handler,this);this.touch=new Eb(this.manager,a),this.mouse=new rb(this.manager,a)}function Pb(a,b){this.manager=a,this.set(b)}function Qb(a){if(w(a,Mb))return Mb;var b=w(a,Nb),c=w(a,Ob);return b&&c?Nb+" "+Ob:b||c?b?Nb:Ob:w(a,Lb)?Lb:Kb}function Yb(a){this.id=D(),this.manager=null,this.options=o(a||{},this.defaults),this.options.enable=s(this.options.enable,!0),this.state=Rb,this.simultaneous={},this.requireFail=[]}function Zb(a){return a&Wb?"cancel":a&Ub?"end":a&Tb?"move":a&Sb?"start":""}function $b(a){return a==W?"down":a==V?"up":a==T?"left":a==U?"right":""}function _b(a,b){var c=b.manager;return c?c.get(a):a}function ac(){Yb.apply(this,arguments)}function bc(){ac.apply(this,arguments),this.pX=null,this.pY=null}function cc(){ac.apply(this,arguments)}function dc(){Yb.apply(this,arguments),this._timer=null,this._input=null}function ec(){ac.apply(this,arguments)}function fc(){ac.apply(this,arguments)}function gc(){Yb.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function hc(a,b){return b=b||{},b.recognizers=s(b.recognizers,hc.defaults.preset),new kc(a,b)}function kc(a,b){b=b||{},this.options=o(b,hc.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=bb(this),this.touchAction=new Pb(this,this.options.touchAction),lc(this,!0),m(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function lc(a,b){var c=a.element;m(a.options.cssProps,function(a,d){c.style[B(c.style,d)]=b?a:""})}function mc(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var e=["","webkit","moz","MS","ms","o"],f=b.createElement("div"),g="function",h=Math.round,i=Math.abs,j=Date.now,C=1,F=/mobile|tablet|ip(ad|hone|od)|android/i,G="ontouchstart"in a,H=B(a,"PointerEvent")!==d,I=G&&F.test(navigator.userAgent),J="touch",K="pen",L="mouse",M="kinect",N=25,O=1,P=2,Q=4,R=8,S=1,T=2,U=4,V=8,W=16,X=T|U,Y=V|W,Z=X|Y,$=["x","y"],_=["clientX","clientY"];ab.prototype={handler:function(){},init:function(){this.evEl&&t(this.element,this.evEl,this.domHandler),this.evTarget&&t(this.target,this.evTarget,this.domHandler),this.evWin&&t(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&u(this.element,this.evEl,this.domHandler),this.evTarget&&u(this.target,this.evTarget,this.domHandler),this.evWin&&u(E(this.element),this.evWin,this.domHandler)}};var ob={mousedown:O,mousemove:P,mouseup:Q},pb="mousedown",qb="mousemove mouseup";p(rb,ab,{handler:function(a){var b=ob[a.type];b&O&&0===a.button&&(this.pressed=!0),b&P&&1!==a.which&&(b=Q),this.pressed&&this.allow&&(b&Q&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:L,srcEvent:a}))}});var sb={pointerdown:O,pointermove:P,pointerup:Q,pointercancel:R,pointerout:R},tb={2:J,3:K,4:L,5:M},ub="pointerdown",vb="pointermove pointerup pointercancel";a.MSPointerEvent&&(ub="MSPointerDown",vb="MSPointerMove MSPointerUp MSPointerCancel"),p(wb,ab,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=sb[d],f=tb[a.pointerType]||a.pointerType,g=f==J,h=y(b,a.pointerId,"pointerId");e&O&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Q|R)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var xb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},yb="touchstart",zb="touchstart touchmove touchend touchcancel";p(Ab,ab,{handler:function(a){var b=xb[a.type];if(b===O&&(this.started=!0),this.started){var c=Bb.call(this,a,b);b&(Q|R)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}});var Cb={touchstart:O,touchmove:P,touchend:Q,touchcancel:R},Db="touchstart touchmove touchend touchcancel";p(Eb,ab,{handler:function(a){var b=Cb[a.type],c=Fb.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:J,srcEvent:a})}}),p(Gb,ab,{handler:function(a,b,c){var d=c.pointerType==J,e=c.pointerType==L;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Q|R)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Hb=B(f.style,"touchAction"),Ib=Hb!==d,Jb="compute",Kb="auto",Lb="manipulation",Mb="none",Nb="pan-x",Ob="pan-y";Pb.prototype={set:function(a){a==Jb&&(a=this.compute()),Ib&&(this.manager.element.style[Hb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return m(this.manager.recognizers,function(b){r(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),Qb(a.join(" "))},preventDefaults:function(a){if(!Ib){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return b.preventDefault(),void 0;var d=this.actions,e=w(d,Mb),f=w(d,Ob),g=w(d,Nb);return e||f&&c&X||g&&c&Y?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var Rb=1,Sb=2,Tb=4,Ub=8,Vb=Ub,Wb=16,Xb=32;Yb.prototype={defaults:{},set:function(a){return n(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(l(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_b(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return l(a,"dropRecognizeWith",this)?this:(a=_b(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(l(a,"requireFailure",this))return this;var b=this.requireFail;return a=_b(a,this),-1===y(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(l(a,"dropRequireFailure",this))return this;a=_b(a,this);var b=y(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function d(d){b.manager.emit(b.options.event+(d?Zb(c):""),a)}var b=this,c=this.state;Ub>c&&d(!0),d(),c>=Ub&&d(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):(this.state=Xb,void 0)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(Xb|Rb)))return!1;a++}return!0},recognize:function(a){var b=n({},a);return r(this.options.enable,[this,b])?(this.state&(Vb|Wb|Xb)&&(this.state=Rb),this.state=this.process(b),this.state&(Sb|Tb|Ub|Wb)&&this.tryEmit(b),void 0):(this.reset(),this.state=Xb,void 0)},process:function(){},getTouchAction:function(){},reset:function(){}},p(ac,Yb,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(Sb|Tb),e=this.attrTest(a);return d&&(c&R||!e)?b|Wb:d||e?c&Q?b|Ub:b&Sb?b|Tb:Sb:Xb}}),p(bc,ac,{defaults:{event:"pan",threshold:10,pointers:1,direction:Z},getTouchAction:function(){var a=this.options.direction,b=[];return a&X&&b.push(Ob),a&Y&&b.push(Nb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&X?(e=0===f?S:0>f?T:U,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?S:0>g?V:W,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return ac.prototype.attrTest.call(this,a)&&(this.state&Sb||!(this.state&Sb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),p(cc,ac,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&Sb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),p(dc,Yb,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[Kb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Q|R)&&!e)this.reset();else if(a.eventType&O)this.reset(),this._timer=k(function(){this.state=Vb,this.tryEmit()},b.time,this);else if(a.eventType&Q)return Vb;return Xb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===Vb&&(a&&a.eventType&Q?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=j(),this.manager.emit(this.options.event,this._input)))}}),p(ec,ac,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Mb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&Sb)}}),p(fc,ac,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:X|Y,pointers:1},getTouchAction:function(){return bc.prototype.getTouchAction.call(this)},attrTest:function(a){var c,b=this.options.direction;return b&(X|Y)?c=a.velocity:b&X?c=a.velocityX:b&Y&&(c=a.velocityY),this._super.attrTest.call(this,a)&&b&a.direction&&a.distance>this.options.threshold&&i(c)>this.options.velocity&&a.eventType&Q},emit:function(a){var b=$b(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),p(gc,Yb,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Lb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,e=a.deltaTime<b.time;if(this.reset(),a.eventType&O&&0===this.count)return this.failTimeout();if(d&&e&&c){if(a.eventType!=Q)return this.failTimeout();var f=this.pTime?a.timeStamp-this.pTime<b.interval:!0,g=!this.pCenter||kb(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,g&&f?this.count+=1:this.count=1,this._input=a;var h=this.count%b.taps;if(0===h)return this.hasRequireFailures()?(this._timer=k(function(){this.state=Vb,this.tryEmit()},b.interval,this),Sb):Vb}return Xb},failTimeout:function(){return this._timer=k(function(){this.state=Xb},this.options.interval,this),Xb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),hc.VERSION="2.0.4",hc.defaults={domEvents:!1,touchAction:Jb,enable:!0,inputTarget:null,inputClass:null,preset:[[ec,{enable:!1}],[cc,{enable:!1},["rotate"]],[fc,{direction:X}],[bc,{direction:X},["swipe"]],[gc],[gc,{event:"doubletap",taps:2},["tap"]],[dc]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ic=1,jc=2;kc.prototype={set:function(a){return n(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?jc:ic},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&Vb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===jc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(Sb|Tb|Ub)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Yb)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(l(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(l(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(y(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return m(x(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return m(x(a),function(a){b?c[a].splice(y(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&mc(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&lc(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},n(hc,{INPUT_START:O,INPUT_MOVE:P,INPUT_END:Q,INPUT_CANCEL:R,STATE_POSSIBLE:Rb,STATE_BEGAN:Sb,STATE_CHANGED:Tb,STATE_ENDED:Ub,STATE_RECOGNIZED:Vb,STATE_CANCELLED:Wb,STATE_FAILED:Xb,DIRECTION_NONE:S,DIRECTION_LEFT:T,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:W,DIRECTION_HORIZONTAL:X,DIRECTION_VERTICAL:Y,DIRECTION_ALL:Z,Manager:kc,Input:ab,TouchAction:Pb,TouchInput:Eb,MouseInput:rb,PointerEventInput:wb,TouchMouseInput:Gb,SingleTouchInput:Ab,Recognizer:Yb,AttrRecognizer:ac,Tap:gc,Pan:bc,Swipe:fc,Pinch:cc,Rotate:ec,Press:dc,on:t,off:u,each:m,merge:o,extend:n,inherit:p,bindFn:q,prefixed:B}),typeof define==g&&define.amd?define(function(){return hc}):"undefined"!=typeof module&&module.exports?module.exports=hc:a[c]=hc}(window,document,"Hammer");;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));
;// Required for Meteor package, the use of window prevents export by Meteor
(function(window){
  if(window.Package){
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);


/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function(window) {
  var lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame,
    i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function(callback) {
      var now = +Date.now(),
        nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function() {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
}(window));


// Unique ID
Materialize.guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function(hash) {
  return hash.replace( /(:|\.|\[|\]|,|=)/g, "\\$1" );
};

Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function(){
        if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
        }
    });
    return isFixed;
};

// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}
;(function ($) {
  $.fn.collapsible = function(options) {
    var defaults = {
      accordion: undefined,
      onOpen: undefined,
      onClose: undefined
    };

    options = $.extend(defaults, options);


    return this.each(function() {

      var $this = $(this);

      var $panel_headers = $(this).find('> li > .collapsible-header');

      var collapsible_type = $this.data("collapsible");

      // Turn off any existing event handlers
      $this.off('click.collapse', '> li > .collapsible-header');
      $panel_headers.off('click.collapse');


      /****************
      Helper Functions
      ****************/

      // Accordion Open
      function accordionOpen(object) {
        $panel_headers = $this.find('> li > .collapsible-header');
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else{
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }

        $panel_headers.not(object).removeClass('active').parent().removeClass('active');

        // Close previously open accordion elements.
        $panel_headers.not(object).parent().children('.collapsible-body').stop(true,false).each(function() {
          if ($(this).is(':visible')) {
            $(this).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete:
                function() {
                  $(this).css('height', '');
                  execCallbacks($(this).siblings('.collapsible-header'));
                }
            });
          }
        });
      }

      // Expandable Open
      function expandableOpen(object) {
        if (object.hasClass('active')) {
          object.parent().addClass('active');
        }
        else {
          object.parent().removeClass('active');
        }
        if (object.parent().hasClass('active')){
          object.siblings('.collapsible-body').stop(true,false).slideDown({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
        else {
          object.siblings('.collapsible-body').stop(true,false).slideUp({ duration: 350, easing: "easeOutQuart", queue: false, complete: function() {$(this).css('height', '');}});
        }
      }

      // Open collapsible. object: .collapsible-header
      function collapsibleOpen(object) {
        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
          accordionOpen(object);
        } else { // Handle Expandables
          expandableOpen(object);
        }

        execCallbacks(object);
      }

      // Handle callbacks
      function execCallbacks(object) {
        if (object.hasClass('active')) {
          if (typeof(options.onOpen) === "function") {
            options.onOpen.call(this, object.parent());
          }
        } else {
          if (typeof(options.onClose) === "function") {
            options.onClose.call(this, object.parent());
          }
        }
      }

      /**
       * Check if object is children of panel header
       * @param  {Object}  object Jquery object
       * @return {Boolean} true if it is children
       */
      function isChildrenOfPanelHeader(object) {

        var panelHeader = getPanelHeader(object);

        return panelHeader.length > 0;
      }

      /**
       * Get panel header from a children element
       * @param  {Object} object Jquery object
       * @return {Object} panel header object
       */
      function getPanelHeader(object) {

        return object.closest('li > .collapsible-header');
      }

      /*****  End Helper Functions  *****/



      // Add click handler to only direct collapsible header children
      $this.on('click.collapse', '> li > .collapsible-header', function(e) {
        var element = $(e.target);

        if (isChildrenOfPanelHeader(element)) {
          element = getPanelHeader(element);
        }

        element.toggleClass('active');

        collapsibleOpen(element);
      });


      // Open first active
      if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) { // Handle Accordion
        collapsibleOpen($panel_headers.filter('.active').first());

      } else { // Handle Expandables
        $panel_headers.filter('.active').each(function() {
          collapsibleOpen($(this));
        });
      }

    });
  };

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
}( jQuery ));;(function ($) {

  // Add posibility to scroll to selected option
  // usefull for select for example
  $.fn.scrollTo = function(elem) {
    $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
    return this;
  };

  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Constrains width of dropdown to the activator
      hover: false,
      gutter: 0, // Spacing from edge
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    // Open dropdown.
    if (options === "open") {
      this.each(function() {
        $(this).trigger('open');
      });
      return false;
    }

    // Close dropdown.
    if (options === "close") {
      this.each(function() {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function(){
      var origin = $(this);
      var curr_options = $.extend({}, defaults, options);
      var isFocused = false;

      // Dropdown menu
      var activates = $("#"+ origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined)
          curr_options.inDuration = origin.data('induration');
        if (origin.data('outduration') !== undefined)
          curr_options.outDuration = origin.data('outduration');
        if (origin.data('constrainwidth') !== undefined)
          curr_options.constrain_width = origin.data('constrainwidth');
        if (origin.data('hover') !== undefined)
          curr_options.hover = origin.data('hover');
        if (origin.data('gutter') !== undefined)
          curr_options.gutter = origin.data('gutter');
        if (origin.data('beloworigin') !== undefined)
          curr_options.belowOrigin = origin.data('beloworigin');
        if (origin.data('alignment') !== undefined)
          curr_options.alignment = origin.data('alignment');
        if (origin.data('stoppropagation') !== undefined)
          curr_options.stopPropagation = origin.data('stoppropagation');
      }

      updateOptions();

      // Attach dropdown to its activator
      origin.after(activates);

      /*
        Helper function to position and resize dropdown.
        Used in hover and click handler.
      */
      function placeDropdown(eventType) {
        // Check for simultaneous focus and click events.
        if (eventType === 'focus') {
          isFocused = true;
        }

        // Check html data attributes
        updateOptions();

        // Set Dropdown state
        activates.addClass('active');
        origin.addClass('active');

        // Constrain width
        if (curr_options.constrain_width === true) {
          activates.css('width', origin.outerWidth());

        } else {
          activates.css('white-space', 'nowrap');
        }

        // Offscreen detection
        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = curr_options.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        // Below Origin
        var verticalOffset = 0;
        if (curr_options.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        // Check for scrolling positioned container.
        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }


        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          // Dropdown goes past screen on right, force right alignment
          currAlignment = 'right';

        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          // Dropdown goes past screen on left, force left alignment
          currAlignment = 'left';
        }
        // Vertical bottom offscreen detection
        if (offsetTop + activates.innerHeight() > windowHeight) {
          // If going upwards still goes offscreen, just crop height of dropdown.
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            // Flow upwards.
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        // Handle edge alignment
        if (currAlignment === 'left') {
          gutterSpacing = curr_options.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        }
        else if (currAlignment === 'right') {
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -curr_options.gutter;
          leftPosition =  offsetRight + gutterSpacing;
        }

        // Position dropdown
        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });


        // Show dropdown
        activates.stop(true, true).css('opacity', 0)
          .slideDown({
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          })
          .animate( {opacity: 1}, {queue: false, duration: curr_options.inDuration, easing: 'easeOutSine'});
      }

      function hideDropdown() {
        // Check for simultaneous focus and click events.
        isFocused = false;
        activates.fadeOut(curr_options.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        setTimeout(function() { activates.css('max-height', ''); }, curr_options.outDuration);
      }

      // Hover
      if (curr_options.hover) {
        var open = false;
        origin.unbind('click.' + origin.attr('id'));
        // Hover handler to show dropdown
        origin.on('mouseenter', function(e){ // Mouse over
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function(e){
          // If hover on origin then to something other than dropdown content, then close
          var toEl = e.toElement || e.relatedTarget; // added browser compatibility for target element
          if(!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function(e){ // Mouse out
          var toEl = e.toElement || e.relatedTarget;
          if(!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        // Click
      } else {
        // Click handler to show dropdown
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.'+origin.attr('id'), function(e){
          if (!isFocused) {
            if ( origin[0] == e.currentTarget &&
                 !origin.hasClass('active') &&
                 ($(e.target).closest('.dropdown-content').length === 0)) {
              e.preventDefault(); // Prevents button click from moving window
              if (curr_options.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            }
            // If origin is clicked and menu is open, close menu
            else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
            }
            // If menu open, add click close handler to document
            if (activates.hasClass('active')) {
              $(document).bind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e) {
                if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length) ) {
                  hideDropdown();
                  $(document).unbind('click.'+ activates.attr('id') + ' touchstart.' + activates.attr('id'));
                }
              });
            }
          }
        });

      } // End else

      // Listen to open and close event - useful for select component
      origin.on('open', function(e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(document).ready(function(){
    $('.dropdown-button').dropdown();
  });
}( jQuery ));
;(function($) {
  var _stack = 0,
  _lastID = 0,
  _generateID = function() {
    _lastID++;
    return 'materialize-modal-overlay-' + _lastID;
  };

  var methods = {
    init : function(options) {
      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        starting_top: '4%',
        ending_top: '10%'
      };

      // Override defaults
      options = $.extend(defaults, options);

      return this.each(function() {
        var $modal = $(this);
        var modal_id = $(this).attr("id") || '#' + $(this).data('target');

        var closeModal = function() {
          var overlayID = $modal.data('overlay-id');
          var $overlay = $('#' + overlayID);
          $modal.removeClass('open');

          // Enable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $modal.find('.modal-close').off('click.close');
          $(document).off('keyup.modal' + overlayID);

          $overlay.velocity( { opacity: 0}, {duration: options.out_duration, queue: false, ease: "easeOutQuart"});


          // Define Bottom Sheet animation
          var exitVelocityOptions = {
            duration: options.out_duration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function() {
              $(this).css({display:"none"});

              // Call complete callback
              if (typeof(options.complete) === "function") {
                options.complete.call(this, $modal);
              }
              $overlay.remove();
              _stack--;
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({bottom: "-100%", opacity: 0}, exitVelocityOptions);
          }
          else {
            $modal.velocity(
              { top: options.starting_top, opacity: 0, scaleX: 0.7},
              exitVelocityOptions
            );
          }
        };

        var openModal = function($trigger) {
          var $body = $('body');
          var oldWidth = $body.innerWidth();
          $body.css('overflow', 'hidden');
          $body.width(oldWidth);

          if ($modal.hasClass('open')) {
            return;
          }

          var overlayID = _generateID(tend(defaults, options);

     pedocumeni    else pp : f, 'hiddetions.starting_topTest:funct,
  _geneplay:"none"});

  'hidden = fu;
    } else {
        fac       dismi    // Handle moates.attr('id'),  Ham

    n ESCy:"none"});

 var overlayIn= $modal.data('overlay-id'anel header object
     arting_tope.$moCod();

 27on, rn thiSC $mouration: options.     dismi    // Handle mo) {
            $(this).slideUp(his).data('target');

 "      var cl")} object Jqutouchstel header object
     arti     dismi    // Handle  $(this).data('t 'hidden e, e ase: "erop"b _skcallback
 rop0+ $(this).data('target'al = $(this);
    ase: "erop"b _skca$(this);
               // Handle  $(this).data('t 'hidden       //          ind('.mod      );
          $modal.ren(){
    $(pen');

          // Enable scodal' }odal.hasClass('open')) {
 opt   bili        hstt 'hidde[0]ldWidth = $body.i').css({
            overflow: '',
          eClaidth: ''
          });

          $modal.find('.mon(){
    $(pff('click.close');
          $(document).off('keyup.modal' + overlayID);

          $overlay.velocity( { opacity: 0}, {duration: options.out_duration, qu     var exitVelocilay.vs = {
            duration: options.out_duralay.v          queue: fque          // Handle mo) {
            $      complete: function() {
              $(this).css({display:"none"});

              // Call comp0callback
        eClaidth: ''
      ptions.complete) === "function") {
          s).css("p.hook(eue: fqu"  $ovecalay.   // Handle motarget'al = s, $modal);
              oates.attr('id'),              // , $modal);
  urn 'materallback
        $overl'1'    eClaidth: ''
      ptions.complete        if ($modal.ha  Hamn.poefined,
      o   var overlayID = ect Jq     T          a[hh()="efaulut_durati+ '"], [ose")tap"]],"faulut_durati+ '"]ody = $('bod$(this));
 ions);dismiody = $('bod$(this));
 io     dismight', '');}});
       Hfined,
      o   var overlayIn= ect Jq     T          a[hh()="efaulut_durati+ '"], [ose")tap"]],"faulut_durati+ '"]ostel header object
     ardal);
              o=ction() {$'width', origin.outerWidth());

    ) /1.15;ect
     arda);dismitive
      if (optigin.unbind('click.' +        if + oridOutcurr ));
    
 = $('bod$(this));nions);dismio,ible: true,
        startingut_duration: 250,
       hh()eady: undefined,
        complete: uct
     arda);dismit   if (options. = $('bod$(this));nio     dismig,ible: true,
        star     dismi    // Handl          q + oridOutc   exi     remove(gin.iion: options.out_dura,
      constrain_widdismiody = $(remove(targetion: options.out_dura,
      constrain     dismight'= $(r
y(function(){  in_durn: optionin.on(OrO   });
  }; // truein.on('[in.on(OrO   });]menu open, s,this.tn.on('[ in.on(OrO   }); ]e pply(     quArrdenrigger jQupdate       mploverl qu1 fined"!=typeof  truen:Pb,Toun.on(OrO   }); :B}),typeof nimatoun.on(OrO   }); enu open, y.i').ick.!ori"ideD" open, s,this.tn.on('ct:"de pply(     qumploverl  ined"!=typeof out_dura,.error( 'Mrify(edefioun.on(OrO   });   $(dactinot     o ));lements.data('ht'= $(r
y(fun}) false;
;       isFixed = tction(){     plabox.collapsible'eader(obj(jQuery) {
  Vel = jQuery.Velocity;
}unction() {$        $(t:"dplaceDdisplay:"none"}   exitVelocitte       : 250,
  ts, optiot:"dplaceDdislapsible = fu 'hiddeA, clo;
            opnd drOut  nextTurrAl     }

    en');(){
      va275 }

    en')e;

      // D200 }

    en')ef (options === "open") {
  $(doc,c=a   vaunction var $bod  ts, optio     pla-$(doc,c=a  ') }

    en')ef (opalitVeloci0 }

    en')ef (opalent = 'le0 }

    en')    snersCefiged =

    en')    snerates.attr('id')scro($(doc,c=a  
          r('id') + ' tigin,ible: true,ty: 0.5,
     $(doc,c=a   var leftPosition'.     pla-$(doc,c=a  ') }

    tivates.addCitVelociive');
     itVel }

    tivates.addClass('active');
        origin.addClass('activealitVelocir('id')s          }
    en')ef (opalent = 'le             var ', '');}});
 If allay.veue: fqu(jQuery)o)ef (opal, '');}})unctrOut  nextTurrAvates.css('max-height'(jQuerToOf (opal    // Handle , "\\$1" );
};

Materialize.....)) {
     'hiddeA, clo;pe:fOut  nextTurt(thffsetLeft = origi(jQuerToOf (opal    // Handle , "\\$1" );
};

Materialition and resize 
    
      o  rOut  nextTurrAlsed = false;
        and click handler.
      */
  'hiddeA, clo;
      }tion and resize      vars).sco  $(doc,c=a  tion and $(doc,c=a  'al = $(this);
  .attr("$(doc,c=a  OffsletBourn 'mC     Reof( (wrapp+ overlayID)      ("$(doc,c=a  OffsletBourn 'mC     Reof( (      + overlayID) else if (catibiler.ent === 'right') 0 origin.outerWidth  // Handl        }
      Fve')    sner(eleme    var mo$modal;ment =      = $   }
       snersCefiged tions.gutte;$   }
       sner ti$(doc,c=a  OffsositioNode    }
    en')sRequutterSpacing =Copyrig    sner opti){th' + a$g    sneropdowar overla,
        startingid') vaun    snerote: function() {id')lse {
         r_opti').css('hebject
     arti d')lse {
         ,i').css('hees.attr('id'), clic   snersCefiged t(e.target);

   // Handle mo)     snersCefiged ti d')            }
              ction") {
         )     snersCefiged ti    snersCefigedl cha d')tes.attr('id'), function (e) {
            sner ti    snersositioNode    }
    }}tion and resize se unbind('clfalse;
        aal =  else if (currAlignme  }

     :    v);


            c {
          ialitVel;


            ce'});
   ef (opalent =        }
      headody.css('overflo= fu 'hidde= function(id="     plabox          var $bod {
        dal = $(this);
               // Handle  $ {
        da= fu;
    } els{s.attr('id'), clirOut  nextTurrAvathffses.attr('id'),(jQuerToOf (opal    // Handle ates.attr('id'   h Show lastIcss('overflow'origut beferWiibind('cliShogeptionthisr   }

     csseandoing upwards        ieferW( 'hiddetiog upwards  'hidden       //          1remove();
                              $ty', 0)
    n');

          /   .slideDownQuad'}        }
      headae')  Show lca   })           o
      o  ("#"+ origin.attr(a   }) r_opti""     $modal.velocitphgge_ca   })  function($trigger    plabox ca   })  var $body = $('body'tphgge_ca   }).text"+ origin.attr(a   }) r) {
          vvar $mod pp : f,phgge_ca   })dy = $('body'tphgge_ca   }).al = s"ase: "e":i"idlt);" ates.attr('id'tphgge_ca   }).       //          1re           $ty', 0)
    n');

          /   .slideDownQuad'}ptions();

        // SetR origiIhoge('overflo= fu 0)
 utterSpacing = 0;
 tVelPerc('hover');
 alitVelo/es.addCitVelrSpacing = 0;
e'});
Perc('hover');
 alent = '/es.addClass('rSpacing = 0;
newitVeloci0 }

     = 0;
newent = 'le0 }      o  ("#" tVelPerc('ho>
e'});
Perc('hetLeft = origi(0)
 uttr');
 alent = '/er');
 alitVeles.attr('id'newitVelocis.addCitVelo* 0.9es.attr('id'newlass('active');itVelo* 0.9 type)
 };

Materialize.....)) {
Left = origi(0)
 uttr');
 alitVelo/er');
 alent = es.attr('id'newitVeloci(s.addClass('a* 0.9) type)
 };

Materid'newlass('active');lass('a* 0.9tions();

        // Seth Show lShogep+curr }

          o  ("           e.prevethip});ler-img                f             // utSin {
   :'newitVele   {
   :'r');
 alitVelre           $0,ose');
          $(document, {duration: options") {
         )       aal = rWidth ,ght') 0})) {
         )  options.complete.call(th nu open, add click clo     ("newlass('emove();
           .attr("newitVelemove();
           rWidth var overlayet = 0;
  tWidtive');itVel/2 }
  leftPosition'.     pla-$(doc,c=a  ')rain_width ===.come;itVel/2emove();
           ht')  var overlayet = 0bleOpe+tive');lass('/2 }
  leftPosition'.     pla-$(doc,c=a  ')rain_widthoriginnewlass('/ 2move();
         remove();
         u open, add click cl         $ty', 0)
    open, add click cl

        // Close previouslllll  /   .slideDownQuad' Close previouslllll, {duration: options"rOut  nextTurrAl      ease: "easeOutC   ease: "easeOutCtes.attr('id'), ;
      C {durat // Handle ate;
      idth: '';

Materialize.....)) {
Left = origi      aal =top);
 gutterSpacing;
al =tori
 gutterSpacing;
options.complete.call(u open, add clico     ("newlass('emove();
       .attr("newitVelemove();
       rWidth var overlayet = 0;
  tWidtive');itVel/2 }
  leftPosition'.     pla-$(doc,c=a  ')rain_width ===.come;itVel/2emove();
       ht')  var overlayet = 0bleOpe+tive');lass('/2 }
  leftPosition'.     pla-$(doc,c=a  ')rain_widthoriginnewlass('/ 2move();
     remove();
     u open, add clic         $ty', 0)
    open, add clic

        // Close previousl  /   .slideDownQuad' Close previousl, {duration: options"rOut  nextTurrAl      ease: "easeOu ease: "easeOute;
      idth: '';

Material;

Maate;
      nd('cli));
    
 ;

Mate  Ham

    n et = 0;

Mate.outerWidth());
;
    } else {
            'hiddeA, cloetLeft = origi(jQuerToOf (opal    // Handl
        belowOrigin =am

    n ESCy:"none var overlay$moda(el header obje{
           e.$moCod();

 27;pe:fOut  nextTur var offsetL rn thiSC $mouration: op     'hiddeA, cloetLeft = origi),(jQuerToOf (opal    // Handle a // Handl
        beloowOrigin =Tif (llapsible(1 + Mat  $bue: f
   hogeptio  $bo });
   ip} $   }
 llapsible(1 + MToOf (opal  bje{
         rOut  nextTurrAlsed = f  $modal.veloci$(doc,c=a   var leftPosition'.     pla-$(doc,c=a  ') }

    titivates.addCitVelociive');
     itVel }

    titivates.addClass('active');
        origin.addClalass('activealitVelocir('id')     c {
   0%", opacity: 0}, f (opalent = 'le            ce'});
 ldWidth = $bodf             //"    "ctivates.stop(true,e de     plabox        ')r       //"    "ctivates.stop(true,e d.r    plabox ca   })')r       //"    "ctivates.
.stop(true,e de     plabox        ')r       //{ overlayID);
 eft = origi),  $modal.fi;

      /, y.i')dde=alEmit) { overflow  'hiddppion() {
        n');

          /   .slideDownQuad'    $(document, {duration: options") {
         ) n =am     astIcss('overflow'$bodf'hiddeA, clo;
            opop(true,e 250,
           // Handle moet
        });dWidth = $body.iR origiIhoge('overfloodf             //move();
     u open, add clic.attr("activealitVel Close previouslo     (" f (opalent = emove();
       rWidth).removeClass('acht') 0move();
     remove();
     u open, add clic         $i;

      /, open, add clic

        //    /   .slideDownQuad' // Handle moet
        };dWidth = $body.iR      Ca   }) + = oze se uozetTur unbiihoge('overfloode d.r    plabox ca   })')r       //{ overlayID);
 eft = origi),  $modal.fi;

      /, y.i')dde=alEmit) { overflow  'hiddppion() {
        n');

          /   .slideDownQuad'    $(document, {duration: options") {
         ) $(doc,c=a  'al = $(this);
        o     ("dal_id = $(this))))).attr("idl_id = $(this))))) else if (cdl_id = $(this)))))terialdl_id = $(this)))))rWidth''_id = $(this)))uart"});


              aal = $(this);
        o     ("dal_id = $(this)))))terialdl_id = $(this)))))rWidth''l_id = $(this))))).attr("idl_id = $(this)))))utSin {
   :'idl_id = $(this))))) else if (cdl_id = $(this))))) }

     : ''_id = $(this)))uart"});


        y.iR      $trig"});


              a 1}, {queue: false, duration: cccccccrOut  nextTurrAl     }

            e 250,
           "});


        y.iR                   D;
  unbi    sners"});


         clic   snersCefiged  duration: options.    snersCefigedlse {
         ,i' duration: ccccccc{
            $      comple   "});


  ) {
          func       });
            }
       e d.r    plaboxDdis.r    plabox    e   "   // Listen to open andxed = tctition(){ram llax.collapsible'eade      vates.addCf (origin      if (wrapperuration:origam llax.Scripo
      o(jQuery) {
  Vel = jQuery.icity: 0.5,
       if ($) {
  Vel         e) {
 nd click hram llax ldWidth = $bnction() {
    gam llax(t:"dpla,
        startingi
       _h  origin.addClala("#" taddCf (orig< 601ebject
     arti 
       _h  orio=ctirn Mat     currA0) ? irn Mat     cur: irn Ma.slideUp("img")       var           $      complction") {
          
       _h  orio=ctirn Mat     currA0) ? irn Mat     cur: 500r           $      compl     img
      //.slideUp("img") er(elem%", opacity: 0},img_h  orio=c img       var                 m llax_d  o =,img_h  orio-gi
       _h  origin.addClala     // Dro=onClose: u       });
 i
       _h  origin.addClala       o=cnClose: u       })gin.addClala    et = 0blegin      if (h());

        } elsetivates.addClass('active');
        origin.addClalass('ive');B// Dro=oet = 0bleg+es.addClass('rSpacing =       erc('hSt = 0ed ti(ive');B// Dro-    ) / ( 
       _h  orio+es.addClass('ar                 m llax nimatiorourn((  m llax_d  o *  erc('hSt = 0ed)   "});


    bject:"dpla,
        star c img se {
ase: "e ,i'b _sk'ar           $      complbjec( // Dro>oet = 0ble));
     o< (et = 0bleg+es.addClass(')splay:"none"});

 img se {
transform ,i"transibil3D(-50%,"g+e  m llax + "px gut"ptions.complete        if       // SetWaindable hogepnt =         e) {
 .slideUp("img") Out("nt =",ible: true,
        star{
    gam llax(ivates.stop(tru}rt", queue: false, complete: funct) {
 .yOptions ,
      constrai"nt ="   if (options. = $('bod$(uterWidth());
;
    } else {
        es.addCf (origin      if (wrapperuration:star{
    gam llax(es.css  if (options. = $('bod$(uterWidt= orig;
    } else {
        es.addCf (origin      if (wrapperuration:star{
    gam llax(es.css  if (options. = $('bons. = $(}     // Listen to open andxed = tctiorigin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(don -cu:i){th = $('boates.attrs = {
    init : function(options) {
      var defaults = {
        opacityration:oriFblesiginurr )f tab(opwe wan.!orikeepl  rlayofration:oriwhigintab'.drfalse,dae')origipt   bili Hover h}; // End d  if ($) {
  Ve,{
        es.addCf (origin      if (wrapperur}; // End d false,, $Hover han$link

      // Turn li.tab'a'e,{
        e$tab(f (origin    //wrapper,{
        e$tabf (originmationFra$tab(f (ori,n    /olling position) / $link
  // If,{
        e$
     le0 }      o   Fve'sscrollYO /*
    dable ndic
    ba  coar colse,dtab.      o   el: // ListOchildren
   tingialcptionPos .filter('.actplay:"none"}   exie$tab(f (orig- els.innerHeight();
- els }
        }

     //et = 0;
  tW; = $('boat      o   Fve'ss       /*
    dable ndic
    ba  coar colse,dtab.      o   el: // ListOchildren
   tingialcL) - ac .filter('.actplay:"none"}   exieels.innerHeight();
+     //et = 0;
  tW; = $('boat      o   I    $b _srflowath.f r  ch  unb       $blink
,orig));
   s.fn.scroll,dtab.      o false,gin  $link
  collaps[hh()="'+ _srflowath.f+'"]od)at      o   I  no r  ch'.drfourn,orig));e     $tlink   d,
  eleme$trig  false,   s.fn.st:"dplascroll,dtab.      ouncticroll,r to show drop  belowOrigifalse,gin   Velocity;
}li.tab'atPanelHeader(elem; = $('bo      ouncticroll,r to show drop  belowOrigifalse,gin   Velocity;
}li.tab'aeader(elem; = $('bo       o false,and click handler.
      */$
     le$link
 
    ticroll,
      */uncti
      alignment
    $
     le0 }= $('bo       ouncticroll,    !(e.target);

   // Handl$Hover hgin  $croll,   ath.fm; = $('bo       o){ /pp : e ndic
    dler urr  ndic
     (origtio ab'// Check fore) {
 npp : fction($trigge ndic
     var $body = $('b     indic
          // Turn .indic
   '
      */uncti   //is("s).css('"splay:"none"}){  indic
   aal = "croll":e$tab(f (orig- (ti
      _ge * $tabf (ori)}ptions();

){  indic
   aal = "t();":e$
     * $tabf (ori}ptions();

urr_options.inDuration,{
        e$
  ic
   aal = "croll":eialcptionPosticroll,
 ates.attr('id'tindic
   aal = "t();":eialcL) - acticroll,
 ates.attr('i} gut; = $('bo      o$(uterWidt= orig;
    } e ion,{
       $tab(f (origin    //wrapper;{
       $tabf (originmationFra$tab(f (ori,n    /olling position) / $link
  // If;{
       uncti
      alignment
      $
     le0 }= $('b  $      comuncti abf (orig!(e.0);
 $tab(f (orig! drop  belowOrig e$
  ic
   aal = "croll":eialcptionPosticroll,
 ates.attr('id'tindic
   aal = "t();":eialcL) - acticroll,
 ates.attr('i} = $('bons. = $(;

   ;
  fn.srem   TurrHover h}; // E$link
 dy')icroll,
= {
        op ion,{
       $(M    placeD.escapeHh.ft) {
 th.fm).art.em; = $('bobeloowOrigin =Bve')fn.s: 'easeOutCoefined,eck fore) {
  + ' tigin,i'aostel header object
     unction() {$         }
        ase.eacd                n.unbind('click.' +        i     exitVelocityO        // Sethc   s.regul detink ifn === fa  /*
    d.drspecified}

      updat!!: 250,
        === f"                  exitVelocityO        // $tab(f (origin    //wrapper;{
       $tabf (originmationFra$tab(f (ori,n    /olling position) / $link
  // If;{      // SetMak  fn.soldntab'.nfalse,abelowOrigifalse,a 1}, {queue: false, duration: cunctiHover hg!(e.target);

   // Handldl$Hover h.art.em; = $('byO        // SetU
     fn.s   iggleC elemefn.snewetink s(e.tover h}; // Eigifalse,gin   Velo;{
       $Hover hgin  M    placeD.escapeHh.ft) {
 th.fm);{
       $link

      // Turn li.tab'a'e }

     = 0;
false,Reof
   false,a.innerHeig;{      // SetMak  fn.stab'aalse,abelowOrigifalse,and click handler.
      */
 locitpnbi_
     le$
    ;{
       $
     le$link
 
    tive
      if (optiuncti
      alignment
      $
     le0 }= $('b  $      comtionsfige ur').fihideDrostab      comtioive');
 _srflowath.f    false,a');
  hh() ldWidth = $bunctiHover hg!(e.target);

   // Handldl$Hover h.n(e)' +        i  bject);
        }

   -cu execCallbacks(object);
      }

      //  -cu          queHover h   // Handle a // Handl
       // SetU
     indic
   Width = $bunctti
     -itpnbi_
    ) >drop  belowOrig e$
  ic
   a       //{"croll":eialcptionPosticroll,
 a, bject.parent(00,ose');
          /   .slideDownQuad'}ptions();

 e$
  ic
   a       //{"t();":eialcL) - acticroll,
 ae           $(00,ose');
          /   .slideDownQuad'
    "ea 90e   "});


  )lction") {
       $
  ic
   a       //{"t();":eialcL) - acticroll,
 ae  ject.parent(00,ose');
          /   .slideDownQuad'}ptions();

 e$
  ic
   a       //{"croll":eialcptionPosticroll,
 a, b         $(00,ose');
          /   .slideDownQuad'
    "ea 90e   // Handl
       // Setgin.att.fn.scnch  'sdropdowns: 'easacflow: '',
   n.unbind('click.' +       e   // Hons. = $(},{
   e.targ_tab'opdown);


 id enu open,    // Turn a[hh()="efaulati+ '"]od constrain  igin.hasClar
y(function(){tab(durn: optionin.on(OrO   });
  }; // truein.on('[in.on(OrO   });]menu open, s,this.tn.on('[ in.on(OrO   }); ]e pply(     quArrdenrigger jQupdate       mploverl qu1 fined"!=typeof  truen:Pb,Toun.on(OrO   }); :B}),typeof nimatoun.on(OrO   }); enu open, y.i').ick.!ori"ideD" open, s,this.tn.on('ct:"de pply(     qumploverl  ined"!=typeof out_dura,.error( 'Mrify(edefioun.on(OrO   });   $(dactinot     o ));lementstab(('ht'= $(r
y(fun
         });
            }
          }
ulstab(()stab( else

      // Listen to open and  close etion(){tooltip collapsible').collapsible()la     option ti){th,{
     mmploptio5 return false;

  var methond dropdown plugin

  $(d   "ea dropdown-butttooltip (cdl_id = $(t else if (c // Drdl_id = $(tes);  $.fn.dropd'boat      o   R      tooltip    orfn.scrollTo = functier: false,
       1}, {object);
    lts = {
        opacity: 0.5,
  de defaul: 250,
      lose")tooltip'10%'
           // Handle $(this));
 io.removeCla{tooltip se
       {tooltipOptions();

 ptions();

, "\\$1" );
};

Mate
       /ds = {
    init : function(options) {
      var defaults = {
        opacity: 0.5,
     tooltipIdginmat  placeD.guid      }
    en')ef (opgin   Velo;{      // SetDestroysoldntooltipidth = $buncttions === "close")tooltip'10%'
ity: 0.5,
  de defaultions === "close")tooltip'10%'
           // Handl
       // tions === "close")tooltip'10%, tooltipIdo;{      // SetG fa  /*
    s var currAlign   owHs);l_id = $(this)tooltip')ddel_id = $(this)tooltip activatl_id = $(this)tooltipTnitl_id = $(this)tooltipE;l_id = $(this)ty( } //    }
    en')setA /*
    sssible: true,
        star   owHs);'le       == "close")es);') ?        == "close")es);') :B}),ivat' modal);
  es);  // Handle tooltip')dde'le       == "close")   "e'ar           tooltip')dde'le(tooltip')dde'l(e.target);
nimatooltip')dde'l(e.'') ?_id = $(this)}

      /   "e motooltip')dder           tooltippwards.
          == "close") else if'ar           tooltippwards.
   (tooltippwards.
  (e.target);
nimatooltippwards.
  (e.'') ?_id = $(this)}

      /ns.alignm:atooltippwards.
r           tooltipTnit          == "close")tooltipOptions();

  tooltipTnit   (tooltipTnit  (e.target);
nimatooltipTnit  (e.'') ?_id = $(this)}

      /tooltip :atooltipTnit  // Handl
tions();

urrA /*
    sig;{      // = fu  : erTooltipE;ssible: true,
        startingtooltip counction($trigger    pla)tooltip  var $body        startion      Tnit spaw: '',
      clic  owHs);bject);
      }
tooltipTnit   unctspaw vaspaw ()ses);(tooltipTnit   // Handle aypeofect);
      }
tooltipTnit   unctspaw vaspaw ()stext"tooltipTnit   // Handle a        startion      tooltipidth = $b}
tooltip npp : ftooltipTnit ct);
      }
 npp : To( vvar $mo ct);
      }
 n);
       tooltipIdo;{      // artion      ty( } //      // arty( } // counction($triggety( } //  var $body = $('body'ty( } // npp : To(tooltip +        i     exi tooltip  // Handl
tions();

tooltipE;ssi  : erTooltipE;ig;{      // SetDestroysunbiie
 ly s.ha;
nEmit)       // tions =;
 io.removeCla{tooltip se
       {tooltipOptions();

toElementI.innerHeight;
      complete:,  optionRef;      // tions =;n/ utremoveCla{tooltip':tel header object
     arht;
 -cuTooltip collapsiblns.out_duration, urrA /*
    sig;{t_duration, u     comp     }

          tooltipE;a       //owori duration: cccccty( } //        //owori duration: ccccctooltipE;a e, e ase: "e:i'b _sk',)rWidth'0px',ght') '0px')uart"});


      n =Tooltip      vars)."});


      en')ef (opitVelocir('id')Handle edge alignment
  lass('active');

        // Handl      var lignment
  lass('tooltip');

    tooltipE;aHandl      var ignment
  lass('tooltipitVelocitooltipE;aHandle edge alignment
  lass('tooltip        M   innerWid0px'alignment
  lass('tooltipH   z
    M   innerWid0px'alignment
  lass('  $oveFcro     8alignment
  lass('  $ovYFcro     8alignment
  lass(' === fTeral === fL     newCoordin   
r lignment
  labjectooltippwards.
  (e."   "  duration: optionn =Topin.positiuration: option === fTer ates.css('width', origintooltip');

  - mmplop;uration: option === foptions.constrain_width ===aultions itVel/2 }
tooltipitVel/2;uration: optionnewCoordin   
ssi       varWin.atSs.inn( === fL      === fTeral ooltipitVel,ntooltip');

    "});


        tooltip        M   innerWid-10px'alignment
  laccty( } // al = $(this);
        Call com).removeClass('ac  rWidth).removeClass('ac  Car erRadiusrl'14px 14px 0 0al_id = $(this)))))transformOf (oprl'50%    %al_id = $(this)))))mmplopTt') tooltip');

 l_id = $(this)))))mmplopLWidth(tooltipitVel/2}

 (ty( } // wrapper/2}_id = $(this)))ates.attr('id'), function (etarget===an.positiuration: optipeof  trutooltippwards.
  (e."t();"  duration: option === fTer ates.css('width', origdown goes past/2 }
tooltips past/2;uration: option === foptionss.constrain_width ===a}
tooltipitVel - mmplop;uration: optionnewCoordin   
ssi       varWin.atSs.inn( === fL      === fTeral ooltipitVel,ntooltip');

    "});


        tooltipH   z
    M   innerWid-10px'alignment
  laccty( } // al = $(this);
        ht') '-7px',$(this);
        r    (").removeClass('ac  .attr("i14px',$(this);
        o     ("d14px',$(this);
        Car erRadiusrl'14px 0 0 14px',$(this);
        transformOf (oprl'95% 5 %al_id = $(this)))))mmplopTt') tooltip');

 /2emove();
         mmplopLWidth ooltipitVel_id = $(this)))ates.attr('id'), function (etargeptionsn.positiuration: optipeof  trutooltippwards.
  (e."croll"  duration: option === fTer ates.css('width', origdown goes past/2 }
tooltips past/2;uration: option === foptions.constrain_width ===aultions itVelaulumplop;uration: optionnewCoordin   
ssi       varWin.atSs.inn( === fL      === fTeral ooltipitVel,ntooltip');

    "});


        tooltipH   z
    M   innerWid+10px'alignment
  laccty( } // al = $(this);
        ht') '-7px',$(this);
        rWidth).removeClass('ac  .attr("i14px',$(this);
        o     ("d14px',$(this);
        Car erRadiusrl'0 14px 14px 0al_id = $(this)))))transformOf (oprl'5% 5 %al_id = $(this)))))mmplopTt') tooltip');

 /2emove();
         mmplopLWidthd0px'_id = $(this)))ates.attr('id'), function (etaction") {
         ) n =B// Dron.positiuration: option === fTer ates.css('width', orig+     // Handl      vaaulumplop;uration: option === foptions.constrain_width ===aultions itVel/2 }
tooltipitVel/2;uration: optionnewCoordin   
ssi       varWin.atSs.inn( === fL      === fTeral ooltipitVel,ntooltip');

    ration: option ooltip        M   innerWid+10px'alignment
  laccty( } // al = $(this);
        ht') ).removeClass('ac  rWidth).removeClass('ac  mmplopLWidth(tooltipitVel/2}

 (ty( } // wrapper/2}_id = $(this)))ates.attr('id'), ffunction (etargeize tooptip se u$(doc  // If origin istooltipE;a e, e ration: option op:nnewCoordin   
.y.removeClass('acrWidthnewCoordin   
.xs.attr('id'), art"});


      n =Calcuibil S $ov!orifith = $('bbbbbbb  $oveFcro     matioSQRT2 *
tooltipitVel /e  mseInt(ty( } // al =c {
   0g;{t_duration, u $ovYFcro     matioSQRT2 *
tooltipent = '/e  mseInt(ty( } // al =ce'});
 lart"});


      tooltipE;a       //{)mmplopTt') tooltip        M   inne, mmplopLWidth ooltipH   z
    M   inneae  ject.parent(50,ose');
       })) {
         )  options.c          1re           $(00,o   "ea 50,ose');
      ates.attr('id'),ty( } // al =  ase: "e:i'b _sk' })) {
         )  options.c         1re          $55,o   "ea 0,ose');
      at) {
         )  options.c   $overl  $oveFcro      $ovY: u $ovYFcro  re           $(00,o   "ea 0,ose');
          /   .slideDInownQuad'}ptions();

 e}rt"});


     optionRefo=oerr_options -cuTooltip,ntooltip')ddete;
      IeClaval{      // SetMementO|| e.relateremove();
 'se
       {tooltipOion: options") {
         Hamn.poS    ) {
             complete:tions();

 ec   r_options optionRefo;{      // artioh Show lty( { opacity: urr_options.inDuration,{
        elabjec      co!ar offsetL ration: option ooltipE;a       //{removeClass('ac              mmplopTt') 0, mmplopLWidth0ae  ject.parent225,ose');
      ates.attr('id'),ccty( } //        //{              $overl1    $ovY: 1);
 eft = origi),,,,,ect.paren225,eft = origi),,,,,

        // Close previouslll, {duration: options") {
         ) ),ccty( } // se {
ase: "e ,i'eOut duration: ccccccction ooltipE;ase {
ase: "e ,i'eOut duration: ccccccction      complete:thstart.' + activates.attr('id'), function (e),225tes.attr('i} = $('b  e   // Hons. 
      orig       varWin.atSs.inn collapsiblnx, y,  (ori,ne'});
etL rati 0;
newX co ;{
    0;
newY coy;{     bjecnewX  alignment
  newX co4ned"!=typeof  trunewX +  (orig>iive');
     itVelignment
  newX -= newX +  (orig-iive');
     itVel }

  }{     bjecnewY  alignment
  newY co4ned"!=typeof  trunewY + h  orio>tive');
        oriaul:     if (h());

  ignment
  newY -= newY + h  orio-tive');
        origin.ad}er(obj(jQuery{xthnewX, ythnewY}s. 
             });
            }
          e d. ooltippDdis. ooltipe align
      // Listen to/*!
 *
W   s v0.6.4
 *
http://fian.my.id/W   s
 *
 *
CopycrollY2014 Alfiana E. Sibuea s(e.('id')Hove*
   ers"}*Hamlea  cotarg  dle MIT datenn.dr*
https://gin.ub .yO/fians/W   s/b _b/masCla/LICENSEdr*/
to open and     if gnment
'mentse*
ct';{      0;
W   s =
W   s || {};{
    0;
$$ =
     });.q LisS.targorAlligin.h     });
;{        Fve')excro      var    lse) {
     llapsibleisW   if(objplay:"none"}   exieobj opti){th' + obj  (e.obj.    ifgin.ad}er(objllapsible= fW   if(lse)play:"none"}   exieisW   if(lse)pl? lse) : lse).node'cli  (e.9' + lse).unctionViefgin.ad}er(objllapsibleain_widlse)play:"none"}nd drOc bro,  (tl_id = $(this)box.co{ht') ). rWidth)remove();
     rOc.colse)  + lse).ow   D    });;{      // rOc bro =
   .     });Ese) {
dWidth = $bunctn:Pb,Tolse).letBourn 'mC     Reofo!ar o:Pb,Totarget);

   // Handle mobox.colse).letBourn 'mC     Reof    // Handl
        es.a.co= fW   if(   ptions();

, "\\$1ect);
      }
to') box orig+ wftPosgeYOin_wio-trOc broda= nd('eract);
      }
rWidthbox  ===aulwftPosgeXOin_wio-trOc broda= nd(LWid // Handl
gin.ad}er(objllapsibleHovv   Style(objplay:"none"}ht;
  ylerWid'dWidth = $bable(lign iibinbjplay:"none"}= $bunctobj.hasOwn       y(ae menu
             
  yler+= (a   $:faultbj[a]   $;n.hasClass('active') &&
   ffunction , "\\$1  ylegin.ad}er(objlignEffeof
  {{      // SetEffeof
   "e      // rct.parent7ropd      // s-cu:iideDropdown()se) {
 bje{
         / SetDse.eacscrollY
    
:"none"}= $buncte.;

   );

 2 menu
             
, "\\$1" );
};

Materi&
   ffunction (objlignel.colse)nnerimathi
r lignment
  lation      ripplefunction (objlignripple =
     });.c     Ese) {
{
asvn.hasClass('actiripple.$trigNamerWidw   s-ripple'alignment
  lael npp : Cslid(rippleart"});


      n =G fa);
    oordin    s(e.lse)nnerwitdhfunction (objlign   tion (obj=eain_widls alignment
  lass('atibilerYobj=ete.osgeYo-t    ori alignment
  lass('atibilerXobj=ete.osgeXo-t     === alignment
  lass('  $ovon (obj=e'  $ov('+(dlsda= nd(itVel /e100e * 10)+')'rt"});


      n =Supporndabledocum
  vates
:"none"}= $bunct'documes'iibisetL ration: optionatibilerYobj=ete.documesOffsosgeYo-t    ori alignment
  la 'atibilerXobj=ete.documesOffsosgeXo-t     === alignment
  la ffunction (etargeAttiginose"!orilse) {
     t
  la 'aipple.urrA /*
    close")eol    D   .now(0g;{t_duration, aipple.urrA /*
    close")  $ov'    $ovg;{t_duration, aipple.urrA /*
    close")x',gatibilerXg;{t_duration, aipple.urrA /*
    close")y',gatibilerYart"});


      n =ize ripple p.positiuration: optilignrippleS ylerWienu
             
tori
:gatibilerY+'px',$(this);
        top);
:gatibilerX+'px'lignment
  la rt"});


      ripple.$trigNamerWiripple.$trigNamer  $(w   s-notransse if';{t_duration, aipple.urrA /*
    cl  yle',gHovv   Style(rippleS yle0g;{t_duration, aipple.$trigNamerWiripple.$trigName   $(doc('w   s-notransse if',i' dur"});


      n =i $ov!oh  ripplefunction (objrippleS yle['-webkit-transform ]o=oetale;{t_duration, aippleS yle['-moz-transform ]o=oetale;{t_duration, aippleS yle['-ms-transform ]o=oetale;{t_duration, aippleS yle['-o-transform ]o=oetale;{t_duration, aippleS yle.transformo=oetale;{t_duration, aippleS yle.lback
 rbj=e'1'rt"});


      rippleS yle['-webkit-transse if-rct.pare ]o=oEffeof.rct.parer  $ms';{t_duration, aippleS yle['-moz-transse if-rct.pare ]orbj=eEffeof.rct.parer  $ms';{t_duration, aippleS yle['-o-transse if-rct.pare ]orbjbj=eEffeof.rct.parer  $ms';{t_duration, aippleS yle['transse if-rct.pare ]orbjbjjbj=eEffeof.rct.parer  $ms';{"});


      rippleS yle['-webkit-transse if-tim 'm-ideDropd ]o=o'cdal'-bezier(0.250,o0.460,o0.450,o0.940)';{t_duration, aippleS yle['-moz-transse if-tim 'm-ideDropd ]orbj=e'cdal'-bezier(0.250,o0.460,o0.450,o0.940)';{t_duration, aippleS yle['-o-transse if-tim 'm-ideDropd ]orbjbj=e'cdal'-bezier(0.250,o0.460,o0.450,o0.940)';{t_duration, aippleS yle['transse if-tim 'm-ideDropd ]orbjbjjbj=e'cdal'-bezier(0.250,o0.460,o0.450,o0.940)';{{t_duration, aipple.urrA /*
    cl  yle',gHovv   Style(rippleS yle0g;{t_durati}pd      // art.:tel header object
     ar  TocumHfined,.documup(eart"});


      lignel.cothi
r });


      lign (originlsda= nd(itVel * 1.4rt"});


      n =G fa    $tripplefunction (objlignripple =
){thalignment
  lass('aipplesginlsd= fEse) {
sByCtrigName(dw   s-ripple'g;{t_duration, unctaipplesr to sho>rop  belowOrig etion, aipplerWiripples[aipplesr to sho- 1]alignment
  la action") {
         )  
, "\\$1" );
};

Materi&
   ffunction (objlignatibilerXobj=eaipple.grrA /*
    close")x' alignment
  lass('atibilerYobj=eaipple.grrA /*
    close")y' alignment
  lass('  $ovon (obj=eaipple.grrA /*
    close")  $ov'art"});


      n =G fa   "e beetwinn se
   ifn s(e.se
        lignment
  lass('diffo=oD   .now(0o- Number(aipple.grrA /*
    close")eol  0g;{t_duration, nd drodde'le350o-triffr lignment
  labjecrodde' alignment
            rodde'le0alignment
  la ffunction (etargeFadefi;
 aipplerafter
   "e      //     urr_options.inDuration,{
        ela  lass('  ylerWienu
             




tori
:gatibilerY+'px',$(this);
        



top);
:gatibilerX+'px',$(this);
        



tlback
  : '0al_$(this);
        



SetDct.pare$(this);
        



t-webkit-transse if-rct.pare :eEffeof.rct.parer  $ms',$(this);
        



t-moz-transse if-rct.pare :eEffeof.rct.parer  $ms',$(this);
        



t-o-transse if-rct.pare :eEffeof.rct.parer  $ms',$(this);
        



ttransse if-rct.pare :eEffeof.rct.parer  $ms',$(this);
        



t-webkit-transform : u $ov,$(this);
        



t-moz-transform : u $ov,$(this);
        



t-ms-transform : u $ov,$(this);
        



t-o-transform : u $ov,$(this);
        



ttransform : u $ov,$(this);
         rt"});


          aipple.urrA /*
    cl  yle',gHovv   Style(s yle0g;{nu
             
 rr_options.inDuration,{
        ela  laaaaatryn,{
        ela  laaaaaaaaalsd 1}, {qslid(rippleart     ela  laaaaaaaaa} c  chr object
     ar  

          a "\\$1" );
};

Materi&
  aaaaaaaa}$(this);
         ,eEffeof.rct.pare alignment
  la ,o   "eg;{t_durati}pd      // rgetittlerhrlayto r ke <input> c n  erformow   s effeof        esrapInput:tel header se) {
sobject
     ar  able(lign ile0an i<ilse) {

  // If; a++on,{
        ela  lass('el.colse)nnes[a];{nu
             
unctelstagName toLowerCase() :B}),inputhebject
     arti ela  lass('      ginlsdositioNode  $(this);
        



SetIf input allay.veh   '      gju $tprig througl_id = $(this)))     
unct      stagName toLowerCase() :B}),i'  +       s$trigName 
    Of(dw   s-effeof r_opti-1ebject
     artiiiiiiiiiiiiiHovein   }

                  } $(this);
        



Setgut lse)nner$trig s(e.  ylertio  $bspecified       ect
     arti ela  lass('srapp   va     });.c     Ese) {
{
i duration: ccccccction 'srapp  .$trigNamerWilsda=rigNamer  $(w   s-input-srapp  ';{{t_duration,  ela  lass('lse)nneS ylerWilsd= fA /*
    cl  yle'g;{nu
             




pdat!lse)nneS yleebject
     artiiiiiiiiiiiiilse)nneS ylerWi''alignment
  lacccccccc} $(this);
        



srapp  .urrA /*
    cl  yle',glse)nneS ylee;{nu
             




lsda=rigNamerWidw   s-;

   -input'alignment
  lacccccccclsd 1}, {A /*
    cl  yle'g;{nu
             




Setgut lse)nneras .slidnu
             




      s  $(docqslid(srapp  ,glsduration: ccccccction 'srapp  .npp : Cslid(lsduration: cccccccti{
            $      com$     }eloowOri/**      *tDse.eacsse
   ifn n.att.able500ms rctTurrae') fter
docum      */     ss('TocumHfined,rWienu
      /*origg s( integefu 0)hg  dls( bool sio  $re'tino issueC elem
         * neen 'm).fih   r  options
pdaan('id')docum
n.att.ochideDd
         * win.ato  $b500ms. Cannot se
  up betwinn docum     rae'
         * documern,onble no  $b500ms) fter
documern. */         documesth).removeClac  owE.att:tel header object
     ar  lign   ow 
      }tion and     uncte.tcli  (e.'docum     hebject
     arti elaTocumHfined,.documeC += 1e;
 pusl_id = $(this)typeof  true.tcli  (e.'documern nimae.tcli  (e.'documc    lhebject
     arti ela rr_options.inDuration,{
        ela  laaaaa truTocumHfined,.documeC >rop  belowOrig etion, arti elaTocumHfined,.documeC -= 1e;
 pop) fter
500ms;

Materi&
  aaaaaaaa}$(this);
         ,e500 alignment
  la ypeof  true.tcli  (e.'se
   ifn'  + TocumHfined,.documeC >rop  belowOrig etion,    ow 
 " );
};

Materi&
   ffunction (obja "\\$1   ow;{t_durati}pdt_duratidocumup:tel header object
     ar  TocumHfined,.c  owE.att(ss  if (optio     }eloowOri/**      *tDlsegbili H;
   efined,.able.w   s-effeof lse)nne.      *t(1 + Mat){th'wler .w   s-effeof lse)nneinot  no"H;
   tree"      */     llapsible= fW   sEffeofEse) {
{ object
     unctTocumHfined,.c  owE.att(ssrAvates.css('max-height'bja "\\$1){thalignment
 ffunction ss('lse)nne =
){thalignment
ss(' === frWil. === frimae.srcEse) {
dWidth = $bCopyrig === fdositioEse) {
 opti){thplay:"none"}= $bunct!g === f  n      of SVGEse) {
 b +  === fd$trigName 
    Of(dw   s-effeof r_opti-1ebject
     artiiiiilse)nne =
 === furation: ccccccctib   kalignment
  la ypeof  tru === fd$trigLisfd$
     s(dw   s-effeof rebject
     artiiiiilse)nne =
 === furation: ccccccctib   kalignment
  la lignment
  la === frWi === fdositioEse) {
alignment
 ffunction    exieele) {
alignm}oowOri/**      *tBubbov!oh  : 'easa(e. how effeof  tr.w   s-effeof lse)(w drfourn      */     llapsible howEffeof{ object
     ss('lse)nne =
= fW   sEffeofEse) {
{ odWidth = $bunctese) {
 opti){thplay:"none"}= $bEffeof.n(e)'wn()se) {
  }tion and     unct'
  ocum     h  no    if gnment
    artiiiiilse)nneand E.attLisfenraindocumern ,eEffeof.art., es.css  if (optiartiiiiilse)nneand E.attLisfenraindocumc    lh,eEffeof.art., es.css  if (optiarti ffunction (objlse)nneand E.attLisfenrainse
  uph,eEffeof.art., es.css  if (optiartilse)nneand E.attLisfenrainse
       h,eEffeof.art., es.css  if (opti}lignm}oowOriW   s.ase: "eEffeof
  down);


    });
  }; // E /ds = {
   ds = {
 || {};{idth = $bunct'rct.pare iibin   });
  }; // E /= $bEffeof.rct.parer=

      / ct.parealignment
 ffunction //Wrap input   s;
  <i>i =."});


  Effeof.srapInput($e d.w   s-effeof re;{idth = $bunct'
  ocum     h  no    if gnment
    arti     });.ar $and E.attLisfenraindocum     h,e howEffeof, es.css  if (opti}l
    arti     });.ar $and E.attLisfenrainse
   ifn',e howEffeof, es.css  if (};{idth /**      *tAttiginW   s .fis( input lse)nner(  d,
  lse)nnerwhigindactn't      *tbubbov!se
  up/se
   ifn n.atts).      *t  IeClha;
n.fibeorigd elemedynam    lypnt =gd forms/input(optr      *tw $re!oh  rigrndactn't wan.!ao   egbili H;
   efined,.      */     W   s.attigin=tel header se) {
play:"none"}){FUTURE: autoextT   lypnd ow   s $trigeg s(e.   ow rigrsy:"none"}){n.fispecify!oh m elemeabin   });e  m m? Eg. l;

 /$trigic/;

   idth = $bunctese) {
stagName toLowerCase() :B}),inputhebject
     artiEffeof.srapInput([ese) {
]s  if (optiartilse)nne.colse)nnedositioEse) {
alignment
 ffunction unct'
  ocum     h  no    if gnment
    artilse)nneand E.attLisfenraindocum     h,e howEffeof, es.css  if (opti}l
    artilse)nneand E.attLisfenrainse
   ifn',e howEffeof, es.css  if (};{idth ive');
W   s =
W   s;{idth      });.nd E.attLisfenrainDOMCover hLt =gd',ible: true,
        stW   s.ase: "eEffeof    // H}, es.css  
})     if ;
;mat  placeD.toasf
  down);

 (messag., ase: "eL// If, $trigName,l, {duratC   ty( ,
      a=rigNamerWia=rigNamer|| "";{      0;
 
        va     });.= fEse) {
ByIdindoasf- 
       'g;{nu
  tion      toasf
 
        uncit(dactinot     o
ion unct 
        vpti){thplay:"none"}tioc     inotifisrflow
 
       y:"none"} 
        va     });.c     Ese) {
{
asvn.hasClass(' 
       .icompndoasf- 
       ';
    arti     });.ar $anpp : Cslid( 
       )alignm}oowOri/ =iztarg s(e. pp : edoasf      0;
newToasf
  c     Toasf(messag.g;{nu
  tioonlypnpp : edoasf uncmessag.d.drnot target);

ion un(messag.g{asClass(' 
       .npp : Cslid(newToasf)alignm}oowOrinewToasf.s yle.ter at'35px'alignmnewToasf.s yle.lback
 rle0 }     tioh Show ldoasf u idth Vel(newToasfe  j"   " : "0px",          1 a, b         $(00,asClass  /   .slideDownCdal'',$(this)se');
      ates     tioh  ows  optrn.fibeopa
   Copyribe 'm)pan);

ion      optoptionsase: "eL// If;      0;
 
ueClaIeClaval;
ion unct optoptio!ti){thpllay:"none 
ueClaIeClavalo=oerrIeClavalo      }
             bjecnewToasf.ositioNode vpti){thpment
    arive');
h   rIeClaval( 
ueClaIeClavalg;{      // SetI   oasf udrnot be 'm)dragged,o  c   of  ts  optsrem   Tur         bjec!newToasf.$trigLisfd$
     s(dpan)Tur rebject
     ar optoptio-= 20alignment
 ffunction unct optoptio<drop  belowOrig etioh Show ldoasf ou ect
     arVel(newToasfe  "       "     mmplopTt') '-40px'ae  ject.parent(75,eft = origi),,,  /   .slideDownExpo',$(this);
      

        // Close previousl, {duration: options") {
         ) ),n =Call fn.so   })aloc   ty( ) {
         ) ),un(t);
   , {duratC   ty( ,
xecCallbacks(ob;

Materi&
  aaaaaa, {duratC   ty( e alignment
  la) ),n =R      toasf  fter
it( opts ou ect
     arrrrrrr   /olliositioNoded 1}, {qslid(   /oll alignment
  la) {
            $ alignment
  ive');
h   rIeClaval( 
ueClaIeClavalg;{t
  la) {
      ae 20)alignm}ooer(objllapsibleH     Toasf(hs);bjec      // Setn      toasflignment
ss(' oasf
       });.c     Ese) {
{
asvn.hasClass('toasf.$trigLisfdnd indoasf duration: cuncta=rigNameobject
     ar  lign$trigeg Wia=rigName.e: i
{
 'g;{nu
          able(lignirle0,e 
ueC Wia=rige
  // If; i <e 
ueC; i++on,{
        ela  latoasf.$trigLisfdnd ia=rige
[il alignment
  laa // Handl
       / SetI   cli ofe  m meter
is HTML Ese) {
     t
   truen:Pb,ToHTMLEse) {
 xecCatypeof" ?tes);  n      of HTMLEse) {
 :tes);  +  :Pb,Toes); xecCatypeof"  + es); opti){th' + es);.node'cli  (e.1  +  :Pb,Toes);.nodeName (e"se*
ng"
ebject
     ar oasf.npp : Cslid(hs);b;{t
  la) {
      tipeof  trues);  n      of // Lisp  belowOrig etioCheck uncit(is // Listochildren
     ar oasf.npp : Cslid(hs);oll alignment
{
      tipeof  belowOrig etioInigr   s.fnit  // Handlar oasf.      TML = es);  // Handl
       / SetBve')hamm  y:"none"}lignhamm  Hfined,rWineweHamm  (toasfe  unbind(_unction
      ates.attr('ihamm  Hfined,  + 'panostel header object
     , nd drodtaXrWil.rodtaX;ect
     , nd dcrollToadeDi         80;{nu
        tionsfige  oasf
s    ) {
       bjec!toasf.$trigLisfd$
     s(dpan)Tur re,{
        elatoasf.$trigLisfdnd inpan)Tur r;ect
     ,  ffunction (oss('a      Perc('h   1-matioab( rodtaXr/dcrollToadeDi      r;ect
     , er: fa     Perc('h  ali{
        elaa      Perc('h   0;{nu
        Vel(toasfe  rWidthrodtaX,          a      Perc('h a, b         $50,ose');
          /   .slideDownQuad'}pti // Handl
pti // Handlhamm  Hfined,  + 'panern ,eel header object
     , nd drodtaXrWil.rodtaX;ect
     , nd dcrollToadeDi         80;{nu
        tioI   oasf draggedtpritdcrollToade poi  ect
     arer: matioab( rodtaXurrAcrollToadeDi      rn,{
        elaVel(toasfe  mmplopTt') '-40px'ae  ject.parent(75,eft = origi),,,,,  /   .slideDownExpo',$(this);
      ,,

        // Close previouslll, {duration: options") {
         ) ),ccun(t);
   , {duratC   ty( ,
xecCallbacks(ob  belowOrig etion, arti, {duratC   ty( e alignment
  la) ),aa}$(this);
        latoasf.ositioNoded 1}, {qslid( oasf)alignmt
  la) ),aa}$(this);
     art"});


     action") {
         toasf.$trigLisfd       npan)Tur r;ect
     , 

Setgut  oasf ty(  into" f (opal p.positiuration: optiVel(toasfe   rWidth).          1 a, b          $(00,asClassssssssss  /   .slideDownExpo',$(this);
      

        //$(this);
     art"});


      // Handl
pti // Handl   exi toasfalignm}o} to open andxed = tctiorigin.on('close', hideDropdown);


    });
  }; // End dropdown plugin

  $(d) {uWattr("(00,asClassssedg   top);
,asClasssscloeDonC;
       // Close predragg.eac:     
      a;ect
   ds = {
    init : function(options) {
      va$(this)) {
        opacject
     ss('  if ($) {
  Vel         originnu_icomp$("#"+     //== "close")crollToes re;{idth = $brgeize to'// Check fortier: false,
.) {uWattro!ti30op  belowOrig einnu_ic al =c {
   options) .) {uWattrs  if (opti}l
    artitiohdd Tocum A   ect
     ss(' dragT=== furation: cer: false,
.dragg.eac
ity: 0.5,
  dedragT=== f counction($triggedrag- === f" var $bod/== "close")s;
 nav',     //== "close")crollToes re;{: 0.5,
  devvar $mo npp : fedragT=== fs  if (opti}lction") {
       $dragT=== f couns  if (opti}l
    artier: false,
.edg  B}),op);
p  belowOrig einnu_ic al =ctransform ,i'transibilX(-   %) r;ect
     , $dragT=== f al = top);
:g0e  itiohdd Tocum A   ect
     {
      tipeof  belowOrig einnu_ic nd click hcroll-alignDdis tionsfige  nit-align) {
 to'croll$(this);
     al =ctransform ,i'transibilX(   %) r;ect
     , $dragT=== f al = tcroll
:g0e  itiohdd Tocum A   ect
     {
       / SetI  fixedts;
 nav, btTurrinnu ou ect
     er: innu_ic }
        fixed rebject
     arti("#" taddC
     itVelrrA992 menu
            innu_ic al =ctransform ,i'transibilX(0)n.hasClass('active') &&
    {
       / SetW   if = orig to'cmn.pondxl=== oet ee{
 fixedect
     er: innu_ic }
        fixed rebject
     ar$(uterWidt= orig;ollapsiblns.out_duration, ("#" taddC
     itVelrrA992 menu
            tionloeDrinnu ("# taddC(is = origd bnstra dls( 992 s(e.rigrnhas fixedts;
 navnu
            unctio'#s;
 nav-   r "e'ar to sho!(e.0);
 innuown menu
             
,     Mnnu(ivates.stop(tru('active') &&
        ction") {
         )  
tioinnu_ic  1}, {A /*cl  yle'g;{ {
         )  
innu_ic al =ctransform ,i'transibilX(0%) r;ect
     ,   )  
tioinnu_ic al =c {
   options) .) {uWattrs  if (opti('active') &&
       function (etactioner: innuOutrAvates.css") {
         ) er: false,
.edg  B}}),op);
p  belowOrig e  )  
innu_ic al =ctransform ,i'transibilX(-   %) r;ect
     ,       ction") {
         )  
innu_ic al =ctransform ,i'transibilX(   %) r;ect
     ,      


     ,      


     ,   e   // Handl
       // Seter:cloeDonC;
  , dler nd ocloeD n.att.ableall ai =.s  nos;
  s;
 Navnu
      er: false,
.cloeDonC;
   B}})offsetL ration: opinnu_ic bln"H;
  .itemH;
  ", "a:dy')d$
llapcss('-header)",ible: true,'max-height'bja     Mnnu(r;ect
     ,     // Handl
       // ss('at    Mnnun=tel header= otor NavetL ration: oppan)Tur 
 " );
};

Materi&
innuOutrA " );
};

Materi&
n =R  nabov!h());
s)."});


    evvar $mo  e, e ration: opti   rflcu:i'',$(this);
    .attr("i'ect
     ,     "});


    evv#s;
 nav-   r "e'ar       //{          a, b         $200,asClassssssssssse');
          /   .slideDownQuad'
asClassssssss, {duration: optionsn") {
         ) $(this))          // Handle     }r;ect
     , er: false,
.edg  B}}),op);
p  belowOrig e    Hamn.popls( Dror $belowOrig e  $dragT=== f al = .attr("i', r    ("'',)rWidth'0'ates.attr('id'),innu_ic        //) {
         ) {'transibilX : '-   %'},asClassssssssss ject.parent200,asClassssssssss,,

        // Close previouslll  /   .slideDownCdal'',$(this)lassssssss, {duration: optionsn") {
         )   , er: = otor Nav B}})offsetL ration: opowOrig e    Hamntor  Fixedts;
 navnu
            'id'),innu_ic  1}, {A /*cl  yle'g;{ {
         )  
d'),innu_ic al =c {
   options) .) {uWattrs  if (opti('actiiiii}$(this);
         


     ,      r;ect
     ,  fct
     , ction") {
           Hamn.popls( Dror $belowOrig e  $dragT=== f al = .attr("i', r    ("'0',)rWidth''ates.attr('id'),innu_ic        //) {
         ) {'transibilX : '   %'},asClassssssssss ject.parent200,asClassssssssss,,

        // Close previouslll  /   .slideDownCdal'',$(this)lassssssss, {duration: optionsn") {
         )   , er: = otor Nav B}})offsetL ration: opowOrig e    Hamntor  Fixedts;
 navnu
            'id'),innu_ic  1}, {A /*cl  yle'g;{ {
         )  
d'),innu_ic al =c {
   options) .) {uWattrs  if (opti('actiiiii}$(this);
         
his);
         r;ect
     ,  fct
     }eloo      // SetTocum E.att      // ss('pan)Tur 
 " );
};

MaterioriginnuOutrA " );
};ration: cer: false,
.dragg.eac
ity: 0.5,
  dedragT=== f  + ' tigin,ible: true,'max-height'bjer: innuOutetL ration: optionat    Mnnu(r;ect
     , tive') &&
    {   "});


    edragT=== f hamm   e ration: optiunbind(_unction
      e') &&
    { igin.h'panostel header objemax-height'bjer: e.grstur,a.iinter'cli  (j"  cum"objemax-height'bjlass('direcparer=
e.grstur,adirecpare  if (opti('actiss('xr=
e.grstur,acveCla{x  if (opti('actiss('yr=
e.grstur,acveCla{y  if (opti('actiss('       /Xr=
e.grstur,a       /X;{nu
            SetDse.eacsS());
s)."});


    actiss('$ar $ councar $mo  if (opti('actiss('$   r "e counc#s;
 nav-   r "e'a  if (opti('actiss('olditVeloci$ar $
     itVele alignment
  la) $ar $
al =c   rflcu ,i'hid
 n'a  if (opti('acti$ar $
wrappeolditVelg;{nu
            SetI     r "e dactinot     o,oc     ion  s(e.uncit(is  tigied,ocloeDrinnunu
            uncti   r "er to sho= drop  belowOrig e('acti$   r "e counction(id="s;
 nav-   r "e  var $body = $('body'('acti$   r "e
al =c back
   gut. tigi(on: options") {
         ) ),ccat    Mnnu(r;ect
     , tiiiiiates.attr('id'),cc devvar $mo npp : fe   r "er;ect
     ,      


     ,       SetKeep win.atobournaries;

Materi&
  aaer: false,
.edg  B}}),op);
p  belowOrig e  )  
er: xrrAtions) .) {uWattrss jxr=

      /) {uWattr;i}$(this);
        ctioner:    align   le0   
his);
         


     ,       er: false,
.edg  B}}),op);
p  belowOrig e  )  
rget===aDirecparebelowOrig e  )  
er: xr<: false,
.) {uWattro/ 2rebjginnuOutrA " );
}i}$(this);
        rgeptionsDirecparebelowOrig e  )  
ctioner:   >=: false,
.) {uWattro/ 2rebjginnuOutrA      i}$(this);
        innu_ic al =ctransform ,i'transibilX(faul(  -itions) .) {uWattrss+ 'px) r;ect
     ,      
owOrig e  )  
ction belowOrig e  )  
rget===aDirecparebelowOrig e  )  
er: xr<:  taddC
     itVelr-itions) .) {uWattro/ 2rebj) {
         ) ),ccinnuOutrA      $(this);
         
his);
          rgeptionsDirecparebelowOrig e  )  
ctioner:   >=:  taddC
     itVelr-itions) .) {uWattro/ 2rebj) {
         ) ),cinnuOutrA " );
};

Materi&
      
his);
          ss('aiionPosj=et  -itions) .) {uWattro/ 2r $(this);
        unctaiionPosj alignment
             'aiionPosj=e0 $(this);
         
$(this);
        innu_ic al =ctransform ,i'transibilX(faulaiionPosj+ 'px) r;ect
     ,      



     ,       SetPerc('hag.d   r "e if (opti('actiss('o  r "ePerc;ect
     ,     er: false,
.edg  B}}),op);
p  belowOrig e  )  
o  r "ePerc co o/ 
      /) {uWattr; = $('body'('acti$   r "e
       //{         o  r "ePerc a, b         $10,ose');
          /   .slideDownQuad'}ptions();

 e     
ons();

 e    ction belowOrig e  )  
o  r "ePerc comatioab( t  -iive');
     itVelig/ 
      /) {uWattrdy = $('body'('acti$   r "e
       //{         o  r "ePerc a, b         $10,ose');
          /   .slideDownQuad'}ptions();

 e     
ons();

 e   


     ,   e igin.h'panern ,eel header objemax-height'bjer: e.grstur,a.iinter'cli  (j"  cum"objeons();

 e    ss('$   r "e counction(id="s;
 nav-   r "e  var $body = $('body'('acss('       /Xr=
e.grstur,a       /X;{= $('body'('acss('xr=
e.grstur,acveCla{x  if (opti('actiss('l) - ac co o-itions) .) {uWattr  if (opti('actiss('aiionPosj=e  -itions) .) {uWattro/ 2;ect
     ,     er: l) - ac > 0 p  belowOrig e  )  
l) - ac co0 $(this);
       
ons();

 e    unctaiionPosj alignment
            aiionPosj=e0 $(this);
       
ons();

 e    pan)Tur 
 " );
};

     ,       er: false,
.edg  B}}),op);
p  belowOrig e  )  
rgeI         /Xr<dro.3 dler oh  rigrnis f
s). 'm).hDrinnu cloeDd sioignor  innuOut$(this);
        unct innuOutr&&        /Xr<dro.3)r||        /Xr< -0.5ignment
             '  Hamthis.tnnu to" p :) {
         )   , er: l) - ac ! drop  belowOrig e('actiiiiiinnu_ic        //{'transibilX : [). rWid ac]re           $(00,ose');
          /   .slideDownQuad'}ptions();

 e         
ions();

 e        $   r "e
       //{         1 a, b         $50,ose');
          /   .slideDownQuad'}ptions();

 e        $dragT=== f al = .attr("i5 %al r    (").)rWidth''ates.attr('id'),tiiiiiinnuOutrA      $(this);
         
his);
          ctioner: !innuOutr||        /Xr>ro.3)rnment
             '  HEn.eacsS());
s)."});


    acti    $vvar $mo  e, e ration: optiiiiiiiii   rflcu:i'',$(this);
            .attr("i'ect
     ,          tes.attr('id'),tiiiiirgeil;
  innu cloeDds.attr('id'),tiiiiiinnu_ic        //{'transibilX : [-1 *itions) .) {uWattro-$10,orWid ac]re           $200,ose');
          /   .slideDownQuad'}ptions();

 e        $   r "e
       //{         0 re           $200,ose');
          /   .slideDownQuad',$(this);
            , {duration: optio ion,{
        ela  laaaaa) $(this))          // Handle            }ptions();

 e        $dragT=== f al = .attr("i10px',gr    ("'',)rWidth0}ptions();

 e       
his);
         
his);
        ction belowOrig e  )  
unct innuOutr&&        /Xr>=:-o.3)r||        /Xr>ro.5ignment
             '  Hamthis.tnnu to" p :) {
         )   , er: aiionPosj! drop  belowOrig e('actiiiiiinnu_ic        //{'transibilX : [). aiionPos]re           $(00,ose');
          /   .slideDownQuad'}ptions();

 e         
ions();

 e        $   r "e
       //{         1 a, b         $50,ose');
          /   .slideDownQuad'}ptions();

 e        $dragT=== f al = .attr("i5 %al r    ("'',)rWidth0}ptions();

 e      iiinnuOutrA      $(this);
         
his);
          ctioner: !innuOutr||        /Xr<:-o.3)rnment
             '  HEn.eacsS());
s)."});


    acti    $vvar $mo  e, e ration: optiiiiiiiii   rflcu:i'',$(this);
            .attr("i'ect
     ,          tess.attr('id'),tiiiiirgeil;
  innu cloeDds.attr('id'),tiiiiiinnu_ic        //{'transibilX : [tions) .) {uWattro+$10,oaiionPos]re           $200,ose');
          /   .slideDownQuad'}ptions();

 e        $   r "e
       //{         0 re           $200,ose');
          /   .slideDownQuad',$(this);
            , {duration: optio ion,{
        ela  laaaaa) $(this))          // Handle            }ptio    ela  laaaaa) $dragT=== f al = .attr("i10px',gr    (").)rWidth''ates.attr('id'),tiii 
his);
         


     ,     ve') &&
    {            


     ,     // tigi(n: optionsn") {
       er: innuOutrAvatoffsetL ration: opowinnuOutrA " );
};

Materi&
  pan)Tur 
 " );
};

Materi&
bja     Mnnu(r;ect
     ,  ect
     , ction b;

Materi&
bjSetDse.eacsS());
s)."});


    acss('$ar $ councar $mo  if (opti('acss('$   r "e counction(id="s;
 nav-   r "e  var $body = $('body'('ss('olditVeloci$ar $
     itVele alignment
  la$ar $
al =c   rflcu ,i'hid
 n'a  if (opti('ac$ar $
wrappeolditVelg;{nu
          Setgush hideDnf draga === froi top ofeDOM tree if (opti('ac$vvar $mo npp : fedragT=== fs  max-height'bjer: false,
.edg  B}}),op);
p  belowOrig e  ) $dragT=== f al = .attr("i5 %al r    (").)rWidth''ates.attr('id'),tiinnu_ic        //{'transibilX : [). -1 *itions) .) {uWattr]re           $(00,ose');
          /   .slideDownQuad'}ptions();

 e   function (etaction") {
         ) $dragT=== f al = .attr("i5 %al r    ("'',)rWidth0}ptions();

 e    innu_ic        //{'transibilX : [). tions) .) {uWattr]re           $(00,ose');
          /   .slideDownQuad'}ptions();

 e   f if (opti('ac$   r "e
al =c back
   gut if (opti('ac/ tigi(n: options") {
         ) innuOutrA " );
};

Materi&
    pan)Tur 
 " );
};

Materi&
bjccat    Mnnu(r;ect
     , tiii$   r "e
       //{         0re           $(00,ose');
          /   .slideDownQuad',$(this)lassssssss, {duration: optionsn") {
         )   , $(this))          // Handle       }  tess.attr('id'),}ptions();

 e  evvar $mo npp : fe   r "er;ect
     ,   $   r "e
       //{         1re           $(00,ose');
          /   .slideDownQuad',$(this)lassssss, {duration: optio ion,{
        ela  lainnuOutrA      $(this);
        pan)Tur 
 " );
};

Materi&
bjcc{
            $ alignment
   f if (opti('a "\\$1" );
};

Materi$ alignmen tesslignm},asCladestroyion: optio ion,{
     ss('$   r "e counc#s;
 nav-   r "e'a  if (opss(' dragT=== f counc.drag- === f[ose")s;
 nav="'aul: this))== "close")crollToes rj+ '"]'a  if (op$   r "e
trnstra ' tigina  if (op$dragT=== f           // Han: this))off ' tigina  if (op$   r "e
          // H},asCla how ion: optionsn") {
      //trnstra ' tigina  if (},asClaart. ion: optionsn") {
   evv#s;
 nav-   r "e'artrnstra ' tigina  if (}
  }eloowOri$.fn.s;
 Navn=tel headerin.on(OrO   });
  }; // E truein.on('[in.on(OrO   });] p  belowOrigrmthis.tn.on('[ in.on(OrO   }); ] npply(    /, Arr"e
protot);
.sdate.c   ( ===  });/, 1 re;{: 0.5, ypeof  tru  :Pb,Toin.on(OrO   }); B}}),ochild nima!oin.on(OrO   }); play:"none"}tioDnction to""ideD"belowOrigrmthis.tn.on('.ideD npply(    /, ===  });/ e;{: 0.5, ypeof ay:"none"}$.error( 'Mn.on( 'auloin.on(OrO   });   $(dactinot     oroi // Lis.s;
 Nav' e;{: 0.5,  if (} itioPlugibisnd    // Listen to/**dr*
Eit :  jq Lis elemea!h());
spy plugib.dr*
Tif (w  ch s .he# taddC(h());
 s(e.fir s e.atts'wler lse)nnes ==v!h());
ed into"viewporn.
 *
 *
throttlensns(e.grr_optnsntaker from Uarg score.jsdr*
https://gin.ub .yO/jashkeras/uarg score
 *
 *
@au.onr
CopycrollY2013 John Smart
 *
@datenn.
https://raw.gin.ub .yO/.hesmart/jq Lis-h());
spy/masCla/LICENSEdr* @see
https://gin.ub .yO/.hesmartdr* @  rstio 0.1.2dr*/
(n: optiond = tc	ss('jW   if =r$(uterWid;c	ss('lse)nnes = [];c	ss('lse)nnesInVief = [];c	ss('isSpyTur 
 " );
};	     ocksj=e0 $	    uniq L_icomp1 $	    ain_wiplugi		top th).r		crollYth).r		b// Droth).r		 ===ath).r	 f 	/**d	r* Fve')ese)nnes that ==v!win.ato  $bbournaryd	r* @  m m {number} topd	r* @  m m {number} croll$	r* @  m m {number} b// Dr$	r* @  m m {number}  ===$	r* @, "\\$1e// Lis}		A $
llepsibleai)ese)nnes$	r*/
	n: optio fve'Ese) {
s(teralcroll, b// Dr,)rWid)ugi		lignhits couns  		$) {
  ese)nnes,eel headerin()se) {
 bje			unctese) {
sh     vaa>rop  b				ss('lsTer atese) {
s'width', ori,b					eloptionsese) {
s'width', rWid,b					elptionsnsesL===aulese) {
swrapper,b					elB// Dro='lsTer ulese) {
sh     vaelo				ss('isIeClaseof
  !(esL===a>scrollY||b					elptions<)rWidY||b					elTer > b// DrY||b					elB// Dro< ori alb				unctisIeClaseofp  b					hits.puslr se) {
p;b				}
			}
		} alb		, "\\$1hits;r	 f  	/**d	r* C   gd eler oh  rigrnh());
s .he# taddC$	r*/
	n: optio onS());
(h());
Oin_wip  b		tiouniq L  ock(idb		++ ocksalb		tioviewporn recpanglei		lignter atjW   if(h());

  er,b			lptionsjW   if(h());
L===er,b			rtionsns ===auljW   if(wrapper,b			b// Dro='orig+ jW   if(h     vaelo		tiodeterminerwhiginlse)nnes ==v!atoviewi		lignieClaseof= {
   fve'Ese) {
s(ter+'width orig+ h());
Oin_winima200,ortion+'width croll, b// Dr+'width b// Dr,)rWid+'width  === al		$) {
  ieClaseof= {
,eel headerin()se) {
 bje
			ss('lasCT
   Blese) {
sose"('h());
Spy: ocks'p;b			unctn:Pb,TolasCT
   !}),number'p  b				tioveClaed into"view
				ele) {
strnstraHfined,('h());
Spy:veCla'p;b			}e
			tioupd    tock(idb			ese) {
sose"('h());
Spy: ocks',  ocksp;b		}aelo		tiodeterminerwhiginlse)nnes ==v!no lontra atoviewi		$) {
  ese)nnesInVief,eel headerin()se) {
 bje			ss('lasCT
   Blese) {
sose"('h());
Spy: ocks'p;b			unctn:Pb,TolasCT
   =}),number'r&& lasCT
   !}=  ocksp  b				tiovxiili from view
				ele) {
strnstraHfined,('h());
Spy:vxii'p;b				ese) {
sose"('h());
Spy: ocks', ){thp;
			}
		} alb		tio   embernlse)nnes atoview.ablenext  ock
		ese) {
sInVief = ieClaseof= {
;r	 f 	/**d	r* C   gd eler  taddC(is = origd
	*/
	n: optio onW  Srig;p  b		jW   if(trnstra 'h());
Spy:w  Srig'p;b	 f 	/**d	r* G fa optsatoms;

M*
@datenn.
https://raw.gin.ub .yO/jashkeras/uarg score/masCla/LICENSEd	r* @ cli {n: optio}$	r* @, "\\$1enumber}$	r*/
	ss('grr_optj=etD   .nowniman: optio ion,{		, "\\$1neweD   ', grr_optns;b	  alb	/**d	r* R1 + Mataan: optio, that, eler invoied,owi;
 onlypb  trnstragd at se oroiced	r* rctTurra giver  taddC(,To opt. Norm  ly, dle
throttledan: optio wi;
 rund	r* as mcum as it c n,!win.i;
 e.a('goTurriore!ohabin    p   `wait`  ct.pareal	 *tbuf uncyou'd likg to'dse.eacsdle
execuptio onsdle
lean 'm)edg ,tprigl	 *t`{lean 'm
      a`. To'dse.eacsexecuptio onsdle
trail 'm)edg ,tdi/ D.$	r* @datenn.
https://raw.gin.ub .yO/jashkeras/uarg score/masCla/LICENSEd	r* @  m m {n: optio}an: o$	r* @  m m {number} wait$	r* @  m m {Ochild=} tions) $	r* @, "\\$s {F: optio}$	r*/
	n: optio throttlenn: o, wait,in   });
  }		ss('$
  ext, ===s,gatsion;i		ligntoption =
){thal		lignunbiiousj=e0 $		ds = {
 ||  false,
plug})al		lignibilr
  down);

 (p  b			unbiiousj=etions) .lean 'm)Avates.cs ? 0athgrr_optns;b			toption =
){thal			atsion
  down npply($
  ext, ===ss;b			$
  ext
  ===s =
){thal		};{		, "\\$1down);

 (p  b			 0;
nif =rgrr_optns;b			er: !unbiiousj + oions) .lean 'm)Avates.cs)nunbiiousj=enow;{			 0;
rem   Turj=ewait - (nif -nunbiiouss;b			$
  ext
  thi
r 			===s =
===  });/;b			er: rem   Turj<drop  b				h   r_optionstoptionp;b				toption =
){thal				unbiiousj=enow;{				atsion
  down npply($
  ext, ===ss;b				$
  ext
  ===s =
){thal			 ypeof  tru!toption  + oions) .trail 'm)!vates.css('m				toption =
 rr_optionsibilr,
rem   Turp;
			}
			, "\\$1atsion;i		};{	}alb	/**d	r* En.eacssS());
Spy riTurra s.targor$	r* @  m m {// Lis|se*
ng} s.targor  Tle
ese)nnes $
llepsibloptrra s.targor$	r* @  m m {Ochild=} tions) 	O   })al.y:"none"}throttleathnumber ->!h());
spy throttl
ng.oDnction $100 ms;

Materi'widthTop thnumber ->!ain_wipfrom ori.oDnction $0;

Materi'widthRrollYthnumber ->!ain_wipfrom croll.oDnction $0;

Materi'widthB// Drothnumber ->!ain_wipfrom b// Dr.oDnction $0;

Materi'widthL===athnumber ->!ain_wipfrom  ===.oDnction $0;	r* @, "\\$s {// Lis}$	r*/
	$.h());
Spyn=tel headers.targor,in   });
  }	 End dropdown plugi			throttle $100,b			h());
Oin_wi $200 tiooin_wio-t200 a  ows ese)nnes n  r b// Droofe  ge  o!h());
 if (}  if (ds = {
    init : function(options) {
  		 0;
vicss(' = [];c		s.targor couns.targor);c		s.targor) {
        opain()se) {
 bje			lse) {

 puslr$r se) {
pp;
			$r se) {
psose"("h());
Spy:id", ip;
			rgeimooth(h());
  o!hecpareb		  evva[href="#'aul:  se) {
ps== "clid rj+ '"]'a/ tigi(n: optionss('m		if (e.unbind(Dnctionns;b		 (opss('ain_wiplu$(mat  placeD.escapeHash this }
 h))s'width', orio+$1al	    	$r'es);, b/ $mo n Show ({ h());

  :ooin_wio-toions) .h());
Oin_winre           $400,ose');
          /   .slideDownCdal''}s;b		 (}p;b		}aelo		'width orig=etions) .'widthTop || 0 $		dwidth crollg=etions) .'widthRrollY|| 0 $		dwidth b// Dro='tions) .'widthB// DrY|| 0 $		dwidth lptionstions) .'widthLWidY|| 0;{n		lignthrottledS());

  throttlenn: optionsn")			onS());
(oions) .h());
Oin_wip;b		}. tions) .throttlea|| 100 al		 0;
readyS());

  n: options")			$r     });))  ady(throttledS());
);i		};{
		er: !isSpyTursn")			jW   if( + 'h());
',gatadyS());
p;
			jW   if( + '= orig',gatadyS());
p;
			isSpyTur 
      $		}e
		rge erformoa!h(abin   ,  fter
hideDnf execuptio $
  ext, =e') fter
dDrYis = adyc		s.r_optionsatadyS());
 guteloo		s.targor) + 'h());
Spy:veCla',ible: true,
  			 icss(' = $.grep( icss(',ible: truevalfsetL 	owOrigrmthis.valfssh     vaa!=e0 $	if (} alb			ss('  if ($) {
  Vel b			er:  icss('oll ('m				evva[href="#'aul icss('olls== "clid rj+ '"]'a/ 1}, {q      crolle'p;b				unctithis ose"('h());
Spy:id rj<l icss('ollsose"('h());
Spy:id rp  b					 icss('.unshift( {
  Vep;b				}
				peof ay					 icss('.puslr$r
  Vep;b				}
			}
			peof ay				 icss('.puslr$r
  Vep;b			 f  			evva[href="#'aul icss('olls== "clid rj+ '"]'a/nd click hcrolle'p;b		});c		s.targor) + 'h());
Spy:vxii',ible: true,
  			 icss(' = $.grep( icss(',ible: truevalfsetL 	owOrigrmthis.valfssh     vaa!=e0 $	if (} alb			er:  icss('oll ('m				evva[href="#'aul icss('olls== "clid rj+ '"]'a/ 1}, {q      crolle'p;b				ss('  if ($) {
  Vel 				 icss(' = $.grep( icss(',ible: truevalfsetL 	owOrigigrmthis.valfss== "clid rj!=e    //== "clid r; 	owOrig}r; 	owOriger:  icss('oll ('etioCheck uncemptyy					evva[href="#'aul icss('olls== "clid rj+ '"]'a/nd click hcrolle'p;b	: 0.5,  			}
		} alb		, "\\$1s.targor;{	}alb	/**d	r* Lisfen.ablew   if = orig e.atts$	r* @  m m {Ochild=} tions) 						O   })al.eize { throttle $number }).fihsfige  hrottl
ng.oDnction $100 ms;	r* @, "\\$s {// Lis}		evuterWid$	r*/
	$.w  SrigSpyn=tel headern   });
  }		$.w  SrigSpyn=tel header ('e, "\\$1jW   if;(} itiolock from mioniplerc   s$		ds = {
   ds = {
 || {i			throttle $100l		};{		, "\\$1jW   if( + '= orig',gthrottlenonW  Srig. tions) .throttlea|| 100 );{	}alb	/**d	r* En.eacssS());
Spy io a $
llepsibleai)ese)nnes$	r*
e.g.ounc.h());
Spy'a/h());
Spy()$	r* @  m m {Ochild=} tions) 	O   })al.y											throttleathnumber ->!h());
spy throttl
ng.oDnction $100 ms;											'widthTop thnumber ->!ain_wipfrom ori.oDnction $0;											'widthRrollYthnumber ->!ain_wipfrom croll.oDnction $0;											'widthB// Drothnumber ->!ain_wipfrom b// Dr.oDnction $0;											'widthL===athnumber ->!ain_wipfrom  ===.oDnction $0;	r* @, "\\$s {// Lis}$	r*/
	$.fn.s());
Spyn=tel headern   });
  }		, "\\$1$.h());
Spyr$r
  Veoptions) {
 	}alb})(// Lisp to open andxed = t  ev     });))  ady(ble: true,
  
ne"}tioF: optio tooupd    labpeo(,To ext
fields;

Mamat  placeD.upd   TextFieldsn=tel header (' if (opss('input_s.targor co,input[ cli= ext], input[ cli=prigword], input[ cli=em  l], input[ cli=url], input[ cli=tel], input[ cli=number], input[ cli=s  rch],  exta  a'  // Han: input_s.targor)) {
        opa
    n()se) {
 bjeowOrigigunctio se) {
psval(ar to sho> 0 imaese)nneanutof   
 ||: this))== "cl$(doceol er'p !vattarget);
 imaio se) {
pollsvalidity.badInputrAvatoffsetL ration: op: this))css(
ngk hlabpe'a/nd click hcrolle'p;btion: op{
      tipeof  belowOrig e: this))css(
ngk hlabpe'a/ 1}, {q      crolle'p;btion: op{
      $ alignm};{idth // Text based input(
 (opss('input_s.targor co,input[ cli= ext], input[ cli=prigword], input[ cli=em  l], input[ cli=url], input[ cli=tel], input[ cli=number], input[ cli=s  rch],  exta  a'  idth // hdd crolleguncformoau.fih {duratowOri$v     });)) + ' sfige','input_s.targor,on: optio ion,{
     ifr$r
  Vesval(ar to sho!(e.0)imaiothis))== "cl$(doceol er'p !vattarget);
etL ration: : this))css(
ngk hlabpe'a/nd click hcrolle'p;btion: } if (opsslid   _fieldr$r
  Vep;bif (} albdth // hdd crolleguncinput lse)nnerhas binn pre-populbili io      }); = adycwOri$v     });))  ady(ble: true,
  if (opmat  placeD.upd   TextFields(p;bif (} albdth //  TML DOM FORM RESET efines)."});
$v     });)) + 'cmn.p ,eel header object
   ss('formamn.po$) {l. === fp;btion: unctformamn.p.i   form rebj) {
     formamn.p.fve' input_s.targor)) 1}, {q      sslid'a/ 1}, {q      insslid'a;) {
     formamn.p.fve' input_s.targor)) {
        op ion,{
        eunctiothis))== "clvalfs') :B}),
p  belowOrig e  : this))css(
ngk hlabpe'a/ 1}, {q      crolle'p;btion: op    // Handl
pti // Handl  Hamn.pos.targ) {
     formamn.p.fve' 's.targ.ideDplaceDd'a/ {
        op ion,{
        e 0;
ren.p_ ext
  formamn.p.fve' 'tions)[s.targed]'a/ ext    // Handle formamn.p.css(
ngk hinput.s.targ-drop ifn'esval(ren.p_ extp;btion: op{e;{: 0.5,  if (} albdth // hdd crollegwler lse)nnenhas f   
"});
$v     });)) + 'f   
','input_s.targor,on: optio ion,{
     : this))css(
ngk hlabpe, .unbfix'a/nd click hcrolle'p;btion} albdth $v     });)) + 'blur','input_s.targor,on: optio ion,{
     ss(' inputEse) {
 x) {
  Vel       ss('s.targor co".unbfix"ti // HanunctiinputEse) {
sval(ar to sho=(e.0);
 iinputEse) {
ollsvalidity.badInputr!vatoffs);
 iinputEse) {
)== "cl$(doceol er'p =vattarget);
etL ration: s.targor +co", labpe";{: 0.5,  {
     :inputEse) {
)css(
ngk s.targor)) 1}, {q      crolle'p;b if (opsslid   _fieldr$inputEse) {
p;btion} albdth ive');
sslid   _fieldn=tel headernchildon,{
     ss('hasLto sho=tochild)== "cl to sh'p !vattarget);
l       ss(' toA /*o=t  mseInt(ochild)== "cl to sh'p)l       ss(' too=tochild)val(ar to shti // Hanunctochild)val(ar to sho=(e.0);
 ochildollsvalidity.badInputrAvates.css('max-heighunctochild)}
        sslid    rebject
     arochild) 1}, {q      sslid'a;ect
     arochild) 1}, {q      insslid'a;) {
     }

     }

     peof  belowOrigunctochild)}
        sslid    rebject
     artioCheck able sfrcroe;
 
ueCla == "ibutes;

Materi&
unct ochild)i   :sslid'a' + easLto sho + ( too<=' toA /*)) ||  fchild)i   :sslid'a' + !easLto shrebj) {
         ochild) 1}, {q      insslid'a;) {
         ochild)nd click hsslid'a;) {
        fct
     , ction") {
         ochild) 1}, {q      sslid'a;ect
     ar  ochild)nd click hinsslid'a;) {
       a // Handl
       o     }elo  artioRadio =e')Checkbox f   
($trig
 (opss('radio_checkbox co,input[ cli=radio], input[ cli=checkbox]'  // H$v     });)) + 'keyup.radio',gaadio_checkbox,eel header object
   // TAB, check unctabb 'm).ogaadio ble seckbox. // Hanuncte.whiginAvat9etL ration: : this))nd click htabbed'a;) {
     ss('  if ($) {
  Vel             //one 'blur','el header objemax-height'$(this))      click htabbed'a;) {
     $ alignment
, "\\$;{: 0.5,  if (} albdth // Texta  a Au.fiR orig
 (opss('hid
 nDiv counc.hid
 nasvn..fvrst    // Her: !hid
 nDivr to shetL rationhid
 nDiv counction($triggehid
 nasvih {mon  var $body = $('bevvar $mo npp : fhid
 nDiva  if (}
  t
ss(' ext_a  a_s.targor co,.mat  placeD- exta  a'  idth n: optio texta  aAu.fR orig($texta  aobject
   // ize fo{
 propertieo(,Tohid
 nDivb if (opssr fo{
Famile coutexta  a
al =cfo{
-famile'a  if (opss('fo{
Srig coutexta  a
al =cfo{
-srig'p;bif (opss('(
neHerollg=eutexta  a
al =c(
ne-h     'p;b if (opunctfo{
Srig ('ehid
 nDivral =cfo{
-srig','fo{
Srig) i}$(this)unctfo{
Famile ('ehid
 nDivral =cfo{
-famile', fo{
Famile) i}$(this)unct(
neHeroll ('ehid
 nDivral =c(
ne-h     ','(
neHeroll) i}$ // Hanunctitexta  a
== "clsrap'p =vat"off"objeons();

hid
 nDivral =c   rflcu-srap', "norm  ob;

Materi&
  aaaaa al =c hite-spdoc', "unb"e;{: 0.5,   rationhid
 nDiv/ ext itexta  a
val(aj+ '\n'p;bif (opss('cover hg=ehid
 nDiv/es);())  $(doc(/\n/g, '<brbody = $('bhid
 nDiv/es);(cover htesslignm/ SetWler oexta  a f (hid
 n, .attr gacticrazy.lignm/ SetApproxShow lelemehalf(,To taddC(hrig
 // Hanunctitexta  a
i   :sicss(' rebject
     hid
 nDivral =c {
   opitexta  a
wrapperp;btion: } if (opction") {
     hid
 nDivral =c {
   opi(uterWidtwrapper/2e;{: 0.5,   rationutexta  a
al =ch     ','hid
 nDiv/e     vaa  if (}
 // H$v ext_a  a_s.targora/ {
        op ion,{
     ss('  exta  a $) {
  Vel       unctitexta  a
val(ar to shebject
     texta  aAu.fR orig($texta  ao;{: 0.5,  if (} albdth evvar $mo  + 'keyup key ifn au.f= orig',gtext_a  a_s.targor,on: optio ion,{
     texta  aAu.fR orig($r
  Vep;bif (} albdth // FpyriInputrPaCheck f$v     });)) + ' sfige',''.fvle-fieldninput[ cli="fvle"]',on: optio ion,{
     ss('fvle_fieldn=t$(this))cloeDst '.fvle-field'p;bif (opss('paCh_input ='fvle_field.fve' 'input.fvle-paCh'a  if (opss('fiacsssssss=t$(this)ollsfiacs  if (opss('fiac_names = [];cif (opable(lignirle0; i <efiacs  // If; i++on,{
       fiac_names.puslrfiacs[i].namep;btion: } if (oppaCh_input
val(fiac_names.join(", "rp;btion: paCh_input
trnstra ' sfige'p;bif (} albdth /****************bdth * oRaige Inputr *bdth ****************/{      0;
raige_ cli co,input[ cli=raige]'  // H 0;
raige_se
   ifn 
 " );
};

Mass('l) -albdth evraige_ clia/ {
        op ion,{
     ss('thumb counctspdn($triggethumb  vspdn($triggevalfs  vaspdn vaspdn ody = $('bevthis))nfter(thumbp;bif (} albdth  0;
raige_srapper co,.raige-field'  // H$v     });)) + ' sfige','raige_ cli,eel header object
   ss('thumb counthis))css(
ngk h.thumbody = $('bthumb.fve' '.valfs')/es);($r
  Vesval(ap;btion} albdth $v     });)) + 'input se
   ifn docum     h,eraige_ cli,eel header object
   ss('thumb counthis))css(
ngk h.thumbody = $('bss('wtVeloci$ this))oute itVele allignm/ SetI   humb ve'isrfor(dactinot     oryeo,oc     iig) {
   unctnhumb. to sho<drop  belowOrigthumb counctspdn($triggethumb  vspdn($triggevalfs  vaspdn vaspdn ody = $('b'bevthis))nfter(thumbp;bif (5,   ration// ize ve'isrfor(valfs = $('bthumb.fve' '.valfs')/es);($r
  Vesval(ap;b = $('braige_se
   ifn 
      $(this): this))nd click hcrolle'p;b if (op tru!thumb.}
        crolle'pp  belowOrigthumb
       //{ e     : "30px", .attr(""30px", t  :o"-20px", mmplopLWidth"-15px"a, b          $(00,s  /   .slideDownExpo'p{e;{: 0.5,   // Hanuncte. cli !vat'input's('max-heighunte.  geX =vattarget);
 imae.  geX =vat){thp{//mobiac;

Materi&
 lptionse. f (opalE.att.docume/olliosgeX -n: this))offdth', rWid;btion: op{
      tipeof'etiodesktopd

Materi&
 lptionse.osgeX -n: this))offdth', rWid;btion: op{
      tier: l) -j alignment
      lptions0;btion: op{
      tipeofier: l) -j> .attrignment
      lptionswattr  if (opti}belowOrigthumb
nd click hcrolle'pral =c(p);
,  === al: 0.5,   // Hanthumb.fve' '.valfs')/es);($r
  Vesval(ap;btion} albdth $v     });)) + 'se
  up documern ,eraige_srapper,tel header (' if (opraige_se
   ifn 
 " );
};

Mat'$(this))      click hcrolle'p;btion} albdth $v     });)) + 'se
       tocum     ,eraige_srapper,tel header object
   ss('thumb counthis))cslidren h.thumbody = $('bss('rWid;btion: er: raige_se
   ifns('max-heighunct!thumb.}
        crolle'pp  belowOrigigthumb
       //{ e     : '30px',g.attr("i30px',gtt') '-20px',gmmplopLWidth'-15px'ae  ject.parent(00,s  /   .slideDownExpo'p{e;{: 0.5,op{
      tier: e.  geX =vattarget);
 imae.  geX =vat){thp('etimobiac;

Materi&
lptionse. f (opalE.att.docume/olliosgeX -n: this))offdth', rWid;btion: op{
      tipeof'etiodesktopd

Materi&
lptionse.osgeX -n: this))offdth', rWid;btion: op{
      tiss('wtVeloci$ this))oute itVele allignm/ tier: l) -j alignment
      lptions0;btion: op{
      tipeofier: l) -j> .attrignment
      lptionswattr  if (opti}belowOrigthumb
nd click hcrolle'pral =c(p);
,  === al: 0.5,anthumb.fve' '.valfs')/es);(thumb.css(
ngk raige_ clia/val(ap;btion5,  if (} albdth ev     });)) + 'se
  out  ocumlea   ,eraige_srapper,tel header
  }; // E tru!raige_se
   ifns('m
      tiss('thumb counthis))cslidren h.thumbody lignm/ tier: thumb.}
        crolle'pp  belowOrigigthumb
       //{ e     : '0',g.attr("i0',gtt') '10px',gmmplopLWidth'-6px'ae  ject.parent100 {e;{: 0.5,op{
      tithumb
 1}, {q      crolle'p;btion:   if (} albdth /**************************bdth  * Au.fih {durat plugibr *bdth  *************************/{dth e.fn.au.fh {durat   down);

 (    });
  }; // EtioDnctions;

Matend dropdown plugin

  $(dose": {
       oy lignm/ ds = {
    init : function(options) {
      va   exi t  // {
        opacugin

  $(dss(' input($) {
  Vel         nd drse"onstions) .rse",$(this)lassss inputDiv couinput
cloeDst '.input-field'p;jSetDsv).ognpp :  oni // Handl  HCheck uncrse"oisn'tcemptyyignm/ tier: !$.isEmptyOchild(rse"rebject
     artioC     iau.fh {durat lse)nneect
     arss(' au.fh {durat   unctul($triggeau.fh {durat-cover hgdrop ifn-cover h  vaul>ody lignm/ ti/ SetApp :  au.fh {durat lse)nneect
     arunctiinputDivr to shetL rationlassss inputDiv npp : feau.fh {duratp;jSetize ul(atobode if (opti('  ction") {
         uinput
nfter(eau.fh {duratp; if (opti(' ffunction (oss('h   lrollg=eel headerse*
ng, $eletL rationlasssslignimr 
 $el.fve' 'imr r;ect
     , 

origi  chS     
 $el. ext  .doLowerCdeD  .
    Of(""g+ he*
ng.doLowerCdeD  g+ ""),$(this)lassssssssi  chEndn=ti  chS     + he*
ng. to sho- 1,$(this)lassssssssbeforeM  ch 
 $el. ext  .sdate(0,ti  chS    ),$(this)lassssssssi  chText
  $el. ext  .sdate(i  chS    ,si  chEndn+ 1),$(this)lassssssssnfterM  ch 
 $el. ext  .sdate(i  chEndn+ 1);ect
     , 

$el.es);("vspdn>"g+ beforeM  ch + "vspdn($trigg'h   lroll'>"g+ i  chText
+ "v/spdn>"g+ nfterM  ch + "v/spdn>");ect
     , 

unctimgr to shetL rationlassss

$el.prep : fimg);ect
     , 

ve') &&
    {y lignm/ ti/ SetPerformos  rchlignm/ ti/ uinput
 + 'keyup',on: optio isetL ration: opowtioCaptur, EeClaect
     , 

uncte.whiginAvat13)rnment
          eau.fh {durat.fve' 'lin..fvrst  / tigi();ect
     , 

t
, "\\$;{: 0.5,  , 

veect
     , 

origval couinput
val(ardoLowerCdeD  ;ect
     , 

$au.fh {durat.empty(dy lignm/ ti/ dl  HCheck uncdle
input(isn'tcemptyyignm/ ti, 

unctval !B}),
p  belowOrig e  opabl(lignkey(atorse"rn belowOrig e  )  
unctrse".}
 OwnProperty(keya' +belowOrig e  )  




key.doLowerCdeD  .
    Of(valp !vat-1' +belowOrig e  )  




key.doLowerCdeD   !vatvalp  belowOrig e  )  


origau.fh {duratO   })   unctli vali 'g;{ {
         )  
d'unt!!rse"[key]on,{
        ela  laaaaaau.fh {duratO   }) npp : f'<imr src="'+ rse"[key] +'"($triggecrollgcircle  vspdn>'+ key(+'vaspdn ody = $('b'bbbbbbbbbbb  ction") {
         )  
aaaaau.fh {duratO   }) npp : f'<spdn>'+ key(+'vaspdn ody = $('b'bbbbbbbbbbb  = $('b'bbbbbbbbbbb$au.fh {durat.npp : fau.fh {duratO   })dy lignm/ ti/ dlllllllh   lroll(val,aau.fh {duratO   })dy = $('b'bbbbbbbbb 
his);
         
his);
      ve') &&
    {   "});


    // ize veput(valfs = $('bbbbb$au.fh {durat. + ' tigin,i'lin,on: optio ion,{
     'bbbbb$input
val(unthis)) ext  .drim() ;ect
     , 

$input
trnstra ' sfige'p;bif ($('bbbbb$au.fh {durat.empty(dy ') &&
    {   ;
      ve') &&
$ alignm};{idte  itioEndnofi$v     });))  ady{idt/*******************lign*  iztargoPlugibi *bdth******************/{dte.fn.mat  pla_s.targ   down);

 (c   backon,{
   unthis)) {
        opac,{
     ss(' s.targ    {
  Vel b
     unctis.targ.}
        browser-unction'pp  belowOrig, "\\$;l  HCoveinue  o!next (a "\\$1" );
 b  aks ou eai)eveir, loopb;

Mateveect
   origiionipler=' s.targ
== "cliioniple
p ?toffs)     // Close previlasCIDr=' s.targ
ose"('h.targ-id'p;jSetT  r  ifn he*uctur, unciztargoneeds  o!beg, built b
     unctlasCIDetL ration: :s.targ
paeDnf().fve' 'spdn.caeDt'))          // Handl:s.targ
paeDnf().fve' 'input's)           // Handl:s.targ
unsrap    // Handl:('ul#h.targ-tions) -'+lasCIDe)          // Han   ration// Ifadestroy 'm).hDrh.targ,cat    ).hDrh.talrg-id =e')cmn.poin to"it'sounideDplaceDd he   .b
     un(c   back :B}),destroy'etL ration: :s.targ
ose"('h.targ-id', ){thp) 1}, {q      ineDplaceDd'aalignment
, "\\$;{: 0.5,  ect
   origuniq LIDr='mat  placeD.guid    // Han:s.targ
ose"('h.targ-id', uniq LIDdy = $('bss('wrapper counction($triggeh.targ-wrapper  var $body = $('bwrapper
nd click  s.targ
== "cl$trig'p)l       ss('ds = {
    nctul(id="s.targ-tions) -' + uniq LIDr+'"($triggedrop ifn-cover h s.targ-drop ifn 'aul(iionipler? liioniple-s.targ-drop ifn' :),
p + '" vaul>od Close previs.targCslidrenr=' s.targ
cslidren htions)optiogroup'd Close previvalfssS.targed = [] Close previtions) H   r 
 " );
};

     lignibbelr=' s.targ
fve' 'tions):s.targed')/es);() ||  s.targ
fve' 'tions):fvrst')/es);() || ""allignm/ SetF: optio that renrg s =e') pp : s .he#tions)ntak 'm)intolignm/ Setac 
ueC  :Pb =e')poscss(' im ge icov.

     lign pp : O   })WithIc})   el headers.targoptions),  :Pbplay:"none"}tiohdd dse.eacd == " uncrse.eacd         nd drse.eacdclick =: false,
i   :rse.eacd'pp ? ldse.eacd ' :),
l         nd dtiogroupclick =:  cli c}}),oiogroup-tions)
p ?t,oiogroup-tions) ' :),
l y:"none"}tiond  icovs         nd dicov_urlonstions)
ose"('icov'a;) {
     ss('$trige
   ds = {
== "cl$trig'p;) {
     er: !!icov_urlon,{
        e 0;
$trigSe*
ng co,'y ') &&
    er: !!$trige
)
$trigSe*
ng co,($trigge'aul$trige
 + '"'  "});


    // Check ableiioniplert);
. ') &&
    er:  cli c}}),iioniple
p ,{
     'bbbbbtions) .npp : fenctli($trigge'aulrse.eacdclick + '" vimr alt="" src="' + icov_urlo+ '"'aul$trigSe*
ng + ' vspdn><veput( cli=" seckboxe'aulrse.eacdclick + '/><ibbel valbbel 'aulds = {
es);() + 'vaspdn vali 'gdy ') &&
    { ction") {
         oions) .npp : fenctli($trigge'aulrse.eacdclick + tiogroupclick + '" vimr alt="" src="' + icov_urlo+ '"'aul$trigSe*
ng + ' vspdn>'aulds = {
es);() + 'vaspdn vali 'gdy ') &&
    { ') &&
       exi t    $(this);
}i // Handl  HCheck ableiioniplert);
. ') &&
  er:  cli c}}),iioniple
p ,{
     'bbbtions) .npp : fenctli($trigge'aulrse.eacdclick + '" vspdn><veput( cli=" seckboxe'aulrse.eacdclick + '/><ibbel valbbel 'aulds = {
es);() + 'vaspdn vali 'gdy ') &&
  { ction") {
       oions) .npp : fenctli($trigge'aulrse.eacdclick + tiogroupclick + '" vspdn>'aulds = {
es);() + 'vaspdn vali 'gdy ') &&
  
       oy lignm/ /*oC     idrop ifn he*uctur,. */{dth   er: s.targCslidrenr to shetL rationlas.targCslidrenr {
        opacugin

  $(d eunctiothis))is 'tions)'pp  belowOrigigbjSetDsrecpadesc : aeC ds = {
yignm/ ti, 

unctiionipleon,{
        ela   pp : O   })WithIc})  s.targ,  {
  Ve,),iioniple
pess.attr('id'),} ction") {
         )  pp : O   })WithIc})  s.targ,  {
  Ve);ect
     , 

ve') &&
    {ipeofier: iothis))is 'tiogroup'dp  belowOrigigbjSetOiogroup
yignm/ ti, 

ss('s.targOs = {
    nthis))cslidren htions)'p;) {
         oions) .npp : fenctli($triggetiogroup" vspdn>'auliothis))== "cllabpe'a + 'vaspdn vali 'gdy ) {
         s.targOs = {
r {
        opacugin

  $(d ela   pp : O   })WithIc})  s.targ,  {
  Ve,),oiogroup-tions)
p;ect
     , 

vp;btion: op    // Handl
pti: op    
      oions) .fve' 'li:not(.oiogroup)'a/ {
        op iietL ration: : this)) tigi(n: optio isetL ration: op  HCheck unctions) lse)nneniscrse.eacd         tier: !$ this))}
        rse.eacd'p' + !$ this))}
        tiogroup'dp  belowOrigigbjss('s.targed = t    $yignm/ ti, 

unctiionipleon,{
        ela  $(,input[ cli=" seckboxe]',gthis))prop ' segied',eel headerin(v ('e, "\\$1!v;  tes.attr('id'),tis.targed = toggleEntryFromArr"e(valfssS.targed,  {
  Ve.
    (e,) s.targtes.attr('id'),ti$newS.targ
trnstra 'f   
'p;ect
     , 

v ction") {
         ) oions) .fve' 'li'a/ 1}, {q      crolle'p;btion: op  on: : this))toggleq      crolle'p;btion: op  on: :newS.targ
val(unthis)) ext  );ect
     , 

veect
     , 

crollToeO   })(    });,  {
  Ve);ect
     , 

 s.targ
fve' 'tions)'a/ qiie)prop 's.targed',is.targed);ect
     , 

SetTrnstrain  sfigeacue.attect
     , 

 s.targ
trnstra ' sfige'p;bif ($('bbbbbunctn:Pb,Toc   back !B}),target);
'p'c   back(r;ect
     ,  eect
     , e.stopPropaga  opac; // Handl
pti: op    allignm/ SetWrap Ese) {
s // Han:s.targ
srap wrapperpti: op  tiohdd iztargoDisp "e Ese)nneect
   nd drrop ifnIc})   unctspdn($triggecaeDt">&#9660;vaspdn ody = $('bunctis.targ.i   :rse.eacd'pp // Handlrrop ifnIc})
nd click hrse.eacd'pallignm/ Setescape dous(' quotes;

Matess('saneDpzedLabpeHs);   labpe)  $(doc(/"/g, '&quot;'p;b if (opssr :newS.targ   unctveput( cli=" ext"($triggeh.targ-rrop ifn" = adonly="    " 'aul(tis.targ.i   :rse.eacd'pp ? ldse.eacd' :),
p + ' ose")crollToes="s.targ-tions) -' + uniq LIDr+'"(valfs="'+ saneDpzedLabpeHs); +'"/ ody = $('bes.targ.before(:newS.targdy = $('benewS.targ
before(rrop ifnIc})p;b if (openewS.targ
nfter(tions) {
 ignm/ SetCheck unchecpare lse)nneniscrse.eacd       er: !$s.targ.i   :rse.eacd'pp L ration: :newS.targ
rrop ifn({'h   r'
        'cloeDOnCtigin
      a   // Han   ration// Copyctab
     = $('bunctis.targ.== "cltab
    'pp L ration: :(:newS.targoll .== "cltab
    ', is.targ.== "cltab
    'pp  // Han   rationis.targ.=d click hineDplaceDd'aal if (openewS.targ
opaL ration: 'f   
'ion: optio iogin

  $(d eunctio'ul.s.targ-drop ifn'esnot(tions) oll .i   :sicss(' rebject
     on: :(hinput.s.targ-drop ifn'estrnstra ' toeD'a;) {
        fct
     , er: !oions) .i   :sicss(' rebject
     on: :(this)) rnstra ' p :', ['f   
']r;ect
     , 

origibbelr=' r
  Vesval(a;ect
     , 

origs.targedO   })   oions) .fve' 'li'a/filter(      opacugin

  $(d ela  , "\\$1$nthis)) ext  .doLowerCdeD   c}})labpe)doLowerCdeD  ;ect
     , 

})oll;ect
     , 

crollToeO   })(    });, s.targedO   })p;btion: op    // Handl
 Close pre' tigin:on: optio isegin

  $(d ee.stopPropaga  opac; // Handl
i: op    allignm/ enewS.targ
opa'blur','el headers('max-heighunct!iionipleon,{
        e:(this)) rnstra ' toeD'a;) {
       // Handloions) .fve' 'li.s.targed')/ 1}, {q      s.targed')ti: op    allignm/ oions) .h   r(      opacugin

  $(dtions) H   r 
 t    $(this)},on: optio ion,{
     'btions) H   r 
 " );
};: op    allignm/ e(uterWidtopaL ration: ' tigin:on: optio ion,{
        eiionipler + (tions) H   r ||  newS.targ
trnstra ' toeD'ac; // Handl
i: op    allignm/ tiohdd ineDplaeiioniplers.targns) . = $('bunctiionipleon,{
        s.targ
fve' "tions):s.targed:not(:rse.eacd)"a/ {
        op ion,{
        e 0;

    r=' r
  Ves
    (e $yignm/ ti, toggleEntryFromArr"e(valfssS.targed, 
    n( s.targtes.attr('id'oions) .fve' "li"a/ qii    ).fve' ": seckboxee)prop " segied", tffse; // Handl
pti: op   llignm/ tioMake#tions)nasis.targed =e')h());
  o!hetarged posions) if (opssr crollToeO   })   el header$
llepsiblopnewO   })p('max-heighunctnewO   })p('max-heigh  $
llepsibl.fve' 'li.s.targed')/ 1}, {q      s.targed')ti: op   (opssr o   })   unnewO   })pes.attr('id'oions).=d click hs.targed')ti: op   (opoions) .h());
To(tions)dy ') &&
  
       oy lignm/ /ioh  ow rigrn o!he rch by( cls)."});


/io if (arr"enisch   re') fter
1checond if (opssr filter/ List= [] Close previtnKeyDifn 
 "l header o belowOrigigbjSetTAB - swi ch .ognnothe('inputbif ($('bbbbbunte.whiginAv 9s") {
         )  newS.targ
trnstra ' toeD'a;ect
     , 

t
, "\\$;{: 0.5,  , 

veect
     , 

/iohRROW DOWN WHEN SELECT IS CLOSEDo-toie$1s.targ tions) $if ($('bbbbbunte.whiginAv 40);
 !oions) .i   :sicss(' re") {
         )  newS.targ
trnstra ' p :'a;ect
     , 

t
, "\\$;{: 0.5,  , 

veect
     , 

/ioENTER WHEN SELECT IS CLOSEDo-tsubmit form$if ($('bbbbbunte.whiginAv 13);
 !oions) .i   :sicss(' re") {
         ) , "\\$;{: 0.5,  , 

veect
     , 

e.unbind(Dnctionns;bect
     , 

/ioCASE WHEN USER TYPE LETTERSect
     , 

origietilr
  Se*
ng.fromCharCodete.whigi .doLowerCdeD  ,$(this)lassssssssnonLetilrs = [9,13,27,38,4ll;ect
     , 

er: l)tilr
 + (nonLetilrs.
    Of(e.whigi  c}})-1rebject
     on:   filter/ Lis.puslrl)tilrdy lignm/ ti/ dlllorigse*
ng cofilter/ Lis.join('' ,$(this)lassssssss pnewO   })   oions) .fve' 'li'a/filter(      opacugin

  $(d ela      ) , "\\$1$nthis)) ext  .doLowerCdeD  .
    Of(se*
ng  c}})0;ect
     , 

t
, 

v)oll;eect
     , 

t
unctnewO   })p('max-heigh        crollToeO   })(    });, newO   })pes.attr('id', 

v{: 0.5,  , 

veect
     , 

/ioENTER -1s.targ tions) =e') toeDgwler s.targ tions)  ==v! p :Dds.attr('id'),uncte.whiginAvt13)rnment
          ssr crolleO   })   oions) .fve' 'li.s.targed:not(.rse.eacd)')oll;ect
     , 

bbuntcrolleO   })e") {
         ) / e(crolleO   })e
trnstra ' tigina  if (opttr('id'),unct!iionipleon,{
        e    ) / enewS.targ
trnstra ' toeD'a;ect
     , 

t
bb 
his);
         
his);
      veect
     , 

/iohRROW DOWN -      to!next not dse.eacd oions)s.attr('id'),uncte.whiginAvt40on,{
        e    er: false,
.fve' 'li.s.targed')/ to shetL rationlassss

 pnewO   })   oions) .fve' 'li.s.targed')/next 'li:not(.rse.eacd)')oll;ect
     , 

bb  ction") {
         )  
newO   })   oions) .fve' 'li:not(.rse.eacd)')oll;ect
     , 

bb ect
     , 

bbcrollToeO   })(    });, newO   })pes.attr('id', veect
     , 

/ioESC -  toeDgtions) $if ($('bbbbbuncte.whiginAvt27on,{
        ela  $newS.targ
trnstra ' toeD'a;ect
     , 

veect
     , 

/iohRROW UP -      to!unbiiousjnot dse.eacd oions)s.attr('id'),uncte.whiginAvt38on,{
        ela  newO   })   oions) .fve' 'li.s.targed')/unbi 'li:not(.rse.eacd)')oll;ect
     , 

bbuntnewO   })pmax-heigh        crollToeO   })(    });, newO   })pes.attr('id', veect
     , 

/iohutoma  calych   nofilter q Lis so rigrn(abihe rch agaatoby      
ng l)tilr $if ($('bbbbbs.r_options      opac, filter/ List= [];)},o1000 alttr('id', vallignm/ enewS.targ
opa'key ifn','tnKeyDifnp;btion} albdth n: optio toggleEntryFromArr"e(nd(riesArr"e,)everyI    n(s.targt(' if (opss('in   r='nd(riesArr"e.
    Of(everyI     ,$(this)lassnothdded = in   r=}})-1l b
     unctnothddedon,{
       nd(riesArr"e.puslr veryI     ti: op    ction") {
     nd(riesArr"e.spdate(
    n(1pti: op   llignm/ s.targ
css(
ngk hul.drop ifn-cover h').fve' 'li'a/ qi veryI     )toggleq      crolle'p;b"});


/iorigsnothdded insteadnofioffs)(to'detarg uncdle
tions) isis.targed blenot)lignm/ s.targ
fve' 'tions)'a/ qi veryI     )prop 's.targed',inothddedo;lignm/ s.tValfsToInput(nd(riesArr"e,)s.targteslignm/ , "\\$1nothdded;btion}lbdth n: optio s.tValfsToInput(nd(riesArr"e,)s.targt(' if (opss('valfs co,'y  if (opable(lignirle0,
 
ueCr='nd(riesArr"e. // If; i <
 
ueC; i++on,{
       ss(' ext = s.targ
fve' 'tions)'a/ qi veriesArr"e[i]a/ ext    max-heighuo=(e.0)?'valfs +=' ext :'valfs +='n,i' +' extti: op   llignm/ unctvalue :B}),
p  belowOrigvalfs cos.targ
fve' 'tions):rse.eacd'p/ qi0a/ ext    // Han llignm/ s.targ
css(
ngk hinput.s.targ-drop ifn'esval(valfse;btion}l, vall   // Listen to open andxed = t
  origin.on('plugibtionineD ion: option    });
  }; // End dropdown plugin

  $(dve'isrfors:ioffs,$(this)lae     : 400,$(this)latransions): 500,$(this)laieClaval: 6000       oy       ds = {
    init : function(options) {
      va   exi t  // {
        opacugi$(this)laSetFble {
  slider,twDgwaeC to'keepatracknof$(this)laSetwhiginslide isicrolleg=e')its    ocibili cover h{
       ss('  if ($) {
  Vel         ss(' slider =e    //fve' 'ul.slidesn..fvrst    // H    ss(' slide ($) slider/fve' '> li'a  // H    ss(' crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H    ss(' crolle,
$in'isrfors,
$inClaval $// H    uncticrolle_
    r!})-1r {' croller=' slides/ qiicrolle_
    ) i}$ // Han

SetTransions)s .he#caions) dep : 
ng s) =lign)nneect
     open andxcaions)Transions)(caions),ject.parecugin

  $(d eunctcaions))}
       "cveCla-=lign"rebject
     on: caions))       //{opa   /th).atranslbilY:)-100re           $        ,ose');
      vp;btion: op    // Handltipeofier: caions))}
       "croll-=lign"rebject
     on: caions))       //{opa   /th).atranslbilXnt100re           $        ,ose');
      vp;btion: op    // Handltipeofier: caions))}
       " ===-=lign"rebject
     on: caions))       //{opa   /th).atranslbilXnt-100re           $        ,ose');
      vp;btion: op    // Handl}$ // Han

SetTif (n: optio wi;
 transions)).hDrhlide .ognny in   roncdle
next hlideect
     open andx    ToSlideii    )tL ration: op  HWrap arourndve'ises. ') &&
    er: in   r>=' slides/ to shet
    r='0;ect
     , peofier: 
    r alig
    r=' slides. to sho-1;eect
     ,  crolle_
    r=' slider/fve' '.crolle'pr
    (e $ ration: op  HOnlypdoguncin   r sfiges;

Materi&
uncticrolle_
    r!})i    )tL ration: op ' croller=' slides/ qiicrolle_
    )  ration: op ' caions) =' crolle/fve' '.caions)
pess.attr('id'), crolle/ 1}, {q      crolle'p;btion: op  on crolle/       //{opa   /th)re           $oions) .transions),ose');
          /   .slideDownQuad',in

  $(d ela      )           h {durat:'el headers('max-heighhhhhhhhhhhhhhhhhhhhhhhhh slides/not('.crolle'pr       //{opa   /th).atranslbilXnt).atranslbilY:))re           $0,ose');
      vp;btion: op                      }  tes.attr('id'),caions)Transions)($caions),joions) .transions))esslignm/         HUpd    in'isrforss.attr('id'),unctoions) .in'isrforson,{
        ela  $in'isrfors/ qiicrolle_
    )/ 1}, {q      crolle'p;btion: op  onveect
     , 

 slides/ qi
    )/       //{opa   /th1re           $oions) .transions),ose');
          /   .slideDownQuad' tes.attr('id'), slides/ qi
    )/fve' '.caions)
p/       //{opa   /th1.atranslbilXnt).atranslbilY:))re           $oions) .transions),odelay $oions) .transions),ose');
          /   .slideDownQuad' tes.attr('id'), slides/ qi
    )/nd click hcrolle'p;b lignm/         HUpd    in'isrforss.attr('id'),unctoions) .in'isrforson,{
        ela  $in'isrfors/ qi
    )/nd click hcrolle'p;btion: op  onveon: op  onveon: op  }$ // Han

Setize e     roncslider // Han

SetIf'elllscre n, dognoths)."});


  er: !$this }
 click helllscre n rebject
     onunctoions) .in'isrforson,{
        elatiohdd e     runcin isrfors ==v!pcmn.ttect
     , 

 this }     voions) .h     r+t40o;btion: op    // Handltipeofi{ect
     , 

 this }     voions) .h     o;btion: op    // Handlti slider/}     voions) .h     o;btion: op}
$ // Han

Setize ineDplaeposions)o(,Tocaions)ss.attr('i slides/fve' '.caions)
p/ {
        op ion,{
        ecaions)Transions)(${
  Ve,)0o;btion: op
pti // Handl  HM    imr src)into backgrourn-im ges.attr('i slides/fve' 'imr r/ {
        op ion,{
        e 0;
$(doceol erBdeD64 co,ose":im ge/gif;bdeD64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='y ') &&
    er: iothis))== "clsrc'p !vat$(doceol erBdeD64ebject
     on: :(this))al =cbackgrourn-im gen,i'url('auliothis))== "clsrc'p + ')' tes.attr('id'), othis))== "clsrc',t$(doceol erBdeD64e;btion: op    // Handl}pti // Handl  Hdynam callypnd  in'isrforss.attr('iunctoions) .in'isrforson,{
        e$in'isrfors   unctul($triggein'isrfors  vaul>ody // Handlti slide// {
        opacin   rp  belowOrigigbjss('$in'isrfor   unctli($triggein'isrfor-item" vali 'g;{{
        elatioHfinee#ctigis s) in'isrforss.attr('id'),$in'isrfor) tigi(n: optio i)rnment
          ssr $paeDnfr=' slider/paeDnf();btion: op       0;
$urr_
    r=' paeDnf/fve'  {
  Ve)r
    (e $// H              ToSlidei$urr_
    dy lignm/ ti/ dllltiocmn.poinClavallignm/ ti/ dlllh   rInClaval($inClavalp;btion: op  on: :inClaval cos.tInClaval(btion: op              opac,{
     on: op  on: :crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H              unctislides. to sho== :crolle_
    r+ 1) :crolle_
    r='0 itioloopn o!h    $// H              peofi:crolle_
    r+= 1y lignm/ ti/ dlll        ToSlideiicrolle_
    )  lignm/ ti/ dlll  },joions) .transions)aulds = { .inClavallignm/ ti/ dlllp;ect
     , 

vp;btion: op    $in'isrfors/npp : fein'isrfore;btion: op   dy // Handlti    //=pp : fein'isrforsdy // Handlti in'isrfors   u   //fve' 'ul.in'isrfors').fve' 'li.in'isrfor-item'a;) {
       $// H    uncticrolleon,{
        e$crolle/showac; // Handl
i: op  tipeof  belowOrig e:slides/fvrst  /nd click hcrolle'pr       //{opa   /th1re           $oions) .transions),ose');
          /   .slideDownQuad' tesect
     ,  crolle_
    r='0;ect
     ,  croller=' slides/ qiicrolle_
    )   ration: op  HUpd    in'isrforss.attr('id'unctoions) .in'isrforson,{
        ela$in'isrfors/ qiicrolle_
    )/nd click hcrolle'p;btion: op  veon: op  }$ // Han

SetAdjuse e     r.fihideDnf hlideect
      crolle/fve' 'imr r/ {
        op(on,{
        e$crolle/fve' '.caions)
p/       //{opa   /th1.atranslbilXnt).atranslbilY:))re           $oions) .transions),ose');
          /   .slideDownQuad' tes.attr('i}pti // Handl  Hau.fih());
 if ( ela$inClaval cos.tInClaval(btion: op        opac,{
     on: op:crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H            ToSlideiicrolle_
    n+ 1);ebtion: op  v,joions) .transions)aulds = { .inClavallignm/ tip;b lignm/   tioHfmmerJS, Swipe naviga  op$ // Han

SetTocum Evr h{
       ss('pann
ng cof );
};: op  llorigswipeLptionsf );
};: op  llorigswipeRrollg=ee );
};

     

 this }fmmer(,{
     on: opunbind(_dnction $e );
s.attr('i}p.bve' 'pan ,eel header object
       uncte.gestur,.poinClaTcli c}})" ocum"objemax-height'lltiocmn.poinClavallignm/ ti/ dlh   rInClaval($inClavalp;bbelowOrigigbjss('dsrecpns) ='e.gestur,.dsrecpns);belowOrigigbjss('x ='e.gestur,.deltaX;belowOrigigbjss('       /X ='e.gestur,.       /Xess.attr('id'), $urr_hlide =' slider/fve' '.crolle'p  ration: op ' curr_hlide
       //{ translbilXntx ration: op 'r('i}e           $50,ose');
          /   .slideDownQuad' tesect
     , 

Setiwipe Lptis.attr('id'),unctdsrecpns) =Avt4
 + (x >ctithis inne itVele  / 2) ||        /X < -0.65rebject
     on:   swipeRrollg=et    $(this);
r('i}ect
     , 

Setiwipe Rrollect
     , 

peofier: dsrecpns) =Avt2
 + (x < (-1 * ithis inne itVele  / 2) ||        /X > 0.65rebject
     on:   swipeLptionst    $(this);
r('i}eect
     , 

SetMake#Slide Behs)d crolleghlide sicss('belowOrigigbjss('next_hlide;ect
     , 

er: swipeLption,{
        ela  next_hlide =' curr_hlide
next    // Handle , 

er: next_hlider to sho=(e.0etL rationlassss

 pnext_hlide =' slides/fvrst  ;ect
     , 

bb ect
     , 

bbnext_hlider       //{ opa   /th1lignm/ ti/ dlll    }e           $(00,sse');
          /   .slideDownQuad' tes.attr('id'),}ect
     , 

er: swipeRroll ('{
        ela  next_hlide =' curr_hlide
unbi    // Handle , 

er: next_hlider to sho=(e.0etL rationlassss

 pnext_hlide =' slides/lasC  ;ect
     , 

bb ect
     , 

bbnext_hlider       //{ opa   /th1lignm/ ti/ dlll    }e           $(00,sse');
          /   .slideDownQuad' tes.attr('id'),}eebtion: op  vebtion: op}p.bve' 'panern ,eel header object
       uncte.gestur,.poinClaTcli c}})" ocum"objemax-height'll $urr_hlide =' slider/fve' '.crolle'p  ration: op 'pann
ng cof );
};: op  llllll$urr_
    r=' slider/fve' '.crolle'pr
    (e $ ration: op  er: !swipeRrollg;
 !swipeLptio||  slides. to sho<=1etL rationlassss

  Ham exi to bl (opal spo $// H           curr_hlide
       //{ translbilXnt0lignm/ ti/ dlll    }e           $(00,sse');
          /   .slideDownQuad' tes.attr('id'),}ect
     , 

peofier: swipeLption,{
        ela      ToSlidei$urr_
    n+ 1);ect
     , 

   curr_hlide
       //{translbilXnt-1 * ithis inne itVele  }e           $(00,sse');
          /   .slideDownQuad',in

  $(d ela      )           llllll$ {durat:'el headers('max-heighhhhhhhhhhhhhhhhhhhhhhhhh, 

   curr_hlide
       //{opa   /th).atranslbilXnt)re           $0,ose');
      vp;btion: op                            }  tes.attr('id'),}ect
     , 

peofier: swipeRroll ('{
        ela      ToSlidei$urr_
    n- 1);ect
     , 

   curr_hlide
       //{translbilXntithis inne itVele  }e           $(00,sse');
          /   .slideDownQuad',in

  $(d ela      )           llllll$ {durat:'el headers('max-heighhhhhhhhhhhhhhhhhhhhhhhhh, 

   curr_hlide
       //{opa   /th).atranslbilXnt)re           $0,ose');
      vp;btion:                               }  tes.attr('id'),}ect
     , 

swipeLptionsf );
};: op  ll, 

swipeRrollg=ee );
};

     





  Hamn     inClavallignm/ ti/ dlh   rInClaval($inClavalp;bhhhhhh, 

   inClaval cos.tInClaval(btion: op            opac,{
     on: op  on:crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H            unctislides. to sho== :crolle_
    r+ 1) :crolle_
    r='0 itioloopn o!h    $// H            peofi:crolle_
    r+= 1y lignm/ ti/ dlll      ToSlideiicrolle_
    )  lignm/ ti/ dlll},joions) .transions)aulds = { .inClavallignm/ ti/ dle;btion: op    // Handl}pti // Handl    //on('sliderPause','el headers('max-heighdlh   rInClaval($inClavalp;bhhhhhh, }pti // Handl    //on('sliderS    h,eel headers('max-heighdlh   rInClaval($inClavalp;bhhhhhh,    inClaval cos.tInClaval(btion: op          opac,{
     on: op  :crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H          unctislides. to sho== :crolle_
    r+ 1) :crolle_
    r='0 itioloopn o!h    $// H          peofi:crolle_
    r+= 1y lignm/ ti/ dlll    ToSlideiicrolle_
    )  lignm/ ti/ dl},joions) .transions)aulds = { .inClavallignm/ ti/ p;bhhhhhh, }pti // Handl    //on('sliderNexth,eel headers('max-heighdl:crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H          ToSlideiicrolle_
    n+ 1);ehhhhhh, }pti // Handl    //on('sliderPnbih,eel headers('max-heighdl:crolle_
    r=' slider/fve' '.crolle'pr
    (e $// H          ToSlideiicrolle_
    n- 1);ehhhhhh, }pti // Han}pti i // H
 Closepause :'el headers('max-hei:(this)) rnstra 'sliderPause'e;btion} Closen     :'el headers('max-hei:(this)) rnstra 'sliderS    he;btion} Closenext :'el headers('max-hei:(this)) rnstra 'sliderNexthe;btion} Closeunbi :'el headers('max-hei:(this)) rnstra 'sliderPnbihe;btion}l, vallbtione.fn.slider =eel headerin.on(OrO   });
  }; // Eunctgin.on('[in.on(OrO   });]rp  belowOrig   exi in.on('[ in.on(OrO   }); ]/=pply( t  /, Arr"e.protot);
.sdate.call( arg  });/, 1 pp  // Han 
peofier:  n:Pb,Toin.on(OrO   }); c}}),ochild'o|| !oin.on(OrO   }); play:"none"}tioDnctionn o!"ineD"belowOrig   exi in.on('.ineD/=pply( t  /, arg  });/ p  // Han 
peofiay:"none"}$.error( 'Mn.on(i' +'oin.on(OrO   }); + ' oactinot     ors)a// Lis.tooonip' tes.attr(o     }e SetPlugibiernl   // Listen to open andxed = th ev     });))  ady       opacugi$(thi$v     });)) + ' tigi.caed',''.caed','n: optio isetL rationer: iothis))fve' '> .caed-nbinal')/ to shetL rationlaer: ioe.   get .i  $('.caed-nbinal .caed-tit(' reb||  oe.   get .i  $('.caed-nbinal .caed-tit(' i re)tL ration: op  HMake#Rbinal anShow l ifn and dsep "e nons = $('bbbbb$othis))fve' '.caed-nbinal')/       //lignm/ ti/ dl{translbilY:))re  lignm/ ti/ dlll         $225,in

  $(d ela  se');
       $// H          p /   .slideDInownQuad',in

  $(d ela  $ {durat:'el headers(' :(this))al ={ dsep "e.slnons' te  
his);
      ve') &&
    c; // Handl
i: op  tipeof er: ioe.   get .i  $('.caed .crollToor reb||btion:            ioe.   get .i  $('.caed .crollToor i rerp  belowOrigigioe.   get .cloeDst '.caed')ral =c   rflcu',''hid
 nody // Handlti othis))fve' '.caed-nbinal')/al ={ dsep "e.slb   k' t/       //"stop",      )
       //{translbilYth'-100%'}e           $(00,sse');
          /   .slideDInownQuad'{   ;
      ve') &&
$     });{idte  l   // Listen o open andxed = th  0;
$hipsHfineeEvr hsonsf );
};: origi    plaChipsDopdown plugin

 ose": [] Close$(doceol er:),
 ClosenecondaryP(doceol er:),
 Clovalligev     });))  ady       opacugilosetioHfinee# 1}, al oncsta  c
$hips.$(thi$v     });)) + ' tigi',''.chip .cloeD ,eel header o belowOrssr $$hips    nthis))cloeDst '.chipsody = $('buncti$hips.== "close")ineDplaceDd'ap  belowOrig, "\\$;e') &&
$        nthis))cloeDst '.chip'))          // H{   ;
});{idte.fn.mat  pla_chip   down);

 (    });
  }; //origs.tfonsthis  // H   //$elr=' r
  Ve  // H   //$     });r=' r     });)  // H   //SELSplugin

  $CHIPS: '.chipso,in

  $CHIP: '.chipo,in

  $INPUT:t'input',in

  $DELETE:o,.mat  pla-icovs',in

  $SELECTED_CHIP: '.s.targed',     }eibtioninctlose"' c}})    });
  }; // E   exi t  //$el.ose"('chipsody = $(vebtion 0;
$urr_ds = {
    init : f{},gi    plaChipsDopdown options) {
  ilosetioIneDplaceD // H   //ineD ='el headers('max-heilignirle0;max-heilignchips;max-heis.tf/$el. {
        opac,{
     Orssr $$hips    nthis)};: op  llorig$hipIdr='mat  placeD.guid     rationlaer: !$urr_ds = {
.ose"o|| !($urr_ds = {
.ose"oinstancb,ToArr"ee)tL ration: op$urr_ds = {
.ose"o= [];cif (opdl
i: op  tii$hips.ose"('chipso,p$urr_ds = {
.ose")};: op  lli$hips.== "close")in   ', i)};: op  lli$hips.== "close")ineDplaceDd', tffse;  rationlaer: !i$hips.}
 click s.tf/SELS.CHIPSe)tL ration: opi$hips.=d click hchipsody = $('b  vebtion: ops.tf/chipsti$hips,g$hipIddy = $('b  i++;e') &&
$dy = $(v;  ratithis }fineeEvr hsonsf     opac,{
     ss('SELSplus.tf/SELS;  rations.tf/$     });)off ' tigi.chips-f   
', SELS.CHIPSe) + ' tigi.chips-f   
', SELS.CHIPS,eel header o belowOrigioe.   get .fve' SELS.INPUT .f   
    // Han );  rations.tf/$     });)off ' tigi.chips-s.targ', SELS.CHIPe) + ' tigi.chips-s.targ', SELS.CHIP,eel header o belowOrigioSELS.CHIPe) 1}, {q      s.targed')ti: op   (: this))toggleq      s.targed')ti: op    allignm/ s.tf/$     });)off 'key ifn.chipsod
opa'key ifn.chipso,eel header o belowOriger: ioe.   get .i  'input, texta  a rebject
     on, "\\$;{: 0.5,  }$ // Han

Setdeurat{
     Orssr $$hipplus.tf/$     });)fve' SELS.CHIP + SELS.SELECTED_CHIPe $// H    ss(' $hips    $hip)cloeDst SELS.CHIPSe $// H    ss(' to sho=  $hip)css(
ngk SELS.CHIPe) // If;$// H    ss('in   ;  rationlaer: !i$hip/ to shetL rationlass, "\\$;{: 0.5,  }$ // Han

uncte.whiginAvat8 imae.whiginAvat46etL rationlasse.unbind(Dnctionns;bect
     , 
    r=' $hip/
    (e $// H      s.tf/deuratChip(
    n( $hipss;bect
     , origs.targI    r='){th $// H      unct(
    r+ 1) <  to shetL rationlasssss.targI    r='in   ; tionlassss} peofier: 
    rc}})lto shoima(
    r+ 1) c}})lto shetL rationlasssss.targI    r=' to sho- 1;btion: op    $// H      uncts.targI    r aligs.targI    r='){th $$// H      unct){th !vats.targI    etL rationlasssss.tf.s.targCslpts.targI    n( $hipss;btion: op    // H      unct!lto sheti$hips.fve' 'input's)f   
     // Han

Setlptis.attr('i} peofier: e.whiginAvat37on,{
        e
    r=' $hip/
    (eo- 1;btion: op  er: 
    r aligL rationlassss, "\\$;{: 0.5,  ,   // Handlti oSELS.CHIPe) 1}, {q      s.targed')ti: op   (sss.tf.s.targCslpt
    n( $hipss;bect
     tiocrollect
     } peofier: e.whiginAvat39on,{
        e
    r=' $hip/
    (eo+ 1;btion: op   oSELS.CHIPe) 1}, {q      s.targed')ti: op   (sser: in   r>)lto shetL rationlassssi$hips.fve' 'input's)f   
    rationlassss, "\\$;{: 0.5,  ,   // Handltis.tf.s.targCslpt
    n( $hipss;b0.5,  ,   // Han  allignm/ s.tf/$     });)off 'f   
in.chipso,eSELS.CHIPS + ' ' + SELS.INPUT .opa'f   
in.chipso,eSELS.CHIPS + ' ' + SELS.INPUT,eel header o belowOrigss(' $urrChips    ne.   get .cloeDst SELS.CHIPSe $// H     $urrChips.=d click hf   
'p;ect
      $urrChips.css(
ngk hlabpe, .unbfix')/nd click hcrolle'p;btion: op oSELS.CHIPe) 1}, {q      s.targed')ti: op    allignm/ s.tf/$     });)off 'f   
out.chipso,eSELS.CHIPS + ' ' + SELS.INPUT .opa'f   
out.chipso,eSELS.CHIPS + ' ' + SELS.INPUT,eel header o belowOrigss(' $urrChips    ne.   get .cloeDst SELS.CHIPSe $// H     $urrChips. 1}, {q      f   
'p;eect
     tioRt    )crolleger:emptyyignm/ tier: !$$urrChips.ose"('chipsod/ to shetL rationlass $urrChips.css(
ngk hlabpe'a/ 1}, {q      crolle'p;btion: op}ect
      $urrChips.css(
ngk h.unbfix')/ 1}, {q      crolle'p;btion:   allignm/ s.tf/$     });)off 'key ifn.chips-nd o,eSELS.CHIPS + ' ' + SELS.INPUT .opa'key ifn.chips-nd o,eSELS.CHIPS + ' ' + SELS.INPUT,eel header o belowOrigss('    get    ne.   get  $// H    ss(' $hips       get)cloeDst SELS.CHIPSe $// H    ss('$hipsLto sho=  $hips)cslidren SELS.CHIPe) // If;$ect
     tioeeClaect
     er: 13nAvate.whigi  L rationlasse.unbind(Dnctionns;brationlasss.tf/nd cslpt{tag:     get)val(a}n( $hipss;btion: op      get)val('')ti: op   (ss, "\\$;{: 0.5,  }$ // Han

Setdeurat blelptis.attr('i unct(8nAvate.keyCodeoima37nAvate.keyCodep' + '' c}})    get)val(a' + $hipsLto sh  L rationlasss.tf.s.targCslpt$hipsLto sho- 1,( $hipss;btion: op      get)blur()ti: op   (ss, "\\$;{: 0.5,  }$tion:   allignm/ /ioCtigi s) deurat icov(ato$hip/ rations.tf/$     });)off ' tigi.chips-deurato,eSELS.CHIPS + ' ' + SELS.DELETEe) + ' tigi.chips-deurato,eSELS.CHIPS + ' ' + SELS.DELETE,eel header object
     ss('    get    ne.   get  $// H    ss(' $hips       get)cloeDst SELS.CHIPSe $// H    ss('$$hipplu    get)cloeDst SELS.CHIPe $// H    e.stopPropaga  opac; // Handls.tf/deuratChip( $hip/
    (e,( $hipss;btion: opi$hips.fve' 'input's)f   
    ration$dy = $(v;  ratithis $hips   el headeri$hips,g$hipIdd('max-heilignhs);   ,'y ') &&
i$hips.ose"('chipsos)f rE{
        opalse)o belowOrighs); +lus.tf/renrg Chip(lse)o  ration$dy = $(ighs); +luctveput(id="'aul$hipIdr+'"($triggeveput"e$(doceol er="">'y ') &&
i$hips.es);(es);dy = $(igs.tf.s.tP(doceol er( $hipss;bect
   Setize able== "ibuat ablelabpemax-heilignibbelr=' $hips.next 'labpe'ay = $('bunctlabpe) to shetL rationlalabpe)== "clabl',g$hipIddy belowOriger: i$hips.ose"('chipsos) to shetL rationlasslabpe)=d click hcrolle'p;btion: opve') &&
$     };  ratithis renrg Chip 
 "l header se)otL rationer: ! se).  g)s, "\\$;{max-heilignhs);   ,tion($triggechip">'aul se).  gy = $('bunct se).im geetL rationlahs); +luc <imr src="'aul se).im ge + '"  'y ') &&
} = $(ighs); +luctv($triggemat  pla-icovs  toeD"> toeD</i>'y ') &&
hs); +luctar $boy ') &&
   exi hs);y = $(v;  ratithis s.tP(doceol er   el headeri$hipsetL rationer: i$hips.ose"('chipsos) to sh' + $urr_ds = {
.$(doceol eron,{
        $hips.fve' 'input's)prop '$(doceol ero,p$urr_ds = {
.$(doceol eroti // Han} peofier: !i$hips.ose"('chipsos) to sh' + $urr_ds = {
.necondaryP(doceol eron,{
        $hips.fve' 'input's)prop '$(doceol ero,p$urr_ds = {
.necondaryP(doceol eroes.attr(o     }e  ratithis isValid   el headeri$hips,g se)otL rationss('$hipsr=' $hips.ose"('chipsody = $(onss('    osonsf );
};:     able(ligni=0; i <
 hips. // If; i++on,{
       er: chips[i].  gnAvatese).  g)sL rationlassss    osonst    $(this);
r('i, "\\$;{: 0.5,  }$tion:   ') &&
   exi '' !vatese).  gg;
 !    osy = $(v;  ratithis nd cslp 
 "l header se),( $hipsstL rationer: !s.tf.isValidri$hips,g se)op  belowOrig, "\\$;e') &&
$       ss('$hipHs);   s.tf/renrg Chip(lse)o  rationss('newDse"o= [];cif (opssr oldDse"o=  $hips.ose"('chipsody = $(onable(lignirle0; i <
oldDse". // If; i++on,{
       newDse".puslroldDse"[i]a;e') &&
$       newDse".puslrlse)o   ') &&
i$hips.ose"('chipso, newDse"a;e') &&
$($hipHs);pr
 sertBefore(:$hips.fve' 'input'sa;e') &&
$$hips.trnstra ' sip/nd o,else)o  rations.tf.s.tP(doceol er( $hipss;b= $(v;  ratithis deuratChip   el header$hipI    n( $hipsstL rationss('$hipo=  $hips.ose"('chipsod[$hipI    ];e') &&
$$hips.fve' '.chip'))eqr$hipI    s)           // Hanss('newDse"o= [];cif (opssr oldDse"o=  $hips.ose"('chipsody = $(onable(lignirle0; i <
oldDse". // If; i++on,{
       er: i !vat$hipI    ssL rationlassnewDse".puslroldDse"[i]a;e') &&
  }$tion:    ') &&
i$hips.ose"('chipso, newDse"a;e') &&
$$hips.trnstra ' sip/deurato,e sipo  rations.tf.s.tP(doceol er( $hipss;b= $(v;  ratithis s.targCslp   el header$hipI    n( $hipsstL rationss('$$hipo=  $hips.fve' '.chip'))eqr$hipI    sy = $('bunct$$hipo;
 " );
 c}})  sip/}
 click hs.targed')on,{
        $hip.=d click hs.targed')ti: op   ($$hips.trnstra ' sip/s.targ',  $hips.ose"('chipsod[$hipI    ]oes.attr(o     }e  ratithis getChipsEse)nne   el headeri    n( $hipsstL ration, "\\$1$$hips. qi
    );b= $(v;  ratiSetineD ratithis ineD     // Her: !$hipsHfineeEvr hsstL rationthis }fineeEvr hs    ration$hipsHfineeEvr hsonst    $(thi}l, val   // Listen o open andxed = th e.fn.puslpin 
 "l heade (    });
  }; //tioDnctionss.attnd dropdown plugin

  $top $0,in

  $bottom: InfineDy,in

  $offs.tnt0lignmv;  ratiSetRt    )puslpin bind( =e') trige
 // Her: o   }); c}})"      "stL rationthis  {
        op ion,{
       er: id    nthis))ose"('puslpin-id'pp  belowOrigigiouterWidtoff 'h());
.' + id);ect
     ,  nthis))      Dse"('puslpin-id'p/ 1}, {q      pin-top pinned pin-bottom'p/ 1}, {A= "clstyle'p;btion: opve') &&
$p;btion: a "\\$1" );
 $(thi}l$(thids = {
    init : function(options) {
  $(thi$
    r='0;ect
    exi t  // {
        opacugirationss('$uniq LIdr='mat  placeD.guid  ,in

  $(d e  if ($) {
  Ve,in

  $(d e bl (opal_offs.t    nthis))offs.t  .dopy  if (opa     op  1}, {PinCtrige
(ochildon,{
     'btchild/ 1}, {q      pin-top'p;btion: optchild/ 1}, {q      pinned')ti: op   (tchild/ 1}, {q      pin-bottom'pes.attr(o  if (opa     op upd   Ese) {
s(ochild;, s());
edon,{
       ochild;/ {
        op ion,{
        etiohdd posions) fixed (because its betweei top =e')bottompmax-heigh  unctoions) .top <= s());
edo;
 oions) .bottomr>='s());
edo;
 !$ this))}
        pinned')igL rationlassss, }, {PinCtrige
( {
  Ve);ect
     , 

 (this))al =ctop',joions) .offs.t);ect
     , 

 (this))=d click hpinned')ti: op   (    $// H      tiohdd pin-top (wler s());
edoposions) isicb    toppmax-heigh  uncts());
edo< oions) .top ;
 !$ this))}
        pin-top'pigL rationlassss, }, {PinCtrige
( {
  Ve);ect
     , 

 (this))al =ctop',j0);ect
     , 

 (this))=d click hpin-top'p;btion: op    $// H      tiohdd pin-bottomr(wler s());
edoposions) isibe ow bottompmax-heigh  uncts());
edo> oions) .bottomr;
 !$ this))}
        pin-bottom'pigL rationlassss, }, {PinCtrige
( {
  Ve);ect
     , 

 (this))=d click hpin-bottom'pes.attr(  , 

 (this))al =ctop',joions) .bottomr-e bl (opal_offs.ts;btion: op    // H    
pti: op   llignm/  nthis))ose"('puslpin-id','$uniq LIdpti: op  upd   Ese) {
s($t  /, iouterWidth());
Top  );ect
   e(uterWidtopa'h());
.' + $uniq LId,on: optio ion,{
     'bss(' s());
edo= iouterWidth());
Top  aulds = { .offs.t;btion: opupd   Ese) {
s($t  /, is());
edo;btion:   allignm});{idteal   // Listen o open andxed = th ev     });))  ady       opacugi$(thitio// Listnbinr;
s.atte.fn.nbinr;
o= [].nbinr;
;  ratiSetH   r behaiiour: make#sureo if (oactn't wori s) ) tigi-to-toggle FABs!s.attev     });)) + 'mouseeeCla.fixedA   opBtn',''.fixed)crolon-btn:not(. tigi-to-toggle):not(.tooobar) ,eel header object
   ss('  if ($) {
  Vel        p :FABMenu($t  /   // H{   ;
ttev     });)) + 'mouseleale/fvxedA   opBtn',''.fixed)crolon-btn:not(. tigi-to-toggle):not(.tooobar) ,eel header object
   ss('  if ($) {
  Vel        toeDFABMenu($t  /   // H{    ratiSetToggle-on- tigi behaiiour.$(thi$v     });)) + ' tigi.fabCtigiToggle',''.fixed)crolon-btn) tigi-to-toggle > a ,eel header object
   ss('  if ($) {
  Vel       ss('  })u   u   //paeDnf();btion: unct$ })u)}
        crolle'pon,{
     'b toeDFABMenu($ })up  // Han 
peofiay:"none"} p :FABMenu($ })up  // Han  // H{    ratiSetTooobar transions))behaiiour.$(thi$v     });)) + ' tigi.fabTooobar',''.fixed)crolon-btn)tooobar > a ,eel header object
   ss('  if ($) {
  Vel       ss('  })u   u   //paeDnf();btion: FABtoTooobar($ })up  // H});{idte  lth e.fn.nit : f{
ne"} p :FAB:'el headers('max-hei p :FABMenu(${
  Ve);ect
 } Close toeDFAB:'el headers('max-hei toeDFABMenu(${
  Ve);ect
 } Close p :Tooobar:'el headers('max-heiFABtoTooobar(${
  Ve);ect
 } Close toeDTooobar:'el headers('max-heitooobarToFAB(${
  Ve);ect
 }idte  lt
opssr o  :FABMenu 
 "l heade (btn
  }; //orig  if ($)btn; // Her: $this }
 click hcrolle'p c}})     )bjemax-heiSetGet'dsrecpns) oions)s.attr(lignhbl zontal co$this }
 click hhbl zontalody = $(onss('offs.tY,'offs.tXess.attr(er: hbl zontal c=nst   on,{
       offs.tX vt40  // Han 
peofiay:"none"} ffs.tY vt40  // Han llignm/  this nd click hcrolle'p;btion: u   //fve' 'ul .btn-floa 
ng')/       //lignm/ ti{ s(allYth".4", s(allXth".4", translbilYth ffs.tY + 'px'.atranslbilXntoffs.tX + 'px'
 Close pre{l         $0   allignm/ ss(' imerle0;max-heiu   //fve' 'ul .btn-floa 
ng')/nbinr;
(r/ {
  on: optio ion,{
     'b r
  Vesv      //lignm/ ti/ { opa   /th"1", s(allXth"1", s(allYth"1", translbilYth"0".atranslbilXnt'0'
 Close prere{l         $80,odelay $ imer{   ;
       imer+vt40  // Han );ect
 }idte;t
opssr  toeDFABMenu 
 "l heade (btn
  }; //orig  if ($)btn; // HSetGet'dsrecpns) oions)s.attlignhbl zontal co$this }
 click hhbl zontalody = $(ss('offs.tY,'offs.tXess.atter: hbl zontal c=nst   on,{
     offs.tX vt40  // H 
peofiay:"none ffs.tY vt40  // H llignm$this re}, {q      crolle'p;btionss(' imerle0;max-hu   //fve' 'ul .btn-floa 
ng')/       //"stop", tffse; // Hu   //fve' 'ul .btn-floa 
ng')/       //lignm/ { opa   /th"0", s(allXth".4", s(allYth".4", translbilYth ffs.tY + 'px'.atranslbilXntoffs.tX + 'px'
 Close p{l         $80n  // He; //vallbti/** // *tTransformiFAB)into tooobar // *t@paeam p{Ochild}  ochildo// Listochild // */
opssr FABtoTooobar   el headerbtn
  }; //er: btn)== "close") p :'a c}})"    "stL ration, "\\$  // H llignmss('offs.tX,'offs.tY,'s(allFcroor;btionss('uterWiitVel   uterWi inne itVel;btionss('uterWiHerollg=euterWi inne Heroll;btionss('btnRarg   btn[0] getBourn
ngCtiDnfRarg(p;btionss('anchor   btn)fve' '> an..fvrst    // Horiginnu 
 btn)fve' '> uln..fvrst    // Horigbackdrop   unction($triggefab-backdrop" var $bo   // HorigfabColor   anchor)al =cbackgrourn-coloro   // Hanchor)=pp : fbackdrop allignmoffs.tX vtbtnRarg.lptir-e(uterWiitVel / 2) +: btnRarg.wtVel / 2);lignmoffs.tYg=euterWiHerollg-tbtnRarg.bottom;lignms(allFcroorg=euterWiitVel / backdrop.wtVel    // Hbtn)== "close") l (op-bottom',tbtnRarg.bottom   // Hbtn)== "close") l (op-lpti',tbtnRarg.lpti   // Hbtn)== "close") l (op-wtVel',tbtnRarg.wtVel    ratiSetize ineDplaesta e // Hbtn)=d click hcrolle'p;btionbtn)== "close") p :', tffse; // Hbtn) l ={ ration'text-=lign'nt'cveCla',in

  $wtVelnt'100%',in

  $bottom: 0,in

  $lpti: 0,in

  $transformnt'translbilX('auloffs.tX + 'px)',in

  $transions): lnons' // H{   ;
ttanchor)al ={in

  $transformnt'translbilY('aul- ffs.tY + 'px)',in

  $transions): lnons' // H{   ;
ttbackdrop. l ={ ration'backgrourn-coloro:gfabColor // H});{ilignms.r_options      opactL rationbtn) l ={ ration $transformnt'',in

  $(dtransions): ltransform .2s cubic-bezier(0.550,o0.085,o0.680,o0.530), backgrourn-color 0s linerig.2s' // Han );ect
 ttanchor)al ={in

  $nmo  rflcu: lsicss(' , ration $transformnt'',in

  $(dtransions): ltransform .2s' // Han );e // Hans.r_options      opactL rationonbtn) l ={ ration $nmo  rflcu: lhid
 no Close prere'backgrourn-coloro:gfabColor // H Han );ect
 ttttbackdrop. l ={ rationon $transformnt's(all('auls(allFcroorg+ ')', rationon $transions): ltransform .2s cubic-bezier(0.550,o0.055,o0.675,o0.190)' // H Han );ect
 tttt })u)fve' '> li > an.. l ={ ration $nmopa   /th1lignm/ ti}pti // Handl  HS());
  o! toeD. ') &&
  e(uterWidtopa'h());
.fabTooobarCloeD ,eel headerigL rationlasstooobarToFAB(btn
;ect
     ,  nuterWidtoff 'h());
.fabTooobarCloeD 
;ect
     ,  n     });)) ff ' tigi.fabTooobarCloeD 
;ect
     }pti // Handl v     });)) + ' tigi.fabTooobarCloeD ,eel header object
       unct! ne.   get .cloeDst  })up/ to shetL rationlasssstooobarToFAB(btn
;ect
     , ,  nuterWidtoff 'h());
.fabTooobarCloeD 
;ect
     , ,  n     });)) ff ' tigi.fabTooobarCloeD 
;ect
         // H    
pti: op   ,o100);ect
 } j0);ecte;t
op/** // *tTransformitooobar back)into FAB // *t@paeam p{Ochild}  ochildo// Listochild // */
opssr tooobarToFAB   el headerbtn
  }; //er: btn)== "close") p :'a !}})"    "stL ration, "\\$  // H llignmss('offs.tX,'offs.tY,'s(allFcroor;btionss('uterWiitVel   uterWi inne itVel;btionss('uterWiHerollg=euterWi inne Heroll;btionss('btnitVel   btn)== "close") l (op-wtVel');btionss('btnBottomr  btn)== "close") l (op-bottom'pes.attss('btnLptionsbtn)== "close") l (op-lpti'p;btionss('anchor   btn)fve' '> .btn-floa 
ng')/fvrst    // Horiginnu 
 btn)fve' '> uln..fvrst    // Horigbackdrop   btn)fve' '.fab-backdropo   // HorigfabColor   anchor)al =cbackgrourn-coloro   lignmoffs.tX vtbtnLptir-e(uterWiitVel / 2) +: btnWtVel / 2);lignmoffs.tYg=euterWiHerollg-tbtnBottom;lignms(allFcroorg=euterWiitVel / backdrop.wtVel      ratiSetHide backdrop // Hbtn)re}, {q      crolle'p;btionbtn)== "close") p :',      ); // Hbtn) l ={ ration'backgrourn-coloro:gltranspaeDnf',in

  $transions): lnons' // H{   ;
ttanchor)al ={in

  $transions): lnons' // H{   ;
ttbackdrop. l ={ rationtransformnt's(all(0)', ration'backgrourn-coloro:gfabColor // H});{// H })u)fve' '> li > an.. l ={ rationopa   /th'' // H{   lignms.r_options      opactL rationbackdrop.           // HanSetize ineDplaesta e. ') &&
btn) l ={ ration $'text-=lign'nt'', rationonwtVelnt'', rationonbottom: '', rationonlpti: '', rationono  rflcu: l', rationon'backgrourn-coloro:gl , ration $transformnt'translbil3d('aul- ffs.tX + 'px,0,0)' // H H );ect
 ttanchor)al ={in

  $nmo  rflcu: l , ration $transformnt'translbil3d(0,'auloffs.tY + 'px,0)' // Han );e // Hans.r_options      opactL rationonbtn) l ={ ration $nmtransformnt'translbil3d(0,0,0)', rationon $transions): ltransform .2s' // H Han );ect
 ttttanchor)al ={in

  $nmnmtransformnt'translbil3d(0,0,0)', rationon $transions): ltransform .2s cubic-bezier(0.550,o0.055,o0.675,o0.190)' // H Han );ect
 tt} j20);ect
 } j200);ecte;t
l   // Listen to open andxed = th tioIm ge transions))open andth mat  placeD.fadeInIm ge =        opas.targorOrEl
  }; //origese) {
; // Her: n:Pb,Tas.targorOrEl
 c}}),str
ng')tL rationese)nne   $as.targorOrEl
  // H 
peofier: n:Pb,Tas.targorOrEl
 c}}),ochild')tL rationese)nne   s.targorOrEl  // H 
peofiay:"none, "\\$  // H ltionese)nne)al ={opa   /th)r   ;
ttevese)nnepr       //{opa   /th1re   // H Han         $650,$(this)lase');
       $// H      /   .slideDownSins' // H H{   ;
ttevese)nnepr       //{opa   /th1re   // H Hanan         $1300,$(this)la  se');
       $// H        /   .slsw
ng' $// H      step:'el headernow,   etL rationlassss   x.n     =o100; rationlassss  origgrays(all_s.rt
ng conow/100; rationlassss  origbcrollness_s.rt
ng co150r-e(100r-enow)/1.75y lignm/ ti/ dlller: bcrollness_s.rt
ng <o100)('max-heighhhhhhhhhbcrollness_s.rt
ng co100; rationlassss   ect
     , 

bbunctnowr>='0)('max-heighhhhhhhhh:(this))al ={max-heighhhhhhhhhhhhh"-webkit-filter": "grays(all("+grays(all_s.rt
ng+")" + "bcrollness("+bcrollness_s.rt
ng+"%)",in

  $(d ela      ) "filter": "grays(all("+grays(all_s.rt
ng+")" + "bcrollness("+bcrollness_s.rt
ng+"%)"in

  $(d ela    vp;btion:         veon: op  onveon: op});ecte;t
op/etH l zontal n  straed listth mat  placeD.showS  straedL  or=       opas.targorOrEl
  }; //origese) {
; // Her: n:Pb,Tas.targorOrEl
 c}}),str
ng')tL rationese)nne   $as.targorOrEl
  // H 
peofier: n:Pb,Tas.targorOrEl
 c}}),ochild')tL rationese)nne   s.targorOrEl  // H 
peofiay:"none, "\\$  // H ltionss(' imerle0;max-hese)nne)fve' 'li')/       //lignm/ ti{ translbilXnt"-100px"
 Close pre{l         $0   allignmese)nne)fve' 'li')/ {
        opacugiration r
  Vesv      //lignm/ ti{ opa   /th"1", translbilXnt"0"
 Close pre{l         $800,odelay $ ime    /   .s[60,o10] vp;btion:  imer+vt120  // H e; //vallbtiev     });))  ady       opacugilosetioHfrdcoded .n  straed-list s());
Fireilosetioorigs  straedL  oO   }); c [];cif (tio$ 'ul.s  straed-list r/ {
        op iicugi$(thitioeilignibbelr=''s());
Fire-' + i;$(thitioei (this))=d click ibbel);$(thitioeis  straedL  oO   });.puslr$(thitioeire{s.targor.slul.s  straed-list.' + labpe,$(thitioeire$offs.tnt200,$(thitioeire$callback.slshowS  straedL  o("ul.s  straed-list.' + labpe + '")'{   ;
  tio{   ;
  tios());
Fire(s  straedL  oO   });    ratiSetHfmmerJS, Swipe naviga  op$ // HSetTocum Evr h{
   origswipeLptionsf );
};: oporigswipeRrollg=ee );
};
 // HSetDismiscss(' C);
e   ops ;
ttev'.dismiscas(' )/ {
        opacugiration r
  Ves}fmmer(,{
     onunbind(_dnction $e );
s.attr(}p.bve' 'pan ,eel header object
     uncte.gestur,.poinClaTcli c}})" ocum"obje          ss('  if ($) {
  Vel         bjss('dsrecpns) ='e.gestur,.dsrecpns);belowOrigigss('x ='e.gestur,.deltaX;belowOrigigss('       /X ='e.gestur,.       /Xess.attr('id'u   //       //{ translbilXntx ration: op 'r(}e           $50,ose');
          /   .slideDownQuad' tesect
     , Setiwipe Lptis.attr('id'unctdsrecpns) =Avt4
 + (x >ctithis inne itVele  / 2) ||        /X < -0.75rebject
     on: swipeLptionst    $(this);
r(  $// H      tioiwipe Rrollect
     , er: dsrecpns) =Avt2
 + (x < (-1 * ithis inne itVele  / 2) ||        /X > 0.75rebject
     on: swipeRrollg=et    $(this);
r(veon: op  }$: op  }p.bve' 'panern ,eel header object
       Hamne runcc);
e   op isi    d back)into bl (opal posions)ect
     unctmath.abs(e.gestur,.deltaX) <  iothis))inne itVele  / 2)  L rationlassswipeRrollg=ee );
};
     on: swipeLptionse );
};
     on}$ // Han

uncte.gestur,.poinClaTcli c}})" ocum"obje          ss('  if ($) {
  Vel         bjer: swipeLpti || swipeRroll ('{
        elaorigfullitVel;btion      bjer: swipeLptis(' fullitVel co$this inne itVele e  
his);
      peofia fullitVel co-1 * ithis inne itVele ;nveect
     , 

    //       //{ translbilXntfullitVel,in

  $(d ela  }e           $100,sse');
          /   .slideDownQuad', $ {durat: rationlassss   l headers('max-heighhhhhhhhh    //al =cbor ero,plnons'p;btion:         

    //       //{ e      $0,op=d    .s0,in

  $(d ela      }e           $200,sse');
          /   .slideDownQuad', $ {durat: rationlassss  ssss   l headers('m$this re}, {e e  
his);
            }p;btion:         veon: op  on  }p;btion:       // Handltipeofi{ect
     , 

 this        //{ translbilXnt0,in

  $(d ela  }e           $100,sse');
          /   .slideDownQuad'}p;btion:       // HandltiswipeLptionsf );
};: op  ll, swipeRrollg=ee );
};
     on}$tion:   allignm});{ilignm  H imerle0lignm  H  HVert cal S  straed listth  (tio$ 'ul.s  straed-list   rt cal li')/       //lignmtioeire{ translbilYth"100px"
 Closetioeire{          $0   allignmtio$ 'ul.s  straed-list   rt cal li')/ {
        opacugiratitioei (this))       //lignmtioeire{ opa   /th"1", translbilYnt"0"
 Closetioeire{          $800,odelay $ ime    /   .s[60,o25]o{   ;
  tio:  imer+vt120  // Htio{   lignm  H  HFad  in =e')S(alllignmtio$ '.fade-in.s(all')/       //lignmtioeire{ s(allXth.4, s(allYth.4, translbilXnt-600
 Closetioeire{          $0{   ;
  tio$ '.fade-in')/ {
        opacugiratitioei (this))       //lignmtioeire{ opa   /th"1", s(allXth1, s(allYth1.atranslbilXnt)
 Closetioeire{          $800,o  /   .s[60,o10] vp;btiontio{   ;
e  l   // Listen to open anded = t
setioInpu  $Arr"e oncJSON ochild;e{s.targor,'offs.t,$callbackveectmat  placeD.s());
Firer=       opa    });
  };: oporigdidS());
 =ee );
};

   uterWi =d Evr hL  oene ("s());
",eel headerigL rationdidS());
 =et    $(thi}   lignm  HRow lliminn o!100ms ;
tts.tInClaval(el headerigL rationif(didS());
s('max-heighhhdidS());
 =ee );
};

         ss('uterWiS());
 =euterWi pageYOffs.t +euterWi inne Heroll;b

         able(lignirle0 ; i <
o   });. // If; i++on,{
       ignm  HGet'ds = {
 from  {
  line{
        elaorigvaluer= ds = {
[i];{
        elaorigs.targorr= value.s.targor,
his);
          offs.t   value.offs.t,
his);
          callback   value.callback;bbelowOrigigbjss('hideDnfEse)nne        });)q LisS.targoras.targor);btion      bjer: 'hideDnfEse)nne !}})){ths('max-heighhhhhhhorigese) {
Offs.t   hideDnfEse)nne getBourn
ngCtiDnfRarg(p.top +euterWi pageYOffs.ty lignm/ ti/ dlller: uterWiS());
 > (ese) {
Offs.t uloffs.trebject
     on:   ller: value.dons !}})t   on,{
         on:   ller: n:Pb,Tacallback
 c}}),el heade'on,{
         on:   ll  callback.call(t  /, hideDnfEse)nnep;btion:         

 H 
peofier: n:Pb,Tacallback
 c}}),str
ng')tL rationax-heighhhhhhhorigcallbackFl h conew Fl header$allback
;btion:         

 H gcallbackFl h(hideDnfEse)nnep;btion:         

 H btion:         

 Hvalue.dons nst    $(this);
r('i

 H btion:          
his);
      ve') &&
    ve') &&
$     },o100);ectvall})(// Lisn to/*!
 * pickad   .js v3.5.0,o2014/04/13
 * By Amsul, http://amsul.ca
 * Ho oed s) http://amsul.github.io/pickad   .js
 * Licensed unrg  MIT
 */

       op iee rgory cugi$(thitioAMD. ') &er:  n:Pb,Todefins n}),el heade'
 + defins.amd pmax-heighdefins( 'pickero,p['jq Lis'],ee rgory ci$(thitioNod .js/brows  pfy. ') &peofier:  n:Pb,Toexporn pl}),ochild'opmax-heighmodule.exporn plee rgory( require('jq Lis') ci$(thitioBrows   glob );. ') &peofithis Pickerplee rgory( // Liste
l  el header $ cugi$ss(' uterWi($) {euterWite
ss('      });r=' r      });te
ss(' hs);    r      });.     });Ese)nne e
l
/** /* The picker covst  rgorrthat cre   s a blank picker.
 */
      op PickerCovst  rgor( ELEMENT, NAME, COMPONENT, OPTIONS cugi$(thitioIfrthrae’tinogese) {
,    exi t e picker covst  rgor. ') &er:  !ELEMENT )s, "\\$ PickerCovst  rgor
};: oporimax-heighIS_DEFAULT_THEME =ee );
,b lignm/   tioThe sta e onct e picker. ') &&
  STATEplugin

  $$$$$$$id: ELEMENT.id || 'P' + math.abs( ~~tmath.randomrig*onew Da e(rerp;
     on},b lignm/   tioMerge t e ropdown p=e')ds = {
 priged. ') &&
  SETTINGSpluCOMPONENT ?  init : fst   e  }, COMPONENT.unction(opOPTIONS cu:pOPTIONS || {},b lignm/   tioMerge t e ropdown) trige
eutth t e s.rt
ngs) trige
. ') &&
  CLASSES    init : f  }, PickerCovst  rgor.ktrige
(), SETTINGS.ktrig ),b lignm/   tioThe ese)nne nodeowr=pp r)into ao// Listochild. ') &&
  eELEMENT    r ELEMENT ),b lignm/   tioPseudo picker covst  rgor. ') &&&&&PickerInstancb ='el headers('max-heiiiiiii   exi t  //n    (p;
     on},b lignm/   tioThe picker protot);
. ') &&&&&P ='PickerInstancb.protot);
plugimax-heiiiiiiicovst  rgor:'PickerInstancb,eect
     , 

 node: eELEMENT,
eect
     , 

/** //           *oIneDplaceD binryt  ng //           */ect
     on: s    :'el headers('m$(this);
r('i

 HtioIfrit’tial  ady s    ed,odoinot  ng.$(this);
r('i

 Her:  STATEp + STATE.n     )s, "\\$ P
m$(this);
r('i

 HtioUpd    t e picker sta es.$(this);
r('i

 HSTATE.in.on('plug btion:         

STATE.n     nst   btion:         

STATE. p : =ee );
btion:         

STATE.t);
pluELEMENT.t);

m$(this);
r('i

 HtioCovfirm f   
 sta e, $ n  rt)into text veput(to re}, { UA styl
ngs,
his);
          tio=e')s.t as   adonly(to unbind( keyboaed popup.$(this);
r('i

 HELEMENT.autof   
 luELEMENTpl})getArolleEse)nne()$(this);
r('i

 HELEMENT.  adOnly(= !SETTINGS.editas('belowOrigigbj

 HELEMENT.id   ELEMENT.id || STATE.id$(this);
r('i

 Her:  ELEMENT.t);
 !}$'text' )tL rationax-heighhhhhhhELEMENT.t);
 }$'text'$(this);
r('i

 H bm$(this);
r('i

 HtioCre    aonew picker componsd( utth t e s.rt
ngs.$(this);
r('i

 HP.componsd( conew COMPONENT(P, SETTINGS)bm$(this);
r('i

 HtioCre    t e picker roo( utth a eol er =e')tler unbpaeDrit.$(this);
r('i

 HP.$roo(    r PickerCovst  rgor._.node('diih,ecre   Wr=pp dComponsd((), CLASSES.picker, 'id="'aulELEMENT.id + '_roo(" tas
    ="0"'erp;
     onnnnnnnnnunbpaeDEse)nneRoo(()bm$(this);
r('i

 HtioIfrthrae’tia ablmae ablet e hid
 n veput(ese) {
, cre    t e ese)nne)$(this);
r('i

 Her:  SETTINGS.ablmaeSubminn)tL rationax-heighhhhhhhunbpaeDEse)nneHid
 n()$(this);
r('i

 H bm$(this);
r('i

 HtioPnbpaeDrt e veput(ese) {
)$(this);
r('i

 HunbpaeDEse)nne()bm$(this);
r('i

 HtioI sertrt e roo( as specified in t e s.rt
ngs.$(this);
r('i

 Her:  SETTINGS.containsrn)t$  SETTINGS.containsrn))=pp : fHP.$roo( )$(this);
r('i

 Hpeofi:ELEMENT.afterfHP.$roo( )$m$(this);
r('i

 HtioBie')tle ropdown) omponsd( =e')s.tt
ngs)bind(s.$(this);
r('i

 HP.derL rationax-heighhhhhhhs    :'P.componsd(.deS    ,in

  $(d ela      ) renrg :'P.componsd(.deRenrg ,in

  $(d ela      ) stop $P.componsd(.deS op,in

  $(d ela      )  p : $P.componsd(.deOp :,in

  $(d ela      ) cloeD $P.componsd(.deCloeD,in

  $(d ela      ) se :'P.componsd(.deSe $// H            }).derL rationax-heighhhhhhhs    :'SETTINGS.deS    ,in

  $(d ela      ) renrg :'SETTINGS.deRenrg ,in

  $(d ela      ) stop $SETTINGS.deS op,in

  $(d ela      )  p : $SETTINGS.deOp :,in

  $(d ela      ) cloeD $SETTINGS.deCloeD,in

  $(d ela      ) se :'SETTINGS.deSe $// H            })$m$(this);
r('i

 HtioOncb we’eDrall s.t,$check)tle tlem  in ueD. ') &&
          IS_DEFAULT_THEME =eisU/   DnctionTlem fHP.$roo()cslidren )[ 0 ] )$m$(this);
r('i

 HtioIfrthr ese)nne has autof   
,  p :ct e picker. ') &&
          er:  ELEMENT.autof   
 )tL rationax-heighhhhhhhP. p :()$(this);
r('i

 H bm$(this);
r('i

 HtioTrnstrasse');')tle “s    ” =e')“renrg ” bind(s.$(this);
r('i

 H, "\\$ P.trnstra ),st   h ).trnstra ),renrg ' )$(this);
r('i}, //h    $eect
     , 

/** //           *oRenrg  aonew picker //           */ect
     on: renrg :'el header nd(ireComponsd( s('m$(this);
r('i

 HtioI sertraonew  omponsd( eol er in t e roo( blebox. ') &&
          er:  nd(ireComponsd( s(P.$roo()es);(ecre   Wr=pp dComponsd(() )$(this);
r('i

 HpeofiP.$roo()fve'  '.' + CLASSES.box ).es);(eP.componsd(.nodes(
STATE. p : ) ci$(this);
r('i

 HtioTrnstrast e se');')“renrg ” bind(s.$(this);
r('i

 H, "\\$ P.trnstra ),renrg ' )$(this);
r('i}, //renrg $eect
     , 

/** //           *oDest oy binryt  ng //           */ect
     on: s op:'el headers('m$(this);
r('i

 HtioIfrit’tial  ady s opp d,odoinot  ng.$(this);
r('i

 Her:  !STATE.n     )s, "\\$ P
m(this);
r('i

 HtioTler cloeDct e picker. ') &&
          P.cloeD(ci$(this);
r('i

 HtioRt    )t e hid
 n field.$(this);
r('i

 Her:  P._hid
 n )tL rationax-heighhhhhhhP._hid
 n/paeDnfNod .re}, {qslid  P._hid
 n )$(this);
r('i

 H bm(this);
r('i

 HtioRt    )t e roo()$(this);
r('i

 HP.$roo( re}, {e bm(this);
r('i

 HtioRt    )t e veput( trig, re}, { t e sgor;')ose", =e')uns
  m(this);
r('i

 Htiothr evr hso(afterraotigi ableIE - s.e `P.cloeD`))$(this);
r('i

 H$ELEMENT.  }, {q      CLASSES.veput())      Dse"( NAME )$(this);
r('i

 Hs.r_options  l headers('max-heighhhhhhhhh

 H$ELEMENT. ff  '.' + STATE.id )$(this);
r('i

 H  j0)bm(this);
r('i

 HtioRtsgor;rthr ese)nne sta e // HHHHHHHHHHHHHELEMENT.t);
 }$STATE.t);
$(this);
r('i

 HELEMENT.  adOnly(= e );
b$(this);
r('i

 HtioTrnstrast e se');')“s op” bind(s.$(this);
r('i

 HP.trnstra ),stop' tbm(this);
r('i

 HtioRtset t e picker sta es.$(this);
r('i

 HSTATE.in.on('plug btion:         

STATE.n     nse );
b$(this);
r('i

 H, "\\$ P
s);
r('i

 H}, //h op$eect
     , 

/** //           *oOp : up t e picker //           */ect
     on:  p : $el header dontGlleF   
 )tL $(this);
r('i

 HtioIfrit’tial  ady  p :,odoinot  ng.$(this);
r('i

 Her:  STATE. p : ) , "\\$ P
m(this);
r('i

 Htiohdd tle “crolle”  trig)$(this);
r('i

 H$ELEMENT.=d click  CLASSES.crolleg)$(this);
r('i

 Haria( ELEMENT, 'exp=e'Dd', tffs tbm(this);
r('i

 Htio* A Firefox bug, wler `es);` has `o  rflcu:hid
 n`, resown pinm(this);
r('i

 Htio  kill
ng transions)s :(. So add tle “ p :ed” sta e on t e nextotigi)$(this);
r('i

 Htio  Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289$(this);
r('i

 Hs.r_options  l headers('mmax-heighhhhhhhhh

 Htiohdd tle “ p :ed”  trig(to t e picker roo()$(this);
r('i

 HHHHHP.$roo( =d click  CLASSES. p :edg)$(this);
r('i

 H

 Haria( P.$roo([0],''hid
 no,       tbm(this);
r('i

 H  j0 tbm(this);
r('i

 HtioIfrwe ha   to gllegf   
, bie')tle ese)nne and doc bind(s.$(this);
r('i

 Her:  dontGlleF   
 !}})      )tL $(this);
r('i

 H

 Htioize i( as  p :)$(this);
r('i

 HHHHHSTATE. p : =et   b$(this);
r('i

 H

 HtioPnbind( t e p ge from s());
 ng.$(this);
r('i

 H

 Her:  IS_DEFAULT_THEME s('max-heighhhhhhhhh

 HHHHH hs);.$(this);
r('i

 H

 HHHHHHHHHal = c   rflcu',''hid
 no ))$(this);
r('i

 H

 HHHHHHHHHal = cp=d    -croll',''+=' + getS());
ba itVele  )$(this);
r('i

 H

 H bm(this);
r('i

 H

 HtioPrig(f   
 to t e roo( ese)nne’ti// Listochild. ') &&
  r('i

 H

 Htio* Workarourn ableiOS8 to br
ng t e picker’tiroo( into view)$(this);
r('i

 HHHHHP.$roo( eq(0s)f   
  bm(this);
r('i

 H

 HtioBie')tle r    });tbind(s.$(this);
r('i

 HHHHH$     });)oer ' tigi.' + STATE.id + ' f   
in.' + STATE.id,'el header nvsd( s('m$(this);
r('i

 HHHHHHHHHss('   get   nvsd(.   getm$(this);
r('i

 HHHHHHHHHtioIfrthr    get onct e nvsd( itinot)tle ese)nne, cloeDct e picker picker. ') &&
          

 H

 Htio* Don’t woristabout( ticks blef   
ins on t e roo( because .onse r n’t bubs(' up.$(this);
r('i

 H

 H

 Htio  Also, ableFirefox, =( tick on ar `ds = {` ese)nne bubs('s up dsrecply$(this);
r('i

 H

 H

 Htio  to t e    . So make#sureo ir    get watn't t e    . ') &&
          

 H

 Htio* In Firefox stopPropaga  opac(oactn’t unbind( croll- tigi evr hsofrom bubs(
ng,in

  $(d ela      ) 

 Htio  whigincausesct e picker to unexpargedly(cloeDcwler croll- tigi
ng it. So makein

  $(d ela      ) 

 Htio  sureo ir bind( watn’t a croll- tigi. ') &&
          

 H

 Her:  n  get !luELEMENTp&& n  get !lur    });t&& nvsd(.whigin!lu3 s('m$(this);
r('i

 HHHHHHHHH

 HtioIfrthr    get wat)t e hol er that c   rt)t e s()e :,in

  $(d ela      ) HHHH

 Htiokeep)tle ese)nne f   
;')to maintain tas
    )$(this);
r('i

 H

 HHHHHHHHHP.cloeD('   get  }})P.$roo()cslidren )[0] )$(this);
r('i

 H

 HHHHH bm(this);
r('i

 H

 H}).der 'key ifn.' + STATE.id,'el header nvsd( s('m$(this);
r('i

 HHHHHHHHHss(in

  $(d ela      ) HHHH

 HtioGet t e keycode)$(this);
r('i

 H

 HHHHHHHHHkeycode   nvsd(.keyCode,m$(this);
r('i

 HHHHHHHHH

 HtioTranslbil that to aos.targ op change)$(this);
r('i

 H

 HHHHHHHHHkeycodeToM, { =eP.componsd(.key[Hkeycode ],m$(this);
r('i

 HHHHHHHHH

 HtioGrabrthr    get)$(this);
r('i

 H

 HHHHHHHHH   get   nvsd(.   getm$in

  $(d ela      ) 

 HtioOn escape, cloeDct e picker and gllegf   
. ') &&
          

 H

 Her:  keycode  = 27 s('max-heighhhhhhhhh

 HHHHHHHHHP.cloeD(' ffs tbeighhhhhhhhh

 HHHHHHHHH bm$(this);
r('i

 H  ) 

 HtioCheck)ifrthrae isic keyi    )nne ble“veCla” keyunbss on t e ese) {
)$(this);
r('i

 HHHHHHHHHpeofier:  n  get  } P.$roo([0]
 + (HkeycodeToM, { || keycode  = 13 s(s('m$(this);
r('i

 HHHHHHHHH

 HtioPnbind( t e ropdown)crolon to stop p ge     )nne)$(this);
r('i

 H

 HHHHHHHHHnvsd(.unbind(Dnctionnsm$(this);
r('i

 HHHHHHHHH

 HtioTrnstrast e keyi    )nne crolon)$(this);
r('i

 H

 HHHHHHHHHer:  keycodeToM, { s('max-heighhhhhhhhh

 HHHHHHHHHHHHHPickerCovst  rgor._.trnstra )P.componsd(.key.go, P, [HPickerCovst  rgor._.trnstra )keycodeToM, { s(] )$(this);
r('i

 H

 HHHHHHHHH bm(this);
r('i

 H

 HHHHH

 HtioOn “veCla”,)ifrthr hrollrolled item isn’t dicas('d,'set t e valuer=e') toeD. ') &&
                      peofier:  !P.$roo()fve'  '.' + CLASSES.hrollrolled ))}
        CLASSES.dicas('d s(s('max-heighhhhhhhhh

 HHHHHHHHHHHHHP.s.t ),s.targ', P.componsd(.item.hrollroll ).cloeD(ci(this);
r('i

 H

 HHHHHHHHH bs);
r('i

 H

 HHHHHHHHH bm$(this);
r('i

 HHHHHHHHHtioIfrthr    get i
eutthin t e roo( =e')“veCla” i
eunbss'd,$(this);
r('i

 HHHHHHHHHtiopnbind( t e ropdown)crolon =e')trnstras=( tick on thr    get ivstead.$(this);
r('i

 HHHHHHHHHpeofier:  $.contains( P.$roo([0],'   get a' + keycode  = 13 s('max-heighhhhhhhhh

 HHHHHHHHHnvsd(.unbind(Dnctionnsmax-heighhhhhhhhh

 HHHHHHHHH   get)clicknsmax-heighhhhhhhhh

 HHHHH bs);
r('i

 H

 HHHHH})$(this);
r('i

 H bm(this);
r('i

 HtioTrnstrast e se');')“ p :” bind(s.$(this);
r('i

 H, "\\$ P.trnstra ), p :' )$(this);
r('i}, // p :$eect
     , 

/** //           *oCloeDct e picker //           */ect
     on: cloeD $el header glleF   
 )tL $(this);
r('i

 HtioIfrwe ne;')to gllegf   
, do i( before chang
ng sta es.$(this);
r('i

 Her:  glleF   
 )tL (this);
r('i

 H

 Htio....ah yes! It would’legbe n ve$ {durateutthout(=( razy woriarourn ableIE :| (this);
r('i

 H

 HtioThe f   
 i
etrnstra;')*after*ct e cloeDchas $ {duratd -ncaus
ng it (this);
r('i

 H

 Htioto bp : again. So uns
   =e')rebie')tle eind( =t t e nextotigi)$(this);
r('i

 HHHHHP.$roo() ff  'f   
.toOp :' ) eq(0s)f   
  b(this);
r('i

 HHHHHs.r_options  l headers('max-heighhhhhhhhh

 HHHHHP.$roo() n  'f   
.toOp :', }fineeF   
ToOp :Evsd( sbs);
r('i

 H

 HHHHH} j0 tbr('i

 H

 HHHHH}bm(this);
r('i

 HtioRt    )t e “crolle”  trig)$(this);
r('i

 H$ELEMENT.  }, {q      CLASSES.crolleg)$(this);
r('i

 Haria( ELEMENT, 'exp=e'Dd',       tbm(this);
r('i

 Htio* A Firefox bug, wler `es);` has `o  rflcu:hid
 n`, resown pinm(this);
r('i

 Htio  kill
ng transions)s :(. So rt    )t e “ p :ed” sta e on t e nextotigi)$(this);
r('i

 Htio  Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289$(this);
r('i

 Hs.r_options  l headers('mmax-heighhhhhhhhh

 HtioRt    )t e “ p :ed” =e')“f   
;'”  trig(from t e picker roo()$(this);
r('i

 HHHHHP.$roo(   }, {q      CLASSES. p :edg+ ' ' + CLASSES.f   
;'))$(this);
r('i

 H

 Haria( P.$roo([0],''hid
 no, tffs tbm(this);
r('i

 H  j0 tbm(this);
r('i

 HtioIfrit’tial  ady cloeDd,odoinot  ngi  rD. ') &&
          er:  !STATE. p : ) , "\\$ P
m(this);
r('i

 Htioize i( as cloeDd.$(this);
r('i

 HSTATE. p : =ee );
bm(this);
r('i

 Htiohl ow t e p ge to s());
. ') &&
          er:  IS_DEFAULT_THEME s('max-heighhhhhhhhh

 H hs);.$(this);
r('i

 H

 HHHHHal = c   rflcu',''o ))$(this);
r('i

 H

 HHHHHal = cp=d    -croll',''-=' + getS());
ba itVele  )$(this);
r('i

 H}bm(this);
r('i

 HtioUnbie')tle r    });tbind(s.$(this);
r('i

 H$     });)off  '.' + STATE.id )$m(this);
r('i

 HtioTrnstrast e se');')“cloeD” bind(s.$(this);
r('i

 H, "\\$ P.trnstra ),cloeD' )$(this);
r('i}, //cloeD$eect
     , 

/** //           *oClerigt e values //           */ect
     on: clear:'el header)ds = {
 s('max-heighhhhhhhhh, "\\$ P.s.t ),clearo, null,)ds = {
 s$(this);
r('i}, //clear$eect
     , 

/** //           *oize soin.o ng //           */ect
     on: se :'el header .o ng, value,)ds = {
 s('mmax-heighhhhhhhhhss(' o ngIte),( o ngValue,$(this);
r('i

 H

 H o ngIsOchild    iisPlainOchildr .o ng ),$(this);
r('i

 H

 H o ngOchild    o ngIsOchild ? .o ng :ug bm(this);
r('i

 HtioMake#sureowe ha   ucas('
o   });.m(this);
r('i

 Hds = {
    o ngIsOchild  +  iisPlainOchildr valuer) ? valuer:Hds = {
 || {}bm(this);
r('i

 Her:  no ng )('mmax-heighhhhhhhhh

 HtioIfrthr  o ng isn’t antochild, make#i( ons.$(this);
r('i

 H

 Her:  ! o ngIsOchild s('max-heighhhhhhhhh

 HHHHH o ngOchild[  o ng ]   value$(this);
r('i

 H

 H bm(this);
r('i

 H

 HtioGo t roughrthr  o ngs oncitem
 to set)$(this);
r('i

 H

 Hable(' o ngIte) in t  ngOchild s('m$(this);
r('i

 HHHHHHHHHtioGrabrthr valuerofrthr  o ng)$(this);
r('i

 H

 HHHHH o ngValue    o ngOchild[  o ngIte) ]m$(this);
r('i

 HHHHHHHHHtioFvrst,)ifrthr item     oso=e')tleae’tia value,)ne rue)$(this);
r('i

 H

 HHHHHer:  no ngIte) in P.componsd(.item s('max-heighhhhhhhhh

 HHHHHHHHHer:  no ngValue   = unrgfinsd s( o ngValue   nullmax-heighhhhhhhhh

 HHHHHHHHHP.componsd(.s.t ) o ngIte),( o ngValue,)ds = {
 s$(this);
r('iiiiiiiiiiiii bm(this);
r('i

 H

 HHHHHtioTler,$check)topupd   )tle ese)nne valuer=e')broadcast(=( hange)$(this);
r('i

 H

 HHHHHer:  no ngIte) }}),s.targ' || no ngIte) }}),clearo s('max-heighhhhhhhhh

 HHHHHHHHH$ELEMENT.max-heighhhhhhhhh

 HHHHHHHHHHHHHval( no ngIte) }}),clearo ?''o :'P.g.t ) o ngIte),(SETTINGS.ablmae s(s.max-heighhhhhhhhh

 HHHHHHHHHHHHHtrnstra ),change' )$(this);
r('iiiiiiiiiiiii bs);
r('i

 H

 HHHHH}mmax-heighhhhhhhhh

 HtioRtnrg  aonew picker)$(this);
r('i

 HHHHHP.renrg ()$(this);
r('i

 H bmeighhhhhhhhh

 HtioWh :ct e in.on( isn’t mu ed,otrnstrasse');')“set” bind(sr=e')prig(t e ` o ngOchild`.$(this);
r('i

 H, "\\$ o   });.mu ed ?'P :'P.trnstra ),sel','t  ngOchild s$(this);
r('i}, //setm$in

  $(d ela/** //           *oGze soin.o ng //           */ect
     on: ge :'el header .o ng, ablmae s(L $(this);
r('i

 HtioMake#sureo irae’tisoin.o ng)to get)$(this);
r('i

 H.o ng)   o ng || 'value'bm(this);
r('i

 HtioIfra picker sta e     os,    exi t ae)$(this);
r('i

 Her:  STATE[  o ng ] !  null s('max-heighhhhhhhhh

 H   exi STATE[  o ng ]br('i

 H

 HHHHH}bm(this);
r('i

 HtioRt exi t e submisslon value,)ifrthae)$(this);
r('i

 Her:  .o ng) = 'valueSubmino s('max-heighhhhhhhhh

 Her:  P._hid
 n )tL rationax-heighhhhhhh

 H   exi P._hid
 n/value$(this);
r('i

 H

 H b(this);
r('i

 H

 H.o ng)  'value'br('i

 H

 HHHHH}bm(this);
r('i

 HtioRt exi t e value,)ifrthae)$(this);
r('i

 Her:  .o ng) = 'valueo s('max-heighhhhhhhhh

 H   exi ELEMENT.value$(this);
r('i

 H}bm(this);
r('i

 HtioCheck)ifra  omponsd( item     os,    exi t ae)$(this);
r('i

 Her:   o ng in P.componsd(.item s('max-heighhhhhhhhh

 Her:  n:Pb,Toablmae }}),str
ng' )tL rationax-heighhhhhhh

 Hss(' o ngValue   P.componsd(.g.t ) o ng )$(this);
r('iiiiiiiiiiiii   exi t  ngValue ?max-heighhhhhhhhh

 HHHHHHHHHPickerCovst  rgor._.trnstra max-heighhhhhhhhh

 HHHHHHHHHHHHHP.componsd(.ablmae
.toStr
ng,in

  $(d ela      ) HHHH

 HHHHHP.componsd(,in

  $(d ela      ) HHHH

 HHHHH[oablmae,( o ngValue ]br('i

 H

 HHHHHHHHHHHHHHHHHcu:p''br('i

 H

 HHHHHHHHH b(this);
r('i

 H

 H   exi P.componsd(.g.t ) o ng )$(this);
r('iiiii 
his);
      v, //getm$iin

  $(d ela/** //           *oBie')bind(sron thr  h
ngs.$(this);
r('i
*/ect
     on:  n:'el header .o ng, in.on(, inClapal s('mmax-heighhhhhhhhhss(' o ngName   o ngMn.on(,$(this);
r('i

 H

 H o ngIsOchild    iisPlainOchildr .o ng ),$(this);
r('i

 H

 H o ngOchild    o ngIsOchild ? .o ng :ug bm(this);
r('i

 Her:  no ng )('mmax-heighhhhhhhhh

 HtioIfrthr  o ng isn’t antochild, make#i( ons.$(this);
r('i

 H

 Her:  ! o ngIsOchild s('max-heighhhhhhhhh

 HHHHH o ngOchild[  o ng ]   in.on($(this);
r('i

 H

 H bm(this);
r('i

 H

 HtioGo t roughrthr  o ngs to bie')to)$(this);
r('i

 H

 Hable(' o ngName in t  ngOchild s('m$(this);
r('i

 HHHHHHHHHtioGrabrthr in.on( ofrthr  o ng)$(this);
r('i

 H

 HHHHH o ngMn.on(    o ngOchild[  o ngName ]m$(this);
r('i

 HHHHHHHHHtioIfrit wat)an inClapal bie' ng, prgfixrue)$(this);
r('i

 H

 HHHHHer:  inClapal s('m(this);
r('i

 H

 HHHHHHHHH o ngName }),_' +  o ngName$(this);
r('iiiiiiiiiiiii bm(this);
r('i

 H

 HHHHHtioMake#sureo ir    ngi n.on('pc);
e   op     os)$(this);
r('i

 H

 HHHHHSTATE.in.on('[  o ngName ] }$STATE.in.on('[  o ngName ] || []m$(this);
r('i

 HHHHHHHHHtiohdd tle in.on( to t e relaollegin.on( c);
e   op)$(this);
r('i

 H

 HHHHHSTATE.in.on('[  o ngName ].puslrH o ngMn.on( )$(this);
r('i

 H

 H br('iiiiiiiiiiiii bm(this);
r('i

 H, "\\$ P
s);
r('i

 H}, //op$ iin

  $(d ela/** //           *oUnbie')bind(sron thr  h
ngs.$(this);
r('i
*/ect
     on:  ff:'el headers('max-heiiiiiiiiiiiligni,' o ngName $(this);
r('i

 H

 Hname
   arg  });s $(this);
r('i

 Hable('irle0,Hname
Coud( coname
. // If; i <Hname
Coud(; i +vt1 s('m(this);
r('i

 H

 H o ngName })name
[i]br('i

 H

 HHHHHHHHHer:  no ngName in STATE.in.on('ps('m(this);
r('i

 H

 HHHHHdeurateSTATE.in.on('[no ngName]br('i

 H

 HHHHHHHHH br('iiiiiiiiiiiii br('iiiiiiiiiiiii, "\\$ P
s);
r('i

 H}, iin

  $(d ela/** //           *oFirer ffgin.on( bind(s.$(this);
r('i
*/ect
     on: trnstra:'el header name  ose"ps('m(this);
r('i

 Hlign_trnstras='el header nameps('m(this);
r('i

 H

 Horigin.on(L  or= STATE.in.on('[ name ]m(this);
r('i

 H

 Her:  in.on(L  ors('m(this);
r('i

 H

 HHHHHin.on(L  o.maps  l headergin.on( s('max-heighhhhhhhhh

 HHHHHHHHHPickerCovst  rgor._.trnstra )in.on(, P, [Hose"p] )$(this);
r('i

 H

 HHHHH )$(this);
r('i

 H

 H br('iiiiiiiiiiiii br('iiiiiiiiiiiii_trnstra ),_' + namepsbr('iiiiiiiiiiiii_trnstra )namepsbr('iiiiiiiiiiiii, "\\$ P
s);
r('i

 H} //trnstra
r('i

 H} //PickerInstancb.protot);
{ilignm ** //   * Wr=p t e picker hol er componsd(s together)$(this*/ect
       op cre   Wr=pp dComponsd(() 'm$(this);
tioCre    aopicker wr=pp r)hol er$(this);
, "\\$ PickerCovst  rgor._.node( 'diih,iin

  $(d ela/ioCre    aopicker wr=pp r)nodein

  $(d elaPickerCovst  rgor._.node( 'diih,iin

  $(d ela ela/ioCre    aopicker frame$(this);
r('iiiiiPickerCovst  rgor._.node( 'diih,iin

  $(d ela ela ela/ioCre    aopicker box nodein

  $(d elar('iiiiiPickerCovst  rgor._.node( 'diih,iin

  $(d ela ela ela ela/ioCre    t e componsd(s nodes)$(this);
r('i

 H

 HHHHHP.componsd(.nodes(
STATE. p : ),iin

  $(d ela ela ela ela/ioThe picker box  trigin

  $(d ela ela ela elaCLASSES.boxin

  $(d ela ela ela),iin

  $(d ela ela elatioPicker wr=p  trigin

  $(d ela ela elaCLASSES.wr=pin

  $(d ela ela),iin

  $(d ela elatioPicker frame  trigin

  $(d ela elaCLASSES.frame$(this);
r('i),iin

  $(d elatioPicker hol er ctrigin

  $(d elaCLASSES.hol er$(this);
)atiend, "\\$$(thi} //cre   Wr=pp dComponsd(
{ilignm ** //   * PnbpaeDrt e veput(ese) {
 utth all bie' ngs)$(this*/ect
       op unbpaeDEse)nne() 'm$(this);
$ELEMENT.min

  $(d elatioSgor;rthr picker ose"pby  omponsd( name)$(this);
r('iose"(NAME, P).min

  $(d elatiohdd tle “veput”  trig(name)$(this);
r('i=d click CLASSES.veput).min

  $(d elatioRt    )t e tas
    )$(this);
r('i== "cltas
    ', -1).min

  $(d elatioIfrthrae’tia `ose")value`,pupd   )tle valuerofrthr ese) {
)$(this);
r('ival( $ELEMENT.ose"('valueo) ?max-heighhhhhhhhhP.g.t ,s.targ', SETTINGS.ablmae) : rationlassss  ssELEMENT.value$(this);
r('i)b lignm/   tioOnly(bie')key ifn)bind(srifrthr ese)nne isn’t editas(')$(this);
er:  !SETTINGS.editas(' s('m$(this);
r('i$ELEMENT.min

  $(d ela/   tioOn f   
/click, f   
 onto t e roo( to bp : it up.$(this);
r('i

 H n  'f   
.' + STATE.id + '  tigi.' + STATE.id,'el header nvsd( s('m(this);
r('i

 HHHHHnvsd(.unbind(Dnctionnsmax-heighhhhhhhhh

 HP.$roo( eq(0s)f   
  beighhhhhhhhh

 H}).min

  $(d ela/   tioHfinee keyboaed nvsd( based s) thr picker be ngi p :edgor)noe)$(this);
r('i

 Hder 'key ifn.' + STATE.id,'}fineeKey ifnEvsd( sbs);
r('i}b lignm/   tioUpd    t e ariai== "ibu es.$(this);
aria(ELEMENT, 'm(this);
r('ihaspopup:st   em(this);
r('iexp=e'Dd
       $// H          adonly
       $// H        ifns:lELEMENT.id + '_roo(' // H Han )
r('i}b lignm ** //   * PnbpaeDrt e roo( picker ese) {
 utth all bie' ngs)$(this*/ect
       op unbpaeDEse)nneRoo(()('m$(this);
P.$roo( min

  $(d eladerL in

  $(d ela/   tioFbleiOS8)$(this);
r('i

 Hkey ifn:'}fineeKey ifnEvsd(,iin

  $(d ela elatioWh :csoin.o ng)utthin t e roo( is f   
;', stop from bubs(
ngin

  $(d ela elatioto t e     =e')re    )t e “f   
;'” sta e from t e roo()$(this);
r('i

 Hf   
in:'el header nvsd( s('m(this);
r('i

 HHHHHP.$roo(   }, {q      CLASSES.f   
;'))$(this);
r('i

 H

 Hnvsd(.stopPropaga  opacbeighhhhhhhhh

 H},iin

  $(d ela elatioWh :csoin.o ng)utthin t e roo( eol er is  tigi;', stop it (this);
r('i

 Htiofrom bubs(
ng to t e    . (this);
r('i

 H'mo 
;'ifn) tigi':'el header nvsd( s('mm(this);
r('i

 H

 Horig   get   nvsd(.   getm$(this);
r('i

 HHHHHtioMake#sureo ir    get i
n’t t e roo( eol er so i( can bubs(' up.$(this);
r('i

 H

 Her:  n  get !luP.$roo()cslidren )[ 0 ] )('m$(this);
r('i

 HHHHHHHHHnvsd(.stopPropaga  opacbin

  $(d ela ela ela ela/io*oFblemo 
;'ifn)bind(s,$cancbl t e ropdown)crolon in or er toin

  $(d ela ela ela ela/ioonunbind($cage
euhrae f   
 i
eshifoed s)to nit apal ese) {
gin

  $(d ela ela ela elatio  wh : us
ng t  ngs like#// Listmobi('
oroMagnificPopup (ref: #249 & #120s.max-heighhhhhhhhh

 HHHHHtio  Also, ableFirefox, r n’t unbind($crolon s) thr `ds = {` ese)nne)$(this);
r('i

 H

 HHHHHer:  nvsd(. cli c}H'mo 
;'ifn'
 + !$  n  get ).i = cveput,os.targ, textaeDa, button,)ds = {' )s('m$(this);
r('i

 HHHHHHHHH

 Hnvsd(.unbind(Dnctionnsm$(this);
r('i

 HHHHHHHHH

 HtioRe-f   
 onto t e roo( so t ae ueDrs can  tick away$(this);
r('i

 H

 H

 H

 Htiofrom  se) {
g f   
;')utthin t e picker. ') &&
          

 H

 HHHHHP.$roo( eq(0s)f   
  beighhhhhhhhh

 HHHHHHHHH bs);
r('i

 H

 HHHHH}mr('i

 H

 HHHHH}mr('i

 H

 H}).min

  $(d elatiohdd/re    )t e “n  get”  trig(on f   
r=e')blur. ') &&
      derL rationax-heighhhf   
:'el headers('max-heiiiiiiiiiiiiiii$ELEMENT.=d click  CLASSES.n  get )beighhhhhhhhh

 H},ieighhhhhhhhh

 Hblur:'el headers('max-heiiiiiiiiiiiiiii$ELEMENT.  }, {q      CLASSES.n  get )beighhhhhhhhh

 H}mr('i

 H

 H}).min

  $(d elatioOp :ct e pickerr=e')adjust t e roo( “f   
;'” sta e ') &&
      der 'f   
.toOp :', }fineeF   
ToOp :Evsd( s.min

  $(d elatioIfrthrae’tia  tick on ar crolonas(' ese)nne, caristout(t e ac  });.m(this);
r('ioer ' tigi',''[ose")pick], [ose")nav], [ose")clear], [ose")close]',  l headers('mmax-heighhhhhhhhhss('    get   $  no s ),$(this);
r('i

 H

 H   getDse" co$t  get)ose"(),$(this);
r('i

 H

 H   getDicas('d co$t  get)}
        CLASSES.navDicas('d s(||o$t  get)}
        CLASSES.dicas('d s,iin

  $(d ela ela elatio*oFbleIE, non-f   
as(' ese)nnes can be ac  v' ese)nnes a
euellmax-heighhhhhhhhh

 Htio  (http://stack   rflcu.com/a/2684561s.max-heighhhhhhhhh

 HarolleEse)nne })getArolleEse)nne()$(this);
r('i

 H

 HarolleEse)nne })arolleEse)nne  + (HarolleEse)nne. cli ||oarolleEse)nne.href tbm(this);
r('i

 HtioIfrit’tidicas('d or)noeo ng inside isicrollely(f   
;', re-f   
 t e ese) {
)$(this);
r('i

 Her:  n  getDicas('d ||oarolleEse)nne
 + !$.contains( P.$roo([0],'arolleEse)nne
s(s('max-heighhhhhhhhh

 HP.$roo( eq(0s)f   
  beighhhhhhhhh

 H}bm(this);
r('i

 HtioIfrsoin.o ng)i
esup rficially( hanged,pupd   )tle `hrollroll` based s) thr `nav`.$(this);
r('i

 Her:  !   getDicas('d && n  getDse".nav(s('max-heighhhhhhhhh

 HP.s.t ),hrollroll', P.componsd(.item.hrollroll, ' nav: n  getDse".nav(} )$(this);
r('i

 H}bm(this);
r('i

 HtioIfrsoin.o ng)i
epigi;', set `s.targ` thrr cloeDcutth f   
. ') &&
          peofier:  !   getDicas('d && 'pick' in t  getDse" s('max-heighhhhhhhhh

 HP.s.t ),s.targ', n  getDse".pick )$(this);
r('i

 H}bm(this);
r('i

 HtioIfra)“clear” button i
eunbss'd, empty)tle valuesr=e') toeDcutth f   
. ') &&
          peofier:  n  getDse".clear s('max-heighhhhhhhhh

 HP.clear().cloeD(' ffs tbeighhhhhhhhh

 H}bm(this);
r('i

 Hpeofier:  n  getDse".closeps('m(this);
r('i

 H

 HP.cloeD(' ffs tbeighhhhhhhhh

 H}bm(this);
r('i})atiP.$roo(bm(this);
aria( P.$roo([0],''hid
 no, tffs tb

 H}bmm(this/** //    * PnbpaeDrt e hid
 n veput(ese) {
 along)utth all bie' ngs)$(thiss*/ect
       op unbpaeDEse)nneHid
 n()('mmax-heighss('namemmax-heigher:  SETTINGS.hid
 nName }}})t   ps('m(this);
r('iname })ELEMENT.name$(this);
r('iELEMENT.name }),' // H Han  // H Hanpeofi{ect
     , 

name })[beighhhhhhhhh

 Hn:Pb,ToSETTINGS.hid
 nPrgfixr}}),str
ng' ?oSETTINGS.hid
 nPrgfixr:p'',$(this);
r('i

 Hn:Pb,ToSETTINGS.hid
 nSuffixr}}),str
ng' ?oSETTINGS.hid
 nSuffixr:p'_submino$(this);
r('i]ect
     , 

name })name[0]
+iELEMENT.name + name[1] // H Han  $(this);
P._hid
 n   $ ect
     , 

'<veput(' +ect
     , 

'n:Pb=hid
 n ' +ein

  $(d elatioCre    t e name us
ng t e bl (opal veput’s utth a prgfixr=e')suffix. ') &&
      'name="'aulname + '"' +ein

  $(d elatioIfrthr ese)nne has a value,)ne rt e hid
 n valuer=
euell. ') &&
       max-heighhhhhhhhh$ELEMENT.ose"('valueo) ||oELEMENT.value ?max-heighhhhhhhhh

 H' value="'aulP.g.t ,s.targ', SETTINGS.ablmaeSubmin) + '"' : rationlassss  ssss  ''br('i

 H

 H) +ect
     , 

'>'br('i

 H)[0]m$(this);
$ELEMENT.min

  $(d elatioIfrthr value  hanges,pupd   )tle hid
 n veput(utth t e correcpoablmae.m(this);
r('ioer,change.' + STATE.id,'el headers('m(this);
r('i

 HP._hid
 n/value })ELEMENT.value ?max-heighhhhhhhhh

 HP.g.t ,s.targ', SETTINGS.ablmaeSubmin) : rationlassss  ssss  ''br('i

 H

 H})b lignm/   tioI sertrt e hid
 n veput(as specified in t e s.rt
ngs.$(this);
er:  SETTINGS.containsrn)t$  SETTINGS.containsrn))=pp : fHP._hid
 n )$(this);
peofi:ELEMENT.afterfHP._hid
 n )$(thi}b lignm ioFbleiOS8)$(thi      op }fineeKey ifnEvsd(r nvsd( s('mm(this);
ss('keycode   nvsd(.keyCode,m$(this);
r('itioCheck)ifrons ofrthr deuratekeys wat)unbss'd.m(this);
r('iisKeycodeDeurate= /^(8|46)$/.test(keycode) lignm/   tioFblesoin   asop IE clearsrt e veput(valueron “vscape”.$(this);
er:  keycode  = 27 s('max-heighhhhhP.cloeD(ci(this);
r('i, "\\$ e );
btion:   } lignm/   tioCheck)ifr`space` or)`deurat` wat)unbss'd blet e pickerris cloeDd utth a keyi    )nne.$(this);
er:  keycode  = 32 ||oisKeycodeDeurate||o!STATE. p : && P.componsd(.key[keycode] )('m$(this);
r('itioPnbind( itofrom    
ng t e p ge =e')bubs(
ng to    . (this);
r('invsd(.unbind(Dnctionnsmax-heighhhhhnvsd(.stopPropaga  opacbin

  $(d elatioIfr`deurat` wat)unbss'd, clear)tle valuesr=e') toeDct e picker. ') &&
      tioOthrawise  p :ct e picker. ') &&
      er:  isKeycodeDeurates('mP.clear().cloeD()  
his);
      peofia P. p :()(veon: op  }$: op}b lignm ioSbpaeaoed ableIE$(thi      op }fineeF   
ToOp :Evsd(r nvsd( s('mm(this);
tioSgop)tle evsd( from propaga  ng to t e    . (this);
nvsd(.stopPropaga  opacbin

  $(dtioIfrit’tia f   
rnvsd(, add tle “f   
;'”  trig(to t e roo(.$(this);
er:  nvsd(. cli c}H'f   
' )tL rationax-heiP.$roo( =d click  CLASSES.f   
;'))$(this);
} lignm/   tioAe')tler fopally  p :ct e picker. ') &&
  P. p :()$(thi}b lignm ioRt exi aonew picker instancb.lignm, "\\$ new PickerInstancb()$} //PickerCovst  rgor
};
/** /* The ropdown) trige
e=e')prgfixrtopuse ablet e HTML) trige
. '*/ePickerCovst  rgor.ktrige
s='el header prgfixr)tL ratiprgfixr=iprgfixr|| 'pickerolignm, "\\$ 'mm(this);
picker:iprgfix,$(this);
 p :ed:iprgfix + '-- p :ed',$(this);
f   
;':iprgfix + '--f   
;'h,iin

  $(dinpu  $prgfix + '__inpu ',$(this);
arolle $prgfix + '__inpu --arolle',$(this);
n  get $prgfix + '__inpu --n  geth,iin

  $(deol er $prgfix + '__eol erh,iin

  $(dframe $prgfix + '__frame',$(this);
wr=p $prgfix + '__wr=ph,iin

  $(dbox $prgfix + '__box'$(thi}b} //PickerCovst  rgor.ktrige

};
/** /* Check)ifrthr ropdown)tlem  is be ngius'd.m(*/
      op isU/   DnctionTlem fHese)nne
s( };: oporigtlem ,$(this);
prop }),posions)' lignm ioFbleIE.lignmer:  nse) {
)hideDnfStyl ps('m(this);
tlem  = nse) {
)hideDnfStyl [prop]$(thi}b ignm ioFblenblmal brows  ;. ') &peofier:  uterWi getCompu edStyl ps('m(this);
tlem  = getCompu edStyl fHese)nne
s[prop]$(thi}b ignm   exi t emi c}H'fix;'h
}
};
/** /* Get t e wtVel ofrthr brows  ’tis());
ba . /* Taker from: https://github.com/VodkaBears/Rt  dal/blob/master/src/jq Lis.  },dal.js
 */
      op getS());
ba itVele   };: oper:  $hs);.herolle  <=' uterWi.herolle  s('m(this);
   exi 0$(thi}b ignmss(' outras='$  '<div style="visibil  /thid
 n;wtVel:100px" />o ))$(this);
=pp : To  'body' tbm(thitioGet t e wtVel utthout(s());
ba ;. ') &ss('utVelWtthoutS());
 =e outra[0].offs.titVelb ignm ioFblce =d    (s());
ba ;. ') & outra.al = c   rflcu',''s());
' tbm(thitiohdd tle inne  div. ') &ss('$inne  ='$  '<div style="wtVel:100%" />o ))=pp : To   outrastbm(thitioGet t e wtVel utth(s());
ba ;. ') &ss('utVelWtthS());
 =e inne [0].offs.titVelb ignm ioRt    )t e div;. ') & outra.re}, {e bm(thitioRt exi t e diffeeDncegbetwe :ct e utVels.lignm, "\\$ utVelWtthoutS());
 -'utVelWtthS());

}
};
/** /* PickerCovst  rgor help r)in.on('. '*/ePickerCovst  rgor._plugimax-h ** //   * Cre    aogroup ofrnodes) Expargs: //   * `$(this);
L rationax-heimin:');
LInClger},ieighhhhhhhhhmax:');
LInClger},ieighhhhhhhhhi:his);
LInClger},ieighhhhhhhhhnode: ;
LStr
ng},ieighhhhhhhhhitem: ;
LFl headeveon: op  }$: op * `$(this*/ect
 group $el header groupOchild s('m$(this);
ss(in

  $(d elatioSc p  ablet e lo p dtochildin

  $(d elalo pOchildSc p ,iin

  $(d ela/ioCre    t e nodes listieighhhhhhhhhnodesL  or= 'h,iin

  $(d ela/ioT e counClahs    g(from t e `min`in

  $(d elacounClah=HPickerCovst  rgor._.trnstra )groupOchild.min, groupOchild sb lignm/   tioLoop from t e `min`rtop`max`, incre)nne   (by `i`in

  $(dable(';acounClah<=HPickerCovst  rgor._.trnstra )groupOchild.max, groupOchild, [HcounClah] );acounClah+=)groupOchild.i )('m$(this);
r('itioTrnstrast e `item`i      op utthin sc p  ofrthr ochildin

  $(d elalo pOchildSc p h=HPickerCovst  rgor._.trnstra )groupOchild.ite),(groupOchild, [HcounClah] )min

  $(d elatioSplic{ t e subgroup =e') re    nodes out(ofrthr sub nodesieighhhhhhhhhnodesL  or+=HPickerCovst  rgor._.node( rationlassss  ssgroupOchild.node,mrationlassss  sslo pOchildSc p [ 0 ],elatiot e nodemrationlassss  sslo pOchildSc p [ 1 ],elatiot e  trige
mrationlassss  sslo pOchildSc p [ 2h] elatiot e == "ibu esbr('i

 H

 H)$(this);
} lignm/   tioRt exi t e list ofrnodesm(this);
   exi nodesL  o$(thi}, //groupb lignm ** //   * Cre    aodom nodeostr
ng$(this*/ect
 node: el header wr=pp r, ite),(ktrig, == "ibu e s('mm(this);
tioIfrthr item is f );
-y, just    exi an empty)str
ng$(this  Her:  !item s(   exi ''mm(this);
tioIfrthr item is ar crray,odoia joinm(this);
item    iisArray( item s(? item.join(''o ) : item lignm/   tioCheck)ablet e ctrigin

  $(dktrig =dktrig ? '  trig="'aulktrig + '"' : ''mm(this);
tioCheck)ableany == "ibu esbr('i

 H== "ibu e =H== "ibu e ? ' ' + == "ibu e : ''mm(this);
tioRt exi t e wr=pp d itemm(this);
   exi '<' + wr=pp r)ulktrig + == "ibu e +
'>' +
item +
'</' + wr=pp r)ul'>'br('i}, //nodem lignm ** //   * Lead numbDrs be ow 10 utth a zero)$(this*/ect
 lead:'el header numbDr s('m(this);
   exi r numbDr < 10 ? '0':''o ) + numbDrbr('i},m lignm ** //   * Trnstras=(      op othrawise rt exi t e value)$(this*/ect
 trnstra:'el header ca;
back, sc p , args s('m(this);
   exi n:Pb,Toca;
back c}H'fl heade' ?oca;
back)=pply( sc p , args || [] ) : ca;
backbr('i},m lignm ** //   * Ifrthr secoe') hararoerris aodigit,  // Ifris 2 othrawise 1)$(this*/ect
 digit
:'el header)str
ng s('m(this);
   exi r /\d/ ).test()str
ng[ 1 ] s(? 2 : 1br('i},m lignm ** //   * Te;
 ifrsoin.o ng)i
ea d   )ochild. ') &&*/ect
 isDa e:'el header)valuer) 'm(this);
   exi {}.toStr
ng.ca;
r)valuer).
    Of  'Da eo ) > -1 && n  //isInClgerr)value.getDseee  )$(thi},m lignm ** //   * Te;
 ifrsoin.o ng)i
ean inClger)$(this*/ect
 isInClger:'el header)valuer) 'm(this);
   exi {}.toStr
ng.ca;
r)valuer).
    Of  'NumbDro ) > -1 && valuer% 1 }}})0$(thi},m lignm ** //   * Cre    ARIA == "ibu e str
ngs)$(this*/ect
 ariaA= ": ariaA= "b} //PickerCovst  rgor._
};
/** /* Eit : et e pickerrutth a  omponsd( =e')ropdown'. '*/ePickerCovst  rgor.nit : s='el header name, Componsd( s('m$(thitioEit : e// Lis. ') & .fn[ name ]s='el header o   });,$crolon s('mm(this);
tioGrabrthr  omponsd( ose")$(this);
ss(' omponsd(Dse" con  //ose"()namepsbm(this);
tioIfrthr pickerris request;', re exi t e dse" ochild. ') &&
  er:  ds = {
  = 'pickero )tL rationax-heire exi  omponsd(Dse"$(this);
} lignm/   tioIfrthr  omponsd( ose"     oso=e')`ds = {s`)i
ea str
ng, caristout(t e ac  }). ') &&
  er:   omponsd(Dse" && n:Pb,Tods = {
  = 'str
ng' )tL rationax-hei, "\\$ PickerCovst  rgor._.trnstra ) omponsd(Dse"[ods = {
 ],) omponsd(Dse", [Hcrolon ]H)$(this);
} lignm/   tioOthrawise go t roughreachhmatch d ese)nne and ifrthr  omponsd(lignm/   tiooactn’t     o, cre    aonew picker us
ng `n  /` ese)nnelignm/   tioand merg
ng t e ropdown'oand ds = {
 utth a deep)c py.m(this);
   exi n  //eachs  l headers('max-heighhhhhss('  o s   $  no s )ieighhhhhhhhhir:  !$n  //ose"()namepsps('m(this);
r('i

 Hnew PickerCovst  rgor  no s, name, Componsd(,)ds = {
 s$(this);
r('i}$(this);
})$(thi}b /   tioSe( t e ropdowns. ') & .fn[ name ].ropdown'o= Componsd(.ropdown'b} //PickerCovst  rgor.nit : 
};
      op aria(ese)nne, == "ibu e, values('m(thier:  $.isPlainOchildr== "ibu esps('m(this);
able('ss('key in == "ibu e s('m(this);
r('iariaSe((ese)nne, key, == "ibu e[key])$(this);
} s);
} s);
peofi{ect
     ariaSe((ese)nne, == "ibu e, values s);
} }
      op ariaSe((ese)nne, == "ibu e, valuesi{ect
 nse) {
)setA= "ibu e( rationla(== "ibu e == 'roleo ?''o :''aria-') + == "ibu e,$(this);
sslue$(thi) }
      op ariaA= "(== "ibu e, ose"s('m(thier:  !$.isPlainOchildr== "ibu esps('m(this);
== "ibu e =H{
== "ibu e: ose" } s);
} s);
dse" co''br('iable('ss('key in == "ibu e s('m(this);
ss('== " co(key == 'roleo ?''o :''aria-') + key,m(this);
r('ia= "Val =H== "ibu e[key]m(this);
dse" +=ia= "Val =  null ?''o :'== " ul'="'aul== "ibu e[key] + '"' s);
} s);
   exi dse"
}
}tioIE8 bug t row
ean errblef r'arolleEse)nne
eutthin iframes.       op getArolleEse)nne()('m(thitist'm(this);
   exi      });)arolleEse)nne s);
} catch:  nrr s('
} }


}tioExpoeDct e picker covst  rgor.
, "\\$ PickerCovst  rgor

}}));

};/*! /* Dseeopicker for pickad   .js v3.5.0 /* http://amsul.github.io/pickad   .js/d   .htm '*/e
(      op s  argory s('m$(thitioAMD.lignmer:  n:Pb,Torgfins c}H'fl heade' && rgfins.am'))$(this);
rgfins( ['pickero, 'jq Lis'],  argory sm$(thitioNod .js/brows  ify. ') &peofier:  n:Pb,Toexpo  g(c}H'ochild' )$(this);
module.expo  g(c  argory( require('./picker.js'), require('jq Lis') sm$(thitioBrows   global;. ') &peofi argory( Picker,#// Listsm$}(el header Picker,#$ s('m$
/** /* Global; =e') onstants
 */
ss('DAYS_IN_WEEK(c 7,m(thiWEEKS_IN_CALENDAR(c 6,m(thi_h=HPicker._
};
/** /* T e dsee picker covst  rgor
 */
      op DseePicker( picker, s.rt
ngs
s( };: oporigca; : ar con  /,m(this);
ese)nne })picker.$node[ 0 ],m(this);
ese)nneValue   nse) {
)value,$(this);
nse) {
Dse"Value   picker.$node/ose"()'valueo s,$(this);
sslueStr
ng   nse) {
Dse"Value || ese)nneValue,$(this);
f lmaeStr
ng   nse) {
Dse"Value ? s.rt
ngs.ablmaeSubmin :'s.rt
ngs.ablmae,$(this);
isRTLs='el header)('m$(this);
r('i, "\\$ nse) {
)hideDnfStyl p? in

  $(d ela/   tioFbleIE.lignmmmmmmmmmmmmmnse) {
)hideDnfStyl .dsrecp op == 'rtl' : in

  $(d ela/   tioFblenblmal brows  ;. ') &&&&&&&&&&&&&getCompu edStyl fHpicker.$roo([0]
).dsrecp op == 'rtl'$(this);
} lignmca; : ar.s.rt
ngs
='s.rt
ngslignmca; : ar.$node   picker.$nodem$(thitioT e se'); ofrin.on('pt ae will be  
;')to build item ochild;. ') &ca; : ar.se'); =t'm(this);
min:''measureocre   ',$(this);
max:''measureocre   ',$(this);
now:''nowocre   ',$(this);
s.targ: cp=rseocre   
sslid   ',$(this);
hrollroll: cp=rseonavig   
cre   
sslid   ',$(this);
view: cp=rseocre   
sslid   
viewsel',$(this);
ricas(': cdearoll   ',$(this);
enas(': caroll   '$(thi}b /   tioThr  omponsd('s item ochild. ') &ca; : ar.item   {} lignmca; : ar.item.clear)  nullmax-hca; : ar.item.ricas(' co('s.rt
ngs.ricas(' || [] ).slic{(j0 tbr('ica; : ar.item.enas(' co-(el header c);
e   opDicas('d s('m(this);
   exi c);
e   opDicas('d[ 0 ] }}})t   p? c);
e   opDicas('d.shifo() : -1br('i})(hca; : ar.item.ricas(' ) lignmca; : ar.$(this);
s.t ),min', s.rt
ngs.min ))$(this);
s.t ),max', s.rt
ngs.max ))$(this);
s.t ),now' tbm(thitioWh :ct eae’tia value,)ne rt e `s.targ`, whiginin t\\$$(thitioalso sets)tle `hrollroll` =e')`view`.lignmer:  sslueStr
ng s('m(this);
ca; : ar.s.r ),s.targ', sslueStr
ng, ' ablmae:
f lmaeStr
ng })$(thi}b /   tioIfrthrae’tino value,)ropdown)to
hrollroll
ng “noday”.$(thipeofi{ect
     ca; : ar.$(this);
s);
s.t ),s.targ', null s.$(this);
s);
s.t ),hrollroll', ca; : ar.item.nowo)$(thi}b lignm ioThr keycode to m   )nne mapp ng)$(thica; : ar.key =i{ect
     40: 7,m ioDownm(this);
38: -7,m ioUpin

  $(d39:'el headers('
   exi isRTL(s(? -1 : 1i}, // Rrollin

  $(d37:'el headers('
   exi isRTL(s(? 1 : -1i}, // Leflin

  $(dgo:'el header .imeChange s('m(this);
r('iorighrollrolledOchild   ca; : ar.item.hrollroll, ') &&&&&&&&&&&&&n  getDsee })new DseeeghrollrolledOchild.year,ghrollrolledOchild.month,ghrollrolledOchild.d   
+ .imeChange s ') &&&&&&&&&ca; : ar.s.r  ') &&&&&&&&&&&&&,hrollroll', ') &&&&&&&&&&&&&n  getDsee, ') &&&&&&&&&&&&&{ inClaval: .imeChange  
his);
      s ') &&&&&&&&&n  //renrg ()$(this);
}$: op}b lignm ioBie')soin picker eind(s.$(thipicker. ') &&
  oer 'renrg ',  l headers('m') &&&&&&&&&picker.$roo()fve'  '.' + s.rt
ngs.ktrig.s.targMonth ).der 'change','el headers('m(this);
r('i

 Horigvalue })n  //value$(this);
r('i

 Her:  sslueps('m(this);
r('i

 H

 Hpicker.s.t ),hrollroll', [Hpicker.g.t )'viewo ))year,gvalue,)picker.g.t )'hrollroll'
).d   
] )$(this);
r('i

 H

 Hpicker.$roo()fve'  '.' + s.rt
ngs.ktrig.s.targMonth ).trnstra ),f   
' )$(this);
r('i

 H}mr('i

 H

 H})m') &&&&&&&&&picker.$roo()fve'  '.' + s.rt
ngs.ktrig.s.targYear s.der 'change','el headers('m(this);
r('i

 Horigvalue })n  //value$(this);
r('i

 Her:  sslueps('m(this);
r('i

 H

 Hpicker.s.t ),hrollroll', [Hvalue,)picker.g.t )'viewo ))month,gpicker.g.t )'hrollroll'
).d   
] )$(this);
r('i

 H

 Hpicker.$roo()fve'  '.' + s.rt
ngs.ktrig.s.targYear s.trnstra ),f   
' )$(this);
r('i

 H}mr('i

 H

 H})m') &&&&&}, 1 s.$(this);
der 'op :',  l headers('max-heighhhhhss('includeToday }),' // H Han

 Her:  ca; : ar.dicas('d  ca; : ar.g.t ,now')psps('m(this);
r('i

 HincludeToday }),:not(.' + s.rt
ngs.ktrig.buttonToday + ')'br('i

 H

 H}m') &&&&&&&&&picker.$roo()fve'  'button' +
includeToday + ',os.targo ))== "( 'dicas('d',       tb') &&&&&}, 1 s.$(this);
der 'cloeD',  l headers('m') &&&&&&&&&picker.$roo()fve'  'button,)s.targo ))== "( 'dicas('d',  ffs tbeighhhhh}, 1 s
b} //DseePicker};
/** /* Se( a d   pickerritem ochild. '*/
DseePicker.protot);
.s.ts='el header t);
, value,)ds = {
 s('mmax-horigca; : ar con  /,m(this);
ca; : arIte) } ca; : ar.itemb /   tioIfrthr ssluepis `null` just ne rue immediseely.lignmer:  sslue }}})null s('max-heigher:  n:Pb }}),clearo s(n:Pb }),s.targ'm(this);
ca; : arIte)[(n:Pb ]   value$(this);
   exi ca; : ar$(thi}b /   tioOthrawise go t roughrt e se'); ofrin.on(', and invokDct e el heades.$(thitioUpd    t is a
e ir  ime unit, =e')se rt e fopal valuer=
et is item.$(thitio* In thr  as; ofr`enas('`,okeep)tle se'); but ne r`dicas('` ivstead.$(thitio  And in t e  as; ofr`flip`,okeep)tle se'); but ne r`enas('` ivstead.$(thica; : arIte)[(  n:Pb }}),enas('o ?''dicas('o :' cli c}H'flipo ?''enas('o :' cli ) ]   ca; : ar.se');[(n:Pb ].split )' o ))maps  l headergin.on( s('max-heighvalue })ca; : ar[gin.on( ]r t);
, value,)ds = {
 s$(this);
   exi value$(thi}).pope bm(thitioCheck)ifrwe ne;')to  ascade t roughr  rDpupd   s.lignmer:  n:Pb }}),s.targ' s('m(this);
ca; : ar.s.r ),hrollroll', ca; : arIte).s.targ, ds = {
 s$(thi} s);
peofier:  n:Pb }}),hrollroll'
)('m(this);
ca; : ar.s.r ),viewo, ca; : arIte).hrollroll, ds = {
 s$(thi} s);
peofier:  n:Pb.match( /^(flip|min|max|dicas('|enas(')$/psps('m(this);
er:  ca; : arIte).s.targ && ca; : ar.dicas('d  ca; : arIte).s.targ sps('m(this);
r('ica; : ar.s.r ),s.targ', ca; : arIte).s.targ, ds = {
 s$(thi(thi} s);
s);
er:  ca; : arIte).hrollroll && ca; : ar.dicas('d  ca; : arIte).hrollroll )ps('m(this);
r('ica; : ar.s.r ),hrollroll', ca; : arIte).hrollroll, ds = {
 s$(thi(thi} s);
}b ignm   exi ca; : ar$} //DseePicker.protot);
.s.t};
/** /* Get a d   pickerritem ochild. '*/
DseePicker.protot);
.g.ts='el header t);
ps('m(thi   exi n  //ite)[(n:Pb ]$} //DseePicker.protot);
.g.t};
/** /* Cre    aopicker d   )ochild. '*/
DseePicker.protot);
.cre   
='el header t);
, value,)ds = {
 s('mmax-horigisInfopiteValue,$(this);
ca; : ar con  /b /   tioIfrthrae’tino value,)ueDct e n:Pb a
e ir value)$(thivalue })sslue }}})unrgfinsd ? n:Pb : value$b /   tioIfrit’tiinfopity,pupd   )tle value.lignmer:  sslue }} -Infopity || sslue }} Infopity s('m(this);
esInfopiteValue   value$(thi}b /   tioIfrit’tiantochild, ueDct e naollegd   )ochild. ') &peofier:  $.isPlainOchildr valuer) && _/isInClgerr)value.pick ) s('max-heighvalue })value.och$(thi}b /   tioIfrit’tiantcrray,oconvertrue into a d   )and make#sure /   tiot ae it’tia sslid d   )– othrawise ropdown)to
noday. ') &peofier:  $.isArray( valuer) s('max-heighvalue })new Dseeegvalue[ 0 ],evalue[ 1 ],evalue[ 2
] )$(this);
value })_/isDseeegvaluer) ? valuer:Hca; : ar.cre   ().och$(thi}b /   tioIfrit’tia numbDr or d   )ochild, make#aenblmalized d   . ') &peofier:  _/isInClgerr)value s(||o_/isDseeegvaluer) s('max-heighvalue })ca; : ar.nblmalize()new Dseeegvalue ), ds = {
 s$(thi}  /   tioIfrit’tia literal  ffs bleany othra  as;,)ne rue)to
now. ') &peofi/*er:  sslue }}}) ffs t*/('max-heighvalue })ca; : ar.nbwr t);
, value,)ds = {
 s$(thi}  /   tioRt exi t e  ompil dtochild.lignm, "\\$ 'max-heighyear:'esInfopiteValue || sslue.g.tFullYear(),$(this);
month:'esInfopiteValue || sslue.g.tMonth(),$(this);
da e:'esInfopiteValue || sslue.g.tDseee ,$(this);
day:'esInfopiteValue || sslue.g.tDsye ,$(this);
och:'esInfopiteValue || sslue,$(this);
pick:'esInfopiteValue || sslue.g.t_opt()$(thi}b} //DseePicker.protot);
.cre   };
/** /* Cre    aorange limin ochild us
ng ar crray,od   )ochild, /* literal “nffs”, bleinClger relaollegto anothra  ime. '*/
DseePicker.protot);
.cre   Range ='el header from,gto s('mmax-horigca; : ar con  /,m(this);
cre   D   
='el header d   )s('m(this);
r('ier:  d   )}}}) ffs ||o$.isArray( d   )s(||o_/isDseeegd   )s(s('max-heighhhhhhhhh, "\\$ ca; : ar.cre   (gd   )sbr('i

 H

 H}m') &&&&&&&&&   exi dse
btion:   } lignm/ioCre    ochild;ier:possis(')$(thier:  !_/isInClgerr)from sps('m(this);
arom =
cre   D   r)from s$(thi} s);
er:  !_/isInClgerr)to s(s('m(this);
to =
cre   D   r)to s
:   } lignm/ioCre    relaollegd   s.lignmer:  _/isInClgerr)from sp +  iisPlainOchildr to s(s('m(this);
arom =
[)to)year,gto)month,gto)d   
+ arom ];$(thi} s);
peofier:  _/isInClgerr)to s( +  iisPlainOchildr from sps('m(this);
to =
[ from)year,gfrom)month,gfrom)d   
+ .o ];$(thi} lignm, "\\$ 'max-heighfrom: cre   D   r)from s,$(this);
no:
cre   D   r)to s
:   } } //DseePicker.protot);
.cre   Range};
/** /* Check)ifra d   )unit    l
eutthin a d   )range ochild. '*/
DseePicker.protot);
.utthinRange ='el header range,od   Unit s('m(thi ange ='n  //cre   Range( ange.from,g ange.to)lignm, "\\$ d   Unit.pick >=  ange.from.pick && r   Unit.pick <=g ange.to.pick }


/** /* Check)ifrtwo d   )range ochilds    rlap. '*/
DseePicker.protot);
.   rlapRange
s='el header one   wo s('mmax-horigca; : ar con  / lignm/ioConvertrt e range
sinto  omparas(' d   s.lignmons = ca; : ar.cre   Range( ons.from,gons.to s
:    wo = ca; : ar.cre   Range(  wo.from,g wo.to s
 ignm   exi ca; : ar.utthinRanger one   wo.from sp||oca; : ar.utthinRanger one   wo.to s(||m(this);
ca; : ar.utthinRanger  wo, ons.from sp||oca; : ar.utthinRanger  wo, ons.to s
}};
/** /* Get t e d   )today. '*/
DseePicker.protot);
.nowo='el header t);
, value,)ds = {
 s('max-horlue })new Dseee)lignmer:  ds = {
 && o   });.rel s('max-heighvalue.s.tDseeegvalue.getDseee  + o   });.rel s$(thi} s);
   exi n  //nblmalize()value,)ds = {
 s$}};
/** /* Navig   
to
next/unbi
month. '*/
DseePicker.protot);
.navig   
='el header t);
, value,)ds = {
 s('mmax-horign  getDseeOchild, /this);
n  getYear, /this);
n  getMonth, /this);
n  getDsee, ') &&&&&isT  getArray    iisArray( value ), ') &&&&&isT  getOchild    iisPlainOchildr value ), ') &&&&&viewselOchild    o //ite).view/*,$(this);
safety   100*/e
lignmer:  isT  getArray ||oisT  getOchild )('m$(this);
er:  isT  getOchild s('max-heighhhhhn  getYear })value.yearmax-heighhhhhn  getMonth })value.monthmax-heighhhhhn  getD   
='value.dse
btion:   } tion:   peofi{ect
     , 

n  getYear })+value[0]max-heighhhhhn  getMonth })+value[1]max-heighhhhhn  getD   
='+value[2] // H Han  $(this);
tioIfrwe’reonavig   ngi onths but tle viewpis in a diffeeDnelignm/   tiomonth,gnavig   
to
tle view’tiyear)and month. 'this);
er:  ds = {
 && o   });.nav(&& viewselOchild && viewselOchild.month !}})   getMonth s('max-heighhhhhn  getYear })viewselOchild.yearmax-heighhhhhn  getMonth })viewselOchild.month // H Han  $(this);
tioFigureoout(t e exparg;')t  get year)and month. 'this);
n  getDseeOchild })new Dseeegn  getYear,hn  getMonth +:  ds = {
 && o   });.nav(? o   });.nav(:j0 t, 1 s
eighhhhhn  getYear })n  getDseeOchild.g.tFullYear() /this);
n  getMonth })n  getDseeOchild.g.tMonth() lignm/   tioIfrthr month we’reogo
ng to   ctn’t hav' enoughrday/,m(this);
tiokeep)decre s
ng t e d   )untilrwe reachhthr month’tilast(d   . ') &&&&&whi('
(i/*safety &&*/(new Dseeegn  getYear,hn  getMonth,hn  getD   
).g.tMonth() !}})   getMonth s('max-heighhhhhn  getD   
-= 1br('i(this);
t*safety -= 1br('i(this);
er:  !safety s('max-heighhhhhhhhht row 'Fe;
 into aniinfopite lo p&whi('
navig   ngito 'aulnew Dseeegn  getYear,hn  getMonth,hn  getD   
) + '.'br('i

 H

 H}*/ect
       $(this);
orlue })[gn  getYear,hn  getMonth,hn  getD   
]$(thi}b ignm   exi value$} //DseePicker.protot);
.navig   };
/** /* Nblmalize a d   )by s.rt
ngrt e hourg(to midnroll. '*/
DseePicker.protot);
.nolmalize ='el header)value/*, o   });*/ s('max-horlue.s.tHourg(e0,H0,H0,H0 ) ignm   exi value$}};
/** /* Measureot e range ofrd   s.li*/
DseePicker.protot);
.measureo='el header t);
, value/*, o   });*/ s('mmax-horigca; : ar con  / lignm/ioIfrit’tiany.o ng)f );
-y, re    )t e limins.lignmer:  !sslueps('m(this);
value })ncli c}H'mie' ?o-Infopity : Infopity$(thi}  /   tioIfrit’tia str
ng, p=rseoid. ') &peofier:  n:Pb,Tosslue }} 'str
ng' )tL rationaxvalue })ca; : ar.p=rser t);
, value s$(thi}  /   tioIfrit'
ean inClger,&get a d   )relaollegto noday. ') &peofier:  _/isInClgerr)value s(s('max-heighvalue })ca; : ar.nbwr t);
, value,)'
  l: value(} )$(thi}b ignm   exi value$} ///DseePicker.protot);
.measure};
/** /* Cre    aoviewsel ochild based s) navig   }). '*/
DseePicker.protot);
.viewsel ='el header t);
, dseeOchild/*, o   });*/ s('max-h   exi n  //cre   ([ dseeOchild)year,gdseeOchild)month,g1 ]s$}};
/** /* Vslid   
a d   )as
enas('d =e')shifoier:ne;''d.m(*/
DseePicker.protot);
.vslid   
='el header t);
, dseeOchild,)ds = {
 s('mmax-horigca; : ar con  /,mm(this);
tioKeep)ah  feeDncegto
tle bl (opal d   . ') &&&&&bl (opalDseeOchild })dseeOchild,mm(this);
tioMake#sureowe hav' an inClavsl. 'this);
enClavsl })ds = {
 && o   });.enClavsl ? o   });.enClavsl : 1,mm(this);
tioCheck)ifrthr ca; : ar enas('d d   s aeDrinvert'd.m(this);
isFlipp dBas;   ca; : ar.item.enas(' c}} -1,mm(this);
tioCheck)ifrwe hav' any enas('d d   s after/bef rDpnow. ') &&&&&hasEnas('dBef rDT  get,&hasEnas('dAfterT  get,mm(this);
tioThr min &
max limins.lignmmmmmminLiminOchild   ca; : ar.item.min,lignmmmmmmaxLiminOchild   ca; : ar.item.max,mm(this);
tioCheck)ifrwe’ve reached)t e limin dur
ng shifo ng)$(this);
reachedMin, reachedMax,mm(this);
tioCheck)ifrthr ca; : ar is invert'dr=e')at leas( onsrweekday is
enas('d. ') &&&&&hasEnas('dWeekday
s='isFlipp dBas; && ca; : ar.item.ricas('.filterfHel header)valuer) 'mbr('i(this);
tioIfrthrae’tia d   , check)uhrae itris relaollegto nir    get. ') &&
      er:  $.isArray( valuer) s('max-heighhhhhhhhhorigd   _opt = ca; : ar.cre   r)valuer).pick ax-heighhhhhhhhher:  d   _opt <gdseeOchild)pick ) hasEnas('dBef rDT  get }) ffs ax-heighhhhhhhhhpeofier:  d   _opt >gdseeOchild)pick ) hasEnas('dAfterT  get }) ffs ax-heighhhhh}mbr('i(this);
tioRt exi only inClgers for enas('d weekday;. ') &&&&&&&&&   exi _/isInClgerr)value sect
      ). // If/*,$$(this);
safety   100*/e
llignm/ioCage
eto
sslid   
for:lignm/io[1] Nbt invert'dr=e')d   
dicas('d.$(thitio[2] Invert'dr=e')soin d   s enas('d. ') &tio[3] Nbt invert'dr=e')out(ofr ange. ') &tilignm/ioCage
eto
**not**
sslid   
for:lignm/io• Navig   ngi onths.lignm/io• Nbt invert'dr=e')d   
enas('d. ') &tio• Invert'dr=e')all d   s dicas('d.$(thitio• ..=e')any.o ng)peof.lignmer:  !ds = {
 ||o!o   });.nav()mer: m(this);
t*g1 */   !isFlipp dBas; && ca; : ar.dicas('d  dseeOchildr) s(||m(this);
t*g2 */   isFlipp dBas; && ca; : ar.dicas('d  dseeOchildr)  + (HhasEnas('dWeekday
s||ohasEnas('dBef rDT  get ||ohasEnas('dAfterT  get ) s(||m(this);
t*g3 */   !isFlipp dBas; && (dseeOchild)pick <=mminLiminOchild)pick ||odseeOchild)pick >=mmaxLiminOchild)pick  )$(this('m$
(this);
tioWh :cinvert'd, flip t e direcp op ifrthrae aeDn’t any enas('d weekday;
(this);
tioa: et eae aeDino enas('d d   s in t e direcp op ofrthr inClavsl. 'this);
ef   isFlipp dBas; && !hasEnas('dWeekday
s + (H( !hasEnas('dAfterT  get  + enClavsl >H0 ) ||o( !hasEnas('dBef rDT  get  + enClavsl <H0 ) ) s('max-heighhhhhenClavsl *= -1br('ihhhh}mbm(this);
tioKeep)lo p ngiuntilrwe reachhan enas('d d   . ') &&&&&whi('
(i/*safety &&*/(ca; : ar.dicas('d  dseeOchildr) s('mbr('i(this);
t*safety -= 1br('i(this);
er:  !safety s('max-heighhhhhhhhht row 'Fe;
 into aniinfopite lo p&whi('
sslid   ngi'auldseeOchild)och + '.'br('i

 H

 H}*/embr('i(this);
tioIfrwe’ve lo p dtinto t e next/unbi
month utth a l  gehenClavsl, re exi to
tle bl (opal d   oa: eflaot :ct e inClavsl. 'this);
s);
er:  Math.abg(eenClavsl ) > 1s + (HdseeOchild)month <Hbl (opalDseeOchild)month ||odseeOchild)month >Hbl (opalDseeOchild)month ) s('max-heighhhhhhhhhdseeOchild })bl (opalDseeOchild ax-heighhhhhhhhhenClavsl })enClavsl >H0 ? 1 : -1 ax-heighhhhh}mbbr('i(this);
tioIfrwe’ve reached)t e min/max limin, reverse t e direcp op,eflaot :ct e inClavsl =e')se rue)to
t e limin. 'this);
s);
er:  dseeOchild)pick <=mminLiminOchild)pick s('max-heighhhhhhhhh, achedMin }) ffs ax-heighhhhhhhhhenClavsl })1max-heighhhhhhhhhdseeOchild })ca; : ar.cre   r[beighhhhhhhhh

 HHHHHminLiminOchild)year, /this);
hhhh

 HHHHHminLiminOchild)month, /this);
hhhh

 HHHHHminLiminOchild)d   
+ (dseeOchild)pick c}} minLiminOchild)pick ?H0 : -1)$(this);
r('i

 H]sbr('i

 H

 H}m') &&&&&&&&&peofier:  d   Ochild)pick >=mmaxLiminOchild)pick s('max-heighhhhhhhhh, achedMax }) ffs ax-heighhhhhhhhhenClavsl })-1max-heighhhhhhhhhdseeOchild })ca; : ar.cre   r[beighhhhhhhhh

 HHHHHmaxLiminOchild)year, /this);
hhhh

 HHHHHmaxLiminOchild)month, /this);
hhhh

 HHHHHmaxLiminOchild)d   
+ (dseeOchild)pick c}} maxLiminOchild)pick ?H0 : 1)$(this);
r('i

 H]sbr('i

 H

 H}mbbr('i(this);
tioIfrwe’ve reached)both limins, just break out(ofrthr lo p. 'this);
s);
er:  , achedMin  + , achedMax s('max-heighhhhhhhhhbreakbr('i

 H

 H}mbbr('i(this);
tioFopally, cre    thr shifoed d   )us
ng t e inClavsl =e')keep)lo p ng. 'this);
s);
dseeOchild })ca; : ar.cre   r[ dseeOchild)year,gdseeOchild)month,gdseeOchild)d   
+ inClavsl ])$(this);
} $(thi}
ti : ifb lignm ioRt exi t e d   )ochild s.rtl dton.lignm, "\\$ dseeOchild$} //DseePicker.protot);
.sslid   };
/** /* Check)ifra d   )is dicas('d.$(*/
DseePicker.protot);
.dicas('d coel header d   ToV  ify s('mmax-hori$(this);
ca; : ar con  /,mm(this);
tioFilter t roughrt e dicas('d d   s to  heck)ifrthi
 i
eons.m(this);
isDicas('dMatch:  ca; : ar.item.ricas('.filterfHel header)d   ToDicas(' ) 'mbr('i(this);
tioIfrthr d   )is a numbDr,hmatch t e weekday utth 0
     =e')`firstDsy`  heck. 'this);
s);
er:  _/isInClgerr)d   ToDicas(' ) s('max-heighhhhhhhhh, "\\$ d   ToV  ify.day }==:  ca; : ar.s.rt
ngs.airstDsy ?Hd   ToDicas(' :Hd   ToDicas(' - 1 s % 7 ax-heighhhhh}mbr('i(this);
tioIfrit’tiantcrray blea naollegJS d   , cre    and match t e exact(d   . ') &&&&&s);
er:  $.isArray( d   ToDicas(' ) ||o_/isDseeegd   ToDicas(' ) s('max-heighhhhhhhhh, "\\$ d   ToV  ify.pick c}} ca; : ar.cre   (gd   ToDicas(' ).pick ax-heighhhhh}mbr('i(this);
tioIfrit’tiantochild, match a d   )utthin t e “from” and “no”  ange. ') &&&&&s);
er:  $.isPlainOchildr d   ToDicas(' ) s('max-heighhhhhhhhh, "\\$ ca; : ar.utthinRanger d   ToDicas(', d   ToV  ify sbr('i

 H

 H}m') &&&&&})  /   tioIfrthi
 d   )match s aodicas('d d   ,oconairmrit’tinbt invert'd.lignmesDicas('dMatch:  esDicas('dMatch. // If && !esDicas('dMatch.filterfel header)d   ToDicas(' ) 'mhhhhhhhh, "\\$ $.isArray( d   ToDicas(' ) && r   ToDicas('[3] }} 'invert'd'(||m(this);




$.isPlainOchildr d   ToDicas(' ) && r   ToDicas('.invert'd$(thi}). // Ifbm(thitioCheck)thr ca; : ar “vnas('d” flag and respecollely(flip t em(thitiodicas('d sta e.oThrnoalso  heck)ifrit’tibeyond)t e min/max limins.lignm, "\\$ ca; : ar.item.enas(' c}} -1 ?H!esDicas('dMatch : isDicas('dMatch ||m(this);
d   ToV  ify.pick < ca; : ar.item.min)pick ||m(this);
d   ToV  ify.pick > ca; : ar.item.max.pick $} //DseePicker.protot);
.dicas('d};
/** /* P=rseoa str
ng into a  
as(' t);
.$(*/
DseePicker.protot);
.p=rseo='el header t);
, value,)ds = {
 s('mmax-horigca; : ar con  /,m(this);
p=rs
ngOchild }){}  /   tioIfrit’tialre dy p=rsed, we’reogood.lignmer:  !value || n:Pb,Tosslue !} 'str
ng' )tL rationax   exi value$(thi}bm(thitioWe ne;')a `.ablmae`rtopp=rseothr sslueputth.lignmer:  !  ds = {
 && o   });.ablmae ) s('max-heighds = {
   ds = {
 ||o{}max-heighds = {
.ablmae = ca; : ar.s.rt
ngs.ablmae$(thi}bm(thitioConvertrt e ablmae into anicrray ae')tler map t roughrid. ') &ca; : ar.ablmae
.toArray( o   });.ablmae ))maps  l headerglabel s('mmax-heighss(in

  $(d elatioGrabrthr ablmae  ngilabel. ') &&&&&s);
ablmae  ngLabel =&ca; : ar.ablmae
[glabel ],iin

  $(d ela/ioT e ablmae  // Ifris from t e ablmae  ngilabel(      op or t em(thi $(d ela/iolabel( // Ifrutthout(t e escap ng)pxclama  op s!) mark. ') &&&&&s);
ablmaeL// Ifr=
ablmae  ngLabel ? _.trnstra )ablmae  ngLabel, ca; : ar, [Hvalue,)p=rs
ngOchild ] ) : label.replac{(j/^!/,''o ). // Ifbm(thi/   tioIfrt eae'tia f lmae  abel, splitothr ssluepup)to
t e ablmae  // If.
 $(d ela/ioT en add ue)to
t e p=rs
ng)ochild utth appropriseeilabel. ') &&&&&er:  ablmae  ngLabel s('m') &&&&&&&&&p=rs
ngOchild[glabel ]
='value.subs "( 0,
ablmaeL// Ifr)$(this);
} lignm/   tioUpd   )tle value a
e ir subs " ng)from ablmae  // Ifrto end. ') &&&&&value })value.subs "( ablmaeL// Ifr)$(thi})  /   tioCompens   
for
month 0
    .lignm, "\\$ [m(this);
p=rs
ngOchild.yyyy ||op=rs
ngOchild.yy,m(this);
+(op=rs
ngOchild.mm ||op=rs
ngOchild.m sp- 1,m(this);
p=rs
ngOchild.dd ||op=rs
ngOchild.d$(thi]$} //DseePicker.protot);
.p=rse};
/** /* Vsrious ablmaes to dicplay)tle ochild i). '*/
DseePicker.protot);
.ablmaes =: el header)('m$(thitioRt exi t e l// Ifrofrthr airst word in a c);
e   op.lignm      op getWordL// IfFromC);
e   op( str
ng, c);
e   op,gdseeOchild s('mm(this);
tioGrabrthr airst word from t e str
ng)$(this);
ss('word = str
ng)match( /\w+/ )[ 0 ]bm(thi/   tioIfrt eae'tino
month 
    , add ue)to
t e d   )ochild ') &&&&&er:  !dseeOchild)mm && !dseeOchild)m s('m') &&&&&&&&&dseeOchild)m = c);
e   op.
    Of  word ) + 1$(this);
} lignm/   tioRt exi t e l// Ifrofrthr word.m(this);
   exi word. // Ifbs);
} lignmtioGet t e l// Ifrofrthr airst word in a str
ng)$(thi      op getFirstWordL// Ifr)str
ng s('m(this);
   exi str
ng)match( /\w+/ )[ 0 ]. // Ifbs);
} lignm, "\\$ 'mm(this);
d:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tistr
ng,gtler get t e digit
  // If.
 $(d ela/   tioOthrawise re exi t e s.targ'd d   . ') &&&&&s);
   exi str
ng ? _.digit
r)str
ng s(:gdseeOchild)d   $(this);
},$(this);
dd:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler t e l// Ifris alway
s2.
 $(d ela/   tioOthrawise re exi t e s.targ'd d    utth a le d
ng zero)$(this&&&s);
   exi str
ng ? 2 : _.le d(gdseeOchild)d    tbeighhhhh},$(this);
ddd:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler get t e l// Ifrofrthr airst word.
 $(d ela/   tioOthrawise re exi t e short s.targ'd weekday)$(this&&&s);
   exi str
ng ? getFirstWordL// Ifr)str
ng s(: n  //s.rt
ngs.weekday;Short[gdseeOchild)d yi]ect
     },$(this);
dddd:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler get t e l// Ifrofrthr airst word.
 $(d ela/   tioOthrawise re exi t e full s.targ'd weekday)$(this&&&s);
   exi str
ng ? getFirstWordL// Ifr)str
ng s(: n  //s.rt
ngs.weekday;Full[gdseeOchild)d yi]ect
     },$(this);
m:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler get t e l// Ifrofrthr digit

 $(d ela/   tioOthrawise re exi t e s.targ'd month utth 0
     compens   }). ') &&
  s);
   exi str
ng ? _.digit
r)str
ng s(:gdseeOchild)month +:1ect
     },$(this);
mm:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler t e l// Ifris alway
s2.
 $(d ela/   tioOthrawise re exi t e s.targ'd month utth 0
     ae')le d
ng zero)$(this&&&s);
   exi str
ng ? 2 : _.le d(gdseeOchild)month +:1 tbeighhhhh},$(this);
mmm:'el header)str
ng,gdseeOchild s('mm(this);
/   ss(' o;
e   op    o //s.rt
ngs.monthsShortmm(this);
/   tioIfrt eae'tiaistr
ng,gget l// Ifrofrthr r.tavane month from t e shortm(this);
/   tio onths c);
e   op.oOthrawise re exi t e s.targ'd month from t ae c);
e   op.lignms&&&s);
   exi str
ng ? getWordL// IfFromC);
e   op( str
ng, c);
e   op,gdseeOchild s(: c);
e   op[gdseeOchild)month ]ect
     },$(this);
mmmm:'el header)str
ng,gdseeOchild s('mm(this);
/   ss(' o;
e   op    o //s.rt
ngs.monthsFullmm(this);
/   tioIfrt eae'tiaistr
ng,gget l// Ifrofrthr r.tavane month from t e fullmax-hs);
/   tio onths c);
e   op.oOthrawise re exi t e s.targ'd month from t ae c);
e   op.lignms&&&s);
   exi str
ng ? getWordL// IfFromC);
e   op( str
ng, c);
e   op,gdseeOchild s(: c);
e   op[gdseeOchild)month ]ect
     },$(this);
yy:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler t e l// Ifris alway
s2.
 $(d ela/   tioOthrawise re exi t e s.targ'd year)by slic
ng)outrthr airst 2 digit
)$(this&&&s);
   exi str
ng ? 2 : (''o uldseeOchild)year s.slic{(j2 tbeighhhhh},$(this);
yyyy:'el header)str
ng,gdseeOchild s('mm(this);
/   tioIfrt eae'tiaistr
ng,gtler t e l// Ifris alway
s4.
 $(d ela/   tioOthrawise re exi t e s.targ'd year)$(this&&&s);
   exi str
ng ? 4(:gdseeOchild)yearmax-heigh},mm(this);
tioCre    anicrray by splitt
ngrt e ablmae  ngistr
ng priged.
 $(d elatoArray:'el header)f lmaeStr
ng s('
   exi f lmaeStr
ng.split )/(d{1,4}|m{1,4}|y{4}|yy|!.)/g s(},mm(this);
tioFblmae antochild into a str
ng us
ng t e ablmae  ngio   });.
 $(d elatoStr
ng:'el heade r)f lmaeStr
ng, ite)Ochild s('max-heighhhhhorigca; : ar con  / (this&&&s);
   exi ca; : ar.ablmae
.toArray( f lmaeStr
ng s)maps  l headerglabel s('m                   exi _/trnstra ) a; : ar.ablmae
[glabel ], ca; : ar, [H0, ite)Ochild ] ) ||olabel.replac{(j/^!/,''o )br('i

 H

 H}).join(''o )$(this);
} s);
} })() //DseePicker.protot);
.ablmae


};
/** /* Check)ifrtwo d   )units aeDrt e exact. '*/
DseePicker.protot);
.isDseeExact(='el header one   wo s('mmax-horigca; : ar con  / lignm/ioWh :cwe’reowork
ng utth weekday;,odoia direcp  omparisop.lignmer: m(this);
  _/isInClgerr)onsr) && _/isInClgerr) wo s(s(||m(this);
  n:Pb,Toons c}H'boole e' && n:Pb,To wo =}H'boole e' )$(thiss('m(this);
   exi ons c}=o wo$(thi}bm(thitioWh :cwe’reowork
ng utth d   )represent   })s,  ompare t e “pick” value.lignmer: m(this);
  _/isDseeegonsr) ||o$.isArray( onsr) ) &&m(this);
  _/isDseeeg wo s(||o$.isArray(  wo s(s
thiss('m(this);
   exi ca; : ar.cre   (gonsr).pick c}} ca; : ar.cre   (g wo s.pick ax-h}bm(thitioWh :cwe’reowork
ng utth range ochilds,  ompare t e “from” and “no”.lignmer:  $.isPlainOchildr onsr) &&  iisPlainOchildr two s(s('m(this);
, "\\$ ca; : ar.isDseeExact( ons.from,g wo.from sp&& ca; : ar.isDseeExact( ons.to,g wo.to s
ax-h}bm(thi   exi f );
 }


/** /* Check)ifrtwo d   )units    rlap. '*/
DseePicker.protot);
.isDseeO  rlap(='el header one   wo s('mmax-horigca; : ar con  /,$(this);
firstDsy = ca; : ar.s.rt
ngs.airstDsy ?H1 : 0bm(thitioWh :cwe’reowork
ng utth arweekday i    ,  ompare t e day;. ') &er:  _/isInClgerr)onsr) &&   _/isDseeeg wo s(||o$.isArray(  wo s(s s('max-heighdns = dns % 7
+ airstDsym(this);
   exi ons c}=oca; : ar.cre   (g wo s.day + 1br('i} ') &er:  _/isInClgerr) wo s(&&   _/isDseeegonsr) ||o$.isArray( onsr) ) s('m(this);
two = two % 7
+ airstDsym(this);
   exi  wo =}=oca; : ar.cre   (gonsr).day + 1br('i} m(thitioWh :cwe’reowork
ng utth range ochilds,  heck)ifrthr range
s   rlap. 'gnmer:  $.isPlainOchildr onsr) &&  iisPlainOchildr two s(s('m(this);
, "\\$ ca; : ar.   rlapRange
r one   wo s
ax-h}bm(thi   exi f );
 }


/** /* Flip t e “vnas('d” sta e. '*/
DseePicker.protot);
.alipEnas(' coel headervals('max-horr ite)Ochild    o //ite) 'gnmete)Ochild.enas(' covsl ||o(ete)Ochild.enas(' c} -1 ?H1 : -1)$}};
/** /* Mark a c);
e   op ofrd   s a
e“dicas('d”.li*/
DseePicker.protot);
.dearoll   
='el header t);
, dseesToDicas(' ) 'mbr('iorigca; : ar con  /,$(this);
dicas('dIte)s:  ca; : ar.item.ricas('.slic{(0)$b /   tioIfrwe’reoalipp
ng,gtlat’tiallrwe ne;')to do. 'gnmer:  dseesToDicas(' c}H'flipo )('m(this);
ca; : ar.alipEnas('(s
ax-h}bm(thipeofier:  d   sToDicas(' c}=       t('m(this);
ca; : ar.alipEnas('(1)$(this);
dicas('dIte)s:  []
ax-h}bm(thipeofier:  d   sToDicas(' c}=  ffs t('m(this);
ca; : ar.alipEnas('(-1)$(this);
dicas('dIte)s:  []
ax-h}bm(thitioOthrawise go t roughrt e d   s to ricas('.m(thipeofi'mm(this);
d   sToDicas(')mapsel header unitToDicas(' ) 'mbr('i(this);
origmatchFou: 
}r('i(this);
tioWh :cwe hav' dicas('d items,  heck)for
match s.
 $(d ela/   tioIfrsoin.o ng)i
ematch d, immediseely break out. ') &&&&&s);
able('ss('
     = 0;'
     <
dicas('dIte)s. // If;'
     += 1 s 'm(this);
r('i

 Hir:  ca; : ar.isDseeExact( unitToDicas(',
dicas('dIte)s[
    ] ) s('max-heighhhhhhhhhhhhhmatchFou:  }) ffs ax-heighhhhhhhhhhhhhbreakbr('i

 H

 Hax-h}b

 H

 Hax-h}b
 $(d ela/   tioIfrnoth
ng uas abu: , add tle valid   d)unit to
t e c);
e   op.lignms&&&s);
er:  !matchFou:  s 'm(this);
r('i

 Hir:  ax-heighhhhhhhhhhhhh_/isInClgerr)unitToDicas(' ) ||m(this);




hhhhhhhh_/isDseeegunitToDicas(' ) ||m(this);




hhhhhhhh$.isArray( unitToDicas(' ) ||m(this);




hhhhhhhh  $.isPlainOchildr unitToDicas(' ) && unitToDicas('.from && unitToDicas('.to s
ax-hhhhhhhhhhhhhs('max-heighhhhhhhhhhhhhdicas('dIte)s.pushr unitToDicas(' )br('i

 H

 Hax-h}b

 H

 Hax-h}b

 Hax-h}s$(thi}  /   tioRt exi t e upd   d c);
e   op.lignm, "\\$ dicas('dIte)s$} //DseePicker.protot);
.dearoll   };
/** /* Mark a c);
e   op ofrd   s a
e“vnas('d”.li*/
DseePicker.protot);
.aroll   
='el header t);
, dseesToEnas(' ) 'mbr('iorigca; : ar con  /,$(this);
dicas('dIte)s:  ca; : ar.item.ricas(',$(this);
dicas('dIte)sCou:d })dicas('dIte)s. // Ifb /   tioIfrwe’reoalipp
ng,gtlat’tiallrwe ne;')to do. 'gnmer:  dseesToEnas(' c}H'flipo )('m(this);
ca; : ar.alipEnas('(s
ax-h}bm(thipeofier:  d   sToEnas(' c}=  ffs t('m(this);
ca; : ar.alipEnas('(1)$(this);
dicas('dIte)s:  []
ax-h}bm(thipeofier:  d   sToEnas(' c}=       t('m(this);
ca; : ar.alipEnas('(-1)$(this);
dicas('dIte)s:  []
ax-h}bm(thitioOthrawise go t roughrt e dicas('d d   s.m(thipeofi'mm(this);
d   sToEnas(')mapsel header unitToEnas(' ) 'mbr('iiiiiiiiiorigmatchFou: , /this);
hhhh

 Hdicas('dUnit, /this);
hhhh

 Hi    , /this);
hhhh

 HisExactRange};s);
hhhh

 HtioGo t roughrt e dicas('d items ae')try)to fve' a match. ') &&&&&s);
able('
     = 0;'
     <
dicas('dIte)sCou:d;'
     += 1 s 'm /this);
hhhh

 Hdicas('dUnit })dicas('dIte)s[
    ]m /this);
hhhh

 HtioWh :can exact(match is abu: , re    )it  rom t e c);
e   op.lignms&&&s);


 Hir:  ca; : ar.isDseeExact( dicas('dUnit, unitToEnas(' ) s('max-heighhhhhhhhhhhhhmatchFou:  })dicas('dIte)s[
    ]   nullmax-h/this);
hhhh

 HisExactRange }) ffs ax-heighhhhhhhhhhhhhbreakbr('i

 H

 Hax-h}b /this);
hhhh

 HtioWh :can    rlapp dtmatch is abu: , add tle “invert'd” sta e)to in. 'this);
s);




peofier:  ca; : ar.isDseeO  rlap( dicas('dUnit, unitToEnas(' ) s('max-heighhhhhhhhhhhhher:  $.isPlainOchildr unitToEnas(' ) s('max-heighhhhhhhhhhhhhhhhhunitToEnas('.invert'd }) ffs ax-heighhhhhhhhhhhhhhhhhmatchFou:  })unitToEnas(' ax-heighhhhhhhhhhhhh} ax-heighhhhhhhhhhhhhpeofier:  $.isArray( unitToEnas(' ) s('max-heighhhhhhhhhhhhhhhhhmatchFou:  })unitToEnas(' ax-heighhhhhhhhhhhhhhhhher:  !matchFou: [3] )hmatchFou: .pushr 'invert'd'()$(this);
r('i

 H

 H} ax-heighhhhhhhhhhhhhpeofier:  _/isDseeegunitToEnas(' ) s('max-heighhhhhhhhhhhhhhhhhmatchFou:  })[hunitToEnas('.g.tFullYear(),hunitToEnas('.g.tMonth(),hunitToEnas('.g.tDseee),h'invert'd'(]$(this);
r('i

 H

 H} ax-heighhhhhhhhhhhhhbreakbr('i

 H

 Hax-h}b

 H

 Hax-h}b
 $(d ela/   tioIfra match uas abu: , re    )a unbiious duplica  
entry.lignms&&&s);
er:  matchFou:  s able('
     = 0;'
     <
dicas('dIte)sCou:d;'
     += 1 s 'mr('i

 H

 Hax-hir:  ca; : ar.isDseeExact( dicas('dIte)s[
    ], unitToEnas(' ) s('max-heighhhhhhhhhhhhhdicas('dIte)s[
    ]   nullmax-h/this);
hhhh

 Hbreakbr('i

 H

 Hax-h}b

 H

 Hax-h}b
 $(d ela/   tioIi t e eind( t ae we’reodeal
ng utth an exact(range ofrd   s,
 $(d ela/   tiomake#sure t eae aeDino “invert'd” d   s becaus; ofrin. 'this);
s);
er:  isExactRange s able('
     = 0;'
     <
dicas('dIte)sCou:d;'
     += 1 s 'mr('i

 H

 Hax-hir:  ca; : ar.isDseeO  rlap( dicas('dIte)s[
    ], unitToEnas(' ) s('max-heighhhhhhhhhhhhhdicas('dIte)s[
    ]   nullmax-h/this);
hhhh

 Hbreakbr('i

 H

 Hax-h}b

 H

 Hax-h}b
 $(d ela/   tioIfrsoin.o ng)i
estill match d, add ue)into t e c);
e   op.lignms&&&s);
er:  matchFou:  s 'm(this);
r('i

 Hdicas('dIte)s.pushr matchFou:  sb

 H

 Hax-h}b

 Hax-h}s$(thi}  /   tioRt exi t e upd   d c);
e   op.lignm, "\\$ dicas('dIte)s.filterfel header)vsl ) '
   exi vsl !})null }s$} //DseePicker.protot);
.aroll   };
/** /* Cre    aos " ng)for t e nodes in t e picker. '*/
DseePicker.protot);
.node
s='el header isOp :cs('mmax-hori$(this);
ca; : ar con  /,m(this);
s.rt
ngs
='ca; : ar.s.rt
ngs,m(this);
ca; : arIte) } ca; : ar.item,$(this);
nowOchild })ca; : arItem.now,$(this);
s.targedOchild   ca; : arIte).s.targ,$(this);
hrollrolledOchild   ca; : arIte).hrollroll,$(this);
viewselOchild   ca; : arIte).view,$(this);
dicas('dCo;
e   op   ca; : arIte).ricas(',$(this);
minLiminOchild   ca; : arItem.min,lignmmmmmmaxLiminOchild   ca; : arItem.max,mmlignmmmmmtioCre    thr ca; : ar tas(' head us
ng a c)py ofrweekday labels c);
e   op.lignms&&&tio* Weodoia c)py sorwe don't(mut    thr bl (opal crray. 'this);
n s('Head =: el header c);
e   op,gfullCo;
e   op ) 'mbr('i(this);
tioIfrthr airst day should be Monday,o    )Sunday to
t e end. ') &&&&&&&&&er:  s.rt
ngs.airstDsy s 'm(this);
r('i

 Hc);
e   op.pushr c);
e   op.shifo() )$(this);
r('i

 HfullCo;
e   op.pushr fullCo;
e   op.shifo() )$(this);
r('i}b
 $(d ela/   tioCre    and re exi t e tas(' head group)$(this&&&s);
   exi _.node  ') &&&&&&&&&&&&&,thead', ') &&&&&&&&&&&&&_.node  ') &&&&&&&&&&&&&&&&&,tr', ') &&&&&&&&&&&&&&&&&_.group('max-heighhhhhhhhhhhhhhhhhmin:'0, ') &&&&&&&&&&&&&&&&&hhhhmax:'DAYS_IN_WEEKp- 1,m(this);
















i: 1,m(this);
















node:&,th', ') &&&&&&&&&&&&&&&&&



item:'el header)cou:der s('max-heighhhhhhhhhhhhhhhhhhhhh, "\\$ [m(this);
























c);
e   op[gcou:der ], ') &&&&&&&&&&&&&&&&&











s.rt
ngs.ktrig.weekday;, ') &&&&&&&&&&&&&&&&&











'sc)pe=c); title="o ulfullCo;
e   op[gcou:der ] + '"' ') &&&&&&&&&&&&&&&&&







]$(this);
r('i

 H

 HHHHH} ax-heighhhhhhhhhhhhh}s
ax-hhhhhhhhhhhhhs
ax-hhhhhhhhh)
ti : , "\\$mm(this);
tioMaderialize modifi'd$(thihhhh}s(:  s.rt
ngs.showWeekday;Full ? s.rt
ngs.weekday;Full : s.rt
ngs.weekday;L.rter ).slic{(j0 t, s.rt
ngs.weekday;Full.slic{(j0 t t, //n s('HeadmmlignmmmmmtioCre    thr nav(for next/unbi
month. ''''''''cre   MonthNav(='el header next ) 'mbr('i(this);
tioOthrawise, re exi t e cre   d month tag)$(this&&&s);
   exi _.node  ') &&&&&&&&&&&&&,div', ') &&&&&&&&&&&&&' ', ') &&&&&&&&&&&&&s.rt
ngs.ktrig[ 'nav' +:  next ? 'Nexto :''Pnbio )(] + (b /this);
hhhh

 Hs);
tioIfrthr a   
 d month i
eoutsideot e range,
dicas('dot e button. 'this);
s);








  next && viewselOchild.year >=mmaxLiminOchild)year && viewselOchild.month >=mmaxLiminOchild)month ) ||m(this);




hhhhhhhh  !next && viewselOchild.year <=mminLiminOchild)year && viewselOchild.month <=mminLiminOchild)month ) ? ') &&&&&&&&&&&&&&&&&, ' + s.rt
ngs.ktrig.navDicas('d :''' ') &&&&&&&&&&&&&), ') &&&&&&&&&&&&&'d  a-nav=' +:  next || -1 ) + ' ' + ') &&&&&&&&&&&&&_.ariaA= "('max-heighhhhhhhhhhhhhrole:&,button', ') &&&&&&&&&&&&&&&&&controls:Hca; : ar.$node[0].id + '_n s('' ') &&&&&&&&&&&&&}) + ' ' + ') &&&&&&&&&&&&&'title="o ul(next ? s.rt
ngs.labelMonthNext : s.rt
ngs.labelMonthPnbi ) + '"' ') &&&&&&&&&)
ti : , "\\$m&&&&&&&&}, //cre   MonthNavmmlignmmmmmtioCre    thr month label. ') &&&&&//Maderialize modifi'd$(thihhhhcre   MonthLabel =&el header   rride) 'mbr('iiiiiiiiiorigmonthsCo;
e   op   s.rt
ngs.showMonthsShort ? s.rt
ngs.monthsShort : s.rt
ngs.monthsFullmm(this);
/   
tioMaderialize modifi'd$(thihhhhhhhher:    rride c}H"short_months"s('max-heighhhhhhhmonthsCo;
e   op   s.rt
ngs.monthsShort;b

 H

 Hax-h}b
 $(d ela/   tioIfrt eae aeDi onths to
s.targ, add a dropdown menu. ') &&&&&&&&&er:  s.rt
ngs.s.targMonths  && o  rride c}Hunrgfinsds 'm /this);
hhhh

 H   exi _.node ),s.targ', ') &&&&&&&&&&&&&&&&&_.group('max-heighhhhhhhhhhhhhhhhhmin:'0, ') &&&&&&&&&&&&&&&&&hhhhmax:'11,m(this);
















i: 1,m(this);
















node:&,o   })', ') &&&&&&&&&&&&&&&&&



item:'el header)lo p dMonth s('mmax-heighhhhhhhhhhhhhhhhhhhhh, "\\$ [m ') &&&&&&&&&&&&&&&&&











/ioT e lo p dtmonth and no ctrig s.
 $(d ela/                       monthsCo;
e   op[)lo p dMonth ],H0,m ') &&&&&&&&&&&&&&&&&











/ioSetothr ssluep=e')setarg'd 
    .lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'sslue=' +:lo p dMonth + ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&( viewselOchild.month c}Hlo p dMonth ? ')setarg'do :''o )(+ ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&( ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&( ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&( viewselOchild.year }} minLiminOchild)year && lo p dMonth <mminLiminOchild)month ) ||m(this);




hhhhhhhh&&&&&&&&&&&&&&&&&&&&( viewselOchild.year }} maxLiminOchild)year && lo p dMonth >mmaxLiminOchild)month )m(this);




hhhhhhhh&&&&&&&&&&&&&&&&) ? ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'
dicas('d' :''' ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&) ') &&&&&&&&&&&&&&&&&







]$(this);
r('i

 H

 HHHHH} ax-heighhhhhhhhhhhhh}s, ') &&&&&&&&&&&&&&&&&s.rt
ngs.ktrig.s.targMonth + ' browser-ropdown', ') &&&&&&&&&&&&&&&&&r isOp :c?''o : 'dicas('d' ) + ' ' + ') &&&&&&&&&&&&&&&&&_.ariaA= "('&controls:Hca; : ar.$node[0].id + '_n s(''&}) + ' ' + ') &&&&&&&&&&&&&&&&&'title="o uls.rt
ngs.labelMonthS.targ + '"' ') &&&&&&&&&&&&&)$(this);
r('i}b
 $(d ela/   tioMaderialize modifi'd$(thihhhhhhhher:    rride c}H"short_months"smr('i

 H

 Hax-hir: s.targedOchild !})nullsmr('i

 H

 Hax-h   exi _.node ),div', monthsCo;
e   op[)s.targedOchild)month ] );mr('i

 H

 Hax-hpeofi   exi _.node ),div', monthsCo;
e   op[)viewselOchild.month ] );m
 $(d ela/   tioIfrt eae'tiaine;')fblea month s.targo(in

  $(d ela   exi _.node ),div', monthsCo;
e   op[)viewselOchild.month ],&s.rt
ngs.ktrig.month )m(this);
}, //cre   MonthLabelmmlignmmmmmtioCre    thr year label. ') &&&&&//oMaderialize modifi'd$(thihhhhcre   YearLabel =&el header   rride) 'mbr('iiiiiiiiioriga   
 dYear })viewselOchild.year,iin

  $(d ela/ioIfryears s.targo()i
eset to
a literal " ffs",)ne rue)to
5.oOthrawisein

  $(d ela/iodivide in half)to
get half)bef rDp=e')half)after a   
 d year)$(this&&&s);
numbDrYears = s.rt
ngs.s.targYears =}=  ffs ? 5 : ~~  s.rt
ngs.s.targYears /j2 tb
 $(d ela/   tioIfrt eae aeDiyears to
s.targ, add a dropdown menu. ') &&&&&&&&&er:  numbDrYears s('mmax-heighhhhhhhhhss(in

  $(d elaaaaaaaaaminYear })minLiminOchild)year, /this);
hhhh

 HHHHHmaxYear })maxLiminOchild)year, /this);
hhhh

 HHHHHlowestYear })a   
 dYear - numbDrYears, /this);
hhhh

 HHHHHhrolestYear })a   
 dYear + numbDrYearsb /this);
hhhh

 HtioIfrthr min year i
egre   r t ar t e lowest year,gincre s  thr hrolest yearmax-heighhhhh

 Htiobyrt e diffeeDnceg=e')se rt e lowest year to
t e min year.lignms&&&s);


 Hir:  minYear >HlowestYear s('max-heighhhhhhhhhhhhhhrolestYear += minYear -HlowestYear /this);
hhhh

 HHHHHlowestYear })minYear ') &&&&&&&&&&&&&}b /this);
hhhh

 HtioIfrthr max year i
eless t ar t e hrolest year,)decre sert e lowest yearmax-heighhhhh

 Htiobyrt e lowerrofrthr two: availas(' and ne;''diyears.oThrnose rt emax-heighhhhh

 Htiohrolest year to
t e max year.lignms&&&s);


 Hir:  maxYear <hhrolestYear s('mmax-heighhhhhhhhhhhhhorigavailas('Years = lowestYear -)minYear,m(this);
















ne;''dYears = hrolestYear - maxYearmmax-heighhhhhhhhhhhhhlowestYear -=gavailas('Years >
ne;''dYears ?
ne;''dYears :gavailas('Years /this);
hhhh

 HHHHHhrolestYear })maxYearms);
hhhh

 HHHHH}b /this);
hhhh

 Her:  s.rt
ngs.s.targYears  && o  rride c}Hunrgfinsd s('max-heighhhhhhhhhhhhh   exi _.node ),s.targ', ') &&&&&&&&&&&&&&&&&&&&&_.group('max-heighhhhhhhhhhhhhhhhhhhhhmin:'lowestYear, ') &&&&&&&&&&&&&&&&&







max:'hrolestYear, ') &&&&&&&&&&&&&&&&&







i: 1,m(this);




















node:&,o   })', ') &&&&&&&&&&&&&&&&&







item:'el header)lo p dYear s('max-heighhhhhhhhhhhhhhhhhhhhhhhhh, "\\$ [m ') &&&&&&&&&&&&&&&&&















/ioT e lo p dtyear)and no ctrig s.
 $(d ela/                           lo p dYear,H0,m ') &&&&&&&&&&&&&&&&&















/ioSetothr ssluep=e')setarg'd 
    .lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm'sslue=' +:lo p dYear + (ga   
 dYear }=:lo p dYear ? ')setarg'do :''o )lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm]$(this);
r('i

 H

 HHHHHHHHH} ax-heighhhhhhhhhhhhhHHHH}s, ') &&&&&&&&&&&&&&&&&&&&&s.rt
ngs.ktrig.s.targYear + ' browser-ropdown', ') &&&&&&&&&&&&&&&&&&&&&r isOp :c?''o : 'dicas('d' ) + ' ' +&_.ariaA= "('&controls:Hca; : ar.$node[0].id + '_n s(''&}) + ' ' + ') &&&&&&&&&&&&&&&&&&&&&'title="o uls.rt
ngs.labelYearS.targ + '"' ') &&&&&&&&&&&&&&&&&)br('i

 H

 Hax-h}b

 H

 Hax-h}b
 $(d ela/   tioMaderialize modifi'd$(thihhhhhhhher:    rride c}H"raw"smr('i

 H

 Hax-h   exi _.node ),div', a   
 dYear tb
 $(d ela/   tioOthrawise just re exi t e year)a   
 din

  $(d ela   exi _.node ),div', a   
 dYear,&s.rt
ngs.ktrig.year sm(this);
} //cre   YearLabel
mm(this);
tioMaderialize modifi'd$(thihhhhcre   D yLabel =&el headers 'mr('i

 H

 Hax-hir: s.targedOchild !})nullsmr('i

 H

 Hax-h ela   exi _.node ),div', s.targedOchild)d   smr('i

 H

 Hax-hpeofi   exi _.node ),div', nowOchild)d   smr('i

 H

 H}$(thihhhhcre   WeekdayLabel =&el headers 'mr('i

 H

 Horigdicplay_day;m
 $(d ela/   ir: s.targedOchild !})nullsmr('i

 H

 Hax-hdicplay_day = s.targedOchild)d y;mr('i

 H

 Hpeofmr('i

 H

 Hax-hdicplay_day = nowOchild)d y;mr('i

 H

 Hss('weekday = s.rt
ngs.weekday;Full[gdicplay_day ]in

  $(d ela   exi weekdaym(this);
}
llignm/ioCre    and re exi t e entirr ca; : ar.
   exi _.node  ') &&&&&/ioDsee present   }) View ') &&&&&,div', ') &&&&&&&&&_.node  ') &&&&&&&&&&&&&,div', ') &&&&&&&&&&&&&cre   WeekdayLabel(s, ') &&&&&&&&&&&&&"picker__weekday-dicplay" ') &&&&&&&&&)+ ') &&&&&&&&&_.node  ') &&&&&&&&&&&&&/ioDiv(for short Monthmax-heighhhhh&&&&,div', ') &&&&&&&&&&&&&cre   MonthLabel("short_months"s, ') &&&&&&&&&&&&&s.rt
ngs.ktrig.month_dicplay ') &&&&&&&&&)+ ') &&&&&&&&&_.node  ') &&&&&&&&&&&&&/ioDiv(for Day ') &&&&&&&&&&&&&,div', ') &&&&&&&&&&&&&cre   DayLabel(s , ') &&&&&&&&&&&&&s.rt
ngs.ktrig.day_dicplay ') &&&&&&&&&)+ ') &&&&&&&&&_.node  ') &&&&&&&&&&&&&/ioDiv(for Yearms);
hhhh

 HHHHH,div', ') &&&&&&&&&&&&&cre   YearLabel("raw"s , ') &&&&&&&&&&&&&s.rt
ngs.ktrig.year_dicplay ') &&&&&&&&&),m(this);
s.rt
ngs.ktrig.date_dicplay ') &)+ ') &/ioCa; : ar containsrms);
_.node ,div', ') &&&&&_.node ,div', ') &&&&&  s.rt
ngs.s.targYears ?&&cre   MonthLabel() + cre   YearLabel(s(: cre   MonthLabel() + cre   YearLabel(s()(+ ') &&&&&cre   MonthNav() + cre   MonthNav( 1 s,m(this);
s.rt
ngs.ktrig.headsrms);
) +&_.node  ') &&&&&'n s('', /this);
n s('Head + ') &&&&&_.node  ') &&&&&&&&&'tbody', ') &&&&&&&&&_.group('max-heighhhhhhhhhmin:'0, ') &&&&&&&&&&&&&max:'WEEKS_IN_CALENDARp- 1,m(this);








i: 1,m(this);








node:&,tr', ') &&&&&&&&&&&&&item:'el header)rowCou:der s('mmr('i

 H

 Hax-h elatioIfrMonday i
ethr airst day and)t e month starts  n)Sunday,)shifoit e d   )back arweek.lignmmmmmmmmmmmmmmmmmss('shifoDseeBy = s.rt
ngs.airstDsy && ca; : ar.cre   r[ viewselOchild.year,)viewselOchild.month,g1 ]s.day }==:0 ? -7 : 0bm(thiiiiiiiiiiiiiiiii, "\\$ [m(this);
















_.group('max-heighhhhhhhhhhhhhhhhhhhhhmin:'DAYS_IN_WEEKp*)rowCou:der -)viewselOchild.day + shifoDseeBy + 1,atioAddg1 for weekday 0
     ') &&&&&&&&&&&&&&&&&







max:'el headers 'mr('i

 H

 Hax-hiiiiiiiiiiiiiiii, "\\$  o //min +'DAYS_IN_WEEKp- 1$(this);
r('i

 H

 HHHHHHHHH}, ') &&&&&&&&&&&&&&&&&







i: 1,m(this);




















node:&,td', ') &&&&&&&&&&&&&&&&&







item:'el header)n  getD   
) 'mmax-heighhhhhhhhhhhhhhhhhhhhhhhhhtioConvertrt e tiin d     rom a relaollegda e)to a)t  get d   . ') &&&&&s);




















n  getD   
})ca; : ar.cre   r[ viewselOchild.year,)viewselOchild.month,gn  getD   
+:  s.rt
ngs.airstDsy ?H1 : 0 )(])mmax-heighhhhhhhhhhhhhhhhhhhhhhhhhss('
sSetarg'd = s.targedOchild && s.targedOchild)pick c}gn  getD   )pick, ') &&&&&&&&&&&&&&&&&















isHrollrolled = hrollrolledOchild && hrollrolledOchild)pick c}gn  getD   )pick, ') &&&&&&&&&&&&&&&&&















isDicas('d =
dicas('dCo;
e   op && ca; : ar.dicas('d  n  getD   
) || n  getD   )pick <mminLiminOchild)pick ||on  getD   )pick >mmaxLiminOchild)pick, ') &&&&&&&&&&&&&&&&&















ablmae edD   
})_/trnstra ) a; : ar.ablmae
.toStr
ng, ca; : ar, [Hs.rt
ngs.ablmae,hn  getD   
] tb
 $(d ela/                       , "\\$ [m(this);




























_.node  ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,div', ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&n  getD   )d   , ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& el header ktrig s
) 'mmax-heighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhtioAddgt e `ina   
` or `outa   
` ctrig s based s) month 
 )view.lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmktrig s.pushr viewselOchild.month c}Hn  getD   )month ? s.rt
ngs.ktrig.ina   
 : s.rt
ngs.ktrig.outa   
 tb
 $(d ela/                       hhhhhhhhhhhhtioAddgt e `noday` ctrigier:ne;''d.m((((((((((((((((((((((((((((((((((((((((((((er:  nowOchild)pick c}gn  getD   )pick s('max-heighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhktrig s.pushr s.rt
ngs.ktrig.now )m(this);




hhhhhhhh&&&&&&&&&&&&&&&&&&&&&&&&}b /this);
hhhh

 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHtioAddgt e `s.targed` ctrigier:soin.o ng's)setarg'd and)t e tiin match s.
 $(d ela/                                   er:  isSetarg'd s('max-heighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhktrig s.pushr s.rt
ngs.ktrig.setarg'd )m(this);




hhhhhhhh&&&&&&&&&&&&&&&&&&&&&&&&}b /this);
hhhh

 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHtioAddgt e `hrollrolled` ctrigier:soin.o ng's)hrollrolled and)t e tiin match s.
 $(d ela/                                   er:  isHrollrolled s('max-heighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhktrig s.pushr s.rt
ngs.ktrig.hrollrolled )m(this);




hhhhhhhh&&&&&&&&&&&&&&&&&&&&&&&&}b /this);
hhhh

 HHHHHHHHHHHHHHHHHHHHHHHHHHHHHtioAddgt e `dicas('d` ctrigier:soin.o ng's)dicas('doand)t e ochild match s.
 $(d ela/                                   er:  isDicas('d s('max-heighhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhktrig s.pushr s.rt
ngs.ktrig.dicas('do)m(this);




hhhhhhhh&&&&&&&&&&&&&&&&&&&&&&&&}b /this);
hhhh

 HHHHHHHHHHHHHHHHHHHHHHHHHHHHH, "\\$ ktrig s.join('' o )lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm&&&&&&&&})([&s.rt
ngs.ktrig.day(]), ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'d  a-pick=' +:n  getD   )pick + ' ' +&_.ariaA= "(' /this);
hhhh

 HHHHHHHHHHHHHHHHHHHHHHHHHHHHH,ole:&,gridcell', ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&label:
ablmae edD   , ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&setarg'd: isSetarg'd && ca; : ar.$node.sslrs c}=  blmae edD   
?  ffs :)null, ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&aroll;''sc : ant: isHrollrolled ?  ffs :)null, ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&dicas('d: isDicas('d ?  ffs :)nulllignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm&&&&&&&&})lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm&&&&), ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&'', ') &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&_.ariaA= "('&,ole:&,present   })'&})lignmmmmmmmmmmmmmmmmmmmmmmmmmmmmm]
ti : , "\\$m&&&&&&&&&&&&&&&&&&&&&&&&&&&&} ax-heighhhhhhhhhhhhhHHHH}s ax-heighhhhhhhhhhhhh]
ti : , "\\$m&&&&&&&&&&&&&&&&}b

 H

 Hax-h}s ax-heighs,m(this);
s.rt
ngs.ktrig.tas(',$(this);
'id="o ulca; : ar.$node[0].id + '_n s(''&+ '" ' +&_.ariaA= "(' /this);
hhhh,ole:&,grid', ') &&&&&&&&&controls:Hca; : ar.$node[0].id, ') &&&&&&&&&re donly:) ffs ax-heigh}s ax-hs ax-h,&s.rt
ngs.ktrig.ca; : ar_containsr)
ti endHca; : arb /this+llignm/io*oFbl Firefox  blms to
submin, make#sure to)se rt e buttons’ `nype` ae ribut s a
e“button”.lignm_.node  ') &&&&&'div', ') &&&&&_.node &,button',&s.rt
ngs.noday, "btn-flao picker__noday", ') &&&&&&&&&'nype=button d  a-pick=' +:nowOchild)pick + ') &&&&&&&&&r isOp :c&& !ca; : ar.dicas('d nowOchild)c?''o : ' dicas('d' ) + ' ' + ') &&&&&&&&&_.ariaA= "('&controls:Hca; : ar.$node[0].id }s()(+ ') &&&&&_.node &,button',&s.rt
ngs.clear,)"btn-flao picker__clear", ') &&&&&&&&&'nype=button d  a-clear=1' + ') &&&&&&&&&r isOp :c?''o : ' dicas('d' ) + ' ' + ') &&&&&&&&&_.ariaA= "('&controls:Hca; : ar.$node[0].id }s()(+ ') &&&&&_.node ,button',&s.rt
ngs.close, "btn-flao picker__close", ') &&&&&&&&&'nype=button d  a-close= ffs ' + ') &&&&&&&&&r isOp :c?''o : ' dicas('d' ) + ' ' + ') &&&&&&&&&_.ariaA= "('&controls:Hca; : ar.$node[0].id }s(),m(this);
s.rt
ngs.ktrig.footsrms);
) ti : , "\\$m} //DseePicker.protot);
.node


};
/** /* T e d   )picker ropdowns. '*/
DseePicker.ropdowns =: el header prefix
) 'mmax-h, "\\$ 'mm(this);
/ioT e titleglabel to)us; for t e month nav(buttonsm(this);
labelMonthNext: 'Next month', ') &&&&&labelMonthPnbi:''Pnbiious month', m(this);
/ioT e titleglabel to)us; for t e dropdown s.targo(sm(this);
labelMonthSetarg:''S.targ a month', ') &&&&&labelYearS.targ:''S.targ a year', m(this);
/ioMonths and)weekday;m(this);
monthsFull: [ 'January',&'February',&'March',&'April',&'May',&'June',&'July',&'August',&'SeptembDr',&'OrgobDr',&'NovembDr',&'DecembDr' ], ') &&&&&monthsShort: [ 'Jan',&'Feb',&'Mar',&'Apr',&'May',&'Jun',&'Jul',&'Aug',&'Sep',&'Org',&'Nov',&'Dec' ], ') &&&&&weekday;Full: [ 'Sunday',&'Monday',&'Tuesday',&'Wednesday',&'Thursday',&'Friday',&'Sa"\\day' ], ') &&&&&weekday;Short: [ 'Sun',&'Mon',&'Tue',&'Wed',&'Thu',&'Fri',&'Sa"' ],iin

  $(dtioMaderialize modifi'd$(thihhhhweekday;L.rter: [ 'S',&'M',&'T',&'W',&'T',&'F',&'S' ],iin

  $(dtioToday and)clear /this);
noday:''Today', ') &&&&&clear:''Clear', ') &&&&&close:''Close', m(this);
/ioT e ablmae to)show s) t e `input` .tamentm(this);
ablmae: 'd
mmmm,
yyyy', m(this);
/ioCtrig sm(this);
ktrig: 'mmax-heighhhhhn s(': prefix
+&'n s('', max-heighhhhhheadsr: prefix
+&'headsr',mbbr('i(this);
tioMaderialize Add'd ktrig sm(this);




date_dicplay: prefix
+&'date-dicplay', ') &&&&&&&&&day_dicplay: prefix
+&'day-dicplay', ') &&&&&&&&&month_dicplay: prefix
+&'month-dicplay', ') &&&&&&&&&year_dicplay: prefix
+&'year-dicplay', ') &&&&&&&&&ca; : ar_containsr: prefix
+&'ca; : ar-containsr', ') &&&&&&&&&ti end
mbbr('i(this);
navPnbi:'prefix
+&'nav--unbi', ') &&&&&&&&&navNext: prefix
+&'nav--next', ') &&&&&&&&&navDicas('d: prefix
+&'nav--dicas('d', max-heighhhhhmonth: prefix
+&'month', ') &&&&&&&&&year: prefix
+&'year', max-heighhhhhs.targMonth: prefix
+&'s.targ--month', ') &&&&&&&&&s.targYear: prefix
+&'s.targ--year', max-heighhhhhweekday;: prefix
+&'weekday', max-heighhhhhday: prefix
+&'day', ') &&&&&&&&&dicas('d: prefix
+&'day--dicas('d', ') &&&&&&&&&s.targ'd: prefix
+&'day--setarg'do, ') &&&&&&&&&hrollrolled: prefix
+&'day--hrollrolled', ') &&&&&&&&&now: prefix
+&'day--today', ') &&&&&&&&&ina   
: prefix
+&'day--ina   
', ') &&&&&&&&&outa   
: prefix
+&'day--outa   
', max-heighhhhhfootsr: prefix
+&'footsr', max-heighhhhhbuttonClear: prefix
+&'button--clear', ') &&&&&&&&&buttonToday: prefix
+&'button--today', ') &&&&&&&&&buttonClose:'prefix
+&'button--close' ax-heigh}
eigh}
}s(:Picker.ktrig s(s.picker + '__o )l

};
/** /* Extend)t e picker to addgt e d   )picker. '*/
Picker.extend &,pickad   ',&DseePicker )l

}));m

;(el heade r$) 'mmax$.fn.chararg'rCou:der =&el headers{max-h, "\\$  o //each(el headers{max-hhhss('$input =&$( o /);mr('i

ss('$cou:derEtament =&$input.p=rent(s.fve'('span[ctrig="chararg'r-cou:der"]');m
 $(d eti chararg'rgcou:der hatialre dy been add'doapp :d;')to t e p=rent containsrms);
  er: $cou:derEtament. // Ifs('m(this);
, "\\$;mr('i

}b /this)orr itHasL// IfAe ribut  =&$input.ae r(' // If') !c}Hunrgfinsd;m
 $(d eif(itHasL// IfAe ribut )'m(this);
$input.der'input',&upd   Cou:der);mr('i

 H$input.der'a   
',&upd   Cou:der);mr('i

 H$input.der'blur',&re    Cou:derEtament);m
 $(d elaaddCou:derEtament($input);mr('i

}b /thi});mr(};m
 $el heade upd   Cou:derrs{max-horigmaxL// Ifrrrrr= +$( o /).ae r(' // If'), ') &argualL// Ifrrrrrr= +$( o /).sslrs. // If, ') &isValidL// Ifrrrrr= argualL// Ifr<=gmaxL// If;m
 $(d$( o /).p=rent(s.fve'('span[ctrig="chararg'r-cou:der"]') ax-heighhhhhhhhhhhhh.html( argualL// Ifr+ '/' +:maxL// If);m
 $(daddInputStyle(isValidL// If,d$( o /));mr(}m
 $el heade addCou:derEtament($input)('max-horr $cou:derEtament =&$input.p=rent(s.fve'('span[ctrig="chararg'r-cou:der"]');m
 $(der: $cou:derEtament. // Ifs('m(this), "\\$;mr('i}b /thi$cou:derEtament =&$('<span/>') ax-heighhhhhhhhhhhhhhhhh.addCtrig('chararg'r-cou:der') ax-heighhhhhhhhhhhhhhhhh.cig('floa"','rroll') ax-heighhhhhhhhhhhhhhhhh.cig('font-size','12px') ax-heighhhhhhhhhhhhhhhhh.cig('heroll', 1);m
 $(d$input.p=rent(s.app :d $cou:derEtament);mr(}m
 $el heade re    Cou:derEtamentrs{max-h$( o /).p=rent(s.fve'('span[ctrig="chararg'r-cou:der"]').html('');mr(}m
 $el heade addInputStyle(isValidL// If,d$input)'max-horr inputHasInvalidCtrig =&$input.hatCtrig('invalid');mr('ier: isValidL// Ifr&& inputHasInvalidCtrigs('m(this)$input.re    Ctrig('invalid');mr('i}
eighpeofier(!isValidL// Ifr&& !inputHasInvalidCtrigs'm(this)$input.re    Ctrig('valid');mr('is)$input.addCtrig('invalid');mr('i}
ei}m
 $$(d   ment).re dy(el headers{max-h$r'input, text=rea').chararg'rCou:der();mr(});m
}( jQuery ));m;(el heade r$) 'mmaxorigmethodg =&'mmax-hinit :'el headero   });s('m(this)origdopdowns =:'m(this);
time_constant: 200,atiomsm(this);
dict: -100,atiozoom sca;  TODO: make# o /hmore intuiollegatianio   })m(this);
shifo:'0,atiospac ng)for ce:der imags ax-heighpadd
ng:'0,atioPadd
ng between nde ce:der ite)s$ax-heighfull_width:      ,atioChange to full width styles$ax-heighve'ica ors:      ,atioTogglehve'ica ors$ax-heighno_wrap:      &/ioDon't(wrap arou:  and)cycle t roughrite)s.
 $(d e};mr('is)o   }); =&$.extend dopdowns,)o   }););m
 $(d e, "\\$  o //each(el headers 'mmax-heighorr imagss,)offset, ce:der, press d, dim,gcou:d, ') &&&&&&&&&refeeDnce,&refeeDnceY, amplitude,hn  get, velocity, ') &&&&&&&&&xablm, frame,hnimestamp,hnicker, dragg d, vertical_dragg d;max-heighorr $ve'ica ors =&$('<ul ctrig="ve'ica ors"></ul>');m
m(this);
/ioInitializemax-heighorr view =&$( o /);mr('i

mmss('showIe'ica ors =&view.ae r('d  a-ve'ica ors') || o   });.ve'ica ors;
m(this);
/ioDon't(doublehveitialize.
 $(d elaer: view.hatCtrig('initialized')s('max-heighhhtioRtdraw carousel. ') &&&&&-h$( o /).trnstra 'carouselNexto, [0.000001]);mr('i

 H

, "\\$  rue;mr('i

 H}m
m(this);
/ioO   });
 $(d elaer: o   });.full_widths('max-heighhho   });.dict = 0;max-heighhhorigairstImags =&view.fve'('.carousel-ite) img').airst();mr('i

 H

er: airstImags. // Ifs('m(this);
 H

emagsHeroll =&eirstImags.der'load',&el headers{max-hhh-heighhhoiew.cig('heroll', $( o /).heroll());mr('i

 H

 H});mr('i

 H

}ipeofi'm(this);
 H

emagsHeroll =&view.fve'('.carousel-ite)').airst().heroll();mr('i

 H

 Hsiew.cig('heroll', emagsHeroll);mr('i

 H

}
max-heighhhtioOffset&eix'd items whrnove'ica ors.mr('i

 H

er: showIe'ica orss 'mr('i

 H

 Hoiew.fve'('.carousel-eix'd-ite)').addCtrig('utth-ve'ica ors');mr('i

 H

}
'i

 H

}
m


 H

 Hoiew.addCtrig('initialized');mr('i

 Hpress d =      ;mr('i

 Hoffset }gn  get = 0;max-heighimagss:  [];max-heighite)_width =&view.fve'('.carousel-ite)').airst().innsrWidth();mr('i

 Hdim =&ite)_width * 2 +:o   });.padd
ng;m


 H

 Hoiew.fve'('.carousel-ite)').each(el heade: is 'mr('i

 H

imagss.pushr$( o /)[0]);mr('i

 H

er: showIe'ica orss 'mr('i

 H

 Horr $ve'ica or =&$('<li ctrig="ve'ica or-ite)"></li>');m
 $(d ela/   tioAddgaroll;)to fvrst bygdopdown. ') &&&&&&&&&er: i }==:0s('max-heighhhhhhh$ve'ica or.addCtrig('aroll;');mr('i

 H

 H}m
 $(d ela/   tioHandlehclicks  n)ve'ica ors.mr('i

 H

hh$ve'ica or.click(el heade: s('max-heighhhhhhhss('
     = $( o /).
    ();mr('i

 H

 H )cycleTo(
    );mr('i

 H

 H});mr('i

 H

hh$ve'ica ors.app :d $ve'ica or);mr('i

 H

}
'i

 H

});m
 $(d elaer: showIe'ica orss 'mr('i

 H

oiew.app :d $ve'ica or/);mr('i

mm}$(thihhhhcou:d })imagss.l// If;m
$ax-heighfu heade:setupEind(s s('max-heighhher: n:Pb,Towve'ow.detouchstart !c}H'unrgfinsd's 'mr('i

 H

 Hoiew[0].addEind(Lictenra 'touchstart',hn p);mr('i

 H

 Hsiew[0].addEind(Lictenra 'touch    ', drag);mr('i

 H

 Hsiew[0].addEind(Lictenra 'touch :d',&rele se);mr('i

 H

}
'i

 H

 Hsiew[0].addEind(Lictenra 'mousedown',hn p);mr('i

 H

siew[0].addEind(Lictenra 'mouse    ', drag);mr('i

 H

siew[0].addEind(Lictenra 'mouseup',&rele se);mr('i

 H

siew[0].addEind(Lictenra 'mousele   ', rele se);mr('i

 H

siew[0].addEind(Lictenra 'click', click);mr('i

mm}$$ax-heighfu heade:xpos(es('max-heighhhtiotouch eind(max-heighhher: e.n  getTouch s(&&  e.n  getTouch s.l// If >=m1)s 'mr('i

 H

 H, "\\$ e.n  getTouch s[0].clind(X;mr('i

 H

}
max-heighhhtiomouse eind(max-heighhh, "\\$ e.clind(X;mr('i

 H}$$ax-heighfu heade:ypos(es('max-heighhhtiotouch eind(max-heighhher: e.n  getTouch s(&&  e.n  getTouch s.l// If >=m1)s 'mr('i

 H

 H, "\\$ e.n  getTouch s[0].clind(Y;mr('i

 H

}
max-heighhhtiomouse eind(max-heighhh, "\\$ e.clind(Y;mr('i

 H}$$ax-heighfu heade:wrap(xs 'mr('i

 H

, "\\$ (x >=mcou:d)c?'(x %mcou:d)c:'(x <:0s(?:wrap(cou:d +'(x %mcou:d))c:'x;mr('i

 H}$$ax-heighfu heade:scroll(xs 'mr('i

 H

ss('
,)half,)delta, dir   ween,ipe, alignment, xTransl   });m
 $(d ela/ offset }g n:Pb,Tox }==:'numbDr's(?:xc:'offset;mr('i

 H

ce:der =oMadh.floor((offset +Hdim / 2) iodim);mr('i

 H

delta = dffset -
ce:der *odim;mr('i

 H

dir =o(delta <:0s(?:1 : -1;mr('i

 H

tween = -dir *
delta * 2 /odim;mr('i

 H

half)=mcou:d >> 1;m
 $(d ela/ er: !o   });.full_widths('max-heighhh  alignment)=m'transl  eX(o ul(siew[0].clind(Width -
ite)_width) /j2 + 'pxs ';max-heighhh  alignment)+=m'transl  eY(o ul(siew[0].clind(Heroll -
ite)_width) /j2 + 'pxs';max-heighhh}ipeofi'm(this);
 H

alignment)=m'transl  eX(0s';max-heighhh}
max-heighhhtioSetove'ica or aroll;mr('i

 H

er: showIe'ica orss 'mr('i

 H

 Horr diff =o(ce:der %mcou:d);mr('i

 H

 Hss('aroll;Ie'ica or =&$ve'ica ors.fve'('.ve'ica or-ite).aroll;');mr('i

 H

 Her: aroll;Ie'ica or.
    () !c}Hdiffs('max-heighhhhhhharoll;Ie'ica or.re    Ctrig('aroll;');mr('i

 H

 H &$ve'ica ors.fve'('.ve'ica or-ite)').eq(diffs.addCtrig('aroll;');mr('i

 H

 H}max-heighhh}
max-heighhhtioce:dermax-heighhhtioDon't(show wrapp'd items.mr('i

 H

er: !o   });.no_wrap ||o(ce:der >=:0 && ce:der <mcou:d))c'max-heighhhhhel =&imagss[wrap(ce:der)];max-heighhhhhel.style[xablm]   alignment)+mr('i

 H

 H &' transl  eX(o ul(-delta / 2) + 'pxs')+mr('i

 H

 H &' transl  eX(o ul(dir *
o   });.shifoi*
tween * i) + 'pxs')+mr('i

 H

 H &' transl  eZ(o ul(o   });.dict *
tween) + 'pxs';max-heighhhhhel.style.zI     = 0;mr('i

 H

 Her: o   });.full_widths('
tweenedOpac ty = 1;&}b

 H

 Hax-hpeofi'
tweenedOpac ty = 1 -
0.2 *
tween;&}b

 H

 Hax-hpe.style.opac ty = tweenedOpac ty;max-heighhhhhel.style.dicplay)=m'block';max-heighhh}
max-heighhhable(i = 1;&ir<=ghalf; ++i)c'max-heighhhhhtiorroll sidemr('i

 H

 Her: o   });.full_widths('mr('i

 H

 H &zTransl   }) = d   });.dict;mr('i

 H

 H &tweenedOpac ty =  i }==:half)&& delta <:0s(?:1 -
tween : 1;mr('i

 H

 H}ipeofi'm(this);
 H

 &zTransl   }) = d   });.dict *
 i * 2 +:tween * dir);mr('i

 H

 H &tweenedOpac ty = 1 -
0.2 *
 i * 2 +:tween * dir);mr('i

 H

 H}max-heighhhhhtioDon't(show wrapp'd items.mr('i

 H



er: !o   });.no_wrap ||oce:der +&ir<mcou:d)c'm(this);
 H

 &el =&imagss[wrap(ce:der +&i)];max-heighhhhhhhel.style[xablm]   alignment)+mr('i

 H

 H & &' transl  eX(o ul(o   });.shifoiul(dim * i -
delta) / 2) + 'pxs')+mr('i

 H

 H & &' transl  eZ(o ulzTransl   }) + 'pxs';max-heighhhhhhhel.style.zI     = -i;max-heighhhhhhhel.style.opac ty = tweenedOpac ty;max-heighhhhhhhel.style.dicplay)=m'block';max-heighhh

}
m


 H

 Hhhhhtiolefl sidemr('i

 H

 Her: o   });.full_widths('mr('i

 H

 H &zTransl   }) = d   });.dict;mr('i

 H

 H &tweenedOpac ty =  i }==:half)&& delta >:0s(?:1 -
tween : 1;mr('i

 H

 H}ipeofi'm(this);
 H

 &zTransl   }) = d   });.dict *
 i * 2 -:tween * dir);mr('i

 H

 H &tweenedOpac ty = 1 -
0.2 *
 i * 2 -:tween * dir);mr('i

 H

 H}max-heighhhhhtioDon't(show wrapp'd items.mr('i

 H



er: !o   });.no_wrap ||oce:der -
i >=:0)c'm(this);
 H

 &el =&imagss[wrap(ce:der -&i)];max-heighhhhhhhel.style[xablm]   alignment)+mr('i

 H

 H & &' transl  eX(o ul(-o   });.shifoiul(-dim * i -
delta) / 2) + 'pxs')+mr('i

 H

 H & &' transl  eZ(o ulzTransl   }) + 'pxs';max-heighhhhhhhel.style.zI     = -i;max-heighhhhhhhel.style.opac ty = tweenedOpac ty;max-heighhhhhhhel.style.dicplay)=m'block';max-heighhh

}
-heighhh

}
max-heighhhtioce:dermax-heighhhtioDon't(show wrapp'd items.mr('i

 H

er: !o   });.no_wrap ||o(ce:der >=:0 && ce:der <mcou:d))c'max-heighhhhhel =&imagss[wrap(ce:der)];max-heighhhhhel.style[xablm]   alignment)+mr('i

 H

 H &' transl  eX(o ul(-delta / 2) + 'pxs')+mr('i

 H

 H &' transl  eX(o ul(dir *
o   });.shifoi*
tween) + 'pxs')+mr('i

 H

 H &' transl  eZ(o ul(o   });.dict *
tween) + 'pxs';max-heighhhhhel.style.zI     = 0;mr('i

 H

 Her: o   });.full_widths('
tweenedOpac ty = 1;&}b

 H

 Hax-hpeofi'
tweenedOpac ty = 1 -
0.2 *
tween;&}b

 H

 Hax-hpe.style.opac ty = tweenedOpac ty;max-heighhhhhel.style.dicplay)=m'block';max-heighhh}
-heighhh}
$ax-heighfu heade:track(s 'mr('i

 H

ss('now,helaps d, delta, v;m
 $(d ela/ now =&Dsee.now();mr('i

 H

elaps d = now -:timestamp;mr('i

 H

timestamp = now;mr('i

 H

delta = dffset -
frame;mr('i

 H

frame = dffset;m
 $(d ela/ v(='1000 *
delta / (1 + elaps d);mr('i

 H

selocity = 0.8 *
v + 0.2 *
selocity;mr('i

 H}$$ax-heighfu heade:autoScroll(s 'mr('i

 H

ss('elaps d, delta;m
 $(d ela/ er: amplitude)c'max-heighhhhhelaps d = Dsee.now() -:timestamp;mr('i

 H



delta = amplitude/* Math.exp(-elaps d /
o   });.time_constant);mr('i

 H

 Her: delta >:2 ||odelta <:-2s('max-heighhhhhhhhhscroll(n  get -
delta);max-heighhhhhhh

, questAnima  })Frame(autoScroll);mr('i

 H

 H}ipeofi'm(this);
 H

 &hhscroll(n  get);mr('i

 H

 H}max-heighhh}
r('i

 H}$$ax-heighfu heade:click(es('max-heighhhtioDicas('hclicks er:carousel uas dragg d.mr('i

 H

er: dragg d)c'max-heighhhhhe.unbientDopdown();mr('i

 H

 He.stopPropagaeaders;mr('i

 H

 H, "\\$      ;mmax-heighhh}ipeofier: !o   });.full_widths('max-heighhh  ss('clickedI     = $(e.n  get).closest('.carousel-ite)').
    ();mr('i

 H

 Horr diff =o(ce:der %mcou:d) -
clickedI    ;m
 $(d ela/   tioDicas('hclicks er:carousel uas shifo d byhclickmr('i

 H

 Her: diff !==:0s('max-heighhhhhhhe.unbientDopdown();mr('i

 H

 H He.stopPropagaeaders;mr('i

 H

 H}b

 H

 Hax-hcycleTo(clickedI    );mr('i

 H

}
'i

 H

}
m'i

 H

fu heade:cycleTo(ns 'mr('i

 H

ss('diff =o(ce:der %mcou:d) -
);m
 $(d ela/ tioAccou:d for wraparou: .mr('i

 H

er: !o   });.no_wraps('m(this);
 H

er: diff <:0s('max-heighhhhhhher: Math.abs diff +mcou:d) < Math.abs diff))c''diff +=mcou:d;H}m
 $(d ela/   }ipeofier: diff >:0s('max-heighhhhhhher: Math.abs diff -mcou:d) < diffs(''diff -=mcou:d;H}mr('i

 H

 H}b

 H

 Hax}
max-heighhhtioCall unbi or next accord
ngly.mr('i

 H

er: diff <:0s('max-heighhhhhoiew.trnstra 'carouselNexto, [Math.abs diff)]);mmax-heighhh}ipeofier: diff >:0s('max-heighhhhhoiew.trnstra 'carouselPnbio, [diff]);mr('i

 H

}
'i

 H

}
m'i

 H

fu heade:tap(es('max-heighhhpress d =  rue;mr('i

 H  dragg d =      ;mr('i

 H  vertical_dragg d =      ;mr('i

 H  refeeDnce = xpos(es;mr('i

 H  refeeDnceY = ypos(es;mmr('i

 H

selocity = amplitude/= 0;mr('i

 H

frame = dffset;mr('i

 H

timestamp = Dsee.now();mr('i

 H

clearI:dersslrnicker);mr('i

 H

ticker = s.rI:dersslrnrack,'100s;mmr('i

 H}
m'i

 H

fu heade:drag(es('max-heighhhss('x,)delta, deltaY;mr('i

 H

er: press ds('max-heighhhhhx = xpos(es;mr('i

 H    y = ypos(es;mr('i

 H    delta = refeeDnce -'x;mr('i

 H    deltaY =oMadh.abs refeeDnceY - y);mr('i

 H

 Her: deltaY <:30 && !vertical_dragg ds('max-heighhhhhhhtioIfrverticalhscroll
ng don't(allow dragg
ng.
 $(d ela/     er: delta >:2 ||odelta <:-2s('max-heighhhhhhhhhdragg d =  rue;mr('i

 H        refeeDnce = x;mr('i

 H        scroll(offset +Hdelta);max-heighhhhhhh}m
 $(d ela/   }ipeofier: dragg ds('max-heighhhhhhhtioIfrdragg
ng don't(allow verticalhscroll.
 $(d ela/     e.unbientDopdown();mr('i

 H

 H He.stopPropagaeaders;mr('i

 H

 H H, "\\$      ;mmax-heighhh H}ipeofi'm(this);
 H

 &tioVerticalhscroll
ng.
 $(d ela/     vertical_dragg d =  rue;mr('i

 H    }b

 H

 Hax}
max-heighhher: dragg ds('max-heighhhhhtioIfrdragg
ng don't(allow verticalhscroll.
 $(d ela/   e.unbientDopdown();mr('i

 H

 He.stopPropagaeaders;mr('i

 H

 H, "\\$      ;m'i

 H    }b

 H

 H}
m'i

 H

fu heade:rele se(es('max-heighhher: press ds('max-heighhhhhpress d =      ;mr('i

 H H}ipeofi'm(this);
 H

, "\\$;mr('i

 Hax}
max-heighhhclearI:dersslrnicker);mr('i

 H

t  get = dffset;mr('i

 H

er: velocity >'10 ||ovelocity < -10s('max-heighhh  amplitude/= 0.9 *
selocity;mr('i

 H H

t  get = dffset +Hamplitude;m'i

 H    }b

 H

 H

t  get = Madh.rou: (n  get iodim) *odim;mmax-heighhhtioNo(wrap of items.mr('i

 H

er: o   });.no_wraps('m(this);
 H

er: n  get >= dim * (cou:d -m1)s 'mr('i

 H

 H

t  get = dim * (cou:d -m1);mr('i

 H

 H}ipeofier: n  get <:0s('max-heighhhhhhhn  get = 0;max-heigh    }b

 H

 H

}b

 H

 H

amplitude/= n  get -
dffset;mr('i

 H

timestamp = Dsee.now();mr('i

 H

, questAnima  })Frame(autoScroll);mmr('i

 H

er: dragg d)c'max-heighhhhhe.unbientDopdown();mr('i

 H

 He.stopPropagaeaders;mr('i

 H

}mr('i

 H

, "\\$      ;m'i

 H  }
max-heighxablm)=m'transablm';max-heigh['webkit',&'Moz',&'O',&'ms'].biery(el heade: prefixs 'mr('i

 H

ss('e)=mprefix
+&'Transablm';max-heighhher: n:Pb,Tod   ment.body.style[e] !c}H'unrgfinsd's 'mr('i

 H

 Hxablm)=me;mr('i

 H

 H, "\\$      ;m'i

 H    }b

 H

 H

, "\\$  rue;mr('i

 H});m
mmr('i

 Hwve'ow.deresize =hscroll;mmr('i

 HsetupEind(s s;mr('i

 Hscroll(offset);mmr('i

 H$( o /).der'carouselNexto, el headere, ns('max-heighhher: n }==:unrgfinsds 'mr('i

 H

 Hn = 1;m'i

 H    }b

 H

 H

t  get = offset +Hdim * n;max-heighhher: offset !c}gn  gets('max-heighhh  amplitude/= n  get -
dffset;mr('i

 H



timestamp = Dsee.now();mr('i

 H



, questAnima  })Frame(autoScroll);mr('i

 H

}
'i

 H

});m
 $(d ela$( o /).der'carouselPnbio, el headere, ns('max-heighhher: n }==:unrgfinsds 'mr('i

 H

 Hn = 1;m'i

 H    }b

 H

 H

t  get = offset -Hdim * n;max-heighhher: offset !c}gn  gets('max-heighhh  amplitude/= n  get -
dffset;mr('i

 H



timestamp = Dsee.now();mr('i

 H



, questAnima  })Frame(autoScroll);mr('i

 H

}
'i

 H

});m
 $(d ela$( o /).der'carouselSeto, el headere, ns('max-heighhher: n }==:unrgfinsds 'mr('i

 H

 Hn = 0;m'i

 H    }b

 H

 H

cycleTo(ns;
'i

 H

});m
 $(d e});m
mmr('i}, ') &next : el headerns('max-hei$( o /).trnstra 'carouselNexto, [n]);mr('i}, ') &unbi : el headerns('max-hei$( o /).trnstra 'carouselPnbio, [n]);mr('i}, ') &set : el headerns('max-hei$( o /).trnstra 'carouselSeto, [n]);mr('i}
r(};m
mr('i$.fn.carousel =&el headermethodOrO   });s('m(this)ir:  methodg[methodOrO   });] s('max-heigh, "\\$ methodg[ methodOrO   }); ].apply(  o /, Array.protot);
.slic{.ca;l( arg ments,g1 ));mr('i

}ipeofier:  n:Pb,TomethodOrO   }); }==:'ochild' ||o!omethodOrO   }); s('max-heightioDopdown)to "init"max-heigh, "\\$ methodg.init.apply(  o /, arg ments );mr('i

}ipeofi'max-heigh$.error(&'Method ' +&omethodOrO   }); + ' does not exict de:jQuery.carousel' );mr('i

}mr('i};atioPlug
n end
}( jQuery ));