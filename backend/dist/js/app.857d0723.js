(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,m=[];s<i.length;s++)r=i[s],o[r]&&m.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2f3a8810":"a5222c51","chunk-39c02371":"dcf60c4d","chunk-76330466":"05457889","chunk-77b3c4ba":"46f481cf","chunk-291be31e":"b1225f5d","chunk-5f443b6e":"f41d2ae2","chunk-78eb4e80":"b1a31ad0"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2f3a8810":1,"chunk-39c02371":1,"chunk-76330466":1,"chunk-77b3c4ba":1,"chunk-291be31e":1,"chunk-5f443b6e":1,"chunk-78eb4e80":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2f3a8810":"84b3aecf","chunk-39c02371":"0ad6289a","chunk-76330466":"643307e0","chunk-77b3c4ba":"10c1110f","chunk-291be31e":"f9d4294b","chunk-5f443b6e":"f7442519","chunk-78eb4e80":"0aef9b35"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41cb":function(e,t,n){"use strict";var a=n("2b0e"),r=n("8c4f");a["a"].use(r["a"]),t["a"]=new r["a"]({mode:"history",base:"/vue/",routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-78eb4e80").then(n.bind(null,"a55b"))}},{path:"/controls",name:"reactorControls",component:function(){return n.e("chunk-39c02371").then(n.bind(null,"f721"))}},{path:"/",name:"index",component:function(){return n.e("chunk-2f3a8810").then(n.bind(null,"0f0d"))}},{path:"/runs",name:"runs",component:function(){return n.e("chunk-76330466").then(n.bind(null,"cda7"))}},{path:"/history",name:"history",component:function(){return Promise.all([n.e("chunk-77b3c4ba"),n.e("chunk-291be31e")]).then(n.bind(null,"e4bb"))}},{path:"/test",name:"test",component:function(){return Promise.all([n.e("chunk-77b3c4ba"),n.e("chunk-5f443b6e")]).then(n.bind(null,"78c1"))}},{path:"*",name:"reroute",component:function(){return n.e("chunk-78eb4e80").then(n.bind(null,"a55b"))}}]})},"4fa2":function(e,t,n){"use strict";var a=n("5176"),r=n.n(a),o=(n("96cf"),n("3b8d")),c=n("bc3a"),i=n.n(c),u=n("41cb");i.a.defaults.withCredentials=!0,i.a.defaults.headers.common.client="vue-client";var l=function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var n,a,o,c,l=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:{},a=n&&n.method?n.method:"get",n=r()({},n,{url:t,method:a}),e.prev=3,e.next=6,i()(n);case 6:return o=e.sent,e.abrupt("return",o);case 10:if(e.prev=10,e.t0=e["catch"](3),!e.t0.response||401!==e.t0.response.status){e.next=16;break}u["a"].push("/login"),e.next=19;break;case 16:throw c="Please make sure the server is running",alert("".concat(e.t0,"\n").concat(c)),new Error(e.t0);case 19:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();t["a"]=l},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a,r,o,c,i=n("2b0e"),u=n("5132"),l=n.n(u),s=n("2f62"),m=n("a4bb"),d=n.n(m),f=(n("96cf"),n("3b8d")),v=n("bd86"),p=n("5176"),h=n.n(p),b=n("5e23"),g=n("41cb"),S=n("4fa2"),O=n("f499"),w=n.n(O),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("string"!==typeof e)throw new Error("prettyPrint expects the first argument to be a string");console.log(e,w()(t,null,2))},M=(n("ac6a"),function(e){var t=[];return"boolean"===typeof e?[]:(d()(e).forEach(function(n){var a=e[n];null!==a&&void 0!==a||t.push(n)}),t)}),T=function(e){if(e.length>0){var t=e.length>1?e.join(", "):e[0],n="The following keys had undefined values: ".concat(t);throw new Error(n)}},_=function(e,t){return function(n){var a=e(n);t(a)}},L=function(e){return function(t){var n=e.reactions,a=e.modules,r=n[t],o=r?r.module:null;return o?a[o]:{}}},k=function(e,t,n,a){var r=d()(e)[0],o=e[r].state,c=n(t)(r),i=c.moduleState,u=a(i,o),l=0===d()(c).length,s=0===d()(u).length;return console.log(" Current State "),console.log(i),console.log(" New State "),console.log(o),console.log(" State Diff "),console.log(u),l||s?[]:[{moduleName:c.mod_name,actuatorType:"Heater",newState:u.Heater}]},A=_(M,T),H=new b["b"].Entity("reactions"),y=new b["b"].Entity("modules",{reactions:[H]},{idAttribute:"mod_name"}),P=[y],j=n("e5ce"),C={Prime1:{mod_name:"Prime1",mod_active:!0,title:"Prime1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!1,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:"0"},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},MV1:{mod_name:"MV1",mod_active:!1,title:"MV1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!0,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:0},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},Prime2:{mod_name:"Prime1",mod_active:!0,title:"Prime1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!1,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:"0"},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}},MV2:{mod_name:"MV1",mod_active:!1,title:"MV1",reactions:[],"reaction-id":0,moduleState:{SensorOnOff:!1,Air:!1,Lamp:!0,Heater:!1,water:!1,inoculum:!1,mixer:!1,extraction:!1,forward:!1,backwards:!1},parameters:{SensorOnOff:{ctrlValue:5},Air:{start:0,stop:0},Lamp:{start:0,stop:0,level:0},Heater:{start:0,stop:0,level:0},water:{"material-rate":0,"material-amount":0,level:0},inoculum:{"material-rate":0,"material-amount":0,level:0},mixer:{"material-rate":0,"material-amount":0,level:0},extraction:{"material-rate":0,"material-amount":0,level:0},forward:{level:0},backwards:{level:0}},limits:{Heater:{HIGH:!1,LOW:!0,Sensor:"temperature","HIGH-value":100,"LOW-value":0,active:!1}}}},x=n("9860"),D=n("9797"),U={modules:C,reactions:{}},I=(a={},Object(v["a"])(a,D["e"],function(e,t){e.modules=t}),Object(v["a"])(a,D["f"],function(e,t){e.reactions=t}),Object(v["a"])(a,D["i"],function(e,t){var n=t.moduleName,a=t.actuatorType,r=t.newState;e.modules[n].moduleState[a]=r}),Object(v["a"])(a,D["h"],function(e,t){var n=t.moduleName,a=t.actuatorType,r=t.newParams,o=r,c=o.level;r=c&&"number"===typeof c?h()({},r,{level:String(c)}):r;var i=e.modules[n].parameters,u=i[a];i[a]=h()({},u,r)}),Object(v["a"])(a,D["g"],function(e,t){var n=t.moduleName,a=t.actuatorType,r=t.newLimits,o=e.modules[n].limits,c=o[a];o[a]=h()({},c,r)}),a),N=function(e,t,n,a){return function(r,o){var c=r.commit,i=r.getters,u=i.selectedModuleName;o=h()({},o,{moduleName:u}),t(o),c(e,o);var l=o,s=l.actuatorType,m=i["".concat(s.toLowerCase(),"UpdatePayload")];t(m),n(a,{method:"POST",data:m})}},G=(r={},Object(v["a"])(r,x["b"],function(e,t){var n=e.commit,a=e.state,r=t.message,o=t.stateDiffGetter,c=t.moduleGetter,i=t.objectDiffGetter,u=t.mutationType,l=o(r,a,c,i);l.length>0&&(console.log(" Diff Detected, Committing State Change "),console.log(l[0]),n(u,l[0]))}),Object(v["a"])(r,D["a"],function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,c,i,u,l,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,e.prev=1,e.next=4,Object(S["a"])(j["c"]);case 4:if(r=e.sent,o=r.data,c=o.message,"NOT_AUTHORIZED"!==c){e.next=10;break}return g["a"].push("/login"),e.abrupt("return");case 10:i=Object(b["a"])(o,P),u=i.entities,l=u.modules,s=u.reactions,a(D["e"],l),a(D["f"],s),a(D["d"]),n&&g["a"].push(n),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](1),console.log(e.t0);case 21:case"end":return e.stop()}},e,this,[[1,18]])}));return function(t,n){return e.apply(this,arguments)}}()),Object(v["a"])(r,x["e"],N(D["i"],A,S["a"],j["e"])),Object(v["a"])(r,x["d"],N(D["h"],A,S["a"],j["e"])),Object(v["a"])(r,x["c"],N(D["g"],A,S["a"],j["e"])),r),V=function(e){return function(t){var n=t.reactions?d()(t.reactions):null,a=n&&n.length>0?n.filter(function(e){return t.reactions[e].active})[0]:null,r="production";if(!a){var o="No active reactions were found. Make sure that you are logged in and that a reaction is active";throw"production"!==r&&"test"!==r||e(o),new Error(o)}return a}},R=function(e,t){return"".concat(e,"-").concat(t,"-parameters")},F=function(e,t){return"".concat(e,"-").concat(t,"-limits")},W=function(e){return function(t,n){var a,r=n.activeModuleState,o=n.activeReactionId,c=n.selectedModuleName,i=n.activeModuleParams,u=n.activeModuleLimits,l=R(c,e),s=F(c,e),m=i[e],d=u[e],f=d?{"HIGH-value":d["HIGH-value"],"LOW-value":d["LOW-value"]}:{},p=(a={mid:c,allStates:r,activeId:o,activeSwitch:"ReactionActive-".concat(o),changes:[e]},Object(v["a"])(a,l,m),Object(v["a"])(a,s,f||{}),a);if("water"===e||"extraction"===e){var b=Object(v["a"])({},l,h()({},{"material-rate":"0","material-amount":"0",level:"100"}));p=h()({},p,b)}return p}},q=function(e,t){var n=t.activeModuleState,a=t.activeModuleParams,r=t.activeModuleLimits;return{powerOn:n.Heater,level:a.Heater.level,minTemp:r.Heater["LOW-value"],maxTemp:r.Heater["HIGH-value"]}},B=function(e,t){var n=t.activeModuleState,a=t.activeModuleParams;return{powerOn:n.Lamp,level:a.Lamp.level,start:a.Lamp.start,stop:a.Lamp.stop}},J=function(e,t){var n=t.selectedModuleName,a=e.modules[n];if(!a)throw console.log("Selected Module Name:",n,"\n\n"),E("Modules State:",e.modules),new Error("active module is undefined");return a},K={mv1State:function(e){return e.modules.MV1.moduleState},activeReactionId:V(window.alert),activeModule:J,activeModuleParams:function(e,t){var n=t.activeModule;return n.parameters},activeModuleState:function(e,t){var n=t.activeModule;return n.moduleState},activeModuleLimits:function(e,t){var n=t.activeModule;return n.limits},air:function(e,t){var n=t.activeModuleState;return n.Air},water:function(e,t){var n=t.activeModuleState;return n.water},extraction:function(e,t){var n=t.activeModuleState;return n.extraction},sensorState:function(e,t){var n=t.activeModuleState;return n.SensorOnOff},sensorParams:function(e,t){var n=t.activeModuleParams;return n.SensorOnOff},heater:q,lamp:B,airUpdatePayload:W("Air"),lampUpdatePayload:W("Lamp"),heaterUpdatePayload:W("Heater"),waterUpdatePayload:W("water"),extractionUpdatePayload:W("extraction")},Z={state:U,mutations:I,actions:G,getters:K},$={selectedModuleName:localStorage.selectedModuleName||"Prime1",isFetching:!0},Q=(o={},Object(v["a"])(o,D["o"],function(e,t){e.selectedModuleName=t,localStorage.selectedModuleName=t}),Object(v["a"])(o,D["c"],function(e){e.isFetching=!0}),Object(v["a"])(o,D["d"],function(e){e.isFetching=!1}),Object(v["a"])(o,D["b"],function(e){e.isFetching=!1}),o),z={selectedModuleName:function(e){return e.selectedModuleName},isFetching:function(e){return e.isFetching}},X={state:$,mutations:Q,getters:z},Y=(n("c5f6"),{Prime1:{},MV1:{},Prime2:{},MV2:{}}),ee=function(e){var t={};return d()(e).forEach(function(e){t[e]={OD:"-",temperature:"-"}}),t},te=ee(Y),ne=Object(v["a"])({},D["n"],function(e,t){var n=t.message,a=n.module,r=n.OD,o=n.Temperature;Number(o)<0?console.log("Negative temperature reading detected for module ".concat(a,". Rejecting sensor update with temp reading ").concat(o)):(a="ZeePrime"===a?"Prime1":a,e[a].OD=r,e[a].temperature=o)}),ae={},re={},oe={state:te,mutations:ne,actions:ae,getters:re},ce={environmentControls:{selectedControl:localStorage.selectedEnvironmentControl||"Sensor"}},ie=(c={},Object(v["a"])(c,D["m"],function(e){e.environmentControls.selectedControl="Sensor",localStorage.selectedEnvironmentControl="Sensor"}),Object(v["a"])(c,D["j"],function(e){e.environmentControls.selectedControl="Air",localStorage.selectedEnvironmentControl="Air"}),Object(v["a"])(c,D["l"],function(e){e.environmentControls.selectedControl="Light",localStorage.selectedEnvironmentControl="Light"}),Object(v["a"])(c,D["k"],function(e){e.environmentControls.selectedControl="Heater",localStorage.selectedEnvironmentControl="Heater"}),c),ue={selectedControlPanel:function(e){return e.environmentControls.selectedControl}},le={state:ce,mutations:ie,getters:ue};i["a"].use(s["a"]);var se=new s["a"].Store({modules:{entities:Z,modules:X,sensors:oe,ui:le}}),me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("transition",{attrs:{name:"router-animation","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("router-view")],1)],1)},de=[],fe=n("cebc"),ve=n("649d"),pe={name:"App",created:function(){this.FETCH_MODULES()},sockets:{module:function(e){if(console.log("Limit Crossover Detected"),console.log("incoming message",e),e.failSafe){var t=e.heaterState,n=e.moduleId;this.MUTATE_MODULE_STATE({moduleName:n,actuatorType:"Heater",newState:t})}this.HANDLE_UPDATE_STATE_MESSAGE({message:e,moduleGetter:L,stateDiffGetter:k,objectDiffGetter:ve["diff"],mutationType:D["i"]})},datum:function(e){this.SOCKET_DATUM(e)}},methods:Object(fe["a"])({},Object(s["d"])([D["n"],D["i"]]),Object(s["b"])([x["a"],x["b"]]))},he=pe,be=(n("5c0b"),n("2877")),ge=n("6544"),Se=n.n(ge),Oe=n("7496"),we=Object(be["a"])(he,me,de,!1,null,null,null),Ee=we.exports;Se()(we,{VApp:Oe["a"]});var Me=n("bb71");n("da64");i["a"].use(Me["a"],{customProperties:!0,iconfont:"md"});n("d1e7"),n("c033"),n("b20f");console.log("location info:",window.location),i["a"].use(new l.a({connection:j["d"]})),i["a"].config.productionTip=!1,new i["a"]({router:g["a"],store:se,render:function(e){return e(Ee)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("6879"),r=n.n(a);r.a},6879:function(e,t,n){},9797:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"o",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"h",function(){return m}),n.d(t,"g",function(){return d}),n.d(t,"m",function(){return f}),n.d(t,"j",function(){return v}),n.d(t,"l",function(){return p}),n.d(t,"k",function(){return h}),n.d(t,"n",function(){return b});var a="FETCH_MODULES_FAILURE",r="FETCH_MODULES_SUCCESS",o="FETCH_MODULES_REQUEST",c="UPDATE_SELECTED_MODULE",i="FETCH_MODULES",u="LOAD_MODULES",l="LOAD_REACTIONS",s="MUTATE_MODULE_STATE",m="MUTATE_MODULE_PARAMS",d="MUTATE_MODULE_LIMITS",f="SET_SENSORS_ACTIVE",v="SET_AIR_ACTIVE",p="SET_LIGHT_ACTIVE",h="SET_HEATER_ACTIVE",b="SOCKET_DATUM"},9860:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i});var a="HANDLE_UPDATE_STATE_MESSAGE",r="UPDATE_MODULE_STATE",o="UPDATE_MODULE_PARAMS",c="UPDATE_MODULE_LIMITS",i="FETCH_MODULES"},b20f:function(e,t,n){},c033:function(e,t,n){},e5ce:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"a",function(){return m}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return f}),n.d(t,"e",function(){return v});n("cadf"),n("551c"),n("f751"),n("097d");var a="production",r="8888",o="production"===a,c="http://".concat(window.location.hostname,":").concat(r),i="production"===a?"192.168.0.102":window.location.hostname,u="http://".concat(i,":").concat(r),l="".concat(u,"/data"),s=("".concat(o?u:c,"/dimLamp"),"production"===a?"":c);""!==s&&"test"!==a&&console.log("Http requests will be made to: ".concat(s));var m="".concat(s,"/users/login"),d="".concat(s,"/users/logout"),f="".concat(s,"/modules"),v=("".concat(s,"/environment"),"".concat(s,"/updateState"))}});
//# sourceMappingURL=app.857d0723.js.map