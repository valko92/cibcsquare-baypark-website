/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});;/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;'use strict';
/*jshint globalstrict: true*/
/* globals $ */
function CSVToArray(strData, strDelimiter) {
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
    // Delimiters.
    "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
    // Quoted fields.
    "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
    // Standard fields.
    "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
        // Get the delimiter that was found.
        var strMatchedDelimiter = arrMatches[1];
        // Check to see if the given delimiter has a length
        // (is not the start of string) and if it matches
        // field delimiter. If id does not, then we know
        // that this delimiter is a row delimiter.
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            // Since we have reached a new row of data,
            // add an empty row to our data array.
            arrData.push([]);
        }
        // Now that we have our delimiter out of the way,
        // let's check to see which kind of value we
        // captured (quoted or unquoted).
        if (arrMatches[2]) {
            // We found a quoted value. When we capture
            // this value, unescape any double quotes.
            var strMatchedValue = arrMatches[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            // We found a non-quoted value.
            var strMatchedValue = arrMatches[3];
        }
        // Now that we have our value string, let's add
        // it to the data array.
        arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
  }
  
  function CSV2JSON(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
        objArray[i - 1] = {};
        for (var k = 0; k < array[0].length && k < array[i].length; k++) {
            var key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }
  
    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");
  
    return str;
  }
  
// slide up header on scroll
function initScroll()
{
    var lastScrollTop = 0;
    window.addEventListener( 'scroll', function ()
    {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300;

        if ( ( $( window ).width() < 960 ) && ( window.location.pathname !== '/building/test-fits/' ) ) { /* TABLET AND MOBILE */

            var st = $( this ).scrollTop();
            if ( st > lastScrollTop ) {
                $( 'nav' ).addClass( 'header-collapse' );
                $( '.logo-wrapper' ).addClass( 'header-logo-collapse' );
            } else {
                $( 'nav' ).removeClass( 'header-collapse' );
                $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
            }
            lastScrollTop = st;

            if ( st < shrinkOn ) {
                $( 'nav' ).removeClass( 'header-collapse' );
                $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
            }

        } else {

            if ( distanceY >= 5 ) { /* DESKTOP */
                $( 'nav' ).addClass( 'header-collapse' );
                $( '.logo-wrapper' ).addClass( 'header-logo-collapse' );
            } else {
                if ( $( 'nav' ).hasClass( 'header-collapse' ) ) {
                    $( 'nav' ).removeClass( 'header-collapse' );
                    $( '.logo-wrapper' ).removeClass( 'header-logo-collapse' );
                }
            }

        }
    });
}
// slide up header on scroll

//display desktop subpages navigation on hover
function hoverExpand()
{
    $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).on( 'mouseover', function ()
    {

        $( '.drop-down-mobile-bg' ).removeClass( 'hidden' );
        $( '.drop-down-nav' ).removeClass( 'slide-out-drop' ).addClass( 'slide-in-drop' );
    });

    $( '.drop-down-nav, .nav.navbar-nav' ).on( 'mouseout', function ()
    {
        $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
        $( '.drop-down-mobile-bg' ).addClass( 'hidden' );
    });
}

//scrollToElement
function onElement( trigger, element )
{
    var hT = $( trigger ).offset().top;
    var hH = $( element ).outerHeight();
    var wH = $( window ).height();
    var wS = $( window ).scrollTop();

    if ( wS > ( hT + hH - wH ) ) {
        return true;
    }
}

//updating the views modal
function viewModalUpdate( heightParam )
{
    switch ( heightParam ) {
        case 'high-rise':
            //test-fits needs these to hide the view icon on heights that have no panoramas with them
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 49 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/214/panorama.html' );
            break;
        case 'mid-high-rise':
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 40 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/175/panorama.html' );
            break;
        case 'mid-low-rise':
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );
            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 25 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/107/panorama.html' );
            break;
        case 'low-rise':
            $( '.view-icon' ).addClass( 'hidden' );
            break;
        case 'podium':
            $( '.view-icon' ).addClass( 'hidden' );
            break;
        default:
            $( '.view-icon' ).removeClass( 'hidden' );
            $( '.view-icon' ).attr( 'data-target', '#view' );

            //dynamic panorama content per specified floor
            $( '#view .modal-title' ).html( 'Floor 49 - Panorama' );
            $( '#view .pano-body  .panorama-iframe' ).attr( 'src', '/assets/panos/214/panorama.html' );
            break;
    }
}


