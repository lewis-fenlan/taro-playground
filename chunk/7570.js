"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7570],{"7570":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/components/cover-image/style/index.scss?tag=taro-cover-image-core","src/components/cover-image/cover-image.tsx"],"names":["indexCss","CoverImage","prototype","imageOnLoad","_a","this","imgRef","width","height","onLoad","emit","imageOnError","e","onError","render","_this","src","nativeProps","h","Object","assign","ref","img","bind"],"mappings":"0EAAA,IAAMA,SAAW,sECMJC,WAAU,sKAEC,GAWtBA,EAAAC,UAAAC,YAAA,WACQ,IAAAC,EAGFC,KAAKC,OAFPC,EAAKH,EAAAG,MACLC,EAAMJ,EAAAI,OAGRH,KAAKI,OAAOC,KAAK,CACfH,MAAKA,EACLC,OAAMA,KAIVP,EAAAC,UAAAS,aAAA,SAAcC,GACZP,KAAKQ,QAAQH,KAAKE,IAGpBX,EAAAC,UAAAY,OAAA,WAAA,IAAAC,EAAAV,KACQ,IAAAD,EAKFC,KAJFW,EAAGZ,EAAAY,IACHb,EAAWC,EAAAD,YACXQ,EAAYP,EAAAO,aACZM,EAAWb,EAAAa,YAEb,OACEC,EAAA,MAAAC,OAAAC,OAAA,CACEC,IAAK,SAAAC,GAAG,OAAKP,EAAKT,OAASgB,GAC3BN,IAAKA,EACLP,OAAQN,EAAYoB,KAAKlB,MACzBQ,QAASF,EAAaY,KAAKlB,OACvBY,cA1CW","sourcesContent":["taro-cover-image-core {\\n  overflow: hidden;\\n  width: 320px;\\n  height: 240px;\\n}\\n","import { Component, Prop, Event, h, ComponentInterface, EventEmitter } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-cover-image-core\',\\n  styleUrl: \'./style/index.scss\'\\n})\\nexport class CoverImage implements ComponentInterface {\\n  @Prop() src: string\\n  @Prop() nativeProps = {}\\n  @Event({\\n    eventName: \'load\'\\n  }) onLoad: EventEmitter\\n\\n  @Event({\\n    eventName: \'error\'\\n  }) onError: EventEmitter\\n\\n  private imgRef: HTMLImageElement\\n\\n  imageOnLoad () {\\n    const {\\n      width,\\n      height,\\n    } = this.imgRef\\n\\n    this.onLoad.emit({\\n      width,\\n      height\\n    })\\n  }\\n\\n  imageOnError (e: Event) {\\n    this.onError.emit(e)\\n  }\\n\\n  render () {\\n    const {\\n      src,\\n      imageOnLoad,\\n      imageOnError,\\n      nativeProps\\n    } = this\\n    return (\\n      <img\\n        ref={img => (this.imgRef = img!)}\\n        src={src}\\n        onLoad={imageOnLoad.bind(this)}\\n        onError={imageOnError.bind(this)}\\n        {...nativeProps}\\n      />\\n    )\\n  }\\n}\\n"]}')}}]);