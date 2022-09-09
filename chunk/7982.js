/*! For license information please see 7982.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7982],{"5403":function(e,t,r){r.d(t,{"ub":function(){return a},"Gt":function(){return o},"_z":function(){return s},"pf":function(){return c},"tq":function(){return i},"t3":function(){return l},"G7":function(){return u},"JO":function(){return d},"Ex":function(){return f},"Ho":function(){return p},"xv":function(){return h},"zx":function(){return m},"XZ":function(){return v},"cO":function(){return x},"l0":function(){return y},"__":function(){return Z},"cW":function(){return j},"Nf":function(){return _},"$o":function(){return w},"Y8":function(){return g},"FX":function(){return b},"iR":function(){return N},"rs":function(){return G},"gx":function(){return C},"V1":function(){return O},"Ee":function(){return k},"nk":function(){return I},"kh":function(){return S}});r(3464);var n=r(2214),a=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),o=(0,n.Z)("taro-movable-view-core"),s=(0,n.Z)("taro-page-container-core"),c=((0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core")),i=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),l=(0,n.Z)("taro-swiper-item-core"),u=(0,n.Z)("taro-view-core"),d=(0,n.Z)("taro-icon-core"),f=(0,n.Z)("taro-progress-core"),p=(0,n.Z)("taro-rich-text-core"),h=(0,n.Z)("taro-text-core"),m=(0,n.Z)("taro-button-core"),v=(0,n.Z)("taro-checkbox-core"),x=(0,n.Z)("taro-checkbox-group-core"),y=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),Z=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),j=(0,n.Z)("taro-picker-core"),_=(0,n.Z)("taro-picker-view-core"),w=(0,n.Z)("taro-picker-view-column-core"),g=(0,n.Z)("taro-radio-core"),b=(0,n.Z)("taro-radio-group-core"),N=(0,n.Z)("taro-slider-core"),G=(0,n.Z)("taro-switch-core"),C=(0,n.Z)("taro-textarea-core"),O=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),k=(0,n.Z)("taro-image-core"),I=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-live-pusher-core"),(0,n.Z)("taro-video-core")),S=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var n=r(5827),a=r(1760),o=r(517),s=r(6830),c=r(8652),i=r(6014),l=r(3317),u=r(5935),d=r(766),f=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}f.createElement;var p="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,a){var o=e.ref.current,s=a[r],c=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&o.setAttribute(r,s),t===p){if("scrollTop"===r)return void(o.mpScrollTop=s);if("scrollLeft"===r)return void(o.mpScrollLeft=s);if("scrollIntoView"===r)return void(o.mpScrollIntoView=s)}if("function"==typeof s&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),l=s;return t===p&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&s.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),o.addEventListener(i,l)}return"string"==typeof s||"number"==typeof s?(o.setAttribute(r,s),void(o[r]=s)):"boolean"==typeof s?s?(o[r]=!0,o.setAttribute(r,s)):(o[r]=!1,o.removeAttribute(r)):void(o[r]=s)}if("string"==typeof s)return void o.setAttribute(r,s);if(!s)return void o.removeAttribute(r);if(n)if("string"==typeof c)o.style.cssText="";else for(var u in c)updateStyle(o,u,"");for(var f in s)updateStyle(o,f,s[f])}else o.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),a=(t.className||t.class||"").split(" "),o=(r.className||r.class||"").split(" "),s=[];return n.forEach((function(e){o.indexOf(e)>-1?(s.push(e),o=o.filter((function(t){return t!==e}))):-1===a.indexOf(e)&&s.push(e)})),(s=[].concat((0,d.Z)(s),(0,d.Z)(o))).join(" ")}(o,n,a):s}t.Z=function reactifyWebComponent(e){var t=function(t){(0,i.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,s.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,f.createRef)(),t}return(0,c.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,o.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,a.Z)(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,a={"ref":this.ref};return n&&(a.dangerouslySetInnerHTML=n),(0,f.createElement)(e,a,r)}}]),Index}(f.Component);return f.forwardRef((function(e,r){return f.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"8502":function(e,t,r){var n=r(3464),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,o={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{"$$typeof":a,"type":e,"key":l,"ref":u,"props":o,"_owner":c.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"7465":function(e,t,r){var n=r(5403),a=r(2922);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,a.jsxs)(n.G7,{"className":"page-head","children":[(0,a.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,a.jsx)(n.G7,{"className":"page-head-line"}),!!r&&(0,a.jsx)(n.xv,{"className":"page-head-desc","children":r})]})}},"7982":function(e,t,r){r.r(t),r.d(t,{"default":function(){return p}});var n=r(6830),a=r(8652),o=r(1729),s=r(6014),c=r(295),i=r(5827),l=r(3464),u=r(5403),d=r(7465),f=r(2922),p=function(e){(0,s.Z)(PageView,e);var t=(0,c.Z)(PageView);function PageView(e){var r;return(0,n.Z)(this,PageView),r=t.call(this,e),(0,i.Z)((0,o.Z)(r),"setAutoPlay",(function(e){r.setState({"isAutoplay":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setVerticalAutoPlay",(function(e){r.setState({"verticalIsAutoplay":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setCircular",(function(e){r.setState({"isCircular":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setVerticalCircular",(function(e){r.setState({"verticalIsCircular":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setIndicatorDots",(function(e){r.setState({"hasIndicatorDots":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setVerticalIndicatorDots",(function(e){r.setState({"verticalHasIndicatorDots":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setInterval",(function(e){r.setState({"interval":e.detail.value})})),(0,i.Z)((0,o.Z)(r),"setDuration",(function(e){console.log((0,o.Z)(r)),r.setState({"duration":e.detail.value})})),r.state={"current":1,"duration":500,"interval":3e3,"isCircular":!0,"verticalIsCircular":!0,"isAutoplay":!0,"verticalIsAutoplay":!1,"hasIndicatorDots":!0,"verticalHasIndicatorDots":!0},r}return(0,a.Z)(PageView,[{"key":"render","value":function render(){var e=this.state,t=e.current,r=e.isAutoplay,n=e.duration,a=e.isCircular,o=e.interval,s=e.hasIndicatorDots,c=e.verticalIsCircular,i=e.verticalHasIndicatorDots,l=e.verticalIsAutoplay;return(0,f.jsxs)(u.G7,{"className":"components-page","children":[(0,f.jsx)(u.G7,{"className":"components-page__header","children":(0,f.jsx)(d.Z,{"title":"Swiper"})}),(0,f.jsxs)(u.G7,{"className":"components-page__body swiper","children":[(0,f.jsxs)(u.G7,{"className":"components-page__body-example example","children":[(0,f.jsx)(u.G7,{"className":"example-header","children":"Swiper 横向滑动"}),(0,f.jsxs)(u.G7,{"className":"example-body","children":[(0,f.jsxs)(u.tq,{"className":"swiper-list","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","current":t,"duration":1,"interval":o,"circular":a,"autoplay":r,"indicatorDots":s,"preMargin":"200","children":[(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-1","children":(0,f.jsx)(u.G7,{"className":"demo-text-1-text","children":"A"})})}),(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-2","children":(0,f.jsx)(u.G7,{"className":"demo-text-2-text","children":"B"})})}),(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-3","children":(0,f.jsx)(u.G7,{"className":"demo-text-3-text","children":"C"})})})]}),(0,f.jsxs)(u.G7,{"className":"switch-list","children":[(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"指示点"}),(0,f.jsx)(u.rs,{"checked":s,"onChange":this.setIndicatorDots})]}),(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"自动播放"}),(0,f.jsx)(u.rs,{"checked":r,"onChange":this.setAutoPlay})]}),(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"循环播放"}),(0,f.jsx)(u.rs,{"checked":a,"onChange":this.setCircular})]})]}),(0,f.jsxs)(u.G7,{"className":"slider-list","children":[(0,f.jsxs)(u.G7,{"className":"slider-list__item","children":[(0,f.jsx)(u.G7,{"className":"slider-list__item-header","children":(0,f.jsx)(u.xv,{"children":"幻灯片切换时长(ms)"})}),(0,f.jsx)(u.G7,{"className":"slider-list__item-body","children":(0,f.jsx)(u.iR,{"showValue":!0,"step":1,"min":500,"max":2e3,"value":n,"onChange":this.setDuration})})]}),(0,f.jsxs)(u.G7,{"className":"slider-list__item","children":[(0,f.jsx)(u.G7,{"className":"slider-list__item-header","children":(0,f.jsx)(u.xv,{"children":"自动播放间隔时长(ms)"})}),(0,f.jsx)(u.G7,{"className":"slider-list__item-body","children":(0,f.jsx)(u.iR,{"showValue":!0,"step":1,"min":2e3,"max":1e4,"value":this.state.interval,"onChange":this.setInterval})})]})]})]})]}),(0,f.jsxs)(u.G7,{"className":"components-page__body-example example","children":[(0,f.jsx)(u.G7,{"className":"example-header","children":"Swiper 纵向滑动"}),(0,f.jsx)(u.G7,{"className":"example-body","children":(0,f.jsxs)(u.tq,{"className":"swiper-list test-h","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","vertical":!0,"circular":c,"indicatorDots":i,"autoplay":l,"preMargin":"80","style":{"backgroundColor":"#fff"},"children":[(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-1"})}),(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-2"})}),(0,f.jsx)(u.t3,{"children":(0,f.jsx)(u.G7,{"className":"demo-text-3"})})]})}),(0,f.jsxs)(u.G7,{"className":"switch-list","children":[(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"指示点"}),(0,f.jsx)(u.rs,{"checked":i,"onChange":this.setVerticalIndicatorDots})]}),(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"自动播放"}),(0,f.jsx)(u.rs,{"checked":l,"onChange":this.setVerticalAutoPlay})]}),(0,f.jsxs)(u.G7,{"className":"switch-list__item","children":[(0,f.jsx)(u.G7,{"className":"switch-list__text","children":"循环播放"}),(0,f.jsx)(u.rs,{"checked":c,"onChange":this.setVerticalCircular})]})]})]})]})]})}}]),PageView}(l.Component)}}]);