!function(t){var i,e,a,o=(e=(i=t).backingStorePixelRatio||i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1,(window.devicePixelRatio||1)/e);1!==o&&(!function(t,i){for(var e in t)t.hasOwnProperty(e)&&i(t[e],e)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(i,e){var a;t[e]=(a=t[e],function(){var t,e,r=Array.prototype.slice.call(arguments);if("all"===i)r=r.map((function(t){return t*o}));else if(Array.isArray(i))for(t=0,e=i.length;t<e;t++)r[i[t]]*=o;return a.apply(this,r)})})),t.stroke=(a=t.stroke,function(){this.lineWidth*=o,a.apply(this,arguments),this.lineWidth/=o}),t.fillText=function(t){return function(){var i=Array.prototype.slice.call(arguments);i[1]*=o,i[2]*=o,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,i,e){return i*o+e})),t.apply(this,i),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,i,e){return i/o+e}))}}(t.fillText),t.strokeText=function(t){return function(){var i=Array.prototype.slice.call(arguments);i[1]*=o,i[2]*=o,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,i,e){return i*o+e})),t.apply(this,i),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,i,e){return i/o+e}))}}(t.strokeText))}(CanvasRenderingContext2D.prototype),function(t){var i;t.getContext=(i=t.getContext,function(t){var e,a,o=i.call(this,t);return"2d"===t&&(e=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,(a=(window.devicePixelRatio||1)/e)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=a,this.height*=a)),o})}(HTMLCanvasElement.prototype);
