/*! For license information please see 5342.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5342,5382,4202],{"5382":function(t,i,o){o.r(i),o.d(i,{"a":function(){return createCommonjsModule},"b":function(){return u},"c":function(){return c},"g":function(){return getDefaultExportFromCjs}});var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,i,o){return t(o={"path":i,"exports":{},"require":function(t,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}var c=createCommonjsModule((function(t){!function(){var i={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var u=arguments[o];if(u){var c=typeof u;if("string"===c||"number"===c)t.push(u);else if(Array.isArray(u)){if(u.length){var h=r.apply(null,u);h&&t.push(h)}}else if("object"===c)if(u.toString===Object.prototype.toString)for(var d in u)i.call(u,d)&&u[d]&&t.push(d);else t.push(u.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"4202":function(t,i,o){function throttle(t,i,o){void 0===i&&(i=250);var u,c=0;return function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];var g=o||this,p=Date.now();p-c>i?(t.apply(this,h),c=p):(clearTimeout(u),u=setTimeout((function(){c=p,t.apply(g,h)}),i))}}function debounce(t,i,o){var u;return void 0===i&&(i=250),function(){for(var c=[],h=0;h<arguments.length;h++)c[h]=arguments[h];var d=o||this;clearTimeout(u),u=setTimeout((function(){t.apply(d,c)}),i)}}o.r(i),o.d(i,{"d":function(){return debounce},"t":function(){return throttle}})},"5342":function(t,i,o){o.r(i),o.d(i,{"taro_video_control":function(){return p},"taro_video_core":function(){return A},"taro_video_danmu":function(){return f}});var u=o(5466),c=o(5382),h=o(4202),__awaiter=function(t,i,o,u){function n(t){return t instanceof o?t:new o((function(i){i(t)}))}return new(o||(o=Promise))((function(o,c){function s(t){try{l(u.next(t))}catch(t){c(t)}}function a(t){try{l(u.throw(t))}catch(t){c(t)}}function l(t){t.done?o(t.value):n(t.value).then(s,a)}l((u=u.apply(t,i||[])).next())}))},__generator=function(t,i){var o,u,c,h,d={"label":0,"sent":function(){if(1&c[0])throw c[1];return c[1]},"trys":[],"ops":[]};return h={"next":a(0),"throw":a(1),"return":a(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h;function a(t){return function(i){return l([t,i])}}function l(h){if(o)throw new TypeError("Generator is already executing.");for(;d;)try{if(o=1,u&&(c=2&h[0]?u.return:h[0]?u.throw||((c=u.return)&&c.call(u),0):u.next)&&!(c=c.call(u,h[1])).done)return c;switch(u=0,c&&(h=[2&h[0],c.value]),h[0]){case 0:case 1:c=h;break;case 4:return d.label++,{"value":h[1],"done":!1};case 5:d.label++,u=h[1],h=[0];continue;case 7:h=d.ops.pop(),d.trys.pop();continue;default:if(!(c=d.trys,(c=c.length>0&&c[c.length-1])||6!==h[0]&&2!==h[0])){d=0;continue}if(3===h[0]&&(!c||h[1]>c[0]&&h[1]<c[3])){d.label=h[1];break}if(6===h[0]&&d.label<c[1]){d.label=c[1],c=h;break}if(c&&d.label<c[2]){d.label=c[2],d.ops.push(h);break}c[2]&&d.ops.pop(),d.trys.pop();continue}h=i.call(t,d)}catch(t){h=[6,t],u=0}finally{o=c=0}if(5&h[0])throw h[1];return{"value":h[0]?h[1]:void 0,"done":!0}}},__spreadArray=function(t,i,o){if(o||2===arguments.length)for(var u,c=0,h=i.length;c<h;c++)!u&&c in i||(u||(u=Array.prototype.slice.call(i,0,c)),u[c]=i[c]);return t.concat(u||Array.prototype.slice.call(i))},formatTime=function(t){if(!t)return"";var i=Math.round(t%60),o=Math.round((t-i)/60);return"".concat(o<10?"0".concat(o):o,":").concat(i<10?"0".concat(i):i)},normalizeNumber=function(t){return Math.max(-1,Math.min(t,1))},d="default",g=function(){for(var t,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=["webkitEnterFullscreen","webkitExitFullscreen","webkitCurrentFullScreenElement","webkitSupportsFullscreen","fullscreenchange","fullscreenerror"],u=0,c=i.length,h={};u<c;u++)if((t=i[u])&&t[1]in document){for(u=0;u<t.length;u++)h[i[0][u]]=t[u];return h}if(!h[i[0][0]])for(d="iOS",u=0;u<o.length;u++)h[i[0][u]]=o[u];return h}(),p=function(){function e(t){var i=this;(0,u.r)(this,t),this.visible=!1,this.isDraggingProgressBall=!1,this.percentage=0,this.progressDimensions={"left":0,"width":0},this.calcPercentage=function(t){var o=t-i.progressDimensions.left;return o=Math.max(o,0),(o=Math.min(o,i.progressDimensions.width))/i.progressDimensions.width},this.onDragProgressBallStart=function(){i.isDraggingProgressBall=!0,i.hideControlsTimer&&clearTimeout(i.hideControlsTimer)},this.onClickProgress=function(t){t.stopPropagation();var o=i.calcPercentage(t.pageX);i.seekFunc(o*i.duration),i.toggleVisibility(!0)},this.controls=void 0,this.currentTime=void 0,this.duration=void 0,this.isPlaying=void 0,this.pauseFunc=void 0,this.playFunc=void 0,this.seekFunc=void 0,this.showPlayBtn=void 0,this.showProgress=void 0}return e.prototype.onDocumentTouchMove=function(t){if(this.isDraggingProgressBall){var i=t.touches[0].pageX;this.percentage=this.calcPercentage(i),this.setProgressBall(this.percentage),this.setCurrentTime(this.percentage*this.duration)}},e.prototype.onDocumentTouchEnd=function(){this.isDraggingProgressBall&&(this.isDraggingProgressBall=!1,this.seekFunc(this.percentage*this.duration),this.toggleVisibility(!0))},e.prototype.setProgressBall=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return this.progressBallRef&&(this.progressBallRef.style.left="".concat(100*t,"%")),[2]}))}))},e.prototype.toggleVisibility=function(t){return __awaiter(this,void 0,void 0,(function(){var i,o=this;return __generator(this,(function(u){return(i=void 0===t?!this.visible:t)?(this.hideControlsTimer&&clearTimeout(this.hideControlsTimer),this.isPlaying&&(this.hideControlsTimer=setTimeout((function(){o.toggleVisibility(!1)}),2e3)),this.el.style.visibility="visible"):this.el.style.visibility="hidden",this.visible=!!i,[2]}))}))},e.prototype.getIsDraggingProgressBall=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.isDraggingProgressBall]}))}))},e.prototype.setCurrentTime=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return this.currentTimeRef.innerHTML=formatTime(t),[2]}))}))},e.prototype.render=function(){var t,i=this,o=this,c=o.controls,h=o.currentTime,d=o.duration,g=o.isPlaying,p=o.pauseFunc,A=o.playFunc,f=o.showPlayBtn,v=o.showProgress,m=formatTime(d);return t=f?g?(0,u.h)("div",{"class":"taro-video-control-button taro-video-control-button-pause","onClick":p}):(0,u.h)("div",{"class":"taro-video-control-button taro-video-control-button-play","onClick":A}):null,(0,u.h)(u.H,{"class":"taro-video-bar taro-video-bar-full"},c&&(0,u.h)("div",{"class":"taro-video-controls"},t,v&&(0,u.h)("div",{"class":"taro-video-current-time","ref":function(t){return i.currentTimeRef=t}},formatTime(h)),v&&(0,u.h)("div",{"class":"taro-video-progress-container","onClick":this.onClickProgress},(0,u.h)("div",{"class":"taro-video-progress","ref":function(t){if(t){var o=t.getBoundingClientRect();i.progressDimensions.left=o.left,i.progressDimensions.width=o.width}}},(0,u.h)("div",{"class":"taro-video-progress-buffered","style":{"width":"100%"}}),(0,u.h)("div",{"class":"taro-video-ball","ref":function(t){return i.progressBallRef=t},"onTouchStart":this.onDragProgressBallStart,"style":{"left":"".concat(m?this.currentTime/d*100:0,"%")}},(0,u.h)("div",{"class":"taro-video-inner"})))),v&&(0,u.h)("div",{"class":"taro-video-duration"},m)),(0,u.h)("slot",null))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,u.g)(this)},"enumerable":!1,"configurable":!0}),e}(),A=function(){function e(t){var i=this;(0,u.r)(this,t),this.onPlay=(0,u.c)(this,"play",7),this.onPause=(0,u.c)(this,"pause",7),this.onEnded=(0,u.c)(this,"ended",7),this.onTimeUpdate=(0,u.c)(this,"timeupdate",7),this.onError=(0,u.c)(this,"error",7),this.onFullScreenChange=(0,u.c)(this,"fullscreenchange",7),this.onProgress=(0,u.c)(this,"progress",7),this.onLoadedMetaData=(0,u.c)(this,"loadedmetadata",7),this.currentTime=0,this.isDraggingProgress=!1,this.gestureType="none",this.analyzeGesture=function(t){var o,u={"type":"none"},c=t.touches[0].screenX,h=t.touches[0].screenY,d=c-i.lastTouchScreenX,g=h-i.lastTouchScreenY,p=i.isFullScreen?i.vslideGestureInFullscreen:i.vslideGesture;if("none"===i.gestureType){var A=function(t,i){return Math.sqrt(Math.pow(t,2)+Math.pow(i,2))}(d,g);if(A<10)return u;if(Math.abs(g)>=Math.abs(d)){if(!p)return u;i.gestureType="adjustVolume",i.lastVolume=i.videoRef.volume}else if(Math.abs(g)<Math.abs(d)){if(!i.enableProgressGesture)return u;i.gestureType="adjustProgress",i.lastPercentage=i.currentTime/(null!==(o=i.duration)&&void 0!==o?o:i._duration)}}return u.type=i.gestureType,u.dataX=normalizeNumber(d/200),u.dataY=normalizeNumber(g/200),u},this.loadNativePlayer=function(){var t,o;i.videoRef&&(i.videoRef.src=i.src,null===(o=(t=i.videoRef).load)||void 0===o||o.call(t))},this.init=function(){var t=i,u=t.src,c=t.videoRef;!function(t){return/\.(m3u8)($|\?)/i.test(t)}(u)?i.loadNativePlayer():o.e(9301).then(o.bind(o,8933)).then((function(t){return t.h})).then((function(t){var o=t.default;i.HLS=o,o.isSupported()?(i.hls&&i.hls.destroy(),i.hls=new o,i.hls.loadSource(u),i.hls.attachMedia(c),i.hls.on(o.Events.MANIFEST_PARSED,(function(){i.autoplay&&i.play()})),i.hls.on(o.Events.ERROR,(function(t,o){i.handleError(o)}))):c.canPlayType("application/vnd.apple.mpegurl")?i.loadNativePlayer():console.error("该浏览器不支持 HLS 播放")}))},this.handlePlay=function(){i.isPlaying=!0,i.isFirst=!1,i.controlsRef.toggleVisibility(!0),i.onPlay.emit()},this.handlePause=function(){i.isPlaying=!1,i.controlsRef.toggleVisibility(!0),i.onPause.emit()},this.handleEnded=function(){i.isFirst=!0,i.pause(),i.controlsRef.toggleVisibility(),i.onEnded.emit()},this.handleTimeUpdate=(0,h.t)((function(t){return __awaiter(i,void 0,void 0,(function(){var i,o,u,c;return __generator(this,(function(h){switch(h.label){case 0:return this.currentTime=this.videoRef.currentTime,u=this.duration||this._duration,[4,this.controlsRef.getIsDraggingProgressBall()];case 1:return c=h.sent(),this.controls&&this.showProgress&&(c||this.isDraggingProgress||(this.controlsRef.setProgressBall(this.currentTime/u),this.controlsRef.setCurrentTime(this.currentTime))),this.danmuRef.tick(this.currentTime),this.onTimeUpdate.emit({"duration":null===(i=t.target)||void 0===i?void 0:i.duration,"currentTime":null===(o=t.target)||void 0===o?void 0:o.currentTime}),this.duration&&this.currentTime>=this.duration&&(this.seek(0),this.handleEnded()),[2]}}))}))}),250),this.handleError=function(t){var o,u;if(i.hls)switch(t.type){case i.HLS.ErrorTypes.NETWORK_ERROR:i.onError.emit({"errMsg":t.response}),i.hls.startLoad();break;case i.HLS.ErrorTypes.MEDIA_ERROR:i.onError.emit({"errMsg":t.reason||"媒体错误,请重试"}),i.hls.recoverMediaError()}else i.onError.emit({"errMsg":null===(u=null===(o=t.target)||void 0===o?void 0:o.error)||void 0===u?void 0:u.message})},this.handleDurationChange=function(){i._duration=i.videoRef.duration},this.handleProgress=function(){i.onProgress.emit()},this.handleLoadedMetaData=function(t){var o=t.target;i.onLoadedMetaData.emit({"width":o.videoWidth,"height":o.videoHeight,"duration":o.duration})},this._play=function(){return i.videoRef.play()},this._pause=function(){return i.videoRef.pause()},this._stop=function(){i.videoRef.pause(),i._seek(0)},this._seek=function(t){i.videoRef.currentTime=t},this.onTouchStartContainer=function(t){i.lastTouchScreenX=t.touches[0].screenX,i.lastTouchScreenY=t.touches[0].screenY},this.onClickContainer=function(){if(i.enablePlayGesture){var t=Date.now();t-i.lastClickedTime<300&&(i.isPlaying?i.pause():i.play()),i.lastClickedTime=t}i.controlsRef.toggleVisibility()},this.onClickFullScreenBtn=function(t){t.stopPropagation(),i.toggleFullScreen()},this.handleFullScreenChange=function(t){var o=(new Date).getTime();!t.detail&&i.isFullScreen&&!document[g.fullscreenElement]&&o-i.fullScreenTimestamp>100&&i.toggleFullScreen(!1)},this.toggleFullScreen=function(t){void 0===t&&(t=!i.isFullScreen),i.isFullScreen=t,i.controlsRef.toggleVisibility(!0),i.fullScreenTimestamp=(new Date).getTime(),i.onFullScreenChange.emit({"fullScreen":i.isFullScreen,"direction":"vertical"}),i.isFullScreen&&!document[g.fullscreenElement]&&setTimeout((function(){i.videoRef[g.requestFullscreen]({"navigationUI":"auto"})}),0)},this.toggleMute=function(t){t.stopPropagation(),i.videoRef.muted=!i.isMute,i.controlsRef.toggleVisibility(!0),i.isMute=!i.isMute},this.toggleDanmu=function(t){t.stopPropagation(),i.controlsRef.toggleVisibility(!0),i._enableDanmu=!i._enableDanmu},this.src=void 0,this.duration=void 0,this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1,this.initialTime=0,this.poster=void 0,this.objectFit="contain",this.showProgress=!0,this.showFullscreenBtn=!0,this.showPlayBtn=!0,this.showCenterPlayBtn=!0,this.showMuteBtn=!1,this.danmuList=void 0,this.danmuBtn=!1,this.enableDanmu=!1,this.enablePlayGesture=!1,this.enableProgressGesture=!0,this.vslideGesture=!1,this.vslideGestureInFullscreen=!0,this.nativeProps={},this._duration=void 0,this._enableDanmu=!1,this.isPlaying=!1,this.isFirst=!0,this.isFullScreen=!1,this.fullScreenTimestamp=(new Date).getTime(),this.isMute=!1}return e.prototype.componentWillLoad=function(){this._enableDanmu=this.enableDanmu},e.prototype.componentDidLoad=function(){var t,i;this.init(),this.initialTime&&(this.videoRef.currentTime=this.initialTime),null===(i=(t=this.danmuRef).sendDanmu)||void 0===i||i.call(t,this.danmuList),document.addEventListener&&document.addEventListener(g.fullscreenchange,this.handleFullScreenChange),this.videoRef&&"iOS"===d&&this.videoRef.addEventListener("webkitendfullscreen",this.handleFullScreenChange)},e.prototype.componentDidRender=function(){},e.prototype.disconnectedCallback=function(){document.removeEventListener&&document.removeEventListener(g.fullscreenchange,this.handleFullScreenChange),this.videoRef&&"iOS"===d&&this.videoRef.removeEventListener("webkitendfullscreen",this.handleFullScreenChange)},e.prototype.watchEnableDanmu=function(t){this._enableDanmu=t},e.prototype.watchSrc=function(){this.init()},e.prototype.onDocumentTouchMove=function(t){return __awaiter(this,void 0,void 0,(function(){var i,o,u;return __generator(this,(function(c){switch(c.label){case 0:return void 0===this.lastTouchScreenX||void 0===this.lastTouchScreenY?[2]:[4,this.controlsRef.getIsDraggingProgressBall()];case 1:return c.sent()||("adjustVolume"===(i=this.analyzeGesture(t)).type?(this.toastVolumeRef.style.visibility="visible",o=Math.max(Math.min(this.lastVolume-i.dataY,1),0),this.videoRef.volume=o,this.toastVolumeBarRef.style.width="".concat(100*o,"%")):"adjustProgress"===i.type&&(this.isDraggingProgress=!0,this.nextPercentage=Math.max(Math.min(this.lastPercentage+(i.dataX||0),1),0),this.controls&&this.showProgress&&(this.controlsRef.setProgressBall(this.nextPercentage),this.controlsRef.toggleVisibility(!0)),u=this.duration||this._duration,this.toastProgressTitleRef.innerHTML="".concat(formatTime(this.nextPercentage*u)," / ").concat(formatTime(u)),this.toastProgressRef.style.visibility="visible")),[2]}}))}))},e.prototype.onDocumentTouchEnd=function(){var t;"adjustVolume"===this.gestureType?this.toastVolumeRef.style.visibility="hidden":"adjustProgress"===this.gestureType&&(this.toastProgressRef.style.visibility="hidden"),this.isDraggingProgress&&(this.isDraggingProgress=!1,this.seek(this.nextPercentage*(null!==(t=this.duration)&&void 0!==t?t:this._duration))),this.gestureType="none",this.lastTouchScreenX=void 0,this.lastTouchScreenY=void 0},e.prototype.play=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this._play(),[2]}))}))},e.prototype.pause=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this._pause(),[2]}))}))},e.prototype.stop=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this._stop(),[2]}))}))},e.prototype.seek=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){return this._seek(t),[2]}))}))},e.prototype.requestFullScreen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.toggleFullScreen(!0),[2]}))}))},e.prototype.exitFullScreen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.toggleFullScreen(!1),[2]}))}))},e.prototype.render=function(){var t=this,i=this,o=i.controls,h=i.autoplay,d=i.loop,g=i.muted,p=i.poster,A=i.objectFit,f=i.isFirst,v=i.isMute,m=i.isFullScreen,b=i.showCenterPlayBtn,y=i.isPlaying,w=i._enableDanmu,E=i.showMuteBtn,T=i.danmuBtn,R=i.showFullscreenBtn,S=i.nativeProps,k=this.duration||this._duration,I=formatTime(k);return(0,u.h)(u.H,{"class":(0,c.c)("taro-video-container",{"taro-video-type-fullscreen":m}),"onTouchStart":this.onTouchStartContainer,"onClick":this.onClickContainer},(0,u.h)("video",Object.assign({"class":"taro-video-video","style":{"object-fit":A},"ref":function(i){i&&(t.videoRef=i)},"autoplay":h,"loop":d,"muted":g,"poster":o?p:void 0,"playsinline":!0,"webkit-playsinline":!0,"onPlay":this.handlePlay,"onPause":this.handlePause,"onEnded":this.handleEnded,"onTimeUpdate":this.handleTimeUpdate,"onError":this.handleError,"onDurationChange":this.handleDurationChange,"onProgress":this.handleProgress,"onLoadedMetaData":this.handleLoadedMetaData},S),"暂时不支持播放该视频"),(0,u.h)("taro-video-danmu",{"ref":function(i){i&&(t.danmuRef=i)},"enable":w}),f&&b&&!y&&(0,u.h)("div",{"class":"taro-video-cover"},(0,u.h)("div",{"class":"taro-video-cover-play-button","onClick":function(){return t.play()}}),(0,u.h)("p",{"class":"taro-video-cover-duration"},I)),(0,u.h)("taro-video-control",{"ref":function(i){i&&(t.controlsRef=i)},"controls":o,"currentTime":this.currentTime,"duration":k,"isPlaying":this.isPlaying,"pauseFunc":this._pause,"playFunc":this._play,"seekFunc":this._seek,"showPlayBtn":this.showPlayBtn,"showProgress":this.showProgress},E&&(0,u.h)("div",{"class":(0,c.c)("taro-video-mute",{"taro-video-type-mute":v}),"onClick":this.toggleMute}),T&&(0,u.h)("div",{"class":(0,c.c)("taro-video-danmu-button",{"taro-video-danmu-button-active":w}),"onClick":this.toggleDanmu},"弹幕"),R&&(0,u.h)("div",{"class":(0,c.c)("taro-video-fullscreen",{"taro-video-type-fullscreen":m}),"onClick":this.onClickFullScreenBtn})),(0,u.h)("div",{"class":"taro-video-toast taro-video-toast-volume","ref":function(i){i&&(t.toastVolumeRef=i)}},(0,u.h)("div",{"class":"taro-video-toast-title"},"音量"),(0,u.h)("div",{"class":"taro-video-toast-icon"}),(0,u.h)("div",{"class":"taro-video-toast-value"},(0,u.h)("div",{"class":"taro-video-toast-value-content","ref":function(i){i&&(t.toastVolumeBarRef=i)}},(0,u.h)("div",{"class":"taro-video-toast-volume-grids"},Array(10).fill(1).map((function(){return(0,u.h)("div",{"class":"taro-video-toast-volume-grids-item"})})))))),(0,u.h)("div",{"class":"taro-video-toast taro-video-toast-progress","ref":function(i){i&&(t.toastProgressRef=i)}},(0,u.h)("div",{"class":"taro-video-toast-title","ref":function(i){i&&(t.toastProgressTitleRef=i)}})))},Object.defineProperty(e.prototype,"el",{"get":function(){return(0,u.g)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"enableDanmu":["watchEnableDanmu"],"src":["watchSrc"]}},"enumerable":!1,"configurable":!0}),e}();A.style='.taro-video{display:inline-block;overflow:hidden;position:relative;width:100%;height:225px;line-height:0}.taro-video[hidden]{display:none}.taro-video-container{display:inline-block;position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000;-o-object-position:inherit;object-position:inherit}.taro-video-container.taro-video-type-fullscreen{position:fixed;left:0;right:0;top:0;bottom:0;z-index:999}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left{-webkit-transform:translate(-50%, -50%) rotate(-90deg);transform:translate(-50%, -50%) rotate(-90deg)}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right{-webkit-transform:translate(-50%, -50%) rotate(90deg);transform:translate(-50%, -50%) rotate(90deg)}.taro-video-video{width:100%;height:100%;-o-object-position:inherit;object-position:inherit}.taro-video-cover{display:-ms-flexbox;display:flex;position:absolute;left:0;top:0;bottom:0;z-index:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;background-color:rgba(1, 1, 1, 0.5);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center}.taro-video-cover-play-button{width:40px;height:40px;background-repeat:no-repeat;background-position:50% 50%;background-size:50%}.taro-video-cover-duration{margin-top:10px;line-height:1;font-size:16px;color:#fff}.taro-video-bar{display:-ms-flexbox;display:flex;visibility:hidden;overflow:hidden;position:absolute;right:0;bottom:0;z-index:1;-ms-flex-align:center;align-items:center;padding:0 10px;height:44px;background-color:rgba(0, 0, 0, 0.5);-webkit-box-align:center}.taro-video-bar.taro-video-bar-full{left:0}.taro-video-controls{display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 8.5px}.taro-video-control-button{-webkit-box-sizing:content-box;box-sizing:content-box;margin-left:-8.5px;padding:14.5px 12.5px;width:13px;height:15px}.taro-video-control-button::after{display:block;width:100%;height:100%;background-repeat:no-repeat;background-position:50% 50%;background-size:100%;content:""}.taro-video-control-button.taro-video-control-button-play::after,.taro-video-cover-play-button{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg==")}.taro-video-control-button.taro-video-control-button-pause::after{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC")}.taro-video-current-time,.taro-video-duration{margin-top:15px;margin-bottom:14.5px;height:14.5px;line-height:14.5px;font-size:12px;color:#cbcbcb}.taro-video-progress-container{position:relative;-ms-flex-positive:2;flex-grow:2;-webkit-box-flex:2}.taro-video-progress{position:relative;margin:21px 12px;height:2px;background-color:rgba(255, 255, 255, 0.4)}.taro-video-progress-buffered{position:absolute;left:0;top:0;width:0;height:100%;background-color:rgba(255, 255, 255, 0.8);-webkit-transition:width 0.1s;transition:width 0.1s}.taro-video-ball{position:absolute;left:0;top:-21px;-webkit-box-sizing:content-box;box-sizing:content-box;margin-left:-22px;padding:14px;width:16px;height:16px}.taro-video-inner{border-radius:50%;width:100%;height:100%;background-color:#fff}.taro-video-danmu-button{margin:0 8.5px;padding:2px 10px;border:1px solid #fff;border-radius:5px;line-height:1;font-size:13px;color:#fff;white-space:nowrap}.taro-video-danmu-button.taro-video-danmu-button-active{border-color:#48c23d;color:#48c23d}.taro-video-fullscreen,.taro-video-mute{-webkit-box-sizing:content-box;box-sizing:content-box;padding:8.5px;width:17px;height:17px;background-repeat:no-repeat;background-position:50% 50%;background-size:50%}.taro-video-fullscreen{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg==")}.taro-video-fullscreen.taro-video-type-fullscreen{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII=")}.taro-video-mute{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTg6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3YmE4Yjg0LTFhNTYtNGM1MS04NDVkLTNiZmYyMGI0ZDc0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg1NGQ3MjlkLWUwNjctZjU0OC1hMTlhLTBlZjQ4OGRkYjJiOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY3ZDFlLWQ3NGEtNDgyNC04MDU3LTYzYmRmMTdjODk5ZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU4NjdkMWUtZDc0YS00ODI0LTgwNTctNjNiZGYxN2M4OTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE4OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTdiYThiODQtMWE1Ni00YzUxLTg0NWQtM2JmZjIwYjRkNzRmIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz459+FoAAABqElEQVRYhc2XPWsVQRSGnxPjF4oGRfxoRQKGWCU2Ft7CykrQWosEyf/If0hhIPgHDEmbNJZqCFxiQEgTUGxsBUVEHgvnyrjZZJO92V1fGIaZnTPvszPszNlQ6VIjnbr/DwCoDLMNak/dUVfUK0f2rQugnlcX/FevWgFQH6gf3autRgHUC+piiXHzAOmtPx9gXgug8itQx9SXwDpw47AGKXZWvXvQmNFCwE3gCXA2dY0Az4GrRzHONA9cU/vAbERsllEOyh31e8USV2mrMPdG9uyn+rDom2/BHHCm5puWKiKmgdtAnz+rvaxO5mNygEvHaZ5BfADuARvAaWBpP4DGFBHfgBngFzClTrUKkCDeA+9S837rAEnbqb7VFcCpVJ/oCmCw959aB1AfAROpudYqgDoOLKRmPyLelAF8bcD4pPoMeAtcB34AT4uDBqXXwFG8XXUU/72MIuK1OgE8Bs6l7mEvo8up7lN1Ge0n9aK6VHMFZvJTr9S3CiALaCQhqZOSvegMIAvu2UVSWpigLC1fbQ0gm6in7qpfLCQbhwGIYcyPQ53/G3YO8BtUtd35bvKcVwAAAABJRU5ErkJggg==")}.taro-video-mute.taro-video-type-mute{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTk6MDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzYjJmNjE2LTZmZTUtNDJjNC1iNTgwLTczNzZjZjI2NzdmNSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzZjQ2NTYzLWE0ZjktOGQ0Mi1hM2FhLTY3ODJhNDBhYWNjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYWNjMWFlLTg4ZmMtNDBlZi1iMWM1LTNmODgwY2QzYWI2MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjJhY2MxYWUtODhmYy00MGVmLWIxYzUtM2Y4ODBjZDNhYjYyIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE5OjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNiMmY2MTYtNmZlNS00MmM0LWI1ODAtNzM3NmNmMjY3N2Y1IiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PmxYVAAACLklEQVRYhc2XP2sVQRRHz40hKoqaQgVBCy1EozFlGiVFxMLGh4piYWEh+hkEP4YKAVFEEFTyughaCH6DqIVpAhYWEgIxoJE8cywyi5tNHu/tJmvyg2WZO3dmzt47/zZUtoJ6Nhsg09YDiYhKDzACTAFNYH9lEpUq80TdrT5wpV5n/ZV9KoGoo+pXV2uyKkipOaLuUceAt8DhUvQd1FsCYhR4ChzaSIBMHSOi7lOfsByFWiCgEBH1GHAF2JlMPcBt4GC3HUYEaj9wF3gVEVPtfNVTwAXgWX7CDKq/1piAZTSZBmim8qJ6sQ3EgDqb/L7kU3MH2NHtl3dQX3r3Ak21UYAYAj4A/cl0JB+RF+uMRj4iQ+p8zt7KYFLdXKHuRi0gacBhV6a6pd5bA6KRNagFJPU9qv5u47toLmW1HnoR8Q5oAK1CVQu4FBHj/wUkaXsb+4pzpVaQFPqXrN7Be4Fx9VztIOr1BLEtmX4A94E/qdwHTKjDWYM6lu81dSlnn3V570BtuLxaMs2rZ/IgYxsBovaoPwsQA4VoFWEm8ql5DiysNyURsQTMpOIMcDYiPhd8xoGr/FtNC2G6FKXD6ihwGdiVHMoeeh8jYlA9ANwE3kTEp3bO6vE03qOONzR1r/q4RGrquaFFxFxE3ALOA9+6jExpdb180y55AhirhaRTatq0GXEzL8+ZIuI9cBJ4WKiartJf9nWV/mty7UfUafW7erpqRGI9EBuprffvu9n6C1KOmsqwI5A1AAAAAElFTkSuQmCC")}.taro-video-danmu{overflow:visible;position:absolute;left:0;top:0;bottom:0;margin-top:14px;margin-bottom:44px;width:100%;line-height:14px;font-size:14px}.taro-video-danmu-item{position:absolute;left:100%;line-height:1;color:#fff;white-space:nowrap;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition-property:left, -webkit-transform;transition-property:left, -webkit-transform;transition-property:left, transform;transition-property:left, transform, -webkit-transform;-webkit-transition-duration:3s;transition-duration:3s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.taro-video-toast{display:block;visibility:hidden;position:absolute;left:50%;top:50%;border-radius:5px;background-color:rgba(255, 255, 255, 0.8);pointer-events:none;color:#000;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-video-toast.taro-video-toast-volume{display:block;width:100px;height:100px}.taro-video-toast-volume .taro-video-toast-title{display:block;margin-top:10px;width:100%;line-height:16px;text-align:center;font-size:12px}.taro-video-toast-volume .taro-video-toast-icon{display:block;margin-left:25%;width:50%;height:50%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-position:50% 50%;background-size:50%;fill:#000}.taro-video-toast-volume .taro-video-toast-value{margin-left:10px;margin-top:5px;width:80px;height:5px}.taro-video-toast-volume .taro-video-toast-value>.taro-video-toast-value-content{overflow:hidden}.taro-video-toast-volume-grids{width:80px;height:5px}.taro-video-toast-volume-grids-item{float:left;width:7.1px;height:5px;background-color:#000}.taro-video-toast-volume-grids-item:not(:first-child){margin-left:1px}.taro-video-toast.taro-video-toast-progress{padding:6px;background-color:rgba(0, 0, 0, 0.8);line-height:18px;font-size:14px;color:#fff}';var f=function(){function e(t){(0,u.r)(this,t),this.list=[],this.danmuElList=[],this.currentTime=0,this.enable=!1,this.danmuList=[]}return e.prototype.ensureProperties=function(t){var i=Object.assign({},t);return"time"in t||(i.time=this.currentTime),i.key=Math.random(),i.bottom="".concat(90*Math.random()+5,"%"),i},e.prototype.sendDanmu=function(t){return void 0===t&&(t=[]),__awaiter(this,void 0,void 0,(function(){var i,o=this;return __generator(this,(function(u){return Array.isArray(t)?this.list=__spreadArray(__spreadArray([],this.list,!0),t.map((function(t){return o.ensureProperties(t)})),!0):(i=t,this.list=__spreadArray(__spreadArray([],this.list,!0),[Object.assign({},this.ensureProperties(i))],!1)),[2]}))}))},e.prototype.tick=function(t){return __awaiter(this,void 0,void 0,(function(){var i,o,u,c;return __generator(this,(function(h){return this.currentTime=t,this.enable?(i=this.list,o=i.filter((function(i){var o=i.time;return t-o<4&&t>o})),u=!1,c=this.danmuList,u=o.length!==c.length||o.some((function(t){var i=t.key;return c.every((function(t){return i!==t.key}))})),u&&(this.danmuList=o),[2]):[2]}))}))},e.prototype.componentDidUpdate=function(){var t=this;requestAnimationFrame((function(){setTimeout((function(){t.danmuElList.splice(0).forEach((function(t){t.style.left="0",t.style.webkitTransform="translateX(-100%)",t.style.transform="translateX(-100%)"}))}))}))},e.prototype.render=function(){var t=this;return this.enable?(0,u.h)(u.H,{"class":"taro-video-danmu"},this.danmuList.map((function(i){var o=i.text,c=i.color,h=i.bottom,d=i.key;return(0,u.h)("p",{"class":"taro-video-danmu-item","key":d,"style":{"color":c,"bottom":h},"ref":function(i){i&&t.danmuElList.push(i)}},o)}))):""},e}()}}]);