"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3179],{"3179":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/comment/comment-list.tsx"],"names":["CommentList","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,YAAW,kDACtBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,cAAeC,OAG5BJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPa","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-comment-list-core\'\\n})\\nexport class CommentList implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'CommentList\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);