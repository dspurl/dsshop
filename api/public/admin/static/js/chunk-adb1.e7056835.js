(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-adb1"],{"2cX2":function(e,t,r){"use strict";r.r(t);var a=r("Ez2T"),i=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,function(){return a[e]})}(n);t.default=i.a},"3p7j":function(e,t,r){},"6tNa":function(e,t,r){tinymce.PluginManager.add("axupimgs",function(e,t){window.axupimgs={};var r="./static/tinymce"+"/plugins/axupimgs/upfiles.html";axupimgs.images_upload_handler=e.getParam("images_upload_handler",void 0,"function"),axupimgs.images_upload_base_path=e.getParam("images_upload_base_path","","string"),axupimgs.axupimgs_filetype=e.getParam("axupimgs_filetype",".png,.gif,.jpg,.jpeg","string"),axupimgs.res=[];var a=function(){return e.windowManager.openUrl({title:"Ax多图片上传",size:"large",url:r,buttons:[{type:"cancel",text:"Close"},{type:"custom",text:"插入图片",name:"save",primary:!0}],onAction:function(t,r){switch(r.name){case"save":var a="",i=axupimgs.res,n=i.length;if(n<1)return alert("请选上传文件"),!1;for(let e=0;e<n;e++)i[e].url&&(a+='<img src="'+i[e].url+'" />');e.insertContent(a),axupimgs.res=[],t.close()}}})};return e.ui.registry.getAll().icons.axupimgs||e.ui.registry.addIcon("axupimgs",'<svg viewBox="0 0 1280 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M1126.2,779.8V87.6c0-24-22.6-86.9-83.5-86.9H83.5C14.7,0.7,0,63.7,0,87.7v692c0,36.2,29.2,89.7,83.5,89.7l959.3-1.3c51.7,0,83.5-42.5,83.5-88.3zm-1044,4V86.3h961.6V783.7H82.2v0.1z" fill="#ff0000"/><path d="M603,461.6L521.1,366.3,313,629.8,227.2,546.8,102.4,716.8H972.8v-170L768.2,235.2,603.1,461.6zM284.6,358.4a105.4,105.4,0,0,0,73.5-30c19.5-19.1,30.3-45,30.2-71.8,0-56.8-45.9-103-102.4-103-56.6,0-102.4,46.1-102.4,103C183.4,313.5,228,358.4,284.6,358.4z" fill="#ff0000"/><path d="M1197.7,153.6l-0.3,669.3s13.5,113.9-67.4,113.9H153.6c0,24.1,23.9,87.2,83.5,87.2h959.3c58.3,0,83.6-49.5,83.6-89.9V240.8c-0.1-41.8-44.9-87.2-82.3-87.2z" fill="#ff0000"/></svg>'),e.ui.registry.addButton("axupimgs",{icon:"axupimgs",tooltip:"Ax多图片上传",onAction:function(){a()}}),e.ui.registry.addMenuItem("axupimgs",{icon:"axupimgs",text:"图片批量上传...",onAction:function(){a()}}),{getMetadata:function(){return{name:"Ax多图片上传",url:"axupimgs.php"}}}})},"7D0S":function(e,t,r){"use strict";r.r(t);var a=r("j7B8"),i=r("2cX2");for(var n in i)"default"!==n&&function(e){r.d(t,e,function(){return i[e]})}(n);r("abw6");var o=r("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);l.options.__file="Detail.vue",t.default=l.exports},Ez2T:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("djJf"),i=r("X4fA"),n=function(e){return e&&e.__esModule?e:{default:e}}(r("alm3"));t.default={name:"ColumnDetail",components:{tinymce:n.default},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{formLoading:!1,disabled:!1,actionurl:"http://dsshop.test/api/v1/admin/uploadPictures",imgHeaders:{Authorization:"Bearer "+(0,i.getToken)("access_token")},pidList:{},dialogVisible:!1,loading:!1,id:"",ruleForm:{name:"",pid:"",keyword:"",describes:"",show:1,resources:{img:""},column_property:{details:""},list:0,sort:5},imgProgress:!1,imgData:{type:1,size:2097152},dialogStatus:"create",imgProgressPercent:0,rules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"}],pid:[{required:!0,message:"请选择类型",trigger:"change"}],show:[{required:!0,message:"请选择是否显示",trigger:"change"}],list:[{required:!0,message:"请选择是否列表",trigger:"change"}],sort:[{required:!0,message:"请输入排序",trigger:"blur"}]}}},created:function(){this.isEdit&&(this.id=this.$route.query.id),this.getList()},methods:{getList:function(){var e=this;this.loading=!0,(0,a.detail)(this.id?this.id:0).then(function(t){e.pidList=t.data.pidList,t.data.column&&(e.ruleForm=t.data.column,t.data.column.resources||(t.data.column.resources={img:""}),e.dialogStatus="update"),e.loading=!1})},create:function(){var e=this;this.formLoading=!0,this.$refs.ruleForm.validate(function(t){t?(0,a.create)(e.ruleForm).then(function(){e.dialogFormVisible=!1,e.formLoading=!1,e.$notify({title:e.$t("hint.succeed"),message:e.$t("hint.creatingSuccessful"),type:"success",duration:2e3}),setTimeout(e.$router.back(-1),2e3)}).catch(function(){e.formLoading=!1}):e.formLoading=!1})},edit:function(){var e=this;this.formLoading=!0,this.$refs.ruleForm.validate(function(t){t?(0,a.edit)(e.ruleForm).then(function(){e.dialogFormVisible=!1,e.formLoading=!1,e.$notify({title:e.$t("hint.succeed"),message:e.$t("hint.updateSuccessful"),type:"success",duration:2e3}),setTimeout(e.$router.back(-1),2e3)}).catch(function(){e.formLoading=!1}):e.formLoading=!1})},handleAvatarSuccess:function(e,t){this.ruleForm.resources.img=t.response,this.imgProgress=!1,this.imgProgressPercent=0},handleProgress:function(e,t){this.imgProgressPercent=e.percent},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(e.type)?(this.$message.error("请上传正确的图片格式"),!1):(t||this.$message.error("上传图片大小不能超过 2MB!"),this.imgProgress=!0,t)}}}},JxI4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("5WJX"));r("RsPH");var i=n(r("ynI1"));function n(e){return e&&e.__esModule?e:{default:e}}r("DWi2"),r("Tqh3"),r("Oupb"),r("B9FH"),r("hOyB"),r("lDS1"),r("ZNhe"),r("MVQK"),r("Qjfq"),r("Cp0W"),r("6tNa"),t.default={name:"Tinymce",components:{Editor:i.default},props:{url:{default:"",type:String},accept:{default:"image/jpeg, image/png, image/gif",type:String},maxSize:{default:2097152,type:Number},value:{type:String,default:""},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"lists image media table link wordcount code fullscreen preview axupimgs"},toolbar:{type:[String,Array],default:"axupimgs media lists table link | undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent  | removeformat code fullscreen image preview"},header:{type:[String,Object],default:""}},data:function(){var e=this;return{init:{language_url:"./static/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"./static/tinymce/skins/ui/oxide",content_css:"./static/tinymce/skins/content/default/content.css",height:300,plugins:this.plugins,toolbar:this.toolbar,branding:!1,menubar:!1,images_upload_handler:function(t,r,a){if(t.blob().size>e.maxSize&&a("文件体积过大"),e.accept.indexOf(t.blob().type)>=0){var i=new XMLHttpRequest,n=new FormData,o=e;i.withCredentials=!1,i.open("POST",o.url),i.setRequestHeader("Authorization",o.header.Authorization),i.onload=function(){if(200!==i.status)return o.$emit("on-upload-fail"),void a("上传失败: "+JSON.parse(i.response).message);r(i.responseText)},n.append("file",t.blob()),n.append("type",1),n.append("size",e.maxSize),i.send(n)}else a("图片格式错误")}},myValue:this.value}},watch:{value:function(e){this.myValue=e},myValue:function(e){this.$emit("input",e)}},mounted:function(){a.default.init({})},methods:{onClick:function(e){this.$emit("onClick",e,a.default)},clear:function(){this.myValue=""}}}},Nx9o:function(e,t,r){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("detail",{attrs:{"is-edit":!1}})},i=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i})},P8Gl:function(e,t,r){"use strict";r.r(t);var a=r("Nx9o"),i=r("g0kD");for(var n in i)"default"!==n&&function(e){r.d(t,e,function(){return i[e]})}(n);var o=r("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);l.options.__file="create.vue",t.default=l.exports},abw6:function(e,t,r){"use strict";var a=r("3p7j");r.n(a).a},alm3:function(e,t,r){"use strict";r.r(t);var a=r("rqW4"),i=r("v1P2");for(var n in i)"default"!==n&&function(e){r.d(t,e,function(){return i[e]})}(n);var o=r("KHd+"),l=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);l.options.__file="index.vue",t.default=l.exports},cGPf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(r("7D0S"));t.default={name:"ColumnCreate",components:{Detail:a.default}}},djJf:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getList=function(e){return(0,a.default)({url:"column",method:"get",params:e})},t.create=function(e){return e=(e=i.default.parse({data:e})).data,(0,a.default)({url:"column",method:"post",data:e})},t.edit=function(e){return e=(e=i.default.parse({data:e})).data,(0,a.default)({url:"column/"+e.id,method:"post",data:e})},t.destroy=function(e){return(0,a.default)({url:"column/destroy/"+e,method:"post"})},t.detail=function(e){return(0,a.default)({url:"column/"+e,method:"get"})};var a=n(r("t3Un")),i=n(r("Qyje"));function n(e){return e&&e.__esModule?e:{default:e}}},g0kD:function(e,t,r){"use strict";r.r(t);var a=r("cGPf"),i=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,function(){return a[e]})}(n);t.default=i.a},j7B8:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"createPost-container",staticStyle:{"padding-top":"40px"}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"padding-left":"200px","padding-right":"200px"},attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"栏目名称",prop:"name"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{maxlength:"60",clearable:""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类目",prop:"pid"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.ruleForm.pid,callback:function(t){e.$set(e.ruleForm,"pid",t)},expression:"ruleForm.pid"}},e._l(e.pidList,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"关键字",prop:"keyword"}},[r("el-input",{staticStyle:{width:"600px"},attrs:{maxlength:"255",clearable:""},model:{value:e.ruleForm.keyword,callback:function(t){e.$set(e.ruleForm,"keyword",t)},expression:"ruleForm.keyword"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"describes"}},[r("el-input",{staticStyle:{width:"600px"},attrs:{maxlength:"255",clearable:""},model:{value:e.ruleForm.describes,callback:function(t){e.$set(e.ruleForm,"describes",t)},expression:"ruleForm.describes"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"缩略图",prop:"img"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-progress":e.handleProgress,action:e.actionurl,headers:e.imgHeaders,data:e.imgData}},[e.imgProgress?r("span",[r("el-progress",{staticClass:"progress-img",attrs:{percentage:e.imgProgressPercent,type:"circle"}})],1):r("span",[e.ruleForm.resources.img?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.resources.img}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])]),e._v(" "),r("div",{staticClass:"el-upload__tip"},[e._v("推荐尺寸：312px * 208px")])],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[r("tinymce",{ref:"editor",attrs:{disabled:e.disabled,url:e.actionurl,header:e.imgHeaders},model:{value:e.ruleForm.column_property.details,callback:function(t){e.$set(e.ruleForm.column_property,"details",t)},expression:"ruleForm.column_property.details"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"是否显示",prop:"show"}},[r("el-radio-group",{model:{value:e.ruleForm.show,callback:function(t){e.$set(e.ruleForm,"show",t)},expression:"ruleForm.show"}},[r("el-radio",{attrs:{label:1}},[e._v("显示")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("隐藏")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"是否列表",prop:"list"}},[r("el-radio-group",{model:{value:e.ruleForm.list,callback:function(t){e.$set(e.ruleForm,"list",t)},expression:"ruleForm.list"}},[r("el-radio",{attrs:{label:0}},[e._v("否")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("是")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-radio-group",{model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}},[r("el-input",{staticStyle:{width:"80px"},attrs:{maxlength:"11",clearable:""},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}})],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:e.formLoading,type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.create():e.edit()}}},[e._v("提交")])],1)],1)],1)},i=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i})},rqW4:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tinymce-box"},[r("editor",{attrs:{init:e.init,disabled:e.disabled},on:{onClick:e.onClick},model:{value:e.myValue,callback:function(t){e.myValue=t},expression:"myValue"}})],1)},i=[];r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i})},v1P2:function(e,t,r){"use strict";r.r(t);var a=r("JxI4"),i=r.n(a);for(var n in a)"default"!==n&&function(e){r.d(t,e,function(){return a[e]})}(n);t.default=i.a}}]);