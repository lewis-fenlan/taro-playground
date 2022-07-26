/*! For license information please see 687.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[687],{"5403":function(e,t,r){r.d(t,{"ub":function(){return o},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return s},"t3":function(){return u},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return m},"zx":function(){return v},"XZ":function(){return h},"cO":function(){return g},"l0":function(){return y},"__":function(){return x},"cW":function(){return Z},"Nf":function(){return b},"$o":function(){return w},"Y8":function(){return k},"FX":function(){return j},"iR":function(){return O},"rs":function(){return _},"gx":function(){return E},"V1":function(){return S},"Ee":function(){return N},"nk":function(){return P},"kh":function(){return C}});r(3464);var n=r(2214),o=((0,n.Z)("taro-cover-image-core"),(0,n.Z)("taro-cover-view-core"),(0,n.Z)("taro-match-media-core"),(0,n.Z)("taro-movable-area-core")),a=(0,n.Z)("taro-movable-view-core"),c=(0,n.Z)("taro-page-container-core"),i=(0,n.Z)("taro-scroll-view-core"),s=((0,n.Z)("taro-share-element-core"),(0,n.Z)("taro-swiper-core")),u=(0,n.Z)("taro-swiper-item-core"),l=(0,n.Z)("taro-view-core"),f=(0,n.Z)("taro-icon-core"),p=(0,n.Z)("taro-progress-core"),d=(0,n.Z)("taro-rich-text-core"),m=(0,n.Z)("taro-text-core"),v=(0,n.Z)("taro-button-core"),h=(0,n.Z)("taro-checkbox-core"),g=(0,n.Z)("taro-checkbox-group-core"),y=((0,n.Z)("taro-editor-core"),(0,n.Z)("taro-form-core")),x=((0,n.Z)("taro-keyboard-accessory-core"),(0,n.Z)("taro-label-core")),Z=(0,n.Z)("taro-picker-core"),b=(0,n.Z)("taro-picker-view-core"),w=(0,n.Z)("taro-picker-view-column-core"),k=(0,n.Z)("taro-radio-core"),j=(0,n.Z)("taro-radio-group-core"),O=(0,n.Z)("taro-slider-core"),_=(0,n.Z)("taro-switch-core"),E=(0,n.Z)("taro-textarea-core"),S=((0,n.Z)("taro-functional-page-navigator-core"),(0,n.Z)("taro-navigator-core"),(0,n.Z)("taro-audio-core"),(0,n.Z)("taro-camera-core")),N=(0,n.Z)("taro-image-core"),P=((0,n.Z)("taro-live-player-core"),(0,n.Z)("taro-video-core")),C=((0,n.Z)("taro-voip-room-core"),(0,n.Z)("taro-map-core"),(0,n.Z)("taro-canvas-core"),(0,n.Z)("taro-web-view-core"));(0,n.Z)("taro-ad-core"),(0,n.Z)("taro-ad-custom-core"),(0,n.Z)("taro-official-account-core"),(0,n.Z)("taro-open-data-core"),(0,n.Z)("taro-navigation-bar-core"),(0,n.Z)("taro-page-meta-core"),(0,n.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var n=r(5827),o=r(1760),a=r(517),c=r(6830),i=r(8652),s=r(6014),u=r(3317),l=r(5935),f=r(766),p=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,u.Z)(this,r)}}p.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||m.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,o){var a=e.ref.current,c=o[r],i=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),t===d){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),u=c;return t===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),a.addEventListener(s,u)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(n)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return n.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,n,o):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,s.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,i.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,o.Z)(t,2),n=r[0],a=r[1];e.ref.current&&e.ref.current.removeEventListener(n,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,o={"ref":this.ref};return n&&(o.dangerouslySetInnerHTML=n),(0,p.createElement)(e,o,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"8502":function(e,t,r){r(4744);var n=r(3464),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{"$$typeof":o,"type":e,"key":u,"ref":l,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"687":function(e,t,r){r.r(t),r.d(t,{"default":function(){return y}});var n=r(6830),o=r(8652),a=r(1729),c=r(6014),i=r(295),s=r(5827),u=r(5172),l=r(3464),f=r(5403),p=r(438),d=r(7651),m=r(5081),v=r(1425),h=r(2922),g={"viewPng":p,"contentPng":d,"formPng":m,"mediaPng":v},y=function(e){(0,c.Z)(Index,e);var t=(0,i.Z)(Index);function Index(e){var r;return(0,n.Z)(this,Index),r=t.call(this,e),(0,s.Z)((0,a.Z)(r),"kindToggle",(function(e){return function(){for(var t=r.state.list,n=0,o=t.length;n<o;++n)t[n].id==e?t[n].open=!t[n].open:t[n].open=!1;r.setState({"list":t})}})),(0,s.Z)((0,a.Z)(r),"goToComponent",(function(e){(0,u.T8)({"url":e.url})})),r.state={"list":[{"id":"view","name":"视图容器","open":!1,"pages":["view","scroll-view","swiper","virtual-list","movable-view","page-container"]},{"id":"content","name":"基础内容","open":!1,"pages":["text","icon","progress","rich-text"]},{"id":"form","name":"表单组件","open":!1,"pages":["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea"]},{"id":"media","name":"媒体组件","open":!1,"pages":["image","video","camera"]}]},r}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this;return(0,h.jsxs)(f.pf,{"className":"index","enableBackToTop":!0,"style":{"paddingBottom":80},"children":[(0,h.jsx)(f.G7,{"className":"index-hd","children":(0,h.jsx)(f.G7,{"className":"index-desc","children":(0,h.jsx)(f.xv,{"className":"index-desc_text","children":"以下将展示 Taro 官方组件能力。"})})}),(0,h.jsx)(f.G7,{"className":"index-bd","children":(0,h.jsx)(f.G7,{"className":"kind-list","children":this.state.list.map((function(e){return e.hdClass="kind-list-item-hd "+(e.open?"kind-list-item-hd-show":""),e.bdClass="kind-list-item-bd "+(e.open?"kind-list-item-bd-show":""),e.boxClass="navigator-box "+(e.open?"navigator-box-show":""),e.imgSrc=g["".concat(e.id,"Png")],e._pages=e.pages.map((function(e){return{"page":e,"url":"/pages/components/pages/".concat(e,"/").concat(e)}})),e})).map((function(t,r){return(0,h.jsxs)(f.G7,{"className":"kind-list-item","children":[(0,h.jsxs)(f.G7,{"className":t.hdClass,"onClick":e.kindToggle(t.id),"children":[(0,h.jsx)(f.G7,{"className":"kind-list-text","children":(0,h.jsx)(f.xv,{"children":t.name})}),(0,h.jsx)(f.Ee,{"className":"kind-list-img","src":t.imgSrc})]}),(0,h.jsx)(f.G7,{"className":t.bdClass,"children":(0,h.jsx)(f.G7,{"className":t.boxClass,"children":t._pages.map((function(t,r){return(0,h.jsxs)(f.G7,{"onClick":e.goToComponent.bind(e,t),"className":"navigator","children":[(0,h.jsx)(f.xv,{"className":"navigator-text","children":t.page}),(0,h.jsx)(f.G7,{"className":"navigator-arrow"})]},r)}))})})]},r)}))})})]})}}]),Index}(l.Component)},"7651":function(e,t,r){e.exports=r.p+"static/images/assets/iconpark/add-text-two.png"},"5081":function(e,t,r){e.exports=r.p+"static/images/assets/iconpark/list-view.png"},"1425":function(e,t,r){e.exports=r.p+"static/images/assets/iconpark/play-two.png"},"438":function(e,t,r){e.exports=r.p+"static/images/assets/iconpark/waterfalls-h.png"}}]);