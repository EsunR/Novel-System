(function(e){function t(t){for(var o,i,s=t[0],l=t[1],u=t[2],d=0,m=[];d<s.length;d++)i=s[d],n[i]&&m.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==n[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={login:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;a.push([1,"chunk-vendors"]),r()})({"0156":function(e,t,r){},1:function(e,t,r){e.exports=r("9eec")},4070:function(e,t,r){},4430:function(e,t,r){"use strict";var o,n,a=r("5d10"),i=a["a"],s=r("2877"),l=Object(s["a"])(i,o,n,!1,null,null,null);t["a"]=l.exports},"5d10":function(e,t,r){"use strict";(function(e){function r(){e(".card-img-top").each(function(){""==e(this).attr("src")&&(e(this).css("display","none"),e(this).prev().css("display","block"))})}var o="http://47.95.196.58:8091/api/nov/",n="./login.html",a="./index.html";t["a"]={renderNoCover:r,login_location:n,index_location:a,host:o}}).call(this,r("1157"))},"653a":function(e,t,r){"use strict";var o=r("4070"),n=r.n(o);n.a},"806a":function(e,t,r){"use strict";var o=r("86fb"),n=r.n(o);n.a},"86fb":function(e,t,r){},"9eec":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var o=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"box"}},[r("div",{attrs:{id:"main"}},[r("router-view")],1)])},a=[],i={},s=i,l=(r("aeca"),r("653a"),r("2877")),u=Object(l["a"])(s,n,a,!1,null,"37895a53",null),c=u.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("div",{staticClass:"title"},[e._v("用户登录 | LOGIN")]),r("hr"),r("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules,"label-width":"50px","label-position":"left"}},[r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account",t)},expression:"loginForm.account"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),r("el-checkbox",{staticClass:"rememberPwd",model:{value:e.rememberPwd,callback:function(t){e.rememberPwd=t},expression:"rememberPwd"}},[e._v("记住密码")]),r("el-form-item",{staticClass:"btn_box"},[r("el-button",{attrs:{type:"primary"},on:{click:e.loginClick}},[e._v("登 录")]),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.$router.push("/register")}}},[e._v("注 册")]),r("el-button",{attrs:{type:"info"},on:{click:e.touristLogin}},[e._v("游客登录")])],1)],1)],1)},p=[],f=(r("28a5"),{data:function(){return{loginForm:{account:"",password:""},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},rememberPwd:!0}},methods:{loginClick:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;console.log(e.loginForm),e.axios.post("/login",e.loginForm).then(function(t){1==t.data.code?(e.$message("登录成功，正在跳转"),console.log(t.data),e.rememberPwd?(e.setCookie("account",e.loginForm.account),e.setCookie("password",e.loginForm.password)):(e.setCookie("account",""),e.setCookie("password","")),localStorage.setItem("token",t.data.data.token),setTimeout(function(){window.location.href=e.COMMON.index_location},500)):e.$message("账号或密码错误")}).catch(function(){e.$message("账号不存在")})})},setCookie:function(e,t,r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3);var n="expires="+o.toGMTString();document.cookie=e+"="+t+"; "+n},getCookie:function(e){for(var t=e+"=",r=document.cookie.split(";"),o=0;o<r.length;o++){var n=r[o].trim();if(0==n.indexOf(t))return n.substring(t.length,n.length)}return""},touristLogin:function(){localStorage.setItem("userLogin","1"),window.location.href=this.COMMON.index_location}},mounted:function(){this.loginForm.account=this.getCookie("account"),this.loginForm.password=this.getCookie("password")}}),g=f,b=(r("c214"),Object(l["a"])(g,m,p,!1,null,"9036048a",null)),v=b.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("div",{staticClass:"title"},[e._v("用户注册 | REGISTER")]),r("hr"),r("el-form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.rules,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"账号",prop:"account"}},[r("el-input",{model:{value:e.registerForm.account,callback:function(t){e.$set(e.registerForm,"account",t)},expression:"registerForm.account"}})],1),r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{model:{value:e.registerForm.name,callback:function(t){e.$set(e.registerForm,"name",t)},expression:"registerForm.name"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),r("el-form-item",{attrs:{label:"重复密码",prop:"password2",required:""}},[r("el-input",{attrs:{type:"password"},model:{value:e.registerForm.password2,callback:function(t){e.$set(e.registerForm,"password2",t)},expression:"registerForm.password2"}})],1),r("el-form-item",{attrs:{label:"选择喜好",prop:"like",required:""}},[r("el-select",{staticStyle:{width:"100%"},attrs:{"multiple-limit":3,multiple:"",placeholder:"请选择三个喜好"},model:{value:e.registerForm.like,callback:function(t){e.$set(e.registerForm,"like",t)},expression:"registerForm.like"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",{attrs:{label:"签约",prop:"editor"}},[r("el-radio",{attrs:{label:"0"},model:{value:e.registerForm.editor,callback:function(t){e.$set(e.registerForm,"editor",t)},expression:"registerForm.editor"}},[e._v("普通用户")]),r("el-radio",{attrs:{label:"1"},model:{value:e.registerForm.editor,callback:function(t){e.$set(e.registerForm,"editor",t)},expression:"registerForm.editor"}},[e._v("签约为作者")])],1),r("el-form-item",{staticClass:"btn_box"},[r("el-button",{attrs:{type:"primary"},on:{click:e.registerClick}},[e._v("注 册")]),r("el-button",{attrs:{type:"info"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("返回登录")])],1)],1)],1)},w=[],F=(r("7f7f"),{data:function(){var e=this,t=function(t,r,o){""===r?o(new Error("请再次输入密码")):r!==e.registerForm.password?o(new Error("两次输入密码不一致!")):o()},r=function(t,r,o){3!=e.registerForm.like.length?o(new Error("请选择三个喜好")):o()};return{registerForm:{account:"",name:"",password:"",password2:"",editor:"0",like:[]},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],password2:[{validator:t,trigger:["blur","change"]}],editor:[{required:!0,message:"请选择",trigger:"blur"}],like:[{required:!0,message:"请选择",trigger:["blur","change"]},{validator:r,trigger:["blur","change"]}]},options:[{value:"玄幻",label:"玄幻"},{value:"奇幻",label:"奇幻"},{value:"武侠",label:"武侠"},{value:"仙侠",label:"仙侠"},{value:"都市",label:"都市"},{value:"现实",label:"现实"},{value:"爱情",label:"爱情"},{value:"游戏",label:"游戏"},{value:"科幻",label:"科幻"}]}},methods:{registerClick:function(){var e=this;this.$refs.registerForm.validate(function(t){if(!t)return!1;var r={account:e.registerForm.account,password:e.registerForm.password,name:e.registerForm.name,editor:e.registerForm.editor,like:e.registerForm.like};console.log(r),e.axios.post("/register",r).then(function(t){1==t.data.code?(e.$message("注册成功，请登录"),e.$router.push("/login")):e.$message("该用户名已被占用，注册失败")}).catch(function(){e.$message("无法连接服务器")})})}}}),k=F,x=(r("806a"),Object(l["a"])(k,h,w,!1,null,"97f56c96",null)),y=x.exports;o["default"].use(d["a"]);var _=new d["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:v},{path:"/register",name:"register",component:y}]}),$=_,C=(r("0fae"),r("5c96"));C["Message"].install=function(e){e.prototype.$message=C["Message"]},o["default"].use(C["Button"]),o["default"].use(C["Input"]),o["default"].use(C["FormItem"]),o["default"].use(C["Form"]),o["default"].use(C["Select"]),o["default"].use(C["Option"]),o["default"].use(C["Row"]),o["default"].use(C["Col"]),o["default"].use(C["Message"]),o["default"].use(C["Radio"]),o["default"].use(C["Checkbox"]);var O=r("bc3a"),M=r.n(O),j=r("a7fe"),P=r.n(j),S=r("4430");r("4989"),r("ab8b");o["default"].prototype.COMMON=S["a"],o["default"].use(P.a,M.a),M.a.defaults.baseURL=S["a"].host,new o["default"]({router:$,render:function(e){return e(c)}}).$mount("#app"),o["default"].config.productionTip=!1},aeca:function(e,t,r){"use strict";var o=r("0156"),n=r.n(o);n.a},c214:function(e,t,r){"use strict";var o=r("f0a4"),n=r.n(o);n.a},f0a4:function(e,t,r){}});