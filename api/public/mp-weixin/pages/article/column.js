(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/column"],{"08cd":function(n,t,e){"use strict";var a=e("afe9"),o=e.n(a);o.a},2396:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("9f69"));function o(n){return n&&n.__esModule?n:{default:n}}var u=function(){e.e("components/uni-load-more/uni-load-more").then(function(){return resolve(e("5fe4"))}.bind(null,e)).catch(e.oe)},i={components:{uniLoadMore:u},data:function(){return{data:[],page:1,loadingType:"more"}},onLoad:function(n){this.loadData()},methods:{loadData:function(t){var e=this;a.default.getList({limit:8,page:this.page},(function(a){e.data=e.data.concat(a.data),a.last_page>e.page?(e.page++,e.loadingType="more"):e.loadingType="noMore","pull"===t&&setTimeout((function(){n.stopPullDownRefresh()}),1e3)}))},goNavigator:function(t){1===t.list?n.navigateTo({url:"./index?id="+t.id+"&name="+t.name}):n.navigateTo({url:"./details?list=1&id="+t.id})},onPullDownRefresh:function(){this.data=[],this.page=1,this.loadData("pull")},onReachBottom:function(){"noMore"!==this.loadingType&&this.loadData()}}};t.default=i}).call(this,e("543d")["default"])},"488c":function(n,t,e){"use strict";(function(n){e("3ea3");a(e("66fd"));var t=a(e("7479"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},7479:function(n,t,e){"use strict";e.r(t);var a=e("d31e"),o=e("820c");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);e("08cd");var i,c=e("f0c5"),l=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=l.exports},"820c":function(n,t,e){"use strict";e.r(t);var a=e("2396"),o=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=o.a},afe9:function(n,t,e){},d31e:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var a={uniLoadMore:function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"5fe4"))}},o=function(){var n=this,t=n.$createElement;n._self._c},u=[]}},[["488c","common/runtime","common/vendor"]]]);