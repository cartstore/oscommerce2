window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(h,j,D){function A(){if(j.readyState==="complete"){j.detachEvent(E,A);for(var a=j.getElementsByTagName(r),b=0,c=a.length;b<c;++b)B.initElement(a[b])}}function F(){var a=event.srcElement,b=a.parentNode;a.blur();b.focus()}function G(){var a=event.propertyName;if(a==="width"||a==="height"){var b=event.srcElement,c=b[a],d=parseInt(c,10);if(isNaN(d)||d<0)d=a==="width"?300:150;if(c===d){b.style[a]=d+"px";b.getContext("2d")._resize(b.width,
b.height)}else b[a]=d}}function H(){h.detachEvent(I,H);for(var a in s){var b=s[a],c=b.firstChild,d;for(d in c)if(typeof c[d]==="function")c[d]=k;for(d in b)if(typeof b[d]==="function")b[d]=k;c.detachEvent(J,F);b.detachEvent(K,G)}h[L]=k;h[M]=k;h[N]=k;h[C]=k;h[O]=k}function U(){var a=j.getElementsByTagName("script");a=a[a.length-1];return j.documentMode>=8?a.src:a.getAttribute("src",4)}function t(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;")}function V(a){return a.toLowerCase()}function i(a){throw new P(a);
}function Q(a){var b=parseInt(a.width,10),c=parseInt(a.height,10);if(isNaN(b)||b<0)b=300;if(isNaN(c)||c<0)c=150;a.width=b;a.height=c}var k=null,r="canvas",L="CanvasRenderingContext2D",M="CanvasGradient",N="CanvasPattern",C="FlashCanvas",O="G_vmlCanvasManager",J="onfocus",K="onpropertychange",E="onreadystatechange",I="onunload",u=((h[C+"Options"]||{}).swfPath||U().replace(/[^\/]+$/,""))+"flashcanvas.swf",e=new function(a){for(var b=0,c=a.length;b<c;b++)this[a[b]]=b}(["toDataURL","save","restore","scale",
"rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText",
"measureText","drawImage","createImageData","getImageData","putImageData","addColorStop","direction","resize"]),v={},n={},s={},w={},x=function(a,b){this.canvas=a;this._swf=b;this._canvasId=b.id.slice(8);this._initialize();this._gradientPatternId=0;this._direction="";var c=this;setInterval(function(){n[c._canvasId]===0&&c._executeCommand()},30)};x.prototype={save:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setFillStyle();this._setLineStyles();this._setFontStyles();
this._stateStack.push([this._globalAlpha,this._globalCompositeOperation,this._strokeStyle,this._fillStyle,this._lineWidth,this._lineCap,this._lineJoin,this._miterLimit,this._shadowOffsetX,this._shadowOffsetY,this._shadowBlur,this._shadowColor,this._font,this._textAlign,this._textBaseline]);this._queue.push(e.save)},restore:function(){var a=this._stateStack;if(a.length){a=a.pop();this.globalAlpha=a[0];this.globalCompositeOperation=a[1];this.strokeStyle=a[2];this.fillStyle=a[3];this.lineWidth=a[4];
this.lineCap=a[5];this.lineJoin=a[6];this.miterLimit=a[7];this.shadowOffsetX=a[8];this.shadowOffsetY=a[9];this.shadowBlur=a[10];this.shadowColor=a[11];this.font=a[12];this.textAlign=a[13];this.textBaseline=a[14]}this._queue.push(e.restore)},scale:function(a,b){this._queue.push(e.scale,a,b)},rotate:function(a){this._queue.push(e.rotate,a)},translate:function(a,b){this._queue.push(e.translate,a,b)},transform:function(a,b,c,d,f,g){this._queue.push(e.transform,a,b,c,d,f,g)},setTransform:function(a,b,
c,d,f,g){this._queue.push(e.setTransform,a,b,c,d,f,g)},_setCompositing:function(){var a=this._queue;if(this._globalAlpha!==this.globalAlpha){this._globalAlpha=this.globalAlpha;a.push(e.globalAlpha,this._globalAlpha)}if(this._globalCompositeOperation!==this.globalCompositeOperation){this._globalCompositeOperation=this.globalCompositeOperation;a.push(e.globalCompositeOperation,this._globalCompositeOperation)}},_setStrokeStyle:function(){if(this._strokeStyle!==this.strokeStyle){var a=this._strokeStyle=
this.strokeStyle;this._queue.push(e.strokeStyle,typeof a==="object"?a.id:a)}},_setFillStyle:function(){if(this._fillStyle!==this.fillStyle){var a=this._fillStyle=this.fillStyle;this._queue.push(e.fillStyle,typeof a==="object"?a.id:a)}},createLinearGradient:function(a,b,c,d){isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||i(9);this._queue.push(e.createLinearGradient,a,b,c,d);return new y(this)},createRadialGradient:function(a,b,c,d,f,g){isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)&&isFinite(f)&&
isFinite(g)||i(9);if(c<0||g<0)i(1);this._queue.push(e.createRadialGradient,a,b,c,d,f,g);return new y(this)},createPattern:function(a,b){a||i(17);var c=a.tagName,d,f=this._canvasId;if(c){c=c.toLowerCase();if(c==="img")d=a.getAttribute("src",2);else if(c===r||c==="video")return;else i(17)}else if(a.src)d=a.src;else i(17);b==="repeat"||b==="no-repeat"||b==="repeat-x"||b==="repeat-y"||b===""||b===k||i(12);this._queue.push(e.createPattern,t(d),b);if(v[f]){this._executeCommand();++n[f]}return new R(this)},
_setLineStyles:function(){var a=this._queue;if(this._lineWidth!==this.lineWidth){this._lineWidth=this.lineWidth;a.push(e.lineWidth,this._lineWidth)}if(this._lineCap!==this.lineCap){this._lineCap=this.lineCap;a.push(e.lineCap,this._lineCap)}if(this._lineJoin!==this.lineJoin){this._lineJoin=this.lineJoin;a.push(e.lineJoin,this._lineJoin)}if(this._miterLimit!==this.miterLimit){this._miterLimit=this.miterLimit;a.push(e.miterLimit,this._miterLimit)}},_setShadows:function(){var a=this._queue;if(this._shadowOffsetX!==
this.shadowOffsetX){this._shadowOffsetX=this.shadowOffsetX;a.push(e.shadowOffsetX,this._shadowOffsetX)}if(this._shadowOffsetY!==this.shadowOffsetY){this._shadowOffsetY=this.shadowOffsetY;a.push(e.shadowOffsetY,this._shadowOffsetY)}if(this._shadowBlur!==this.shadowBlur){this._shadowBlur=this.shadowBlur;a.push(e.shadowBlur,this._shadowBlur)}if(this._shadowColor!==this.shadowColor){this._shadowColor=this.shadowColor;a.push(e.shadowColor,this._shadowColor)}},clearRect:function(a,b,c,d){this._queue.push(e.clearRect,
a,b,c,d)},fillRect:function(a,b,c,d){this._setCompositing();this._setShadows();this._setFillStyle();this._queue.push(e.fillRect,a,b,c,d)},strokeRect:function(a,b,c,d){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._queue.push(e.strokeRect,a,b,c,d)},beginPath:function(){this._queue.push(e.beginPath)},closePath:function(){this._queue.push(e.closePath)},moveTo:function(a,b){this._queue.push(e.moveTo,a,b)},lineTo:function(a,b){this._queue.push(e.lineTo,a,b)},
quadraticCurveTo:function(a,b,c,d){this._queue.push(e.quadraticCurveTo,a,b,c,d)},bezierCurveTo:function(a,b,c,d,f,g){this._queue.push(e.bezierCurveTo,a,b,c,d,f,g)},arcTo:function(a,b,c,d,f){f<0&&isFinite(f)&&i(1);this._queue.push(e.arcTo,a,b,c,d,f)},rect:function(a,b,c,d){this._queue.push(e.rect,a,b,c,d)},arc:function(a,b,c,d,f,g){c<0&&isFinite(c)&&i(1);this._queue.push(e.arc,a,b,c,d,f,g?1:0)},fill:function(){this._setCompositing();this._setShadows();this._setFillStyle();this._queue.push(e.fill)},
stroke:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._queue.push(e.stroke)},clip:function(){this._queue.push(e.clip)},isPointInPath:function(){},_setFontStyles:function(){var a=this._queue;if(this._font!==this.font)try{var b=w[this._canvasId];b.style.font=this._font=this.font;var c=b.currentStyle,d=[c.fontStyle,c.fontWeight,b.offsetHeight,c.fontFamily].join(" ");a.push(e.font,d)}catch(f){}if(this._textAlign!==this.textAlign){this._textAlign=
this.textAlign;a.push(e.textAlign,this._textAlign)}if(this._textBaseline!==this.textBaseline){this._textBaseline=this.textBaseline;a.push(e.textBaseline,this._textBaseline)}if(this._direction!==this.canvas.currentStyle.direction){this._direction=this.canvas.currentStyle.direction;a.push(e.direction,this._direction)}},fillText:function(a,b,c,d){this._setCompositing();this._setFillStyle();this._setShadows();this._setFontStyles();this._queue.push(e.fillText,t(a),b,c,d===D?Infinity:d)},strokeText:function(a,
b,c,d){this._setCompositing();this._setStrokeStyle();this._setShadows();this._setFontStyles();this._queue.push(e.strokeText,t(a),b,c,d===D?Infinity:d)},measureText:function(a){var b=w[this._canvasId];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new W(b.offsetWidth)},drawImage:function(a,b,c,d,f,g,o,l,z){a||i(17);var p=a.tagName,m,q=arguments.length,S=this._canvasId;if(p){p=p.toLowerCase();if(p==="img")m=a.getAttribute("src",2);else if(p===r||p==="video")return;
else i(17)}else if(a.src)m=a.src;else i(17);this._setCompositing();this._setShadows();m=t(m);if(q===3)this._queue.push(e.drawImage,q,m,b,c);else if(q===5)this._queue.push(e.drawImage,q,m,b,c,d,f);else if(q===9){if(d===0||f===0)i(1);this._queue.push(e.drawImage,q,m,b,c,d,f,g,o,l,z)}else return;if(v[S]){this._executeCommand();++n[S]}},createImageData:function(){},getImageData:function(){},putImageData:function(){},_initialize:function(){this.globalAlpha=this._globalAlpha=1;this.globalCompositeOperation=
this._globalCompositeOperation="source-over";this.fillStyle=this._fillStyle=this.strokeStyle=this._strokeStyle="#000000";this.lineWidth=this._lineWidth=1;this.lineCap=this._lineCap="butt";this.lineJoin=this._lineJoin="miter";this.miterLimit=this._miterLimit=10;this.shadowBlur=this._shadowBlur=this.shadowOffsetY=this._shadowOffsetY=this.shadowOffsetX=this._shadowOffsetX=0;this.shadowColor=this._shadowColor="rgba(0, 0, 0, 0.0)";this.font=this._font="10px sans-serif";this.textAlign=this._textAlign="start";
this.textBaseline=this._textBaseline="alphabetic";this._queue=[];this._stateStack=[]},_flush:function(){var a=this._queue;this._queue=[];return a},_executeCommand:function(){var a=this._flush();if(a.length>0)return eval(this._swf.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+a.join("&#0;")+"</string></arguments></invoke>"))},_resize:function(a,b){this._executeCommand();this._initialize();if(a>0)this._swf.width=a;if(b>0)this._swf.height=b;this._queue.push(e.resize,
a,b)}};var y=function(a){this._ctx=a;this.id=a._gradientPatternId++};y.prototype={addColorStop:function(a,b){if(isNaN(a)||a<0||a>1)i(1);this._ctx._queue.push(e.addColorStop,this.id,a,b)}};var R=function(a){this.id=a._gradientPatternId++},W=function(a){this.width=a},P=function(a){this.code=a;this.message=X[a]};P.prototype=Error();var X={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},B={initElement:function(a){if(a.getContext)return a;
var b=Math.random().toString(36).slice(2)||"0",c="external"+b;v[b]=false;n[b]=1;Q(a);a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';
s[b]=a;var d=a.firstChild;w[b]=a.lastChild;var f=j.body.contains;if(f(a))d.movie=u;else var g=setInterval(function(){if(f(a)){clearInterval(g);d.movie=u}},0);if(j.compatMode==="BackCompat"||!h.XMLHttpRequest)w[b].style.overflow="hidden";var o=new x(a,d);a.getContext=function(l){return l==="2d"?o:k};a.toDataURL=function(l,z){(""+l).replace(/[A-Z]+/g,V)==="image/jpeg"?o._queue.push(e.toDataURL,l,typeof z==="number"?z:""):o._queue.push(e.toDataURL,l);return o._executeCommand()};d.attachEvent(J,F);return a},
saveImage:function(a){a.firstChild.saveImage()},setOptions:function(){},trigger:function(a,b){s[a].fireEvent("on"+b)},unlock:function(a,b){n[a]&&--n[a];if(b){var c=s[a],d=c.firstChild,f,g;Q(c);f=c.width;g=c.height;c.style.width=f+"px";c.style.height=g+"px";if(f>0)d.width=f;if(g>0)d.height=g;d.resize(f,g);c.attachEvent(K,G);v[a]=true}}};j.createElement(r);j.createStyleSheet().cssText=r+"{display:inline-block;overflow:hidden;width:300px;height:150px}";j.readyState==="complete"?A():j.attachEvent(E,A);
h.attachEvent(I,H);if(u.indexOf(location.protocol+"//"+location.host+"/")===0){var T=new ActiveXObject("Microsoft.XMLHTTP");T.open("GET",u,false);T.send(k)}h[L]=x;h[M]=y;h[N]=R;h[C]=B;h[O]={init:function(){},init_:function(){},initElement:B.initElement};keep=x.measureText}(window,document);
