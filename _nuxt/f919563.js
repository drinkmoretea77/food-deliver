(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{291:function(e,t,r){e.exports=r.p+"img/hero.29c7891.png"},292:function(e,t,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("2994d204",content,!0,{sourceMap:!1})},294:function(e,t,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(41).default)("05ad1ba4",content,!0,{sourceMap:!1})},295:function(e,t,r){"use strict";r(292)},296:function(e,t,r){var o=r(40),n=r(48),l=r(49),c=r(50),d=r(51),f=r(52),h=r(53),v=o((function(i){return i[1]})),m=n(l),x=n(c),w=n(d),_=n(f),y=n(h);v.push([e.i,'[data-v-c8eefe60]:where(:not(html):not(iframe):not(canvas):not(img):not(svg):not(video):not(audio):not(svg *):not(symbol *)){all:unset;display:revert}*[data-v-c8eefe60],[data-v-c8eefe60]:after,[data-v-c8eefe60]:before{box-sizing:border-box}a[data-v-c8eefe60],button[data-v-c8eefe60]{cursor:revert}menu[data-v-c8eefe60],ol[data-v-c8eefe60],ul[data-v-c8eefe60]{list-style:none}img[data-v-c8eefe60]{max-height:100%;max-width:100%}table[data-v-c8eefe60]{border-collapse:collapse}input[data-v-c8eefe60],textarea[data-v-c8eefe60]{-moz-user-select:auto;user-select:auto;-webkit-user-select:auto}textarea[data-v-c8eefe60]{white-space:revert}meter[data-v-c8eefe60]{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}[data-v-c8eefe60]:where(pre){all:revert}[data-v-c8eefe60]::-moz-placeholder{color:inherit}[data-v-c8eefe60]::placeholder{color:inherit}[data-v-c8eefe60]::marker{content:normal}[data-v-c8eefe60]:where([hidden]){display:none}[data-v-c8eefe60]:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;word-wrap:break-word;line-break:after-white-space;-webkit-line-break:after-white-space;-moz-user-select:auto;user-select:auto;-webkit-user-select:auto}[data-v-c8eefe60]:where([draggable=true]){-webkit-user-drag:element}[data-v-c8eefe60]:where(dialog:modal){all:revert}@font-face{font-family:"Travels";font-weight:700;src:url('+m+') format("truetype")}@font-face{font-family:"Travels";font-weight:600;src:url('+x+') format("truetype")}@font-face{font-family:"Travels";font-weight:300;src:url('+w+') format("truetype")}@font-face{font-family:"Travels";font-weight:500;src:url('+_+') format("truetype")}@font-face{font-family:"Travels";font-weight:400;src:url('+y+') format("truetype")}body[data-v-c8eefe60]{font-family:"Travels",sans-serif}.page-default[data-v-c8eefe60]{padding-top:110px}h1.page-title[data-v-c8eefe60]{color:#404040;font-size:24px;font-weight:700;line-height:1.1;margin-bottom:20px;text-align:center;width:100%}.btn-order[data-v-c8eefe60]{align-items:center;background:#5a30f0;border:1px solid transpatent;border-radius:50%;cursor:pointer;display:flex;height:177.2727272727px;justify-content:center;text-align:center;width:177.2727272727px}@media(max-width:479px){.btn-order[data-v-c8eefe60]{height:136.3636363636px;width:136.3636363636px}}.btn-order__text[data-v-c8eefe60]{-webkit-text-stroke:1px #000;color:#fff;font-size:18px;font-weight:600;letter-spacing:.03em;line-height:1.3;text-shadow:0 4px 4px rgba(0,0,0,.25);text-transform:uppercase;transform:rotate(-15deg)}@media(max-width:479px){.btn-order__text[data-v-c8eefe60]{font-size:14px}}.outer[data-v-c8eefe60]{align-items:center;display:flex;justify-content:center;position:relative;width:100%}.container[data-v-c8eefe60]{height:177.2727272727px;position:relative;width:177.2727272727px}@media(max-width:479px){.container[data-v-c8eefe60]{height:136.3636363636px;width:136.3636363636px}}.ball[data-v-c8eefe60]{left:0;position:absolute;top:0}.ball.hovered[data-v-c8eefe60]{border:1px solid #404040}',""]),v.locals={},e.exports=v},305:function(e,t,r){"use strict";r.r(t);var o={name:"ButtonOrder",data:function(){return{isHovered:!1}},mounted:function(){this.animateBall()},methods:{handleEnter:function(e){this.isHovered=!0;var t=this.$gsap,r=this.$refs.container,o=this.$refs.ball,n=r.getBoundingClientRect(),l=n.left,c=n.top,d=n.width,f=n.height,h=d/2,v=f/2,m=e.x-l,x=e.y-c,w=t.utils.interpolate(-h,h,m/d),_=t.utils.interpolate(-v,v,x/f);t.to(o,{x:w,y:_,duration:.6,ease:"power1",overwrite:!0})},animateBall:function(){var e=this.$gsap,t=this.$refs.container,r=this.$refs.ball;t.addEventListener("mousemove",(function(o){var n=t.getBoundingClientRect(),l=n.left,c=n.top,d=n.width,f=n.height,h=d/2,v=f/2,m=o.x-l,x=o.y-c,w=e.utils.interpolate(-h,h,m/d),_=e.utils.interpolate(-v,v,x/f);e.to(r,{x:w,y:_,duration:.6,scale:1.1,ease:"power1",overwrite:!0}),r.classList.add("hovered")})),t.addEventListener("mouseleave",(function(t){e.to(r,{x:0,y:0,ease:"power3",scale:1,duration:.6,overwrite:!0}),r.classList.remove("hovered")}))}}},n=(r(295),r(14)),component=Object(n.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"outer"},[e("div",{ref:"container",staticClass:"container"},[e("div",{ref:"ball",staticClass:"btn-order ball"},[e("span",{staticClass:"btn-order__text"},[this._t("default")],2)])])])}),[],!1,null,"c8eefe60",null);t.default=component.exports},307:function(e,t,r){"use strict";r(294)},308:function(e,t,r){var o=r(40),n=r(48),l=r(49),c=r(50),d=r(51),f=r(52),h=r(53),v=r(291),m=o((function(i){return i[1]})),x=n(l),w=n(c),_=n(d),y=n(f),k=n(h),z=n(v);m.push([e.i,'[data-v-b90e53ac]:where(:not(html):not(iframe):not(canvas):not(img):not(svg):not(video):not(audio):not(svg *):not(symbol *)){all:unset;display:revert}*[data-v-b90e53ac],[data-v-b90e53ac]:after,[data-v-b90e53ac]:before{box-sizing:border-box}a[data-v-b90e53ac],button[data-v-b90e53ac]{cursor:revert}menu[data-v-b90e53ac],ol[data-v-b90e53ac],ul[data-v-b90e53ac]{list-style:none}img[data-v-b90e53ac]{max-height:100%;max-width:100%}table[data-v-b90e53ac]{border-collapse:collapse}input[data-v-b90e53ac],textarea[data-v-b90e53ac]{-moz-user-select:auto;user-select:auto;-webkit-user-select:auto}textarea[data-v-b90e53ac]{white-space:revert}meter[data-v-b90e53ac]{-webkit-appearance:revert;-moz-appearance:revert;appearance:revert}[data-v-b90e53ac]:where(pre){all:revert}[data-v-b90e53ac]::-moz-placeholder{color:inherit}[data-v-b90e53ac]::placeholder{color:inherit}[data-v-b90e53ac]::marker{content:normal}[data-v-b90e53ac]:where([hidden]){display:none}[data-v-b90e53ac]:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;word-wrap:break-word;line-break:after-white-space;-webkit-line-break:after-white-space;-moz-user-select:auto;user-select:auto;-webkit-user-select:auto}[data-v-b90e53ac]:where([draggable=true]){-webkit-user-drag:element}[data-v-b90e53ac]:where(dialog:modal){all:revert}@font-face{font-family:"Travels";font-weight:700;src:url('+x+') format("truetype")}@font-face{font-family:"Travels";font-weight:600;src:url('+w+') format("truetype")}@font-face{font-family:"Travels";font-weight:300;src:url('+_+') format("truetype")}@font-face{font-family:"Travels";font-weight:500;src:url('+y+') format("truetype")}@font-face{font-family:"Travels";font-weight:400;src:url('+k+') format("truetype")}body[data-v-b90e53ac]{font-family:"Travels",sans-serif}.page-default[data-v-b90e53ac]{padding-top:110px}h1.page-title[data-v-b90e53ac]{color:#404040;font-size:24px;font-weight:700;line-height:1.1;margin-bottom:20px;text-align:center;width:100%}.hero[data-v-b90e53ac]{align-items:stretch;display:flex;flex-flow:row nowrap;min-height:100vh;position:relative}@media(max-width:1023px){.hero[data-v-b90e53ac]{flex-flow:row wrap;gap:60px;justify-content:center;margin-bottom:60px;min-height:auto}}@media(max-width:767px){.hero[data-v-b90e53ac]{gap:40px;margin-bottom:40px}}.hero__img[data-v-b90e53ac]{background-image:url('+z+");background-repeat:no-repeat;background-size:cover;flex-grow:1;width:100%}@media(max-width:1023px){.hero__img[data-v-b90e53ac]{align-items:flex-start;aspect-ratio:9/5;background-position:50%;height:auto}}@media(max-width:767px){.hero__img[data-v-b90e53ac]{aspect-ratio:16/9}}@media(max-width:479px){.hero__img[data-v-b90e53ac]{aspect-ratio:1/1}}.hero__content[data-v-b90e53ac]{align-items:center;display:flex;flex-grow:1;justify-content:center;padding:0 20px 10px;width:100%}@media(max-width:1023px){.hero__content[data-v-b90e53ac]{align-items:flex-start}}.hero__content-inner[data-v-b90e53ac]{align-items:center;display:flex;flex-flow:column nowrap;flex-grow:1;max-width:400px}@media(max-width:1023px){.hero__content-inner[data-v-b90e53ac]{max-width:80%}}@media(max-width:479px){.hero__content-inner[data-v-b90e53ac]{max-width:100%}}.hero__title[data-v-b90e53ac]{color:#404040;font-size:76px;font-weight:400;line-height:1.1;margin-bottom:30px}@media(max-width:1023px){.hero__title[data-v-b90e53ac]{font-size:48px}}.hero__descr[data-v-b90e53ac]{color:#404040;font-size:24px;font-weight:500;line-height:1.3}@media(max-width:1023px){.hero__descr[data-v-b90e53ac]{font-size:18px}}.hero__btn-order[data-v-b90e53ac]{align-items:flex-end;bottom:20px;display:flex;flex-flow:row nowrap;justify-content:center;left:50%;position:fixed!important;position:absolute;transform:translate(-50%);z-index:1}",""]),m.locals={},e.exports=m},312:function(e,t,r){"use strict";r.r(t);var o={name:"HeroBlock",mounted:function(){this.scrollBarFix()},methods:{scrollBarFix:function(){var e=this.$el.parentNode.clientWidth,t=(window.innerWidth-e)/2||0;this.$refs.heroBtn.$el.style.left="calc(50% - ".concat(t,"px)")}}},n=(r(307),r(14)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"hero"},[t("div",{staticClass:"hero__img"},[e._v("\n     \n  ")]),e._v(" "),e._m(0),e._v(" "),t("ButtonOrder",{ref:"heroBtn",staticClass:"hero__btn-order"},[e._v("\n    Замовити доставку\n  ")])],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hero__content"},[t("div",{staticClass:"hero__content-inner"},[t("h1",{staticClass:"hero__title"},[e._v("\n        Доставка готової їжі в Києві\n      ")]),e._v(" "),t("p",{staticClass:"hero__descr"},[e._v("\n        Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь\n        смачними стравами без необхідності готувати самостійно.\n      ")])])])}],!1,null,"b90e53ac",null);t.default=component.exports;installComponents(component,{ButtonOrder:r(305).default})}}]);