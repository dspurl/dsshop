(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"13ef":function(t,e,n){"use strict";n.r(e);var o=n("c26d"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"373f":function(t,e,n){"use strict";n.r(e);var o=n("5bcc"),a=n("13ef");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a9ba");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=c.exports},4683:function(t,e,n){},"5bcc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"5fe4"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.goodsList,(function(e,n){var o=t.__get_orig(e),a=t._f("smallImage")(e.resources.img),r=t._f("1000")(e.order_price);return{$orig:o,f0:a,f1:r}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},r=[]},a9ba:function(t,e,n){"use strict";var o=n("4683"),a=n.n(o);a.a},abf8:function(t,e,n){"use strict";(function(t){n("3ea3");o(n("66fd"));var e=o(n("373f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c26d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=r(n("b696"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,r,i){try{var u=t[r](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(o,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function u(t){i(r,o,a,u,c,"next",t)}function c(t){i(r,o,a,u,c,"throw",t)}u(void 0)}))}}var c=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("5fe4"))}.bind(null,n)).catch(n.oe)},s={components:{uniLoadMore:c},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:"",cateId:0,cateList:[],goodsList:[],page:1}},onLoad:function(t){this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(t,e){var n=this;return u(o.default.mark((function e(){var r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n,e.next=3,a.default.goodCategory({},(function(e){var n=e.filter((function(e){return e.pid==t}));n.forEach((function(t){var n=e.filter((function(e){return e.pid==t.id}));t.child=n})),r.cateList=n}));case 3:case"end":return e.stop()}}),e)})))()},loadData:function(){var e=arguments,n=this;return u(o.default.mark((function r(){var i,u,c;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(i=e.length>0&&void 0!==e[0]?e[0]:"add",u=e.length>1?e[1]:void 0,"refresh"===i&&(n.page=1,n.goodsList=[]),"add"!==i){o.next=9;break}if("nomore"!==n.loadingType){o.next=6;break}return o.abrupt("return");case 6:n.loadingType="loading",o.next=10;break;case 9:n.loadingType="more";case 10:return[],c=n,o.next=14,a.default.getList({limit:6,pid:n.cateId,page:n.page,sort:n.filterIndex},(function(t){c.goodsList=c.goodsList.concat(t.data),t.last_page>c.page?(c.page++,c.loadingType="more"):c.loadingType="nomore"}));case 14:"refresh"===i&&(1==u?t.hideLoading():t.stopPullDownRefresh());case 15:case"end":return o.stop()}}),r)})))()},tabClick:function(e){e?"sales"===e?this.filterIndex="-sales":"+order_price"!==this.filterIndex?this.filterIndex="+order_price":this.filterIndex="-order_price":this.filterIndex="",t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},toggleCateMask:function(t){var e=this,n="show"===t?10:300,o="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){e.cateMaskState=o}),n)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e.id;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=s}).call(this,n("543d")["default"])}},[["abf8","common/runtime","common/vendor"]]]);