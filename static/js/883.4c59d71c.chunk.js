"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[883],{854:function(e,t,r){r.d(t,{a:function(){return u}});var n=r(5243),a=r(184),u=function(){return(0,a.jsx)(n.g4,{height:"80",width:"80",radius:"9",color:"rgb(63, 81, 181)",ariaLabel:"three-dots-loading",wrapperStyle:{marginLeft:"auto",marginRight:"auto"},visible:!0})}},2883:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n,a,u,c=r(5861),s=r(9439),o=r(7757),i=r.n(o),p=r(1686),f=r.n(p),l=r(2791),v=r(7689),h=r(409),d=r(854),m=r(168),x=r(6444),g=x.ZP.div(n||(n=(0,m.Z)(["\n  margin-top: 20px;\n"]))),w=x.ZP.li(a||(a=(0,m.Z)(["\n  padding: 10px;\n  text-decoration: none;\n  list-style: none;\n  margin-bottom: 15px;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n"]))),b=x.ZP.p(u||(u=(0,m.Z)(["\n  margin-bottom: 5px;\n"]))),Z=r(184),y=function(e){var t=e.reviews;return(0,Z.jsx)(g,{children:t&&t.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,Z.jsxs)(w,{children:[(0,Z.jsxs)(b,{children:[(0,Z.jsx)("b",{children:"Author: "})," ",r]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)("b",{children:"Review: "})," ",n]})]},t)}))})},k=function(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],a=(0,l.useState)(null),u=(0,s.Z)(a,2),o=u[0],p=u[1],m=(0,l.useState)(!1),x=(0,s.Z)(m,2),g=x[0],w=x[1],b=(0,v.UO)().movieId;return(0,l.useEffect)((function(){if(b){var e=function(){var e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,h.Jh)(b);case 4:if(0!==(t=e.sent).length){e.next=8;break}return f().Notify.info("Sorry there are no reviews by your request!"),e.abrupt("return");case 8:n(t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),p(e.t0),f().Notify.failure("Oops,something went wrong.Please try again!");case 15:return e.prev=15,w(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[b]),(0,Z.jsxs)("div",{children:[g&&(0,Z.jsx)(d.a,{}),o&&(0,Z.jsxs)("p",{children:[o.message," "]}),(0,Z.jsx)(y,{reviews:r})]})}},409:function(e,t,r){r.d(t,{Df:function(){return o},IQ:function(){return f},Jh:function(){return l},eO:function(){return p},z1:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),c=r(1243),s="8a5752e4abef75f2eb883e6eab6ac34d";c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.headers.common.Authorization=s,c.Z.defaults.params={api_key:"".concat(s)};var o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day");case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie",{params:{query:t}});case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=883.4c59d71c.chunk.js.map