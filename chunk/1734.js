/*! For license information please see 1734.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1734],{"7296":function(e,n,r){r.d(n,{"zx":function(){return w},"V1":function(){return C},"XZ":function(){return R},"cO":function(){return E},"l0":function(){return k},"JO":function(){return G},"Ee":function(){return Z},"II":function(){return O},"__":function(){return S},"ub":function(){return L},"Gt":function(){return P},"C3":function(){return I},"_z":function(){return T},"cW":function(){return U},"Nf":function(){return M},"$o":function(){return D},"Ex":function(){return A},"Y8":function(){return F},"FX":function(){return V},"Ho":function(){return W},"pf":function(){return z},"iR":function(){return H},"tq":function(){return J},"t3":function(){return $},"rs":function(){return B},"xv":function(){return X},"gx":function(){return Y},"nk":function(){return K},"G7":function(){return Q},"kh":function(){return ee}});var o=r(4971),t=r(390),a=function manipulatePropsFunction(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.dangerouslySetInnerHTML;return(0,t.Z)((0,t.Z)({},n),{},{"dangerouslySetInnerHTML":r})},c=r(7737),i=r(3907),s=r(5747),u=r(8944),l=r(5909),d=r(4401),f=r(8248),p=r(6035),m=r(7419),v=function setRef(e,n){"function"==typeof e?e(n):null!=e&&(e.current=n)},h=function mergeRefs(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){n.forEach((function(n){v(n,e)}))}},x=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},y=function getClassName(e,n,r){var o=n.className||n.class,t=r.className||r.class,a=j(e),c=j(o?o.split(" "):[]),i=j(t?t.split(" "):[]),s=[];return a.forEach((function(e){c.has(e)?(s.push(e),c.delete(e)):i.has(e)||s.push(e)})),c.forEach((function(e){return s.push(e)})),s.join(" ")},b=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var n="on"+e,r=n in document;if(!r){var o=document.createElement("div");o.setAttribute(n,"return;"),r="function"==typeof o[n]}return r},g=function syncEvent(e,n,r){var o=e.__events||(e.__events={}),t=o[n];t&&e.removeEventListener(n,t),e.addEventListener(n,o[n]=function handler(e){r&&r.call(this,e)})},j=function arrayToMap(e){var n=new Map;return e.forEach((function(e){return n.set(e,e)})),n},_=["children","forwardedRef","style","className","ref"],N=function createReactComponent(e,n,r,a){void 0!==a&&a();var v=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),j=function(n){(0,d.Z)(ReactComponent,n);var a=(0,f.Z)(ReactComponent);function ReactComponent(e){var n;return(0,s.Z)(this,ReactComponent),n=a.call(this,e),(0,p.Z)((0,l.Z)(n),"componentEl",void 0),(0,p.Z)((0,l.Z)(n),"setComponentElRef",(function(e){n.componentEl=e})),n}return(0,u.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var o=y(e.classList,n,r);""!==o&&(e.className=o),Object.keys(n).forEach((function(r){if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var o=r.substring(2).toLowerCase();b(o)||g(e,o,n[r])}else e[r]=n[r],"string"===(0,c.Z)(n[r])&&e.setAttribute(x(r),n[r])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var n=this.props,a=n.children,s=n.forwardedRef,u=n.style,l=(n.className,n.ref,(0,i.Z)(n,_)),d=Object.keys(l).reduce((function(e,n){var r=l[n];if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var o=n.substring(2).toLowerCase();"undefined"!=typeof document&&b(o)&&(e[n]=r)}else{var t=(0,c.Z)(r);"string"!==t&&"boolean"!==t&&"number"!==t||(e[x(n)]=r)}return e}),{});r&&(d=r(this.props,d));var f=(0,t.Z)((0,t.Z)({},d),{},{"ref":h(s,this.setComponentElRef),"style":u});return(0,o.createElement)(e,f,a)}}],[{"key":"displayName","get":function get(){return v}}]),ReactComponent}(o.Component);return n&&(j.contextType=n),function createForwardRef(e,n){var r=function forwardRef(n,r){return(0,m.jsx)(e,(0,t.Z)((0,t.Z)({},n),{},{"forwardedRef":r}))};return r.displayName=n,o.forwardRef(r)}(j,v)},w=N("taro-button-core",void 0,a),C=N("taro-camera-core",void 0,a),R=N("taro-checkbox-core",void 0,a),E=N("taro-checkbox-group-core",void 0,a),k=N("taro-form-core",void 0,a),G=N("taro-icon-core",void 0,a),Z=N("taro-image-core",void 0,a),O=N("taro-input-core",void 0,a),S=N("taro-label-core",void 0,a),L=N("taro-movable-area-core",void 0,a),P=N("taro-movable-view-core",void 0,a),I=N("taro-navigator-core",void 0,a),T=N("taro-page-container-core",void 0,a),U=N("taro-picker-core",void 0,a),D=N("taro-picker-view-column-core",void 0,a),M=N("taro-picker-view-core",void 0,a),A=N("taro-progress-core",void 0,a),F=N("taro-radio-core",void 0,a),V=N("taro-radio-group-core",void 0,a),W=N("taro-rich-text-core",void 0,a),z=N("taro-scroll-view-core",void 0,a),H=N("taro-slider-core",void 0,a),J=N("taro-swiper-core",void 0,a),$=N("taro-swiper-item-core",void 0,a),B=N("taro-switch-core",void 0,a),X=N("taro-text-core",void 0,a),Y=N("taro-textarea-core",void 0,a),K=N("taro-video-core",void 0,a),Q=N("taro-view-core",void 0,a),ee=N("taro-web-view-core",void 0,a)},"6868":function(e,n,r){var o=r(4971),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,r){var o,a={},u=null,l=null;for(o in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)c.call(n,o)&&!s.hasOwnProperty(o)&&(a[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{"$$typeof":t,"type":e,"key":u,"ref":l,"props":a,"_owner":i.current}}n.Fragment=a,n.jsx=q,n.jsxs=q},"7419":function(e,n,r){e.exports=r(6868)},"3108":function(e,n,r){var o=r(7296),t=r(7419);n.Z=function Head(e){var n=e.title,r=e.desc;return(0,t.jsxs)(o.G7,{"className":"page-head","children":[(0,t.jsx)(o.G7,{"className":"page-head-title","children":n}),(0,t.jsx)(o.G7,{"className":"page-head-line"}),!!r&&(0,t.jsx)(o.xv,{"className":"page-head-desc","children":r})]})}},"1734":function(e,n,r){r.r(n);var o=r(6729),t=r(4971),a=r(7296),c=r(3108),i=r(7419);n.default=function PageSlider(){var e=(0,t.useState)(0),n=(0,o.Z)(e,2),r=n[0],s=n[1];return(0,i.jsxs)(a.G7,{"className":"components-page","children":[(0,i.jsx)(a.G7,{"className":"components-page__header","children":(0,i.jsx)(c.Z,{"title":"Slider"})}),(0,i.jsxs)(a.G7,{"className":"components-page__body","children":[(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"设置step"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":10,"value":50})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"显示当前的value"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":50,"showValue":!0})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"设置最小/最大值"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":100,"showValue":!0,"min":50,"max":200})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"UI设置"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":50,"activeColor":"#6190E8","backgroundColor":"red","blockColor":"#333","blockSize":20})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"数据绑定"}),(0,i.jsxs)(a.G7,{"className":"example-body","children":[(0,i.jsx)(a.iR,{"step":1,"value":r,"onChanging":function handleChaning(e){null!=e&&e.detail.value&&s(null==e?void 0:e.detail.value)},"showValue":!0,"min":0,"max":100}),(0,i.jsx)(a.zx,{"type":"primary","onClick":function onClickSet(){var e=Math.floor(100*Math.random());s(e)},"children":"Set Value"})]})]})]})]})}},"3907":function(e,n,r){function _objectWithoutProperties(e,n){if(null==e)return{};var r,o,t=function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}r.d(n,{"Z":function(){return _objectWithoutProperties}})}}]);