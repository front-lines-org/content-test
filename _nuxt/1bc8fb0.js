(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{424:function(t,e,r){var content=r(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("b10b551c",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";r.r(e);var n={props:{authorName:{type:String,required:!0},authorUserName:{type:String,required:!0},articleDate:{type:String,required:!0}},computed:{date:function(){return new Date(this.articleDate).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("nuxt-link",{staticClass:"tw-text-black",attrs:{to:"/Author/"+t.authorUserName}},[t._v("\n    "+t._s(t.authorName))]),t._v("\n  "+t._s(t.date)+"\n")],1)}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,r){var map={"./ukraine.jpg":443,"./ukraine2.jpg":444,"./ukraine3.jpg":445,"./ukraine4.jpg":446,"./ukraine4_big.jpg":447,"./ukraine5.jpg":448,"./ukraine6.jpg":449,"./ukraine7.jpg":450};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=442},443:function(t,e,r){t.exports=r.p+"img/4aff3be.jpg"},444:function(t,e,r){t.exports=r.p+"img/ef33db2.jpg"},445:function(t,e,r){t.exports=r.p+"img/0c5bcf5.jpg"},446:function(t,e,r){t.exports=r.p+"img/e1d93d4.jpg"},447:function(t,e,r){t.exports=r.p+"img/f0ae7fa.jpg"},448:function(t,e,r){t.exports=r.p+"img/5d6a560.jpg"},449:function(t,e,r){t.exports=r.p+"img/b3205b8.jpg"},450:function(t,e,r){t.exports=r.p+"img/816b45d.jpg"},451:function(t,e,r){"use strict";r(424)},452:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".nuxt-content h2[data-v-b568dffa]{font-weight:700;font-size:28px}.nuxt-content h3[data-v-b568dffa]{font-weight:700;font-size:22px}.nuxt-content p[data-v-b568dffa]{margin-bottom:20px}.primary-color[data-v-b568dffa]{color:#f9a1bc}",""]),n.locals={},t.exports=n},473:function(t,e,r){"use strict";r.r(e);var n=r(23),o=(r(82),{layout:"article-layout",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=(r(451),r(49)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"tw-prose tw-prose-sm tw-sm:prose tw-lg:prose-lg tw-xl:prose-2xl tw-mx-auto tw-mt-9"},[n("h3",{staticClass:"primary-color font-weight-black"},[t._v(t._s(t.article.category))]),t._v(" "),n("h1",{staticClass:"h1"},[t._v(t._s(t.article.title))]),t._v(" "),n("p",{staticClass:"tw-font-bold"},[t._v(t._s(t.article.description))]),t._v(" "),n("author-name",{attrs:{"author-name":t.article.author,"author-user-name":t.article.author,"article-date":t.article.createdAt||t.article.updatedAt}}),t._v(" "),n("img",{staticClass:"mb-0",attrs:{src:r(442)("./"+t.img),alt:t.article.img}}),t._v(" "),n("p",{staticClass:"text-xs font-light mt-0 text-slate-300 tw-not-prose"},[t._v("\n    Image: Ukraine ministry of Defense. Troops training\n  ")]),t._v(" "),n("nuxt-content",{staticClass:"tw-prose tw-prose-sm tw-sm:prose tw-lg:prose-lg tw-xl:prose-2xl tw-mx-auto",attrs:{document:t.article}})],1)}),[],!1,null,"b568dffa",null);e.default=component.exports;installComponents(component,{AuthorName:r(441).default})}}]);