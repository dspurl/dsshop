(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-612a"],{"5dCt":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("yxRg"),n=i("X4fA"),l=function(t){return t&&t.__esModule?t:{default:t}}(i("Mz3J"));e.default={name:"SpecificationList",components:{Pagination:l.default},data:function(){return{formLoading:!1,actionurl:"http://dsshop.test/api/v1/admin/uploadPictures",imgHeaders:{Authorization:(0,n.getToken)("token_type")+" "+(0,n.getToken)("access_token")},SpecificationGroup:[],dialogVisible:!1,ruleForm:[],checkAll:!1,tableKey:0,list:null,total:0,textMap:{update:"修改",create:"添加"},imgData:{type:1,size:512e3},imgProgressPercent:0,loading:!1,listLoading:!1,imgProgress:!1,dialogStatus:"",dialogFormVisible:!1,listQuery:{page:1,limit:10,sort:"+id",activeIndex:"1"},temp:{},rules:{name:[{required:!0,message:"请输入属性名称",trigger:"blur"}],type:[{required:!0,message:"请选择属性类型",trigger:"change"}],is_search:[{required:!0,message:"请选择是否可搜索属性",trigger:"change"}],location:[{required:!0,message:"请选择显示位置",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,(0,a.getList)(this.listQuery).then(function(e){t.list=e.data.paginate.data,t.total=e.data.paginate.total,t.SpecificationGroup=e.data.SpecificationGroup,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},sortChange:function(t){var e=t.prop,i=t.order;this.listQuery.sort="ascending"===i?"+"+e:"-"+e,this.handleFilter()},handleSelect:function(t,e){this.listQuery.activeIndex=t,this.handleFilter()},resetTemp:function(){this.temp={name:"",type:"",is_search:0,value:"",label:"",sort:5,specification_group_id:"",location:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleUpdate:function(t){var e=this;this.temp=null,this.temp=t,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleCheckAllChange:function(){this.$refs.multipleTable.toggleAllSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleDelete:function(t){var e=this;this.$confirm("是否确认删除该内容?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){e.formLoading=!0,(0,a.destroy)(t.id).then(function(){e.getList(),e.dialogFormVisible=!1,e.formLoading=!1,e.$notify({title:e.$t("hint.succeed"),message:"删除成功",type:"success",duration:2e3})}).catch(function(){e.formLoading=!1})}).catch(function(){})},create:function(){var t=this;this.formLoading=!0,this.$refs.dataForm.validate(function(e){e?(0,a.create)(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.formLoading=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.creatingSuccessful"),type:"success",duration:2e3})}).catch(function(){t.formLoading=!1}):t.formLoading=!1})},edit:function(){var t=this;this.formLoading=!0,this.$refs.dataForm.validate(function(e){e?(0,a.edit)(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.formLoading=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.updateSuccessful"),type:"success",duration:2e3})}).catch(function(){t.formLoading=!1}):t.formLoading=!1})}}}},"6g3Z":function(t,e,i){"use strict";i.r(e);var a=i("M3qR"),n=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);e.default=n.a},Lcw6:function(t,e,i){"use strict";var a=i("qULk");i.n(a).a},M3qR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Y5bG");e.default={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&(0,a.scrollTo)(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&(0,a.scrollTo)(0,800)}}}},Mz3J:function(t,e,i){"use strict";i.r(e);var a=i("cJ0Q"),n=i("6g3Z");for(var l in n)"default"!==l&&function(t){i.d(e,t,function(){return n[t]})}(l);i("Lcw6");var o=i("KHd+"),r=Object(o.a)(n.default,a.a,a.b,!1,null,"331ed7d4",null);r.options.__file="index.vue",e.default=r.exports},WWTF:function(t,e,i){"use strict";i.r(e);var a=i("oHQU"),n=i("kBX4");for(var l in n)"default"!==l&&function(t){i.d(e,t,function(){return n[t]})}(l);i("Xvd7");var o=i("KHd+"),r=Object(o.a)(n.default,a.a,a.b,!1,null,null,null);r.options.__file="list.vue",e.default=r.exports},Xvd7:function(t,e,i){"use strict";var a=i("x9YM");i.n(a).a},Y5bG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.scrollTo=function(t,e,i){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,l=t-n,o=0;e=void 0===e?500:e,function t(){o+=20;var r=Math.easeInOutQuad(o,n,l,e);!function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(r),o<e?a(t):i&&"function"==typeof i&&i()}()},Math.easeInOutQuad=function(t,e,i,a){return(t/=a/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e};var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},cJ0Q:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},kBX4:function(t,e,i){"use strict";i.r(e);var a=i("5dCt"),n=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);e.default=n.a},oHQU:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.listQuery}},[i("el-form-item",{attrs:{label:"规格名称"}},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"规格名称",clearable:""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.title,callback:function(e){t.$set(t.listQuery,"title",e)},expression:"listQuery.title"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")])],1)],1),t._v(" "),i("br"),t._v(" "),i("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.SpecificationCreate,expression:"$store.jurisdiction.SpecificationCreate"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{label:"编号",sortable:"custom",prop:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格标注名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.label))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格组名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.specification_group_id?e.row.specification_group.name:"未分组"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.type_show))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"显示位置",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.location_show))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"规格值",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.value))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"是否可搜索",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.is_search?"是":"否"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"排序",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.sort))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"添加时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作","class-name":"small-padding fixed-width",width:"120",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.SpecificationEdit,expression:"$store.jurisdiction.SpecificationEdit"}],staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top-start"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(i){t.handleUpdate(e.row)}}})],1),t._v(" "),i("el-tooltip",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.SpecificationDestroy,expression:"$store.jurisdiction.SpecificationDestroy"}],staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start"}},[i("el-button",{attrs:{loading:t.formLoading,type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(i){t.handleDelete(e.row)}}})],1)]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-operation"},[i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination",attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],"close-on-click-modal":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[i("el-form-item",{attrs:{label:"规格名称",prop:"name"}},[i("el-input",{attrs:{maxlength:"30",clearable:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格标注名称",prop:"label"}},[i("el-input",{attrs:{placeholder:"为空取规格名称",maxlength:"20",clearable:""},model:{value:t.temp.label,callback:function(e){t.$set(t.temp,"label",e)},expression:"temp.label"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格类型",prop:"type"}},[i("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择类型",clearable:""},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},[i("el-option",{attrs:{value:1,label:"文本"}}),t._v(" "),i("el-option",{attrs:{value:2,label:"单选"}}),t._v(" "),i("el-option",{attrs:{value:3,label:"多选"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"是否可搜索",prop:"is_search"}},[i("el-radio-group",{model:{value:t.temp.is_search,callback:function(e){t.$set(t.temp,"is_search",e)},expression:"temp.is_search"}},[i("el-radio",{attrs:{label:0}},[t._v("否")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("是")])],1),t._v(" "),i("el-alert",{attrs:{title:"设为可搜索，则可显示在筛选条件中;只有单选、多选设置才有效",type:"warning"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"规格组",prop:"specification_group_id"}},[i("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择类型",clearable:""},model:{value:t.temp.specification_group_id,callback:function(e){t.$set(t.temp,"specification_group_id",e)},expression:"temp.specification_group_id"}},t._l(t.SpecificationGroup,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),i("el-form-item",{attrs:{label:"显示位置",prop:"location"}},[i("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择位置",clearable:""},model:{value:t.temp.location,callback:function(e){t.$set(t.temp,"location",e)},expression:"temp.location"}},[i("el-option",{attrs:{value:0,label:"规格参数页"}}),t._v(" "),i("el-option",{attrs:{value:1,label:"详情页"}}),t._v(" "),i("el-option",{attrs:{value:2,label:"都显示"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"规格值",prop:"value"}},[i("el-input",{attrs:{autosize:{minRows:4},type:"textarea","show-word-limit":"",clearable:""},model:{value:t.temp.value,callback:function(e){t.$set(t.temp,"value",e)},expression:"temp.value"}}),t._v(" "),i("el-alert",{attrs:{title:"多个规格，请用回车分割",type:"warning"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"200px"},attrs:{label:"排序",prop:"sort"}},[i("el-input",{attrs:{clearable:""},model:{value:t.temp.sort,callback:function(e){t.$set(t.temp,"sort",e)},expression:"temp.sort"}})],1),t._v(" "),i("el-form-item",{attrs:{prop:"sort"}},[i("el-alert",{attrs:{title:"排序值越小越靠前",type:"warning"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("usuel.cancel")))]),t._v(" "),i("el-button",{attrs:{loading:t.formLoading,type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.create():t.edit()}}},[t._v("确定")])],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},qULk:function(t,e,i){},x9YM:function(t,e,i){},yxRg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getList=function(t){return(0,a.default)({url:"specification",method:"GET",params:t})},e.create=function(t){return t=n.default.parse(t),(0,a.default)({url:"specification",method:"POST",data:t})},e.edit=function(t){return t=n.default.parse(t),(0,a.default)({url:"specification/"+t.id,method:"POST",data:t})},e.destroy=function(t){return(0,a.default)({url:"specification/destroy/"+t,method:"POST"})};var a=l(i("t3Un")),n=l(i("Qyje"));function l(t){return t&&t.__esModule?t:{default:t}}}}]);