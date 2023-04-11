/*! For license information please see 8921.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8921],{"4343":function(e,r,t){t.d(r,{"zx":function(){return a},"V1":function(){return c},"XZ":function(){return s},"cO":function(){return i},"l0":function(){return l},"JO":function(){return u},"Ee":function(){return d},"II":function(){return p},"__":function(){return f},"ub":function(){return m},"Gt":function(){return v},"C3":function(){return h},"_z":function(){return x},"cW":function(){return g},"Nf":function(){return b},"$o":function(){return y},"Ex":function(){return _},"Y8":function(){return j},"FX":function(){return w},"Ho":function(){return O},"pf":function(){return N},"iR":function(){return E},"tq":function(){return C},"t3":function(){return k},"rs":function(){return G},"xv":function(){return L},"gx":function(){return R},"nk":function(){return T},"G7":function(){return S},"kh":function(){return I}});var o=t(3464);const helper_manipulatePropsFunction=(e,r={})=>{const{"dangerouslySetInnerHTML":t,"style":o}=e;return"string"!=typeof o&&(r.style=o),Object.assign(Object.assign({},r),{"dangerouslySetInnerHTML":t})};var n=t(8499);const mergeRefs=(...e)=>r=>{e.forEach((e=>{((e,r)=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})(e,r)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,r,t)=>{const o=r.className||r.class,n=t.className||t.class,a=arrayToMap(e),c=arrayToMap(o?o.split(" "):[]),s=arrayToMap(n?n.split(" "):[]),i=[];return a.forEach((e=>{c.has(e)?(i.push(e),c.delete(e)):s.has(e)||i.push(e)})),c.forEach((e=>i.push(e))),i.join(" ")},isCoveredByReact=e=>!1,syncEvent=(e,r,t)=>{const o=e.__events||(e.__events={}),n=o[r];n&&e.removeEventListener(r,n),e.addEventListener(r,o[r]=function handler(e){t&&t.call(this,e)})},arrayToMap=e=>{const r=new Map;return e.forEach((e=>r.set(e,e))),r},createComponent_createReactComponent=(e,r,t,a)=>{void 0!==a&&a();const c=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const s=class extends o.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,r,t={})=>{if(e instanceof Element){const o=getClassName(e.classList,r,t);""!==o&&(e.className=o),Object.keys(r).forEach((t=>{if(!("style"===t&&"string"!=typeof r[t]||["children","ref","class","className","forwardedRef"].includes(t)))if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const o=t.substring(2).toLowerCase();isCoveredByReact(o)||syncEvent(e,o,r[t])}else e[t]=r[t],"string"==typeof r[t]&&e.setAttribute(camelToDashCase(t),r[t])}))}})(this.componentEl,this.props,e)}"render"(){const r=this.props,{"children":a,"forwardedRef":c,"className":s,"ref":i}=r,l=(0,n._T)(r,["children","forwardedRef","className","ref"]);let u=Object.keys(l).reduce(((e,r)=>{const t=l[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const o=r.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(o)&&(e[r]=t)}else{"style"!==r&&["string","boolean","number"].includes(typeof t)&&(e[camelToDashCase(r)]=t)}return e}),{});t&&(u=t(this.props,u));const d=Object.assign(Object.assign({},u),{"ref":mergeRefs(c,this.setComponentElRef)});return(0,o.createElement)(e,d,a)}static get"displayName"(){return c}};return r&&(s.contextType=r),((e,r)=>{const forwardRef=(r,t)=>o.createElement(e,Object.assign({},r,{"forwardedRef":t}));return forwardRef.displayName=r,o.forwardRef(forwardRef)})(s,c)},a=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8502":function(e,r,t){var o=t(3464),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,a={},l=null,u=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,o)&&!i.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":a,"_owner":s.current}}r.Fragment=a,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"8499":function(e,r,t){t.d(r,{"_T":function(){return __rest}});function __rest(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}Object.create;Object.create},"7465":function(e,r,t){var o=t(4343),n=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!t&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":t})]})}},"8921":function(e,r,t){t.r(r);var o=t(4343),n=t(7465),a=t(2922),c="/pages/global/pages/router/index";r.default=function NavigatorPage(){return(0,a.jsxs)(o.G7,{"className":"components-page","children":[(0,a.jsx)(o.G7,{"className":"components-page__header","children":(0,a.jsx)(n.Z,{"title":"Navigator"})}),(0,a.jsx)(o.G7,{"className":"components-page__body","children":(0,a.jsx)(o.G7,{"className":"components-page__body-example example","children":(0,a.jsx)(o.G7,{"className":"example-body","children":(0,a.jsxs)(o.G7,{"className":"example-body__navigators","children":[(0,a.jsx)(o.C3,{"url":c,"children":(0,a.jsx)(o.G7,{"className":"example-body__navigators-item","children":"跳转到新页面"})}),(0,a.jsx)(o.C3,{"url":c,"openType":"redirect","children":(0,a.jsx)(o.G7,{"className":"example-body__navigators-item","children":"在当前页打开"})}),(0,a.jsx)(o.C3,{"url":"/pages/global/index","openType":"switchTab","children":(0,a.jsx)(o.G7,{"className":"example-body__navigators-item","children":"跳转到tabBar页面"})}),(0,a.jsx)(o.C3,{"url":c,"openType":"reLaunch","children":(0,a.jsx)(o.G7,{"className":"example-body__navigators-item","children":"关闭所有页面"})}),(0,a.jsx)(o.C3,{"delta":1,"openType":"navigateBack","children":(0,a.jsx)(o.G7,{"className":"example-body__navigators-item","children":"返回上一页面"})})]})})})})]})}}}]);