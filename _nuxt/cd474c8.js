(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{441:function(t,e,r){"use strict";r.r(e);var n={props:{authorName:{type:String,required:!0},authorUserName:{type:String,required:!0},articleDate:{type:String,required:!0}},computed:{date:function(){return new Date(this.articleDate).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},o=r(49),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("nuxt-link",{staticClass:"tw-text-black",attrs:{to:"/Author/"+t.authorUserName}},[t._v("\n    "+t._s(t.authorName))]),t._v("\n  "+t._s(t.date)+"\n")],1)}),[],!1,null,null,null);e.default=component.exports}}]);