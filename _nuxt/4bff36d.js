(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4],{387:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("06c08a40",content,!0,{sourceMap:!1})},388:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("c26f217c",content,!0,{sourceMap:!1})},389:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7e9db08e",content,!0,{sourceMap:!1})},391:function(t,e,r){var content=r(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("2bdffd3a",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(387)},395:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".article[data-v-a2bc181e]:hover{text-decoration:underline}.article[data-v-a2bc181e]{text-overflow:unset}p.primary-color[data-v-a2bc181e]{color:#f9a1bc;padding:5px;margin:0}",""]),n.locals={},t.exports=n},396:function(t,e,r){"use strict";r(388)},397:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".article[data-v-c422c1b2]:hover{text-decoration:underline}.article[data-v-c422c1b2]{text-overflow:unset}",""]),n.locals={},t.exports=n},398:function(t,e,r){"use strict";r(389)},399:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".article:hover{text-decoration:underline}.article{text-overflow:unset}p.primary-color{color:#f9a1bc}.time-in-title{color:grey;font-size:.9rem;font-weight:thin}",""]),n.locals={},t.exports=n},400:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},img:{type:String,default:""},author:{type:String,default:"Unknown"},description:{type:String,default:""}},computed:{}},l=(r(394),r(49)),o=r(50),c=r.n(o),d=r(392),v=r(386),f=r(260),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-img",{attrs:{src:t.img}}),t._v(" "),r("p",{staticClass:"primary-color pa-1 font-weight-black"},[t._v(t._s(t.articleType))]),t._v(" "),r("v-card-title",{staticClass:"pa-1",staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("b",[t._v("By "+t._s(t.author))])])],1)}),[],!1,null,"a2bc181e",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VImg:f.a})},401:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},img:{type:String,default:""}},computed:{}},l=(r(396),r(49)),o=r(50),c=r.n(o),d=r(392),v=r(386),f=r(449),m=r(260),h=r(450),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("p",{staticClass:"primary-color pa-1 font-weight-black"},[t._v(t._s(t.articleType))]),t._v(" "),r("v-card-title",{staticClass:"pa-1"},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[t._v("\n        This is a setence that can be longer than the title, just providers\n        more context for an article in a not annoying way.\n      ")]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("b",[t._v("By Ruben Soerdien")])])],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-img",{attrs:{src:t.img,"aspect-ratio":16/9}})],1)],1)],1)}),[],!1,null,"c422c1b2",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VImg:m.a,VRow:h.a})},402:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},img:{type:String,default:""}},computed:{}},l=(r(398),r(49)),o=r(50),c=r.n(o),d=r(392),v=r(386),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-card-title",{staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title)+" ")]),t._v(" "),r("v-card-subtitle",[t._v(" Today 10:14 ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.a,VCardTitle:v.c})},403:function(t,e,r){"use strict";r(391)},404:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".v-divider--inset[data-v-2b92cf12]{max-width:none!important;max-height:none!important}.v-divider--inset[data-v-2b92cf12]:not(.v-divider--vertical){margin-top:-1px!important;margin-left:8px!important;margin-right:8px!important}.v-divider--inset.v-divider--vertical[data-v-2b92cf12]{margin-left:-1px!important;margin-bottom:8px!important}.v-application--is-ltr .v-divider--inset[data-v-2b92cf12]:not(.v-divider--vertical){margin-top:-1px!important;margin-left:8px!important;margin-right:8px!important}",""]),n.locals={},t.exports=n},409:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("47e749e6",content,!0,{sourceMap:!1})},410:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),n.locals={},t.exports=n},411:function(t,e,r){"use strict";r.r(e);var n={props:{news:{type:Array,default:function(){return[]}}}},l=(r(403),r(49)),o=r(50),c=r.n(o),d=r(449),v=r(385),f=(r(12),r(10),r(13),r(6),r(17),r(11),r(18),r(3));r(409);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=r(37).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:h({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:h({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),_=r(450),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"no-gutters":""}},[r("v-row",[r("v-col",{attrs:{md:"9",sm:"12",lg:"9","order-sm":"2","order-md":"1"}},[r("v-row",[r("v-col",{staticClass:"pt-5",attrs:{md:"3",sm:"12"}},[t._l(t.news.slice(4,7),(function(e){return[e?r("article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"mb-2",attrs:{horizontal:""}})]}))],2),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-col",{attrs:{md:"9",sm:"12"}},[r("v-col",{attrs:{md:"12"}},[t._l(t.news.slice(1,2),(function(e){return[e?r("article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img,author:e.author,description:e.shortDescription||e.description}}):t._e()]}))],2),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",horizontal:""}}),t._v(" "),r("v-col",[t._l(t.news.slice(2,5),(function(e){return[e?r("article-preview",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"my-3",attrs:{horizontal:""}})]}))],2)],1),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}})],1)],1),t._v(" "),r("v-col",{attrs:{md:"3",sm:"12","order-sm":"1","order-md":"2"}},[r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}}),t._v(" "),r("h5",{staticClass:"text-h5 pa-2"},[t._v("Latest News")]),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",horizontal:""}}),t._v(" "),t._l(t.news,(function(e){return[e?r("small-article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"d-none d-sm-block my-3",attrs:{horizontal:""}})]}))],2)],1)],1)}),[],!1,null,"2b92cf12",null);e.default=component.exports;c()(component,{ArticleThumbnail:r(400).default,ArticlePreview:r(401).default,SmallArticleThumbnail:r(402).default}),c()(component,{VCol:d.a,VContainer:v.a,VDivider:y,VRow:_.a})},455:function(t,e,r){"use strict";r.r(e);var n=r(23),l=(r(82),{name:"IndexPage",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).only(["title","shortDescription","img","slug","description","author","createdAt","category"]).sortBy("createdAt","asc").fetch();case 3:return l=e.sent,e.abrupt("return",{news:l});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(49),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-lists-home-page",{attrs:{news:t.news}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleListsHomePage:r(411).default})}}]);