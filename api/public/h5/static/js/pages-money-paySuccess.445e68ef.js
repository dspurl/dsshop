(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-money-paySuccess"],{"20b9":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{state:2}},onShow:function(){uni.setNavigationBarTitle({title:this.$t("payment_log.succeed")})},onLoad:function(t){t.state&&(this.state=t.state)},methods:{}};n.default=a},"2fa5":function(t,n,e){var a=e("5158");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("26fb8074",a,!0,{sourceMap:!1,shadowMode:!1})},5158:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */.content[data-v-4064ca3d]{display:flex;flex-direction:column;justify-content:center;align-items:center}.success-icon[data-v-4064ca3d]{font-size:%?160?%;color:#fa436a;margin-top:%?100?%}.tit[data-v-4064ca3d]{font-size:%?38?%;color:#303133}.btn-group[data-v-4064ca3d]{padding-top:%?100?%}.mix-btn[data-v-4064ca3d]{margin-top:%?30?%;display:flex;align-items:center;justify-content:center;width:%?600?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%}.mix-btn.hollow[data-v-4064ca3d]{background:#fff;color:#303133;border:1px solid #ccc}',""]),t.exports=n},"5d26":function(t,n,e){"use strict";e.r(n);var a=e("ee01"),i=e("63ea");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("c8e3");var o=e("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"4064ca3d",null,!1,a["a"],void 0);n["default"]=c.exports},"63ea":function(t,n,e){"use strict";e.r(n);var a=e("20b9"),i=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},c8e3:function(t,n,e){"use strict";var a=e("2fa5"),i=e.n(a);i.a},ee01:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement,n=this._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"success-icon yticon icon-xuanzhong2"}),n("v-uni-text",{staticClass:"tit"},[this._v(this._s(this.$t("payment_log.succeed")))]),n("v-uni-view",{staticClass:"btn-group"},[n("v-uni-navigator",{staticClass:"mix-btn",attrs:{url:"/pages/indent/list?state="+this.state,"open-type":"redirect"}},[this._v("查看订单")]),n("v-uni-navigator",{staticClass:"mix-btn hollow",attrs:{url:"/pages/index/index","open-type":"switchTab"}},[this._v("返回首页")])],1)],1)},i=[]}}]);