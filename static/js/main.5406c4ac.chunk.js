(this.webpackJsonptree=this.webpackJsonptree||[]).push([[0],{135:function(e,n,t){e.exports=t(293)},140:function(e,n,t){},216:function(e,n,t){},293:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(17),i=t.n(o),c=(t(140),t(18)),l=t.n(c),u=t(28),s=t(27),m=t(12),f=t(128),d=t(14),p=t(4),b=t(5);function g(){var e=Object(p.a)(["\nwidth: 89px;\nheight: 40px;\nborder-radius: 4px;\nbackground-color: #ffffff;\nborder: 1px solid #ffffff;\ncursor: pointer;\n&:active, &:focus {\n  outline: none;\n}\n"]);return g=function(){return e},e}var h=b.a.button(g()),E=function(e){return{type:"SET_AUTH_STATE",data:e}};function v(){var e=Object(p.a)(["\n  position: absolute;\n  right: ",";\n"]);return v=function(){return e},e}function x(){var e=Object(p.a)(["\n  margin-left: 12%;\n  cursor: pointer;\n  font-weight: 500;\n"]);return x=function(){return e},e}function w(){var e=Object(p.a)(["\n  font-size: 20px;\n  margin-right: 8%;\n"]);return w=function(){return e},e}function j(){var e=Object(p.a)(["\n  width: 46px;\n  height: 46px;\n  background-color: #ffffff;\n  border: 1px solid #707070;\n  border-radius: 100%;\n  margin-left: 2%;\n  margin-right: 10px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  height: 70px;\n  background-color: #372c5a;\n  display: flex;\n  align-items: center;\n  color: #ffffff;\n"]);return O=function(){return e},e}var y=b.a.div(O()),P=b.a.div(j()),k=b.a.span(w()),S=b.a.span(x()),N=Object(b.a)(h)(v(),(function(e){return e.right?e.right:"2%"})),A=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{clearAuthState:function(){return{type:"CLEAR_AUTH_STATE"}}})((function(e){var n=e.isAuthenticated,t=e.clearAuthState,a=Object(m.g)();return r.a.createElement(y,null,r.a.createElement(P,null),r.a.createElement(k,null,"Logo"),n&&r.a.createElement(S,null,"Main")," ",n&&r.a.createElement(S,null,"Projects")," ",n&&r.a.createElement(S,null,"Monitor")," ",n&&r.a.createElement(S,null,"Resources")," ",n?r.a.createElement(N,{onClick:function(){return f.a.signOut(),t(),void a.push("/login")}},"Sign Out"):r.a.createElement(N,{onClick:function(){return a.push("/login")}},"Login"),!n&&r.a.createElement(N,{right:"10%",onClick:function(){return a.push("/register")}},"Sign Up"))})),L=t(11);t(216);function C(){var e=Object(p.a)(["\n  box-shadow: 0px 3px 3px #00000029;\n  border-radius: 0px 4px 4px 0px;\n  width: 35px;\n  height: 64px;\n  position: absolute;\n  left: 100%;\n  background-color: #ffffff;\n  display: flex;\n  flex-flow: column;\n  color: #c8cad1;\n  align-items: center;\n  justify-content: space-evenly;\n"]);return C=function(){return e},e}function D(){var e=Object(p.a)(["\n@keyframes animate {\n  from{\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(90deg);\n  }\n}\n  color: #c8cad1;\n  position: absolute;\n  right: 5%;\n  top: 35px;\n  cursor: pointer;\n  transform: ",";\n  transition: all .5s ease;\n"]);return D=function(){return e},e}function T(){var e=Object(p.a)(["\n  font-size: 12px;\n  letter-spacing: 0.1px;\n  color: #737a92;\n"]);return T=function(){return e},e}function z(){var e=Object(p.a)(["\n  font-size: 15px;\n  font-weight: 500;\n  color: #3b3f48;\n  margin-top: 6px;\n  margin-bottom: 5px;\n"]);return z=function(){return e},e}function F(){var e=Object(p.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  color: #737a92;\n"]);return F=function(){return e},e}function _(){var e=Object(p.a)(["\n  margin-left: 5%;\n  height: 100%;\n  padding-top: 10px;\n  // display: flex;\n"]);return _=function(){return e},e}function W(){var e=Object(p.a)(["\n  width: 52px;\n  height: 50px;\n  border-radius: 100%;\n  background-color: #e3e3e3;\n  border: 1px solid #e3e3e3;\n  margin-left: 5%;\n  color: #767676;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return W=function(){return e},e}function B(){var e=Object(p.a)(["\n  width: 4px;\n  height: 100%;\n  // background-color: #ff9800;\n  background-color: ",";\n"]);return B=function(){return e},e}function R(){var e=Object(p.a)(["\n  height: 89px;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px #00000029;\n  width: ",";\n  margin-left: ",";\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-top: 20px;\n"]);return R=function(){return e},e}var I=b.a.div(R(),(function(e){return"".concat(Number(e.widthFactor)-5,"%")}),(function(e){return"".concat(e.left,"%")})),U=b.a.div(B(),(function(e){return console.log("color select inside styled",e.colorSelect),e.colorSelect})),M=b.a.div(W()),H=b.a.div(_()),X=b.a.span(F()),V=b.a.div(z()),Y=b.a.div(T()),$=b.a.i(D(),(function(e){return e.expandObj?"rotate(90deg)":"rotate(0deg)"})),J=b.a.div(C()),q=function e(n){var t=n.object,o=n.widthFactor,i=n.colorSelect,c=Object(a.useState)(!1),l=Object(L.a)(c,2),u=l[0],s=l[1];return console.log("inside single object",t,o),r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{widthFactor:o,left:function(e){var n=90-e;return 0===n?2.5:n+2.5}(Number(o)-5)},r.a.createElement(U,{colorSelect:i}),r.a.createElement(M,null,t.name.substr(0,1)),r.a.createElement(H,null,r.a.createElement(X,null,t.name),r.a.createElement(V,null,"Description"),r.a.createElement(Y,null,t.description)),t.data&&r.a.createElement("div",{style:{marginTop:"15px",marginLeft:"2%"}},r.a.createElement(V,null,"Example Data"),r.a.createElement(Y,null,t.data)),t.subData&&r.a.createElement($,{onClick:function(){return s(!u)},className:"fas fa-chevron-right hello",expandObj:u}),r.a.createElement(J,null,r.a.createElement("i",{style:{cursor:"pointer"},className:"fas fa-pencil-alt"}),r.a.createElement("i",{style:{cursor:"pointer"},className:"fas fa-times"}))),u&&t.subData.map((function(n){return r.a.createElement(e,{colorSelect:i,widthFactor:o-5,object:n})})))};function G(){var e=Object(p.a)(["\n  float: right;\n  margin-right: 5%;\n  color: #737A92;\n  margin-top: 10px;\n  cursor: pointer;\n"]);return G=function(){return e},e}function Q(){var e=Object(p.a)(["\n  background-color: #3ab539;\n  border-radius: 4px;\n  border: 1px solid #3ab539;\n  color: #ffffff;\n  width: 96px;\n  height: 36px;\n  float: right;\n  margin-right: 2%;\n  cursor: pointer;\n"]);return Q=function(){return e},e}function K(){var e=Object(p.a)(["\n  color: #455a64;\n  font-size: 25px;\n  margin-left: 2.5%;\n"]);return K=function(){return e},e}function Z(){var e=Object(p.a)(["\n  box-shadow: 0px 3px 6px #00000029;\n  width: 70%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-top: 23px;\n  padding-bottom: 60px;\n  padding-top: 20px;\n  margin-bottom: 20px;\n"]);return Z=function(){return e},e}var ee=b.a.div(Z()),ne=b.a.span(K()),te=b.a.button(Q()),ae=b.a.i(G()),re=["#FF9800","#9591B2","#00C11E","#372C5A","#24A7DF"],oe=Object(d.b)((function(e){return{data:e.data}}))((function(e){return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(ee,null,r.a.createElement(ne,null,"Project 1: Object A"),r.a.createElement(ae,{className:"far fa-trash-alt"}),r.a.createElement(te,null,"Add Object"),e.data&&e.data.map((function(e,n){return r.a.createElement(q,{colorSelect:re[n],widthFactor:95,object:e})}))))})),ie=t(35),ce=t.n(ie),le=t(13),ue=t(129),se=t(29);function me(){var e=Object(p.a)(["\n  border: 1px solid #dfe1e8;\n  border-radius: 4px;\n  height: 35px;\n  width: 100%;\n  font-size: 14px;\n  box-sizing: border-box;\n  padding-left: 10px;\n  color: #535353;\n"]);return me=function(){return e},e}function fe(){var e=Object(p.a)(["\n  display: block;\n  font-size: 14px;\n  letter-spacing: 0.1px;\n  color: #737a92;\n  margin-bottom: 10px;\n"]);return fe=function(){return e},e}function de(){var e=Object(p.a)(["\n  width: ",";\n  margin-left: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"]);return de=function(){return e},e}var pe=b.a.div(de(),(function(e){return void 0!==e.width?"".concat(e.width,"%"):"90%"}),(function(e){return void 0!==e.marginLeft?"".concat(e.marginLeft,"%"):"5%"}),(function(e){return void 0!==e.marginTop&&"".concat(e.marginTop,"px")}),(function(e){return void 0!==e.marginBottom&&"".concat(e.marginBottom,"px")})),be=b.a.label(fe()),ge=b.a.input(me()),he=function(e){var n=e.label,t=e.placeholder,a=e.marginTop,o=e.marginLeft,i=e.width,c=e.marginBottom,l=e.onChange,u=e.value,s=e.type;return console.log("margin left",o),r.a.createElement(pe,{width:i,marginLeft:o,marginTop:a,marginBottom:c},r.a.createElement(be,null,n),r.a.createElement(ge,Object(se.a)({onChange:function(e){return l(e.target.value)},value:u,type:"text",placeholder:t},"type",s||"string")))},Ee={control:function(e,n){return Object(le.a)(Object(le.a)({},e),{},{width:"100%",height:"38px",border:"1px solid #D6D6D6",borderRadius:"5px","&:focus":{outline:"none"},"&:active":{outline:"none"},fontSize:"14px",color:"#535353"})},indicatorSeparator:function(){return null},menuList:function(e,n){return Object(le.a)(Object(le.a)({},e),{},{fontSize:"14px"})}},ve=function(e){var n=e.label,t=e.options,a=e.placeholder,o=e.width,i=e.marginLeft,c=e.marginTop;return r.a.createElement(pe,{width:o,marginLeft:i,marginTop:c},r.a.createElement(be,null,n),r.a.createElement(ue.a,{options:t,placeholder:a,styles:Ee}))};function xe(){var e=Object(p.a)(["\n  font-size: 20px;\n  margin-right: 5px;\n"]);return xe=function(){return e},e}function we(){var e=Object(p.a)(["\n  border: none;\n  &:focus,\n  &:active {\n    outline: none;\n  }\n  height: 90%;\n  font-size: 16px;\n  padding-left: 5px;\n  color: #535353;\n  font-size: 14px;\n"]);return we=function(){return e},e}function je(){var e=Object(p.a)(["\n  width: 100%;\n  height: 38px;\n  border: 1px solid #d6d6d6;\n  border-radius: 5px;\n  color: #737a92;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return je=function(){return e},e}var Oe=b.a.div(je()),ye=b.a.input(we()),Pe=b.a.i(xe()),ke=function(e){var n=e.label,t=e.width,a=e.marginLeft,o=e.marginTop;return r.a.createElement(pe,{width:t,marginLeft:a,marginTop:o},r.a.createElement("label",null,n),r.a.createElement(Oe,null,r.a.createElement(ye,{type:"text"})," ",r.a.createElement(Pe,{className:"fal fa-search"})))};function Se(){var e=Object(p.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background-color: #00000099;\n  z-index: 1;\n"]);return Se=function(){return e},e}var Ne=b.a.div(Se());function Ae(){var e=Object(p.a)(["\n  position: fixed;\n  width: 50%;\n  background-color: #ffffff;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 10;\n  border-radius: 6px;\n"]);return Ae=function(){return e},e}var Le=b.a.div(Ae());function Ce(){var e=Object(p.a)(["\n  border: 1px solid #dfe1e8;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 14px;\n  color: #535353;\n  letter-spacing: 0.1px;\n  font-family: roboto, sans-serif;\n  font-weight: 400;\n"]);return Ce=function(){return e},e}var De=b.a.textarea(Ce()),Te=function(e){var n=e.label,t=e.placeholder,a=e.rows,o=e.marginTop;return r.a.createElement(pe,{marginTop:o},r.a.createElement(be,null,n),r.a.createElement(De,{placeholder:t,rows:a||5}))};function ze(){var e=Object(p.a)(["\n  background-color: #4a9d0d;\n  border-radius: 4px;\n  width: 120px;\n  height: 40px;\n  font-weight: 500;\n  letter-spacing: 0.07px;\n  color: #ffffff;\n  border: 1px solid #4a9d0d;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-top: 20px;\n  margin-bottom: 40px;\n"]);return ze=function(){return e},e}function Fe(){var e=Object(p.a)(["\n  position: absolute;\n  right: 13px;\n  top: 8px;\n  font-size: 26px;\n  color: #717171;\n  cursor: pointer;\n"]);return Fe=function(){return e},e}function _e(){var e=Object(p.a)(["\n  color: #455a64;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 26px;\n"]);return _e=function(){return e},e}var We=b.a.div(_e()),Be=b.a.i(Fe()),Re=b.a.button(ze()),Ie=[{label:"Long Term",value:"long"},{label:"Short Term",value:"short"},{label:"Mid Sized",value:"mid"}],Ue=function(e){var n=e.onCloseClick;return Object(a.useEffect)((function(){document.body.style.overflow="hidden"})),Object(a.useEffect)((function(){return function(){document.body.style.overflow="auto"}})),r.a.createElement(Le,null,r.a.createElement(We,null,"Let's Create a Project"),r.a.createElement(Be,{onClick:function(){return n()},className:"fal fa-times"}),r.a.createElement("div",{style:{width:"60%",marginLeft:"20%"}},r.a.createElement(he,{label:"Project Name",placeholder:"Enter Project Name",marginTop:20}),r.a.createElement(ve,{label:"Project Type",placeholder:"-- Select a Project Type --",marginTop:20,options:Ie}),r.a.createElement(Te,{label:"Project Description",placeholder:"Enter Project Description",marginTop:20}),r.a.createElement(Re,null,"SAVE")))};function Me(){var e=Object(p.a)(["\n  text-align: center;\n  width: 95%;\n  color: #737a92;\n  font-size: 15px;\n  font-weight: 500;\n  margin-top: 10px;\n"]);return Me=function(){return e},e}function He(){var e=Object(p.a)(["\n  width: 58px;\n  height: 30px;\n  background-color: #ff9800;\n  border-radius: 4px;\n  font-size: 15px;\n  font-weight: 600;\n  border: 1px solid #ff9800;\n  color: #ffffff;\n  position: absolute;\n  left: 92%;\n  cursor: pointer;\n  &:focus,\n  &:active {\n    outline: none;\n  }\n"]);return He=function(){return e},e}function Xe(){var e=Object(p.a)(["\n  position: relative;\n  font-size: 14px;\n  color: #737a92;\n  height: 50px;\n"]);return Xe=function(){return e},e}function Ve(){var e=Object(p.a)(["\n  position: absolute;\n  left: 50%;\n"]);return Ve=function(){return e},e}function Ye(){var e=Object(p.a)(["\n  position: absolute;\n  left: 32%;\n"]);return Ye=function(){return e},e}function $e(){var e=Object(p.a)(["\n  position: absolute;\n  left: 13%;\n"]);return $e=function(){return e},e}function Je(){var e=Object(p.a)(["\n  position: absolute;\n"]);return Je=function(){return e},e}function qe(){var e=Object(p.a)(["\n  color: #8a96a0;\n  position: relative;\n  font-size: 12px;\n  height: 50px;\n"]);return qe=function(){return e},e}function Ge(){var e=Object(p.a)(["\n  color: #455a64;\n  letter-spacing: 0px;\n  font-size: 25px;\n  font-weight: 400;\n"]);return Ge=function(){return e},e}function Qe(){var e=Object(p.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return Qe=function(){return e},e}function Ke(){var e=Object(p.a)(["\n  width: 90%;\n  margin-left: 5%;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 6px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  padding-left: 5%;\n  padding-top: 20px;\n  margin-bottom: 60px;\n  padding-bottom: 20px;\n"]);return Ke=function(){return e},e}function Ze(){var e=Object(p.a)(["\n  position: absolute;\n  color: #737a92;\n  font-size: 32px;\n  letter-spacing: 0.23px;\n  top: calc(100% + 20px);\n  font-weight: 700;\n"]);return Ze=function(){return e},e}function en(){var e=Object(p.a)(["\n  background-color: #f7f7f7;\n  width: 10vw;\n  height: 10vw;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 100%;\n  color: #717171;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  position: relative;\n  cursor: pointer;\n"]);return en=function(){return e},e}function nn(){var e=Object(p.a)(['\n  display: flex;\n  width: 60%;\n  margin-left: 20%;\n  position: relative;\n  justify-content: space-between;\n  &::after {\n    content: "";\n    position: absolute;\n    height: 50%;\n    border-bottom: 2px dashed #707070;\n    width: 100%;\n    z-index: -1;\n  }\n']);return nn=function(){return e},e}function tn(){var e=Object(p.a)(["\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  letter-spacing: 0.23px;\n  color: #737a92;\n  margin-top: 60px;\n  margin-bottom: 20px;\n"]);return tn=function(){return e},e}var an=[{label:"Date Modified (Ascending)",value:"modifyA"},{label:"Date Modified (Descending)",value:"modifyD"},{label:"Name (Ascending)",value:"nameA"},{label:"Name (Descending)",value:"nameD"},{label:"Created (Ascending)",value:"createA"},{label:"Created (Descending)",value:"createD"}],rn=b.a.div(tn()),on=b.a.div(nn()),cn=b.a.div(en()),ln=b.a.span(Ze()),un=b.a.div(Ke()),sn=b.a.div(Qe()),mn=b.a.span(Ge()),fn=b.a.div(qe()),dn=b.a.span(Je()),pn=b.a.span($e()),bn=b.a.span(Ye()),gn=b.a.span(Ve()),hn=b.a.div(Xe()),En=b.a.button(He()),vn=b.a.div(Me()),xn=Object(d.b)((function(e){return{projects:e.projects}}))((function(e){var n=e.projects,t=Object(m.g)(),o=Object(a.useState)(!1),i=Object(L.a)(o,2),c=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(Ne,null),c&&r.a.createElement(Ue,{onCloseClick:function(){return l(!1)}}),r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(rn,null,"Let's Get Started"),r.a.createElement(on,null,r.a.createElement(cn,{onClick:function(){return l(!0)}},r.a.createElement("i",{className:"fal fa-plus"}),r.a.createElement(ln,null,"Choose")),r.a.createElement(cn,null,r.a.createElement("i",{className:"fal fa-pen"}),r.a.createElement(ln,null,"Design")),r.a.createElement(cn,null,r.a.createElement("i",{className:"far fa-eye"}),r.a.createElement(ln,null,"Monitor"))),r.a.createElement(un,null,r.a.createElement(sn,null,r.a.createElement(mn,null,"Projects"),r.a.createElement(ve,{placeholder:"--Sort By--",options:an,width:20,marginLeft:43,marginTop:-10}),r.a.createElement(ke,{width:25,marginLeft:1})),r.a.createElement(fn,null,r.a.createElement(dn,null,"Name"),r.a.createElement(pn,null,"Domain"),r.a.createElement(bn,null,"Created"),r.a.createElement(gn,null,"Description")),n&&n.map((function(e,n){return r.a.createElement(hn,{key:e.name},r.a.createElement(dn,null,e.name),r.a.createElement(pn,null,e.domain),r.a.createElement(bn,null,ce()(e.createdAt).format("dddd, MMM DD, YYYY")),r.a.createElement(gn,null,e.description),r.a.createElement(En,{onClick:function(){return t.push("/projects")}},"View"))})),r.a.createElement(vn,null,r.a.createElement("i",{style:{color:"#C8CAD1",marginRight:"5px",cursor:"pointer"},className:"fal fa-chevron-left"})," ","1 of 2"," ",r.a.createElement("i",{style:{color:"#C8CaD1",marginLeft:"5px",cursor:"pointer"},className:"fal fa-chevron-right"})))))}));function wn(){var e=Object(p.a)(["\n  width: 32px;\n  height: 26px;\n  // top: 0;\n  font-size: 12px;\n"]);return wn=function(){return e},e}function jn(){var e=Object(p.a)(["\n  margin-left: 5%;\n"]);return jn=function(){return e},e}function On(){var e=Object(p.a)(["\n  height: 36px;\n  box-shadow: 0px 3px 6px #00000029;\n  color: #737a92;\n  font-weight: bold;\n  letter-spacing: 0.11px;\n  display: flex;\n  align-items: center;\n  width: calc(85% - 32px);\n  margin-left: 7.5%;\n  position: relative;\n"]);return On=function(){return e},e}function yn(){var e=Object(p.a)([""]);return yn=function(){return e},e}var Pn=Object(b.a)(I)(yn()),kn=b.a.div(On()),Sn=b.a.span(jn()),Nn=Object(b.a)(J)(wn()),An=function(e){var n=e.project,t=e.colorSelect,o=e.widthFactor,i=Object(a.useState)(!1),c=Object(L.a)(i,2),l=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pn,{widthFactor:o,left:function(e){var n=90-e;return 0===n?2.5:n+2.5}(Number(o)-5)},r.a.createElement(U,{colorSelect:t}),r.a.createElement(M,null,n.name.substr(0,1)),r.a.createElement(H,null,r.a.createElement(X,null,n.name),r.a.createElement(V,null,"Description"),r.a.createElement(Y,null,n.description)),n.data&&r.a.createElement("div",{style:{marginTop:"15px",marginLeft:"2%"}},r.a.createElement(V,null,"Example Data"),r.a.createElement(Y,null,n.data)),n.objects&&r.a.createElement($,{onClick:function(){return u(!l)},className:"fas fa-chevron-right hello",expandObj:l}),r.a.createElement(J,null,r.a.createElement("i",{style:{cursor:"pointer"},className:"fas fa-pencil-alt"}),r.a.createElement("i",{style:{cursor:"pointer"},className:"fas fa-times"}))),l&&n.objects.map((function(e){return r.a.createElement(kn,null,r.a.createElement(U,{colorSelect:t}),r.a.createElement(Sn,null,e.name),r.a.createElement(Nn,null,r.a.createElement("i",{style:{cursor:"pointer"},className:"fas fa-pencil-alt"})))})))},Ln=["#FF9800","#9591B2","#00C11E","#372C5A","#24A7DF"],Cn=Object(d.b)((function(e){return{projects:e.projects}}))((function(e){var n=e.projects,t=Object(a.useState)(!1),o=Object(L.a)(t,2),i=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement(Ne,null),i&&r.a.createElement(Ue,{onCloseClick:function(){return c(!1)}}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(ee,null,r.a.createElement(ne,null,"Projects"),r.a.createElement(te,{onClick:function(){return c(!0)}},"Add Object"),n&&n.map((function(e,n){return r.a.createElement(An,{project:e,colorSelect:Ln[n],widthFactor:95})}))))))})),Dn=t(59),Tn=t.n(Dn),zn=t(19);function Fn(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: #ffffff;\n  display: block;\n"]);return Fn=function(){return e},e}function _n(){var e=Object(p.a)(["\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  margin-bottom: 10px;\n"]);return _n=function(){return e},e}var Wn=b.a.span(_n()),Bn=b.a.span(Fn());function Rn(){var e=Object(p.a)(["\n  width: 32px;\n"]);return Rn=function(){return e},e}var In=b.a.img(Rn()),Un=function(){return r.a.createElement(In,{src:"images/loader.gif"})};function Mn(){var e=Object(p.a)(["\n  width: 45%;\n  margin-left: 5%;\n"]);return Mn=function(){return e},e}function Hn(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: #912d2b;\n  background-color: #faebd7;\n  display: block;\n  margin-left: ",";\n  margin-top: 5px;\n  width: fit-content;\n"]);return Hn=function(){return e},e}function Xn(){var e=Object(p.a)(["\n  background-color: #3ab539;\n  height: 36px;\n  border: 1px solid #3ab539;\n  border-radius: 4px;\n  color: #ffffff;\n  width: 112px;\n  margin-left: calc(50% - 56px);\n  margin-top: 20px;\n  cursor: pointer;\n  display: block;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n"]);return Xn=function(){return e},e}function Vn(){var e=Object(p.a)(["\n  font-size: 25px;\n  color: #455a64;\n  margin-left: 5%;\n  margin-bottom: 20px;\n"]);return Vn=function(){return e},e}function Yn(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 4px;\n  background-color: #0068c1;\n"]);return Yn=function(){return e},e}function $n(){var e=Object(p.a)(["\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 4px;\n  width: 50%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-top: 60px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n"]);return $n=function(){return e},e}var Jn=b.a.div($n()),qn=b.a.div(Yn()),Gn=b.a.div(Vn()),Qn=b.a.button(Xn()),Kn=b.a.span(Hn(),(function(e){return void 0!==e.marginLeft?e.marginLeft:"5%"})),Zn=b.a.div(Mn()),et=Object(d.b)((function(e){return{}}),{setAuthState:E})((function(e){var n=e.setAuthState,t=Object(m.g)(),o=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",confirmPassword:""}),i=Object(L.a)(o,2),c=i[0],s=i[1],d=Object(a.useState)({}),p=Object(L.a)(d,2),b=p[0],g=p[1],h=Object(a.useState)(!1),E=Object(L.a)(h,2),v=E[0],x=E[1],w=function(e,n){var t=Object(le.a)(Object(le.a)({},c),{},Object(se.a)({},e,n));s(t)},j=function(){var e={},n=!0;return 0===c.firstName.length&&(e.firstName="First Name can't be empty!"),0===c.lastName.length&&(e.lastName="Last Name can't be empty!"),Tn.a.isEmail(c.email)||(e.email="Please enter a valid Email ID"),0===c.email.length&&(e.email="Email can't be empty!"),0===c.password.length&&(e.password="Password can't be blank!"),0===c.confirmPassword.length&&(e.confirmPassword="Please Re-type yout password!"),c.confirmPassword!==c.password&&(e.confirmPassword="Passwords don't match!"),Object.keys(e).length>0&&(n=!1),[n,e]},O=function(){var e=Object(u.a)(l.a.mark((function e(){var a,o,i,u,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=j(),o=Object(L.a)(a,2),i=o[0],u=o[1],i){e.next=6;break}g(u),e.next=12;break;case 6:return x(!0),g({}),e.next=10,f.a.signUp({username:c.email,password:c.password,attributes:{name:c.firstName,family_name:c.lastName}});case 10:(s=e.sent)&&s.user&&(zn.b.success(r.a.createElement("div",null,r.a.createElement(Wn,null,"User Created Successfully!"),r.a.createElement(Bn,null,"Please confirm your Email ID before trying to login"))),x(!1),n({userConfirmed:s.userConfirmed}),t.push("/login"));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),x(!1),zn.b.error(r.a.createElement("div",null,r.a.createElement(Wn,null,e.t0.name,"!"),r.a.createElement(Bn,null,e.t0.message)));case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(Jn,null,r.a.createElement(qn,null),r.a.createElement(Gn,null,"Register"),r.a.createElement("div",{style:{display:"flex",width:"95%"}},r.a.createElement(Zn,null,r.a.createElement(he,{onChange:function(e){return w("firstName",e)},value:c.firstName,label:"First Name",placeholder:"Enter First Name",marginLeft:0,width:100}),b.firstName&&r.a.createElement(Kn,{marginLeft:0},"* ",b.firstName)),r.a.createElement(Zn,null,r.a.createElement(he,{onChange:function(e){return w("lastName",e)},value:c.lastName,label:"Last Name",placeholder:"Enter Last Name",marginLeft:0,width:100}),b.lastName&&r.a.createElement(Kn,{marginLeft:0},"* ",b.lastName))),r.a.createElement(he,{onChange:function(e){return w("email",e)},value:c.email,marginBottom:10,label:"Email",placeholder:"Enter Email",marginTop:20}),b.email&&r.a.createElement(Kn,null,"* ",b.email),r.a.createElement(he,{label:"Password",placeholder:"Enter Password",onChange:function(e){return w("password",e)},value:c.password,type:"password",marginTop:20}),b.password&&r.a.createElement(Kn,null,"* ",b.password),r.a.createElement(he,{label:"Confirm Password",placeholder:"Enter Password",onChange:function(e){return w("confirmPassword",e)},value:c.confirmPassword,type:"password",marginTop:20}),b.confirmPassword&&r.a.createElement(Kn,null,"* ",b.confirmPassword),v?r.a.createElement(Qn,{style:{pointerEvents:"none"}},r.a.createElement(Un,null)):r.a.createElement(Qn,{onClick:function(){return O()}},"Register")))}));function nt(){var e=Object(p.a)(["\n  text-decoration: underline;\n  cursor: pointer;\n  float: right;\n  margin-right: 5%;\n"]);return nt=function(){return e},e}function tt(){var e=Object(p.a)(["\n  font-size: 13px;\n  color: #372c5a;\n  margin-left: 5%;\n  display: inline-block;\n  margin-top: 10px;\n"]);return tt=function(){return e},e}var at=b.a.span(tt()),rt=Object(b.a)(at)(nt()),ot=Object(d.b)((function(e){return{}}),{setAuthState:E})((function(e){var n=e.setAuthState,t=Object(m.g)(),o=Object(a.useState)({email:"",password:""}),i=Object(L.a)(o,2),c=i[0],s=i[1],d=Object(a.useState)({}),p=Object(L.a)(d,2),b=p[0],g=p[1],h=Object(a.useState)(!1),E=Object(L.a)(h,2),v=E[0],x=E[1],w=function(e,n){var t=Object(le.a)(Object(le.a)({},c),{},Object(se.a)({},e,n));s(t)},j=function(){var e={},n=!0;return Tn.a.isEmail(c.email)||(e.email="Please enter a valid Email ID"),0===c.email.length&&(e.email="Email can't be empty!"),0===c.password.length&&(e.password="Password can't be blank!"),Object.keys(e).length>0&&(n=!1),[n,e]},O=function(){var e=Object(u.a)(l.a.mark((function e(){var a,o,i,u,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=j(),o=Object(L.a)(a,2),i=o[0],u=o[1],i){e.next=6;break}g(u),e.next=15;break;case 6:return x(!0),g({}),e.next=10,f.a.signIn(c.email,c.password);case 10:s=e.sent,zn.b.success(r.a.createElement(Wn,null,"User Logged in Successfully!")),x(!1),n({user:s.attributes,userConfirmed:s.attributes.email_verified,isAuthenticated:!0}),t.push("/dashboard");case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),zn.b.error(r.a.createElement("div",null,r.a.createElement(Wn,null,e.t0.name,"!"),r.a.createElement(Bn,null,e.t0.message))),x(!1);case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(Jn,null,r.a.createElement(qn,null),r.a.createElement(Gn,null,"Login"),r.a.createElement(he,{label:"Email",placeholder:"Enter Email",value:c.email,onChange:function(e){return w("email",e)}}),b.email&&r.a.createElement(Kn,null,"* ",b.email),r.a.createElement(he,{label:"Password",placeholder:"Enter Password",value:c.password,onChange:function(e){return w("password",e)},type:"password",marginTop:20}),b.password&&r.a.createElement(Kn,null,"* ",b.password),r.a.createElement(at,null,"New User ?"," ",r.a.createElement("span",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(){return t.push("/register")}},"Register Here!")," "),r.a.createElement(rt,{onClick:function(){return t.push("/forgot-password")}},"Forgot Password ?"),v?r.a.createElement(Qn,{style:{pointerEvents:"none"}},r.a.createElement(Un,null)):r.a.createElement(Qn,{onClick:function(){return O()}},"Login")))}));function it(){var e=Object(p.a)(["\n  margin-bottom: 5px;\n"]);return it=function(){return e},e}function ct(){var e=Object(p.a)(["\n  font-size: 12px;\n  color: #737a92;\n  margin-left: 5%;\n  margin-bottom: 20px;\n"]);return ct=function(){return e},e}var lt=b.a.div(ct()),ut=Object(b.a)(Gn)(it()),st=function(){var e=Object(m.g)(),n=Object(a.useState)(""),t=Object(L.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)(!1),s=Object(L.a)(c,2),d=s[0],p=s[1],b=function(){var n=Object(u.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,f.a.forgotPassword(o);case 4:n.sent&&(zn.b.success(r.a.createElement("div",null,r.a.createElement(Wn,null,"Code Sent Successfully!"),r.a.createElement(Bn,null,"Please check your email and verify your account using the code sent."))),p(!1),e.push("/forgot-password-verify",{email:o})),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),p(!1),zn.b.error(r.a.createElement("div",null,r.a.createElement(Wn,null,n.t0.name,"!"),r.a.createElement(Bn,null,n.t0.message)));case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(Jn,null,r.a.createElement(qn,null),r.a.createElement(ut,null,"Forgot Password ?"),r.a.createElement(lt,null,"Please enter the email address associated with your account and we will send a password reset link to you."),r.a.createElement(he,{label:"Your Email",placeholder:"Enter Email",onChange:function(e){return i(e)},value:o}),d?r.a.createElement(Qn,{style:{pointerEvents:"none"}},r.a.createElement(Un,null)," "):r.a.createElement(Qn,{onClick:function(){return b()}},"Send Link")))},mt=function(){var e=Object(m.g)(),n=Object(a.useState)({code:"",newPassword:"",confirmNewPassword:"",email:""}),t=Object(L.a)(n,2),o=t[0],i=t[1],c=Object(a.useState)({}),s=Object(L.a)(c,2),d=s[0],p=s[1],b=Object(a.useState)(!1),g=Object(L.a)(b,2),h=g[0],E=g[1];Object(a.useEffect)((function(){try{v("email",e.location.state.email)}catch(n){zn.b.error(r.a.createElement(Wn,null,"Oops! Something went wrong. Please try again.")),e.goBack()}}),[e]);var v=function(e,n){var t=Object(le.a)(Object(le.a)({},o),{},Object(se.a)({},e,n));i(t)},x=function(){var e={},n=!0;return 0===o.code.length&&(e.code="Please enter code sent to your email"),0===o.newPassword.length&&(e.newPassword="Please enter new Password!"),o.confirmNewPassword!==o.newPassword&&(e.confirmNewPassword="Passwords dont't match!"),0===o.confirmNewPassword.length&&(e.confirmNewPassword="Please confirm your password!"),Object.keys(e).length>0&&(n=!1),[n,e]},w=function(){var n=Object(u.a)(l.a.mark((function n(){var t,a,i,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=x(),a=Object(L.a)(t,2),i=a[0],c=a[1],i){n.next=5;break}return n.abrupt("return",p(c));case 5:p({}),E(!0);case 7:return n.prev=7,n.next=10,f.a.forgotPasswordSubmit(o.email,o.code,o.newPassword);case 10:void 0===n.sent&&(E(!1),zn.b.success(r.a.createElement(Wn,null,"Password changed successfully!")),e.push("/login")),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(7),E(!1),zn.b.error(r.a.createElement("div",null,r.a.createElement(Wn,null,n.t0.name),r.a.createElement(Bn,null,n.t0.message)));case 18:case"end":return n.stop()}}),n,null,[[7,14]])})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(Jn,null,r.a.createElement(qn,null),r.a.createElement(Gn,null,"Set New Password"),r.a.createElement(he,{label:"Verification Code",placeholder:"Enter Verification Code",value:o.code,onChange:function(e){return v("code",e)},type:"password"}),d.code&&r.a.createElement(Kn,null,"* ",d.code),r.a.createElement(he,{label:"New Password",placeholder:"Enter New Password",value:o.newPassword,onChange:function(e){return v("newPassword",e)},type:"password",marginTop:20}),d.newPassword&&r.a.createElement(Kn,null,"* ",d.newPassword),r.a.createElement(he,{label:"Re-Enter New Password",placeholder:"Re-Enter New Password",value:o.confirmNewPassword,onChange:function(e){return v("confirmNewPassword",e)},type:"password",marginTop:20}),d.confirmNewPassword&&r.a.createElement(Kn,null,"* ",d.confirmNewPassword),h?r.a.createElement(Qn,{style:{pointerEvents:"noen"}},r.a.createElement(Un,null)):r.a.createElement(Qn,{onClick:function(){return w()}},"Submit")))},ft=(t(60),Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAuthState:E})((function(e){var n=e.setAuthState,t=e.isAuthenticated;Object(a.useEffect)((function(){o()}),[]);var o=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.currentSession();case 3:return t=e.sent,e.next=6,f.a.currentUserInfo();case 6:a=e.sent,t&&a&&n({isAuthenticated:!0,user:a.attributes,userConfirmed:a.attributes.email_verified}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),f.a.signOut();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(s.a,{basename:""},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/login"}),r.a.createElement(m.b,{isAuthenticated:t,path:"/login",exact:!0,component:ot}),r.a.createElement(m.b,{path:"/register",exact:!0,component:et,isAuthenticated:t}),r.a.createElement(m.b,{path:"/forgot-password",exact:!0,component:st,isAuthenticated:t}),r.a.createElement(m.b,{path:"/forgot-password-verify",exact:!0,component:mt,isAuthenticated:t}),r.a.createElement(m.b,{path:"/dashboard",exact:!0,component:xn,isAuthenticated:t}),r.a.createElement(m.b,{path:"/objects",exact:!0,component:oe,isAuthenticated:t}),r.a.createElement(m.b,{path:"/projects",exact:!0,component:Cn,isAuthenticated:t})))}))),dt=t(32),pt=(t(292),"ap-south-1"),bt="ap-south-1_yQMAhOeHS",gt="1l07ujpp36e94q7ta014t1iium";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ht=t(47),Et={isAuthenticated:!1,user:{},userConfirmed:!1},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_AUTH_STATE":return Object(le.a)(Object(le.a)({},e),n.data);case"CLEAR_AUTH_STATE":return Et;default:return e}},xt=[{name:"Page",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",subData:[{name:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"Homepage - This is the homepage title"},{name:"Type",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"Homepage - This is the homepage title"}]},{name:"Search",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",subData:[{name:"Term",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"Dog Food"},{name:"Results Count",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"23"}]},{name:"Cart",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",subData:[{name:"ID",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"1234567890"},{name:"Total",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"$99.99",subData:[{name:"Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"Best Tasting Dog Food"},{name:"Price",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",data:"$99.99"}]}]}],wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,n=arguments.length>1?arguments[1]:void 0;return n.type,e},jt=[{name:"Website 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",domain:"www.website1.com",createdAt:ce()(Date.now()).format(),objects:[{name:"Website 1: DataLayer A"},{name:"Website 1: DataLayer B"}]},{name:"Website 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",domain:"www.website2.com",createdAt:ce()(Date.now()).format(),objects:[{name:"Website 2: DataLayer A"},{name:"Website 2: DataLayer B"}]},{name:"Website 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",domain:"www.website3.com",createdAt:ce()(Date.now()).format(),objects:[{name:"Website 3: DataLayer A"},{name:"Website 3: DataLayer B"}]},{name:"Website 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",domain:"www.website4.com",createdAt:ce()(Date.now()).format(),objects:[{name:"Website 4: DataLayer A"},{name:"Website 4: DataLayer B"}]},{name:"Website 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",domain:"www.website5.com",createdAt:ce()(Date.now()).format(),objects:[{name:"Website 5: DataLayer A"},{name:"Website 5: DataLayer B"}]}],Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,n=arguments.length>1?arguments[1]:void 0;return n.type,e},yt=Object(ht.b)({auth:vt,data:wt,projects:Ot}),Pt=Object(ht.c)(yt,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());dt.default.configure({Auth:{mandatorySignId:!0,region:pt,userPoolId:bt,userPoolWebClientId:gt}}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Pt},r.a.createElement(zn.a,{position:"bottom-left"}),r.a.createElement(ft,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.5406c4ac.chunk.js.map