"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8499],{"564":function(o,s,t){t.r(s),t.d(s,{"taro_progress_core":function(){return i}});var e=t(6468),i=function(){function r(o){(0,e.r)(this,o),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return r.prototype.render=function(){var o=this,s=o.percent,t=o.showInfo,i=o.borderRadius,n=o.fontSize,a=o.strokeWidth,c=o.activeColor,h=s>100?100:s<0?0:s,u={"height":a+"px","backgroundColor":o.backgroundColor},p=o.active?"width 1s ease-in-out":"none",d={"width":"".concat(h,"%"),"transition":p,"WebkitTransition":p,"backgroundColor":c,"borderRadius":i?"".concat(i,"px"):"0px"};return(0,e.h)(e.H,{"class":"weui-progress"},(0,e.h)("div",{"class":"weui-progress__bar","style":u},(0,e.h)("div",{"class":"weui-progress__inner-bar","style":d})),t&&(0,e.h)("div",{"class":"weui-progress__opr","style":{"font-size":"".concat(n,"px")}},(0,e.h)("span",null,h,"%")))},r}()}}]);