(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vip-index"],{"0782":function(t,i,e){"use strict";var a=e("4ea4");e("4d63"),e("ac1f"),e("25f0"),e("5319");e("94ea");var n=a(e("d058"));function s(t,i,e,a,n,s){this.requestLoading(t,i,e,a,"",n,s)}function o(t,i,e,a){this.requestLoading(t,"get",i,"","",e,a)}function c(t,i,e,a,n){this.requestLoading(t,"get",i,"",e,a,n)}function u(t,i,e,a){this.requestLoading(t,"post",i,"","",e,a)}function l(t,i,e,a,n){this.requestLoading(t,"post",i,"",e,a,n)}function d(t,i,e,a){this.requestLoading(t,"put",i,"","",e,a)}function v(t,i,e,a,n){this.requestLoading(t,"put",i,"",e,a,n)}function r(t,i,e,a){this.requestLoading(t,"delete",i,"","",e,a)}function f(t,i,e,a,n){this.requestLoading(t,"delete",i,"",e,a,n)}function p(t,i,e,a,s,o,c){uni.showNavigationBarLoading(),""!=s&&uni.showLoading({title:s});var u=uni.getStorageSync("dsshopApplytoken");uni.request({url:n.default.BaseURL+t,data:e,header:a||{"content-type":"application/json","apply-secret":n.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+u},method:i||"get",success:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),200==t.statusCode?"ok"===t.data.result?o(t.data.message):c({message:t.data}):500==t.statusCode?c({message:"服务器异常，请重新尝试"}):302==t.statusCode?c({message:"登录超时，请重新登录"}):401==t.statusCode?c({message:t.data.message}):c({message:"服务器异常，请重新尝试"})},fail:function(t){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),t.data?c({message:t.data.message}):c({message:"服务器异常"})},complete:function(t){}})}t.exports={request:s,setGet:o,setGetMessage:c,setPost:u,setPostMessage:l,setPut:d,setPutMessage:v,setDelete:r,setDeleteMessage:f,requestLoading:p}},"0c32":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("0782")),s={unifiedPayment:function(t,i,e){n.default.setPostMessage("unifiedPayment",t,"支付中",(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},balancePay:function(t,i,e){n.default.setPostMessage("balancePay",t,"支付中",(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};i.default=s},"14ac":function(t,i,e){"use strict";e.r(i);var a=e("dd37"),n=e("9c96");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("f39a");var o,c=e("f0c5"),u=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"02e9f5ed",null,!1,a["a"],o);i["default"]=u.exports},"4f94":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-02e9f5ed]{background:#fff}.vip-discounts[data-v-02e9f5ed]{margin-top:%?200?%;padding:%?30?%}.vip-discounts .deadline .cu-item-ll[data-v-02e9f5ed]{border-radius:5px;border:1px solid #e7e7e7;margin:%?10?%;padding:%?50?% 0 %?50?% 0}.vip-discounts .deadline .cu-item-ll .ll-title[data-v-02e9f5ed]{font-size:%?30?%;font-weight:700;padding-bottom:%?10?%}.vip-discounts .deadline .cu-item-ll .ll-price[data-v-02e9f5ed]{font-size:%?45?%;font-weight:700;padding-bottom:%?10?%}.vip-discounts .deadline .cu-item-ll .ll-original[data-v-02e9f5ed]{text-decoration:line-through;color:#aaa}.vip-discounts .deadline .cu-item-ll.on[data-v-02e9f5ed]{border-color:#d56a18;color:#d56a18}.vip-discounts .deadline .cu-item-ll.on .ll-price[data-v-02e9f5ed]{color:#783c0e}.vip-discounts .deadline .cu-item-ll.on .ll-original[data-v-02e9f5ed]{color:#d56a18}.vip-discounts .title[data-v-02e9f5ed]{text-align:center;color:#783c0e;font-size:%?32?%;font-weight:700}.vip-discounts .title .price[data-v-02e9f5ed]{color:#e54d42;padding-left:%?4?%;padding-right:%?4?%}.vip-discounts .tt[data-v-02e9f5ed]{padding-top:%?20?%;padding-bottom:%?20?%;font-size:%?32?%;font-weight:700}.vip-top-bg[data-v-02e9f5ed]{background-color:#000;height:%?300?%}.vip-box[data-v-02e9f5ed]{position:absolute;top:%?100?%;border-radius:5px;background-image:-webkit-linear-gradient(left,#faa91c,#f37b1d);background-image:linear-gradient(90deg,#faa91c,#f37b1d);margin:0 %?20?% 0 %?20?%;padding:%?40?%}.vip-box .title[data-v-02e9f5ed]{font-size:%?40?%;color:#783c0e;font-weight:700}.vip-box .cu-list.grid > .cu-item uni-text[data-v-02e9f5ed]{color:#783c0e}.vip-box .vip-box-icon[data-v-02e9f5ed]{color:#783c0e;font-size:%?60?%!important}.vip-box .cu-list.grid[data-v-02e9f5ed]{background-color:initial}.pay-type-list[data-v-02e9f5ed]{margin-top:%?20?%;background-color:#fff;padding-left:%?60?%}.pay-type-list .type-item[data-v-02e9f5ed]{height:%?120?%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?60?%;font-size:%?30?%;position:relative}.pay-type-list .icon[data-v-02e9f5ed]{width:%?100?%;font-size:%?52?%}.pay-type-list .icon-erjiye-yucunkuan[data-v-02e9f5ed]{color:#fe8e2e}.pay-type-list .icon-weixinzhifu[data-v-02e9f5ed]{color:#36cb59}.pay-type-list .icon-alipay[data-v-02e9f5ed]{color:#01aaef}.pay-type-list .tit[data-v-02e9f5ed]{font-size:%?32?%;color:#303133;margin-bottom:%?4?%}.pay-type-list .con[data-v-02e9f5ed]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;font-size:%?24?%;color:#909399}body.?%PAGE?%[data-v-02e9f5ed]{background:#fff}',""]),t.exports=i},5858:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("0782")),s={detail:function(t,i){n.default.setGetMessage("user",{},"加载中",(function(i){t(i)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},edit:function(t,i,e){n.default.setPost("user",t,(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},notification:function(t,i,e){n.default.setPost("user/notification",t,(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cancel:function(t,i,e){n.default.setPost("cancel",t,(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};i.default=s},"9c96":function(t,i,e){"use strict";e.r(i);var a=e("a622"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},a622:function(t,i,e){"use strict";var a=e("4ea4");e("4160"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5530")),s=a(e("b28a")),o=a(e("0c32")),c=a(e("5858")),u=e("2f62"),l={components:{},data:function(){return{payType:"weixin",list:[],modalName:null,discount:0,data:{price:0,id:0},user:{}}},onLoad:function(){},onShow:function(){this.loginCheck(),this.getList(),this.getUser()},methods:(0,n.default)((0,n.default)({},(0,u.mapMutations)(["loginCheck"])),{},{getList:function(){var t=this;s.default.getList({},(function(i){t.list=i.deadline,t.discount=10*i.discount,t.list.forEach((function(i,e){0===e?(t.list[e].on=!0,t.data={price:i.price,id:e}):t.list[e].on=!1}))}))},getUser:function(){var t=this;c.default.detail((function(i){t.user=i}))},choosePackage:function(t){this.list.forEach((function(t,i){t.on=!1})),this.list[t].on=!0,this.data={price:this.list[t].price,id:t}},hideModal:function(t){this.modalName=null},goBack:function(){this.hideModal(),this.getUser()},create:function(){var t=this;o.default.unifiedPayment({platform:this.payType,type:"vip",trade_type:"MWEB",id:this.data.id},(function(i){t.showModal("payHint"),window.location.href=i.mweb_url}))}})};i.default=l},b28a:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("0782")),s={getList:function(t,i,e){n.default.setGetMessage("vip",t,"加载中",(function(t){i(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};i.default=s},bb83:function(t,i,e){var a=e("4f94");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7665671b",a,!0,{sourceMap:!1,shadowMode:!1})},dd37:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"vip-top-bg"}),e("v-uni-view",{staticClass:"vip-box"},[e("v-uni-view",{staticClass:"title"},[t._v("超级会员")]),e("v-uni-view",{staticClass:"cu-list grid no-border col-4"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cuIcon-crownfill vip-box-icon"}),e("v-uni-text",[t._v("会员尊贵标识")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cuIcon-goodsfill vip-box-icon"}),e("v-uni-text",[t._v("购物折扣单单省")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cuIcon-redpacket_fill vip-box-icon"}),e("v-uni-text",[t._v("每月优惠券领不停")])],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cuIcon-deliver_fill vip-box-icon"}),e("v-uni-text",[t._v("全场包邮到家")])],1)],1)],1),e("v-uni-view",{staticClass:"vip-discounts"},[t.user.vip?e("v-uni-view",{staticClass:"title"},[t._v("您的vip将于"+t._s(t.user.vip_time)+"过期")]):e("v-uni-view",{staticClass:"title"},[t._v("现在开通 立送"),e("v-uni-text",{staticClass:"price"},[t._v("¥399")]),t._v("优惠券")],1),e("v-uni-view",{staticClass:"cu-list grid no-border col-3 deadline"},t._l(t.list,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-item-ll",class:{on:i.on},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choosePackage(a)}}},[e("v-uni-view",{staticClass:"ll-title"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"ll-price text-price"},[t._v(t._s(i.price))]),e("v-uni-view",{staticClass:"ll-original text-price"},[t._v(t._s(i.originalPrice))])],1)],1)})),1),e("v-uni-view",{staticClass:"tt"},[t._v("会员权益")]),e("v-uni-view",{staticClass:"cu-list menu-avatar"},[e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar bg-gray round lg cuIcon-crownfill"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-black"},[t._v("尊贵标识")]),e("v-uni-view",{staticClass:"text-black text-sm flex"},[e("v-uni-view",{staticClass:"text-cut"},[t._v("开通超级会员后，享受尊贵标识")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar bg-gray round lg cuIcon-goodsfill"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-black"},[t._v("超级会员全场"+t._s(t.discount)+"折优惠")]),e("v-uni-view",{staticClass:"text-black text-sm flex"},[e("v-uni-view",{staticClass:"text-cut"},[t._v("享受全场超低折扣优惠价，全场"+t._s(t.discount)+"折起")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar bg-gray round lg cuIcon-redpacket_fill"}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-black"},[t._v("优惠券月月领")]),e("v-uni-view",{staticClass:"text-black text-sm flex"},[e("v-uni-view",{staticClass:"text-cut"},[t._v("月月可以领优惠券，享受折上折优惠")])],1)],1)],1),e("v-uni-view",{staticClass:"cu-item"},[e("v-uni-view",{staticClass:"cu-avatar bg-gray round lg cuIcon-deliver_fill "}),e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-black"},[t._v("全场包邮")]),e("v-uni-view",{staticClass:"text-black text-sm flex"},[e("v-uni-view",{staticClass:"text-cut"},[t._v("全场商品包邮到家，尽情购物")])],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"pay-type-list"},[e("v-uni-view",{staticClass:"type-item b-b",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changePayType("weixin")}}},[e("v-uni-text",{staticClass:"icon yticon icon-weixinzhifu"}),e("v-uni-view",{staticClass:"con"},[e("v-uni-text",{staticClass:"tit"},[t._v("微信支付")]),e("v-uni-text",[t._v("推荐使用微信支付")])],1),e("v-uni-label",{staticClass:"radio"},[e("v-uni-radio",{attrs:{value:"",color:"#d56a18",checked:"weixin"==t.payType}})],1)],1)],1),e("v-uni-view",{staticClass:" flex flex-direction padding"},[t.user.vip?e("v-uni-button",{staticClass:"cu-btn block bg-black round lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.create()}}},[t._v("续费(¥"+t._s(t._f("1000")(t.data.price))+")")]):e("v-uni-button",{staticClass:"cu-btn block bg-black round lg",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.create()}}},[t._v("立即开通会员(¥"+t._s(t._f("1000")(t.data.price))+")")])],1),e("v-uni-view",{staticClass:"cu-modal",class:"payHint"==t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[e("v-uni-view",{staticClass:"content"},[t._v("提醒")]),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),e("v-uni-view",{staticClass:"padding-xl"},[t._v("是否已完成支付")]),e("v-uni-view",{staticClass:"flex cu-bar bg-white justify-between"},[e("v-uni-button",{staticClass:"margin-left cu-btn line-green text-green",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}},[t._v("取消")]),e("v-uni-button",{staticClass:"margin-right cu-btn bg-green margin-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goBack.apply(void 0,arguments)}}},[t._v("已完成")])],1)],1)],1)],1)},s=[]},f39a:function(t,i,e){"use strict";var a=e("bb83"),n=e.n(a);n.a}}]);