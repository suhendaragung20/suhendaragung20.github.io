(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c678"],{f2a7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("List Label")]),a("ul",{staticClass:"todo-list-wrapper list-group list-group-flush"},t._l(this.labels,(function(e){return a("li",{key:e.label,staticClass:"list-group-item"},[a("div",{staticClass:"todo-indicator bg-warning"}),a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-wrapper"},[t._m(0,!0),a("div",{staticClass:"widget-content-left"},[a("div",{staticClass:"widget-heading"},[t._v(t._s(e.label)+" ")])]),a("div",{staticClass:"widget-content-right widget-content-actions"},[a("button",{staticClass:"border-0 btn-transition btn btn-outline-danger",on:{click:function(a){return t.delete_label(e.id)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])])})),0),t._m(1)])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"main-card mb-3 card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Add New Label")]),a("form",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input_new_label,expression:"input_new_label"}],staticClass:"mb-2 form-control-lg form-control",attrs:{placeholder:"type here...",type:"text"},domProps:{value:t.input_new_label},on:{input:function(e){e.target.composing||(t.input_new_label=e.target.value)}}}),a("button",{staticClass:"mt-1 btn btn-primary",on:{click:t.add_new_label}},[t._v("Submit")])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widget-content-left mr-2"},[a("div",{staticClass:"custom-checkbox custom-control"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"exampleCustomCheckbox0"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"exampleCustomCheckbox0"}},[t._v(" ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-block text-right card-footer"},[a("button",{staticClass:"btn btn-danger"},[t._v("Delete")])])}],s=(a("96cf"),a("1da1")),l=a("bc3a"),r=a.n(l),c=a("1a01"),o=a("ecee"),d=a("c074"),u=a("ad3d");o["c"].add(d["K"],d["u"]);var b={components:{PageTitle:c["a"],"font-awesome-icon":u["a"]},data:function(){return{heading:"Manage Label",subheading:"Tambah, edit atau delete label panyakit.",icon:"pe-7s-albums icon-gradient bg-premium-dark",labels:[],input_new_label:""}},created:function(){this.get_all_label()},methods:{get_all_label:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("source",0),a={},n="https://comvis.labatr.id/eye_backend/get_all_label/",t.next=6,r.a.post(n,e,{headers:a}).then((function(t){i.labels=t.data.labels}));case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),add_new_label:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("new_label",this.input_new_label),a={},n="https://comvis.labatr.id/eye_backend/add_label/",t.next=6,r.a.post(n,e,{headers:a}).then(this.input_new_label="");case 6:this.get_all_label();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),delete_label:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,a.append("idx_label",e),n={},i="https://comvis.labatr.id/eye_backend/delete_label/",t.next=6,r.a.post(i,a,{headers:n}).then(this.input_new_label="");case 6:this.get_all_label();case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},p=b,m=a("2877"),_=Object(m["a"])(p,n,i,!1,null,null,null);e["default"]=_.exports}}]);