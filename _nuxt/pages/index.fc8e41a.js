(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4],{389:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("06c08a40",content,!0,{sourceMap:!1})},390:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("38ac0804",content,!0,{sourceMap:!1})},391:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7e9db08e",content,!0,{sourceMap:!1})},393:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("10d66e60",content,!0,{sourceMap:!1})},396:function(t,e,r){"use strict";r(389)},397:function(t,e,r){var l=r(20)((function(i){return i[1]}));l.push([t.i,".article[data-v-a2bc181e]:hover{text-decoration:underline}.article[data-v-a2bc181e]{text-overflow:unset}p.primary-color[data-v-a2bc181e]{color:#f9a1bc;padding:5px;margin:0}",""]),l.locals={},t.exports=l},398:function(t,e,r){"use strict";r(390)},399:function(t,e,r){var l=r(20)((function(i){return i[1]}));l.push([t.i,".article[data-v-34a23442]:hover{text-decoration:underline}.article[data-v-34a23442]{text-overflow:unset}",""]),l.locals={},t.exports=l},400:function(t,e,r){"use strict";r(391)},401:function(t,e,r){var l=r(20)((function(i){return i[1]}));l.push([t.i,".article:hover{text-decoration:underline}.article{text-overflow:unset}p.primary-color{color:#f9a1bc}.time-in-title{color:grey;font-size:.9rem;font-weight:thin}",""]),l.locals={},t.exports=l},402:function(t,e,r){"use strict";r.r(e);var l={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},img:{type:String,default:""},author:{type:String,default:"Unknown"},description:{type:String,default:""}},computed:{}},n=(r(396),r(49)),o=r(50),c=r.n(o),d=r(394),v=r(388),m=r(262),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-img",{attrs:{src:t.img}}),t._v(" "),r("p",{staticClass:"primary-color pa-1 font-weight-black"},[t._v(t._s(t.articleType))]),t._v(" "),r("v-card-title",{staticClass:"pa-1",staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("b",[t._v("By "+t._s(t.author))])])],1)}),[],!1,null,"a2bc181e",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VImg:m.a})},403:function(t,e,r){"use strict";r.r(e);var l={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},description:{type:String,default:""},img:{type:String,default:""}},computed:{}},n=(r(398),r(49)),o=r(50),c=r.n(o),d=r(394),v=r(388),m=r(451),f=r(262),h=r(452),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-row",[r("v-col",{attrs:{cols:"7",sm:"12",md:"8"}},[r("p",{staticClass:"primary-color pa-1 font-weight-black"},[t._v(t._s(t.articleType))]),t._v(" "),r("v-card-title",{staticClass:"pa-1",staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title))]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("v-card-text",{staticClass:"pa-1"},[r("b",[t._v("By Ruben Soerdien")])])],1),t._v(" "),r("v-col",{staticClass:"tw-mx-auto",attrs:{cols:"5",sm:"12",md:"4"}},[r("v-img",{attrs:{src:t.img,"aspect-ratio":16/9}})],1)],1)],1)}),[],!1,null,"34a23442",null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:m.a,VImg:f.a,VRow:h.a})},404:function(t,e,r){"use strict";r.r(e);var l={props:{type:{type:String,default:"primary"},slug:{type:String,default:""},title:{type:String,default:""},articleType:{type:String,default:""},img:{type:String,default:""}},computed:{}},n=(r(400),r(49)),o=r(50),c=r.n(o),d=r(394),v=r(388),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"article",attrs:{tile:"",flat:"",nuxt:"",to:"articles/"+t.slug}},[r("v-card-title",{staticStyle:{"word-break":"normal"}},[t._v(t._s(t.title)+" ")]),t._v(" "),r("v-card-subtitle",[t._v(" "+t._s(t.$dayjs(t.createdAt).fromNow())+" ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.a,VCardTitle:v.c})},405:function(t,e,r){"use strict";r(393)},406:function(t,e,r){var l=r(20)((function(i){return i[1]}));l.push([t.i,".v-divider--inset[data-v-2d08e97c]{max-width:none!important;max-height:none!important}.v-divider--inset[data-v-2d08e97c]:not(.v-divider--vertical){margin-top:-1px!important;margin-left:8px!important;margin-right:8px!important}.v-divider--inset.v-divider--vertical[data-v-2d08e97c]{margin-left:-1px!important;margin-bottom:8px!important}.v-application--is-ltr .v-divider--inset[data-v-2d08e97c]:not(.v-divider--vertical){margin-top:-1px!important;margin-left:8px!important;margin-right:8px!important}",""]),l.locals={},t.exports=l},411:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("47e749e6",content,!0,{sourceMap:!1})},412:function(t,e,r){var l=r(20)((function(i){return i[1]}));l.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),l.locals={},t.exports=l},413:function(t,e,r){"use strict";r.r(e);var l={props:{news:{type:Array,default:function(){return[]}}}},n=(r(405),r(49)),o=r(50),c=r.n(o),d=r(451),v=r(387),m=(r(12),r(10),r(13),r(6),r(17),r(11),r(18),r(3));r(411);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=r(37).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:h({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:h({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),_=r(452),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"no-gutters":""}},[r("v-row",[r("v-col",{attrs:{md:"9",sm:"12",lg:"9","order-sm":"2","order-md":"1"}},[r("v-row",[r("v-col",{staticClass:"pt-5",attrs:{md:"3",sm:"12"}},[t._l(t.news.slice(4,7),(function(e){return[e?r("article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"mb-2",attrs:{horizontal:""}})]}))],2),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}}),t._v(" "),r("v-col",{attrs:{md:"9",sm:"12"}},[r("v-col",{attrs:{md:"12"}},[t._l(t.news.slice(1,2),(function(e){return[e?r("article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img,author:e.author,description:e.shortDescription||e.description}}):t._e()]}))],2),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",horizontal:""}}),t._v(" "),r("v-col",[t._l(t.news.slice(2,5),(function(e){return[e?r("article-preview",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"my-3",attrs:{horizontal:""}})]}))],2)],1),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}})],1)],1),t._v(" "),r("v-col",{attrs:{md:"3",sm:"12","order-sm":"1","order-md":"2"}},[r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",vertical:""}}),t._v(" "),r("h5",{staticClass:"text-h5 pa-2"},[t._v("Latest News")]),t._v(" "),r("v-divider",{staticClass:"d-none d-sm-block",attrs:{inset:"",horizontal:""}}),t._v(" "),t._l(t.news,(function(e){return[e?r("small-article-thumbnail",{key:e.slug,attrs:{title:e.title,slug:e.slug,"article-type":e.category,img:e.img,"created-at":e.createdAt}}):t._e(),t._v(" "),r("v-divider",{key:e.slug+"_divider",staticClass:"d-none d-sm-block my-3",attrs:{horizontal:""}})]}))],2)],1)],1)}),[],!1,null,"2d08e97c",null);e.default=component.exports;c()(component,{ArticleThumbnail:r(402).default,ArticlePreview:r(403).default,SmallArticleThumbnail:r(404).default}),c()(component,{VCol:d.a,VContainer:v.a,VDivider:y,VRow:_.a})},456:function(t,e,r){"use strict";r.r(e);var l=r(23),n=(r(82),{name:"IndexPage",asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("articles",l.slug).only(["title","shortDescription","img","slug","description","author","createdAt","category"]).sortBy("createdAt","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{news:n});case 5:case"end":return e.stop()}}),e)})))()}}),o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-lists-home-page",{attrs:{news:t.news}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleListsHomePage:r(413).default})}}]);