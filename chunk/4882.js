"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4882],{"4882":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/live-pusher/live-pusher.tsx"],"names":["LivePusher","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,WAAU,kDACrBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,aAAcC,OAG3BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPY","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-live-pusher-core\'\\n})\\nexport class LivePusher implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'LivePusher\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);