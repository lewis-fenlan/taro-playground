/*! For license information please see 968.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[968],{"7296":function(e,t,r){r.d(t,{"zx":function(){return w},"V1":function(){return C},"XZ":function(){return E},"cO":function(){return R},"l0":function(){return O},"JO":function(){return Z},"Ee":function(){return G},"II":function(){return k},"__":function(){return L},"ub":function(){return P},"Gt":function(){return S},"C3":function(){return T},"_z":function(){return A},"cW":function(){return D},"Nf":function(){return U},"$o":function(){return I},"Ex":function(){return M},"Y8":function(){return F},"FX":function(){return W},"Ho":function(){return B},"pf":function(){return H},"iR":function(){return J},"tq":function(){return $},"t3":function(){return z},"rs":function(){return V},"xv":function(){return X},"gx":function(){return Y},"nk":function(){return K},"G7":function(){return Q},"kh":function(){return ee}});var n=r(4971),o=r(390),a=function manipulatePropsFunction(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.dangerouslySetInnerHTML;return(0,o.Z)((0,o.Z)({},t),{},{"dangerouslySetInnerHTML":r})},i=r(7737),c=r(3907),s=r(5747),l=r(8944),u=r(5909),d=r(4401),f=r(8248),m=r(6035),p=r(7419),v=function setRef(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)},x=function mergeRefs(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){t.forEach((function(t){v(t,e)}))}},h=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},_=function getClassName(e,t,r){var n=t.className||t.class,o=r.className||r.class,a=j(e),i=j(n?n.split(" "):[]),c=j(o?o.split(" "):[]),s=[];return a.forEach((function(e){i.has(e)?(s.push(e),i.delete(e)):c.has(e)||s.push(e)})),i.forEach((function(e){return s.push(e)})),s.join(" ")},y=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var t="on"+e,r=t in document;if(!r){var n=document.createElement("div");n.setAttribute(t,"return;"),r="function"==typeof n[t]}return r},b=function syncEvent(e,t,r){var n=e.__events||(e.__events={}),o=n[t];o&&e.removeEventListener(t,o),e.addEventListener(t,n[t]=function handler(e){r&&r.call(this,e)})},j=function arrayToMap(e){var t=new Map;return e.forEach((function(e){return t.set(e,e)})),t},N=["children","forwardedRef","style","className","ref"],g=function createReactComponent(e,t,r,a){void 0!==a&&a();var v=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),j=function(t){(0,d.Z)(ReactComponent,t);var a=(0,f.Z)(ReactComponent);function ReactComponent(e){var t;return(0,s.Z)(this,ReactComponent),t=a.call(this,e),(0,m.Z)((0,u.Z)(t),"componentEl",void 0),(0,m.Z)((0,u.Z)(t),"setComponentElRef",(function(e){t.componentEl=e})),t}return(0,l.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var n=_(e.classList,t,r);""!==n&&(e.className=n),Object.keys(t).forEach((function(r){if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var n=r.substring(2).toLowerCase();y(n)||b(e,n,t[r])}else e[r]=t[r],"string"===(0,i.Z)(t[r])&&e.setAttribute(h(r),t[r])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var t=this.props,a=t.children,s=t.forwardedRef,l=t.style,u=(t.className,t.ref,(0,c.Z)(t,N)),d=Object.keys(u).reduce((function(e,t){var r=u[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var n=t.substring(2).toLowerCase();"undefined"!=typeof document&&y(n)&&(e[t]=r)}else{var o=(0,i.Z)(r);"string"!==o&&"boolean"!==o&&"number"!==o||(e[h(t)]=r)}return e}),{});r&&(d=r(this.props,d));var f=(0,o.Z)((0,o.Z)({},d),{},{"ref":x(s,this.setComponentElRef),"style":l});return(0,n.createElement)(e,f,a)}}],[{"key":"displayName","get":function get(){return v}}]),ReactComponent}(n.Component);return t&&(j.contextType=t),function createForwardRef(e,t){var r=function forwardRef(t,r){return(0,p.jsx)(e,(0,o.Z)((0,o.Z)({},t),{},{"forwardedRef":r}))};return r.displayName=t,n.forwardRef(r)}(j,v)},w=g("taro-button-core",void 0,a),C=g("taro-camera-core",void 0,a),E=g("taro-checkbox-core",void 0,a),R=g("taro-checkbox-group-core",void 0,a),O=g("taro-form-core",void 0,a),Z=g("taro-icon-core",void 0,a),G=g("taro-image-core",void 0,a),k=g("taro-input-core",void 0,a),L=g("taro-label-core",void 0,a),P=g("taro-movable-area-core",void 0,a),S=g("taro-movable-view-core",void 0,a),T=g("taro-navigator-core",void 0,a),A=g("taro-page-container-core",void 0,a),D=g("taro-picker-core",void 0,a),I=g("taro-picker-view-column-core",void 0,a),U=g("taro-picker-view-core",void 0,a),M=g("taro-progress-core",void 0,a),F=g("taro-radio-core",void 0,a),W=g("taro-radio-group-core",void 0,a),B=g("taro-rich-text-core",void 0,a),H=g("taro-scroll-view-core",void 0,a),J=g("taro-slider-core",void 0,a),$=g("taro-swiper-core",void 0,a),z=g("taro-swiper-item-core",void 0,a),V=g("taro-switch-core",void 0,a),X=g("taro-text-core",void 0,a),Y=g("taro-textarea-core",void 0,a),K=g("taro-video-core",void 0,a),Q=g("taro-view-core",void 0,a),ee=g("taro-web-view-core",void 0,a)},"6868":function(e,t,r){var n=r(4971),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,a={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{"$$typeof":o,"type":e,"key":l,"ref":u,"props":a,"_owner":c.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},"7419":function(e,t,r){e.exports=r(6868)},"3108":function(e,t,r){var n=r(7296),o=r(7419);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!r&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":r})]})}},"968":function(e,t,r){r.r(t);var n=r(7296),o=r(3108),a=r(7419);t.default=function(){return(0,a.jsxs)(n.pf,{"className":"components-page","children":[(0,a.jsx)(n.G7,{"className":"components-page__header","children":(0,a.jsx)(o.Z,{"title":"View"})}),(0,a.jsxs)(n.G7,{"className":"components-page__body","children":[(0,a.jsxs)(n.G7,{"className":"components-page__body-example example","children":[(0,a.jsx)(n.G7,{"className":"example-header","children":"flex-direction: row 横向布局"}),(0,a.jsx)(n.G7,{"className":"example-body","children":(0,a.jsxs)(n.G7,{"className":"example-body__list","children":[(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-1","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"A"})}),(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-2","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"B"})}),(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-3","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"C"})})]})})]}),(0,a.jsxs)(n.G7,{"className":"components-page__body-example example","children":[(0,a.jsx)(n.G7,{"className":"example-header","children":"flex-direction: column 纵向布局"}),(0,a.jsx)(n.G7,{"className":"example-body","children":(0,a.jsxs)(n.G7,{"className":"example-body__list example-body__list--vertical","children":[(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-1","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"A"})}),(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-2","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"B"})}),(0,a.jsx)(n.G7,{"className":"example-body__list-item demo-text-3","children":(0,a.jsx)(n.xv,{"className":"example-body__list-item-txt","children":"C"})})]})})]})]})]})}},"3907":function(e,t,r){function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{"Z":function(){return _objectWithoutProperties}})}}]);