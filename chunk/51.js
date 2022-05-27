/*! For license information please see 51.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"142":function(e,t,r){"use strict";e.exports=r(145)},"143":function(e,t,r){"use strict";var o=r(27),n=r.n(o),c=r(60),a=r.n(c),i=r(18),u=r.n(i),s=r(35),f=r.n(s),l=r(36),p=r.n(l),d=r(146),b=r.n(d),v=r(148),g=r.n(v),O=r(150),m=r.n(O),y=r(61),j=r.n(y),h=r(22),w=r.n(h);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return g()(this,r)}}w.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var l in a)updateStyle(c,l,a[l])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(j()(a),j()(c))).join(" ")}(c,o,n):a}t.a=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(h.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(h.createElement)(e,n,r)}}]),Index}(w.a.Component);return w.a.forwardRef((function(e,r){return w.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"145":function(e,t,r){"use strict";r(52);var o=r(22),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,f=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"146":function(e,t,r){var o=r(147);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"147":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"148":function(e,t,r){var o=r(18).default,n=r(149);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"149":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"150":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"152":function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"s",(function(){return u})),r.d(t,"u",(function(){return s})),r.d(t,"v",(function(){return f})),r.d(t,"A",(function(){return l})),r.d(t,"f",(function(){return p})),r.d(t,"o",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"x",(function(){return v})),r.d(t,"a",(function(){return g})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return y})),r.d(t,"h",(function(){return j})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return w})),r.d(t,"n",(function(){return x})),r.d(t,"p",(function(){return S})),r.d(t,"q",(function(){return _})),r.d(t,"t",(function(){return k})),r.d(t,"w",(function(){return P})),r.d(t,"y",(function(){return I})),r.d(t,"b",(function(){return E})),r.d(t,"g",(function(){return C})),r.d(t,"z",(function(){return M})),r.d(t,"B",(function(){return R}));var o=r(22),n=r(143),c=(Object(n.a)("taro-cover-image-core"),Object(n.a)("taro-cover-view-core"),Object(n.a)("taro-match-media-core"),Object(n.a)("taro-movable-area-core")),a=Object(n.a)("taro-movable-view-core"),i=Object(n.a)("taro-page-container-core"),u=Object(n.a)("taro-scroll-view-core"),s=(Object(n.a)("taro-share-element-core"),Object(n.a)("taro-swiper-core")),f=Object(n.a)("taro-swiper-item-core"),l=Object(n.a)("taro-view-core"),p=Object(n.a)("taro-icon-core"),d=Object(n.a)("taro-progress-core"),b=Object(n.a)("taro-rich-text-core"),v=Object(n.a)("taro-text-core"),g=Object(n.a)("taro-button-core"),O=Object(n.a)("taro-checkbox-core"),m=Object(n.a)("taro-checkbox-group-core"),y=(Object(n.a)("taro-editor-core"),Object(n.a)("taro-form-core")),j=(Object(n.a)("taro-keyboard-accessory-core"),Object(n.a)("taro-label-core")),h=Object(n.a)("taro-picker-core"),w=Object(n.a)("taro-picker-view-core"),x=Object(n.a)("taro-picker-view-column-core"),S=Object(n.a)("taro-radio-core"),_=Object(n.a)("taro-radio-group-core"),k=Object(n.a)("taro-slider-core"),P=Object(n.a)("taro-switch-core"),I=Object(n.a)("taro-textarea-core"),E=(Object(n.a)("taro-functional-page-navigator-core"),Object(n.a)("taro-navigator-core"),Object(n.a)("taro-audio-core"),Object(n.a)("taro-camera-core")),C=Object(n.a)("taro-image-core"),M=(Object(n.a)("taro-live-player-core"),Object(n.a)("taro-video-core")),R=(Object(n.a)("taro-voip-room-core"),Object(n.a)("taro-map-core"),Object(n.a)("taro-canvas-core"),Object(n.a)("taro-web-view-core"));Object(n.a)("taro-ad-core"),Object(n.a)("taro-ad-custom-core"),Object(n.a)("taro-official-account-core"),Object(n.a)("taro-open-data-core"),Object(n.a)("taro-navigation-bar-core"),Object(n.a)("taro-page-meta-core"),o.Fragment,Object(n.a)("taro-custom-wrapper-core")},"168":function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return b}));var o=r(6),n=r(9),c=r(19);function getItem(e){var t;try{t=JSON.parse(localStorage.getItem(e)||"")}catch(e){}return t&&"object"===Object(o.a)(t)&&t.hasOwnProperty("data")?{"result":!0,"data":t.data}:{"result":!1}}var a=function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e){var r=Object(o.a)(t),c={};c="symbol"===r?{"data":""}:{"data":t},localStorage.setItem(e,JSON.stringify(c))}else console.error(Object(n.b)({"name":"setStorage","correct":"String","wrong":e}))},i=function setStorage(e){var t=Object(n.h)(e);if(!t.flag){var r={"errMsg":"setStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,i=e.data,u=e.success,s=e.fail,f=e.complete,l=new c.b({"name":"setStorage","success":u,"fail":s,"complete":f});return"string"!=typeof o?l.fail({"errMsg":Object(n.b)({"para":"key","correct":"String","wrong":o})}):(a(o,i),l.success())},u=(Object(n.i)("revokeBufferURL"),function removeStorage(e){var t=Object(n.h)(e);if(!t.flag){var r={"errMsg":"removeStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,a=e.success,i=e.fail,u=e.complete,s=new c.b({"name":"removeStorage","success":a,"fail":i,"complete":u});return"string"!=typeof o?s.fail({"errMsg":Object(n.b)({"para":"key","correct":"String","wrong":o})}):(function removeStorageSync(e){"string"==typeof e?localStorage.removeItem(e):console.error(Object(n.b)({"name":"removeStorage","correct":"String","wrong":e}))}(o),s.success())}),s=function getStorageSync(e){if("string"==typeof e){var t=getItem(e);return t.result?t.data:""}console.error(Object(n.b)({"name":"getStorageSync","correct":"String","wrong":e}))},f=function getStorageInfoSync(){return{"keys":Object.keys(localStorage),"limitSize":NaN,"currentSize":NaN}},l=function getStorageInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,o=e.complete,n=new c.b({"name":"getStorageInfo","success":t,"fail":r,"complete":o});return n.success(f())},p=function getStorage(e){var t=Object(n.h)(e);if(!t.flag){var r={"errMsg":"getStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var o=e.key,a=e.success,i=e.fail,u=e.complete,s=new c.b({"name":"getStorage","success":a,"fail":i,"complete":u});if("string"!=typeof o)return s.fail({"errMsg":Object(n.b)({"para":"key","correct":"String","wrong":o})});var f=getItem(o),l=f.result,p=f.data;return l?s.success({"data":p}):s.fail({"errMsg":"data not found"})},d=(Object(n.i)("createBufferURL"),function clearStorageSync(){localStorage.clear()}),b=function clearStorage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,o=e.complete,n=new c.b({"name":"clearStorage","success":t,"fail":r,"complete":o});return d(),n.success()}},"180":function(e,t,r){"use strict";r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return setNavigationBarTitle})),r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var o=r(9),n=r(19),c=Object(o.i)("showNavigationBarLoading");function setNavigationBarTitle(e){var t=Object(o.h)(e);if(!t.flag){var r={"errMsg":"setNavigationBarTitle:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.title,a=e.success,i=e.fail,u=e.complete,s=new n.b({"name":"setNavigationBarTitle","success":a,"fail":i,"complete":u});return c&&"string"==typeof c?(document.title!==c&&(document.title=c),s.success()):s.fail({"errMsg":Object(o.b)({"para":"title","correct":"String","wrong":c})})}var a=function setNavigationBarColor(e){var t=e.backgroundColor,r=e.success,o=e.fail,c=e.complete,a=new n.b({"name":"setNavigationBarColor","success":r,"fail":o,"complete":c}),i=document.createElement("meta");return i.setAttribute("name","theme-color"),i.setAttribute("content",t),document.head.appendChild(i),a.success()},i=Object(o.i)("hideNavigationBarLoading");Object(o.i)("hideHomeButton")},"265":function(e,t,r){},"330":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var o=r(3),n=r(4),c=r(16),a=r(11),i=r(12),u=r(10),s=r(22),f=r(34),l=r(180),p=r(20),d=r(19),b=r(168),__awaiter=function(e,t,r,o){return new(r||(r=Promise))((function(n,c){function fulfilled(e){try{step(o.next(e))}catch(e){c(e)}}function rejected(e){try{step(o.throw(e))}catch(e){c(e)}}function step(e){e.done?n(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((o=o.apply(e,t||[])).next())}))};document.addEventListener("copy",(function(){var e;Object(b.f)({"key":"taro_clipboard","data":null===(e=window.getSelection())||void 0===e?void 0:e.toString()}).catch((function(e){console.error(e)}))}));var v=r(152),g=(r(265),r(142)),O=function(e){Object(a.a)(Index,e);var t=Object(i.a)(Index);function Index(){var e;Object(o.a)(this,Index);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),Object(u.a)(Object(c.a)(e),"state",{"link":null,"open":null,"certified":"true"}),e}return Object(n.a)(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e,t,r,o=this,n=(null===(e=f.a.Current)||void 0===e||null===(t=e.router)||void 0===t?void 0:t.params)||{},c=n.link&&decodeURIComponent(n.link);this.setState({"link":c,"open":n.open&&decodeURIComponent(n.open),"certified":n.certified});var a=n.title||"WebView";Object(l.c)({"title":a}),Object(l.d)(),"true"!==n.certified&&n.link&&(Object(l.a)(),function setClipboardData(e){var t=e.data,r=e.success,o=e.fail,n=e.complete;__awaiter(void 0,void 0,void 0,Object(p.a)().mark((function _callee(){var e,c;return Object(p.a)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(e=new d.b({"name":"setClipboardData","success":r,"fail":o,"complete":n}),a.prev=1,Object(b.g)("taro_clipboard",t),"function"!=typeof document.execCommand){a.next=17;break}(c=document.createElement("textarea")).readOnly=!0,c.value=t,c.style.position="absolute",c.style.width="100px",c.style.left="-10000px",document.body.appendChild(c),c.select(),c.setSelectionRange(0,c.value.length),document.execCommand("copy"),document.body.removeChild(c),a.next=18;break;case 17:throw new Error("Unsupported Function: 'document.execCommand'.");case 18:return a.abrupt("return",e.success());case 21:return a.prev=21,a.t0=a.catch(1),a.abrupt("return",e.fail({"errMsg":a.t0.message}));case 24:case"end":return a.stop()}}),_callee,null,[[1,21]])})))}({"data":c||""})),null===(r=this.props.navigation)||void 0===r||r.setOptions({"headerRight":function headerRight(){return Object(g.jsx)(v.A,{"onClick":o.openUrl.bind(o),"style":{"paddingRight":20,"paddingLeft":20},"children":Object(g.jsx)(v.x,{"children":n.right||"打开"})})}})}},{"key":"onWebViewLoad","value":function onWebViewLoad(){Object(l.a)()}},{"key":"openUrl","value":function openUrl(){var e=this.state,t=e.open,r=e.link,o=t||r;o&&f.a.openUrl({"url":o})}},{"key":"onError","value":function onError(){Object(l.a)(),Object(l.c)({"title":"加载失败"})}},{"key":"render","value":function render(){var e=this.state,t=e.link,r=e.certified;return t?"true"!==r?Object(g.jsxs)(v.A,{"children":[Object(g.jsx)(v.A,{"className":"webview-url","children":decodeURIComponent(t)}),Object(g.jsx)(v.A,{"className":"webview-tip","children":"该网址不支持打开，已复制到剪切板。"})]}):Object(g.jsx)(v.B,{"src":decodeURIComponent(t),"onLoad":this.onWebViewLoad.bind(this),"onError":this.onError.bind(this)}):null}}]),Index}(s.Component)}}]);