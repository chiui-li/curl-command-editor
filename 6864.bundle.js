(self.webpackChunkcurl_fish=self.webpackChunkcurl_fish||[]).push([[6864],{12468:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var r=n(74130),a=n(96985),l=n(41594),o=n.n(l),i=n(51749),c=n(32697),u=n(31891);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=o().useState;function d(e){var t,n,a=e.optionUsage,l=void 0===a?{}:a,o=e.name,i=(t=m(l["-"]||l["--"])||l["--no-"],n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],c=[l["-"],l["--"],l["--no-"]].filter((function(e){return e})),u=(0,r.A)();return{type:i,segmentedOptions:c,name:o,removeModel:u.removeModel,optionUsage:l,formIns:u.formIns,copyModel:u.copyModel}}var f=n(81392),v=n(65765),y=n(55140);const p=function(e){var t=e.children,n=void 0===t?null:t,r=e.optionModel,a=void 0===r?{}:r,l=e.extra,c=void 0===l?null:l,u=e.options,s=void 0===u?[]:u,m=e.disabled,p=void 0!==m&&m,h=e.onChange,g=d(a),A=g.name,E=g.segmentedOptions,b=void 0===E?[]:E,S=g.removeModel,k=g.copyModel,w=(!!A||!p)&&o().createElement(o().Fragment,null,o().createElement(v.A,{hidden:p,onClick:function(){S(A)}}),o().createElement(y.A,{hidden:p,onClick:function(){k(A)}}));return o().createElement("div",{className:"option-container"},o().createElement("div",{className:"option-card"},o().createElement("div",{style:{marginBottom:8,placeItems:"center",display:"flex",gap:8}},o().createElement(i.A.Item,{noStyle:!0,name:A?[A,0]:void 0,initialValue:null==b?void 0:b[0]},o().createElement(f.A,{size:"small",onChange:h,options:b.concat(s)})),w,o().createElement("div",{style:{marginLeft:"auto"}},c)),n))};var h=["GET","POST","PUT","DELETE","PATCH","HEAD","OPTIONS"].map((function(e){return{label:e,value:"".concat(e)}}));function g(e){var t,n=e.optionModel,r=d(n).name;return o().createElement(p,{optionModel:n},o().createElement("div",{style:{display:"flex",gap:8}},o().createElement(i.A.Item,{valuePropName:"checked",name:[r,1],initialValue:!0},o().createElement(c.A,null)),o().createElement(i.A.Item,{name:[r,2],style:{flex:2}},o().createElement(u.A,{options:h,style:{width:"100%"},variant:"filled",placeholder:null===(t=n.optionUsage)||void 0===t?void 0:t.value}))))}var A=n(37457);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var b=[["Content-Type","指定请求体的媒体类型",["*","application/json","application/x-www-form-urlencoded"]],["Accept","指定客户端能够接收的内容类型",["*","text/html","application/json","*/*"]],["Accept-Charset","指定客户端能够接收的字符集",["*","utf-8","utf-16","utf-32","GBK"]],["Accept-Encoding","指定客户端能够接收的内容编码",["*","gzip","deflate","br"]],["Accept-Language","指定客户端能够接收的语言",["*","en-US","zh-CN"]],["Authorization","用于提供认证信息",["Bearer <token>","Basic <credentials>"]],["Cache-Control","指定请求和响应遵循的缓存机制",["no-cache","max-age=3600"]],["Connection","指定客户端与服务器之间的连接类型",["keep-alive","close"]],["Content-Length","指定请求体的长度（字节）",["1234"]],["Cookie","包含客户端发送的Cookie信息",["sessionId=abc123; userId=12345"]],["Host","指定请求的目标服务器和端口",["www.example.com:8080"]],["If-Modified-Since","指定资源最后修改时间，用于条件请求",["Wed, 21 Oct 2022 07:28:00 GMT"]],["If-None-Match","指定资源的ETag，用于条件请求",['"abc123"']],["Origin","指定请求的来源",["https://www.example.com"]],["Referer","指定请求的来源URL",["https://www.example.com/previous-page"]],["User-Agent","指定客户端的用户代理信息",["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"]],["X-Requested-With","指定请求的类型（通常用于AJAX请求）",["XMLHttpRequest"]]],S=b.map((function(e){return{label:e[0]+"(".concat(e[1],")"),value:e[0]}})),k=b.reduce((function(e,t){var n,r,a=(r=3,function(e){if(Array.isArray(e))return e}(n=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],o=a[2],i=void 0===o?[]:o;return e[l]=(i||[]).map((function(e){return{label:e,value:e}})),e}),{}),w=n(80102);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function C(e){var t=e.optionModel,n=d(t).name;return o().createElement(p,{optionModel:t},o().createElement("div",{style:{display:"flex",gap:8}},o().createElement(i.A.Item,{valuePropName:"checked",name:[n,1],initialValue:!0},o().createElement(c.A,null)),o().createElement(i.A.Item,{style:{flex:2},name:[n,2]},o().createElement(M,null))))}function M(e){var t,n,r=e.value,a=void 0===r?"":r,l=e.onChange,i=(t=a.split(w.vA),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],u=i[1];return o().createElement("div",{style:{display:"flex",gap:8}},o().createElement(A.A,{variant:"filled",style:{width:"30%"},onChange:function(e){var t=a.split(w.vA);t[0]=e||"",null==l||l(t.join(": "))},popupMatchSelectWidth:500,options:S.filter((function(e){var t;return null===(t=e.label)||void 0===t?void 0:t.toLowerCase().includes(c)})),allowClear:!0,value:c,backfill:!0}),o().createElement(A.A,{style:{width:"70%"},backfill:!0,variant:"filled",allowClear:!0,onChange:function(e){var t=a.split(w.vA);t[1]=e,null==l||l(t.join(": "))},options:k[c||""]||[],value:u}))}var I=n(42702),x=n(38011),O=n(58807);O.wG.config({monaco:x});const T=function(e){return o().createElement(O.Ay,e)};function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var V=o().useState;function D(e){var t,n,r=e.optionModel,a=d(r).name,l=(t=V(w.mN[0].value),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],s=l[1];return o().createElement(p,{optionModel:r,extra:o().createElement(f.A,{size:"small",value:u,onChange:s,options:w.mN})},o().createElement(I.A,null,o().createElement(i.A.Item,{valuePropName:"checked",name:[a,1],initialValue:!0},o().createElement(c.A,null))),o().createElement(i.A.Item,{style:{marginTop:8},initialValue:w.nf,name:[a,2]},o().createElement(T,{language:u,height:200,options:{tabSize:2,fontSize:16,matchBrackets:"never"}})))}var N=n(79365);function P(e){var t=e.optionModel,n=d(t).name;return o().createElement(p,{optionModel:t},o().createElement(i.A.Item,{initialValue:!0,valuePropName:"checked",name:[n,1]},o().createElement(c.A,null)),o().createElement(i.A.Item,{initialValue:"",hidden:!0,name:[n,2]},o().createElement(N.A,{variant:"filled"})))}var R=n(9694),F=n(1560),L=n(42761),W=n(36449);function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||z(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var B=o().useCallback,G=o().useState;function $(e){var t=e.optionModel,n=H(G([]),2),r=n[0],l=n[1],u=d(t),s=u.name,m=u.formIns,f=H(G(!1),2),v=f[0],y=f[1],h=[s,2],g=[s,3],E=[s,4],b=B((0,a.sg)(k,250),[]),S=B((0,a.sg)((function(e){var t;null==m||m.setFieldValue(g,(null===(t=e.match(/^[^?]+/))||void 0===t?void 0:t[0])||e)}),250),[]);return o().createElement(p,{options:["hide"],optionModel:t},o().createElement("div",{style:{display:"flex",gap:8}},o().createElement(i.A.Item,{valuePropName:"checked",name:[s,1],initialValue:!0},o().createElement(c.A,null)),o().createElement(i.A.Item,{initialValue:"http://localhost:8000/path/to?foo=bar&hello=world",name:h,style:{flexGrow:2},hidden:v},o().createElement(A.A,{onChange:S,options:r,style:{width:"100%"},variant:"filled",onSearch:function(e){return l(K(e))}})),o().createElement(i.A.Item,{name:g,style:{flexGrow:3},hidden:!v,shouldUpdate:!0},o().createElement(A.A,{options:r,style:{width:"100%"},variant:"filled",onChange:b,onSearch:function(e){return l(K(e))}})),v?o().createElement(F.A,{onClick:function(){k(),y(!1)},style:{cursor:"pointer"}}):o().createElement(L.A,{onClick:function(){var e=null==m?void 0:m.getFieldValue(h);try{var t,n=new URL(e).searchParams.entries(),r=[],a=function(e){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=z(e))){t&&(e=t);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,a=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw a}}}}(n);try{for(a.s();!(t=a.n()).done;){var l=t.value;r.push({key:l[0],value:l[1],checked:!0})}}catch(e){a.e(e)}finally{a.f()}null==m||m.setFieldValue(E,r),null==m||m.setFieldValue(g,e.replace(/\?.*/,""))}catch(e){console.error("some error in URLinput")}y(!0)},style:{cursor:"pointer"}})),v&&o().createElement(i.A.Item,{style:{marginTop:8,height:"auto"}},o().createElement(i.A.List,{name:E},(function(e,t){var n=o().createElement("div",{style:{textAlign:"right"}},o().createElement(R.Ay,{onClick:function(){t.add({},e.length)},size:"small",style:{marginRight:8,width:140,height:32},color:"cyan",variant:"solid"},"add url param"),o().createElement(W.A,{style:{visibility:"hidden"}}));return e.length?o().createElement("div",{style:{display:"flex",gap:8,flexDirection:"column"}},e.map((function(e){return o().createElement("div",{key:e.name,style:{display:"flex",gap:8,flexDirection:"row",height:32}},o().createElement(i.A.Item,{initialValue:!0,valuePropName:"checked",name:[e.name,"checked"]},o().createElement(c.A,{onChange:k})),o().createElement(i.A.Item,{style:{flex:2},name:[e.name,"key"]},o().createElement(N.A,{variant:"filled",onChange:k,placeholder:"key"})),o().createElement(i.A.Item,{style:{flex:2},name:[e.name,"value"]},o().createElement(N.A,{variant:"filled",onChange:k,placeholder:"value"})),o().createElement(i.A.Item,null,o().createElement(W.A,{onClick:function(){t.remove(e.name),k()}})))})),n):n}))));function k(){var e=(0,a.VG)((null==m?void 0:m.getFieldValue(E))||[]);null==m||m.setFieldValue(h,((null==m?void 0:m.getFieldValue(g))||"")+"".concat(e.length?"?":"").concat(e))}}function K(e){return(0,a.J1)(e).map((function(e){return{label:e,value:e}}))}function X(e){var t=e.optionModel,n=d(t),r=n.name,a=n.optionUsage;return o().createElement(p,{optionModel:t},o().createElement("div",{style:{display:"flex",gap:8}},o().createElement(i.A.Item,{valuePropName:"checked",name:[r,1],initialValue:!0},o().createElement(c.A,null)),o().createElement(i.A.Item,{name:[r,2],style:{flex:2}},o().createElement(N.A,{variant:"filled",placeholder:a.value}))))}var q=n(10230),J=n(56914),Q=n(31307),Y=n(25262),Z=o().useRef;const ee=o().memo((function(e){var t=e.open,n=void 0!==t&&t,l=e.setOpen,i=(0,r.A)(),c=i.setModel,u=i.formIns,s=Z(Y.N);return o().createElement(Q.A,{onClose:function(){return null==l?void 0:l(!1)},open:n,width:800,title:"copy your cURL command in editor and parse",styles:{body:{padding:4}},extra:o().createElement(R.Ay,{size:"small",variant:"solid",onClick:function(){var e,t,n,r;e=s.current,n=(t=(0,a.Ze)(e)).models,r=t.formVal,null==c||c(n),null==u||u.setFieldsValue(r),null==l||l(!1)},color:"cyan"},"parse")},o().createElement(T,{onChange:function(e){s.current=e||""},options:{fontSize:18},defaultValue:Y.N,height:"100%",language:"text"}))}));function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var re=o().useCallback,ae=o().useEffect,le=o().useState,oe=q.A.Text;function ie(){var e=(0,r.A)(),t=e.formIns,n=e.model,l=void 0===n?[]:n,c=te(le(""),2),u=c[0],s=c[1],m=i.A.useWatch([],t),d=te(le("curl"),2),f=d[0],v=d[1],y=re((0,a.sg)((function(){if(t){var e=l.reduce((function(e,n){return n.name&&(e[n.name]=t.getFieldValue(n.name)),e}),{});s("".concat((0,a.Wr)(e)))}}),300),[l,m]);ae((function(){y()}),[m,l]);var h=te(le(!1),2),g=h[0],A=h[1];return o().createElement(p,{disabled:!0,onChange:function(e){return v(e)},options:["curl"],extra:o().createElement(I.A,null,o().createElement(J.A,{color:"error"},"read-only"),o().createElement(oe,{copyable:{text:u}}),o().createElement(R.Ay,{color:"cyan",onClick:function(){A(!0)},variant:"solid",size:"small"},"parse cURL command"))},"curl"===f&&o().createElement(T,{options:{readOnly:!0,matchBrackets:"never",fontSize:16},height:200,language:"pla",value:u}),o().createElement(ee,{open:g,setOpen:A}))}var ce=n(47152),ue=n(16370);const se=o().memo((function(){var e=(0,r.A)().model,t=void 0===e?[]:e;return o().createElement(ce.A,{gutter:[8,8]},o().createElement(ue.A,{span:24},o().createElement(ie,null)),t.map((function(e){if(!e)return!1;switch((0,a.ut)(e)){case"METHOD_SELECT":return o().createElement(ue.A,{sm:8,lg:6,key:e.name},o().createElement(g,{optionModel:e}));case"REQUEST_HEADER":return o().createElement(ue.A,{sm:12,md:12,lg:12,key:e.name},o().createElement(C,{optionModel:e}));case"REQUEST_BODY_EDITOR":return o().createElement(ue.A,{span:24,key:e.name},o().createElement(D,{optionModel:e}));case"COMMON_CHECKED":return o().createElement(ue.A,{key:e.name,span:6},o().createElement(P,{optionModel:e}));case"URL_INPUT":return o().createElement(ue.A,{lg:12,md:12,sm:12,key:e.name},o().createElement($,{optionModel:e}));case"COMMON_INPUT":return o().createElement(ue.A,{md:12,sm:12,lg:6,key:e.name},o().createElement(X,{optionModel:e}));default:return!1}})))}),(function(){return!0}))},5890:(e,t,n)=>{var r={"./simpleWorker":45585,"./simpleWorker.js":45585};function a(e){return Promise.resolve().then((()=>{if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n(r[e])}))}a.keys=()=>Object.keys(r),a.id=5890,e.exports=a},9204:(e,t,n)=>{var r={"./editorBaseApi":[93059],"./editorBaseApi.js":[93059],"./editorSimpleWorker":[90735],"./editorSimpleWorker.js":[90735],"./editorWorker":[90304],"./editorWorker.js":[90304],"./editorWorkerHost":[96358],"./editorWorkerHost.js":[96358],"./findSectionHeaders":[99307],"./findSectionHeaders.js":[99307],"./getIconClasses":[78148],"./getIconClasses.js":[78148],"./languageFeatureDebounce":[12060],"./languageFeatureDebounce.js":[12060],"./languageFeatures":[52230],"./languageFeatures.js":[52230],"./languageFeaturesService":[81197],"./languageFeaturesService.js":[81197],"./languageService":[83930],"./languageService.js":[83930],"./languagesAssociations":[55996],"./languagesAssociations.js":[55996],"./languagesRegistry":[66995],"./languagesRegistry.js":[66995],"./markerDecorations":[80886],"./markerDecorations.js":[80886],"./markerDecorationsService":[90011],"./markerDecorationsService.js":[90011],"./model":[64830],"./model.js":[64830],"./modelService":[40931],"./modelService.js":[40931],"./resolverService":[37042],"./resolverService.js":[37042],"./semanticTokensDto":[19376],"./semanticTokensDto.js":[19376],"./semanticTokensProviderStyling":[9520],"./semanticTokensProviderStyling.js":[9520],"./semanticTokensStyling":[82891],"./semanticTokensStyling.js":[82891],"./semanticTokensStylingService":[38148],"./semanticTokensStylingService.js":[38148],"./textModelSync/textModelSync.impl":[75456],"./textModelSync/textModelSync.impl.js":[75456],"./textModelSync/textModelSync.protocol":[45628,5628],"./textModelSync/textModelSync.protocol.js":[45628,5628],"./textResourceConfiguration":[41504],"./textResourceConfiguration.js":[41504],"./treeSitterParserService":[35320],"./treeSitterParserService.js":[35320],"./treeViewsDnd":[2603],"./treeViewsDnd.js":[2603],"./treeViewsDndService":[26756],"./treeViewsDndService.js":[26756],"./unicodeTextModelHighlighter":[49887],"./unicodeTextModelHighlighter.js":[49887]};function a(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(a)))}a.keys=()=>Object.keys(r),a.id=9204,e.exports=a}}]);