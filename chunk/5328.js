/*! For license information please see 5328.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5328],{"4343":function(e,n,t){t.d(n,{"zx":function(){return s},"V1":function(){return i},"XZ":function(){return a},"cO":function(){return c},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return u},"II":function(){return p},"__":function(){return f},"ub":function(){return m},"Gt":function(){return v},"C3":function(){return g},"_z":function(){return h},"cW":function(){return x},"Nf":function(){return y},"$o":function(){return b},"Ex":function(){return k},"Y8":function(){return j},"FX":function(){return w},"Ho":function(){return _},"pf":function(){return O},"iR":function(){return N},"tq":function(){return C},"t3":function(){return E},"rs":function(){return T},"xv":function(){return I},"gx":function(){return G},"nk":function(){return R},"G7":function(){return L},"kh":function(){return P}});var r=t(3464);const helper_manipulatePropsFunction=(e,n={})=>{const{"dangerouslySetInnerHTML":t,"style":r}=e;return"string"!=typeof r&&(n.style=r),Object.assign(Object.assign({},n),{"dangerouslySetInnerHTML":t})};var o=t(8499);const mergeRefs=(...e)=>n=>{e.forEach((e=>{((e,n)=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})(e,n)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,n,t)=>{const r=n.className||n.class,o=t.className||t.class,s=arrayToMap(e),i=arrayToMap(r?r.split(" "):[]),a=arrayToMap(o?o.split(" "):[]),c=[];return s.forEach((e=>{i.has(e)?(c.push(e),i.delete(e)):a.has(e)||c.push(e)})),i.forEach((e=>c.push(e))),c.join(" ")},isCoveredByReact=e=>!1,syncEvent=(e,n,t)=>{const r=e.__events||(e.__events={}),o=r[n];o&&e.removeEventListener(n,o),e.addEventListener(n,r[n]=function handler(e){t&&t.call(this,e)})},arrayToMap=e=>{const n=new Map;return e.forEach((e=>n.set(e,e))),n},createComponent_createReactComponent=(e,n,t,s)=>{void 0!==s&&s();const i=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const a=class extends r.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,n,t={})=>{if(e instanceof Element){const r=getClassName(e.classList,n,t);""!==r&&(e.className=r),Object.keys(n).forEach((t=>{if(!("style"===t&&"string"!=typeof n[t]||["children","ref","class","className","forwardedRef"].includes(t)))if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const r=t.substring(2).toLowerCase();isCoveredByReact(r)||syncEvent(e,r,n[t])}else e[t]=n[t],"string"==typeof n[t]&&e.setAttribute(camelToDashCase(t),n[t])}))}})(this.componentEl,this.props,e)}"render"(){const n=this.props,{"children":s,"forwardedRef":i,"className":a,"ref":c}=n,l=(0,o._T)(n,["children","forwardedRef","className","ref"]);let d=Object.keys(l).reduce(((e,n)=>{const t=l[n];if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const r=n.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(r)&&(e[n]=t)}else{"style"!==n&&["string","boolean","number"].includes(typeof t)&&(e[camelToDashCase(n)]=t)}return e}),{});t&&(d=t(this.props,d));const u=Object.assign(Object.assign({},d),{"ref":mergeRefs(i,this.setComponentElRef)});return(0,r.createElement)(e,u,s)}static get"displayName"(){return i}};return n&&(a.contextType=n),((e,n)=>{const forwardRef=(n,t)=>r.createElement(e,Object.assign({},n,{"forwardedRef":t}));return forwardRef.displayName=n,r.forwardRef(forwardRef)})(a,i)},s=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),P=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8502":function(e,n,t){var r=t(3464),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{"$$typeof":o,"type":e,"key":l,"ref":d,"props":s,"_owner":a.current}}n.Fragment=s,n.jsx=q,n.jsxs=q},"2922":function(e,n,t){e.exports=t(8502)},"8499":function(e,n,t){t.d(n,{"_T":function(){return __rest}});function __rest(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}Object.create;Object.create},"5328":function(e,n,t){t.r(n),t.d(n,{"default":function(){return b}});var r=t(8446),o=t(6830),s=t(8652),i=t(1729),a=t(6014),c=t(7038),l=t(5827),d=t(3116),u=t(3464),p=t(4343),f=t(402),m=t(6895),v=t(5949),g=t(4837),h=t(2922),x={"hooksPng":f,"routerPng":m,"lifecyclePng":v,"stylesPng":g},b=function(e){(0,a.Z)(Index,e);var n=(0,c.Z)(Index);function Index(e){var t;return(0,o.Z)(this,Index),t=n.call(this,e),(0,l.Z)((0,i.Z)(t),"kindToggle",(function(e){return function(){for(var n=t.state.list,r=0,o=n.length;r<o;++r)n[r].id==e?n[r].open=!n[r].open:n[r].open=!1;t.setState({"list":n})}})),(0,l.Z)((0,i.Z)(t),"goToComponent",(function(e){(0,d.T8)({"url":e.url})})),t.state={"list":[{"id":"hooks","name":"Taro Hooks","open":!1,"pages":[{"id":"page","name":"Hooks"}]},{"id":"lifecycle","name":"生命周期","open":!1,"pages":[{"id":"page","name":"页面生命周期"}]},{"id":"router","name":"路由","open":!1,"pages":[{"id":"index","name":"页面跳转"}]},{"id":"styles","name":"样式","open":!1,"pages":[{"id":"size","name":"尺寸"},{"id":"platform","name":"跨平台"}]}]},t}return(0,s.Z)(Index,[{"key":"render","value":function render(){var e=this;return(0,h.jsxs)(p.pf,{"className":"index","enableBackToTop":!0,"style":{"paddingBottom":80},"children":[(0,h.jsx)(p.G7,{"className":"index-hd","children":(0,h.jsx)(p.G7,{"className":"index-desc","children":(0,h.jsx)(p.xv,{"className":"index-desc_text","children":"以下将展示 Taro 全局能力。"})})}),(0,h.jsx)(p.G7,{"className":"index-bd","children":(0,h.jsx)(p.G7,{"className":"kind-list","children":this.state.list.map((function(e){return e.hdClass="kind-list-item-hd "+(e.open?"kind-list-item-hd-show":""),e.bdClass="kind-list-item-bd "+(e.open?"kind-list-item-bd-show":""),e.boxClass="navigator-box "+(e.open?"navigator-box-show":""),e.imgSrc=x["".concat(e.id,"Png")],e._pages=e.pages.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{"url":"/pages/global/pages/".concat(e.id,"/").concat(n.id)})})),e})).map((function(n,t){return(0,h.jsxs)(p.G7,{"className":"kind-list-item","children":[(0,h.jsxs)(p.G7,{"className":n.hdClass,"onClick":e.kindToggle(n.id),"children":[(0,h.jsx)(p.G7,{"className":"kind-list-text","children":(0,h.jsx)(p.xv,{"children":n.name})}),(0,h.jsx)(p.Ee,{"className":"kind-list-img","src":n.imgSrc})]}),(0,h.jsx)(p.G7,{"className":n.bdClass,"children":(0,h.jsx)(p.G7,{"className":n.boxClass,"children":n._pages.map((function(n,t){return(0,h.jsxs)(p.G7,{"onClick":e.goToComponent.bind(e,n),"className":"navigator","children":[(0,h.jsx)(p.xv,{"className":"navigator-text","children":n.name}),(0,h.jsx)(p.G7,{"className":"navigator-arrow"})]},t)}))})})]},t)}))})})]})}}]),Index}(u.Component)},"402":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/aiming.png"},"5949":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/cycle-arrow.png"},"4837":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/font-size.png"},"6895":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/navigation.png"}}]);