$( document ).ready( function ()
{
    //redirecting http://bayparkcentre.com.s3-website-us-east-1.amazonaws.com/ to www.bayparkcentre.com
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if ( window.location.host === 'bayparkcentre.com.s3-website-us-east-1.amazonaws.com' ) {
        window.location.href = "www.bayparkcentre.com" + pathname + hash;
    }

    var $testFitsCont = $( '.test-fits-container' );
    var $testFitsWrapper = $testFitsCont.find( '.test-fits-wrapper' );
    var $testFitsPlates = $testFitsWrapper.find( '.test-fits-plates' );
    var $testFitsScrollableCont = $( '.test-fits-plates-screen .scrollable-content' );

    initScroll();

    //widow fix for page titles
    $( '.titlebox-wrapper h1' ).each( function ()
    {
        var string = $( this ).html();
        string = string.replace( / ([^ ]*)$/, '&nbsp;$1' );
        $( this ).html( string );
    });


    //allowing user to skip the white preloader, if page is taking too long
    $( '.preloader-skip' ).on( 'click', function ()
    {
        $( '.preloader' ).addClass( 'fadeOutPreloader' );
    });

    //when content loads, fade out white preloader and scroll down to section if hash present in url
    $( window ).load( function ()
    {
        $( '.preloader' ).addClass( 'fadeOutPreloader' );

        if ( window.location.hash ) {
            scroll( 0, 0 );
            setTimeout( function () { scroll( 0, 0 ); }, 1 );

            var url = window.location.hash;
            $( function ()
            {
                $( 'html, body' ).animate( {
                    scrollTop: $( url ).offset().top - 85
                }, 2000, 'swing' );
                return false;
            });
        }
    });

    // smooth scrolling to anchor tag and closing the header drop down
    $( '.drop-down-subpages .list-group a[href*="#"]' ).on( 'click', function ( e )
    {
        if ( $( this ).attr( 'href' ).indexOf( '/' ) < 0 ) {
            $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
            $( '.drop-down-mobile-bg' ).addClass( 'hidden' );

            e.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: $( $( this ).attr( 'href' ) ).offset().top - 85 + 'px'
            }, 1000, 'swing' );
        }
    });

    //loading in the looping video only if user is on desktop

    if ( ( $( window ).width() >= 960 ) && ( ( window.location.pathname !== '/building/views/' ) && ( window.location.pathname !== '/building/test-fits/' ) ) ) {
        var poster = $( '.looping-video-container video' ).attr( 'not-poster' );
        var src = $( '.looping-video-container video source' ).attr( 'not-src' );

        $( '.looping-video-container video' ).attr( 'poster', poster );
        $( '.looping-video-container video source' ).attr( 'src', src );

        $( '.looping-video-container video' ).get( 0 ).load();
        $( '.looping-video-container video' ).get( 0 ).play();

    }


    //making only the current slide be clickable
    $( '.slick-slider.page-slider' ).each( function ( index, value )
    {
        $( value ).on( 'init reInit afterChange', function ()
        {
            //clear all buttons
            $( '.slick-slide .slick-img-wrapper' ).removeClass( 'modal-slide-button' );
            $( '.slick-slide  .slick-img-wrapper' ).removeAttr( 'role' );

            //only current slide is clickable
            $( '.slick-active .slick-img-wrapper' ).addClass( 'modal-slide-button' );
            $( '.slick-active  .slick-img-wrapper' ).attr( 'role', 'button' );
        });

    });

    var slickOptions = {
        lazyLoad: 'ondemand',
        dots: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: -1,
        centerMode: true,
        mobileFirst: true,
        variableWidth: true,
        prevArrow: '<div class="swiper-button-prev"></div>',
        nextArrow: '<div class="swiper-button-next"></div>',
        responsive: [{
            breakpoint: 480,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: -1
            }
        }]
    };

    if ( window.location.pathname === '/team/' ) {
        $( '.slick-slider.page-slider#ivanhoe-slideshow' ).slick( slickOptions );
        $( '.slick-slider.page-slider#wilkinson-slideshow' ).slick( slickOptions );
        $( '.slick-slider.page-slider#hines-slideshow' ).slick( slickOptions );
    } else {
        $( '.slick-slider.page-slider' ).slick( slickOptions );
    }

    // header nav functionality
    var $window = $( window );
    if ( $window.width() >= 960 ) {
        hoverExpand();
    } else {
        $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).off( 'mouseover' );
        $( '.drop-down-nav, .nav.navbar-nav' ).off( 'mouseout' );
    }

    $( window ).on( 'resize', function ()
    {
        if ( $window.width() >= 960 ) {
            hoverExpand();
        } else {

            $( '.nav.navbar-nav li:not(.logo-wrapper), .drop-down-nav' ).off( 'mouseover' );
            $( '.drop-down-nav, .nav.navbar-nav' ).off( 'mouseout' );
        }
    });

    $( '.close-drop-down, .drop-down-mobile-bg' ).on( 'click', function ()
    {
        $( '.drop-down-nav' ).removeClass( 'slide-in-drop' ).addClass( 'slide-out-drop' );
        $( '.drop-down-mobile-bg' ).addClass( 'hidden' );
    });
    $( '.menu-icon' ).on( 'click', function ()
    {
        $( '.drop-down-mobile-bg' ).removeClass( 'hidden' );
        $( '.drop-down-nav' ).removeClass( 'slide-out-drop' ).addClass( 'slide-in-drop' );
    });

    //TEST FITS PAGE - DESKTOP

    //initialize on page load
    $testFitsWrapper.find( '.height-image img[name="high-rise"]' ).fadeIn( 350 );

    $.getJSON( '/_data/test-fits.json', function ( json )
    {

        //on desktop height picker click
        var height = 'high-rise';
        $testFitsWrapper.find( '.height-list button' ).on( 'click', function ()
        {
            height = $( this ).attr( 'name' );

            //highlighting the chosen floor
            $testFitsWrapper.find( '.height-list button' ).removeClass( 'active-floor' );
            $( this ).addClass( 'active-floor' );

            //changing the building stack image to the chosen highlighted floor
            $testFitsWrapper.find( '.test-fits-heights .heights-picker .height-image img' ).attr( 'src', json[height].buildingstackimg );

            //changing the height info below
            $testFitsWrapper.find( '.height-info .top-row .title h2' ).html( json[height].title );
            $testFitsWrapper.find( '.height-info .bottom-row .floors-info' ).html( json[height].floors );
            $testFitsWrapper.find( '.height-info .bottom-row .rsf-info' ).html( json[height].rsf );

            $testFitsPlates.find( '.plate-image img' ).attr( 'name', json[height].id );
            $testFitsPlates.find( '.plate-image img' ).attr( 'alt', json[height].id );
            //changing floorplate image
            if ( json[height].plates ) {
                $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height].plates[0].plateimg );
            } else {
                $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height].img );
            }

            if ( ( height === 'low-rise' ) || ( height === 'podium' ) ) {
                $( '.view-icon' ).addClass( 'hidden' );
            } else {
                $( '.view-icon' ).removeClass( 'hidden' );
            }

            if ( ( height === 'high-rise' ) || ( height === 'podium' ) ) {

                //changing the right-hand side floorplate buttons
                $testFitsPlates.find( '.plate-types-flex button' ).removeClass( 'active-plate' );
                $testFitsPlates.find( '.plate-types-flex button' ).first().addClass( 'active-plate' );
                $testFitsWrapper.find( '.plate-info' ).hide();

                $testFitsPlates.find( '.plate-types-flex' ).css( 'visibility', 'visible' );
                $testFitsPlates.find( '.plate-types-flex button[name="floorplate"]' ).addClass( 'active-plate' );

                //updating correct buttons for podium
                if ( height === 'podium' ) {
                    $testFitsPlates.find( '.plate-types-flex[name="podium-buttons"]' ).show();
                    $testFitsPlates.find( '.plate-types-flex[name="high-rise-buttons"]' ).hide();
                } else {
                    $testFitsPlates.find( '.plate-types-flex[name="podium-buttons"]' ).hide();
                    $testFitsPlates.find( '.plate-types-flex[name="high-rise-buttons"]' ).show();
                }
            } else {
                $testFitsPlates.find( '.plate-types-flex' ).css( 'visibility', 'hidden' );
                $testFitsWrapper.find( '.plate-info' ).hide();
            }
        });
        //changing the corresponding view panorama
        $testFitsWrapper.find( '.view-icon' ).on( 'click', function ()
        {
            console.log( 'hi' );
            viewModalUpdate( height );
        });


        var plate;
        //picking between plates on high-rise and podium
        $testFitsPlates.find( '.plate-types-flex button' ).on( 'click', function ()
        {
            plate = $( this ).attr( 'name' );

            $testFitsPlates.find( '.plate-types-flex button' ).removeClass( 'active-plate' );
            $( this ).addClass( 'active-plate' );
            //updating the plate image
            $testFitsPlates.find( '.plate-image img' ).attr( 'src', json[height][plate].plateimg );

            $testFitsWrapper.find( '.plate-info .top-row h3' ).html( '' );
            $testFitsWrapper.find( '.plate-info .bottom-row' ).html( '' );
            if ( ( plate !== 'floorplate' ) ) {
                //updating plate title
                $testFitsWrapper.find( '.plate-info' ).show();
                $testFitsWrapper.find( '.plate-info .top-row h3' ).html( json[height][plate].platetitle );

                //updating plate info
                $testFitsWrapper.find( '.plate-info .bottom-row' ).html( '' );
                $.each( json[height][plate], function ( index, value )
                {
                    if ( ( index !== 'platetitle' ) && ( index !== 'plateimg' ) && ( index !== 'plateid' ) ) {
                        $testFitsWrapper.find( '.plate-info .bottom-row' ).append( '<div class="label col-md-6 caption">' + index + '</div>' );
                        $testFitsWrapper.find( '.plate-info .bottom-row' ).append( '<div class="info col-md-6 caption">' + value + '</div>' );
                    }

                });
            }
        });

        //TEST FITS PAGE - SMALL SIZE
        var selectedHeight;
        $( '.heights-list-sm .button' ).on( 'click', function ()
        {
            $( '.flex-site' ).css( 'overflow-y', 'hidden' );
            selectedHeight = $( this ).attr( 'name' );

            $( '.test-fits-plates-screen' ).addClass( 'slideIn' );

            //changing the height info
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .top-row .title h2' ).html( json[selectedHeight].title );
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .bottom-row .floors-info' ).html( json[selectedHeight].floors );
            $testFitsScrollableCont.find( '.plate-info-wrapper .height-info .bottom-row .rsf-info' ).html( json[selectedHeight].rsf );


            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'name', json[height].id );
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'alt', json[height].id );
            //changing floorplate image
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src', json[selectedHeight].img );

            if ( ( selectedHeight === 'low-rise' ) || ( selectedHeight === 'podium' ) ) {
                $( '.view-icon' ).addClass( 'hidden' );
            } else {
                $( '.view-icon' ).removeClass( 'hidden' );
            }

            if ( ( selectedHeight === 'high-rise' ) || ( selectedHeight === 'podium' ) ) {

                //changing the floorplate buttons
                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button' ).removeClass( 'active-plate' );
                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button' ).first().addClass( 'active-plate' );
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).hide();

                $testFitsScrollableCont.find( '.plate-buttons .plate-types-flex button[name="floorplate"]' ).addClass( 'active-plate' );

                //updating correct buttons for podium
                if ( selectedHeight === 'podium' ) {
                    $testFitsScrollableCont.find( '.plate-buttons[name="podium-buttons"]' ).show();
                    $testFitsScrollableCont.find( '.plate-buttons[name="high-rise-buttons"]' ).hide();
                } else {
                    $testFitsScrollableCont.find( '.plate-buttons[name="podium-buttons"]' ).hide();
                    $testFitsScrollableCont.find( '.plate-buttons[name="high-rise-buttons"]' ).show();
                }
            } else {
                $testFitsScrollableCont.find( '.plate-buttons' ).hide();
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).hide();
            }

        });
        $testFitsScrollableCont.find( '.view-icon' ).on( 'click', function ()
        {
            viewModalUpdate( selectedHeight );
        });


        //test fits small screens selecting between individual plates
        var selectedPlate;
        $( '.test-fits-plates-screen .plate-buttons .plate-types-flex button' ).on( 'click', function ()
        {
            selectedPlate = $( this ).attr( 'name' );


            $( '.test-fits-plates-screen .plate-buttons .plate-types-flex button' ).removeClass( 'active-plate' );
            $( this ).addClass( 'active-plate' );

            //update the plate image
            $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src', json[selectedHeight][selectedPlate].plateimg );

            $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .top-row h3' ).html( '' );
            $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).html( '' );
            if ( ( selectedPlate !== 'floorplate' ) ) {

                //updating plate title
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .top-row h3' ).html( json[selectedHeight][selectedPlate].platetitle );
                $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info' ).fadeIn( 300 );

                //fade in and update text info
                $.each( json[selectedHeight][selectedPlate], function ( index, value )
                {
                    if ( ( index !== 'platetitle' ) && ( index !== 'plateimg' ) && ( index !== 'plateid' ) ) {
                        $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).append( '<div class="label col-xs-6 caption">' + index + '</div>' );
                        $testFitsScrollableCont.find( '.plate-info-wrapper .plate-info .bottom-row' ).append( '<div class="info col-xs-6 caption">' + value + '</div>' );
                    }

                });

            }
        });


        $( '.back-to-heights-arrow button' ).on( 'click orientationchange', function ()
        {
            $( '.flex-site' ).css( 'overflow-y', 'auto' );

            $( '.test-fits-plates-screen' ).removeClass( 'slideIn' );

            //plate image back to default 'floor plate'
            $( '.test-fits-plates-screen .plate-info-wrapper .plate-image img' ).hide();

            //hide plate info text
            $( '.test-fits-plates-screen[name="' + selectedHeight + '"] .plate-info-wrapper .plate-info' ).hide();
        });

    });

    //DIAGRAM INTERACTION
    var file;
    if ( window.location.pathname === '/' ) {
        file = '/_data/building-diagram.json';

        //auto play building diagram when scrolled to it
        $( window ).on( 'scroll', function ()
        {
            if ( onElement( '#efficiency', '.diagram' ) ) {
                $( '.diagram .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram .media-section video' ).attr( 'controls', 'true' );
                }
            }
        });

    } else if ( window.location.pathname === '/location/' ) {
        file = '/_data/location-diagrams.json';

        //auto play diagram video when scrolled to it
        $( window ).on( 'scroll', function ()
        {
            if ( onElement( '#site-access', '.diagram[name="baystreetaccess"]' ) ) {
                $( '.diagram[name="baystreetaccess"] .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram[name="baystreetaccess"] .media-section video' ).attr( 'controls', 'true' );
                }
            }
            if ( onElement( '#siteaccess-diagram', '.diagram[name="siteaccess"]' ) ) {
                $( '.diagram[name="siteaccess"] .media-section video' ).get( 0 ).currenttime = 0;

                if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                    $( '.diagram[name="siteaccess"] .media-section video' ).removeAttr( 'controls' );
                    $( '.diagram[name="siteaccess"] .media-section video' ).get( 0 ).play();
                } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                    $( '.diagram[name="siteaccess"] .media-section video' ).attr( 'controls', 'true' );
                }
            }
        });
    }
    var diagram;
    var diagramEff;
    var diagramNeigh;
    var diagramBay;
    var diagramSite;
    $.getJSON( file, function ( json )
    {

        if ( window.location.pathname === '/' ) {
            diagram = json;
            diagramEff = json.efficiency;
        } else if ( window.location.pathname === '/location/' ) {
            diagram = json;
            diagramNeigh = json.neighborhood;
            diagramBay = json.baystreetaccess;
            diagramSite = json.siteaccess;
        }

        var parent;
        var clickedId;
        $( '.diagram .button-section button' ).on( 'click', function ()
        {
            parent = $( this ).closest( '.diagram' ).attr( 'name' );
            clickedId = $( this ).attr( 'id' );

            //changing the json data per diff diagram
            switch ( parent ) {
                case 'efficiency':
                    diagram = diagramEff;
                    break;
                case 'neighborhood':
                    diagram = diagramNeigh;
                    break;
                case 'baystreetaccess':
                    diagram = diagramBay;
                    break;
                case 'siteaccess':
                    diagram = diagramSite;
                    break;
                default:
                    diagram = diagram;
            }


            $.each( diagram, function ( index, value )
            {

                if ( clickedId === value.id ) {

                    //change active button
                    $( '.diagram[name="' + parent + '"] .button-section button' ).removeClass( 'active' );
                    $( '.diagram[name="' + parent + '"] .button-section button[id="' + clickedId + '"]' ).addClass( 'active' );

                    //change the text blurb
                    $( '.diagram[name="' + parent + '"] .caption' ).html( value.caption );

                    //change the video and the video poster, and autoplay
                    if ( parent !== 'neighborhood' ) {
                        $( '.diagram[name="' + parent + '"] .media-section video' ).attr( 'poster', value.img );
                        $( '.diagram[name="' + parent + '"] .media-section video source' ).attr( 'src', value.video );
                        $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).load();
                        $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).currenttime = 0;

                        if ( window.matchMedia( '(min-width: 768px)' ).matches ) {
                            $( '.diagram[name="' + parent + '"] .media-section video' ).removeAttr( 'controls' );
                            $( '.diagram[name="' + parent + '"] .media-section video' ).get( 0 ).play();
                        } else if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
                            $( '.diagram[name="' + parent + '"] .media-section video' ).attr( 'controls', 'true' );
                        }
                    } else {
                        $( '.diagram[name="' + parent + '"] .media-section img' ).attr( 'src', value.img );

                        var attractions = [];
                        if ( clickedId === 'attractions' ) {
                            attractions = $.map( value.attractions, function ( el ) { return el; });
                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide .attraction:first-child button .circle' ).addClass( 'active' );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).slideToggle( 300 );
                        } else {
                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).slideUp( 300 );
                            $( '.attractions-slide-sm, attractions-slide-lg, .attractions-slide' ).css( 'display', 'none' );
                        }



                        //clicking between the attraction list items and changing image
                        $( '.attractions-slide .attraction' ).on( 'click', function ()
                        {
                            var id = $( this ).attr( 'id' );

                            $( '.attractions-slide .attraction button .circle' ).removeClass( 'active' );
                            $( '.attractions-slide .attraction[id="' + id + '"] button .circle' ).addClass( 'active' );

                            $.each( attractions, function ( index, val )
                            {

                                if ( id === val.id ) {
                                    $( '.diagram[name="' + parent + '"] .media-section img' ).attr( 'src', val.img );
                                }

                            });
                        });
                    }
                }
            });
        });

    });

    // MODALS whenever an overlay/modal is present, don't scroll the body content underneath
    var offset;
    $('.modal').on( 'show.bs.modal', function () {
        setTimeout( function ()
        {
            $( '.legal-body' ).focus();
        }, 500 );
        $( 'html, body' ).addClass( 'no-scroll' );

        //for mobile, documenting the Y position of the page b/c page tends to jump to the top
        offset = $( 'body' ).offset().top;

    });
    $('.modal').on( 'hide.bs.modal', function () {
        $( 'html, body' ).removeClass( 'no-scroll' );

        if ( $( window ).width() < 768 ) {
            $( 'body' ).scrollTop( offset );
        }

    });


    //VIEWS PAGE - panorama switching
    $( '.views-container .pano-button' ).on( 'click', function ()
    {
        var height = $( this ).attr( 'name' );
        viewModalUpdate( height );
    });

    //EXPAND Image
    $( '.image-button, .full-screen-icon' ).on( 'click', function ()
    {
        var src = $( this ).children( 'img' ).data( 'big' );
        var style = $( this ).children( 'img' ).attr( 'style' );
        var alt = $( this ).children( 'img' ).attr( 'alt' );

        var testfitssrc;
        var testfitsalt;
        if ( window.matchMedia( '(min-width: 960px)' ).matches ) {
            testfitssrc = $testFitsPlates.find( '.plate-image img' ).attr( 'src' );
            testfitsalt = $testFitsPlates.find( '.plate-image img' ).attr( 'alt' );

        } else {
            testfitssrc = $testFitsScrollableCont.find( '.plate-image img' ).attr( 'src' );
            testfitsalt = $testFitsScrollableCont.find( '.plate-image img' ).attr( 'alt' );
        }

        if ( window.location.pathname === '/building/test-fits/' ) {
            $( '#expand .expand-body .expanded-image' ).attr( 'src', testfitssrc );
            $( '#expand .expand-body .expanded-image' ).attr( 'alt', testfitsalt );
        } else {
            $( '#expand .expand-body .expanded-image' ).attr( 'src', src );
            $( '#expand .expand-body .expanded-image' ).attr( 'alt', alt );
            $( '#expand .expand-body .expanded-image' ).attr( 'style', style );
        }

    });

    //SLIDESHOW MODAL - dynamic json
    $( '.page-slider' ).on( 'click', '.modal-slide-button', function ()
    {
        $( '#slideshow' ).modal( 'show' );

        var slideID = $( this ).closest( '.page-slider' ).attr( 'id' );
        var currentImg = $( this ).find( 'img' ).attr( 'src' );
        var currentIndex = $( this ).closest( '.page-slider' ).slick( 'slickCurrentSlide' );
        var slidefile = '/_data/' + slideID + '.json';
        var captionCarouselID = slideID + '-caption-carousel';

        $( '.caption-carousel' ).attr( 'id', captionCarouselID );
        //get the correct JSON file based on selected slider's ID
        $.getJSON( slidefile, function ( json )
        {
            var $data = json.slideshow;

            //erase current items in modal's slideshow to make new one, do the same for caption slideshow
            $( '#modal-slideshow .carousel-inner' ).html( '' );
            $( '#' + captionCarouselID + ' .carousel-inner' ).html( '' );

            $.each( $data, function ( index, value )
            {
                //append new slideshow items from the selected json file
                $( '#modal-slideshow .carousel-inner' ).append( '<div class="item"><img src="' + value.url + '" alt="' + value.caption + '"></div>' );

                //if selected image equals one of the images in the modal slideshow I just created,
                //set it as the active slide
                $( '#modal-slideshow .carousel-inner .item' ).each( function ( index, value )
                {
                    if ( currentImg === $( value ).find( 'img' ).attr( 'src' ) ) {

                        $( value ).addClass( 'active' );

                    }
                });

                var trueIndex = index + 1;
                //append captions to caption slideshow from the same json file with index and slideshow length
                $( '#' + captionCarouselID + ' .carousel-inner' ).append( '<div class="item"><h5 class="white modal-title"><span class="white">' + trueIndex + ' of ' + $data.length + ' | </span><small class="sans white">' + value.caption + '</small></h5></div>' );

                //setting the active item for caption slideshow
                $( '#' + captionCarouselID + ' .carousel-inner .item' ).each( function ( index, value )
                {

                    if ( currentIndex === index ) {
                        $( value ).addClass( 'active' );
                    }
                });

            });
        });

        //making modal slideshow work with keyboard
        $( '#slideshow' ).on( 'keydown', function ( e )
        {
            if ( e.which === 39 ) { //next

                $( '#modal-slideshow' ).carousel( 'next' );

            } else if ( e.which === 37 ) { //prev
                $( '#modal-slideshow' ).carousel( 'prev' );
            }
        });

        $( '#modal-slideshow' ).swiperight( function ()
        {
            $( this ).carousel( 'prev' );
        });
        $( '#modal-slideshow' ).swipeleft( function ()
        {
            $( this ).carousel( 'next' );
        });

        //fade captions in and out as you scroll slideshow
        $( '#modal-slideshow' ).on( 'slide.bs.carousel', function ( e )
        {
            //direction in which the slide itself is moving
            if ( e.direction === 'left' ) {
                $( '#' + captionCarouselID ).carousel( 'next' );
            } else {
                $( '#' + captionCarouselID ).carousel( 'prev' );
            }

        });

    });

    $( '#view .modal-dialog .modal-content .modal-header .close' ).on( 'click', function ()
    {
        $( '.panorama-iframe' ).attr( 'src', '' );
        $( '#view' ).modal( 'hide' );
    });

    $( '#slideshow' ).on( 'hidden.bs.modal', function ()
    {
        $( '.caption-carousel' ).attr( 'id', 'caption-slideshow' );
    });

    //VIMEO Modal
    $( '#vimeo' ).on( 'shown.bs.modal', function ()
    {
        $( '#vimeo' ).find( 'iframe' ).attr( 'src', 'https://player.vimeo.com/video/144034979?autoplay=1' );
    });

    $( '#vimeo' ).on( 'hidden.bs.modal', function ()
    {
        $( '#vimeo' ).find( 'iframe' ).attr( 'src', '' );
    });

    //Press    
    var y;
    $.ajax( {
        type: "GET",
        url: "https://docs.google.com/spreadsheets/d/1pjbHTEipYCef1VgVvbZA2GWBgS1mNA6jFVwl0BJsMeQ/pubhtml",
        dataType: "tsv",
        crossDomain: true,
        success: function ( data ){
            console.log( 'success', data );
            var list = data.split('\n');
            for (var i = 1 ; i < list.length; i++) {
                y = list[i].split('\t');
                list[i] = y;
                $('.news-rack').append(
                    '<div class="news-article hover-area ">' +
                        '<a href="'+y[3]+'" target="_blank" style="transition:none;">' +
                            '<div class="bar bgclr-honey" style="margin-bottom:0.5em;margin-top:2em;"></div>' +
                                '<p class="link1 white">' + y[1] + '</p>'+
                                '<p class="link1 white" style="text-transform:uppercase;">' + y[2] + '</p>'+
                                '<h2 class="white">'+ y[0] + '</h2>' +
                                '<p class="honey link1">Read More' + 
                                    '<img src="/assets/images/icons/arrow-right-honey-link.png" style="width:1.5em;" class="jumping-arrow">' + 
                                '</p>'+
                            '</div>'+
                        '</a>'+
                    '</div>'
                );
            }
            /*
            Index:
            0 = snippet
            1 = Publisher
            2 = date
            3 = url
            */
        },
        error: function ( data ) {
            console.log( 'error', data);

            //If can't get to Google link, use the backup local tsv file in _data folder. 
            $.get('//'+window.location.host+'/_data/Press.tsv', function(tsv) {
                var list = tsv.split('\n');
                for (var i = 1 ; i < list.length; i++) {
                    y = list[i].split('\t');
                    list[i] = y;
                    $('.news-rack').append(
                        '<div class="news-article hover-area ">' +
                            '<a href="'+y[3]+'" target="_blank" style="transition:none;">' +
                                '<div class="bar bgclr-honey" style="margin-bottom:0.5em;margin-top:2em;"></div>' +
                                    '<p class="link1 white">' + y[1] + '</p>'+
                                    '<p class="link1 white" style="text-transform:uppercase;">' + y[2] + '</p>'+
                                    '<h2 class="white">'+ y[0] + '</h2>' +
                                    '<p class="honey link1">Read More' + 
                                        '<img src="/assets/images/icons/arrow-right-honey-link.png" style="width:1.5em;" class="jumping-arrow">' + 
                                    '</p>'+
                                '</div>'+
                            '</a>'+
                        '</div>'
                    );
                }
                /*
                Index:
                0 = snippet
                1 = Publisher
                2 = date
                3 = url
                */
            });
        }
    });

    // Community Blog: Read More Btn
    $('.post').find('.post-read-more').on('click', function (e) {
        e.preventDefault();
        this.expand = !this.expand;
        $(this).find('span').text(this.expand?"READ LESS":"READ MORE");
        $(this).closest('.post').find('.small, .big').toggleClass('small big');
    });

    // community blog: pushState history
    var oldtitle = document.title;
    $('.footer-pages .link1 button, .footer-wrapper .col-xs-3 .link1').on('click', function() {
        if (this.dataset.target === '#community' && location.hash !== '#community') {
            history.pushState({page: location.pathname}, '', location.href+this.dataset.target);
            document.title = "CIBC Square Community Updates";
        }
    });
    $('.modal .modal-dialog .modal-content .modal-header .close').on('click', function() {
        if (this.dataset.target === '#community') {
            history.pushState({page: location.pathname}, '', location.href.replace(location.hash, ''));
            document.title = oldtitle;
        }
    });
    if(location.hash === '#community') {
        $('#community').modal('show');
        document.title = "CIBC Square Community Updates";
    }

    window.onhashchange = function() {
        console.log(location.hash);
        if (location.hash === '#community') {
            $('#community').modal('show');
            document.title = "CIBC Square Community Updates";
        } else if (location.hash === '' && $('#community').hasClass('in')) {
            $('#community').modal('hide');
            var oldtitle = document.title;
        }
    }

});
