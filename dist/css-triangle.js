!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CssTriangle=e():t.CssTriangle=e()}(global,function(){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var n=new(function(){function t(){this.option={width:100,height:100,color:"#999",direction:"top"}}return t.prototype.generate=function(t){return this.option=Object.assign(this.option,t),r({width:0,height:0,"border-style":"solid","border-color":"transparent","border-width":this.getBorderWidth()},this.getBorderDirection())},t.prototype.getBorderWidth=function(){var t=Number(this.option.width)/2,e=Number(this.option.height)/2;switch(this.option.direction){case"top":return"0 "+t+"px "+this.option.height+"px "+t+"px";case"bottom":return this.option.height+"px "+t+"px 0 "+t+"px";case"right":return e+"px 0 "+e+"px "+this.option.width+"px";case"left":return e+"px "+this.option.width+"px "+e+"px 0";default:return"0 "+t+"px "+this.option.height+"px "+t+"px"}},t.prototype.getBorderDirection=function(){switch(this.option.direction){case"top":return{"border-bottom-color":this.option.color};case"bottom":return{"border-top-color":this.option.color};case"right":return{"border-left-color":this.option.color};case"left":return{"border-right-color":this.option.color};default:return{"border-bottom-color":this.option.color}}},t}());e.default=n,t.exports=n}])});