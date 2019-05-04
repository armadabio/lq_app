(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-876ef238"],{"049a":function(e,t,a){"use strict";var n=a("be75"),r=a.n(n);r.a},"0f0d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"reactor-index"},[a("BaseHeader",{attrs:{"handle-icon-click":e.logout}}),a("div",{staticClass:"reactor-card-grid"},[a("div",{staticClass:"reactor-card-row"},[a("ReactorIndexCard",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"sensor-data":e.formatSensorData(e.sensorData,"Prime1"),"handle-click":e.handleCardClick,"reactor-title":"Prime1"}}),a("ReactorIndexCard",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"sensor-data":e.formatSensorData(e.sensorData,"MV1"),"handle-click":e.handleCardClick,"reactor-title":"MV1"}})],1),a("div",{staticClass:"reactor-card-row"},[a("ReactorIndexCard",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"sensor-data":e.formatSensorData(e.sensorData,"Prime2"),"handle-click":e.handleCardClick,"reactor-title":"Prime2"}}),a("ReactorIndexCard",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"sensor-data":e.formatSensorData(e.sensorData,"MV1"),"handle-click":e.handleCardClick,"reactor-title":"MV2"}})],1)])],1)},r=[],i=(a("96cf"),a("3b8d")),s=(a("c5f6"),a("cebc")),o=a("2f62"),c=a("9797"),l=a("e5ce"),d=a("4fa2"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BaseCard",{staticClass:"reactor-card",class:"reactor-card-"+e.reactorTitle},[a("div",{on:{click:e.onClick}},[a("div",{staticClass:"reactor-card-data"},[a("div",{staticClass:"reactor-card-temp"},[a("span",{staticClass:"reactor-card-temp-val"},[e._v(e._s(e.sensorData.temperature))]),a("span",{staticClass:"reactor-card-data-unit reactor-card-temp-unit"},[e._v("°C")])]),a("div",{staticClass:"divider-horizontal"}),a("div",{staticClass:"reactor-card-od"},[a("span",{staticClass:"reactor-card-od-val"},[e._v(e._s(e.sensorData.OD))]),a("span",{staticClass:"reactor-card-data-unit reactor-card-od-unit"},[e._v("OD")])])]),a("div",{staticClass:"reactor-card-title"},[e._v("\n      "+e._s(e.reactorTitle)+"\n    ")])])])},u=[],v=a("ff7d"),f={name:"ReactorIndexCard",components:{BaseCard:v["a"]},props:{sensorData:{type:Object,required:!0},reactorTitle:{type:String,required:!0},handleClick:{type:Function,default:function(){}}},methods:{onClick:function(){this.handleClick(this.reactorTitle)}}},m=f,h=(a("1fad"),a("2877")),C=Object(h["a"])(m,p,u,!1,null,"b649a1f4",null),_=C.exports,w=a("4845"),g={name:"ReactorIndex",components:{ReactorIndexCard:_,BaseHeader:w["a"]},computed:Object(s["a"])({},Object(o["e"])({sensorData:function(e){return e.sensors}}),{formatSensorData:function(){return function(e,t){var a=e[t],n=a.temperature,r=a.OD,i=Number(n),s=Number(r);if(isNaN(i)||isNaN(s))return{temperature:n,OD:r};var o=i.toFixed(1),c=s.toFixed(2);return{temperature:o,OD:c}}}}),methods:Object(s["a"])({},Object(o["d"])([c["o"]]),{handleCardClick:function(e){this.UPDATE_SELECTED_MODULE(e),this.$router.push("/controls")},logout:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["a"])(l["c"]);case 2:this.$router.push("/login");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},k=g,b=(a("9a8a"),a("269a")),x=a.n(b),y=a("3ccf"),E=Object(h["a"])(k,n,r,!1,null,"7f574455",null);t["default"]=E.exports;x()(E,{Ripple:y["a"]})},"0f1b":function(e,t,a){"use strict";var n=a("7578"),r=a.n(n);r.a},"1fad":function(e,t,a){"use strict";var n=a("42c2"),r=a.n(n);r.a},"269a":function(e,t){e.exports=function(e,t){var a="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var n in"function"===typeof e.exports&&(a.directives=e.exports.options.directives),a.directives=a.directives||{},t)a.directives[n]=a.directives[n]||t[n]}},"28f2":function(e,t,a){},"3ccf":function(e,t,a){"use strict";var n=a("d9bd");function r(e,t){e.style["transform"]=t,e.style["webkitTransform"]=t}function i(e,t){e.style["opacity"]=t.toString()}function s(e){return"TouchEvent"===e.constructor.name}var o=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.getBoundingClientRect(),r=s(e)?e.touches[e.touches.length-1]:e,i=r.clientX-n.left,o=r.clientY-n.top,c=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,c=t.clientWidth/2,c=a.center?c:c+Math.sqrt(Math.pow(i-c,2)+Math.pow(o-c,2))/4):c=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var d=(t.clientWidth-2*c)/2+"px",p=(t.clientHeight-2*c)/2+"px",u=a.center?d:i-c+"px",v=a.center?p:o-c+"px";return{radius:c,scale:l,x:u,y:v,centerX:d,centerY:p}},c={show:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",a.class&&(n.className+=" "+a.class);var c=o(e,t,a),l=c.radius,d=c.scale,p=c.x,u=c.y,v=c.centerX,f=c.centerY,m=2*l+"px";s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(n);var h=window.getComputedStyle(t);"static"===h.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),r(s,"translate("+p+", "+u+") scale3d("+d+","+d+","+d+")"),i(s,0),s.dataset.activated=String(performance.now()),setTimeout(function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),r(s,"translate("+v+", "+f+") scale3d(1,1,1)"),i(s,.25)},0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var a=t[t.length-1];if(!a.dataset.isHiding){a.dataset.isHiding="true";var n=performance.now()-Number(a.dataset.activated),r=Math.max(250-n,0);setTimeout(function(){a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),i(a,0),setTimeout(function(){var t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode&&e.removeChild(a.parentNode)},300)},r)}}}}};function l(e){return"undefined"===typeof e||!!e}function d(e){var t={},a=e.currentTarget;a&&!a._ripple.touched&&(s(e)&&(a._ripple.touched=!0),t.center=a._ripple.centered,a._ripple.class&&(t.class=a._ripple.class),c.show(e,a,t))}function p(e){var t=e.currentTarget;t&&(window.setTimeout(function(){t._ripple.touched=!1}),c.hide(t))}function u(e,t,a){var n=l(t.value);n||c.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=n;var r=t.value||{};r.center&&(e._ripple.centered=!0),r.class&&(e._ripple.class=t.value.class),r.circle&&(e._ripple.circle=r.circle),n&&!a?(e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",d),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("dragstart",p,{passive:!0})):!n&&a&&v(e)}function v(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",p),e.removeEventListener("touchend",p),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("dragstart",p)}function f(e,t,a){u(e,t,!1),a.context&&a.context.$nextTick(function(){if("inline"===window.getComputedStyle(e).display){var t=a.fnOptions?[a.fnOptions,a.context]:[a.componentInstance];n["c"].apply(void 0,["v-ripple can only be used on block-level elements"].concat(t))}})}function m(e){delete e._ripple,v(e)}function h(e,t){if(t.value!==t.oldValue){var a=l(t.oldValue);u(e,t,a)}}t["a"]={bind:f,unbind:m,update:h}},"42c2":function(e,t,a){},4845:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[e.backIcon?n("span",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"icon-back",on:{click:e.handleIconClick}}):e._e(),n("img",{staticClass:"header-logo",attrs:{src:a("c85a"),alt:"company logo"},on:{click:e.handleIconClick}}),n("BaseDropdown",{staticClass:"header-dropdown"},[n("a",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{href:"#"},on:{click:e.sayHi}},[e._v("Link 1")]),n("a",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{href:"#"},on:{click:e.sayHi}},[e._v("Link 2")]),n("a",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{href:"#"},on:{click:e.sayHi}},[e._v("Link 3")])])],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dropdown",staticStyle:{float:"right"}},[a("span",{staticClass:"dropbtn icon-dots",on:{click:e.toggle}}),a("BaseCard",{ref:"dropdownContent",staticClass:"dropdown-content",class:[e.open?"is-open":"is-closing"],on:{click:e.contentClicked}},[e._t("default")],2)],1)},s=[],o=a("ff7d"),c={name:"BaseDropdown",components:{BaseCard:o["a"]},data:function(){return{open:!1}},methods:{contentClicked:function(){console.log("contentClicked")},toggle:function(){this.open?this.open=!1:(this.open=!0,window.addEventListener("click",this.closeMenuOnWindowClick,!0))},closeMenuOnWindowClick:function(e){var t=this;this.open&&this.$refs.dropdownContent&&e.target.parentNode!==this.$refs.dropdownContent.$el?(console.log("hello"),this.open=!1,window.removeEventListener("click",this.closeMenuOnWindowClick),e.stopPropagation()):this.open&&this.$refs.dropdownContent&&e.target.parentNode===this.$refs.dropdownContent.$el&&(console.log(e.target),setTimeout(function(){t.open=!1},400))}}},l=c,d=(a("5e8a"),a("2877")),p=Object(d["a"])(l,i,s,!1,null,null,null),u=p.exports,v={name:"BaseHeader",components:{BaseDropdown:u},props:{title:{type:String,default:""},backIcon:{type:Boolean,default:!1},handleIconClick:{type:Function,default:function(){}}},methods:{sayHi:function(){console.log("doing!")}}},f=v,m=(a("0f1b"),a("269a")),h=a.n(m),C=a("3ccf"),_=Object(d["a"])(f,n,r,!1,null,"fd8ae90a",null);t["a"]=_.exports;h()(_,{Ripple:C["a"]})},"5e8a":function(e,t,a){"use strict";var n=a("28f2"),r=a.n(n);r.a},7578:function(e,t,a){},"8d46":function(e,t,a){},"9a8a":function(e,t,a){"use strict";var n=a("8d46"),r=a.n(n);r.a},be75:function(e,t,a){},c85a:function(e,t,a){e.exports=a.p+"img/logo-small.d8432a97.png"},ff7d:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[e._t("default")],2)},r=[],i={name:"BaseCard"},s=i,o=(a("049a"),a("2877")),c=Object(o["a"])(s,n,r,!1,null,"0f391e53",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-876ef238.07487051.js.map