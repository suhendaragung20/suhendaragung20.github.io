(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f90"],{9784:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"main-card mb-3 card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Insert Image")]),e("form",{},[e("div",{staticClass:"position-relative form-group"},[e("input",{staticClass:"form-control-file",attrs:{name:"file",id:"exampleFile",type:"file"},on:{change:t.previewFiles}}),e("small",{staticClass:"form-text text-muted"},[t._v("max size 5mb. ")])]),e("button",{staticClass:"mt-1 btn btn-primary",on:{click:t.add_new_image}},[t._v("Submit")])])])])]),t._m(0)])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"main-card mb-3 card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Label")]),e("form",{},[e("input",{staticClass:"mb-2 form-control-lg form-control",attrs:{placeholder:"select here...",type:"text"}})])])])])}],s=(e("96cf"),e("1da1")),r=e("bc3a"),c=e.n(r),l=e("1a01"),o={components:{PageTitle:l["a"]},data:function(){return{heading:"Add Data Image",subheading:"Data image yang diambil melalui kamera smartphone.",icon:"pe-7s-cloud-upload icon-gradient bg-premium-dark",inputImageUpload:[]}},methods:{previewFiles:function(t){this.inputImageUpload=t.target.files},add_new_image:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a,e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("new_image",this.inputImageUpload[0]),e={},console.log(this.inputImageUpload[0]),i="https://comvis.labatr.id/eye_backend/add_image/",t.next=7,c.a.post(i,a,{headers:e}).then();case 7:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}},d=o,m=e("2877"),u=Object(m["a"])(d,i,n,!1,null,null,null);a["default"]=u.exports}}]);