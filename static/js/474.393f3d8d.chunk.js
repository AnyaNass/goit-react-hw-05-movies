"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[474],{834:function(n,t,e){e.d(t,{W:function(){return a}});var r,i=e(168),o=e(444).ZP.div(r||(r=(0,i.Z)(["\n\tmax-width: 1200px;\n\tpadding: 0 15px;\n\tmargin: 0 auto;\n"]))),s=e(184),a=function(n){var t=n.children;return(0,s.jsx)(o,{children:t})}},755:function(n,t,e){e.d(t,{$:function(){return a}});var r,i=e(168),o=e(444).ZP.section(r||(r=(0,i.Z)(["\n\tpadding: 30px 0;\n"]))),s=e(184),a=function(n){var t=n.children;return(0,s.jsx)(o,{children:t})}},474:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,i,o,s,a,c,d,l,u,p,x,f=e(885),h=e(470),v=e(791),m=e(834),j=e(861),Z=e(757),g=e.n(Z),w=function(){var n=(0,j.Z)(g().mark((function n(t){var e,r;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("0b80d585dab8262100dc7063d058640e"));case 2:return e=n.sent,r=e.json(),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=e(168),P=e(444),y=e(731),k=P.ZP.button(r||(r=(0,b.Z)(["\n\tposition: absolute;\n\ttop: 20px;\n\tright: 20px;\n\tborder-radius: 50%;\n\tbackground-color: #000;\n\tcolor: red;\n\theight: 50px;\n\twidth: 50px;\n\tbox-shadow: 5px 5px 7px #000;\n\tfont-size: 22px;\n\ttransition: transform 250ms linear;\n\n\t:hover, :focus{\n\t\ttransform: scale(1.1);\n\t}\n"]))),_=P.ZP.div(i||(i=(0,b.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 30px;\n\tpadding: 30px 15px;\n"]))),z=P.ZP.ul(o||(o=(0,b.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin: 16px 0 0;\n"]))),C=(0,P.ZP)(y.rU)(s||(s=(0,b.Z)(["\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: #fff;\n\ttransition: color 250ms linear;\n\n\t:hover, :focus{\n\t\tcolor: red;\n\t}\n"]))),U=P.ZP.img(a||(a=(0,b.Z)(["\n\tborder-radius: 15px;\n"]))),M=P.ZP.div(c||(c=(0,b.Z)(["\n\twidth: 80%;\n"]))),O=P.ZP.h2(d||(d=(0,b.Z)(["\n\tfont-size: 32px;\n\tfont-weight: 800;\n"]))),S=P.ZP.p(l||(l=(0,b.Z)(["\n\tdisplay: flex;\n\talign-items: baseline;\n\tgap: 10px;\n\tmargin: 16px 0 0;\n\n\tspan{\n\t\tfont-weight: 700;\n\t\tfont-size: 20px;\n\t}\n"]))),W=P.ZP.h3(u||(u=(0,b.Z)(["\n\tfont-weight: 700;\n\tfont-size: 20px;\n\tmargin: 16px 0 0;\n"]))),$=P.ZP.p(p||(p=(0,b.Z)(["\n\tmargin: 8px 0 0;\n"]))),B=P.ZP.ul(x||(x=(0,b.Z)(["\n\tdisplay: flex;\n\tgap: 10px;\n\tmargin: 8px 0 0;\n"]))),E=e(355),G=e(755),H=e(184),R=function(){var n,t,e=(0,v.useState)(),r=(0,f.Z)(e,2),i=r[0],o=r[1],s=(0,h.UO)().id,a=(0,h.s0)(),c=(0,h.TH)();if((0,v.useEffect)((function(){w(s).then((function(n){return o(n)}))}),[s]),i)return(0,H.jsx)(G.$,{children:(0,H.jsxs)(m.W,{children:[(0,H.jsxs)(_,{children:[(0,H.jsx)(k,{type:"button",onClick:function(){var n,t;return a(null!==(n=null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:(0,H.jsx)(E.BMs,{})}),(0,H.jsxs)("div",{children:[(0,H.jsx)(U,{src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:i.original_title,width:"400"}),(0,H.jsxs)(z,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(C,{to:"actors",state:{from:null===c||void 0===c||null===(n=c.state)||void 0===n?void 0:n.from},children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(C,{to:"reviews",state:{from:null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from},children:"Reviews"})})]})]}),(0,H.jsxs)(M,{children:[(0,H.jsx)(O,{children:i.title}),(0,H.jsxs)(S,{children:[(0,H.jsx)("span",{children:"User score"})," ",Math.round(i.vote_average)]}),(0,H.jsx)(W,{children:"Overview"}),(0,H.jsx)($,{children:i.overview}),(0,H.jsx)(W,{children:"Genres"}),(0,H.jsx)(B,{children:i.genres.map((function(n){return(0,H.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,H.jsx)(v.Suspense,{children:(0,H.jsx)(h.j3,{})})]})})}},861:function(n,t,e){function r(n,t,e,r,i,o,s){try{var a=n[o](s),c=a.value}catch(d){return void e(d)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var s=n.apply(t,e);function a(n){r(s,i,o,a,c,"next",n)}function c(n){r(s,i,o,a,c,"throw",n)}a(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=474.393f3d8d.chunk.js.map