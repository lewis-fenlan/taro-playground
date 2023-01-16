"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2388],{"2388":function(t,n,o){o.r(n),o.d(n,{"taro_textarea_core":function(){return a}});var i=o(5466);function fixControlledValue(t){return null!=t?t:""}var a=function(){function e(t){var n=this;(0,i.r)(this,t),this.onInput=(0,i.c)(this,"input",7),this.onFocus=(0,i.c)(this,"focus",7),this.onBlur=(0,i.c)(this,"blur",7),this.onChange=(0,i.c)(this,"change",7),this.onLineChange=(0,i.c)(this,"linechange",7),this.handleInput=function(t){t.stopPropagation(),n.handleLineChange();var o=t.target.value||"";n.onInput.emit({"value":o,"cursor":o.length})},this.handleFocus=function(t){t.stopPropagation(),n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){t.stopPropagation(),n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})},this.handleLineChange=function(){var t=n.getNumberOfLines();t!==n.line&&(n.line=t,n.onLineChange.emit({"height":n.textareaRef.clientHeight,"lineCount":n.line}))},this.calculateContentHeight=function(t,n){var o=t.style.height,i=t.offsetHeight,a=t.scrollHeight,r=t.style.overflow,h=t.style.minHeight||null;if(!(i>=a))return a;if(t.style.minHeight=0,t.style.height=i+n+"px",t.style.overflow="hidden",a<t.scrollHeight){for(;t.offsetHeight>=t.scrollHeight;)t.style.height=(i-=n)+"px";for(;t.offsetHeight<t.scrollHeight;)t.style.height=i+++"px";return t.style.height=o,t.style.overflow=r,t.style.minHeight=h,i}},this.getNumberOfLines=function(){var t=n.textareaRef,o=window.getComputedStyle?window.getComputedStyle(t):t.style,i=parseInt(o.lineHeight,10),a=n.calculateContentHeight(t,i);return Math.floor(a/i)},this.value=void 0,this.placeholder=void 0,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.autoHeight=!1,this.name=void 0,this.nativeProps={},this.line=1}return e.prototype.focus=function(){this.textareaRef.focus()},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.textareaRef.value},"set":function(n){return t.value=n},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},e.prototype.render=function(){var t=this,n=this,o=n.value,a=n.placeholder,r=n.disabled,h=n.maxlength,l=n.autoFocus,s=n.autoHeight,u=n.name,c=n.nativeProps,g=n.handleInput,f=n.handleFocus,p=n.handleBlur,d=n.handleChange,v={};return s&&(v.rows=this.line),(0,i.h)("textarea",Object.assign({"ref":function(n){n&&(t.textareaRef=n)},"class":"taro-textarea ".concat(s?"auto-height":""),"value":fixControlledValue(o),"placeholder":a,"name":u,"disabled":r,"maxlength":h,"autofocus":l,"onInput":g,"onFocus":f,"onBlur":p,"onChange":d},c,v))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,i.g)(this)},"enumerable":!1,"configurable":!0}),e}();a.style="taro-textarea-core{display:block;width:300px}taro-textarea-core .auto-height{height:auto}.taro-textarea{display:block;position:relative;border:0;width:100%;height:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:auto;line-height:1.5}.taro-textarea:focus{outline:none}"}}]);