"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[281],{281:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,a,i,s,o=t(439),c=t(791),l=t(87),d=t(689),h=t(168),u=t(444),p=u.ZP.div(r||(r=(0,h.Z)(["\n  display: inline-flex;\n  width: auto;\n"]))),v=u.ZP.div(a||(a=(0,h.Z)(["\n  display: block;\n  padding: 30px;\n  > a {\n    text-decoration: none;\n  }\n"]))),f=u.ZP.img(i||(i=(0,h.Z)(["\n  display: inline-flex;\n  width: 30%;\n"]))),x=u.ZP.h1(s||(s=(0,h.Z)(["\n  padding: 0;\n  margin: 0;\n  border: 0;\n"]))),j=t(184),m=function(e){var n=e.dataMovie,t=n.title,r=n.overview,a=n.poster_path,i=n.vote_average,s=n.genres,o=n.release_date,c="https://image.tmdb.org/t/p/w500".concat(a),l=s.length>0?s.map((function(e){return e.name})).join(", "):"No information",d=o.slice(0,7),h="".concat((10*i).toFixed(2),"%");return(0,j.jsxs)(p,{children:[(0,j.jsx)(f,{src:c,alt:t}),(0,j.jsxs)(v,{children:[(0,j.jsx)(x,{children:"".concat(t," (").concat(d,")")}),(0,j.jsx)("p",{children:"User score: ".concat(h)}),(0,j.jsx)("h3",{children:"Overview"}),(0,j.jsx)("p",{children:r}),(0,j.jsx)("h4",{children:"Genres"}),(0,j.jsx)("p",{children:l})]})]})},g=t(861),w=t(757),b=t.n(w),_=t(243);function k(){return(k=(0,g.Z)(b().mark((function e(n){var t,r,a,i,s,o,c,l;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US"));case 3:return t=e.sent,r=t.data,a=r.title,i=r.overview,s=r.poster_path,o=r.vote_average,c=r.genres,l=r.release_date,e.abrupt("return",{vote_average:o,title:a,release_date:l,overview:i,poster_path:s,genres:c});case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var Z=(0,c.lazy)((function(){return Promise.all([t.e(617),t.e(819)]).then(t.bind(t,819))})),y=function(){var e,n,t=(0,c.useState)(null),r=(0,o.Z)(t,2),a=r[0],i=r[1],s=(0,d.UO)().movieId,h=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(function(e){return k.apply(this,arguments)})(s).then((function(e){i(e)}))}),[s]),(0,j.jsxs)("main",{children:[(0,j.jsx)(Z,{to:h,children:"Go back"}),a&&(0,j.jsx)(m,{dataMovie:a}),(0,j.jsxs)(c.Suspense,{fallback:(0,j.jsx)("div",{children:"Loading..."}),children:[(0,j.jsx)("p",{children:"Additional info:"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"cast",state:{from:h},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"reviews",state:{from:h},children:"Reviews"})})]}),(0,j.jsx)(d.j3,{})]})]})}}}]);
//# sourceMappingURL=281.22ccb2c9.chunk.js.map