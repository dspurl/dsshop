(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-index"],{1261:function(t,e,n){"use strict";n.r(e);var o=n("331e"),i=n("6b5e");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("bfc3");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"1451bffd",null,!1,o["a"],r);e["default"]=u.exports},"331e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniLoadMore:n("5fe4").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"navbar"},t._l(t.navList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"nav-item",class:{current:t.tabCurrentIndex===o},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(o)}}},[t._v(t._s(e.text))])})),1),n("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.navList,(function(e,o){return n("v-uni-swiper-item",{key:o,staticClass:"tab-content"},[n("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadData.apply(void 0,arguments)}}},[!0===e.loaded&&0===e.orderList.length?n("empty"):t._e(),n("v-uni-view",{staticClass:"padding-xl bg-white"},[t._l(e.orderList,(function(e,o){return n("coolc-coupon",{key:o,attrs:{item:e,types:"use",theme:"#ff6c00",color:"#ffffff",solid:"#ff6c00"},on:{getCoupon:function(e){arguments[0]=e=t.$handleEvent(e),t.getCoupon.apply(void 0,arguments)}}})})),n("uni-load-more",{attrs:{status:e.loadingType}})],2)],1)],1)})),1)],1)},a=[]},"42a2":function(t,e,n){"use strict";n.r(e);var o=n("580f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"43d5":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"coupon-item"},[n("v-uni-view",{staticClass:"coupon-money"},[t.item.seller_name?n("v-uni-view",{staticClass:"nick"},[t._v(t._s(t.item.seller_name)+"使用")]):t._e(),3===t.item.type?n("v-uni-view",{staticClass:"layof",style:{color:t.theme}},[t._v(t._s(t.item.money)+"%")]):n("v-uni-view",{staticClass:"layof",style:{color:t.theme}},[t._v("￥"+t._s(t.item.money))]),t.item.ticket?n("v-uni-view",{staticClass:"tit"},[t._v("券号："+t._s(t.item.ticket))]):t._e(),t.item.title?n("v-uni-view",{staticClass:"demand"},[t._v(t._s(t.item.title))]):t._e(),t.item.end_time?n("v-uni-view",{staticClass:"end_time"},[t._v(t._s(t.item.end_time)+"前使用")]):n("v-uni-view",{staticClass:"time"},[t._v("使用期限 "+t._s(t.item.time))])],1),"1"===t.item.state?n("v-uni-view",[t.types?n("v-uni-navigator",{staticClass:"get-btn",style:{color:t.color,borderColor:t.color,background:t.solid},attrs:{url:t.item.url,"open-type":"switchTab","hover-class":"other-navigator-hover"}},[t._v("立即使用")]):n("v-uni-view",{staticClass:"get-btn",style:{color:t.color,borderColor:t.color,background:t.solid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCoupon(t.item)}}},[t._v("立即领取")])],1):"2"===t.item.state?n("v-uni-view",[t.types?n("v-uni-view",{staticClass:"get-btn"},[t._v("已使用")]):n("v-uni-view",{staticClass:"get-btn"},[t._v("已领取")])],1):n("v-uni-view",[t.types?n("v-uni-view",{staticClass:"get-btn"},[t._v("已失效")]):n("v-uni-view",{staticClass:"get-btn"},[t._v("已领取")])],1)],1)},a=[]},"580f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={components:{},data:function(){return{}},props:{item:{type:Object},types:{type:String,default:""},theme:{type:String,default:"#ff9000"},solid:{type:String,default:"#ffffff"},color:{type:String,default:"#ff9000"}},methods:{getCoupon:function(t){this.$emit("getCoupon",t)}}};e.default=o},"594b":function(t,e,n){var o=n("5b7d");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("7d7cc298",o,!0,{sourceMap:!1,shadowMode:!1})},"5b7d":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 行为相关颜色 */.coupon-item[data-v-1956e29a]{width:100%;height:auto;display:table;border-radius:%?10?%;padding:0 %?20?%;margin-top:%?22?%;border:1px solid #eee;position:relative}.coupon-item .coupon-money[data-v-1956e29a]{width:%?465?%;height:auto;display:table;float:left;padding:%?26?% 0;border-style:none dotted none none;border-color:#eee}.coupon-item .coupon-money .nick[data-v-1956e29a]{width:100%;height:%?50?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .tit[data-v-1956e29a]{width:100%;height:%?50?%;line-height:%?50?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .demand[data-v-1956e29a]{width:100%;height:%?40?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .layof[data-v-1956e29a]{width:100%;height:%?48?%;line-height:%?30?%;font-size:%?44?%;color:#ff9000;font-weight:700}.coupon-item .coupon-money .end_time[data-v-1956e29a]{width:100%;height:%?30?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .time[data-v-1956e29a]{width:100%;height:%?40?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .get-btn[data-v-1956e29a]{width:%?146?%;height:%?52?%;line-height:%?50?%;position:absolute;top:50%;right:%?10?%;margin-top:%?-26?%;text-align:center;border-radius:%?60?%;color:#ff9000;border:1px solid #ff9000;font-size:%?24?%;float:right}.coupon-item[data-v-1956e29a]:after{width:%?40?%;height:%?20?%;position:absolute;left:%?460?%;top:-1px;border-radius:0 0 %?40?% %?40?%;content:"";display:block;background:#fff;border:1px solid #eee;border-top:0}.coupon-item[data-v-1956e29a]:before{width:%?40?%;height:%?20?%;position:absolute;left:%?460?%;bottom:-1px;border-radius:%?40?% %?40?% 0 0;content:"";display:block;background:#fff;border:1px solid #eee;border-bottom:0}',""]),t.exports=e},"6b5e":function(t,e,n){"use strict";n.r(e);var o=n("7b71"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"766e":function(t,e,n){"use strict";n.r(e);var o=n("43d5"),i=n("42a2");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("9dc3");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"1956e29a",null,!1,o["a"],r);e["default"]=u.exports},"7b71":function(t,e,n){"use strict";var o=n("4ea4");n("4160"),n("ac1f"),n("5319"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=o(n("1da1")),a=o(n("5fe4")),r=o(n("88a0")),s=o(n("c1ce")),u=o(n("766e")),c={components:{uniLoadMore:a.default,empty:r.default,coolcCoupon:u.default},data:function(){return{CustomBar:0,tabCurrentIndex:0,page:1,modalName:"",navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"未使用",loadingType:"more",orderList:[]},{state:2,text:"已使用",loadingType:"more",orderList:[]},{state:3,text:"已失效",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=+t.state,this.CustomBar=42,this.loadData()},computed:{},methods:{loadData:function(t,e){var n=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var o,i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=n.tabCurrentIndex,i=n.navList[o],i.state,"tabChange"!==t||!0!==i.loaded){e.next=5;break}return e.abrupt("return");case 5:if("loading"!==i.loadingType){e.next=7;break}return e.abrupt("return");case 7:if("noMore"!==i.loadingType){e.next=9;break}return e.abrupt("return");case 9:return i.loadingType="loading",a=[],r=n,e.next=14,s.default.getUserList({limit:8,page:n.page,index:o},(function(t){a=t.data,t.last_page>r.page?(r.page++,r.$set(i,"loadingType","more")):r.$set(i,"loadingType","noMore"),a.forEach((function(t){var e={id:t.coupon.id,money:t.coupon.cost/100,title:t.coupon.explain,url:"/pages/index/index",end_time:t.failure_time?t.failure_time.split(" ")[0].replace(/-/g,"."):t.coupon.endtime.split(" ")[0].replace(/-/g,".")};1===t.state?e.state="2":2===t.state?e.state="3":e.state="1",i.orderList.push(e)})),r.$set(i,"loaded",!0)}));case 14:case"end":return e.stop()}}),e)})))()},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t,this.page=1}}};e.default=c},"9dc3":function(t,e,n){"use strict";var o=n("594b"),i=n.n(o);i.a},b5d9:function(t,e,n){var o=n("f73e");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("3b35aec1",o,!0,{sourceMap:!1,shadowMode:!1})},bfc3:function(t,e,n){"use strict";var o=n("b5d9"),i=n.n(o);i.a},c1ce:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("0782")),a={getList:function(t,e,n){i.default.setGetMessage("coupon",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getUserList:function(t,e,n){i.default.setGetMessage("coupon/user",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},count:function(t,e){i.default.setGetMessage("coupon/user/count",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,n){i.default.setPostMessage("coupon",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=a},f73e:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-1451bffd], .content[data-v-1451bffd]{background:#fff;height:100%}.swiper-box[data-v-1451bffd]{height:calc(100% - 40px)}.list-scroll-content[data-v-1451bffd]{height:100%}.navbar[data-v-1451bffd]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-1451bffd]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-1451bffd]{color:#fa436a}.navbar .nav-item.current[data-v-1451bffd]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-1451bffd]{height:auto}[data-v-1451bffd] .get-btn{right:%?10?%!important}body.?%PAGE?%[data-v-1451bffd]{background:#fff}',""]),t.exports=e}}]);