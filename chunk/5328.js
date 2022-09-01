/*! For license information please see 5328.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5328],{"5403":function(e,r,t){t.d(r,{"ub":function(){return o},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return s},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return m},"zx":function(){return v},"XZ":function(){return h},"cO":function(){return y},"l0":function(){return g},"__":function(){return Z},"cW":function(){return x},"Nf":function(){return b},"$o":function(){return k},"Y8":function(){return w},"FX":function(){return j},"iR":function(){return O},"rs":function(){return _},"gx":function(){return E},"V1":function(){return S},"Ee":function(){return N},"nk":function(){return P},"kh":function(){return C}});t(3464);var n=t(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),a=(0,n.Z)("taro-movable-view-core"),c=(0,n.Z)("taro-page-container-core"),i=((0,n.Z)("taro-root-portal-core"),(0,n.Z)("taro-scroll-view-core")),s=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),u=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),m=(0,n.Z)("taro-text-core"),v=(0,n.Z)("taro-button-core"),h=(0,n.Z)("taro-checkbox-core"),y=(0,n.Z)("taro-checkbox-group-core"),g=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),Z=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),x=(0,n.Z)("taro-picker-core"),b=(0,n.Z)("taro-picker-view-core"),k=(0,n.Z)("taro-picker-view-column-core"),w=(0,n.Z)("taro-radio-core"),j=(0,n.Z)("taro-radio-group-core"),O=(0,n.Z)("taro-slider-core"),_=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),S=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),N=(0,n.Z)("taro-image-core"),P=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),C=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var n=t(5827),o=t(1760),a=t(517),c=t(6830),i=t(8652),s=t(6014),u=t(3317),l=t(5935),f=t(766),p=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,n=(0,l.Z)(e);if(r){var o=(0,l.Z)(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return(0,u.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||m.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,n,o){var a=e.ref.current,c=o[t],i=n?n[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=c;return r===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(n)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=n?function getClassName(e,r,t){var n=Array.from(e.classList),o=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,n,o):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(n){"children"===n||"key"===n||n in t.props||updateProp(t,e,n,r,t.props)})),Object.keys(this.props).forEach((function(n){updateProp(t,e,n,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,o.Z)(r,2),n=t[0],a=t[1];e.ref.current&&e.ref.current.removeEventListener(n,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,n=r.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){t(4744);var n=t(3464),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var n,a={},u=null,l=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":a,"_owner":c.current}}r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"5328":function(e,r,t){t.r(r),t.d(r,{"default":function(){return Z}});var n=t(8446),o=t(6830),a=t(8652),c=t(1729),i=t(6014),s=t(295),u=t(5827),l=t(9042),f=t(3464),p=t(5403),d=t(402),m=t(6895),v=t(5949),h=t(4837),y=t(2922),g={"hooksPng":d,"routerPng":m,"lifecyclePng":v,"stylesPng":h},Z=function(e){(0,i.Z)(Index,e);var r=(0,s.Z)(Index);function Index(e){var t;return(0,o.Z)(this,Index),t=r.call(this,e),(0,u.Z)((0,c.Z)(t),"kindToggle",(function(e){return function(){for(var r=t.state.list,n=0,o=r.length;n<o;++n)r[n].id==e?r[n].open=!r[n].open:r[n].open=!1;t.setState({"list":r})}})),(0,u.Z)((0,c.Z)(t),"goToComponent",(function(e){(0,l.T8)({"url":e.url})})),t.state={"list":[{"id":"hooks","name":"Taro Hooks","open":!1,"pages":[{"id":"page","name":"Hooks"}]},{"id":"lifecycle","name":"生命周期","open":!1,"pages":[{"id":"page","name":"页面生命周期"}]},{"id":"router","name":"路由","open":!1,"pages":[{"id":"index","name":"页面跳转"}]},{"id":"styles","name":"样式","open":!1,"pages":[{"id":"size","name":"尺寸"},{"id":"platform","name":"跨平台"}]}]},t}return(0,a.Z)(Index,[{"key":"render","value":function render(){var e=this;return(0,y.jsxs)(p.pf,{"className":"index","enableBackToTop":!0,"style":{"paddingBottom":80},"children":[(0,y.jsx)(p.G7,{"className":"index-hd","children":(0,y.jsx)(p.G7,{"className":"index-desc","children":(0,y.jsx)(p.xv,{"className":"index-desc_text","children":"以下将展示 Taro 全局能力。"})})}),(0,y.jsx)(p.G7,{"className":"index-bd","children":(0,y.jsx)(p.G7,{"className":"kind-list","children":this.state.list.map((function(e){return e.hdClass="kind-list-item-hd "+(e.open?"kind-list-item-hd-show":""),e.bdClass="kind-list-item-bd "+(e.open?"kind-list-item-bd-show":""),e.boxClass="navigator-box "+(e.open?"navigator-box-show":""),e.imgSrc=g["".concat(e.id,"Png")],e._pages=e.pages.map((function(r){return(0,n.Z)((0,n.Z)({},r),{},{"url":"/pages/global/pages/".concat(e.id,"/").concat(r.id)})})),e})).map((function(r,t){return(0,y.jsxs)(p.G7,{"className":"kind-list-item","children":[(0,y.jsxs)(p.G7,{"className":r.hdClass,"onClick":e.kindToggle(r.id),"children":[(0,y.jsx)(p.G7,{"className":"kind-list-text","children":(0,y.jsx)(p.xv,{"children":r.name})}),(0,y.jsx)(p.Ee,{"className":"kind-list-img","src":r.imgSrc})]}),(0,y.jsx)(p.G7,{"className":r.bdClass,"children":(0,y.jsx)(p.G7,{"className":r.boxClass,"children":r._pages.map((function(r,t){return(0,y.jsxs)(p.G7,{"onClick":e.goToComponent.bind(e,r),"className":"navigator","children":[(0,y.jsx)(p.xv,{"className":"navigator-text","children":r.name}),(0,y.jsx)(p.G7,{"className":"navigator-arrow"})]},t)}))})})]},t)}))})})]})}}]),Index}(f.Component)},"402":function(e,r,t){e.exports=t.p+"static/images/assets/iconpark/aiming.png"},"5949":function(e,r,t){e.exports=t.p+"static/images/assets/iconpark/cycle-arrow.png"},"4837":function(e,r,t){e.exports=t.p+"static/images/assets/iconpark/font-size.png"},"6895":function(e,r,t){e.exports=t.p+"static/images/assets/iconpark/navigation.png"}}]);