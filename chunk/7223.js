"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7223],{"7223":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/components/movable-area/area.scss?tag=taro-movable-area-core","src/components/movable-area/movable-area.tsx","src/components/movable-area/view.scss?tag=taro-movable-view-core","src/components/movable-area/movable-view.tsx"],"names":["areaCss","MovableArea","this","views","scaleLength","viewsChanged","_this","elements","element","querySelectorAll","Array","from","forEach","push","updateArea","handleTouchStart","e","touches","length","gap","width","pageX","height","pageY","Math","sqrt","scaleArea","find","target","loop","t","parentNode","HTMLElement","document","body","i","view","touch1","touch2","scaleTarget","undefined","handleTouchMove","preventDefault","updateScale","handleTouchEnd","changedTouches","_a","call","_b","scale","computedStyle","window","getComputedStyle","clientRect","getBoundingClientRect","horizontal","map","parseFloat","vertical","area","prototype","connectedCallback","observer","MutationObserver","mutations","mutation","attributeName","offsetWidth","offsetHeight","offset","observe","attributes","disconnectedCallback","disconnect","componentDidLoad","render","h","Host","onTouchStart","onTouchMove","onTouchEnd","viewCss","MovableView","translateX","translateY","origin","x","y","originScale","currentScale","minX","minY","maxX","maxY","baseX","baseY","scaleOffset","getLimitXY","outOfBounds","animationTo","source","noEmitChange","emitScale","callback","animation","setTransform","Number","toFixed","limit","subtract","realX","realY","onChange","emit","onScale","transform","concat","style","webkitTransform","updateOffset","parent","offsetParent","left","top","current","offsetLeft","offsetTop","updateScaleOffset","rect","updateBoundary","x1","x2","min","max","y1","y2","animationCallback","adjustScale","_c","updating","requestAnimationFrame","setOriginScale","scaleMax","scaleMin","disabled","touch","touching","firstMoveFireEvent","screenX","screenY","willChange","scaling","xMove","yMove","abs","onHTouchMove","onVTouchMove","originalEvent","bubbles","capturePhase","composed","extraFields","class_1","watchX","newValue","watchY","watchScaleMinOrMax","watchScaleValue","setParent","scaleValue","endScale","setScale","name","includes","oldValue","getAttribute","filter","input","split","item","key","trim","startsWith","join","attributeOldValue","transformOrigin","direction","friction"],"mappings":"6hDAAA,IAAMA,QAAU,qFCMHC,YAAW,6DAYdC,KAAAC,MAA4B,GAI5BD,KAAAE,YAAsB,EAkC9BF,KAAAG,aAAe,WACbC,EAAKH,MAAQ,GACb,IAAMI,EAAWD,EAAKE,QAAQC,iBAAiB,0BAC/CC,MAAMC,KAAKJ,GAAUK,SAAQ,SAACJ,GAC5BF,EAAKH,MAAMU,KAAKL,MAElBF,EAAKQ,cAGPZ,KAAAa,iBAAmB,SAACC,GAClB,IAAMC,EAAUD,EAAEC,QAClB,IAAKA,GAAWA,EAAQC,QAAU,EAAG,CACnC,OAGF,IAAMC,EAAM,CACVC,MAAOH,EAAQ,GAAGI,MAAQJ,EAAQ,GAAGI,MACrCC,OAAQL,EAAQ,GAAGM,MAAQN,EAAQ,GAAGM,OAExCjB,EAAKF,YAAcoB,KAAKC,KAAKN,EAAIC,MAAQD,EAAIC,MAAQD,EAAIG,OAASH,EAAIG,QACtE,GAAIhB,EAAKoB,UAAW,CAClB,OAGF,IAAMC,EAAO,SAACC,EAAqBzB,GACjC,IAAM0B,EAAO,SAACb,EAAGc,GACf,KAAMd,EAAIA,EAAEe,YAAa,CACvB,OAAO,MAET,SAAUf,aAAagB,cAAgBhB,IAAMiB,SAASC,QAAUlB,IAAMc,GAAKd,IAAMc,EAAEtB,SAAWQ,EAAER,UAAYsB,GAAKD,EAAKb,EAAGc,KAG3H,IAAK,IAAIK,EAAI,EAAGA,EAAIhC,EAAMe,OAAQiB,IAAK,CACrC,IAAMC,EAAOjC,EAAMgC,GACnB,GAAIP,IAAWQ,EAAK,YAAcP,EAAKD,EAAQQ,GAAO,CACpD,OAAOA,KAKb,IAAMC,EAASV,EAAKV,EAAQ,GAAGW,OAAQtB,EAAKH,OAC5C,IAAMmC,EAASX,EAAKV,EAAQ,GAAGW,OAAQtB,EAAKH,OAC5CG,EAAKiC,YAAcF,GAAUA,IAAWC,EAASD,EAASG,WAG5DtC,KAAAuC,gBAAkB,SAACzB,GACjB,IAAMC,EAAUD,EAAEC,QAClB,IAAKA,GAAWA,EAAQC,QAAU,EAAG,CACnC,OAEFF,EAAE0B,iBACF,IAAMvB,EAAM,CACVC,MAAOH,EAAQ,GAAGI,MAAQJ,EAAQ,GAAGI,MACrCC,OAAQL,EAAQ,GAAGM,MAAQN,EAAQ,GAAGM,OAExC,GAAIjB,EAAKF,YAAc,EAAG,CACxBE,EAAKqC,YAAYnB,KAAKC,KAAKN,EAAIC,MAAQD,EAAIC,MAAQD,EAAIG,OAASH,EAAIG,QAAUhB,EAAKF,eAIvFF,KAAA0C,eAAiB,SAAC5B,WAChB,GAAKA,EAAEC,SAAWD,EAAEC,QAAQC,SAAYF,EAAE6B,eAAgB,CACxD,OAEFvC,EAAKF,YAAc,EACnB,GAAIE,EAAKoB,UAAW,CAClBpB,EAAKH,MAAMS,SAAQ,SAACJ,UAClBsC,EAAAtC,EAAQ,eAAW,MAAAsC,SAAA,OAAA,EAAAA,EAAAC,KAAAvC,UAEhB,EACLwC,GAAAF,EAAAxC,EAAKiC,eAAW,MAAAO,SAAA,OAAA,EAAAA,EAAG,eAAW,MAAAE,SAAA,OAAA,EAAAA,EAAAD,KAAAD,GAEhCxC,EAAKiC,YAAcC,WAGrBtC,KAAAyC,YAAc,SAACM,WACb,IAAKA,GAASA,IAAU,EAAG,CACzB,OAGF,GAAI3C,EAAKoB,UAAW,CAClBpB,EAAKH,MAAMS,SAAQ,SAACJ,UAClBsC,EAAAtC,EAAQ,eAAW,MAAAsC,SAAA,OAAA,EAAAA,EAAAC,KAAAvC,EAAGyC,UAEnB,EACLD,GAAAF,EAAAxC,EAAKiC,eAAW,MAAAO,SAAA,OAAA,EAAAA,EAAG,eAAW,MAAAE,SAAA,OAAA,EAAAA,EAAAD,KAAAD,EAAGG,KAIrC/C,KAAAY,WAAa,WACX,IAAMoC,EAAgBC,OAAOC,iBAAiB9C,EAAKE,SACnD,IAAM6C,EAAa/C,EAAKE,QAAQ8C,wBAChC,IAAMC,EAAa,CAAC,OAAQ,SAASC,KAAI,SAACxC,GACxC,OAAOyC,WAAWP,EAAc,SAAWlC,EAAI,UAAYyC,WAAWP,EAAc,UAAYlC,OAElG,IAAM0C,EAAW,CAAC,MAAO,UAAUF,KAAI,SAACxC,GACtC,OAAOyC,WAAWP,EAAc,SAAWlC,EAAI,UAAYyC,WAAWP,EAAc,UAAYlC,OAGlGV,EAAKH,MAAMS,SAAQ,SAACJ,UAClBsC,EAAAtC,EAAQ,gBAAY,MAAAsC,SAAA,OAAA,EAAAA,EAAAC,KAAAvC,EAAG,CACrBA,QAASF,EAAKE,QACdmD,KAAM,CACJrC,OAAQ+B,EAAW/B,OAASoC,EAAS,GAAKA,EAAS,GACnDtC,MAAOiC,EAAWjC,MAAQmC,EAAW,GAAKA,EAAW,mCAtI7DtD,EAAA2D,UAAAC,kBAAA,WAAA,IAAAvD,EAAAJ,KACEA,KAAK4D,SAAW,IAAIC,kBAAiB,SAACC,GACpCA,EAAUpD,SAAQ,SAACqD,WACjB,GAAIA,EAASC,gBAAkB,SAAWD,EAASC,gBAAkB,QAAS,CAC5E,IAAMC,EAAc7D,EAAKE,QAAQ2D,YACjC,IAAMC,EAAe9D,EAAKE,QAAQ4D,aAClC,GAAID,MAAgBrB,EAAAxC,EAAK+D,UAAM,MAAAvB,SAAA,OAAA,EAAAA,EAAE1B,QAASgD,MAAiBpB,EAAA1C,EAAK+D,UAAM,MAAArB,SAAA,OAAA,EAAAA,EAAE1B,QAAQ,CAC9EhB,EAAKQ,aAEPR,EAAK+D,OAAS,CACZjD,MAAO+C,EACP7C,OAAQ8C,UAMhBlE,KAAK4D,SAASQ,QAAQpE,KAAKM,QAAS,CAClC+D,WAAY,QAIhBtE,EAAA2D,UAAAY,qBAAA,kBACE1B,EAAA5C,KAAK4D,YAAQ,MAAAhB,SAAA,OAAA,EAAAA,EAAE2B,cAGjBxE,EAAA2D,UAAAc,iBAAA,WACExE,KAAKG,gBAiHPJ,EAAA2D,UAAAe,OAAA,WACE,OACEC,EAACC,KAAI,CACHC,aAAc5E,KAAKa,iBACnBgE,YAAa7E,KAAKuC,gBAClBuC,WAAY9E,KAAK0C,qJArKD,6BCNxB,IAAMqC,QAAU,yGCMHC,YAAW,uPA4MdhF,KAAAiF,WAAqB,EAErBjF,KAAAkF,WAAqB,EAErBlF,KAAAmF,OAAoC,CAAEC,EAAG,EAAGC,EAAG,GAE/CrF,KAAAyD,KAA2C,CAAEvC,MAAO,EAAGE,OAAQ,GAI/DpB,KAAAsF,YAAsB,EAEtBtF,KAAAuF,aAAuB,EAEvBvF,KAAAkB,MAAgB,EAEhBlB,KAAAoB,OAAiB,EAEjBpB,KAAAwF,KAAe,EACfxF,KAAAyF,KAAe,EACfzF,KAAA0F,KAAe,EACf1F,KAAA2F,KAAe,EAEf3F,KAAA4F,MAAgB,EAChB5F,KAAA6F,MAAgB,EAEhB7F,KAAAmE,OAAoC,CAAEiB,EAAG,EAAGC,EAAG,GAC/CrF,KAAA8F,YAAyC,CAAEV,EAAG,EAAGC,EAAG,GAE5DrF,KAAA+F,WAAa,SAACX,EAAWC,GACvB,IAAIW,EAAc,MAClBZ,EAAIhF,EAAKsF,MAAQN,EAAIhF,EAAKsF,KAAMM,EAAc,MAAQZ,EAAIhF,EAAKoF,OAASJ,EAAIhF,EAAKoF,KAAMQ,EAAc,MACrGX,EAAIjF,EAAKuF,MAAQN,EAAIjF,EAAKuF,KAAMK,EAAc,MAAQX,EAAIjF,EAAKqF,OAASJ,EAAIjF,EAAKqF,KAAMO,EAAc,MAErG,MAAO,CAAEZ,EAACA,EAAEC,EAACA,EAAEW,YAAWA,IAG5BhG,KAAAiG,YAAc,SAACb,EAAWC,EAAWtC,EAAgBmD,EAAiBC,EAAwBC,EAAqBC,GACjH,GAAIjG,EAAKkG,UAAW,CAClBlG,EAAKmG,aAAanB,EAAGC,EAAGtC,EAAOmD,EAAQC,EAAcC,GACrDC,IAAQ,MAARA,SAAQ,OAAA,EAARA,QACK,CACLjG,EAAKmG,aAAanB,EAAGC,EAAGtC,EAAOmD,EAAQC,EAAcC,KAIzDpG,KAAAuG,aAAe,SAACnB,EAAWC,EAAWtC,EAAgBmD,EAAiBC,EAAwBC,GAC7FhB,EAAIoB,OAAOpB,EAAEqB,QAAQ,IACrBpB,EAAImB,OAAOnB,EAAEoB,QAAQ,IACrB1D,EAAQyD,QAAQzD,IAAK,MAALA,SAAK,EAALA,EAAS3C,EAAKmF,cAAckB,QAAQ,IAEpD,IAAKrG,EAAK4F,YAAa,CACrB,IAAMU,EAAQtG,EAAK2F,WAAWX,EAAGC,GACjCD,EAAIsB,EAAMtB,EACVC,EAAIqB,EAAMrB,EAGZ,IAAMsB,EAAW,SAAC7F,EAAGc,GACnB,SAAU,IAAMd,EAAI,IAAMc,GAAK,KAAK6E,QAAQ,IAG9C,IAAMG,EAAQD,EAASvB,EAAGhF,EAAK0F,YAAYV,GAC3C,IAAMyB,EAAQF,EAAStB,EAAGjF,EAAK0F,YAAYT,GAC3C,GAAIjF,EAAK6E,aAAeG,GAAKhF,EAAK8E,aAAeG,EAAG,EACjDc,GAAgB/F,EAAK0G,SAASC,KAAK,CAClC3B,EAAGwB,EACHvB,EAAGwB,EACHX,OAAMA,IAIV,GAAInD,IAAU3C,EAAKmF,aAAc,CAC/Ba,GAAahG,EAAK4G,QAAQD,KAAK,CAC7BhE,MAAKA,EACLqC,EAAGwB,EACHvB,EAAGwB,IAIP,IAAMI,EAAY,cAAAC,OAAc9B,EAAC,mBAAA8B,OAAkB7B,EAAC,8BAAA6B,OAA6BnE,EAAK,KACtF3C,EAAKE,QAAQ6G,MAAMF,UAAYA,EAC/B7G,EAAKE,QAAQ6G,MAAMC,gBAAkBH,EACrC7G,EAAK6E,WAAaG,EAClBhF,EAAK8E,WAAaG,EAClBjF,EAAKmF,aAAexC,GAGtB/C,KAAAqH,aAAe,WACb,IAAMlD,EAAS,SAAC7D,EAAsBgH,GACpC,GAAIhH,IAAYgH,IAAWhH,EAAQiH,aAAc,CAC/C,MAAO,CAAEC,KAAM,EAAGC,IAAK,GAEzB,IAAMC,EAAUvD,EAAO7D,EAAQiH,aAA6BD,GAC5D,MAAO,CACLE,KAAMlH,EAAQqH,WAAaD,EAAQF,KACnCC,IAAKnH,EAAQsH,UAAYF,EAAQD,MAIrC,IAAKrH,EAAKkH,OAAQ,CAChB,OAGF,IAAMI,EAAUvD,EAAO/D,EAAKE,QAASF,EAAKkH,QAE1ClH,EAAK+D,OAAOiB,EAAIsC,EAAQF,KACxBpH,EAAK+D,OAAOkB,EAAIqC,EAAQD,KAG1BzH,KAAA6H,kBAAoB,SAAC9E,GAAA,GAAAA,SAAA,EAAA,CAAAA,EAAgB3C,EAAKmF,aACxC,IAAMuC,EAAO1H,EAAKE,QAAQ8C,wBAC1BhD,EAAKgB,OAAS0G,EAAK1G,OAAShB,EAAKmF,aACjCnF,EAAKc,MAAQ4G,EAAK5G,MAAQd,EAAKmF,aAC/BnF,EAAK0F,YAAYV,GAAKhF,EAAKc,MAAQ6B,EAAQ3C,EAAKc,OAAS,EACzDd,EAAK0F,YAAYT,GAAKjF,EAAKgB,OAAS2B,EAAQ3C,EAAKgB,QAAU,GAG7DpB,KAAA+H,eAAiB,WACf,IAAMC,EAAK,EAAI5H,EAAK+D,OAAOiB,EAAIhF,EAAK0F,YAAYV,EAChD,IAAM6C,EAAK7H,EAAKqD,KAAKvC,MAAQd,EAAKc,MAAQd,EAAK+D,OAAOiB,EAAIhF,EAAK0F,YAAYV,EAC3EhF,EAAKoF,KAAOlE,KAAK4G,IAAIF,EAAIC,GACzB7H,EAAKsF,KAAOpE,KAAK6G,IAAIH,EAAIC,GACzB,IAAMG,EAAK,EAAIhI,EAAK+D,OAAOkB,EAAIjF,EAAK0F,YAAYT,EAChD,IAAMgD,EAAKjI,EAAKqD,KAAKrC,OAAShB,EAAKgB,OAAShB,EAAK+D,OAAOkB,EAAIjF,EAAK0F,YAAYT,EAC7EjF,EAAKqF,KAAOnE,KAAK4G,IAAIE,EAAIC,GACzBjI,EAAKuF,KAAOrE,KAAK6G,IAAIC,EAAIC,IAG3BrI,KAAAyC,YAAc,SAACM,EAAeuD,EAAqBgC,GACjD,IAAKlI,EAAK2C,MAAO,CACf,OAGF,IAAMrB,EAAStB,EAAKmI,YAAYxF,GAChC3C,EAAKyH,kBAAkBnG,GACvBtB,EAAK2H,iBAEC,IAAAS,EAAWpI,EAAK2F,WAAW3F,EAAK6E,WAAY7E,EAAK8E,YAA/CE,EAACoD,EAAApD,EAAEC,EAACmD,EAAAnD,EACZ,GAAIiB,EAAW,CACblG,EAAK6F,YAAYb,EAAGC,EAAG3D,EAAQ,GAAI,KAAM,KAAM4G,QAC1C,IAAKlI,EAAKqI,SAAU,CACzBrI,EAAKqI,SAAW,KAChBC,uBAAsB,WACpBtI,EAAKmG,aAAanB,EAAGC,EAAG3D,EAAQ,GAAI,KAAM,MAC1CtB,EAAKqI,SAAW,WAKtBzI,KAAA2I,eAAiB,SAAC5F,GAChB3C,EAAKkF,YAAcvC,GAGrB/C,KAAAuI,YAAc,SAACxF,GACb,OAAOzB,KAAK4G,IAAI,GAAI9H,EAAKwI,SAAUtH,KAAK6G,IAAI,GAAI/H,EAAKyI,SAAU9F,KAmBjE/C,KAAAa,iBAAmB,SAACC,GAClB,IAAMC,EAAUD,EAAEC,QAClB,GAAIX,EAAK0I,UAAY/H,EAAQC,OAAS,IAAMZ,EAAKE,QAAS,CACxD,OAEF,IAAMyI,EAAQhI,EAAQ,GAEtBX,EAAK4I,SAAW,KAChB5I,EAAK6I,mBAAqB,MAC1B7I,EAAK+E,OAAOC,EAAI2D,EAAMG,QACtB9I,EAAK+E,OAAOE,EAAI0D,EAAMI,QAEtB/I,EAAKwF,MAAQxF,EAAK6E,WAClB7E,EAAKyF,MAAQzF,EAAK8E,WAElB9E,EAAKE,QAAQ6G,MAAMiC,WAAa,aAGlCpJ,KAAAuC,gBAAkB,SAACzB,GACjB,IAAMC,EAAUD,EAAEC,QAClB,GAAIX,EAAK0I,WAAa1I,EAAKE,SAAWF,EAAKiJ,UAAYjJ,EAAK4I,UAAYjI,EAAQC,OAAS,EAAG,CAC1F,OAEFF,EAAE0B,iBAEF,IAAMuG,EAAQhI,EAAQ,GAEtB,IAAMqE,EAAI2D,EAAMG,QAAU9I,EAAK+E,OAAOC,EACtC,IAAMC,EAAI0D,EAAMI,QAAU/I,EAAK+E,OAAOE,EAEtCjF,EAAKmG,aAAanG,EAAKkJ,MAASlE,EAAIhF,EAAKwF,MAAS,EAAGxF,EAAKmJ,MAASlE,EAAIjF,EAAKyF,MAAS,GAErF,IAAKzF,EAAK6I,mBAAoB,CAC5B7I,EAAK6I,mBAAqB,KAC1B,IAAMpE,EAAcvD,KAAKkI,IAAIpE,GAAK9D,KAAKkI,IAAInE,GAAKjF,EAAKqJ,aAAerJ,EAAKsJ,aACzE7E,EAAYkC,KAAK,CACf4C,cAAe7I,EACf8I,QAAS,MACTC,aAAc,MACdC,SAAU,KACVC,YAAa,CACXhJ,QAASD,EAAEC,SAAW,GACtB4B,eAAgB7B,EAAE6B,gBAAkB,QAM5C3C,KAAA0C,eAAiB,SAAC5B,GAChB,IAAMiI,EAAQjI,EAAE6B,eAAe,GAC/B,GAAIvC,EAAK0I,WAAa1I,EAAK4I,WAAaD,EAAO,CAC7C,OAEF3I,EAAK4I,SAAW,MAEhB,IAAM5D,EAAI2D,EAAMG,QAAU9I,EAAK+E,OAAOC,EACtC,IAAMC,EAAI0D,EAAMI,QAAU/I,EAAK+E,OAAOE,EAEtCjF,EAAKmG,aAAanG,EAAKkJ,MAASlE,EAAIhF,EAAKwF,MAAS,EAAGxF,EAAKmJ,MAASlE,EAAIjF,EAAKyF,MAAS,WA/a1D,SAIA,iBAImC,wBAIjC,mBAIJ,oBAIA,eAID,iBAIE,iBAIH,oBAIE,iBAIA,mBAIE,iBAIA,KAiC7BmE,EAAAtG,UAAAuG,OAAA,SAAQC,GACNlK,KAAKuG,aAAahD,WAAW,GAAA2D,OAAGgD,GAAY,IAAMlK,KAAKkF,aAIzD8E,EAAAtG,UAAAyG,OAAA,SAAQD,GACNlK,KAAKuG,aAAavG,KAAKiF,WAAY1B,WAAW,GAAA2D,OAAGgD,GAAY,MAK/DF,EAAAtG,UAAA0G,mBAAA,WACE,IAAKpK,KAAK+C,MAAO,OAAO,MACxB/C,KAAKyC,YAAYzC,KAAKuF,aAAc,MACpCvF,KAAK2I,eAAe3I,KAAKuF,eAI3ByE,EAAAtG,UAAA2G,gBAAA,SAAiBtH,GACf,IAAK/C,KAAK+C,MAAO,CACf,OAAO,MAET/C,KAAKyC,YAAYM,EAAO,MACxB/C,KAAK2I,eAAe5F,GAEpB,OAAOA,GAOHiH,EAAAtG,UAAA4G,UAAN,SAAiB9B,OAAElI,EAAOkI,EAAAlI,QAAEmD,EAAI+E,EAAA/E,gGACxBV,EAAQ/C,KAAK+C,MAAQ/C,KAAKuK,WAAa,EAC7CvK,KAAKyD,KAAOA,EACZzD,KAAKsH,OAAShH,EAEdN,KAAKqH,eACLrH,KAAK6H,kBAAkB9E,GACvB/C,KAAK+H,iBACL/H,KAAKuG,aAAaC,OAAOxG,KAAKoF,GAAKpF,KAAK8F,YAAYV,EAAGoB,OAAOxG,KAAKqF,GAAKrF,KAAK8F,YAAYT,EAAGtC,EAAO,GAAI,MACvG/C,KAAK2I,eAAe5F,oBAOhBiH,EAAAtG,UAAA8G,SAAN,gGACExK,KAAKqJ,QAAU,MACfrJ,KAAK2I,eAAe3I,KAAKuF,+BAOrByE,EAAAtG,UAAA+G,SAAN,SAAgB1H,wFACd,IAAK/C,KAAK+C,MAAO,CACf,MAAA,CAAA,GAEF/C,KAAKqJ,QAAU,KACfrJ,KAAKyC,YAAYM,EAAQ/C,KAAKsF,8BAGhC0E,EAAAtG,UAAAC,kBAAA,WAAA,IAAAvD,EAAAJ,KACEA,KAAK4D,SAAW,IAAIC,kBAAiB,SAACC,GACpCA,EAAUpD,SAAQ,SAACqD,GACjB,IAAM2G,EAAO3G,EAASC,cACtB,GAAI0G,GAAQ,CAAC,QAAS,SAASC,SAASD,GAAO,CAC7C,IAAME,EAAW7G,EAAS6G,SAC1B,IAAMV,EAAYnG,EAASrC,OAAuBmJ,aAAaH,GAC/D,GAAIE,IAAaV,EAAU,CACzB,OAEF,IAAMY,EAAS,SAACC,GACd,OAAOA,IAAK,MAALA,SAAK,OAAA,EAALA,EAAOC,MAAM,KAAKF,QAAO,SAACG,GAC/B,OAAQ,CAAC,YAAa,eAAexJ,MAAK,SAACyJ,GACzC,OAAOD,EAAKE,OAAOC,WAAWF,SAE/BG,KAAK,MAEV,GAAIX,IAAS,SAAWI,EAAOZ,KAAcY,EAAOF,GAAW,CAC7D,OAGFxK,EAAKiH,eACLjH,EAAKyH,oBACLzH,EAAK2H,iBACL3H,EAAKmG,aAAanG,EAAK6E,WAAY7E,EAAK8E,mBAK9ClF,KAAK4D,SAASQ,QAAQpE,KAAKM,QAAS,CAClC+D,WAAY,KACZiH,kBAAmB,QAIvBtB,EAAAtG,UAAAY,qBAAA,kBACE1B,EAAA5C,KAAK4D,YAAQ,MAAAhB,SAAA,OAAA,EAAAA,EAAE2B,cA+KjByF,EAAAtG,UAAAc,iBAAA,WACExE,KAAKM,QAAQ6G,MAAMoE,gBAAkB,SAErCvL,KAAKsJ,MAAQ,CAAC,aAAc,OAAOqB,SAAS3K,KAAKwL,WACjDxL,KAAKuJ,MAAQ,CAAC,WAAY,OAAOoB,SAAS3K,KAAKwL,WAC/C,GAAIxL,KAAKyL,UAAY,EAAG,CACtBzL,KAAKyL,SAAW,EAGlB,GAAIzL,KAAKoF,GAAKpF,KAAKqF,EAAG,CACpB,IAAMD,EAAI7B,WAAW,GAAA2D,OAAGlH,KAAKoF,GAAK,IAClC,IAAMC,EAAI9B,WAAW,GAAA2D,OAAGlH,KAAKqF,GAAK,IAClCrF,KAAKuG,aAAanB,EAAGC,KAiEzB2E,EAAAtG,UAAAe,OAAA,WACE,OACEC,EAACC,KAAI,CACHC,aAAc5E,KAAKa,iBACnBgE,YAAa7E,KAAKuC,gBAClBuC,WAAY9E,KAAK0C,+WA3bD","sourcesContent":["taro-movable-area-core {\\n  display: block;\\n  position: relative;\\n  width: 10px;\\n  height: 10px;\\n}\\n","import { Component, h, Host, Prop, Element } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-movable-area-core\',\\n  styleUrl: \'./area.scss\'\\n})\\nexport class MovableArea {\\n\\n  /** \\n   * 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area\\n   */\\n  @Prop() scaleArea: boolean\\n\\n  @Element() element: HTMLElement\\n\\n  /** 观察者 */\\n  private observer?: MutationObserver\\n  /** 子元素集合 */\\n  private views: Array<HTMLElement> = []\\n  /** 单个元素缩放时的目标元素 */\\n  private scaleTarget?: HTMLElement\\n  /** 手势缩放 */\\n  private scaleLength: number = 0\\n  /** 宽高 */\\n  private offset?: { width: number; height: number; }\\n\\n  connectedCallback () {\\n    this.observer = new MutationObserver((mutations) => {\\n      mutations.forEach((mutation) => {\\n        if (mutation.attributeName === \\"class\\" || mutation.attributeName === \\"style\\") {\\n          const offsetWidth = this.element.offsetWidth\\n          const offsetHeight = this.element.offsetHeight\\n          if (offsetWidth !== this.offset?.width || offsetHeight !== this.offset?.height) {\\n            this.updateArea()\\n          }\\n          this.offset = {\\n            width: offsetWidth,\\n            height: offsetHeight\\n          }\\n        }\\n      })\\n    })\\n\\n    this.observer.observe(this.element, {\\n      attributes: true\\n    })\\n  }\\n\\n  disconnectedCallback () {\\n    this.observer?.disconnect()\\n  }\\n\\n  componentDidLoad () {\\n    this.viewsChanged()\\n  }\\n\\n  viewsChanged = () => {\\n    this.views = []\\n    const elements = this.element.querySelectorAll(\'taro-movable-view-core\')\\n    Array.from(elements).forEach((element) => {\\n      this.views.push(element)\\n    })\\n    this.updateArea()\\n  }\\n\\n  handleTouchStart = (e: TouchEvent) => {\\n    const touches = e.touches\\n    if (!touches || touches.length <= 1) {\\n      return\\n    }\\n\\n    const gap = {\\n      width: touches[1].pageX - touches[0].pageX,\\n      height: touches[1].pageY - touches[0].pageY\\n    }\\n    this.scaleLength = Math.sqrt(gap.width * gap.width + gap.height * gap.height)\\n    if (this.scaleArea) {\\n      return\\n    }\\n\\n    const find = (target: EventTarget, views: Array<HTMLElement>) => {\\n      const loop = (e, t) => {\\n        if (!(e = e.parentNode)) {\\n          return false\\n        }\\n        return (!(e instanceof HTMLElement) || e !== document.body) && (e === t || e === t.element || e.element === t || loop(e, t))\\n      }\\n\\n      for (let i = 0; i < views.length; i++) {\\n        const view = views[i]\\n        if (target === view[\\"element\\"] || loop(target, view)) {\\n          return view\\n        }\\n      }\\n    }\\n\\n    const touch1 = find(touches[0].target, this.views)\\n    const touch2 = find(touches[1].target, this.views)\\n    this.scaleTarget = touch1 && touch1 === touch2 ? touch1 : undefined\\n  }\\n\\n  handleTouchMove = (e: TouchEvent) => {\\n    const touches = e.touches\\n    if (!touches || touches.length <= 1) {\\n      return\\n    }\\n    e.preventDefault()\\n    const gap = {\\n      width: touches[1].pageX - touches[0].pageX,\\n      height: touches[1].pageY - touches[0].pageY\\n    }\\n    if (this.scaleLength > 0) {\\n      this.updateScale(Math.sqrt(gap.width * gap.width + gap.height * gap.height) / this.scaleLength)\\n    }\\n  }\\n\\n  handleTouchEnd = (e: TouchEvent) => {\\n    if ((e.touches && e.touches.length) || !e.changedTouches) {\\n      return\\n    }\\n    this.scaleLength = 0\\n    if (this.scaleArea) {\\n      this.views.forEach((element) => {\\n        element[\\"endScale\\"]?.()\\n      })\\n    } else {\\n      this.scaleTarget?.[\\"endScale\\"]?.()\\n    }\\n    this.scaleTarget = undefined\\n  }\\n\\n  updateScale = (scale: number) => {\\n    if (!scale || scale === 1) {\\n      return\\n    }\\n\\n    if (this.scaleArea) {\\n      this.views.forEach((element) => {\\n        element[\\"setScale\\"]?.(scale)\\n      })\\n    } else {\\n      this.scaleTarget?.[\\"setScale\\"]?.(scale)\\n    }\\n  }\\n\\n  updateArea = () => {\\n    const computedStyle = window.getComputedStyle(this.element)\\n    const clientRect = this.element.getBoundingClientRect()\\n    const horizontal = [\\"Left\\", \\"Right\\"].map((e) => {\\n      return parseFloat(computedStyle[\\"border\\" + e + \\"Width\\"]) + parseFloat(computedStyle[\\"padding\\" + e])\\n    })\\n    const vertical = [\\"Top\\", \\"Bottom\\"].map((e) => {\\n      return parseFloat(computedStyle[\\"border\\" + e + \\"Width\\"]) + parseFloat(computedStyle[\\"padding\\" + e])\\n    })\\n\\n    this.views.forEach((element) => {\\n      element[\\"setParent\\"]?.({\\n        element: this.element,\\n        area: {\\n          height: clientRect.height - vertical[0] - vertical[1],\\n          width: clientRect.width - horizontal[0] - horizontal[1]\\n        }\\n      })\\n    })\\n  }\\n\\n  render () {\\n    return (\\n      <Host\\n        onTouchStart={this.handleTouchStart}\\n        onTouchMove={this.handleTouchMove}\\n        onTouchEnd={this.handleTouchEnd}\\n      />\\n    )\\n  }\\n}\\n","taro-movable-view-core {\\n  display: inline-block;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 10px;\\n  height: 10px;\\n}\\n","import { Component, h, Host, Prop, Event, EventEmitter, Element, Watch, Method } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-movable-view-core\',\\n  styleUrl: \'./view.scss\'\\n})\\nexport class MovableView {\\n  /**\\n   * 定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画；单位支持px；\\n   */\\n  @Prop() x: number | string = 0\\n  /**\\n   * 定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画；单位支持px；\\n   */\\n  @Prop() y: number | string = 0\\n  /**\\n   * 移动方向，属性值有all、vertical、horizontal、none\\n   */\\n  @Prop() direction: \\"all\\" | \\"vertical\\" | \\"horizontal\\" | \\"none\\" = \\"none\\"\\n  /**\\n   * 超过可移动区域后，是否还可以移动\\n   */\\n  @Prop() outOfBounds: boolean = false\\n  /** \\n   * 是否带有惯性 \\n   */\\n  @Prop() inertia: boolean = false\\n  /**\\n   * 摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值\\n   */\\n  @Prop() friction: number = 2\\n  /**\\n   * 阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快\\n   */\\n  @Prop() damping: number = 20\\n  /**\\n   * 是否禁用\\n   */\\n  @Prop() disabled: boolean = false\\n  /**\\n   * 是否支持双指缩放，默认缩放手势生效区域是在movable-view内\\n   */\\n  @Prop() scale: boolean = false\\n  /**\\n   * 定义缩放倍数最小值\\n   */\\n  @Prop() scaleMin: number = .5\\n  /**\\n   * 定义缩放倍数最大值\\n   */\\n  @Prop() scaleMax: number = 10\\n  /**\\n   * 定义缩放倍数，取值范围为 0.5 - 10\\n   */\\n  @Prop() scaleValue: number = 1\\n  /**\\n   * 是否使用动画\\n   */\\n  @Prop() animation: boolean = true\\n\\n  /**\\n   * 拖动过程中触发的事件，event.detail = {x, y, source}\\n   */\\n  @Event({\\n    eventName: \'change\'\\n  }) onChange: EventEmitter\\n\\n  /**\\n   * 缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持\\n   */\\n  @Event({\\n    eventName: \'scale\'\\n  }) onScale: EventEmitter\\n\\n  /**\\n   * 初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch\\n   */\\n  @Event({\\n    eventName: \'htouchmove\'\\n  }) onHTouchMove: EventEmitter\\n\\n  /**\\n   * 初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch\\n   */\\n  @Event({\\n    eventName: \'vtouchmove\'\\n  }) onVTouchMove: EventEmitter\\n\\n  @Element() element: HTMLElement\\n\\n  @Watch(\'x\')\\n  watchX (newValue: number | string) {\\n    this.setTransform(parseFloat(`${newValue || 0}`), this.translateY)\\n  }\\n\\n  @Watch(\'y\')\\n  watchY (newValue: number | string) {\\n    this.setTransform(this.translateX, parseFloat(`${newValue || 0}`))\\n  }\\n\\n  @Watch(\'scaleMin\')\\n  @Watch(\'scaleMax\')\\n  watchScaleMinOrMax () {\\n    if (!this.scale) return false\\n    this.updateScale(this.currentScale, true)\\n    this.setOriginScale(this.currentScale)\\n  }\\n\\n  @Watch(\'scaleValue\')\\n  watchScaleValue (scale) {\\n    if (!this.scale) {\\n      return false\\n    }\\n    this.updateScale(scale, true)\\n    this.setOriginScale(scale)\\n\\n    return scale\\n  }\\n\\n  /**\\n   * 设置父节点\\n   */\\n  @Method()\\n  async setParent ({ element, area }: { element: HTMLElement, area: { width: number; height: number; } }) {\\n    const scale = this.scale ? this.scaleValue : 1\\n    this.area = area\\n    this.parent = element\\n\\n    this.updateOffset()\\n    this.updateScaleOffset(scale)\\n    this.updateBoundary()\\n    this.setTransform(Number(this.x) + this.scaleOffset.x, Number(this.y) + this.scaleOffset.y, scale, \\"\\", true)\\n    this.setOriginScale(scale)\\n  }\\n\\n  /**\\n   * 结束缩放\\n   */\\n  @Method()\\n  async endScale () {\\n    this.scaling = false\\n    this.setOriginScale(this.currentScale)\\n  }\\n\\n  /**\\n   * 更新缩放\\n   */\\n  @Method()\\n  async setScale (scale: number) {\\n    if (!this.scale) {\\n      return\\n    }\\n    this.scaling = true\\n    this.updateScale(scale * this.originScale)\\n  }\\n\\n  connectedCallback () {\\n    this.observer = new MutationObserver((mutations) => {\\n      mutations.forEach((mutation) => {\\n        const name = mutation.attributeName\\n        if (name && [\\"class\\", \\"style\\"].includes(name)) {\\n          const oldValue = mutation.oldValue\\n          const newValue = (mutation.target as HTMLElement).getAttribute(name)\\n          if (oldValue === newValue) {\\n            return\\n          }\\n          const filter = (input: string | null) => {\\n            return input?.split(\\";\\").filter((item) => {\\n              return ![\\"transform\\", \\"will-change\\"].find((key) => {\\n                return item.trim().startsWith(key)\\n              })\\n            }).join(\\";\\")\\n          }\\n          if (name === \\"style\\" && filter(newValue) === filter(oldValue)) {\\n            return\\n          }\\n\\n          this.updateOffset()\\n          this.updateScaleOffset()\\n          this.updateBoundary()\\n          this.setTransform(this.translateX, this.translateY)\\n        }\\n      })\\n    })\\n\\n    this.observer.observe(this.element, {\\n      attributes: true,\\n      attributeOldValue: true\\n    })\\n  }\\n\\n  disconnectedCallback () {\\n    this.observer?.disconnect()\\n  }\\n\\n  /** 观察者 */\\n  private observer?: MutationObserver\\n  /** 缩放中 */\\n  private scaling: boolean\\n  /** 移动中 */\\n  private touching: boolean\\n  /** 更新中 */\\n  private updating: boolean\\n  /** 水平方向是否可移动 */\\n  private xMove: boolean\\n  /** 垂直方向是否可移动 */\\n  private yMove: boolean\\n  /** 首次移动方向事件是否已触发 */\\n  private firstMoveFireEvent: boolean\\n  /** 当前水平偏移 */\\n  private translateX: number = 0\\n  /** 当前垂直偏移 */\\n  private translateY: number = 0\\n  /** touch-start 原点 */\\n  private origin: { x: number; y: number; } = { x: 0, y: 0 }\\n  /** 父容器大小 */\\n  private area: { width: number; height: number; } = { width: 0, height: 0 }\\n  /** 父容器 */\\n  private parent?: HTMLElement\\n  /** 原始缩放倍数 */\\n  private originScale: number = 1\\n  /** 当前缩放倍数 */\\n  private currentScale: number = 1\\n  /** 宽度 */\\n  private width: number = 0\\n  /** 高度 */\\n  private height: number = 0\\n  /** 移动边界 */\\n  private minX: number = 0\\n  private minY: number = 0\\n  private maxX: number = 0\\n  private maxY: number = 0\\n  /** 移动基础位置 */\\n  private baseX: number = 0\\n  private baseY: number = 0\\n  /** 偏移量 */\\n  private offset: { x: number; y: number; } = { x: 0, y: 0 }\\n  private scaleOffset: { x: number; y: number; } = { x: 0, y: 0 }\\n\\n  getLimitXY = (x: number, y: number) => {\\n    let outOfBounds = false\\n    x > this.maxX ? (x = this.maxX, outOfBounds = true) : x < this.minX && (x = this.minX, outOfBounds = true)\\n    y > this.maxY ? (y = this.maxY, outOfBounds = true) : y < this.minY && (y = this.minY, outOfBounds = true)\\n\\n    return { x, y, outOfBounds }\\n  }\\n\\n  animationTo = (x: number, y: number, scale?: number, source?: string, noEmitChange?: boolean, emitScale?: boolean, callback?: () => void) => {\\n    if (this.animation) {\\n      this.setTransform(x, y, scale, source, noEmitChange, emitScale)\\n      callback?.()\\n    } else {\\n      this.setTransform(x, y, scale, source, noEmitChange, emitScale)\\n    }\\n  }\\n\\n  setTransform = (x: number, y: number, scale?: number, source?: string, noEmitChange?: boolean, emitScale?: boolean) => {\\n    x = Number(x.toFixed(1))\\n    y = Number(y.toFixed(1))\\n    scale = Number((scale ?? this.currentScale).toFixed(3))\\n\\n    if (!this.outOfBounds) {\\n      const limit = this.getLimitXY(x, y)\\n      x = limit.x\\n      y = limit.y\\n    }\\n\\n    const subtract = (e, t) => {\\n      return +((1e3 * e - 1e3 * t) / 1e3).toFixed(1)\\n    }\\n\\n    const realX = subtract(x, this.scaleOffset.x)\\n    const realY = subtract(y, this.scaleOffset.y)\\n    if (this.translateX !== x || this.translateY !== y) {\\n      !noEmitChange && this.onChange.emit({\\n        x: realX,\\n        y: realY,\\n        source\\n      })\\n    }\\n\\n    if (scale !== this.currentScale) {\\n      emitScale && this.onScale.emit({\\n        scale,\\n        x: realX,\\n        y: realY\\n      })\\n    }\\n\\n    const transform = `translateX(${x}px) translateY(${y}px) translateZ(0px) scale(${scale})`\\n    this.element.style.transform = transform\\n    this.element.style.webkitTransform = transform\\n    this.translateX = x\\n    this.translateY = y\\n    this.currentScale = scale\\n  }\\n\\n  updateOffset = () => {\\n    const offset = (element: HTMLElement, parent: HTMLElement): { left: number; top: number; } => {\\n      if (element === parent || !element.offsetParent) {\\n        return { left: 0, top: 0 }\\n      }\\n      const current = offset(element.offsetParent as HTMLElement, parent)\\n      return {\\n        left: element.offsetLeft + current.left,\\n        top: element.offsetTop + current.top\\n      }\\n    }\\n\\n    if (!this.parent) {\\n      return\\n    }\\n\\n    const current = offset(this.element, this.parent)\\n\\n    this.offset.x = current.left\\n    this.offset.y = current.top\\n  }\\n\\n  updateScaleOffset = (scale: number = this.currentScale) => {\\n    const rect = this.element.getBoundingClientRect()\\n    this.height = rect.height / this.currentScale\\n    this.width = rect.width / this.currentScale\\n    this.scaleOffset.x = (this.width * scale - this.width) / 2\\n    this.scaleOffset.y = (this.height * scale - this.height) / 2\\n  }\\n\\n  updateBoundary = () => {\\n    const x1 = 0 - this.offset.x + this.scaleOffset.x\\n    const x2 = this.area.width - this.width - this.offset.x - this.scaleOffset.x\\n    this.minX = Math.min(x1, x2)\\n    this.maxX = Math.max(x1, x2)\\n    const y1 = 0 - this.offset.y + this.scaleOffset.y\\n    const y2 = this.area.height - this.height - this.offset.y - this.scaleOffset.y\\n    this.minY = Math.min(y1, y2)\\n    this.maxY = Math.max(y1, y2)\\n  }\\n\\n  updateScale = (scale: number, animation?: boolean, animationCallback?: () => void) => {\\n    if (!this.scale) {\\n      return\\n    }\\n\\n    const target = this.adjustScale(scale)\\n    this.updateScaleOffset(target)\\n    this.updateBoundary()\\n\\n    const { x, y } = this.getLimitXY(this.translateX, this.translateY)\\n    if (animation) {\\n      this.animationTo(x, y, target, \\"\\", true, true, animationCallback)\\n    } else if (!this.updating) {\\n      this.updating = true\\n      requestAnimationFrame(() => {\\n        this.setTransform(x, y, target, \\"\\", true, true)\\n        this.updating = false\\n      })\\n    }\\n  }\\n\\n  setOriginScale = (scale: number) => {\\n    this.originScale = scale\\n  }\\n\\n  adjustScale = (scale: number) => {\\n    return Math.min(10, this.scaleMax, Math.max(.5, this.scaleMin, scale))\\n  }\\n\\n  componentDidLoad () {\\n    this.element.style.transformOrigin = \\"center\\"\\n\\n    this.xMove = [\\"horizontal\\", \\"all\\"].includes(this.direction)\\n    this.yMove = [\\"vertical\\", \\"all\\"].includes(this.direction)\\n    if (this.friction <= 0) {\\n      this.friction = 2\\n    }\\n\\n    if (this.x || this.y) {\\n      const x = parseFloat(`${this.x || 0}`)\\n      const y = parseFloat(`${this.y || 0}`)\\n      this.setTransform(x, y)\\n    }\\n  }\\n\\n  handleTouchStart = (e: TouchEvent) => {\\n    const touches = e.touches\\n    if (this.disabled || touches.length > 1 || !this.element) {\\n      return\\n    }\\n    const touch = touches[0]\\n\\n    this.touching = true\\n    this.firstMoveFireEvent = false\\n    this.origin.x = touch.screenX\\n    this.origin.y = touch.screenY\\n\\n    this.baseX = this.translateX\\n    this.baseY = this.translateY\\n\\n    this.element.style.willChange = \\"transform\\"\\n  }\\n\\n  handleTouchMove = (e: TouchEvent) => {\\n    const touches = e.touches\\n    if (this.disabled || !this.element || this.scaling || !this.touching || touches.length > 1) {\\n      return\\n    }\\n    e.preventDefault()\\n\\n    const touch = touches[0]\\n\\n    const x = touch.screenX - this.origin.x\\n    const y = touch.screenY - this.origin.y\\n\\n    this.setTransform(this.xMove ? (x + this.baseX) : 0, this.yMove ? (y + this.baseY) : 0)\\n\\n    if (!this.firstMoveFireEvent) {\\n      this.firstMoveFireEvent = true\\n      const onTouchMove = Math.abs(x) > Math.abs(y) ? this.onHTouchMove : this.onVTouchMove\\n      onTouchMove.emit({\\n        originalEvent: e,\\n        bubbles: false,\\n        capturePhase: false,\\n        composed: true,\\n        extraFields: {\\n          touches: e.touches || {},\\n          changedTouches: e.changedTouches || {}\\n        }\\n      })\\n    }\\n  }\\n\\n  handleTouchEnd = (e: TouchEvent) => {\\n    const touch = e.changedTouches[0]\\n    if (this.disabled || !this.touching || !touch) {\\n      return\\n    }\\n    this.touching = false\\n\\n    const x = touch.screenX - this.origin.x\\n    const y = touch.screenY - this.origin.y\\n\\n    this.setTransform(this.xMove ? (x + this.baseX) : 0, this.yMove ? (y + this.baseY) : 0)\\n  }\\n\\n  render () {\\n    return (\\n      <Host\\n        onTouchStart={this.handleTouchStart}\\n        onTouchMove={this.handleTouchMove}\\n        onTouchEnd={this.handleTouchEnd}\\n      />\\n    )\\n  }\\n}\\n"]}')}}]);