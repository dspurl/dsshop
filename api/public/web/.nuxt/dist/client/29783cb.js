(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{531:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return l}));var n=r(6);function o(t){return Object(n.a)({url:"good",method:"GET",params:t})}function c(t){return Object(n.a)({url:"good/"+t,method:"GET"})}function l(t){return Object(n.a)({url:"goodCategory",method:"GET",params:t})}},601:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(3),c=(r(38),r(13),r(24),r(26),r(305),r(531));e.default={data:function(){return{goodList:[],listQuery:{},loading:!1,total:0,title:""}},asyncData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,l,d,h,f,y;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,o=t.query,l=t.params,d={limit:20,page:1,sort:"",category_id:l.id,title:l.id?"":o.title},r.next=5,Promise.all([Object(c.b)(d)]);case 5:return h=r.sent,f=Object(n.a)(h,1),y=f[0],r.abrupt("return",{goodList:y.data,total:y.total,listQuery:d,title:o.title?o.title:e.$t("product.all")});case 11:r.prev=11,r.t0=r.catch(0),t.$errorHandler(r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()},head:function(){return{title:this.title+(this.listQuery.pid?"-".concat(this.$t("product.classify"),"-"):"-".concat(this.$t("product.search_result"),"-"))+"DSSHOP商城-轻量级易扩展低代码开源商城系统"}},methods:{getList:function(){var t=this;this.loading=!0,Promise.all([Object(c.b)(this.listQuery)]).then((function(e){var r=Object(n.a)(e,1)[0];t.goodList=r.data,t.total=r.total,t.loading=!1})).catch((function(e){t.loading=!1}))},tabClick:function(t){t?"sales"===t?this.listQuery.sort="-sales":"+order_price"!==this.listQuery.sort?this.listQuery.sort="+order_price":this.listQuery.sort="-order_price":this.listQuery.sort="",this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()}}}}}]);