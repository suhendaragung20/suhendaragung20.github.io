(function(e){function t(t){for(var a,c,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-03cb127c":"29f1b6ed","chunk-03e133b6":"f8bfd5f9","chunk-051bdaa3":"dfec5cf6","chunk-0b438c1d":"cd9ab0ac","chunk-0de1b7e2":"0b681d53","chunk-184b9536":"b4ee8812","chunk-1a0c1798":"5dc34913","chunk-1b76d2fa":"576609f0","chunk-26b0bb08":"4196619b","chunk-28ec8ce6":"172e568f","chunk-2d0a4d60":"dae1c460","chunk-2d0ab517":"473f31aa","chunk-2d0b726b":"043c487f","chunk-2d0e28a9":"4cb34f77","chunk-2d213f26":"0504d301","chunk-32044e8e":"bd607e06","chunk-3349ebea":"b6a7fe3f","chunk-39bd68c0":"353a5a14","chunk-3b7267b3":"5835934e","chunk-432a7420":"b528c5ff","chunk-45acb8a2":"dc25df98","chunk-4c2a4c50":"56b844fe","chunk-4ddd53ea":"63d19f81","chunk-5b09fbac":"80b60f85","chunk-6a52c407":"d0a27829","chunk-7895e7a7":"aff01147","chunk-7f609936":"b897ab59","chunk-b599e804":"6da190f3","chunk-fc1f75c4":"6568511b","chunk-ffa65332":"d2fd5715"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4ddd53ea":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03cb127c":"31d6cfe0","chunk-03e133b6":"31d6cfe0","chunk-051bdaa3":"31d6cfe0","chunk-0b438c1d":"31d6cfe0","chunk-0de1b7e2":"31d6cfe0","chunk-184b9536":"31d6cfe0","chunk-1a0c1798":"31d6cfe0","chunk-1b76d2fa":"31d6cfe0","chunk-26b0bb08":"31d6cfe0","chunk-28ec8ce6":"31d6cfe0","chunk-2d0a4d60":"31d6cfe0","chunk-2d0ab517":"31d6cfe0","chunk-2d0b726b":"31d6cfe0","chunk-2d0e28a9":"31d6cfe0","chunk-2d213f26":"31d6cfe0","chunk-32044e8e":"31d6cfe0","chunk-3349ebea":"31d6cfe0","chunk-39bd68c0":"31d6cfe0","chunk-3b7267b3":"31d6cfe0","chunk-432a7420":"31d6cfe0","chunk-45acb8a2":"31d6cfe0","chunk-4c2a4c50":"31d6cfe0","chunk-4ddd53ea":"188e04d6","chunk-5b09fbac":"31d6cfe0","chunk-6a52c407":"31d6cfe0","chunk-7895e7a7":"31d6cfe0","chunk-7f609936":"31d6cfe0","chunk-b599e804":"31d6cfe0","chunk-fc1f75c4":"31d6cfe0","chunk-ffa65332":"31d6cfe0"}[e]+".css",o=s.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"360d":function(e,t){e.exports="data:image/jpeg;base64,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"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),c=n("8c4f");a["default"].use(c["a"]);var o=new c["a"]({scrollBehavior:function(){return window.scrollTo({top:0,behavior:"smooth"})},routes:[{path:"/",name:"analytics",component:function(){return n.e("chunk-32044e8e").then(n.bind(null,"cfde"))}},{path:"/pages/login-boxed",name:"login-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-2d0e28a9").then(n.bind(null,"7eaf"))}},{path:"/pages/register-boxed",name:"register-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-2d0a4d60").then(n.bind(null,"07ad"))}},{path:"/pages/forgot-password-boxed",name:"forgot-password-boxed",meta:{layout:"userpages"},component:function(){return n.e("chunk-2d213f26").then(n.bind(null,"af9d"))}},{path:"/elements/buttons-standard",name:"buttons-standard",component:function(){return n.e("chunk-7f609936").then(n.bind(null,"99ae"))}},{path:"/elements/dropdowns",name:"dropdowns",component:function(){return n.e("chunk-4c2a4c50").then(n.bind(null,"f4d8"))}},{path:"/elements/icons",name:"icons",component:function(){return n.e("chunk-26b0bb08").then(n.bind(null,"b213"))}},{path:"/elements/badges-labels",name:"badges",component:function(){return n.e("chunk-fc1f75c4").then(n.bind(null,"6255"))}},{path:"/elements/cards",name:"cards",component:function(){return n.e("chunk-03e133b6").then(n.bind(null,"b832"))}},{path:"/elements/list-group",name:"list-group",component:function(){return n.e("chunk-0b438c1d").then(n.bind(null,"4e86"))}},{path:"/elements/timelines",name:"timeline",component:function(){return n.e("chunk-b599e804").then(n.bind(null,"c03b"))}},{path:"/elements/utilities",name:"utilities",component:function(){return n.e("chunk-432a7420").then(n.bind(null,"8651"))}},{path:"/components/tabs",name:"tabs",component:function(){return n.e("chunk-6a52c407").then(n.bind(null,"9af1"))}},{path:"/components/accordions",name:"accordions",component:function(){return n.e("chunk-5b09fbac").then(n.bind(null,"f884"))}},{path:"/components/modals",name:"modals",component:function(){return n.e("chunk-28ec8ce6").then(n.bind(null,"015a"))}},{path:"/components/progress-bar",name:"progress-bar",component:function(){return n.e("chunk-1b76d2fa").then(n.bind(null,"9c6f"))}},{path:"/components/tooltips-popovers",name:"tooltips-popovers",component:function(){return n.e("chunk-03cb127c").then(n.bind(null,"f0c7"))}},{path:"/components/carousel",name:"carousel",component:function(){return n.e("chunk-7895e7a7").then(n.bind(null,"46c4"))}},{path:"/components/pagination",name:"pagination",component:function(){return n.e("chunk-3349ebea").then(n.bind(null,"ace3"))}},{path:"/components/maps",name:"maps",component:function(){return n.e("chunk-4ddd53ea").then(n.bind(null,"424d"))}},{path:"/tables/regular-tables",name:"regular-tables",component:function(){return n.e("chunk-184b9536").then(n.bind(null,"be0b"))}},{path:"/widgets/chart-boxes-3",name:"chart-boxes-3",component:function(){return n.e("chunk-051bdaa3").then(n.bind(null,"ae3f"))}},{path:"/forms/controls",name:"controls",component:function(){return n.e("chunk-3b7267b3").then(n.bind(null,"1943"))}},{path:"/forms/layouts",name:"layouts",component:function(){return n.e("chunk-ffa65332").then(n.bind(null,"0e42"))}},{path:"/charts/chartjs",name:"chartjs",component:function(){return n.e("chunk-32044e8e").then(n.bind(null,"cfde"))}},{path:"/collect/home",name:"home",component:function(){return n.e("chunk-32044e8e").then(n.bind(null,"cfde"))}},{path:"/collect/common/list",name:"common_list",component:function(){return n.e("chunk-45acb8a2").then(n.bind(null,"f64e"))}},{path:"/collect/common/add",name:"common_add",component:function(){return n.e("chunk-39bd68c0").then(n.bind(null,"9784"))}},{path:"/collect/fundus/list",name:"fundus_list",component:function(){return n.e("chunk-0de1b7e2").then(n.bind(null,"d902"))}},{path:"/collect/fundus/add",name:"fundus_add",component:function(){return n.e("chunk-1a0c1798").then(n.bind(null,"d9f3"))}},{path:"/documentation/instruction",name:"instruction",component:function(){return n.e("chunk-2d0ab517").then(n.bind(null,"1585"))}},{path:"/documentation/project",name:"project_description",component:function(){return n.e("chunk-2d0b726b").then(n.bind(null,"1fcc"))}}]}),r=n("5f5b"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},s=[],u="default",l={computed:{layout:function(){return(this.$route.meta.layout||u)+"-layout"}}},d=l,h=(n("5c0b"),n("2877")),f=Object(h["a"])(d,i,s,!1,null,null,null),p=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Header")],1),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Sidebar")],1),n("div",{staticClass:"app-main__outer"},[n("div",{staticClass:"app-main__inner"},[e._t("default")],2),n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("Footer")],1)],1),n("b-modal",{attrs:{id:"modal1",title:"Bootstrap-Vue"}},[n("p",{staticClass:"my-4"},[e._v("Hello from modal!")])]),n("b-modal",{attrs:{id:"modallg",size:"lg",title:"Large Modal"}},[e._v(" Hello Modal! ")]),n("b-modal",{attrs:{id:"modalsm",size:"sm",title:"Small Modal"}},[e._v(" Hello Modal! ")])],1)},m=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header header-shadow"},[n("div",{staticClass:"logo-src"}),n("div",{staticClass:"app-header__content"},[n("div",{staticClass:"app-header-left"},[n("SearchBox")],1),n("div",{staticClass:"app-header-right"},[n("UserArea")],1)]),n("div",{staticClass:"app-header__mobile-menu"},[n("div",[n("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),n("div",{staticClass:"app-header__menu"},[n("span",[n("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[n("div",{staticClass:"btn-icon-wrapper"},[n("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])}],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search-wrapper",class:{active:e.searchOpen}},[n("div",{staticClass:"input-holder"},[n("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"Type to search"}}),n("button",{staticClass:"search-icon",on:{click:function(t){e.searchOpen=!e.searchOpen}}},[n("span")])]),n("button",{staticClass:"close",on:{click:function(t){e.searchOpen=!e.searchOpen}}})])])},k=[],w={data:function(){return{searchOpen:!1}}},C=w,y=Object(h["a"])(C,v,k,!1,null,null,null),O=y.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex"},[a("div",{staticClass:"header-btn-lg pr-0"},[a("div",{staticClass:"widget-content p-0"},[a("div",{staticClass:"widget-content-wrapper"},[a("div",{staticClass:"widget-content-left"},[a("b-dropdown",{attrs:{"toggle-class":"p-0 mr-2","menu-class":"dropdown-menu-lg",variant:"link",right:""}},[a("span",{attrs:{slot:"button-content"},slot:"button-content"},[a("div",{staticClass:"icon-wrapper icon-wrapper-alt rounded-circle"},[a("img",{staticClass:"rounded-circle",attrs:{width:"42",src:n("360d"),alt:""}})])]),a("button",{staticClass:"dropdown-item",attrs:{type:"button",tabindex:"0"}},[e._v("Logout")])])],1),e._m(0),a("div",{staticClass:"widget-content-right header-user-info ml-3"},[a("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-shadow p-1",attrs:{title:"Tooltip Example",size:"sm",variant:"info"}},[a("font-awesome-icon",{staticClass:"mr-1 ml-1",attrs:{icon:"calendar-alt"}})],1)],1)])])])])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widget-content-left  ml-3 header-user-info"},[n("div",{staticClass:"widget-heading"},[e._v("Agung Suhendar")]),n("div",{staticClass:"widget-subheading"},[e._v("Data Collector")])])}],j=n("ecee"),D=n("c074"),E=n("ad3d");j["c"].add(D["a"],D["t"],D["K"],D["u"],D["B"],D["w"],D["D"],D["E"],D["C"],D["z"]);var P={components:{"font-awesome-icon":E["a"]},data:function(){return{}},methods:{}},B=P,H=Object(h["a"])(B,x,M,!1,null,null,null),S=H.exports;j["c"].add(D["A"]);var I={name:"Header",components:{SearchBox:O,UserArea:S,"font-awesome-icon":E["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},props:{},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},T=I,R=Object(h["a"])(T,A,g,!1,null,null,null),L=R.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-sidebar sidebar-shadow",on:{mouseover:function(t){return e.toggleSidebarHover("add","closed-sidebar-open")},mouseleave:function(t){return e.toggleSidebarHover("remove","closed-sidebar-open")}}},[a("div",{staticClass:"app-header__logo"},[a("img",{attrs:{src:n("fd89")}}),a("div",{staticClass:"header__pane ml-auto"},[a("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleBodyClass("closed-sidebar")}}},[e._m(0)])])]),a("div",{staticClass:"app-sidebar-content"},[e._m(1)],1)])},X=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"hamburger-box"},[n("span",{staticClass:"hamburger-inner"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VuePerfectScrollbar",{staticClass:"app-sidebar-scroll"},[n("sidebar-menu",{attrs:{showOneChild:"",menu:e.menu}})],1)}],F=n("4776"),N=n("9d63"),W=n.n(N),J={components:{SidebarMenu:F["SidebarMenu"],VuePerfectScrollbar:W.a},data:function(){return{isOpen:!1,sidebarActive:!1,menu:[{header:!0,title:"Collect Data"},{icon:"pe-7s-home",title:"Home",href:"/collect/home"},{title:"Common Camera",icon:"pe-7s-album",child:[{href:"/collect/common/list",title:"List Image"},{href:"/collect/common/add",title:"Add Data"}]},{title:"Image Fundus",icon:"pe-7s-helm",child:[{href:"/collect/fundus/list",title:"List Image"},{href:"/collect/fundus/add",title:"Add Data"}]},{header:!0,title:"Documentation"},{icon:"pe-7s-science",title:"Project Explanation",href:"/documentation/project"},{icon:"pe-7s-graph2",title:"Labelling Instruction",href:"/documentation/instruction"}],collapsed:!0,windowWidth:0}},props:{sidebarbg:String},methods:{toggleBodyClass:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleSidebarHover:function(e,t){var n=document.body;this.sidebarActive=!this.sidebarActive,this.windowWidth=document.documentElement.clientWidth,this.windowWidth>"992"&&("add"===e?n.classList.add(t):n.classList.remove(t))},getWindowWidth:function(){var e=document.body;this.windowWidth=document.documentElement.clientWidth,this.windowWidth<"1350"?e.classList.add("closed-sidebar","closed-sidebar-md"):e.classList.remove("closed-sidebar","closed-sidebar-md")}},mounted:function(){this.$nextTick((function(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()}))},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth)}},_=J,K=Object(h["a"])(_,Q,X,!1,null,null,null),V=K.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[n("div",{staticClass:"app-footer__inner text-center"})])}];j["c"].add(D["A"]);var U={name:"Footer",components:{}},q=U,Z=Object(h["a"])(q,G,z,!1,null,null,null),Y=Z.exports;j["c"].add(D["y"]);var $={name:"app",components:{Header:L,Sidebar:V,Footer:Y},methods:{}},ee=$,te=Object(h["a"])(ee,b,m,!1,null,null,null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container app-theme-white"},[e._t("default")],2)},ce=[],oe={name:"app",components:{},methods:{}},re=oe,ie=Object(h["a"])(re,ae,ce,!1,null,null,null),se=ie.exports;a["default"].config.productionTip=!1,a["default"].use(r["a"]),a["default"].component("default-layout",ne),a["default"].component("userpages-layout",se),new a["default"]({el:"#app",router:o,template:"<App/>",components:{App:p}})},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},fd89:function(e,t,n){e.exports=n.p+"img/eye1.aa082fc1.png"}});