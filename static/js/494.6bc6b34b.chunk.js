"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[494,559],{834:function(n,t,e){e.d(t,{W:function(){return c}});var r,i=e(168),o=e(444).ZP.div(r||(r=(0,i.Z)(["\n\tmax-width: 1200px;\n\tpadding: 0 15px;\n\tmargin: 0 auto;\n"]))),a=e(184),c=function(n){var t=n.children;return(0,a.jsx)(o,{children:t})}},559:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,i,o=e(355),a=e(168),c=e(444),s=c.ZP.div(r||(r=(0,a.Z)(["\n\tcolor: red;\n\ttext-align: center;\n\tfont-size: 75px;\n\tpadding: 30px 0;\n"]))),u=c.ZP.p(i||(i=(0,a.Z)(["\n\tfont-size: 30px;\n"]))),d=e(184),l=function(n){var t=n.text;return(0,d.jsxs)(s,{children:[(0,d.jsx)(o.Lc5,{}),(0,d.jsx)(u,{children:t})]})}},854:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(243),i=e(184),o=function(){return(0,i.jsx)(r.BR,{color:"red",wrapperStyle:{justifyContent:"center"}})}},545:function(n,t,e){e.d(t,{O:function(){return j}});var r,i,o,a,c,s,u=e(168),d=e(444),l=e(731),f=d.ZP.ul(r||(r=(0,u.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 30px;\n\tflex-wrap: wrap;\n"]))),p=d.ZP.li(i||(i=(0,u.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\theight: 100%;\n\twidth: 300px;\n\ttransition: transform 250ms linear;\n\n\t:hover, :focus{\n\t\ttransform: scale(1.1);\n\t}\n"]))),x=d.ZP.img(o||(o=(0,u.Z)(["\n\tborder-radius: 15px;\n\theight: 495px;\n\twidth: 330px;\n"]))),h=d.ZP.div(a||(a=(0,u.Z)(["\n\tpadding: 8px;\n\ttext-align: center;\n"]))),v=d.ZP.p(c||(c=(0,u.Z)(["\n\ttext-decoration: none;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-size: 22px;\n\ttransition: color 250ms linear;\n\t\n\t",":hover & {\n\t\tcolor: red;\n\t}\n"])),p),m=(0,d.ZP)(l.rU)(s||(s=(0,u.Z)(["\n\ttext-decoration: none;\n"]))),Z=e(711),g=e(184),j=function(n){var t=n.movies,e=n.location,r=n.toDetailsPath,i=void 0===r?"":r;return(0,g.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.title,o=n.poster_path;return(0,g.jsx)(p,{children:(0,g.jsxs)(m,{to:"".concat(i).concat(t),state:{from:e},children:[(0,g.jsx)(x,{src:(0,Z.m)(o),alt:r}),(0,g.jsx)(h,{children:(0,g.jsx)(v,{children:r})})]})},t)}))})}},755:function(n,t,e){e.d(t,{$:function(){return c}});var r,i=e(168),o=e(444).ZP.section(r||(r=(0,i.Z)(["\n\tpadding: 30px 0;\n"]))),a=e(184),c=function(n){var t=n.children;return(0,a.jsx)(o,{children:t})}},711:function(n,t,e){e.d(t,{m:function(){return r}});var r=function(n){return n?"https://image.tmdb.org/t/p/w500".concat(n):n?void 0:"https://scalar.usc.edu/works/guide/media/gradient.jpg"}},494:function(n,t,e){e.r(t),e.d(t,{default:function(){return W}});var r,i,o,a,c,s,u,d,l,f=e(470),p=e(861),x=e(885),h=e(757),v=e.n(h),m=e(791),Z=e(731),g=function(){var n=(0,p.Z)(v().mark((function n(t){var e,r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("0b80d585dab8262100dc7063d058640e","&query=").concat(t));case 2:return e=n.sent,r=e.json(),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),j=e(559),w=e(854),b=e(168),y=e(444),P=y.ZP.form(r||(r=(0,b.Z)(["\n\tdisplay: flex;\n\tgap: 12px;\n\tjustify-content: center;\n\tmargin: 0 0 30px 0;\n\talign-items: center;\n"]))),k=y.ZP.input(i||(i=(0,b.Z)(["\n\twidth: 400px;\n\tbackground-color: #000;\n\tborder: none;\n\tpadding: 20px 15px;\n\tdisplay: block;\n\toutline: none;\n\tcolor: #fff;\n\tborder-bottom: 1px solid transparent;\n\tborder-radius: 5px;\n\ttransition: border 250ms linear;\n\n\t:focus{\n\t\tborder-bottom: 1px solid red;\n\t}\n"]))),S=y.ZP.button(o||(o=(0,b.Z)(["\n\twidth: 60px;\n\theight: 60px;\n\tbackground-color: rgb(0, 0, 0);\n\tcolor: red;\n\tfont-weight: 900;\n\tfont-size: 22px;\n\tborder-radius: 50%;\n\ttransition: transform 250ms linear;\n\n\t:hover, :focus{\n\t\ttransform: scale(1.1);\n\t}\n"]))),_=(y.ZP.ul(a||(a=(0,b.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 30px;\n\tflex-wrap: wrap;\n\tpadding: 30px 0;\n"]))),y.ZP.li(c||(c=(0,b.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\theight: 100%;\n\twidth: 300px;\n\ttransition: transform 250ms linear;\n\n\t:hover, :focus{\n\t\ttransform: scale(1.1);\n\t}\n"])))),z=(y.ZP.img(s||(s=(0,b.Z)(["\n\tborder-radius: 15px;\n\theight: 495px;\n\twidth: 330px;\n"]))),y.ZP.div(u||(u=(0,b.Z)(["\n\tpadding: 8px;\n\ttext-align: center;\n"]))),y.ZP.p(d||(d=(0,b.Z)(["\n\ttext-decoration: none;\n\tcolor: #fff;\n\tfont-weight: 700;\n\tfont-size: 22px;\n\ttransition: color 250ms linear;\n\t\n\t",":hover & {\n\t\tcolor: red;\n\t}\n"])),_),(0,y.ZP)(Z.rU)(l||(l=(0,b.Z)(["\n\ttext-decoration: none;\n"]))),e(355)),C=e(545),O=e(755),q=e(834),U=e(184),D=function(){var n,t=(0,m.useState)([]),e=(0,x.Z)(t,2),r=e[0],i=e[1],o=(0,m.useState)(!1),a=(0,x.Z)(o,2),c=a[0],s=a[1],u=(0,m.useState)(!1),d=(0,x.Z)(u,2),l=d[0],h=d[1],b=(0,Z.lr)(),y=(0,x.Z)(b,2),_=y[0],D=y[1],W=null!==(n=_.get("query"))&&void 0!==n?n:"",$=(0,f.UO)().id,B=(0,f.TH)(),E=function(){var n=(0,p.Z)(v().mark((function n(t){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),""!==W){n.next=3;break}return n.abrupt("return");case 3:return s(!1),h(!0),n.prev=5,n.next=8,g(W);case 8:if(e=n.sent,i(e.results),0!==e.results.length){n.next=12;break}throw new Error;case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(5),s(!0);case 17:return n.prev=17,h(!1),n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[5,14,17,20]])})));return function(t){return n.apply(this,arguments)}}();if(!$)return(0,U.jsx)(O.$,{children:(0,U.jsxs)(q.W,{children:[(0,U.jsxs)(P,{onSubmit:E,children:[(0,U.jsx)(k,{type:"text",value:W,onChange:function(n){D(""!==n.target.value?{query:n.target.value}:{})},placeholder:"Search movie"}),(0,U.jsx)(S,{type:"submit",children:(0,U.jsx)(z.e7O,{})})]}),r.length>0&&!$&&(0,U.jsx)(C.O,{movies:r,location:B}),l&&(0,U.jsx)(w.a,{}),c&&(0,U.jsx)(j.default,{text:"Sorry, we didn`t find anything"})]})})},W=function(){return(0,U.jsxs)("main",{children:[(0,U.jsx)(D,{}),(0,U.jsx)(f.j3,{})]})}},861:function(n,t,e){function r(n,t,e,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?t(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var a=n.apply(t,e);function c(n){r(a,i,o,c,s,"next",n)}function s(n){r(a,i,o,c,s,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=494.6bc6b34b.chunk.js.map