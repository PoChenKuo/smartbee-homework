(function(e){function t(t){for(var a,r,i=t[0],c=t[1],u=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02e1":function(e,t,n){"use strict";var a=n("3d30"),o=n.n(a);o.a},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"3d30":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("chat-room")],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-room"},[n("h3",{staticClass:"title"},[e._v(" Welcome chatroom "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{type:"text",placeholder:"type nickname here"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v("! ")]),n("chat-board",{attrs:{message:e.boardMessage}}),n("control-panel",{on:{send:e.sendMessage,sendImage:e.sendImage}}),e.loading?n("div",{staticClass:"loading"}):e._e()],1)},i=[],c=(n("99af"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("b0c0"),n("07ac"),n("ac1f"),n("466d"),n("159b"),n("59ca"));n("66ce"),n("588e");c["initializeApp"]({apiKey:"AIzaSyCq3stFNaY15r-2gKGFHK3wii4rY5qF1eU",authDomain:"smartbee-interviewproject-0001.firebaseapp.com",databaseURL:"https://smartbee-interviewproject-0001.firebaseio.com",projectId:"smartbee-interviewproject-0001",storageBucket:"smartbee-interviewproject-0001.appspot.com",messagingSenderId:"174452114697",appId:"1:174452114697:web:38c1e65a176a61a360bfd8",measurementId:"G-0JBN8V6R1M"});var u=c["database"](),l=c["storage"]();function d(){for(var e="0123456789ABCDEF",t="#",n=0;n<6;n++)t+=e[Math.floor(16*Math.random())];return t}var f=d;n("d3b7"),n("25f0"),n("5319");function p(){var e=Date.now();return"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}var m=p,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-board"},[n("div",{staticClass:"context"},e._l(e.message,(function(e){return n("chat-message",{key:e.ts,class:{self:e.self},attrs:{self:e.self,name:e.name,type:e.type,data:e.data,color:e.color}})})),1)])},h=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-message"},[n("div",{staticClass:"name"},[n("b",{style:{color:e.self?e.defaultColor:e.color}},[e._v(e._s(e.name))])]),n("div",{staticClass:"context",class:[e.type],style:{borderColor:e.borderOfMessage,backgroundColor:e.backgroundForMessage}},["text"===e.type?[e._v(e._s(e.data))]:"stick"===e.type?[n("div",{class:[e.type,e.data,"sticky-item"]})]:"photo"===e.type?[n("a",{attrs:{href:e.data,target:"_blank"}},[n("div",{class:[e.type],style:{backgroundImage:"url("+e.data+")"}})])]:e._e()],2)])},b=[],x={name:"ChatMessage",props:["name","type","data","color","self"],data:function(){return{defaultColor:"#121273"}},mounted:function(){},computed:{borderOfMessage:function(){return"text"===this.type?this.self?this.defaultColor:this.color:"transparent"},backgroundForMessage:function(){return"text"===this.type?this.self?this.defaultColor:this.color:""}}},y=x,k=(n("7740"),n("2877")),_=Object(k["a"])(y,v,b,!1,null,"4d671118",null),w=_.exports,C={name:"ChatBoard",props:["message"],components:{ChatMessage:w},data:function(){return{}},mounted:function(){}},I=C,j=(n("889a"),Object(k["a"])(I,g,h,!1,null,"6a095313",null)),O=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control-panel"},[n("div",{staticClass:"controls"},[n("div",{staticClass:"photo-selector"},[n("font-awesome-icon",{attrs:{icon:e.imageIcon}}),n("input",{attrs:{type:"file",accept:"image/png, image/jpeg"},on:{"&change":function(t){return e.sendImage(t)}}})],1),n("font-awesome-icon",{class:{active:e.stickEnable},attrs:{icon:e.stickIcon},on:{click:function(t){e.stickEnable=!e.stickEnable}}}),n("text-input",{on:{send:e.sendText}})],1),e.stickEnable?n("stick-panel",{on:{send:e.sendStick}}):e._e()],1)},E=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"stick-panel",class:{active:e.active}},e._l(e.stickyList,(function(t){return n("div",{key:t.id,class:[t.code,"sticky-item"],on:{click:function(n){return e.send(t.code)}}})})),0)},S=[],$={name:"StickPanel",data:function(){return{stickyList:[{code:"sticky_code_01",id:0},{code:"sticky_code_02",id:1},{code:"sticky_code_03",id:2},{code:"sticky_code_04",id:3},{code:"empty-fill-items",id:4},{code:"empty-fill-items",id:5},{code:"empty-fill-items",id:6},{code:"empty-fill-items",id:7}],active:!1}},mounted:function(){var e=this;this.$nextTick((function(){e.active=!0}))},methods:{send:function(e){"empty-fill-items"!==e&&this.$emit("send",e)}}},D=$,T=(n("fee9"),Object(k["a"])(D,P,S,!1,null,"524b7436",null)),F=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:e.msg},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.send(t))},input:function(t){t.target.composing||(e.msg=t.target.value)}}}),n("font-awesome-icon",{class:["sent-button","button"],attrs:{icon:e.sendIcon},on:{click:e.send}})],1)},H=[],R=n("c074"),U={name:"TextInput",data:function(){return{sendIcon:R["b"],msg:""}},mounted:function(){},methods:{send:function(){this.msg.length&&(this.$emit("send",this.msg),this.msg="")}}},B=U,N=(n("8e67"),Object(k["a"])(B,A,H,!1,null,"4547e01f",null)),q=N.exports,G=n("b702"),J={name:"ControlPanel",components:{StickPanel:F,TextInput:q},data:function(){return{stickEnable:!1,imageIcon:R["a"],stickIcon:G["a"]}},mounted:function(){},methods:{send:function(e){this.$emit("send",e)},sendText:function(e){this.send({type:"text",data:e})},sendStick:function(e){this.stickEnable=!1,this.send({type:"stick",data:e})},sendImage:function(e){var t=e.target.files;t.length>0&&(this.$emit("sendImage",{type:"photo",data:t[0]}),e.target.value="")}}},L=J,K=(n("c0f4"),Object(k["a"])(L,M,E,!1,null,"0c7162de",null)),z=K.exports,Y=u.ref("smartbee-message").orderByChild("ts").startAt(Date.now(),"ts"),V=l.ref(),W=null,Q={name:"ChatRoom",components:{ChatBoard:O,ControlPanel:z},data:function(){return{loading:!1,token:m(),name:"",guests:[],colors:[],boardMessage:[],last_ts:Date.now()}},mounted:function(){W=this,Y.on("value",(function(e){W.receiveHandel(e)}))},beforeDestroy:function(){Y.off("value")},watch:{},computed:{subToken:function(){return this.token.substring(0,6)}},methods:{newGuestRecord:function(e){e.forEach((function(e){if(-1===W.guests.indexOf(e.name)){W.guests.push(e.name);var t="#000000";do{t=f()}while(-1!==W.colors.indexOf(t));W.colors.push(t)}}))},assignUniqueAttribueforMessage:function(e){this.boardMessage=e.map((function(e){var t=Object.assign({},e);return t.color=W.colors[W.guests.indexOf(e.name)],t.self=e.uuid===W.token,t}))},receiveHandel:function(e){var t=e.val()&&Object.values(e.val())||[],n=t.filter((function(e){return e.ts>W.last_ts}));this.newGuestRecord(n),this.assignUniqueAttribueforMessage(t),W.last_ts=t.length&&t[t.length-1].ts},sendMessage:function(e){var t=Object.assign({},e,{uuid:this.token,name:this.name?"".concat(this.name," (#").concat(this.subToken,")"):"John Don (#".concat(this.subToken,")"),ts:Date.now()});u.ref("smartbee-message").push(t)},getImageExt:function(e){var t=e.match(/(jpg|jpeg|png)$/);return null!==t&&(t=t[0]),t},generateUploadNameForImage:function(e){var t=this.getImageExt(e);return"smartbee-image/".concat(this.token,"-").concat(Date.now(),".").concat(t)},uploadImageErrorHandel:function(e){alert("upload error",e.code)},uploadImageSuccessHandel:function(e,t){e.snapshot.ref.getDownloadURL().then((function(e){W.sendMessage({type:t,data:e})}))},sendImage:function(e){var t=this.generateUploadNameForImage(e.data.name);this.loading=!0;var n=V.child(t).put(e.data);n.on("state_changed",(function(){}),(function(e){W.loading=!1,W.uploadImageErrorHandel(e)}),(function(){W.loading=!1,W.uploadImageSuccessHandel(n,e.type)}))}}},X=Q,Z=(n("f13b"),Object(k["a"])(X,r,i,!1,null,"5a13932a",null)),ee=Z.exports,te={name:"App",components:{ChatRoom:ee}},ne=te,ae=(n("034f"),n("02e1"),Object(k["a"])(ne,o,s,!1,null,"fa031bea",null)),oe=ae.exports,se=n("ad3d");a["a"].component("font-awesome-icon",se["a"]),a["a"].config.devtools=!0,a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(oe)}}).$mount("#app")},7740:function(e,t,n){"use strict";var a=n("8929"),o=n.n(a);o.a},"82af":function(e,t,n){},"85ec":function(e,t,n){},"889a":function(e,t,n){"use strict";var a=n("95a7"),o=n.n(a);o.a},8929:function(e,t,n){},"8e67":function(e,t,n){"use strict";var a=n("962e"),o=n.n(a);o.a},"95a7":function(e,t,n){},"962e":function(e,t,n){},c0f4:function(e,t,n){"use strict";var a=n("e5db"),o=n.n(a);o.a},e5db:function(e,t,n){},edf2:function(e,t,n){},f13b:function(e,t,n){"use strict";var a=n("82af"),o=n.n(a);o.a},fee9:function(e,t,n){"use strict";var a=n("edf2"),o=n.n(a);o.a}});
//# sourceMappingURL=app.3d511e1b.js.map