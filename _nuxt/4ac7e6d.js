(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{416:function(t,e,r){var map={"./ukraine.jpg":417,"./ukraine2.jpg":418,"./ukraine3.jpg":419,"./ukraine4.jpg":420,"./ukraine4_big.jpg":421,"./ukraine5.jpg":422,"./ukraine6.jpg":423,"./ukraine7.jpg":424,"./ukraine8.jpg":425,"./ukraine9.jpg":426};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=416},417:function(t,e,r){t.exports=r.p+"img/4ebff66.webp"},418:function(t,e,r){t.exports=r.p+"img/58b6967.webp"},419:function(t,e,r){t.exports=r.p+"img/124d6f6.webp"},420:function(t,e,r){t.exports=r.p+"img/647e434.webp"},421:function(t,e,r){t.exports=r.p+"img/1e6d081.webp"},422:function(t,e,r){t.exports=r.p+"img/eccff22.webp"},423:function(t,e,r){t.exports=r.p+"img/030ab55.webp"},424:function(t,e,r){t.exports=r.p+"img/7d41f6e.webp"},425:function(t,e,r){t.exports=r.p+"img/3f0931e.webp"},426:function(t,e,r){t.exports=r.p+"img/21c1751.webp"},428:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6e7d3c36",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(428)},437:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,".article[data-v-593f5908]:hover{text-decoration:underline}.article[data-v-593f5908]{text-overflow:unset}",""]),n.locals={},t.exports=n},441:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""}},computed:{image:function(){try{return r(416)("./".concat(this.img,""))}catch(t){return null}}}},o=(r(436),r(39)),c=r(40),l=r.n(c),f=r(186),d=r(107),v=r(502),m=r(278),w=r(503),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-row",[r("v-col",{attrs:{cols:"7",sm:"12",md:"8"}},[r("p",{staticClass:"primary-color pa-1 font-weight-black"},[t._v(t._s(t.articleType))]),t._v(" "),r("v-card-title",{staticClass:"pa-1",staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("b",[t._v("By Ruben Soerdien")])])],1),t._v(" "),r("v-col",{staticClass:"tw-mx-auto",attrs:{cols:"5",sm:"12",md:"4"}},[r("v-img",{attrs:{src:t.image}})],1)],1)],1)}),[],!1,null,"593f5908",null);e.default=component.exports;l()(component,{VCard:f.a,VCardText:d.c,VCardTitle:d.d,VCol:v.a,VImg:m.a,VRow:w.a})}}]);