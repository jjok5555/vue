(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9871180f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"ae74855d"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"12e4":function(e,t,n){e.exports=n.p+"img/user_courseware.3f3b54a1.png"},"1a3a":function(e,t,n){e.exports=n.p+"img/md_courseware.e85ea619.png"},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router-view"})],1)},a=[],i={data:function(){return{}}},s=i,u=(n("7c55"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-container"},[r("el-container",[r("el-header",[r("div",[r("span",{staticStyle:{"margin-left":"40px"},attrs:{id:"kindergarten-name"}},[e._v(e._s(e.info.kindergartenName))]),r("span",{staticStyle:{"margin-left":"108px"},attrs:{id:"expiration-time"}},[e._v("到期时间："+e._s(e.info.expirationTime))])]),r("span",{staticStyle:{"margin-right":"40px"},attrs:{id:"version-code"}},[e._v("版本号："+e._s(e.info.version_code))])]),r("el-main",[r("div",{staticClass:"home"},[r("img",{attrs:{src:n("1a3a")},on:{click:e.goToMD}}),r("img",{attrs:{src:n("12e4")},on:{click:e.goToUser}})])]),r("el-footer",[r("span",[e._v("copyright ©南京明鼎教育科技有限公司")])])],1),r("el-dialog",{attrs:{visible:e.dialogVisible,"before-close":e.handleClose,title:"请扫码登录",width:"400px",height:"500px","show-close":"",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("div",{staticClass:"qrcode"},[r("img",{staticStyle:{width:"180px"},attrs:{src:n("12e4")}}),r("span",{staticStyle:{color:"#999999","font-size":"18px"}},[e._v("扫码登录"+e._s(e.hardcode))]),r("span",[e._v(e._s(e.hardcode))])])])],1)},p=[],h={name:"Home",data:function(){return{dialogVisible:!1,isWaite:!1,num:0,hardcode:null,timer:null,info:{kindergartenName:"园所名称",expirationTime:"20210910",version_code:"1.0"}}},watch:{isWaite:function(e){0==e&&(console.log("轮询结束"),clearInterval(this.timer))},dialogVisible:function(e){1==e?this.beginLogin():(console.log("轮询结束"),clearInterval(this.timer))}},components:{},methods:{goToUser:function(){this.$router.push({path:"/courseware",query:{bankType:2}})},goToMD:function(){this.$router.push({path:"/courseware",query:{bankType:1}})},beginLogin:function(){var e=this;this.isWaite=!0,this.num=0,this.timer=setInterval((function(){setTimeout(e.handleLogin(),0)}),1e3)},handleLogin:function(){this.num++,console.log("轮询进行中"+this.num)},handleClose:function(e){this.isWaite=!1,e()},CppCallJS:function(e){this.hardcode=e}}},m=h,g=(n("cccb"),Object(u["a"])(m,f,p,!1,null,null,null)),v=g.exports;r["default"].use(d["a"]);var b=[{path:"/",redirect:v},{path:"/home",name:"Home",component:v},{path:"/courseware",name:"Courseware",component:function(){return n.e("about").then(n.bind(null,"22dc"))}},{path:"/broadcast",name:"Broadcast",component:function(){return n.e("about").then(n.bind(null,"3821"))}}],y=new d["a"]({mode:"hash",base:"",routes:b}),w=y,_=n("2f62");r["default"].use(_["a"]);var x=new _["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("5c96"),C=n.n(T);n("0fae"),n("db4d"),n("499a");r["default"].use(C.a),r["default"].config.productionTip=!1,new r["default"]({router:w,store:x,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},cccb:function(e,t,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.b5056b2c.js.map