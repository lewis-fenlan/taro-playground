"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7806],{"7806":function(e){e.exports=JSON.parse('{"version":3,"sources":["src/components/share-element/share-element.tsx"],"names":["ShareElement","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,aAAY,kDACvBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,eAAgBC,OAG7BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPc","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-share-element-core\'\\n})\\nexport class ShareElement implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'ShareElement\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);