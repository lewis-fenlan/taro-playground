/*! For license information please see 7848.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7848],{"4343":function(e,r,t){t.d(r,{"zx":function(){return c},"V1":function(){return i},"XZ":function(){return s},"cO":function(){return a},"l0":function(){return u},"JO":function(){return f},"Ee":function(){return d},"II":function(){return l},"__":function(){return p},"ub":function(){return v},"Gt":function(){return m},"C3":function(){return h},"_z":function(){return y},"cW":function(){return b},"Nf":function(){return O},"$o":function(){return w},"Ex":function(){return g},"Y8":function(){return _},"FX":function(){return x},"Ho":function(){return E},"pf":function(){return j},"iR":function(){return N},"tq":function(){return R},"t3":function(){return k},"rs":function(){return C},"xv":function(){return L},"gx":function(){return I},"nk":function(){return S},"G7":function(){return U},"kh":function(){return P}});var o=t(3464);const helper_manipulatePropsFunction=(e,r={})=>{const{"dangerouslySetInnerHTML":t,"style":o}=e;return"string"!=typeof o&&(r.style=o),Object.assign(Object.assign({},r),{"dangerouslySetInnerHTML":t})};var n=t(8499);const mergeRefs=(...e)=>r=>{e.forEach((e=>{((e,r)=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})(e,r)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,r,t)=>{const o=r.className||r.class,n=t.className||t.class,c=arrayToMap(e),i=arrayToMap(o?o.split(" "):[]),s=arrayToMap(n?n.split(" "):[]),a=[];return c.forEach((e=>{i.has(e)?(a.push(e),i.delete(e)):s.has(e)||a.push(e)})),i.forEach((e=>a.push(e))),a.join(" ")},isCoveredByReact=e=>!1,syncEvent=(e,r,t)=>{const o=e.__events||(e.__events={}),n=o[r];n&&e.removeEventListener(r,n),e.addEventListener(r,o[r]=function handler(e){t&&t.call(this,e)})},arrayToMap=e=>{const r=new Map;return e.forEach((e=>r.set(e,e))),r},createComponent_createReactComponent=(e,r,t,c)=>{void 0!==c&&c();const i=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const s=class extends o.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,r,t={})=>{if(e instanceof Element){const o=getClassName(e.classList,r,t);""!==o&&(e.className=o),Object.keys(r).forEach((t=>{if(!("style"===t&&"string"!=typeof r[t]||["children","ref","class","className","forwardedRef"].includes(t)))if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const o=t.substring(2).toLowerCase();isCoveredByReact(o)||syncEvent(e,o,r[t])}else e[t]=r[t],"string"==typeof r[t]&&e.setAttribute(camelToDashCase(t),r[t])}))}})(this.componentEl,this.props,e)}"render"(){const r=this.props,{"children":c,"forwardedRef":i,"className":s,"ref":a}=r,u=(0,n._T)(r,["children","forwardedRef","className","ref"]);let f=Object.keys(u).reduce(((e,r)=>{const t=u[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const o=r.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(o)&&(e[r]=t)}else{"style"!==r&&["string","boolean","number"].includes(typeof t)&&(e[camelToDashCase(r)]=t)}return e}),{});t&&(f=t(this.props,f));const d=Object.assign(Object.assign({},f),{"ref":mergeRefs(i,this.setComponentElRef)});return(0,o.createElement)(e,d,c)}static get"displayName"(){return i}};return r&&(s.contextType=r),((e,r)=>{const forwardRef=(r,t)=>o.createElement(e,Object.assign({},r,{"forwardedRef":t}));return forwardRef.displayName=r,o.forwardRef(forwardRef)})(s,i)},c=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),U=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),P=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8502":function(e,r,t){var o=t(3464),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,c={},u=null,f=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,o)&&!a.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{"$$typeof":n,"type":e,"key":u,"ref":f,"props":c,"_owner":s.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"8499":function(e,r,t){t.d(r,{"_T":function(){return __rest}});function __rest(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}Object.create;Object.create},"7848":function(e,r,t){t.r(r),t.d(r,{"default":function(){return RNView}});var o=t(4343),n=t(3315),c=t(2922);function RNView(){var e=n.ZP.useRouter().params,r=void 0===e?{}:e,t=r.android,i=r.ios;return(0,c.jsxs)(o.G7,{"className":"rn-container","children":[t&&(0,c.jsx)(o.G7,{"className":"rn-text","children":"Android"}),t&&(0,c.jsx)(o.Ee,{"className":"rn-image","src":decodeURIComponent(t)}),i&&(0,c.jsx)(o.G7,{"className":"rn-text","children":"iOS"}),i&&(0,c.jsx)(o.Ee,{"className":"rn-image","src":decodeURIComponent(i)})]})}}}]);