(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)a=i[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d7fc5":"72bfa0b8","chunk-876ef238":"07487051","chunk-9de129c0":"d8a91096","chunk-c344efec":"d9aadd56"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-876ef238":1,"chunk-9de129c0":1,"chunk-c344efec":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d7fc5":"31d6cfe0","chunk-876ef238":"b1389ce4","chunk-9de129c0":"2122da80","chunk-c344efec":"d1855c1c"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41cb":function(e,t,n){"use strict";var r=n("2b0e"),a=n("8c4f");r["a"].use(a["a"]),t["a"]=new a["a"]({mode:"history",base:"/vue/",routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-9de129c0").then(n.bind(null,"a55b"))}},{path:"/controls",name:"reactorControls",component:function(){return n.e("chunk-c344efec").then(n.bind(null,"f721"))}},{path:"/",name:"index",component:function(){return n.e("chunk-876ef238").then(n.bind(null,"0f0d"))}},{path:"/test",name:"test",component:function(){return n.e("chunk-2d0d7fc5").then(n.bind(null,"78c1"))}},{path:"*",name:"reroute",component:function(){return n.e("chunk-9de129c0").then(n.bind(null,"a55b"))}}]})},"4fa2":function(e,t,n){"use strict";var r=n("5176"),a=n.n(r),o=(n("96cf"),n("3b8d")),c=n("bc3a"),i=n.n(c),u=n("41cb");i.a.defaults.withCredentials=!0,i.a.defaults.headers.common.client="vue-client";var l=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,c,l=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:{},r=n&&n.method?n.method:"get",n=a()({},n,{url:t,method:r}),e.prev=3,e.next=6,i()(n);case 6:return o=e.sent,e.abrupt("return",o);case 10:if(e.prev=10,e.t0=e["catch"](3),!e.t0.response||401!==e.t0.response.status){e.next=16;break}u["a"].push("/login"),e.next=19;break;case 16:throw c="Please make sure the server is running",alert("".concat(e.t0,"\n").concat(c)),new Error(e.t0);case 19:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r,a,o,c,i=n("2b0e"),u=n("5132"),l=n.n(u),s=n("2f62"),d=n("a4bb"),m=n.n(d),f=(n("96cf"),n("3b8d")),v=n("bd86"),p=n("5176"),h=n.n(p),b=n("5e23"),g=n("41cb"),O=n("4fa2"),w=n("f499"),S=n.n(w),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("string"!==typeof e)throw new Error("prettyPrint expects the first argument to be a string");console.log(e,S()(t,null,2))},M=(n("ac6a"),function(e){var t=[];return"boolean"===typeof e?[]:(m()(e).forEach(function(n){var r=e[n];null!==r&&void 0!==r||t.push(n)}),t)}),T=function(e){if(e.length>0){var t=e.length>1?e.join(", "):e[0],n="The following keys had undefined values: ".concat(t);throw new Error(n)}},_=function(e,t){return function(n){var r=e(n);t(r)}},L=function(e){return function(t){var n=e.reactions,r=e.modules,a=n[t],o=a?a.module:null;return o?r[o]:{}}},H=function(e,t,n,r){var a=m()(e)[0],o=e[a].state,c=n(t)(a),i=c.moduleState,u=r(i,o),l=0===m()(c).length,s=0===m()(u).length;return console.log(" Current State "),console.log(i),console.log(" New State "),console.log(o),console.log(" State Diff "),console.log(u),l||s?[]:[{moduleName:c.mod_name,actuatorType:"Heater",newState:u.Heater}]},A=_(M,T),y=new b["b"].Entity("reactions"),P=new b["b"].Entity("modules",{reactions:[y]},{idAttribute:"mod_name"}),j=[P],C=n("e5ce"),k={Prime1:{mod_name:"Prime1",mod_active:!0,title:"Prime1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!1,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:"0"},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},MV1:{mod_name:"MV1",mod_active:!1,title:"MV1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!0,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:0},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},Prime2:{mod_name:"Prime1",mod_active:!0,title:"Prime1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!1,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:"0"},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},MV2:{mod_name:"MV1",mod_active:!1,title:"MV1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!0,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:0},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}}},x=n("9860"),D=n("9797"),U={modules:k,reactions:{}},I=(r={},Object(v["a"])(r,D["e"],function(e,t){e.modules=t}),Object(v["a"])(r,D["f"],function(e,t){e.reactions=t}),Object(v["a"])(r,D["i"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newState;e.modules[n].moduleState[r]=a}),Object(v["a"])(r,D["h"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newParams,o=a,c=o.level;a=c&&"number"===typeof c?h()({},a,{level:String(c)}):a;var i=e.modules[n].parameters,u=i[r];i[r]=h()({},u,a)}),Object(v["a"])(r,D["g"],function(e,t){var n=t.moduleName,r=t.actuatorType,a=t.newLimits,o=e.modules[n].limits,c=o[r];o[r]=h()({},c,a)}),r),N=function(e,t,n,r){return function(a,o){var c=a.commit,i=a.getters,u=i.selectedModuleName;o=h()({},o,{moduleName:u}),t(o),c(e,o);var l=o,s=l.actuatorType,d=i["".concat(s.toLowerCase(),"UpdatePayload")];t(d),n(r,{method:"POST",data:d})}},G=(a={},Object(v["a"])(a,x["b"],function(e,t){var n=e.commit,r=e.state,a=t.message,o=t.stateDiffGetter,c=t.moduleGetter,i=t.objectDiffGetter,u=t.mutationType,l=o(a,r,c,i);l.length>0&&(console.log(" Diff Detected, Committing State Change "),console.log(l[0]),n(u,l[0]))}),Object(v["a"])(a,D["a"],function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,c,i,u,l,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,Object(O["a"])(C["d"]);case 4:if(a=e.sent,o=a.data,c=o.message,"NOT_AUTHORIZED"!==c){e.next=10;break}return g["a"].push("/login"),e.abrupt("return");case 10:i=Object(b["a"])(o,j),u=i.entities,l=u.modules,s=u.reactions,r(D["e"],l),r(D["f"],s),r(D["d"]),n&&g["a"].push(n),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),console.log(e.t0);case 21:case"end":return e.stop()}},e,this,[[1,18]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(v["a"])(a,x["e"],N(D["i"],A,O["a"],C["f"])),Object(v["a"])(a,x["d"],N(D["h"],A,O["a"],C["f"])),Object(v["a"])(a,x["c"],N(D["g"],A,O["a"],C["f"])),a),V=function(e){return function(t){var n=t.reactions?m()(t.reactions):null,r=n&&n.length>0?n.filter(function(e){return t.reactions[e].active})[0]:null,a="production";if(!r){var o="No active reactions were found. Make sure that you are logged in and that a reaction is active";throw"production"!==a&&"test"!==a||e(o),new Error(o)}return r}},R=function(e,t){return"".concat(e,"-").concat(t,"-parameters")},F=function(e,t){return"".concat(e,"-").concat(t,"-limits")},W=function(e){return function(t,n){var r,a=n.activeModuleState,o=n.activeReactionId,c=n.selectedModuleName,i=n.activeModuleParams,u=n.activeModuleLimits,l=R(c,e),s=F(c,e),d=i[e],m=u[e],f=m?{"HIGH-value":m["HIGH-value"],"LOW-value":m["LOW-value"]}:{},p=(r={mid:c,allStates:a,activeId:o,activeSwitch:"ReactionActive-".concat(o),changes:[e]},Object(v["a"])(r,l,d),Object(v["a"])(r,s,f||{}),r);if("water"===e||"extraction"===e){var b=Object(v["a"])({},l,h()({},{"material-rate":"0","material-amount":"0",level:"100"}));p=h()({},p,b)}return p}},q=function(e,t){var n=t.activeModuleState,r=t.activeModuleParams,a=t.activeModuleLimits;return{powerOn:n.Heater,level:r.Heater.level,minTemp:a.Heater["LOW-value"],maxTemp:a.Heater["HIGH-value"]}},B=function(e,t){var n=t.activeModuleState,r=t.activeModuleParams;return{powerOn:n.Lamp,level:r.Lamp.level,start:r.Lamp.start,stop:r.Lamp.stop}},J=function(e,t){var n=t.selectedModuleName,r=e.modules[n];if(!r)throw console.log("Selected Module Name:",n,"\n\n"),E("Modules State:",e.modules),new Error("active module is undefined");return r},K={activeReactionId:V(window.alert),activeModule:J,activeModuleParams:function(e,t){var n=t.activeModule;return n.parameters},activeModuleState:function(e,t){var n=t.activeModule;return n.moduleState},activeModuleLimits:function(e,t){var n=t.activeModule;return n.limits},air:function(e,t){var n=t.activeModuleState;return n.Air},water:function(e,t){var n=t.activeModuleState;return n.water},extraction:function(e,t){var n=t.activeModuleState;return n.extraction},heater:q,lamp:B,airUpdatePayload:W("Air"),lampUpdatePayload:W("Lamp"),heaterUpdatePayload:W("Heater"),waterUpdatePayload:W("water"),extractionUpdatePayload:W("extraction")},Z={state:U,mutations:I,actions:G,getters:K},$={selectedModuleName:localStorage.selectedModuleName||"Prime1",isFetching:!0},Q=(o={},Object(v["a"])(o,D["o"],function(e,t){e.selectedModuleName=t,localStorage.selectedModuleName=t}),Object(v["a"])(o,D["c"],function(e){e.isFetching=!0}),Object(v["a"])(o,D["d"],function(e){e.isFetching=!1}),Object(v["a"])(o,D["b"],function(e){e.isFetching=!1}),o),z={selectedModuleName:function(e){return e.selectedModuleName}},X={state:$,mutations:Q,getters:z},Y=(n("c5f6"),{Prime1:{},MV1:{},Prime2:{},MV2:{}}),ee=function(e){var t={};return m()(e).forEach(function(e){t[e]={OD:"-",temperature:"-"}}),t},te=ee(Y),ne=Object(v["a"])({},D["n"],function(e,t){var n=t.message,r=n.module,a=n.OD,o=n.Temperature;Number(o)<0?console.log("Negative temperature reading detected for module ".concat(r,". Rejecting sensor update with temp reading ").concat(o)):(r="ZeePrime"===r?"Prime1":r,e[r].OD=a,e[r].temperature=o)}),re={},ae={},oe={state:te,mutations:ne,actions:re,getters:ae},ce={environmentControls:{selectedControl:localStorage.selectedEnvironmentControl||"Pump"}},ie=(c={},Object(v["a"])(c,D["j"],function(e){e.environmentControls.selectedControl="Air",localStorage.selectedEnvironmentControl="Air"}),Object(v["a"])(c,D["l"],function(e){e.environmentControls.selectedControl="Light",localStorage.selectedEnvironmentControl="Light"}),Object(v["a"])(c,D["k"],function(e){e.environmentControls.selectedControl="Heater",localStorage.selectedEnvironmentControl="Heater"}),Object(v["a"])(c,D["m"],function(e){e.environmentControls.selectedControl="Pump",localStorage.selectedEnvironmentControl="Pump"}),c),ue={selectedControlPanel:function(e){return e.environmentControls.selectedControl}},le={state:ce,mutations:ie,getters:ue};i["a"].use(s["a"]);var se=new s["a"].Store({modules:{entities:Z,modules:X,sensors:oe,ui:le}}),de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("transition",{attrs:{name:"router-animation","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("router-view")],1)],1)},me=[],fe=n("cebc"),ve=n("649d"),pe={name:"App",created:function(){this.FETCH_MODULES()},sockets:{module:function(e){console.log("Limit Crossover Detected"),console.log("incoming message",e),this.HANDLE_UPDATE_STATE_MESSAGE({message:e,moduleGetter:L,stateDiffGetter:H,objectDiffGetter:ve["diff"],mutationType:D["i"]})},datum:function(e){this.SOCKET_DATUM(e)}},methods:Object(fe["a"])({},Object(s["d"])([D["n"]]),Object(s["b"])([x["a"],x["b"]]))},he=pe,be=(n("5c0b"),n("2877")),ge=n("6544"),Oe=n.n(ge),we=n("7496"),Se=Object(be["a"])(he,de,me,!1,null,null,null),Ee=Se.exports;Oe()(Se,{VApp:we["a"]});var Me=n("bb71");n("da64");i["a"].use(Me["a"],{customProperties:!0,iconfont:"md"});n("d1e7"),n("c033"),n("b20f");console.log("location info:",window.location),i["a"].use(new l.a({connection:C["e"]})),i["a"].config.productionTip=!1,new i["a"]({router:g["a"],store:se,render:function(e){return e(Ee)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("6879"),a=n.n(r);a.a},6879:function(e,t,n){},9797:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"o",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"g",function(){return m}),n.d(t,"j",function(){return f}),n.d(t,"l",function(){return v}),n.d(t,"k",function(){return p}),n.d(t,"m",function(){return h}),n.d(t,"n",function(){return b});var r="FETCH_MODULES_FAILURE",a="FETCH_MODULES_SUCCESS",o="FETCH_MODULES_REQUEST",c="UPDATE_SELECTED_MODULE",i="FETCH_MODULES",u="LOAD_MODULES",l="LOAD_REACTIONS",s="MUTATE_MODULE_STATE",d="MUTATE_MODULE_PARAMS",m="MUTATE_MODULE_LIMITS",f="SET_AIR_ACTIVE",v="SET_LIGHT_ACTIVE",p="SET_HEATER_ACTIVE",h="SET_PUMP_ACTIVE",b="SOCKET_DATUM"},9860:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i});var r="HANDLE_UPDATE_STATE_MESSAGE",a="UPDATE_MODULE_STATE",o="UPDATE_MODULE_PARAMS",c="UPDATE_MODULE_LIMITS",i="FETCH_MODULES"},b20f:function(e,t,n){},c033:function(e,t,n){},e5ce:function(e,t,n){"use strict";n.d(t,"e",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return v}),n.d(t,"f",function(){return p});n("cadf"),n("551c"),n("f751"),n("097d");var r="production",a="25.81.56.126",o="8888",c="production"===r,i="http://".concat(a,":").concat(o),u="http://".concat(window.location.hostname,":").concat(o),l="".concat(i,"/data"),s="".concat(c?i:u,"/dimLamp"),d="production"===r?"":u;""!==d&&"test"!==r&&console.log("Http requests will be made to: ".concat(d));var m="".concat(d,"/users/login"),f="".concat(d,"/users/logout"),v="".concat(d,"/modules"),p=("".concat(d,"/environment"),"".concat(d,"/updateState"))}});
//# sourceMappingURL=app.4b7bdf9c.js.map