(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{184:function(t,e,r){var a=r(250);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(10).default)("4810089a",a,!0,{})},185:function(t,e,r){var a=r(254);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(10).default)("04e88218",a,!0,{})},201:function(t,e,r){var a=r(347);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(10).default)("798c3abc",a,!0,{})},203:function(t,e,r){"use strict";r.d(e,"a",function(){return c});var a=r(204),n=r.n(a),i=r(205),o=r.n(i),c=(r(206),r(245),function(){function t(e,r,a,i,o){n()(this,t),this.blockType=a,this.x=this.sx=e,this.y=this.sy=r,this.oBlock=i,this.blockSize=o}return o()(t,[{key:"refreshMino",value:function(t,e,r,a,n){this.blockType=r,this.x=this.sx=t,this.y=this.sy=e;for(var i=Math.floor(4*Math.random())+1,o=0;o<4;o++)for(var c=0;c<4;c++)this.oBlock[o][c].blockType=a[o][c],this.oBlock[o][c].pattern=i;this.blockSize=n}},{key:"drop",value:function(t,e){this.y++,this.hitCheck(t)&&(this.y=this.sy,e())}},{key:"replaceBlock",value:function(t){for(var e=0;e<4;e++)for(var r=0;r<4;r++)this.oBlock[e][r].blockType=t[e][r].blockType,this.oBlock[e][r].pattern=t[e][r].pattern}},{key:"rotate",value:function(t){for(var e=JSON.parse(JSON.stringify(this.oBlock)),r=0;r<4;r++)for(var a=0;a<4;a++)this.oBlock[r][a].blockType=e[3-a][r].blockType,this.oBlock[r][a].pattern=e[3-a][r].pattern;this.hitCheck(t)&&this.replaceBlock(e)}},{key:"setBlockInField",value:function(t){for(var e=0;e<4;e++)for(var r=0;r<4;r++)this.oBlock[e][r].blockType&&(t[e+this.y][r+this.x].blockType=this.oBlock[e][r].blockType,t[e+this.y][r+this.x].pattern=this.oBlock[e][r].pattern)}},{key:"hitCheck",value:function(t){for(var e=0;e<4;e++)for(var r=0;r<4;r++)if(void 0!==t[e+this.y][r+this.x]&&t[e+this.y][r+this.x].blockType&&1==this.oBlock[e][r].blockType)return!0;return!1}},{key:"gameOverCheck",value:function(t){if(this.x<0||this.x>t[0].length-2-2)return!0;for(var e=0;e<4;e++)for(var r=0;r<4;r++)if(0==this.y&&1==this.oBlock[e][r].blockType&&2==t[e+this.y][r+this.x].blockType)return!0;return!1}},{key:"setBlockType",value:function(t,e){for(var r=0;r<4;r++)for(var a=0;a<4;a++)this.oBlock[r][a].blockType&&(t[r+this.y][a+this.x].blockType=e,t[r+this.y][a+this.x].pattern=this.oBlock[r][a].pattern)}},{key:"returnPosition",value:function(){this.x=this.sx,this.y=this.sy}},{key:"keepInterimPosition",value:function(){this.sx=this.x,this.sy=this.y}},{key:"drawMinoBlock",value:function(t){t.push();for(var e=this.blockSize,r=0;r<4;r++)for(var a=0;a<4;a++)if(this.oBlock[r][a].blockType){var n=e-1,i={p5:t,x:(this.x+a)*e,y:(this.y+r)*e,w:n,h:n};this.oBlock[r][a].registerFunction(i)}t.pop()}}]),t}())},206:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Block});var core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(178),core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_array_fill__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(204),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(205),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),Block=function(){function Block(t){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Block),this.blockType=t,this.pattern=1,this.patternNum=10}return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Block,[{key:"registerFunction",value:function registerFunction(response){for(var functions={},i=1;i<=this.patternNum;i++){var key="pattern"+i;functions[key]=eval("this.drawPattern"+i)}var name="pattern"+this.pattern;void 0!==functions[name]?functions[name](response):console.log("This function is not regsted : "+name)}},{key:"drawPattern1",value:function(t){var e=t.p5,r=t.x,a=t.y,n=t.w,i=t.h,o=n;e.push(),e.translate(r,a),e.fill(255),e.rect(0,0,n,i),e.noStroke(),e.fill(131,18,28),e.beginShape(),e.vertex(o/3,0),e.vertex(o/3+o/3,0),e.vertex(o,o/3),e.vertex(o,o/3+o/3),e.vertex(o/3+o/3,o),e.vertex(o/3,o),e.vertex(0,o/3+o/3),e.vertex(0,o/3),e.endShape(e.CLOSE),e.noStroke(),e.fill(142,75,28),e.ellipse(o/2,o/2,10,10),e.pop()}},{key:"drawPattern2",value:function(t){var e=t.p5,r=t.x,a=t.y,n=t.w,i=t.h;e.push(),e.noFill(),e.strokeWeight(4),e.translate(r,a),e.fill(255),e.rect(0,0,n,i);for(var o=n/4,c=0,s=n;s>0;s-=o){c%2==0?e.stroke(131,18,28):e.stroke(142,75,28);var l=s;e.arc(n/2,i,l,l,e.PI,0),c++}e.pop()}},{key:"drawLineWithVector",value:function(t,e,r){t.line(e.x,e.y,r.x,r.y)}},{key:"drawPattern3",value:function(t){var e=t.p5,r=t.x,a=t.y,n=t.w,i=t.h;e.push(),e.translate(r,a),e.fill(255),e.rect(0,0,n,i);var o=n/4,c=i/4,s=e.createVector(0,0),l=e.createVector(0+o,0),u=e.createVector(0+2*o,0),f=e.createVector(0+3*o,0),d=(e.createVector(0+n,0),e.createVector(0+n,0+c)),p=e.createVector(0+n,0+2*c),h=e.createVector(0+n,0+3*c),v=e.createVector(0+n,0+i),y=e.createVector(0+3*o,0+i),m=e.createVector(0+2*o,0+i),k=e.createVector(0+o,0+i),_=(e.createVector(0,0+i),e.createVector(0,0+3*c)),b=e.createVector(0,0+2*c),x=e.createVector(0,0+c);e.strokeWeight(3),e.stroke(131,18,28),e.line(s.x,s.y,v.x,v.y),e.line(l.x,l.y,h.x,h.y),e.line(u.x,u.y,p.x,p.y),e.line(f.x,f.y,d.x,d.y),e.line(x.x,x.y,y.x,y.y),e.line(b.x,b.y,m.x,m.y),e.line(_.x,_.y,k.x,k.y),e.pop()}},{key:"drawPattern4",value:function(t){var e=t.p5,r=t.x,a=t.y,n=t.w,i=t.h;e.push(),e.translate(r,a),e.fill(255),e.rect(0,0,n,i);var o=n/4,c=i/4,s=e.createVector(0,0),l=e.createVector(0+o,0),u=e.createVector(0+2*o,0),f=e.createVector(0+3*o,0),d=e.createVector(0+n,0),p=e.createVector(0+n,0+c),h=e.createVector(0+n,0+2*c),v=e.createVector(0+n,0+3*c),y=e.createVector(0+n,0+i),m=e.createVector(0+3*o,0+i),k=e.createVector(0+2*o,0+i),_=e.createVector(0+o,0+i),b=e.createVector(0,0+i),x=e.createVector(0,0+3*c),g=e.createVector(0,0+2*c),w=e.createVector(0,0+c);e.strokeWeight(2),e.stroke(131,18,28),e.line(s.x,s.y,y.x,y.y),e.line(l.x,l.y,v.x,v.y),e.line(u.x,u.y,h.x,h.y),e.line(f.x,f.y,p.x,p.y),e.line(w.x,w.y,m.x,m.y),e.line(g.x,g.y,k.x,k.y),e.line(x.x,x.y,_.x,_.y),e.stroke(142,75,28),e.line(d.x,d.y,b.x,b.y),e.line(f.x,f.y,x.x,x.y),e.line(u.x,u.y,g.x,g.y),e.line(l.x,l.y,w.x,w.y),e.line(p.x,p.y,_.x,_.y),e.line(h.x,h.y,k.x,k.y),e.line(v.x,v.y,m.x,m.y),e.pop()}}]),Block}()},247:function(t,e,r){"use strict";r.r(e),r.d(e,"mino",function(){return a}),r.d(e,"setDelegate",function(){return N}),r.d(e,"setSpeed",function(){return A}),r.d(e,"isGameStart",function(){return D}),r.d(e,"mainGame",function(){return U}),r.d(e,"updateLayout",function(){return L}),r.d(e,"newGame",function(){return F});r(178);var a,n,i,o,c,s,l,u,f,d,p=r(203),h=r(206),v=(r(96),550),y=750,m=34,k=m*i,_=m*n,b=1,x=0,g=2,w=-1,C=0,T=1,S=2,E=3,M=9,B=10,P=new Array(i),V=new Array(i),O=new Array,I=new Array,R=0,G=new Array(3);function N(t){f=t}function A(t){d=t}var D=!1;function U(t){(u=t).preload=function(t){u.loadImage("img/download.png")},u.keyPressed=function(t){},u.setup=function(t){n=Math.floor(y/m),i=Math.floor(v/m),u.createCanvas(v,y).parent("p5Canvas"),u.background(60,46,64),l=0,o=m,O=[[[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]],[[0,0,0,0],[0,1,1,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[0,1,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,1,0,0],[1,1,1,0],[0,0,0,0]]],window.onkeydown=e,F(),D=!1},u.draw=function(t){u.background(60,46,64),D&&$()};var e=function(t){s!=g&&(s==b?(a.setBlockType(V,C),a.keepInterimPosition(),32==t.keyCode?J():37==t.keyCode?a.x--:39==t.keyCode?a.x++:40==t.keyCode&&a.y++,a.hitCheck(V)&&a.returnPosition(),K()):s==x&&13==t.keyCode&&F())}}function L(t){!function(t){if(s==b){a.setBlockType(V,C),a.keepInterimPosition();var e=t[0],r=e.position.x,n=Math.floor(u.map(r,0,v,1,i-1));if(a.x=n,G.length<3)G.push(e.position.y);else{G.shift(),G.push(e.position.y);var o=G[0],c=G[1],l=G[2],f=c-o,d=c-l;f>5&&d>5&&J()}a.hitCheck(V)&&a.returnPosition(),K()}}(t)}function F(){!function(){I.fill(0),P=JSON.parse(JSON.stringify(new Array(n).fill(new Array(i).fill(0))));for(var t=0;t<P.length;t++)for(var e=0;e<P[t].length;e++)0===t||t===P.length-1?P[t][e]=new h.a(w):0===e||e===P[t].length-1||t===P.length-2?P[t][e]=new h.a(M):P[t][e]=new h.a(C);V=P}(),D=!0,s=b,c=1,d=50,R=0,q(),$(),W()}function W(){f({gameMode:s,score:R})}function q(){if(s!=g){var t=Math.floor(i/3),e=Math.floor(Math.random()*O.length),r=JSON.parse(JSON.stringify(new Array(4).fill(new Array(4).fill(0)))),n=O[e];if(void 0===a){for(var c=Math.floor(4*Math.random())+1,l=0;l<4;l++)for(var u=0;u<4;u++){var f=void 0;1==n[l][u]?(f=new h.a(T)).pattern=c:f=new h.a(C),r[l][u]=f}a=new p.a(t,0,e,r,o)}else a.refreshMino(t,0,e,n,o);a.gameOverCheck(V)&&(s=x),K()}}function $(){s==b?(a.keepInterimPosition(),c%d==0&&(a.setBlockType(V,C),a.drop(V,function(){a.setBlockType(V,S);var t=function(){if(s==g)return;for(var t,e=0,r=1;r<n-2;r++){t=0;for(var a=0;a<i&&V[r][a].blockType;a++)t++;if(t>=i){e++,l++;for(var o=1;o<i-1;o++)V[r][o].blockType=E}}return e}();if(t>0){s=b,function(){if(s==g)return;for(var t=n-1;t>=1;t--)for(var e=1;e<i-1;e++)if(V[t][e].blockType==E){V[t][e].blockType=V[t-1][e].blockType;for(var r=t-1;r>=1;r--)V[r][e].blockType=V[r-1][e].blockType;t++}}(),console.log(t);for(var e=1;e<t+1;e++)for(var r=0;r<i;r++)V[e][r].blockType!==M&&(V[e][r].blockType=C);R+=10*t,W()}q()}),K()),u.push(),u.fill(221,221,221),u.rect(0,0,k,_),u.pop(),function(){for(var t=0;t<n;t++)for(var e=0;e<i;e++){switch(u.push(),0!==t&&t!==V.length-1||(V[t][e].blockType=w),V[t][e].blockType){case w:u.noFill(),u.noStroke(),u.rect(e*o,t*o,o-1,o-1);break;case C:u.stroke(204),u.fill(247,241,213),u.rect(e*o,t*o,o-1,o-1);break;case S:var r=o-1,a={p5:u,x:e*o,y:t*o,w:r,h:r};V[t][e].registerFunction(a);break;case E:u.fill(0),u.rect(e*o,t*o,o-1,o-1);break;case M:u.fill(204),u.rect(e*o,t*o,o-1,o-1)}u.pop()}}(),a.drawMinoBlock(u)):s==x&&(!function(){u.push();for(var t=0;t<n;t++)for(var e=0;e<i;e++)V[t][e].blockType&&V[t][e].blockType!=M&&(u.fill(255),u.rect(e*o,t*o,o-1,o-1));u.pop()}(),D=!1),c++,l>=B&&(l=0,d--,console.log("speedUP! : "+d)),d<1&&(d=1)}function J(){s!=g&&(a.setBlockType(V,C),a.rotate(V))}function K(){s!=g&&a.setBlockInField(V)}},249:function(t,e,r){"use strict";var a=r(184);r.n(a).a},250:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,"",""])},251:function(t,e,r){t.exports=r.p+"img/421cb6f.png"},252:function(t,e,r){t.exports=r.p+"img/56729fe.png"},253:function(t,e,r){"use strict";var a=r(185);r.n(a).a},254:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,".paramerter-container[data-v-62efd936]{margin-top:30px;color:#6c6a2c}.paramerter-container .card-body[data-v-62efd936]{padding:10px}.paramerter-container__record .title[data-v-62efd936]{padding:0 10px}.card[data-v-62efd936]{border:none;margin:0}.card .card-title[data-v-62efd936]{color:#6c6a2c}.card .card-body[data-v-62efd936]{background:#f7f1d5;padding:10px}.score-container[data-v-62efd936]{margin-top:30px}.score-container .card-body[data-v-62efd936]{padding-top:5px;padding-bottom:5px}.score-container .score-box[data-v-62efd936],.score-container .score-box .card-title[data-v-62efd936]{color:#d15a6e}.howto-container[data-v-62efd936]{margin-top:0}.card-text[data-v-62efd936],.card-title[data-v-62efd936]{padding:0 10px}",""])},257:function(t,e){},259:function(t,e){},292:function(t,e){},293:function(t,e){},345:function(t,e,r){t.exports=r.p+"img/b6ab656.png"},346:function(t,e,r){"use strict";var a=r(201);r.n(a).a},347:function(t,e,r){(t.exports=r(9)(!1)).push([t.i,"body{background:#3c2e40}.human-container video{opacity:.65;display:none;top:0;left:0;right:0;bottom:0;margin:auto}.human-container .show{opacity:.65}.human-container canvas{opacity:0;top:0;left:0;right:0;bottom:0;margin:auto}.header{color:#87c166}table td{width:50px;height:50px}",""])},348:function(t,e,r){"use strict";r.r(e);r(178),r(27),r(47);var a=r(5),n=r.n(a),i=r(207),o=r(340),c=r.n(o),s=(r(202),"aqua"),l=2;function u(t){return[t.y,t.x]}function f(t,e,r,a,n){t.beginPath(),t.arc(r,e,a,0,2*Math.PI),t.fillStyle=n,t.fill()}function d(t,e,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;i.a(t,e).forEach(function(t){!function(t,e,r,a,n){var i=c()(t,2),o=i[0],s=i[1],u=c()(e,2),f=u[0],d=u[1];n.beginPath(),n.moveTo(s*a,o*a),n.lineTo(d*a,f*a),n.lineWidth=l,n.strokeStyle=r,n.stroke()}(u(t[0].position),u(t[1].position),s,a,r)})}function p(t,e,r){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=0;n<t.length;n++){var i=t[n];if(!(i.score<e)){var o=i.position;f(r,o.y*a,o.x*a,3,s)}}}var h=r(344),v=r.n(h);r.d(e,"sqrt",function(){return S}),r.d(e,"startPosenet",function(){return E}),r.d(e,"setDelegate",function(){return M});var y,m=.5,k=16,_=new v.a,b=640,x=480,g=.1,w=.1,C=1,T=30,S=Math.sqrt;function E(){!function(){B.apply(this,arguments)}()}function M(t){y=t}function B(){return(B=n()(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c();case 2:return e=t.sent,t.prev=3,t.next=6,P();case 6:r=t.sent,t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(3),console.error(t.t0),t.abrupt("return");case 13:R(r,e);case 14:case"end":return t.stop()}},t,this,[[3,9]])}))).apply(this,arguments)}function P(){return V.apply(this,arguments)}function V(){return(V=n()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return(e=t.sent).play(),t.abrupt("return",e);case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(){return I.apply(this,arguments)}function I(){return(I=n()(regeneratorRuntime.mark(function t(){var e,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.getElementById("video"),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){t.next=9;break}return t.next=4,navigator.mediaDevices.getUserMedia({audio:!1,video:!0});case 4:return r=t.sent,e.srcObject=r,t.abrupt("return",new Promise(function(t){e.onloadedmetadata=function(){t(e)}}));case 9:return a="This browser does not support video capture, or this device does not have a camera",alert(a),t.abrupt("return",Promise.reject(a));case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function R(t,e){var r=document.getElementById("canvas").getContext("2d"),a=!0;function i(){return o.apply(this,arguments)}function o(){return(o=n()(regeneratorRuntime.mark(function n(){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return _.begin(),n.next=3,e.estimateMultiplePoses(t,m,a,k,C,g,T);case 3:o=n.sent,r.clearRect(0,0,b,x),r.save(),r.scale(-1,1),r.translate(-b,0),r.drawImage(t,0,0,b,x),r.restore(),o.forEach(function(t){var e=t.score,a=t.keypoints;e>=w&&(p(a,g,r),d(a,g,r),y(a,e))}),_.end(),requestAnimationFrame(i);case 13:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}i()}},349:function(t,e,r){"use strict";r.r(e);var a=r(25),n=r.n(a),i=(r(203),r(33)),o=r(247),c={data:function(){return{keypoints:[],mino:{},p5js:{},isStart:!1}},methods:{setKeyPoints:function(t){o.updateLayout(t)},callbackOnTetris:function(t){console.log("callback: "+t),1==t.gameMode?this.$store.dispatch("setScore",t.score):0==t.gameMode&&(this.isStart=!1)},onClickGameStart:function(){o.newGame()}},computed:n()({},Object(i.c)(["gameSpeed"])),watch:{gameSpeed:function(t,e){var r=50;switch(t){case"ULTRA BEGINNER":r=55;break;case"BEGINNER":r=45;break;case"NORMAL":r=30;break;case"EXPERT":r=15;break;case"GOD":r=5}o.setSpeed(r)}},mounted:function(){o.setDelegate(this.callbackOnTetris);var t=r(248);this.p5js=new t(o.mainGame)}},s=(r(249),r(24)),l=Object(s.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"tetris-container"},[e("div",{ref:"canvas",staticClass:"d-flex justify-content-center",attrs:{id:"p5Canvas"}})]),this._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[e("b-button",{on:{click:this.onClickGameStart}},[this._v("Game Start")])],1)])},[],!1,null,null,null);l.options.__file="TetrisFrame.vue";var u=l.exports,f={data:function(){return{img:{move:r(251),rotate:r(252)},isNingenMode:!0}},computed:n()({},Object(i.c)(["score","level"])),watch:{isNingenMode:function(t,e){console.log(t+" ? "+this.isNingenMode)}},methods:n()({},Object(i.b)(["setIsCameraPreview","setGameMode","setGameSpeed"]),{onClickGameMode:function(t){console.log(t+" ? "+this.isNingenMode)}})},d=(r(253),Object(s.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"info-container col-md-6 mb-3"},[r("div",{staticClass:"howto-container row"},[r("div",{staticClass:"move-box col-md-6"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"80%"},attrs:{"border-variant":"light",title:"MOVE","img-src":t.img.move,"img-alt":"Image","img-top":"",tag:"article"}},[r("p",{staticClass:"card-text"},[t._v("\n\t\t\t\t\tIf you move between left and right, falling tetris block will follow with you.\n\t\t\t\t")])])],1),t._v(" "),r("div",{staticClass:"rotate-box col-md-6"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"80%"},attrs:{title:"ROTATE","img-src":t.img.rotate,"img-alt":"Image","img-top":"",tag:"article"}},[r("p",{staticClass:"card-text"},[t._v("\n\t\t\t\t\tEvery time you jump, falling tetris block will rotate.\n\t\t\t\t")])])],1)]),t._v(" "),r("div",{staticClass:"score-container row"},[r("div",{staticClass:"score-box col-md-6"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"80%"},attrs:{header:"SCORE",title:t.$store.getters.score.toString(),tag:"article"}})],1),t._v(" "),r("div",{staticClass:"level-box col-md-6"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"80%"},attrs:{header:"LEVEL",title:t.$store.getters.gameSpeed,tag:"article"}})],1)]),t._v(" "),r("div",{staticClass:"paramerter-container row"},[r("div",{staticClass:"level-box col-md-12"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"90%"},attrs:{header:"Other Settings",tag:"article"}},[r("div",{staticClass:"paramerter-container__record d-flex"},[r("div",{staticClass:"title col-md-2"},[r("span",[t._v("Camera")])]),t._v(" "),r("div",{staticClass:"parameter col-md-10"},[r("b-tabs",{attrs:{pills:"",card:""}},[r("b-tab",{attrs:{title:"PREVIEW"},on:{click:function(e){t.setIsCameraPreview(!0)}}}),t._v(" "),r("b-tab",{attrs:{title:"NO CAMERA",active:""},on:{click:function(e){t.setIsCameraPreview(!1)}}})],1)],1)]),t._v(" "),r("div",{staticClass:"paramerter-container__record d-flex"},[r("div",{staticClass:"title col-md-2"},[r("span",[t._v("PlayStyle")])]),t._v(" "),r("div",{staticClass:"parameter col-md-10"},[r("b-tabs",{attrs:{pills:"",card:""}},[r("b-tab",{attrs:{title:"NINGEN"},on:{click:function(e){t.setGameMode("ningen")}}}),t._v(" "),r("b-tab",{attrs:{title:"NORMAL"},on:{click:function(e){t.setGameMode("normal")}}})],1)],1)]),t._v(" "),r("div",{staticClass:"paramerter-container__record d-flex"},[r("div",{staticClass:"title col-md-2"},[r("span",[t._v("Speed")])]),t._v(" "),r("div",{staticClass:"parameter col-md-10"},[r("b-tabs",{attrs:{pills:"",card:""}},[r("b-tab",{attrs:{title:"SLOWEST"},on:{click:function(e){t.setGameSpeed("ULTRA BEGINNER")}}}),t._v(" "),r("b-tab",{attrs:{title:"SLOWER"},on:{click:function(e){t.setGameSpeed("BEGINNER")}}}),t._v(" "),r("b-tab",{attrs:{title:"NORMAL"},on:{click:function(e){t.setGameSpeed("NORMAL")}}}),t._v(" "),r("b-tab",{attrs:{title:"FASTER"},on:{click:function(e){t.setGameSpeed("EXPERT")}}}),t._v(" "),r("b-tab",{attrs:{title:"FASTEST"},on:{click:function(e){t.setGameSpeed("GOD")}}})],1)],1)])])],1)])])},[],!1,null,"62efd936",null));d.options.__file="InfoContainer.vue";var p=d.exports,h=r(348),v={components:{TetrisFrame:u,InfoContainer:p},data:function(){return{posenet:{},keypoints:[],pStyle:{"background-image":"url("+r(345)+")"}}},mounted:function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:!0,audio:!0},function(t){document.getElementById("video").src=URL.createObjectURL(t)},function(t){console.log(t)}),h.setDelegate(this.callbackDelegate),h.startPosenet()},methods:n()({callbackDelegate:function(t,e){"ningen"===this.$store.state.gameMode&&this.$refs.tetris.setKeyPoints(t)}},Object(i.b)({getList:"index/getScore"}))},y=(r(346),Object(s.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid"},[this._m(0),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"tetris-container col-md-6"},[e("div",{staticClass:"human-container",staticStyle:{}},[e("video",{staticStyle:{position:"absolute"},attrs:{id:"video",width:"640px",height:"480px"}}),this._v(" "),e("canvas",{class:{show:this.$store.state.isCameraPreview},staticStyle:{position:"absolute"},attrs:{id:"canvas",width:"640px",height:"480px"}})]),this._v(" "),e("tetris-frame",{ref:"tetris"})],1),this._v(" "),e("info-container")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header col-md-6 d-flex justify-content-center py-3"},[e("h1",[this._v("NINGEN TETRIS")])])}],!1,null,null,null));y.options.__file="index.vue";e.default=y.exports}}]);