(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-product"],{"00d6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */.specification[data-v-75f21a31]{max-height:%?700?%;overflow-y:auto}[data-v-75f21a31] .get-btn{right:%?10?%!important}',""]),t.exports=e},"07cd":function(t,e,i){"use strict";i.r(e);var a=i("9ba3"),n=i("af83");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c921");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"75f21a31",null,!1,a["a"],s);e["default"]=r.exports},1690:function(t,e,i){"use strict";i.r(e);var a=i("86cd"),n=i("9abc");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("72fb");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0749dcf0",null,!1,a["a"],s);e["default"]=r.exports},"22dd":function(t,e,i){"use strict";i.r(e);var a=i("81d4"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"2f40":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("766e")),o=a(i("c1ce")),s={name:"Coupon",props:{getList:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1}},components:{coolcCoupon:n.default},data:function(){return{getLists:this.getList,modalShow:this.show}},watch:{getList:function(t){this.$emit("getList",t),this.getLists=this.getList},show:function(t){this.modalShow=this.show},modalShow:function(t){this.$emit("changeShow",t)}},methods:{hideModal:function(){this.modalShow=!1},getCoupon:function(t){var e=this;o.default.create(t,(function(i){e.getLists.forEach((function(i,a){i.id===t.id&&(e.getLists[a].state="2")}))}))},stopPrevent:function(){}}};e.default=s},"3c77":function(t,e,i){"use strict";i.r(e);var a=i("6ff0"),n=i("22dd");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=r.exports},4155:function(t,e,i){var a=i("00d6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b6050e08",a,!0,{sourceMap:!1,shadowMode:!1})},"42a2":function(t,e,i){"use strict";i.r(e);var a=i("580f"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"43d5":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"coupon-money"},[t.item.seller_name?i("v-uni-view",{staticClass:"nick"},[t._v(t._s(t.item.seller_name)+"使用")]):t._e(),3===t.item.type?i("v-uni-view",{staticClass:"layof",style:{color:t.theme}},[t._v(t._s(t.item.money)+"%")]):i("v-uni-view",{staticClass:"layof",style:{color:t.theme}},[t._v("￥"+t._s(t.item.money))]),t.item.ticket?i("v-uni-view",{staticClass:"tit"},[t._v("券号："+t._s(t.item.ticket))]):t._e(),t.item.title?i("v-uni-view",{staticClass:"demand"},[t._v(t._s(t.item.title))]):t._e(),t.item.end_time?i("v-uni-view",{staticClass:"end_time"},[t._v(t._s(t.item.end_time)+"前使用")]):i("v-uni-view",{staticClass:"time"},[t._v("使用期限 "+t._s(t.item.time))])],1),"1"===t.item.state?i("v-uni-view",[t.types?i("v-uni-navigator",{staticClass:"get-btn",style:{color:t.color,borderColor:t.color,background:t.solid},attrs:{url:t.item.url,"open-type":"switchTab","hover-class":"other-navigator-hover"}},[t._v("立即使用")]):i("v-uni-view",{staticClass:"get-btn",style:{color:t.color,borderColor:t.color,background:t.solid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCoupon(t.item)}}},[t._v("立即领取")])],1):"2"===t.item.state?i("v-uni-view",[t.types?i("v-uni-view",{staticClass:"get-btn"},[t._v("已使用")]):i("v-uni-view",{staticClass:"get-btn"},[t._v("已领取")])],1):i("v-uni-view",[t.types?i("v-uni-view",{staticClass:"get-btn"},[t._v("已失效")]):i("v-uni-view",{staticClass:"get-btn"},[t._v("已领取")])],1)],1)},o=[]},"5530c":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0782")),o={getList:function(t,e,i){n.default.setGetMessage("collect",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,i){n.default.setPostMessage("collect",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},detail:function(t,e,i){n.default.setGetMessage("collect/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},destroy:function(t,e,i){n.default.setPostMessage("collect/destroy/"+t,{},"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=o},"580f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},data:function(){return{}},props:{item:{type:Object},types:{type:String,default:""},theme:{type:String,default:"#ff9000"},solid:{type:String,default:"#ffffff"},color:{type:String,default:"#ff9000"}},methods:{getCoupon:function(t){this.$emit("getCoupon",t)}}};e.default=a},"594b":function(t,e,i){var a=i("5b7d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7d7cc298",a,!0,{sourceMap:!1,shadowMode:!1})},"5b7d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 行为相关颜色 */.coupon-item[data-v-1956e29a]{width:100%;height:auto;display:table;border-radius:%?10?%;padding:0 %?20?%;margin-top:%?22?%;border:1px solid #eee;position:relative}.coupon-item .coupon-money[data-v-1956e29a]{width:%?465?%;height:auto;display:table;float:left;padding:%?26?% 0;border-style:none dotted none none;border-color:#eee}.coupon-item .coupon-money .nick[data-v-1956e29a]{width:100%;height:%?50?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .tit[data-v-1956e29a]{width:100%;height:%?50?%;line-height:%?50?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .demand[data-v-1956e29a]{width:100%;height:%?40?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .layof[data-v-1956e29a]{width:100%;height:%?48?%;line-height:%?30?%;font-size:%?44?%;color:#ff9000;font-weight:700}.coupon-item .coupon-money .end_time[data-v-1956e29a]{width:100%;height:%?30?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .coupon-money .time[data-v-1956e29a]{width:100%;height:%?40?%;line-height:%?30?%;font-size:%?24?%;color:#999}.coupon-item .get-btn[data-v-1956e29a]{width:%?146?%;height:%?52?%;line-height:%?50?%;position:absolute;top:50%;right:%?10?%;margin-top:%?-26?%;text-align:center;border-radius:%?60?%;color:#ff9000;border:1px solid #ff9000;font-size:%?24?%;float:right}.coupon-item[data-v-1956e29a]:after{width:%?40?%;height:%?20?%;position:absolute;left:%?460?%;top:-1px;border-radius:0 0 %?40?% %?40?%;content:"";display:block;background:#fff;border:1px solid #eee;border-top:0}.coupon-item[data-v-1956e29a]:before{width:%?40?%;height:%?20?%;position:absolute;left:%?460?%;bottom:-1px;border-radius:%?40?% %?40?% 0 0;content:"";display:block;background:#fff;border:1px solid #eee;border-bottom:0}',""]),t.exports=e},"6ff0":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"share-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shareToFriend(e.text)}}},[i("v-uni-image",{attrs:{src:e.icon,mode:""}}),i("v-uni-text",[t._v(t._s(e.text))])],1)})),1)],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[t._v("取消")])],1)],1):t._e()},o=[]},"72fb":function(t,e,i){"use strict";var a=i("c14d"),n=i.n(a);n.a},"766e":function(t,e,i){"use strict";i.r(e);var a=i("43d5"),n=i("42a2");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("9dc3");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1956e29a",null,!1,a["a"],s);e["default"]=r.exports},8088:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-0749dcf0]{background:#f8f8f8;padding-bottom:%?160?%}.icon-you[data-v-0749dcf0]{font-size:%?30?%;color:#888}.carousel[data-v-0749dcf0]{height:%?722?%;position:relative}.carousel uni-swiper[data-v-0749dcf0]{height:100%}.carousel .image-wrapper[data-v-0749dcf0]{width:100%;height:100%;position:relative}.carousel .swiper-item[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;height:%?750?%;overflow:hidden}.carousel .swiper-item uni-image[data-v-0749dcf0]{width:100%;height:100%}\n/* 标题简介 */.introduce-section[data-v-0749dcf0]{background:#fff;padding:%?40?% %?30?%}.introduce-section .title[data-v-0749dcf0]{font-size:%?32?%;color:#303133;height:%?50?%;line-height:%?50?%}.introduce-section .price-box[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;height:%?64?%;padding:%?10?% 0;font-size:%?26?%;color:#fa436a}.introduce-section .price[data-v-0749dcf0]{font-size:%?34?%}.introduce-section .m-price[data-v-0749dcf0]{margin:0 %?12?%;color:#909399;text-decoration:line-through}.introduce-section .coupon-tip[data-v-0749dcf0]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?4?% %?10?%;background:#fa436a;font-size:%?24?%;color:#fff;border-radius:%?6?%;line-height:1;-webkit-transform:translateY(%?-4?%);transform:translateY(%?-4?%)}.introduce-section .bot-row[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?50?%;font-size:%?24?%;color:#909399}.introduce-section .bot-row uni-text[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1}\n/* 分享 */.share-section[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#606266;background:-webkit-linear-gradient(left,#fdf5f6,#fbebf6);background:linear-gradient(left,#fdf5f6,#fbebf6);padding:%?12?% %?30?%}.share-section .share-icon[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?70?%;height:%?30?%;line-height:1;border:1px solid #fa436a;border-radius:%?4?%;position:relative;overflow:hidden;font-size:%?22?%;color:#fa436a}.share-section .share-icon[data-v-0749dcf0]:after{content:"";width:%?50?%;height:%?50?%;border-radius:50%;left:%?-20?%;top:%?-12?%;position:absolute;background:#fa436a}.share-section .icon-xingxing[data-v-0749dcf0]{position:relative;z-index:1;font-size:%?24?%;margin-left:%?2?%;margin-right:%?10?%;color:#fff;line-height:1}.share-section .tit[data-v-0749dcf0]{font-size:%?28?%;margin-left:%?10?%}.share-section .icon-bangzhu1[data-v-0749dcf0]{padding:%?10?%;font-size:%?30?%;line-height:1}.share-section .share-btn[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;font-size:%?24?%;color:#fa436a}.share-section .icon-you[data-v-0749dcf0]{font-size:%?24?%;margin-left:%?4?%;color:#fa436a}.c-list[data-v-0749dcf0]{font-size:%?26?%;color:#606266;background:#fff}.c-list .c-row[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;position:relative}.c-list .tit[data-v-0749dcf0]{width:%?140?%}.c-list .con[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#303133}.c-list .con .selected-text[data-v-0749dcf0]{margin-right:%?10?%}.c-list .bz-list[data-v-0749dcf0]{height:%?40?%;font-size:%?26?%;color:#303133}.c-list .bz-list uni-text[data-v-0749dcf0]{display:inline-block;margin-right:%?30?%}.c-list .con-list[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#303133;line-height:%?40?%}.c-list .red[data-v-0749dcf0]{color:#fa436a}\n/* 评价 */.eva-section[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:%?20?% %?30?%;background:#fff;margin-top:%?16?%}.eva-section .e-header[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?70?%;font-size:%?26?%;color:#909399}.eva-section .e-header .tit[data-v-0749dcf0]{font-size:%?30?%;color:#303133;margin-right:%?4?%}.eva-section .e-header .tip[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.eva-section .e-header .icon-you[data-v-0749dcf0]{margin-left:%?10?%}.eva-box[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.eva-box .portrait[data-v-0749dcf0]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%;border-radius:100px}.eva-box .right[data-v-0749dcf0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?28?%;color:#606266;padding-left:%?26?%}.eva-box .right .con[data-v-0749dcf0]{font-size:%?28?%;color:#303133;padding:%?20?% 0}.eva-box .right .bot[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?24?%;color:#909399}\n/*  详情 */.detail-desc[data-v-0749dcf0]{background:#fff;margin-top:%?16?%}.detail-desc .d-header[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?30?%;color:#303133;position:relative}.detail-desc .d-header uni-text[data-v-0749dcf0]{padding:0 %?20?%;background:#fff;position:relative}\n/* 规格选择弹窗 */.attr-content[data-v-0749dcf0]{padding:%?10?% %?30?%}.attr-content .a-t[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex}.attr-content .a-t uni-image[data-v-0749dcf0]{width:%?170?%;height:%?170?%;-webkit-flex-shrink:0;flex-shrink:0;margin-top:%?-40?%;border-radius:%?8?%}.attr-content .a-t .right[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?24?%;font-size:%?26?%;color:#606266;line-height:%?42?%}.attr-content .a-t .right .price[data-v-0749dcf0]{font-size:%?32?%;color:#fa436a;margin-bottom:%?10?%}.attr-content .a-t .right .selected-text[data-v-0749dcf0]{margin-right:%?10?%}.attr-content .specification[data-v-0749dcf0]{max-height:%?700?%;overflow-y:auto}.attr-content .attr-list[data-v-0749dcf0]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?30?%;color:#606266;padding-top:%?30?%;padding-left:%?10?%}.attr-content .item-left[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?120?%;margin-bottom:%?60?%}.attr-content .item-right .step[data-v-0749dcf0]{right:%?0?%;left:auto;bottom:%?50?%}.attr-content .item-list[data-v-0749dcf0]{padding:%?20?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.attr-content .item-list uni-text[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#eee;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?100?%;min-width:%?60?%;height:%?60?%;padding:0 %?20?%;font-size:%?28?%;color:#303133}.attr-content .item-list .selected[data-v-0749dcf0]{background:#fbebee;color:#fa436a}.attr-content .item-list .disabled[data-v-0749dcf0]{color:#c0c4cc}.popup[data-v-0749dcf0]{position:fixed;left:0;top:0;right:0;bottom:0;z-index:99}.popup.show[data-v-0749dcf0]{display:block}.popup.show .mask[data-v-0749dcf0]{-webkit-animation:showPopup-data-v-0749dcf0 .2s linear both;animation:showPopup-data-v-0749dcf0 .2s linear both}.popup.show .layer[data-v-0749dcf0]{-webkit-animation:showLayer-data-v-0749dcf0 .2s linear both;animation:showLayer-data-v-0749dcf0 .2s linear both}.popup.hide .mask[data-v-0749dcf0]{-webkit-animation:hidePopup-data-v-0749dcf0 .2s linear both;animation:hidePopup-data-v-0749dcf0 .2s linear both}.popup.hide .layer[data-v-0749dcf0]{-webkit-animation:hideLayer-data-v-0749dcf0 .2s linear both;animation:hideLayer-data-v-0749dcf0 .2s linear both}.popup.none[data-v-0749dcf0]{display:none}.popup .mask[data-v-0749dcf0]{position:fixed;top:0;width:100%;height:100%;z-index:1;background-color:rgba(0,0,0,.4)}.popup .layer[data-v-0749dcf0]{position:fixed;z-index:99;bottom:0;width:100%;min-height:40vh;border-radius:%?10?% %?10?% 0 0;background-color:#fff}.popup .layer .btn[data-v-0749dcf0]{height:%?66?%;line-height:%?66?%;border-radius:%?100?%;background:#fa436a;font-size:%?30?%;color:#fff;margin:%?30?% auto %?20?%}@-webkit-keyframes showPopup-data-v-0749dcf0{0%{opacity:0}100%{opacity:1}}@keyframes showPopup-data-v-0749dcf0{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes hidePopup-data-v-0749dcf0{0%{opacity:1}100%{opacity:0}}@keyframes hidePopup-data-v-0749dcf0{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes showLayer-data-v-0749dcf0{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes showLayer-data-v-0749dcf0{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes hideLayer-data-v-0749dcf0{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}@keyframes hideLayer-data-v-0749dcf0{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}\n/* 底部操作菜单 */.page-bottom[data-v-0749dcf0]{position:fixed;left:%?30?%;bottom:%?30?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?690?%;height:%?100?%;background:hsla(0,0%,100%,.9);box-shadow:0 0 %?20?% 0 rgba(0,0,0,.5);border-radius:%?16?%}.page-bottom .p-b-btn[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?24?%;color:#606266;width:%?96?%;height:%?80?%}.page-bottom .p-b-btn .yticon[data-v-0749dcf0]{font-size:%?40?%;line-height:%?48?%;color:#909399}.page-bottom .p-b-btn.active[data-v-0749dcf0],\n.page-bottom .p-b-btn.active .yticon[data-v-0749dcf0]{color:#fa436a}.page-bottom .p-b-btn .icon-fenxiang2[data-v-0749dcf0]{font-size:%?42?%;-webkit-transform:translateY(%?-2?%);transform:translateY(%?-2?%)}.page-bottom .p-b-btn .icon-shoucang[data-v-0749dcf0]{font-size:%?46?%}.page-bottom .action-btn-group[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?76?%;border-radius:100px;overflow:hidden;box-shadow:0 %?20?% %?40?% %?-16?% #fa436a;box-shadow:1px 2px 5px rgba(219,63,96,.4);background:-webkit-linear-gradient(left,#ffac30,#fa436a,#f56c6c);background:linear-gradient(90deg,#ffac30,#fa436a,#f56c6c);margin-left:%?20?%;position:relative}.page-bottom .action-btn-group[data-v-0749dcf0]:after{content:"";position:absolute;top:50%;right:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?28?%;width:0;border-right:1px solid hsla(0,0%,100%,.5)}.page-bottom .action-btn-group .action-btn[data-v-0749dcf0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?180?%;height:100%;font-size:%?28?%;padding:0;border-radius:0;background:transparent}.showVideo[data-v-0749dcf0]{position:fixed;top:0;left:0;width:100%;height:%?722?%;z-index:999}.showVideoClose[data-v-0749dcf0]{position:fixed;right:%?10?%;top:%?20?%;background-color:#fff;padding:%?20?%;z-index:1000}.playVideo[data-v-0749dcf0]{position:absolute;top:%?300?%;opacity:1;font-size:%?120?%}.sold-out[data-v-0749dcf0]{text-align:center;position:fixed;left:0;bottom:%?140?%;width:100%;background-color:#999;color:#fff;z-index:3}body.?%PAGE?%[data-v-0749dcf0]{background:#f8f8f8}',""]),t.exports=e},"81d4":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{}}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout((function(){t.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){t.show=!1,t.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}}):setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};e.default=a},"86cd":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"carousel"},[t.video?i("v-uni-video",{staticClass:"showVideo",attrs:{id:"showVideo",src:t.video,poster:t.poster}}):t._e(),t.video?i("v-uni-view",{staticClass:"showVideoClose",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.closeVideo.apply(void 0,arguments)}}},[t._v("关闭")]):t._e(),t.getList.resources_many?i("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:"true",duration:"400"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.imgCtu.apply(void 0,arguments)}}},t._l(t.resources_many,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVideo.apply(void 0,arguments)}}},["img"===e.type?i("v-uni-view",{staticClass:"image-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgList()}}},[i("v-uni-image",{staticClass:"loaded",attrs:{src:e.img,mode:"aspectFill","lazy-load":!0}})],1):i("v-uni-view",{staticClass:"image-wrapper"},[i("v-uni-image",{staticClass:"loaded",attrs:{src:t.poster,"lazy-load":!0,mode:"aspectFill"}})],1),"video"===e.type?i("v-uni-view",{staticClass:"playVideo text-white cuIcon-videofill"}):t._e()],1)})),1):t._e()],1),i("v-uni-view",{staticClass:"introduce-section"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.getList.name))]),t.inventoryFlag?i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),t.getList.price_show?[t.getList.price_show.length>1?i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.getList.price_show[0])+" - "+t._s(t.getList.price_show[1]))]):1===t.getList.price_show.length?i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.getList.price_show[0]))]):t._e()]:t._e(),t.getList.market_price_show?[t.getList.market_price_show.length>1?i("v-uni-text",{staticClass:"m-price"},[t._v("¥"+t._s(t.getList.market_price_show[1]))]):1===t.getList.market_price_show.length?i("v-uni-text",{staticClass:"m-price"},[t._v("¥"+t._s(t.getList.market_price_show[0]))]):t._e()]:t._e()],2):t._e(),i("v-uni-view",{staticClass:"bot-row"},[i("v-uni-text",[t._v("库存: "+t._s(t.getList.inventory_show))]),i("v-uni-text",[t._v("销量: "+t._s(t.getList.sales))])],1)],1),i("v-uni-view",{staticClass:"c-list"},[t.getList.is_delete||1!==t.getList.is_show?[t.specificationDefaultDisplay?i("v-uni-view",{staticClass:"c-row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("购买类型")]),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"selected-text"},[t._v(t._s(t.specificationDefaultDisplay))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1):t._e()]:[t.specificationDefaultDisplay?i("v-uni-view",{staticClass:"c-row b-b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec(!0)}}},[i("v-uni-text",{staticClass:"tit"},[t._v("购买类型")]),i("v-uni-view",{staticClass:"con"},[i("v-uni-text",{staticClass:"selected-text"},[t._v(t._s(t.specificationDefaultDisplay))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1):t._e()],i("v-uni-view",{staticClass:"c-row b-b",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeShow(!0)}}},[i("v-uni-text",{staticClass:"tit"},[t._v("优惠券")]),i("v-uni-text",{staticClass:"con t-r red"}),i("v-uni-text",{staticClass:"yticon icon-you"})],1)],2),i("v-uni-view",{staticClass:"eva-section"},[i("v-uni-view",{staticClass:"e-header"},[i("v-uni-text",{staticClass:"tit"},[t._v("评价")]),i("v-uni-text",[t._v("("+t._s(t.commentTotal)+")")]),i("v-uni-navigator",{staticClass:"tip",attrs:{"hover-class":"none",url:"comment?id="+t.id}},[t._v("查看全部")]),i("v-uni-text",{staticClass:"yticon icon-you"})],1),t._l(t.commentList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"eva-box"},[i("v-uni-image",{staticClass:"portrait",attrs:{src:e.comment.portrait||"/static/missing-face.png",mode:"aspectFill","lazy-load":!0}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.comment.name))]),i("v-uni-text",{staticClass:"con"},[t._v(t._s(e.comment.details))]),i("v-uni-view",{staticClass:"bot"},[i("v-uni-text",{staticClass:"attr"},[t._v("购买类型："),t._l(e.good_sku.product_sku,(function(e,a){return i("span",{key:a,staticClass:"padding-right-xs"},[t._v(t._s(e.value))])}))],2),i("v-uni-text",{staticClass:"time"},[t._v(t._s(e.comment.created_at.split(" ")[0]))])],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"detail-desc"},[i("v-uni-view",{staticClass:"d-header"},[i("v-uni-text",[t._v("图文详情")])],1),i("u-parse",{attrs:{content:t.getList.details,lazyLoad:!0}})],1),i("v-uni-view",{staticClass:"page-bottom"},[i("v-uni-navigator",{staticClass:"p-b-btn",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[i("v-uni-text",{staticClass:"yticon icon-xiatubiao--copy"}),i("v-uni-text",[t._v("首页")])],1),i("v-uni-navigator",{staticClass:"p-b-btn",attrs:{url:"/pages/cart/cart","open-type":"switchTab"}},[i("v-uni-text",{staticClass:"yticon icon-gouwuche"}),i("v-uni-text",[t._v("购物车")])],1),i("v-uni-view",{staticClass:"p-b-btn",class:{active:t.favorite},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFavorite.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"yticon icon-shoucang"}),i("v-uni-text",[t._v("收藏")])],1),t.getList.is_delete||1!==t.getList.is_show||!t.inventoryFlag?i("v-uni-view",{staticClass:"action-btn-group"},[i("v-uni-button",{staticClass:" action-btn no-border buy-now-btn",attrs:{type:"primary",disabled:!0}},[t._v("立即购买")]),i("v-uni-button",{staticClass:" action-btn no-border add-cart-btn",attrs:{type:"primary",disabled:!0}},[t._v("加入购物车")])],1):i("v-uni-view",{staticClass:"action-btn-group"},[i("v-uni-button",{staticClass:" action-btn no-border buy-now-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec(!0)}}},[t._v("立即购买")]),i("v-uni-button",{staticClass:" action-btn no-border add-cart-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec(!1)}}},[t._v("加入购物车")])],1)],1),i("v-uni-view",{staticClass:"popup spec",class:t.specClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"layer attr-content",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("sku",{attrs:{getList:t.getList,buy:t.buy},on:{toggleSpec:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec.apply(void 0,arguments)},purchasePattern:function(e){arguments[0]=e=t.$handleEvent(e),t.purchasePattern.apply(void 0,arguments)}}})],1)],1),i("coupon",{attrs:{getList:t.couponList,show:t.couponShow},on:{changeShow:function(e){arguments[0]=e=t.$handleEvent(e),t.changeShow.apply(void 0,arguments)}}}),t.getList.is_delete||1!==t.getList.is_show?i("v-uni-view",{staticClass:"sold-out padding-sm"},[t._v("商品已经下架了~")]):t._e(),0==t.inventoryFlag?i("v-uni-view",{staticClass:"sold-out padding-sm"},[t._v("商品已经售完了~")]):t._e()],1)},o=[]},"8be0":function(t,e,i){"use strict";var a=i("4ea4");i("4160"),i("c975"),i("ac1f"),i("5319"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5530"));i("96cf");var o=a(i("1da1")),s=a(i("d1bc")),c=a(i("b696")),r=a(i("3c77")),l=(i("8eda"),a(i("444b"))),d=a(i("c950")),u=a(i("5530c")),f=a(i("07cd")),v=a(i("c1ce")),p=a(i("e842")),b=i("2f62"),h={components:{share:r.default,sku:l.default,uParse:s.default,coupon:f.default},data:function(){return{cartGood:{},id:"",specClass:"none",specificationDefaultDisplay:"",getList:{is_delete:0,is_show:1},inventoryFlag:!0,shoppingAttributes:[],favorite:!1,shareList:[],poster:"",resources_many:[],video:"",index:0,buy:!1,couponList:[],couponShow:!1,commentList:[],commentTotal:0}},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=t.id,a&&(e.id=a,e.loadData(a),e.goodEvaluate(),e.hasLogin&&e.getCoupon());case 2:case"end":return i.stop()}}),i)})))()},computed:(0,n.default)({},(0,b.mapState)(["hasLogin"])),onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},methods:{loadData:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e,i.next=3,c.default.detail(t,{},(function(t){t.resources_many.length>0&&t.resources_many.forEach((function(t,e){-1!==t.depict.indexOf("_video")?(t.type="video",a.resources_many.unshift(t)):-1!==t.depict.indexOf("_poster")?a.poster=t.img:(t.type="img",a.resources_many.push(t))})),a.getList=t,a.getList.good_sku.length<=0&&(a.inventoryFlag=!1),a.hasLogin&&a.browse()}));case 3:if(!a.hasLogin){i.next=6;break}return i.next=6,u.default.detail(t,(function(t){a.favorite=1===t}));case 6:case"end":return i.stop()}}),i)})))()},imgCtu:function(t){this.index=t.target.current},showVideo:function(){var t=this.resources_many[this.index];"video"===t.type&&(this.video=t.img)},closeVideo:function(){this.video=""},browse:function(){var t=this.getList;d.default.create(t,(function(t){}))},imgList:function(){var t=[];this.resources_many.forEach((function(e){"video"!==e.type&&t.push(e.img)})),uni.previewImage({urls:t,longPressActions:{success:function(t){},fail:function(t){}}})},toggleSpec:function(t){var e=this;if(!this.hasLogin&&!0===t)return this.$api.msg("请先登录"),!1;"boolean"===typeof t&&(this.buy=t),"show"===this.specClass?(this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show")},share:function(){this.$refs.share.toggleMask()},toFavorite:function(){if(this.hasLogin){var t=this.getList;this.favorite?u.default.destroy(t.id,(function(t){})):u.default.create(t,(function(t){}))}this.favorite=!this.favorite},purchasePattern:function(t){this.specificationDefaultDisplay=t},stopPrevent:function(){},changeShow:function(t){if(!this.hasLogin)return this.$api.msg("请先登录"),!1;this.couponShow=t},getCoupon:function(){var t=this;v.default.getList({},(function(e){t.couponList=[],e.data.forEach((function(e){var i={id:e.id,money:e.cost/100,title:e.explain,type:e.type,time:e.starttime.split(" ")[0].replace(/-/g,".")+"-"+e.endtime.split(" ")[0].replace(/-/g,".")};e.limit_get&&e.user_coupon_count>=e.limit_get?i.state="2":i.state="1",t.couponList.push(i)}))}))},goodEvaluate:function(){var t=this;p.default.good({limit:2,page:1,good_id:t.id,sort:"-created_at"},(function(e){t.commentList=e.data,t.commentTotal=e.total}))}}};e.default=h},"9abc":function(t,e,i){"use strict";i.r(e);var a=i("8be0"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9ba3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"cu-modal bottom-modal",class:t.modalShow?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action"}),i("v-uni-view",{staticClass:"action text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")])],1),i("v-uni-view",{staticClass:"padding-xl bg-white text-left",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",[t._v("领券")]),i("v-uni-scroll-view",{staticClass:"specification",attrs:{"scroll-y":"true"}},t._l(t.getLists,(function(e,a){return i("coolc-coupon",{key:a,attrs:{item:e,theme:"#ff6c00",color:"#ffffff",solid:"#ff6c00"},on:{getCoupon:function(e){arguments[0]=e=t.$handleEvent(e),t.getCoupon.apply(void 0,arguments)}}})})),1)],1)],1)],1)],1)},o=[]},"9dc3":function(t,e,i){"use strict";var a=i("594b"),n=i.n(a);n.a},af83:function(t,e,i){"use strict";i.r(e);var a=i("2f40"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c14d:function(t,e,i){var a=i("8088");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6a32453e",a,!0,{sourceMap:!1,shadowMode:!1})},c1ce:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0782")),o={getList:function(t,e,i){n.default.setGetMessage("coupon",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getUserList:function(t,e,i){n.default.setGetMessage("coupon/user",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},count:function(t,e){n.default.setGetMessage("coupon/user/count",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,i){n.default.setPostMessage("coupon",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=o},c921:function(t,e,i){"use strict";var a=i("4155"),n=i.n(a);n.a},c950:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0782")),o={getList:function(t,e,i){n.default.setGetMessage("browse",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,i){n.default.setPostMessage("browse",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=o},e842:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("0782")),o={detail:function(t,e,i){n.default.setGetMessage("comment/detail/"+t,{},"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},good:function(t,e,i){n.default.setGetMessage("comment/good",t,"加载中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,e,i,a){n.default.setPostMessage("comment/"+t,e,"处理中",(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=o}}]);