"use strict";(self.webpackChunkthebe_core=self.webpackChunkthebe_core||[]).push([[5106],{35106:(e,t,n)=>{n.r(t),n.d(t,{solr:()=>a});var r=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,o=/[\|\!\+\-\*\?\~\^\&]/,u=/^(OR|AND|NOT|TO)$/;function i(e,t){var n,a,k=e.next();return'"'==k?t.tokenize=(a=k,function(e,t){for(var n,r=!1;null!=(n=e.next())&&(n!=a||r);)r=!r&&"\\"==n;return r||(t.tokenize=i),"string"}):o.test(k)?t.tokenize=(n=k,function(e,t){return"|"==n?e.eat(/\|/):"&"==n&&e.eat(/\&/),t.tokenize=i,"operator"}):r.test(k)&&(t.tokenize=function(e){return function(t,n){for(var o=e;(e=t.peek())&&null!=e.match(r);)o+=t.next();return n.tokenize=i,u.test(o)?"operator":function(e){return parseFloat(e).toString()===e}(o)?"number":":"==t.peek()?"propertyName":"string"}}(k)),t.tokenize!=i?t.tokenize(e,t):null}const a={name:"solr",startState:function(){return{tokenize:i}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}}]);
//# sourceMappingURL=5106.thebe-core.min.js.map