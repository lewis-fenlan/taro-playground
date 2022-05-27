/*! For license information please see 53.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"142":function(e,t,r){"use strict";e.exports=r(145)},"143":function(e,t,r){"use strict";var o=r(27),n=r.n(o),c=r(60),a=r.n(c),i=r(18),u=r.n(i),s=r(35),f=r.n(s),p=r(36),l=r.n(p),d=r(146),b=r.n(d),O=r(148),y=r.n(O),j=r(150),v=r.n(j),h=r(61),m=r.n(h),g=r(22),w=r.n(g);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=v()(e);if(t){var n=v()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return y()(this,r)}}w.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(m()(a),m()(c))).join(" ")}(c,o,n):a}t.a=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(g.createRef)(),t}return l()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(g.createElement)(e,n,r)}}]),Index}(w.a.Component);return w.a.forwardRef((function(e,r){return w.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"144":function(e,t,r){"use strict";var o=r(27),n=r.n(o),c=r(22),a=r.n(c),i=r(143);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=Object(i.a)("taro-input-core");a.a.createElement;t.a=a.a.forwardRef((function(e,t){var r=_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),a.a.createElement(u,_objectSpread(_objectSpread({},r),{},{"ref":t}))}))},"145":function(e,t,r){"use strict";r(52);var o=r(22),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,f=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"146":function(e,t,r){var o=r(147);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"147":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"148":function(e,t,r){var o=r(18).default,n=r(149);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"152":function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"s",(function(){return u})),r.d(t,"u",(function(){return s})),r.d(t,"v",(function(){return f})),r.d(t,"A",(function(){return p})),r.d(t,"f",(function(){return l})),r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"x",(function(){return O})),r.d(t,"a",(function(){return y})),r.d(t,"c",(function(){return j})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return h})),r.d(t,"h",(function(){return m})),r.d(t,"l",(function(){return g})),r.d(t,"m",(function(){return w})),r.d(t,"n",(function(){return x})),r.d(t,"p",(function(){return _})),r.d(t,"q",(function(){return P})),r.d(t,"t",(function(){return k})),r.d(t,"w",(function(){return C})),r.d(t,"y",(function(){return S})),r.d(t,"b",(function(){return E})),r.d(t,"g",(function(){return N})),r.d(t,"z",(function(){return R})),r.d(t,"B",(function(){return I}));var o=r(22),n=r(143),c=(Object(n.a)("taro-cover-image-core"),Object(n.a)("taro-cover-view-core"),Object(n.a)("taro-match-media-core"),Object(n.a)("taro-movable-area-core")),a=Object(n.a)("taro-movable-view-core"),i=Object(n.a)("taro-page-container-core"),u=Object(n.a)("taro-scroll-view-core"),s=(Object(n.a)("taro-share-element-core"),Object(n.a)("taro-swiper-core")),f=Object(n.a)("taro-swiper-item-core"),p=Object(n.a)("taro-view-core"),l=Object(n.a)("taro-icon-core"),d=Object(n.a)("taro-progress-core"),b=Object(n.a)("taro-rich-text-core"),O=Object(n.a)("taro-text-core"),y=Object(n.a)("taro-button-core"),j=Object(n.a)("taro-checkbox-core"),v=Object(n.a)("taro-checkbox-group-core"),h=(Object(n.a)("taro-editor-core"),Object(n.a)("taro-form-core")),m=(Object(n.a)("taro-keyboard-accessory-core"),Object(n.a)("taro-label-core")),g=Object(n.a)("taro-picker-core"),w=Object(n.a)("taro-picker-view-core"),x=Object(n.a)("taro-picker-view-column-core"),_=Object(n.a)("taro-radio-core"),P=Object(n.a)("taro-radio-group-core"),k=Object(n.a)("taro-slider-core"),C=Object(n.a)("taro-switch-core"),S=Object(n.a)("taro-textarea-core"),E=(Object(n.a)("taro-functional-page-navigator-core"),Object(n.a)("taro-navigator-core"),Object(n.a)("taro-audio-core"),Object(n.a)("taro-camera-core")),N=Object(n.a)("taro-image-core"),R=(Object(n.a)("taro-live-player-core"),Object(n.a)("taro-video-core")),I=(Object(n.a)("taro-voip-room-core"),Object(n.a)("taro-map-core"),Object(n.a)("taro-canvas-core"),Object(n.a)("taro-web-view-core"));Object(n.a)("taro-ad-core"),Object(n.a)("taro-ad-custom-core"),Object(n.a)("taro-official-account-core"),Object(n.a)("taro-open-data-core"),Object(n.a)("taro-navigation-bar-core"),Object(n.a)("taro-page-meta-core"),o.Fragment,Object(n.a)("taro-custom-wrapper-core")},"246":function(e,t,r){},"322":function(e,t,r){"use strict";r.r(t);var o=r(15),n=r(22),c=r(9),a=Object(c.i)("onKeyboardHeightChange"),i=Object(c.i)("offKeyboardHeightChange"),u=Object(c.i)("hideKeyboard"),s=(Object(c.i)("getSelectedTextRange"),r(152)),f=r(144),p=(r(246),r(142));t.default=function Index(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),r=t[0],c=t[1],l=Object(n.useCallback)((function(e){console.log("回调函数 C1",e)}),[]),d=Object(n.useCallback)((function(e){console.log("回调函数 C2",e)}),[]);return Object(p.jsx)(s.A,{"className":"api-page","children":Object(p.jsxs)(s.A,{"className":"api-page__body","children":[Object(p.jsx)(s.A,{"className":"common-border","children":Object(p.jsxs)(s.A,{"className":"input-wrap","children":[Object(p.jsx)(s.x,{"className":"input-wrap-text","children":"输入框: "}),Object(p.jsx)(f.a,{"className":"input-wrap-input","type":"text","placeholder":"输入 hide 隐藏键盘","value":r,"onInput":function onInput(e){c(e.detail.value),"hide"===e.detail.value&&u({"success":function success(e){console.log("隐藏键盘",e)}})}})]})}),Object(p.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){a(l)},"children":"Taro.onKeyboardHeightChange(C1)"}),Object(p.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){a(d)},"children":"Taro.onKeyboardHeightChange(C2)"}),Object(p.jsx)(s.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){i(l)},"children":"Taro.offKeyboardHeightChange(C1)"}),Object(p.jsx)(s.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){i(d)},"children":"Taro.offKeyboardHeightChange(C2)"}),Object(p.jsx)(s.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){i()},"children":"Taro.offKeyboardHeightChange()"})]})})}}}]);