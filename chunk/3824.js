"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3824],{"3824":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/functional-page-navigator/functional-page-navigator.tsx"],"names":["FunctionalPageNavigator","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,wBAAuB,kDAClCA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,0BAA2BC,OAGxCJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPyB","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-functional-page-navigator-core\'\\n})\\nexport class FunctionalPageNavigator implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'FunctionalPageNavigator\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);