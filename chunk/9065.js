/*! For license information please see 9065.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9065],{"4343":function(e,r,s){s.d(r,{"zx":function(){return c},"V1":function(){return o},"XZ":function(){return i},"cO":function(){return a},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return _},"II":function(){return u},"__":function(){return p},"ub":function(){return h},"Gt":function(){return f},"C3":function(){return m},"_z":function(){return x},"cW":function(){return j},"Nf":function(){return N},"$o":function(){return g},"Ex":function(){return v},"Y8":function(){return G},"FX":function(){return y},"Ho":function(){return w},"pf":function(){return O},"iR":function(){return b},"tq":function(){return E},"t3":function(){return k},"rs":function(){return J},"xv":function(){return z},"gx":function(){return C},"nk":function(){return R},"G7":function(){return L},"kh":function(){return I}});var n=s(6354);const helper_manipulatePropsFunction=(e,r={})=>{const{"dangerouslySetInnerHTML":s}=e;return Object.assign(Object.assign({},r),{"dangerouslySetInnerHTML":s})};var t=s(9900);const mergeRefs=(...e)=>r=>{e.forEach((e=>{((e,r)=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})(e,r)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,r,s)=>{const n=r.className||r.class,t=s.className||s.class,c=arrayToMap(e),o=arrayToMap(n?n.split(" "):[]),i=arrayToMap(t?t.split(" "):[]),a=[];return c.forEach((e=>{o.has(e)?(a.push(e),o.delete(e)):i.has(e)||a.push(e)})),o.forEach((e=>a.push(e))),a.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const r="on"+e;let s=r in document;if(!s){const e=document.createElement("div");e.setAttribute(r,"return;"),s="function"==typeof e[r]}return s}},syncEvent=(e,r,s)=>{const n=e.__events||(e.__events={}),t=n[r];t&&e.removeEventListener(r,t),e.addEventListener(r,n[r]=function handler(e){s&&s.call(this,e)})},arrayToMap=e=>{const r=new Map;return e.forEach((e=>r.set(e,e))),r},createComponent_createReactComponent=(e,r,s,c)=>{void 0!==c&&c();const o=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const i=class extends n.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,r,s={})=>{if(e instanceof Element){const n=getClassName(e.classList,r,s);""!==n&&(e.className=n),Object.keys(r).forEach((s=>{if("children"!==s&&"style"!==s&&"ref"!==s&&"class"!==s&&"className"!==s&&"forwardedRef"!==s)if(0===s.indexOf("on")&&s[2]===s[2].toUpperCase()){const n=s.substring(2).toLowerCase();isCoveredByReact(n)||syncEvent(e,n,r[s])}else e[s]=r[s],"string"==typeof r[s]&&e.setAttribute(camelToDashCase(s),r[s])}))}})(this.componentEl,this.props,e)}"render"(){const r=this.props,{"children":c,"forwardedRef":o,"style":i,"className":a,"ref":l}=r,d=(0,t._T)(r,["children","forwardedRef","style","className","ref"]);let _=Object.keys(d).reduce(((e,r)=>{const s=d[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const n=r.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(n)&&(e[r]=s)}else{const n=typeof s;"string"!==n&&"boolean"!==n&&"number"!==n||(e[camelToDashCase(r)]=s)}return e}),{});s&&(_=s(this.props,_));const u=Object.assign(Object.assign({},_),{"ref":mergeRefs(o,this.setComponentElRef),"style":i});return(0,n.createElement)(e,u,c)}static get"displayName"(){return o}};return r&&(i.contextType=r),((e,r)=>{const forwardRef=(r,s)=>n.createElement(e,Object.assign({},r,{"forwardedRef":s}));return forwardRef.displayName=r,n.forwardRef(forwardRef)})(i,o)},c=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),o=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),J=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),z=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,r,s){var n=s(6354),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,s){var n,c={},l=null,d=null;for(n in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!a.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{"$$typeof":t,"type":e,"key":l,"ref":d,"props":c,"_owner":i.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"4869":function(e,r,s){e.exports=s(8724)},"9900":function(e,r,s){s.d(r,{"_T":function(){return __rest}});function __rest(e,r){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]])}return s}Object.create;Object.create},"4987":function(e,r,s){var n=s(4343),t=s(4869);r.Z=function Head(e){var r=e.title,s=e.desc;return(0,t.jsxs)(n.G7,{"className":"page-head","children":[(0,t.jsx)(n.G7,{"className":"page-head-title","children":r}),(0,t.jsx)(n.G7,{"className":"page-head-line"}),!!s&&(0,t.jsx)(n.xv,{"className":"page-head-desc","children":s})]})}},"9065":function(e,r,s){s.r(r);var n=s(4343),t=s(4987),c=s(4869);r.default=function PageView(){return(0,c.jsxs)(n.pf,{"className":"components-page","children":[(0,c.jsx)(n.G7,{"className":"components-page__header","children":(0,c.jsx)(t.Z,{"title":"Icon"})}),(0,c.jsx)(n.G7,{"className":"components-page__body","children":(0,c.jsxs)(n.G7,{"className":"components-page__body-example example","children":[(0,c.jsxs)(n.G7,{"className":"page__con__wrap","children":[(0,c.jsx)(n.JO,{"size":"30","type":"success"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"成功"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示操作顺利完成"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap","children":[(0,c.jsx)(n.JO,{"size":"30","type":"info"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"提示"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示信息展示；也常用于缺乏条件的操作拦截，提示用户所需信息"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap","children":[(0,c.jsx)(n.JO,{"size":"30","type":"warn","color":"#ccc"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"普通警告"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap","children":[(0,c.jsx)(n.JO,{"size":"30","type":"warn"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"强烈警告"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap","children":[(0,c.jsx)(n.JO,{"size":"30","type":"waiting"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"等待"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"success_no_circle"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"多选控件图标_已选择"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于多选控件中，表示已选择该项目"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"warn"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"错误提示"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于在表单中表示出现错误"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"success"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"单选控件图标_已选择"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于单选控件中，表示已选择该项目"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"download"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"下载"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于表示可下载"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"clear","color":"red"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"停止或关闭"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于在表单中，表示关闭或停止"})]})]}),(0,c.jsxs)(n.G7,{"className":"page__con__wrap icon_sml","children":[(0,c.jsx)(n.JO,{"size":"30","type":"search"}),(0,c.jsxs)(n.G7,{"className":"icon_right","children":[(0,c.jsx)(n.G7,{"className":"icon_right_title","children":"搜索"}),(0,c.jsx)(n.G7,{"className":"icon_right_desc","children":"用于搜索控件中，表示可搜索"})]})]})]})})]})}}}]);