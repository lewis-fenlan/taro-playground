/*! For license information please see 9730.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9730],{"7296":function(e,n,t){t.d(n,{"zx":function(){return j},"V1":function(){return Z},"XZ":function(){return _},"cO":function(){return N},"l0":function(){return E},"JO":function(){return R},"Ee":function(){return O},"II":function(){return T},"__":function(){return P},"ub":function(){return I},"Gt":function(){return G},"C3":function(){return L},"_z":function(){return S},"cW":function(){return D},"Nf":function(){return A},"$o":function(){return U},"Ex":function(){return M},"Y8":function(){return F},"FX":function(){return H},"Ho":function(){return W},"pf":function(){return z},"iR":function(){return B},"tq":function(){return J},"t3":function(){return $},"rs":function(){return X},"xv":function(){return Y},"gx":function(){return V},"nk":function(){return K},"G7":function(){return Q},"kh":function(){return ee}});var r=t(4971),o=t(390),i=function manipulatePropsFunction(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.dangerouslySetInnerHTML;return(0,o.Z)((0,o.Z)({},n),{},{"dangerouslySetInnerHTML":t})},a=t(7737),c=t(3907),s=t(5747),u=t(8944),d=t(5909),f=t(4401),l=t(8248),p=t(6035),m=t(7419),v=function setRef(e,n){"function"==typeof e?e(n):null!=e&&(e.current=n)},h=function mergeRefs(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){v(n,e)}))}},g=function camelToDashCase(e){return e.replace(/([A-Z])/g,(function(e){return"-".concat(e[0].toLowerCase())}))},x=function getClassName(e,n,t){var r=n.className||n.class,o=t.className||t.class,i=k(e),a=k(r?r.split(" "):[]),c=k(o?o.split(" "):[]),s=[];return i.forEach((function(e){a.has(e)?(s.push(e),a.delete(e)):c.has(e)||s.push(e)})),a.forEach((function(e){return s.push(e)})),s.join(" ")},y=function isCoveredByReact(e){if("undefined"==typeof document)return!0;var n="on"+e,t=n in document;if(!t){var r=document.createElement("div");r.setAttribute(n,"return;"),t="function"==typeof r[n]}return t},b=function syncEvent(e,n,t){var r=e.__events||(e.__events={}),o=r[n];o&&e.removeEventListener(n,o),e.addEventListener(n,r[n]=function handler(e){t&&t.call(this,e)})},k=function arrayToMap(e){var n=new Map;return e.forEach((function(e){return n.set(e,e)})),n},w=["children","forwardedRef","style","className","ref"],C=function createReactComponent(e,n,t,i){void 0!==i&&i();var v=function dashToPascalCase(e){return e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join("")}(e),k=function(n){(0,f.Z)(ReactComponent,n);var i=(0,l.Z)(ReactComponent);function ReactComponent(e){var n;return(0,s.Z)(this,ReactComponent),n=i.call(this,e),(0,p.Z)((0,d.Z)(n),"componentEl",void 0),(0,p.Z)((0,d.Z)(n),"setComponentElRef",(function(e){n.componentEl=e})),n}return(0,u.Z)(ReactComponent,[{"key":"componentDidMount","value":function componentDidMount(){this.componentDidUpdate(this.props)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){!function attachProps(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e instanceof Element){var r=x(e.classList,n,t);""!==r&&(e.className=r),Object.keys(n).forEach((function(t){if("children"!==t&&"style"!==t&&"ref"!==t&&"class"!==t&&"className"!==t&&"forwardedRef"!==t)if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var r=t.substring(2).toLowerCase();y(r)||b(e,r,n[t])}else e[t]=n[t],"string"===(0,a.Z)(n[t])&&e.setAttribute(g(t),n[t])}))}}(this.componentEl,this.props,e)}},{"key":"render","value":function render(){var n=this.props,i=n.children,s=n.forwardedRef,u=n.style,d=(n.className,n.ref,(0,c.Z)(n,w)),f=Object.keys(d).reduce((function(e,n){var t=d[n];if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){var r=n.substring(2).toLowerCase();"undefined"!=typeof document&&y(r)&&(e[n]=t)}else{var o=(0,a.Z)(t);"string"!==o&&"boolean"!==o&&"number"!==o||(e[g(n)]=t)}return e}),{});t&&(f=t(this.props,f));var l=(0,o.Z)((0,o.Z)({},f),{},{"ref":h(s,this.setComponentElRef),"style":u});return(0,r.createElement)(e,l,i)}}],[{"key":"displayName","get":function get(){return v}}]),ReactComponent}(r.Component);return n&&(k.contextType=n),function createForwardRef(e,n){var t=function forwardRef(n,t){return(0,m.jsx)(e,(0,o.Z)((0,o.Z)({},n),{},{"forwardedRef":t}))};return t.displayName=n,r.forwardRef(t)}(k,v)},j=C("taro-button-core",void 0,i),Z=C("taro-camera-core",void 0,i),_=C("taro-checkbox-core",void 0,i),N=C("taro-checkbox-group-core",void 0,i),E=C("taro-form-core",void 0,i),R=C("taro-icon-core",void 0,i),O=C("taro-image-core",void 0,i),T=C("taro-input-core",void 0,i),P=C("taro-label-core",void 0,i),I=C("taro-movable-area-core",void 0,i),G=C("taro-movable-view-core",void 0,i),L=C("taro-navigator-core",void 0,i),S=C("taro-page-container-core",void 0,i),D=C("taro-picker-core",void 0,i),U=C("taro-picker-view-column-core",void 0,i),A=C("taro-picker-view-core",void 0,i),M=C("taro-progress-core",void 0,i),F=C("taro-radio-core",void 0,i),H=C("taro-radio-group-core",void 0,i),W=C("taro-rich-text-core",void 0,i),z=C("taro-scroll-view-core",void 0,i),B=C("taro-slider-core",void 0,i),J=C("taro-swiper-core",void 0,i),$=C("taro-swiper-item-core",void 0,i),X=C("taro-switch-core",void 0,i),Y=C("taro-text-core",void 0,i),V=C("taro-textarea-core",void 0,i),K=C("taro-video-core",void 0,i),Q=C("taro-view-core",void 0,i),ee=C("taro-web-view-core",void 0,i)},"6868":function(e,n,t){var r=t(4971),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,n,t){var r,i={},u=null,d=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{"$$typeof":o,"type":e,"key":u,"ref":d,"props":i,"_owner":c.current}}n.Fragment=i,n.jsx=q,n.jsxs=q},"7419":function(e,n,t){e.exports=t(6868)},"9730":function(e,n,t){t.r(n),t.d(n,{"default":function(){return y}});var r=t(390),o=t(5747),i=t(8944),a=t(5909),c=t(4401),s=t(8248),u=t(6035),d=t(8793),f=t(4971),l=t(7296),p=t(402),m=t(6895),v=t(5949),h=t(4837),g=t(7419),x={"hooksPng":p,"routerPng":m,"lifecyclePng":v,"stylesPng":h},y=function(e){(0,c.Z)(Index,e);var n=(0,s.Z)(Index);function Index(e){var t;return(0,o.Z)(this,Index),t=n.call(this,e),(0,u.Z)((0,a.Z)(t),"kindToggle",(function(e){return function(){for(var n=t.state.list,r=0,o=n.length;r<o;++r)n[r].id==e?n[r].open=!n[r].open:n[r].open=!1;t.setState({"list":n})}})),(0,u.Z)((0,a.Z)(t),"goToComponent",(function(e){(0,d.T8)({"url":e.url})})),t.state={"list":[{"id":"hooks","name":"Taro Hooks","open":!1,"pages":[{"id":"page","name":"Hooks"}]},{"id":"lifecycle","name":"生命周期","open":!1,"pages":[{"id":"page","name":"页面生命周期"}]},{"id":"router","name":"路由","open":!1,"pages":[{"id":"index","name":"页面跳转"}]},{"id":"styles","name":"样式","open":!1,"pages":[{"id":"size","name":"尺寸"},{"id":"platform","name":"跨平台"}]}]},t}return(0,i.Z)(Index,[{"key":"render","value":function render(){var e=this;return(0,g.jsxs)(l.pf,{"className":"index","enableBackToTop":!0,"style":{"paddingBottom":80},"children":[(0,g.jsx)(l.G7,{"className":"index-hd","children":(0,g.jsx)(l.G7,{"className":"index-desc","children":(0,g.jsx)(l.xv,{"className":"index-desc_text","children":"以下将展示 Taro 全局能力。"})})}),(0,g.jsx)(l.G7,{"className":"index-bd","children":(0,g.jsx)(l.G7,{"className":"kind-list","children":this.state.list.map((function(e){return e.hdClass="kind-list-item-hd "+(e.open?"kind-list-item-hd-show":""),e.bdClass="kind-list-item-bd "+(e.open?"kind-list-item-bd-show":""),e.boxClass="navigator-box "+(e.open?"navigator-box-show":""),e.imgSrc=x["".concat(e.id,"Png")],e._pages=e.pages.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{"url":"/pages/global/pages/".concat(e.id,"/").concat(n.id)})})),e})).map((function(n,t){return(0,g.jsxs)(l.G7,{"className":"kind-list-item","children":[(0,g.jsxs)(l.G7,{"className":n.hdClass,"onClick":e.kindToggle(n.id),"children":[(0,g.jsx)(l.G7,{"className":"kind-list-text","children":(0,g.jsx)(l.xv,{"children":n.name})}),(0,g.jsx)(l.Ee,{"className":"kind-list-img","src":n.imgSrc})]}),(0,g.jsx)(l.G7,{"className":n.bdClass,"children":(0,g.jsx)(l.G7,{"className":n.boxClass,"children":n._pages.map((function(n,t){return(0,g.jsxs)(l.G7,{"onClick":e.goToComponent.bind(e,n),"className":"navigator","children":[(0,g.jsx)(l.xv,{"className":"navigator-text","children":n.name}),(0,g.jsx)(l.G7,{"className":"navigator-arrow"})]},t)}))})})]},t)}))})})]})}}]),Index}(f.Component)},"402":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/aiming.png"},"5949":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/cycle-arrow.png"},"4837":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/font-size.png"},"6895":function(e,n,t){e.exports=t.p+"static/images/assets/iconpark/navigation.png"},"3907":function(e,n,t){function _objectWithoutProperties(e,n){if(null==e)return{};var t,r,o=function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{"Z":function(){return _objectWithoutProperties}})}}]);