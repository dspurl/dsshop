(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{605:function(e,t,r){"use strict";r.r(t);var o=r(12);t.default={name:"AvatarImage",props:{imgData:{type:Object,default:function(){return{type:1,size:2097152,specification:[80,150]}}},format:{type:Array,default:function(){return["image/jpeg","image/gif","image/png","image/bmp"]}},file:{type:String,default:""}},data:function(){return{url:"http://dsshop.test/api/v1/app/uploadPictures",imgHeaders:{"apply-secret":"base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=",Authorization:"Bearer "+Object(o.a)("token")}}},watch:{},mounted:function(){},methods:{handleSuccessList:function(e,t){this.$emit("getFile",t)},beforeUploadList:function(e){var t=e.size<this.imgData.size;return-1===this.format.indexOf(e.type)?(this.$message.error(this.$t("good.file.error")),!1):(t||this.$message.error(this.$t("good.file.size.error")+e.size/1024/1024+"MB!"),t)}}}}}]);