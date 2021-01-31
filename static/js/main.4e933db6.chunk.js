(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(n,t,e){},66:function(n,t,e){"use strict";e.r(t);var r,c,a,o=e(1),i=e(0),u=e.n(i),b=e(14),s=e.n(b),f=e(8),l=(e(47),e(5)),j=e(32),d=e(11),O=e(2),p=e(19),x=e(6),m=Object(x.a)("contact/Filter"),g=Object(x.a)("contact/fetchRequest"),h=Object(x.a)("contact/fetchSuccess"),v=Object(x.a)("contact/fetchError"),y=Object(x.a)("contact/addRequest"),k=Object(x.a)("contact/addSuccess"),z=Object(x.a)("contact/addError"),w=Object(x.a)("contact/removeRequest"),C=Object(x.a)("contact/removeSuccess"),S=Object(x.a)("contact/removeError"),E=Object(x.b)([],(r={},Object(O.a)(r,h,(function(n,t){var e=t.payload;return Object(p.a)(e)})),Object(O.a)(r,k,(function(n,t){var e=t.payload;return[].concat(Object(p.a)(n),[e])})),Object(O.a)(r,C,(function(n,t){var e=t.payload;return n.filter((function(n){return n.id!==e}))})),r)),R=Object(x.b)("",Object(O.a)({},m.type,(function(n,t){return t.payload}))),q=Object(x.b)(!1,(c={},Object(O.a)(c,g,(function(){return!0})),Object(O.a)(c,h,(function(){return!1})),Object(O.a)(c,v,(function(){return!1})),Object(O.a)(c,y,(function(){return!0})),Object(O.a)(c,k,(function(){return!1})),Object(O.a)(c,z,(function(){return!1})),Object(O.a)(c,w,(function(){return!0})),Object(O.a)(c,C,(function(){return!1})),Object(O.a)(c,S,(function(){return!1})),c)),L=Object(x.b)(!1,(a={},Object(O.a)(a,g,(function(){return""})),Object(O.a)(a,h,(function(){return""})),Object(O.a)(a,v,(function(n,t){return t.payload})),Object(O.a)(a,y,(function(){return""})),Object(O.a)(a,k,(function(){return""})),Object(O.a)(a,z,(function(n,t){return t.payload})),Object(O.a)(a,w,(function(){return""})),Object(O.a)(a,C,(function(){return""})),Object(O.a)(a,S,(function(n,t){return t.payload})),a)),X=Object(l.combineReducers)({items:E,filter:R,loading:q,error:L}),D=Object(l.combineReducers)({contacts:X}),F=Object(l.createStore)(D,Object(j.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),M=(e(48),e(20)),J=e(13),N=e.n(J);N.a.defaults.baseURL="http://localhost:4001/";var T=e(15),A=function(n){return n.contacts.items},B=function(n){return n.contacts.filter},I=function(n){return n.contacts.loading},P=function(n){return n.contacts.error},U=Object(T.a)([A,B],(function(n,t){var e=t.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),W=e(3),G=e(4);function H(){var n=Object(W.a)(["\n  text-align: center;\n  font-size: 22px;\n  font-weight: bold;\n"]);return H=function(){return n},n}function K(){var n=Object(W.a)(["\n  outline: none;\n  padding: 12px 20px;\n  margin: 10px 5px;\n  border-radius: 10px;\n  background-color: #e9967a;\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 24px;\n  color: white;\n"]);return K=function(){return n},n}function Q(){var n=Object(W.a)(["\n  display: block;\n  margin: 10px auto;\n  padding: 12px 20px;\n  font-size: 18px;\n  border-radius: 10px;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 18px;\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(W.a)(["\n  display: block;\n  margin-bottom: 10px;\n"]);return V=function(){return n},n}var Y=G.a.form(V()),Z=G.a.input(Q()),$=G.a.button(K()),_=G.a.label(H()),nn=function(){var n=Object(f.b)(),t=Object(f.c)(A),e=Object(i.useState)(""),r=Object(M.a)(e,2),c=r[0],a=r[1],u=Object(i.useState)(""),b=Object(M.a)(u,2),s=b[0],l=b[1],j=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":a(r);break;case"number":l(r)}},d=function(){a(""),l("")};return Object(o.jsxs)(Y,{onSubmit:function(e){(e.preventDefault(),function(n){var e=n.toLowerCase();return t.find((function(n){return n.name.toLowerCase()===e}))}(c))?alert("".concat(c," is already in contact")):n(function(n){var t=n.name,e=n.number;return function(n){n(y()),N.a.post("contacts",{name:t,number:e}).then((function(t){var e=t.data;return n(k(e))})).catch((function(t){return n(z(t.message))}))}}({name:c,number:s}));d()},children:[Object(o.jsxs)(_,{children:["Name",Object(o.jsx)(Z,{onChange:j,type:"text",name:"name",placeholder:"Enter name",value:c,required:!0})]}),Object(o.jsxs)(_,{children:["Number",Object(o.jsx)(Z,{onChange:j,type:"tel",name:"number",placeholder:"Enter number",value:s,required:!0})]}),Object(o.jsx)($,{type:"submit",children:"Add contact"})]})};function tn(){var n=Object(W.a)(["\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  color: #fa8072;\n  font-size: 22px;\n  font-weight: bold;\n"]);return tn=function(){return n},n}function en(){var n=Object(W.a)(["\n  display: block;\n  margin: 10px auto;\n  padding: 5px;\n  font-size: 18px;\n  border-radius: 10px;\n  outline: none;\n\n  &::placeholder {\n    padding-left: 10px;\n    font-size: 16px;\n  }\n"]);return en=function(){return n},n}var rn=G.a.input(en()),cn=G.a.label(tn()),an=function(){var n=Object(f.b)(),t=Object(f.c)(B);return Object(o.jsxs)(cn,{children:["Find contacts by name",Object(o.jsx)(rn,{value:t,onChange:function(t){return n(m(t.target.value))},type:"text",placeholder:"Enter name"})]})};function on(){var n=Object(W.a)(["\n  margin-left: auto;\n  outline: none;\n  padding: 2px 5px;\n  border-radius: 10px;\n  background-color: #fa8072;\n  background-position: 100% 0;\n  background-size: 200% 200%;\n  font-size: 16px;\n  color: white;\n"]);return on=function(){return n},n}function un(){var n=Object(W.a)(["\n  margin: 0;\n"]);return un=function(){return n},n}function bn(){var n=Object(W.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n"]);return bn=function(){return n},n}var sn=G.a.li(bn()),fn=G.a.p(un()),ln=G.a.button(on()),jn=function(n){var t=n.name,e=n.number,r=n.deleteContact;return Object(o.jsxs)(sn,{children:[Object(o.jsxs)(fn,{children:[t,": ",e]}),Object(o.jsx)(ln,{type:"button",onClick:r,children:"Delete"})]})};function dn(){var n=Object(W.a)(["\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-color: #3399ff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: "," 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n  -o-animation: "," 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n  -ms-animation: "," 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n  -webkit-animation: "," 1s cubic-bezier(0.77, 0, 0.175, 1)\n    infinite;\n  -moz-animation: "," 1s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n"]);return dn=function(){return n},n}function On(){var n=Object(W.a)(["\n\t0% {\n\t\ttransform: translateX(0) scale(1);\n\t}\n\t25% {\n\t\ttransform: translateX(-49px) scale(0.3);\n\t}\n\t50% {\n\t\ttransform: translateX(0) scale(1);\n\t}\n\t75% {\n\t\ttransform: translateX(49px) scale(0.3);\n\t}\n\t100% {\n\t\ttransform: translateX(0) scale(1);\n\t}\n"]);return On=function(){return n},n}var pn=Object(G.b)(On()),xn=G.a.div(dn(),pn,pn,pn,pn,pn),mn=function(){return Object(o.jsx)(xn,{})};function gn(){var n=Object(W.a)(["\n  color: #b22222;\n  font-weight: bold;\n  line-height: 30px;\n  padding: 20px 16px 0;\n  font-size: 22px;\n  text-align: center;\n"]);return gn=function(){return n},n}function hn(){var n=Object(W.a)(["\n  list-style: none;\n  padding: 0;\n"]);return hn=function(){return n},n}var vn=G.a.ul(hn()),yn=G.a.div(gn()),kn=function(){var n=Object(f.b)(),t=Object(f.c)(U),e=Object(f.c)(I),r=Object(f.c)(P);return Object(i.useEffect)((function(){n((function(n){n(g()),N.a.get("contacts").then((function(t){var e=t.data;return n(h(e))})).catch((function(t){return n(v(t.message))}))}))}),[]),Object(o.jsxs)(o.Fragment,{children:[e&&Object(o.jsx)(mn,{}),r&&Object(o.jsxs)(yn,{children:["Something wrong... ",r,"! Try again later!"]}),!e&&!r&&t&&t.length>0?Object(o.jsx)(vn,{children:t.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(o.jsx)(jn,{name:r,number:c,deleteContact:function(){return n(function(n){return function(t){t(w()),N.a.delete("contacts/".concat(n)).then((function(){return t(C(n))})).catch((function(n){return t(S(n.message))}))}}(e))}},e)}))}):null]})};function zn(){var n=Object(W.a)(["\n  color: var(--titleColor);\n  font-size: 24px;\n"]);return zn=function(){return n},n}function wn(){var n=Object(W.a)(["\n  font-size: 48px;\n  color: var(--titleColor);\n  text-align: center;\n"]);return wn=function(){return n},n}function Cn(){var n=Object(W.a)(["\n  background-color: var(--bgColorContainer);\n  width: 400px;\n  margin: 30px auto;\n  padding: 15px;\n  text-align: center;\n  border-radius: 10px;\n"]);return Cn=function(){return n},n}var Sn=G.a.div(Cn()),En=G.a.h1(wn()),Rn=G.a.h2(zn()),qn=function(){return Object(o.jsxs)(Sn,{children:[Object(o.jsx)(En,{children:"Phonebook"}),Object(o.jsx)(nn,{}),Object(o.jsx)(Rn,{children:"Contacts"}),Object(o.jsx)(an,{}),Object(o.jsx)(kn,{})]})};s.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(f.a,{store:F,children:Object(o.jsx)(qn,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4e933db6.chunk.js.map