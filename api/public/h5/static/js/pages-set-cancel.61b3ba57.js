(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-cancel"],{"179f":function(t,n,e){"use strict";var a=e("31d2"),i=e.n(a);i.a},"26f0":function(t,n,e){"use strict";e.r(n);var a=e("d6eb"),i=e("da4e");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("179f");var o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"327f608a",null,!1,a["a"],void 0);n["default"]=c.exports},"31d2":function(t,n,e){var a=e("bec5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("4ebebeb0",a,!0,{sourceMap:!1,shadowMode:!1})},aafe:function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("5530")),s=a(e("b89f")),o=e("26cb"),c={data:function(){return{agree:!1}},onShow:function(){this.loginCheck(),uni.setNavigationBarTitle({title:this.$t("set.cancel")})},methods:(0,i.default)((0,i.default)({},(0,o.mapMutations)(["loginCheck"])),{},{navTo:function(t){uni.navigateTo({url:t})},cancel:function(){var t=this;s.default.cancel({},(function(n){t.logout(),t.$api.msg(this.$t("cancel.succeed")),setTimeout((function(){uni.switchTab({url:"/pages/index/index"})}),1e3)}))}})};n.default=c},b89f:function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("f83e")),s=a(e("1326")),o={detail:function(t,n){i.default.setGetMessage("user",{},s.default.t("common.loading"),(function(n){t(n)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},edit:function(t,n,e){i.default.setPost("user",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},notification:function(t,n,e){i.default.setPost("user/notification",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cancel:function(t,n,e){i.default.setPost("cancel",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},authorization:function(t,n){i.default.setGet("authorization",{},(function(n){t(n)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};n.default=o},bec5:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-327f608a]{background:#fff}body.?%PAGE?%[data-v-327f608a]{background:#fff}.sub[data-v-327f608a]{position:absolute;bottom:%?100?%;width:100%}',""]),t.exports=n},d6eb:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"text-xl padding text-center text-bold"},[t._v(t._s(t.$t("cancel.title")))]),e("v-uni-view",{staticClass:"padding solid-bottom"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v(t._s(t.$t("cancel.safe_state")))]),e("v-uni-view",{staticClass:"text-sm"},[t._v(t._s(t.$t("cancel.astrict")))])],1),e("v-uni-view",{staticClass:"padding solid-bottom"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v(t._s(t.$t("cancel.dispute")))]),e("v-uni-view",{staticClass:"text-sm"},[t._v(t._s(t.$t("cancel.no_dispute")))])],1),e("v-uni-view",{staticClass:"padding"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v(t._s(t.$t("cancel.unfinished")))]),e("v-uni-view",{staticClass:"text-sm"},[t._v(t._s(t.$t("cancel.nothing_progress")))])],1),e("v-uni-view",{staticClass:"text-center sub"},[e("v-uni-view",{staticClass:"text-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.agree=!t.agree}}},[e("span",{staticClass:"lg padding-right-xs",class:t.agree?"cuIcon-roundcheckfill text-red":"text-gray cuIcon-round"}),t._v("我已阅读并知晓了"),e("span",{staticClass:"text-red",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/article/detail?list=0&id=3")}}},[t._v("《账号注册须知》")])]),e("v-uni-button",{staticClass:"cu-btn round bg-red margin-top",attrs:{disabled:!t.agree},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel()}}},[t._v("确认申请")])],1)],1)},i=[]},da4e:function(t,n,e){"use strict";e.r(n);var a=e("aafe"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a}}]);