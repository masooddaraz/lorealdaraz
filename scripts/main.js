"use strict";window.g_aKb=class{constructor(c,a){this.g_aqM=c,this.g_aKc=a,this.g_aKd=!1,this.g_aKe=()=>this.g_KJ()}g_aKf(){}g_aKg(e,a,b,c){this.g_aqM.g_aKh(this.g_aKc,e,a,b,c)}g_aKi(e,a,b,c){return this.g_aqM.g_aKj(this.g_aKc,e,a,b,c)}g_aKk(d,a,b){this.g_aqM.g_aKl()?this.g_aKg(d,a,b):this.g_aqM.g_aKm()._OnMessageFromDOM({type:"event",component:this.g_aKc,handler:d,dispatchOpts:b||null,data:a,responseId:null})}g_aKn(c,a){this.g_aqM.g_aKo(this.g_aKc,c,a)}g_aKp(d){for(const[a,b]of d)this.g_aKn(a,b)}g_aKq(){return this.g_aqM}g_aKr(){return this.g_aKc}g_adS(){this.g_aKd||(this.g_aqM.g_aKs(this.g_aKe),this.g_aKd=!0)}g_adD(){this.g_aKd&&(this.g_aqM.g_aKt(this.g_aKe),this.g_aKd=!1)}g_KJ(){}},window.g_mK=class{constructor(c,a){this.g_lt=c,this.g_mL=a,this.g_mN=-1,this.g_mO=-Infinity,this.g_mP=()=>this.g_mQ(),this.g_mR=!1,this.g_mS=!1}g_mU(b){this.g_mS=!!b}g_mY(){if(-1===this.g_mN){const d=Date.now(),a=d-this.g_mO,b=this.g_mL;a>=b&&this.g_mS?(this.g_mO=d,this.g_mZ()):this.g_mN=self.setTimeout(this.g_mP,Math.max(b-a,4))}}g_mZ(){this.g_mR=!0,this.g_lt(),this.g_mR=!1}g_lx(){this.g_mR||(this.g_m_(),this.g_mO=Date.now())}g_mQ(){this.g_mN=-1,this.g_mO=Date.now(),this.g_mZ()}g_m_(){-1!==this.g_mN&&(self.clearTimeout(this.g_mN),this.g_mN=-1)}g_ek(){this.g_m_(),this.g_lt=null,this.g_mP=null}},"use strict",window.g_aKu=class extends g_aKb{constructor(c,a){super(c,a),this.g_aKv=new Map,this.g_aKw=!0,this.g_aKn("create",b=>this.g_aKx(b)),this.g_aKn("destroy",b=>this.g_aKy(b)),this.g_aKn("set-visible",b=>this.g_aKz(b)),this.g_aKn("update-position",b=>this.g_aKA(b)),this.g_aKn("update-state",b=>this.g_aKB(b)),this.g_aKn("focus",b=>this.g_aKC(b)),this.g_aKn("set-css-style",b=>this.g_aKD(b))}g_aKE(b){this.g_aKw=!!b}g_aKF(c,e){this.g_aKn(c,b=>{const a=b.elementId,c=this.g_aKv.get(a);return e(c,b)})}g_aKx(d){const a=d.elementId,b=this.g_aeq(a,d);this.g_aKv.set(a,b),d.isVisible||(b.style.display="none"),this.g_aKw&&document.body.appendChild(b)}g_aeq(){throw new Error("required override")}g_aKG(){}g_aKy(d){const a=d.elementId,b=this.g_aKv.get(a);this.g_aKG(b),this.g_aKw&&b.parentElement.removeChild(b),this.g_aKv.delete(a)}g_aKH(d,a,b){b||(b={}),b.elementId=a,this.g_aKg(d,b)}g_aKI(d,a,b){b||(b={}),b.elementId=a,this.g_aKk(d,b)}g_aKz(c){if(this.g_aKw){const a=this.g_aKv.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_aKA(d){if(this.g_aKw){const a=this.g_aKv.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_aKB(c){const a=this.g_aKv.get(c.elementId);this.g_aKJ(a,c)}g_aKJ(){throw new Error("required override")}g_aKC(c){const a=this.g_aKv.get(c.elementId);c.focus?a.focus():a.blur()}g_aKD(c){const a=this.g_aKv.get(c.elementId);a.style[c.prop]=c.val}g_aKK(b){return this.g_aKv.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function q(c){const a=await r(c),b=new TextDecoder("utf-8");return b.decode(a)}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function b(b){return l.has(b)}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let c=new Audio;const d={"audio/webm; codecs=opus":!!c.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!c.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!c.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!c.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!c.canPlayType("audio/mp4"),"audio/mpeg":!!c.canPlayType("audio/mpeg")};c=null;const e=[];let f=0;window.RealFile=window.File;const g=[],i=new Map,h=new Map;let j=0;const k=[];self.g_aKL=function(b){if("function"!=typeof b)throw new Error("runOnStartup called without a function");k.push(b)};const l=new Set(["cordova","playable-ad","instant-games"]);window.g_aKM=class c{constructor(c){this.g_aKN=c.g_aKO,this.g_aKP=null,this.g_aoI="",this.g_aKQ=c.g_aKR,this.g_aKS={},this.g_aKT=null,this.g_aKU=null,this.g_aKV=[],this.g_aKW=null,this.g_amJ=null,this.g_aqG=null,this.g_anq=-1,this.g_aKX=()=>this.g_aKY(),this.g_aKZ=[],this.g_aoN=c.g_aK_,b(this.g_aoN)&&this.g_aKN&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.g_aKN=!1),this.g_aK$=!1,this.g_aLa=null,("html5"===this.g_aoN||"playable-ad"===this.g_aoN)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aKo("runtime","cordova-fetch-local-file",b=>this.g_aLb(b)),this.g_aKo("runtime","create-job-worker",b=>this.g_aLc(b)),"cordova"===this.g_aoN?document.addEventListener("deviceready",()=>this.g_acG(c)):this.g_acG(c)}g_ek(){this.g_arD(),this.g_aKP&&(this.g_aKP.onmessage=null,this.g_aKP=null),this.g_aKT&&(this.g_aKT.terminate(),this.g_aKT=null),this.g_aKU&&(this.g_aKU.g_ek(),this.g_aKU=null),this.g_amJ&&(this.g_amJ.parentElement.removeChild(this.g_amJ),this.g_amJ=null)}g_aLd(){return this.g_amJ}g_fe(){return this.g_aoI}g_aKl(){return this.g_aKN}g_asp(){return this.g_aoN}g_ard(){return a&&"cordova"===this.g_aoN}g_asq(){return a&&b(this.g_aoN)}async g_acG(d){if("playable-ad"===this.g_aoN){this.g_aLa=self.c3_base64files,await this.g_aLe();for(let a=0,b=d.g_aLf.length;a<b;++a){const b=d.g_aLf[a].toLowerCase();this.g_aLa.hasOwnProperty(b)&&(d.g_aLf[a]=URL.createObjectURL(this.g_aLa[b]))}}if(d.g_aLg)this.g_aoI=d.g_aLg;else{const c=location.origin;this.g_aoI=("null"===c?"file:///":c)+location.pathname;const a=this.g_aoI.lastIndexOf("/");-1!==a&&(this.g_aoI=this.g_aoI.substr(0,a+1))}if(d.g_aLh)for(const[a,b]of Object.entries(d.g_aLh))this.g_aKS[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_aKP=a.port1,this.g_aKP.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_aLi(b)),this.g_aqG=new self.g_aLj(this),await this.g_aqG.g_ajR(),this.g_aLk(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),"object"==typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode(),await this.g_aLl(),this.g_aKN?await this.g_aLm(d,a.port2):await this.g_aLn(d,a.port2)}g_aLo(b){return this.g_aKS.hasOwnProperty(b)?this.g_aKS[b]:b.endsWith("/workermain.js")&&this.g_aKS.hasOwnProperty("workermain.js")?this.g_aKS["workermain.js"]:"playable-ad"===this.g_aoN&&this.g_aLa.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_aLa[b.toLowerCase()]):b}async g_aLp(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_ard()){const a=await this.g_BI(this.g_aKQ+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_aLk(){if(this.g_asq()){const f=document.documentElement.style,a=document.body.style,b=window.innerWidth<window.innerHeight,c=b?window.screen.width:window.screen.height,d=b?window.screen.height:window.screen.width;a.height=f.height=d+"px",a.width=f.width=c+"px"}}g_aLq(b){return{baseUrl:this.g_aoI,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:c.g_anV(),projectData:b.g_aLr,previewImageBlobs:window.cr_previewImageBlobs||this.g_aLa,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.g_aK_,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aLs,jobScheduler:this.g_aqG.g_aLt(),supportedAudioFormats:d,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_aKQ+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_aKQ+"opus.wasm.wasm",isiOSCordova:this.g_ard(),isiOSWebView:this.g_asq(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_aLm(e,a){const b=this.g_aLo(e.g_aLu);this.g_aKT=await this.g_aLp(b,this.g_aoI,{name:"Runtime"}),this.g_amJ=document.createElement("canvas"),this.g_amJ.style.display="none";const c=this.g_amJ.transferControlToOffscreen();document.body.appendChild(this.g_amJ),window.c3canvas=this.g_amJ,this.g_aKT.postMessage(Object.assign(this.g_aLq(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_aLv||[],engineScripts:e.g_aLf,projectScripts:window.g_aLw,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[a,c,...this.g_aqG.g_aLx()]),this.g_aKV=g.map(b=>new b(this)),this.g_aLy(),self.c3_callFunction=(c,a)=>this.g_aKW.g_UZ(c,a),"preview"===this.g_aoN&&(self.goToLastErrorScript=()=>this.g_aKh("runtime","go-to-last-error-script"))}async g_aLn(a,b){this.g_amJ=document.createElement("canvas"),this.g_amJ.style.display="none",document.body.appendChild(this.g_amJ),window.c3canvas=this.g_amJ,this.g_aKV=g.map(b=>new b(this)),this.g_aLy();const c=a.g_aLf.map(b=>new URL(b,this.g_aoI).toString());if(Array.isArray(a.g_aLv)&&c.unshift(...a.g_aLv),await Promise.all(c.map(a=>p(a))),a.g_aLz&&0<a.g_aLz.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(a.g_aLz.map(a=>p(a[1]))),Object.values(b).some(b=>!b))return void self.setTimeout(()=>this.g_aLA(b),100)}catch(c){return console.error("[Preview] Error loading project scripts: ",c),void self.setTimeout(()=>this.g_aLA(b),100)}}if("preview"===this.g_aoN&&"object"!=typeof self.g_aO.g_aKa)return console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),void alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.");const d=Object.assign(this.g_aLq(a),{isInWorker:!1,messagePort:b,canvas:this.g_amJ,runOnStartupFunctions:k});this.g_aKU=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_aKU,d)}g_aLA(d){const a=Object.entries(d).filter(b=>!b[1]).map(b=>b[0]),b=`Failed to load project script '${a[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b),alert(b)}async g_aLc(){const b=await this.g_aqG.g_aLB();return{outputPort:b,transferables:[b]}}g_aKm(){if(this.g_aKN)throw new Error("not available in worker mode");return this.g_aKU}g_aKh(f,a,b,c,d){this.g_aKP.postMessage({type:"event",component:f,handler:a,dispatchOpts:c||null,data:b,responseId:null},this.g_aK$?void 0:d)}g_aKj(i,a,b,c,d){const e=j++,f=new Promise((c,a)=>{h.set(e,{resolve:c,reject:a})});return this.g_aKP.postMessage({type:"event",component:i,handler:a,dispatchOpts:c||null,data:b,responseId:e},this.g_aK$?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aLC(c);else if("result"===a)this.g_aLD(c);else if("runtime-ready"===a)this.g_aLE();else if("alert"===a)alert(c.message);else throw new Error(`unknown message '${a}'`)}g_aLC(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aLF(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aLF(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aLF(c,!1,d.toString())}):this.g_aLF(c,!0,f))}g_aLF(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_aKP.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aLD(f){const a=f.responseId,b=f.isOk,c=f.result,d=h.get(a);b?d.resolve(c):d.reject(c),h.delete(a)}g_aKo(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aLG(b){if(g.includes(b))throw new Error("DOM handler already added");g.push(b)}g_aLy(){for(const b of this.g_aKV)if("runtime"===b.g_aKr())return void(this.g_aKW=b);throw new Error("cannot find runtime DOM handler")}g_aLi(b){this.g_aKh("debugger","message",b)}g_aLE(){for(const b of this.g_aKV)b.g_aKf()}static g_anV(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_aLH(){return await this.g_aKj("runtime","get-remote-preview-status-info")}g_aKs(b){this.g_aKZ.push(b),this.g_arC()}g_aKt(c){const a=this.g_aKZ.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_aKZ.splice(a,1),this.g_aKZ.length||this.g_arD()}g_arC(){-1===this.g_anq&&this.g_aKZ.length&&(this.g_anq=requestAnimationFrame(this.g_aKX))}g_arD(){-1!==this.g_anq&&(cancelAnimationFrame(this.g_anq),this.g_anq=-1)}g_aKY(){this.g_anq=-1;for(const b of this.g_aKZ)b();this.g_arC()}g_aLI(b){this.g_aKW.g_aLI(b)}g_aLJ(b){this.g_aKW.g_aLJ(b)}g_aLK(){this.g_aKW.g_aLK()}g_aLL(b){this.g_aKW.g_aLL(b)}g_Cd(b){return!!d[b]}async g_afM(c){const a=await this.g_aKj("runtime","opus-decode",{arrayBuffer:c},null,[c]);return new Float32Array(a)}g_fU(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fV(b){return!this.g_fU(b)}async g_aLb(c){const a=c.filename;switch(c.as){case"text":return await this.g_BJ(a);case"buffer":return await this.g_BI(a);default:throw new Error("unsupported type");}}g_aLM(){const b=window.cordova&&window.cordova.plugins&&window.cordova.plugins.permissions;if("object"!=typeof b)throw new Error("Permission API is not loaded");return b}g_aLN(d,a){const b=d[a];if("string"!=typeof b)throw new Error("Invalid permission name");return b}g_aLO(e){const a=this.g_aLM();return new Promise((b,c)=>a.checkPermission(this.g_aLN(a,e),c=>b(!!c.hasPermission),c))}g_azd(e){const a=this.g_aLM();return new Promise((b,c)=>a.requestPermission(this.g_aLN(a,e),c=>b(!!c.hasPermission),c))}async g_aLP(c){if("cordova"!==this.g_asp())return!0;if(this.g_ard())return!0;for(const d of c){const b=await this.g_aLO(d);if(b)continue;const a=await this.g_azd(d);if(!1===a)return!1}return!0}async g_aLQ(...b){if(!1===(await this.g_aLP(b)))throw new Error("Permission not granted")}g_aLR(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_BJ(b){const a=await this.g_aLR(b);return await q(a)}g_aLS(){if(e.length&&!(8<=f)){f++;const b=e.shift();this.g_aLT(b.filename,b.g_aLU,b.g_aLV)}}g_BI(d){return new Promise((g,b)=>{e.push({filename:d,g_aLU:b=>{f--,this.g_aLS(),g(b)},g_aLV:c=>{f--,this.g_aLS(),b(c)}}),this.g_aLS()})}async g_aLT(c,a,b){try{const b=await this.g_aLR(c),d=await r(b);a(d)}catch(c){b(c)}}async g_aLe(){const d=[];for(const[a,b]of Object.entries(this.g_aLa))d.push(this.g_aLW(a,b));await Promise.all(d)}async g_aLW(e,a){if("object"==typeof a)this.g_aLa[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_aLa[e]=c}}g_aLl(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_aK$=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function s(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function t(e){return new Promise((a,b)=>{const c=document.createElement("link");c.onload=()=>a(c),c.onerror=c=>b(c),c.rel="stylesheet",c.href=e,document.head.appendChild(c)})}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function u(c){const d=URL.createObjectURL(c);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function d(e){return new Promise((f,b)=>{let a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}async function v(e,k,b){if(!/firefox/i.test(navigator.userAgent))return await u(e);let c=await d(e);const l=new DOMParser,g=l.parseFromString(c,"image/svg+xml"),h=g.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const a=h.getAttribute("width"),b=h.getAttribute("height");if(!a.includes("%")&&!b.includes("%"))return await u(e)}h.setAttribute("width",k+"px"),h.setAttribute("height",b+"px");const i=new XMLSerializer;return c=i.serializeToString(g),e=new Blob([c],{type:"image/svg+xml"}),await u(e)}function e(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}function f(c){const a=c.target.tagName.toLowerCase();l.has(a)&&c.preventDefault()}function g(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}function c(){const d=document.activeElement;if(!d)return!1;const a=d.tagName.toLowerCase(),b=new Set(["email","number","password","search","tel","text","url"]);return"textarea"===a||("input"===a?b.has(d.type.toLowerCase()||"text"):e(d))}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),i={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},j={dispatchUserScriptEvent:!0},k={dispatchRuntimeEvent:!0},l=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(c){const d=await u(c);if(0<d.width&&0<d.height)return[d.width,d.height];else{d.style.position="absolute",d.style.left="0px",d.style.top="0px",d.style.visibility="hidden",document.body.appendChild(d);const b=d.getBoundingClientRect();return document.body.removeChild(d),[b.width,b.height]}},self.C3_RasterSvgImageBlob=async function(f,a,b,c,d){const e=await v(f,a,b),g=document.createElement("canvas");g.width=c,g.height=d;const h=g.getContext("2d");return h.drawImage(e,0,0,a,b),g};let m=!1;document.addEventListener("pause",()=>m=!0),document.addEventListener("resume",()=>m=!1);const n=class extends g_aKb{constructor(d){super(d,"runtime"),this.g_aLX=!0,this.g_aLY=-1,this.g_aLZ="any",this.g_aL_=!1,this.g_aL$=!1,this.g_aMa=null,this.g_aMb=null,this.g_aMc=null,d.g_aKo("canvas","update-size",b=>this.g_aMd(b)),d.g_aKo("runtime","invoke-download",b=>this.g_aMe(b)),d.g_aKo("runtime","raster-svg-image",b=>this.g_aMf(b)),d.g_aKo("runtime","get-svg-image-size",b=>this.g_aMg(b)),d.g_aKo("runtime","set-target-orientation",b=>this.g_aMh(b)),d.g_aKo("runtime","register-sw",()=>this.g_aMi()),d.g_aKo("runtime","post-to-debugger",b=>this.g_aMj(b)),d.g_aKo("runtime","go-to-script",b=>this.g_aMj(b)),d.g_aKo("runtime","before-start-ticking",()=>this.g_aMk()),d.g_aKo("runtime","debug-highlight",b=>this.g_aMl(b)),d.g_aKo("runtime","enable-device-orientation",()=>this.g_aMm()),d.g_aKo("runtime","enable-device-motion",()=>this.g_aMn()),d.g_aKo("runtime","add-stylesheet",b=>this.g_aMo(b));const h=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",b=>{const a=b.target,c=a.tagName.toLowerCase();h.has(c)||e(a)||b.preventDefault()}),window.addEventListener("selectstart",f),window.addEventListener("gesturehold",f),window.addEventListener("touchstart",f,{passive:!1});const a=d.g_aLd();"undefined"==typeof PointerEvent?a.addEventListener("touchstart",f):(window.addEventListener("pointerdown",f,{passive:!1}),a.addEventListener("pointerdown",f)),this.g_aMp=0,window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("mousewheel",g,{passive:!1}),window.addEventListener("wheel",g,{passive:!1}),window.addEventListener("resize",()=>this.g_anH()),d.g_asq()&&window.addEventListener("focusout",()=>{c()||(document.scrollingElement.scrollTop=0)}),this.g_aMq=new Set,this.g_aMr=new WeakSet,this.g_aMs=!1}g_aMk(){return"cordova"===this.g_aqM.g_asp()?(document.addEventListener("pause",()=>this.g_aqI(!0)),document.addEventListener("resume",()=>this.g_aqI(!1))):document.addEventListener("visibilitychange",()=>this.g_aqI(document.hidden)),{isSuspended:!!(document.hidden||m)}}g_aKf(){window.addEventListener("focus",()=>this.g_aMt("window-focus")),window.addEventListener("blur",()=>{this.g_aMt("window-blur",{parentHasFocus:b()}),this.g_aMp=0}),window.addEventListener("fullscreenchange",()=>this.g_anI()),window.addEventListener("webkitfullscreenchange",()=>this.g_anI()),window.addEventListener("mozfullscreenchange",()=>this.g_anI()),window.addEventListener("fullscreenerror",b=>this.g_anJ(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_anJ(b)),window.addEventListener("mozfullscreenerror",b=>this.g_anJ(b)),window.addEventListener("keydown",b=>this.g_aMu("keydown",b)),window.addEventListener("keyup",b=>this.g_aMu("keyup",b)),window.addEventListener("dblclick",b=>this.g_aMv("dblclick",b,i)),window.addEventListener("wheel",b=>this.g_aMw("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("mousedown",b=>this.g_aMx("pointerdown",b)),window.addEventListener("mousemove",b=>this.g_aMx("pointermove",b)),window.addEventListener("mouseup",b=>this.g_aMx("pointerup",b)),window.addEventListener("touchstart",b=>this.g_aMy("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aMy("pointermove",b)),window.addEventListener("touchend",b=>this.g_aMy("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aMy("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aMz("pointerdown",b)),this.g_aqM.g_aKl()&&"undefined"!=typeof window.onpointerrawupdate?(this.g_aMb=new g_mK(()=>this.g_aMA(),5),this.g_aMb.g_mU(!0),window.addEventListener("pointerrawupdate",b=>this.g_aMB(b))):window.addEventListener("pointermove",b=>this.g_aMz("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aMz("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aMz("pointercancel",b)));const c=()=>this.g_aLK();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aMt(c,a){this.g_aKg(c,a||null,k)}g_aMC(){return Math.max(window.innerWidth,1)}g_aMD(){return Math.max(window.innerHeight,1)}g_anH(){const c=this.g_aMC(),a=this.g_aMD();this.g_aMt("window-resize",{innerWidth:c,innerHeight:a,devicePixelRatio:window.devicePixelRatio}),this.g_aqM.g_asq()&&(-1!==this.g_aLY&&clearTimeout(this.g_aLY),this.g_aME(c,a,0))}g_aMF(d,a,b){-1!==this.g_aLY&&clearTimeout(this.g_aLY),this.g_aLY=setTimeout(()=>this.g_aME(d,a,b),48)}g_aME(f,a,b){const c=this.g_aMC(),d=this.g_aMD();this.g_aLY=-1,c!=f||d!=a?this.g_aMt("window-resize",{innerWidth:c,innerHeight:d,devicePixelRatio:window.devicePixelRatio}):10>b&&this.g_aMF(c,d,b+1)}g_aMh(b){this.g_aLZ=b.targetOrientation}g_aMG(){const c=this.g_aLZ;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_anI(){const b=g_aKM.g_anV();b&&"any"!==this.g_aLZ&&this.g_aMG(),this.g_aKg("fullscreenchange",{isFullscreen:b,innerWidth:this.g_aMC(),innerHeight:this.g_aMD()})}g_anJ(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aKg("fullscreenerror",{isFullscreen:g_aKM.g_anV(),innerWidth:this.g_aMC(),innerHeight:this.g_aMD()})}g_aqI(b){b?this.g_aqM.g_arD():this.g_aqM.g_arC(),this.g_aKg("visibilitychange",{hidden:b})}g_aMu(d,a){"Backspace"===a.key&&f(a);const b=h.get(a.code)||a.code;this.g_aKk(d,{code:b,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},i)}g_aMw(c,a){this.g_aKg(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},i)}g_aMv(a,b,c){s(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aKk(a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},c))}g_aMx(a,e){if(!s(e)){"pointerdown"===a&&window!==window.top&&window.focus();const b=this.g_aMp;"pointerdown"===a&&0!==b?a="pointermove":"pointerup"==a&&0!==e.buttons&&(a="pointermove"),this.g_aKk(a,{pointerId:1,pointerType:"mouse",button:e.button,buttons:e.buttons,lastButtons:b,clientX:e.clientX,clientY:e.clientY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:e.timeStamp},i),this.g_aMp=e.buttons,this.g_aMv(e.type,e,j)}}g_aMz(d,a){"pointerdown"===d&&window!==window.top&&window.focus(),this.g_aMb&&("pointerup"===d||"pointercancel"===d)&&this.g_aMb.g_lx();let b=0;if("mouse"===a.pointerType&&(b=this.g_aMp),this.g_aKk(d,{pointerId:a.pointerId,pointerType:a.pointerType,button:a.button,buttons:a.buttons,lastButtons:b,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},i),"mouse"===a.pointerType){let b="mousemove";"pointerdown"===d?b="mousedown":"pointerup"==d&&(b="pointerup"),this.g_aMv(b,a,j),this.g_aMp=a.buttons}}g_aMB(b){this.g_aMc=b,this.g_aMb.g_mY()}g_aMA(){this.g_aMz("pointermove",this.g_aMc),this.g_aMc=null}g_aMy(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aKk(e,{pointerId:c.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||0),pressure:c.force||c.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},i)}}g_aMm(){this.g_aL_||(this.g_aL_=!0,window.addEventListener("deviceorientation",b=>this.g_azB(b)))}g_aMn(){this.g_aL$||(this.g_aL$=!0,window.addEventListener("devicemotion",b=>this.g_azC(b)))}g_azB(b){this.g_aKg("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},i)}g_azC(h){let a=null;const j=h.acceleration;j&&(a={x:j.x||0,y:j.y||0,z:j.z||0});let c=null;const k=h.accelerationIncludingGravity;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});let e=null;const l=h.rotationRate;l&&(e={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0}),this.g_aKg("devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:e,interval:h.interval,timeStamp:h.timeStamp},i)}g_aMd(d){const a=this.g_aKq(),b=a.g_aLd();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_aLk(),this.g_aLX&&(b.style.display="",this.g_aLX=!1)}g_aMe(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aMf(j){const a=j.blob,b=j.imageWidth,c=j.imageHeight,d=j.surfaceWidth,e=j.surfaceHeight,f=j.imageBitmapOpts,g=await self.C3_RasterSvgImageBlob(a,b,c,d,e);let h;return h=f?await createImageBitmap(g,f):await createImageBitmap(g),{imageBitmap:h,transferables:[h]}}async g_aMg(b){return await self.C3_GetSvgImageSize(b.blob)}async g_aMo(b){await t(b.url)}g_aLK(){const c=[...this.g_aMq];if(this.g_aMq.clear(),!this.g_aMs)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aMr.has(d)||this.g_aMq.add(d)})}}g_aLI(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aMr.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aMq.add(c)}a&&a.catch(()=>{this.g_aMr.has(c)||this.g_aMq.add(c)})}g_aLJ(b){this.g_aMq.delete(b),this.g_aMr.add(b)}g_aLL(b){this.g_aMs=!!b}g_aMl(d){const a=d.show;if(!a)return void(this.g_aMa&&(this.g_aMa.style.display="none"));this.g_aMa||(this.g_aMa=document.createElement("div"),this.g_aMa.id="inspectOutline",document.body.appendChild(this.g_aMa));const b=this.g_aMa;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aMi(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aMj(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_UZ(c,a){return this.g_aKi("js-invoke-function",{name:c,params:a})}};g_aKM.g_aLG(n)}{const c=document.currentScript.src;self.g_aLj=class{constructor(a){this.g_aMH=a,this.g_aoI=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fe(),this.g_asY=Math.min(navigator.hardwareConcurrency||2,16),this.g_aMI=null,this.g_aMJ=[],this.g_asW=null,this.g_aMK=null}async g_ajR(){if(this.g_aML)throw new Error("already initialised");this.g_aML=!0;const c=this.g_aMH.g_aLo("dispatchworker.js");this.g_aMI=await this.g_aMH.g_aLp(c,this.g_aoI,{name:"DispatchWorker"});const a=new MessageChannel;this.g_asW=a.port1,this.g_aMI.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aMK=await this.g_aLB()}async g_aLB(){const f=this.g_aMJ.length,a=this.g_aMH.g_aLo("jobworker.js"),b=await this.g_aMH.g_aLp(a,this.g_aoI,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aMI.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aMJ.push(b),d.port1}g_aLt(){return{inputPort:this.g_asW,outputPort:this.g_aMK,maxNumWorkers:this.g_asY}}g_aLx(){return[this.g_asW,this.g_aMK]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_aKM({g_aKO:!1,g_aLu:"workermain.js",g_aLf:["scripts/c3runtime.js"],g_aKR:"scripts/",g_aLv:[],g_aK_:"html5"})}{const b=class extends g_aKb{constructor(b){super(b,"touch"),this.g_aKn("request-permission",b=>this.g_aMM(b))}async g_aMM(d){const a=d.type;let b=!0;0===a?b=await this.g_aMN():1===a&&(b=await this.g_aMO()),this.g_aKg("permission-result",{type:a,result:b})}async g_aMN(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{const b=await self.DeviceOrientationEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}async g_aMO(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{const b=await self.DeviceMotionEvent.requestPermission();return"granted"===b}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}};g_aKM.g_aLG(b)}{function g(b){b.stopPropagation()}function a(b){13!==b.which&&27!==b.which&&b.stopPropagation()}const b=class extends g_aKu{constructor(b){super(b,"text-input"),this.g_aKF("scroll-to-bottom",b=>this.g_aMP(b))}g_aeq(b,c){let d;const h=c.type;return"textarea"===h?(d=document.createElement("textarea"),d.style.resize="none"):(d=document.createElement("input"),d.type=h),d.style.position="absolute",d.autocomplete="off",d.addEventListener("touchstart",g),d.addEventListener("touchmove",g),d.addEventListener("touchend",g),d.addEventListener("mousedown",g),d.addEventListener("mouseup",g),d.addEventListener("keydown",a),d.addEventListener("keyup",a),d.addEventListener("click",c=>{c.stopPropagation(),this.g_aKI("click",b)}),d.addEventListener("dblclick",c=>{c.stopPropagation(),this.g_aKI("dblclick",b)}),d.addEventListener("input",()=>this.g_aKH("change",b,{text:d.value})),d.id=c.id,this.g_aKJ(d,c),d}g_aKJ(c,a){c.value=a.text,c.placeholder=a.placeholder,c.title=a.title,c.disabled=!a.isEnabled,c.readOnly=a.isReadOnly,c.spellcheck=a.spellCheck}g_aMP(b){b.scrollTop=b.scrollHeight}};g_aKM.g_aLG(b)}{function g(b){b.stopPropagation()}const a=class extends g_aKu{constructor(b){super(b,"button")}g_aeq(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.userSelect="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_aKI("click",a,{isChecked:c.checked})),c.id=b.id,this.g_aKJ(e,b),e}g_aMQ(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_aKJ(d,a){const b=this.g_aMQ(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_aKM.g_aLG(a)}{const b=class extends g_aKb{constructor(b){super(b,"browser"),this.g_aoN="",this.g_aKn("get-initial-state",b=>this.g_aMR(b)),this.g_aKn("ready-for-sw-messages",()=>this.g_aMS()),this.g_aKn("alert",b=>this.g_aMT(b)),this.g_aKn("close",()=>this.g_aMU()),this.g_aKn("set-focus",b=>this.g_aKC(b)),this.g_aKn("vibrate",b=>this.g_aMV(b)),this.g_aKn("lock-orientation",b=>this.g_aMW(b)),this.g_aKn("unlock-orientation",()=>this.g_aMX()),this.g_aKn("navigate",b=>this.g_aMY(b)),this.g_aKn("request-fullscreen",b=>this.g_aMZ(b)),this.g_aKn("exit-fullscreen",()=>this.g_aM_()),window.addEventListener("online",()=>this.g_aDr(!0)),window.addEventListener("offline",()=>this.g_aDr(!1)),document.addEventListener("backbutton",()=>this.g_aM$()),"undefined"!=typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",b=>this.g_aNa(b))}g_aMR(b){return this.g_aoN=b.exportType,{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!=typeof window.is_scirra_arcade}}g_aMS(){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(b=>this.g_aKg("sw-message",b.data))}g_aDr(b){this.g_aKg("online-state",{isOnline:b})}g_aM$(){this.g_aKg("backbutton")}g_aNa(b){b.handled=!0,this.g_aKg("backbutton")}g_aNb(){return"nwjs"===this.g_aoN?nw.Window.get():null}g_aMT(b){alert(b.message)}g_aMU(){navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}g_aKC(c){const d=c.isFocus;if("nwjs"===this.g_aoN){const b=this.g_aNb();d?b.focus():b.blur()}else d?window.focus():window.blur()}g_aMV(b){navigator.vibrate&&navigator.vibrate(b.pattern)}g_aMW(c){const d=c.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(d).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(d):screen.webkitLockOrientation?b=screen.webkitLockOrientation(d):screen.mozLockOrientation?b=screen.mozLockOrientation(d):screen.msLockOrientation&&(b=screen.msLockOrientation(d)),b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_aMX(){try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(b){}}g_aMY(e){const a=e.type;if("back"===a)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===a)window.forward();else if("home"===a)window.g_aNc();else if("reload"===a)location.reload();else if("url"===a){const a=e.url,b=e.target,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):"preview"===c?window.open(a,"_blank"):!this.g_aDq&&(2===b?window.top.location=a:1===b?window.parent.location=a:window.location=a)}else if("new-window"===a){const a=e.url,b=e.tag,c=e.exportType;"windows-uwp"===c&&"undefined"!=typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(a)):navigator.app&&navigator.app.loadUrl?navigator.app.loadUrl(a,{openExternal:!0}):"cordova"===c?window.open(a,"_system"):window.open(a,b)}}g_aMZ(e){const a={navigationUI:"auto"},b=e.navUI;1===b?a.navigationUI="hide":2===b&&(a.navigationUI="show");const c=document.documentElement;c.requestFullscreen?c.requestFullscreen(a):c.mozRequestFullScreen?c.mozRequestFullScreen(a):c.msRequestFullscreen?c.msRequestFullscreen(a):c.webkitRequestFullScreen&&("undefined"==typeof Element.ALLOW_KEYBOARD_INPUT?c.webkitRequestFullScreen():c.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT))}g_aM_(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}};g_aKM.g_aLG(b)}{const b=class extends g_aKb{constructor(b){super(b,"mouse"),this.g_aKn("cursor",b=>this.g_aNd(b))}g_aNd(b){document.body.style.cursor=b}};g_aKM.g_aLG(b)}