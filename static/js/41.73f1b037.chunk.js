(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[41],{1648:function(e,t,c){},1752:function(e,t,c){"use strict";c.r(t);var a=c(14),n=c(0),s=c(2),r=c(3),i=c(84),l=c(881),o=c(1709),d=c(866),b=c(1708),m=c(878),u=c(20),j=c.n(u),p=c(106),O=c(893),v=c(171),g=c(113),x=c(1),f=c(27),h=(c(1648),c.p+"static/media/psm-question-circle.e41aebb7.svg"),_=c.p+"static/media/psm-close.da24ed95.svg",w=c.p+"static/media/close-b.3057ffe3.svg",N=c.p+"static/media/ico_jump.bce7b3f1.svg",k=c.p+"static/media/white-triangle-down.86bd9763.svg",y=c.p+"static/media/copy.9a56392e.svg",C=c(937),S=c(906),D=c(10),I=g.a.psmTokensKeys,T=g.a.psmTokensInfo,Z=g.a.swapPairsList,P=g.a.decimalForShow,U=g.a.decimalForInput;t.default=function(){Object(p.a)(window.navigator).any;var e=Object(i.d)((function(){return v.a.network})),t=null,c=Object(i.d)((function(){return v.a.system})),u=Object(i.d)((function(){return v.a.psmPool}));Object(r.useEffect)(Object(s.a)(Object(n.a)().mark((function c(){return Object(n.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return window.gtag("event","index",{type:"psm_view_counts"}),tt(),c.next=4,u.getPsmAmountInfo();case 4:return u.setData({order:!0}),We(),t||(t=setInterval(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getPsmAmountInfo();case 2:return e.next=4,Xe();case 4:case"end":return e.stop()}}),e)}))),e.defaultIntervalSec)),c.abrupt("return",(function(){clearInterval(t)}));case 8:case"end":return c.stop()}}),c)}))),[]);var L=Object(r.useState)(!1),F=Object(a.a)(L,2),B=F[0],A=F[1],M=Object(r.useState)(!1),E=Object(a.a)(M,2),q=E[0],J=E[1],V=Object(r.useState)(j.a.get("psm.enter_amount")),H=Object(a.a)(V,2),R=H[0],K=H[1],z=Object(r.useState)(j.a.get("psm.enter_amount")),G=Object(a.a)(z,2),Q=G[0],W=G[1],X=Object(r.useState)("usdt"),Y=Object(a.a)(X,2),$=Y[0],ee=Y[1],te=Object(r.useState)("usdd"),ce=Object(a.a)(te,2),ae=ce[0],ne=ce[1],se=Object(r.useState)(!1),re=Object(a.a)(se,2),ie=re[0],le=re[1],oe=Object(r.useState)(!1),de=Object(a.a)(oe,2),be=de[0],me=de[1],ue=Object(r.useState)(!1),je=Object(a.a)(ue,2),pe=je[0],Oe=je[1],ve=Object(r.useState)(!1),ge=Object(a.a)(ve,2),xe=ge[0],fe=ge[1],he=Object(r.useState)(!1),_e=Object(a.a)(he,2),we=_e[0],Ne=_e[1],ke=Object(r.useState)(null),ye=Object(a.a)(ke,2),Ce=ye[0],Se=ye[1],De=Object(r.useState)(null),Ie=Object(a.a)(De,2),Te=Ie[0],Ze=Ie[1],Pe=Object(r.useState)(null),Ue=Object(a.a)(Pe,2),Le=Ue[0],Fe=Ue[1],Be=Object(r.useState)(null),Ae=Object(a.a)(Be,2),Me=Ae[0],Ee=Ae[1],qe=Object(r.useState)("--"),Je=Object(a.a)(qe,2),Ve=Je[0],He=Je[1],Re=window.localStorage.getItem("lang"),Ke=Object(r.useState)({pools:T,poolData:u.poolData,contracts:Z.usdt,approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),ze=Object(a.a)(Ke,2),Ge=ze[0],Qe=ze[1],We=function(){var e="--",t=u.info;if((null===t||void 0===t?void 0:t.length)>0)if(u.order){var c=t[2].minus(t[6]),a=t[3].minus(t[1]),n=t[5],s=c.lt(a)?c:a;e=s.lt(n)?s:n;var r=Object(x.cb)(1).minus(u.info[9]);e=e.times(r)}else{var i=t[8],l=t[0],o=t[4],d=Object(x.cb)(1).plus(u.info[10]);e=i.gt(0)&&l.lt(o)?l.div(d):o.div(d)}He(e)},Xe=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([u.getBalanceInfo()]);case 2:We();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xe();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=function(e){!ie&&le(!0);try{var t=Object(x.T)((""+e).replace(/,/g,""),U),c=t.valid,a=t.str;if(!c)return;if(Se(Object(x.c)(a)),Object(x.cb)(a).gt(0))if("usdd"!==$){var n=Object(x.cb)(1).minus(u.info[9]),s=Object(x.db)(Object(x.cb)(a).times(n),U,{cutZero:!0});Ze(Object(x.c)(s)),Ee(s);var r=Object(x.db)(Object(x.cb)(s).div(n),U,{cutZero:!0});Fe(r)}else{var i=Object(x.cb)(1).plus(u.info[10]),l=Object(x.db)(Object(x.cb)(a).div(i),U,{cutZero:!0});Ze(Object(x.c)(l)),Ee(l);var o=Object(x.db)(Object(x.cb)(i).times(l),U,{cutZero:!0});Fe(o)}else Fe(null),Ze(null);""===e&&(fe(!1),Ne(!1))}catch(d){console.log(d)}},et=function(e){!ie&&le(!0);try{var t=Object(x.T)((""+e).replace(/,/g,""),U),c=t.valid,a=t.str;if(!c)return;Ze(Object(x.c)(a));var n=Ge.poolData[$],s=Object(x.cb)(n.balance).div(n.precision);if(Object(x.cb)(a).eq(0))Ee(null),Se(null);else if("usdd"===ae){var r=Object(x.cb)(1).minus(u.info[9]),i=Object(x.db)(Object(x.cb)(a).div(r),U,{cutZero:!0});if(Object(x.cb)(a).div(r).gt(s))$e(Object(x.db)(Object(x.cb)(s),U,{cutZero:!0}));else{Fe(i),Se(Object(x.c)(i));var l=Object(x.db)(Object(x.cb)(r).times(i),U,{cutZero:!0});Ee(l)}}else{var o=Object(x.cb)(1).plus(u.info[10]),d=Object(x.db)(Object(x.cb)(a).times(o),U,{cutZero:!0});if(Object(x.cb)(a).times(o).gt(s))$e(Object(x.db)(Object(x.cb)(s),U,{cutZero:!0}));else{Se(Object(x.c)(d)),Fe(d);var b=Object(x.db)(Object(x.cb)(d).div(o),U,{cutZero:!0});Ee(b)}}""===e&&(fe(!1),Ne(!1))}catch(m){console.log(m)}};Object(r.useEffect)(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.setData({currentUsdToken:"usdd"===$?ae:$}),Qe({pools:T,poolData:u.poolData,contracts:"usdd"===$?Z[ae]:Z[$],approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),Se(null),Ze(null),Fe(null),Ee(null),fe(!1),Ne(!1),e.next=10,u.getPsmAmountInfo();case 10:We();case 11:case"end":return e.stop()}}),e)}))),[$,ae]),Object(r.useEffect)((function(){ie&&tt()}),[Ce,Te,Ve]);var tt=function(){try{var t=Ge.poolData,c=t[$],a=t[ae],n=Object(x.cb)(c.balance).div(c.precision);return Object(x.cb)(Ce).lte(0)||Object(x.cb)(Ce).isNaN()||(Object(x.cb)(Te).lte(0)||Object(x.cb)(Te).isNaN())?(me(j.a.get("psm.enter_amount")),!0):(me(!1),Object(x.cb)(Ce).gt(n)?(fe(j.a.get("psm.insufficient_balance",{value:c.symbol})),!0):(fe(!1),Object(x.cb)(Te).gt(Ve)?(Ne(j.a.get("psm.limit_exceed",{value:a.symbol})),!0):(Ne(!1),e.isConnected?(Oe(!1),!1):(Oe(j.a.get("psm.connect_wallet")),!0))))}catch(s){console.log("checkInput: "+s)}},ct=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$,u.setData({order:"usdd"!==t}),!ie&&le(!0),"usdd"===t&&ne("usdt"),"usdd"!==ae&&"usdd"!==t&&ne("usdd"),ee(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(e){u.setData({order:"usdd"===e}),!ie&&le(!0),"usdd"===e&&ee("usdt"),"usdd"!==$&&"usdd"!==e&&ee("usdd"),ne(e)},nt=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!ie&&le(!0),t=u.order,u.setData({order:!t}),c=$,ee(ae),ne(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),st=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,a,s,r,i,l,o,d,b,m,j,p,O,v,g,f,h,_,w;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Ge.pools,a=Ge.poolData,s=Ge.contracts,r=Ge.approveCallback,i=s.psm,l=s.gemJoin,!ie&&le(!0),o=$,d=Ce,b=l,u.order||(b=i),e.prev=7,pe||xe||we||be){e.next=12;break}if(!tt()){e.next=12;break}return e.abrupt("return",!1);case 12:if(!(pe&&xe&&we&&be)){e.next=14;break}return e.abrupt("return",!1);case 14:if(m=a[o],j=m.allowance,p=m.precision,j=Object(x.cb)(j).div(p),"usdt"===ae?j=null===(O=a[o])||void 0===O?void 0:O.allowanceForUSDT:"usdc"===ae?j=null===(v=a[o])||void 0===v?void 0:v.allowanceForUSDC:"tusd"===ae?j=null===(g=a[o])||void 0===g?void 0:g.allowanceForTUSD:"usdj"===ae&&(j=null===(f=a[o])||void 0===f?void 0:f.allowanceForUSDJ),!Object(x.cb)(d).gt(j)){e.next=29;break}return w={action:"approve",title:"psm.approve",obj:{value:null===(h=t[o])||void 0===h?void 0:h.symbol},continuous:!0},e.next=21,c.approveToken(null===(_=t[o])||void 0===_?void 0:_.token,b,w,r);case 21:if(!e.sent){e.next=28;break}return e.next=25,u.getBalanceInfo();case 25:return e.abrupt("return",!0);case 28:return e.abrupt("return",!1);case 29:return e.abrupt("return",!0);case 32:e.prev=32,e.t0=e.catch(7),console.log("checkApprove: "+e.t0);case 35:case"end":return e.stop()}}),e,null,[[7,32]])})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(pe||xe||we||be)){e.next=2;break}return e.abrupt("return");case 2:if(!u.info[7].eq(0)){e.next=5;break}return l.a.info(j.a.get("psm.unavailable")),e.abrupt("return");case 5:return e.next=7,st();case 7:e.sent&&it();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),it=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,a,s,r,i,l,o,d,b,m,j;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.gtag("event","PSM",{type:"psm_exchange"}),s=Ge.pools,r=Ge.contracts,i=Ge.exchangeCallback,l=r.psm,o=Le&&Object(x.cb)(Le).gt(0)?Object(x.cb)(Le):Object(x.cb)(Ce),d=Me&&Object(x.cb)(Me).gt(0)?Object(x.cb)(Me):Object(x.cb)(Te),b=u.order?o:d,m=u.order?null===(t=s[$])||void 0===t?void 0:t.precision:null===(a=s[ae])||void 0===a?void 0:a.precision,j={title:"notification.tip1",obj:{fromValue:Object(x.t)(o,{dp:P,cutZero:!0,miniText:"0.01"}),fromToken:$.toUpperCase(),toValue:Object(x.t)(d,{dp:P,cutZero:!0,miniText:"0.01"}),toToken:ae.toUpperCase()}},e.prev=8,!u.order){e.next=15;break}return e.next=12,c.takeUsdd(l,b.times(m)._toIntegerDown()._toHex(),j,i);case 12:e.t0=e.sent,e.next=18;break;case 15:return e.next=17,c.takeUsdToken(l,b.times(m)._toIntegerDown()._toHex(),j,i);case 17:e.t0=e.sent;case 18:if(!e.t0){e.next=25;break}return e.next=22,u.getPsmAmountInfo();case 22:return We(),e.next=25,u.getBalanceInfo();case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(8),console.log("exchange error: ",e.t1);case 30:case"end":return e.stop()}}),e,null,[[8,27]])})));return function(){return e.apply(this,arguments)}}(),lt=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=Ge.poolData[$],c=Object(x.cb)(null===t||void 0===t?void 0:t.balance).isNaN()?"--":Object(x.cb)(t.balance).div(t.precision);return Object(D.jsxs)("div",{className:"swap-input-title",children:[Object(D.jsx)("div",{className:"swap-input-title-text",children:e?Object(D.jsx)(o.a,{popupClassName:"psm-select",onChange:ct,value:$,getPopupContainer:function(e){return e.parentElement||document.body},dropdownStyle:{top:"48px"},suffixIcon:Object(D.jsx)("img",{src:k,alt:""}),children:I.map((function(e){var t=T[e],c=t.symbol,a=t.id;return Object(D.jsxs)(o.a.Option,{value:a,children:[Object(D.jsx)("img",{src:Object(f.f)(a),alt:a+" icon",className:"token-logo"}),c]},a)}))}):Object(D.jsx)(o.a,{popupClassName:"psm-select",onChange:at,value:ae,getPopupContainer:function(e){return e.parentElement||document.body},dropdownStyle:{top:"48px"},suffixIcon:Object(D.jsx)("img",{src:k,alt:""}),children:I.map((function(e){var t=T[e],c=t.symbol,a=t.id;return Object(D.jsxs)(o.a.Option,{value:a,children:[Object(D.jsx)("img",{src:Object(f.f)(a),alt:a+" icon",className:"token-logo"}),c]},a)}))})}),Object(D.jsxs)("div",{className:"title-info",children:[!e&&Object(D.jsx)(d.a,{title:j.a.get("psm.swap_limit_tip"),children:Object(D.jsx)("img",{className:"input-icon-tip",src:h,alt:""})}),Object(D.jsx)("div",{className:"swap-balance-text",children:e?j.a.get("psm.balance"):j.a.get("psm.swap_limit")}),Object(D.jsxs)("div",{className:"swap-balance-value",children:[Object(D.jsx)("span",{title:Object(x.t)(e?c:Ve,{dp:U,cutZero:!0,positive:!0,miniText:"0.000001"})||"--",children:Object(x.t)(e?c:Ve,{dp:U,cutZero:!0,positive:!0,miniText:"0.01"})||"--"}),(e?$:ae).toUpperCase()]})]})]})}catch(a){console.log(a)}},ot=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var c=Ge.poolData[$],a=Object(x.cb)(null===c||void 0===c?void 0:c.balance).isNaN()?"--":Object(x.cb)(c.balance).div(c.precision);return Object(D.jsx)(D.Fragment,{children:t&&e.isConnected&&Object(D.jsx)("div",{className:"swap-input-btn-max",onClick:function(){var e,t;null!==(e=Object(x.cb)(a))&&void 0!==e&&e.lt(Ve)?$e(Object(x.db)(Object(x.cb)(a),U,{cutZero:!0})):(null===(t=Object(x.cb)(a))||void 0===t?void 0:t.gte(Ve))&&et(Object(x.db)(Object(x.cb)(Ve),U,{cutZero:!0}))},children:j.a.get("psm.max")})})}catch(n){console.log(n)}},dt=function(){var e=[{name:j.a.get("psm.cmodal_p1_name1")},{name:j.a.get("psm.cmodal_p1_name2")},{name:j.a.get("psm.cmodal_p1_name3")},{name:j.a.get("psm.cmodal_p1_name4")},{name:j.a.get("psm.cmodal_p1_name5")},{name:j.a.get("psm.cmodal_p1_name6")},{name:j.a.get("psm.cmodal_p1_name7")},{name:j.a.get("psm.cmodal_p1_name8")},{name:j.a.get("psm.cmodal_p1_name9")},{name:j.a.get("psm.cmodal_p1_name10")},{name:j.a.get("psm.cmodal_p1_name11")},{name:j.a.get("psm.cmodal_p1_name12")},{name:j.a.get("psm.cmodal_p1_name13")},{name:j.a.get("psm.cmodal_p1_name14")}];return Object(D.jsxs)("section",{className:"psm-contracts-modal-content",children:[Object(D.jsx)("div",{className:"title",children:j.a.get("psm.contract_address")}),Object(D.jsxs)("div",{className:"content",children:[Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"item-title",children:j.a.get("psm.cmodal_title")}),Object(D.jsx)("div",{className:"ul",children:e.map((function(e,t){return Object(D.jsxs)("div",{className:"li",children:[Object(D.jsx)("div",{className:"name",children:e.name+" *"}),Object(D.jsxs)("div",{className:"address "+g.a.contractList[t],title:g.a.contractList[t],children:[Object(D.jsx)("a",{href:g.a.tronscanUrl+"contract/"+g.a.contractList[t],target:e.name,children:g.a.contractList[t]}),Object(D.jsx)("img",{alt:"",src:y,onClick:function(e){Object(x.o)(e,"50px",".".concat(g.a.contractList[t]))}})]})]},t)}))})]}),Object(D.jsx)("div",{className:"tip",children:j.a.get("psm.cmodal_tip")}),Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("div",{className:"item-title",children:j.a.get("psm.cmodal_title2")}),Object(D.jsx)("div",{className:"ul",children:g.a.ownerList.map((function(e,t){return Object(D.jsx)("div",{className:"li",children:Object(D.jsxs)("div",{className:"address "+e,title:e,children:[Object(D.jsx)("a",{href:g.a.tronscanUrl+"address/"+e,target:e,children:e}),Object(D.jsx)("img",{alt:"",src:y,onClick:function(t){Object(x.o)(t,"50px",".".concat(e))}})]})},t)}))})]})]})]})},bt=function(){try{var e=u.info;if((null===e||void 0===e?void 0:e.length)>0){var t=$.toLocaleUpperCase(),c=ae.toLocaleUpperCase(),a=Object(x.t)(Object(x.cb)(1).minus(e[9]),{dp:6,miniText:"0.01",cutZero:!0}),n=Object(x.t)(Object(x.cb)(1).plus(e[10]),{dp:6,miniText:"0.01",cutZero:!0}),s=e[9]&&Object(x.t)(e[9].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0}),r=e[10]&&Object(x.t)(e[10].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0});return"USDD"!==t&&Object(x.cb)(e[9]).gt(0)?Object(D.jsxs)("div",{className:"swap-fee",children:[Object(D.jsx)("div",{children:"1 ".concat(t," = ").concat(a," ").concat(c)}),Object(D.jsx)(d.a,{title:"".concat(j.a.get("buysell.fee")," ").concat(s,"%"),children:Object(D.jsx)("img",{alt:"",src:h})})]}):"USDD"===t&&e[10].gt(0)?Object(D.jsxs)("div",{className:"swap-fee",children:[Object(D.jsx)("div",{children:"".concat(n," ").concat(t," = 1 ").concat(c)}),Object(D.jsx)(d.a,{title:"".concat(j.a.get("buysell.fee")," ").concat(r,"%"),children:Object(D.jsx)("img",{alt:"",src:h})})]}):""}}catch(i){console.log("renderFee: ",i)}},mt=Object(r.useMemo)((function(){return{showBack:!0,onBack:function(){Object(C.h)({id:"more"})}}}),[]),ut=[{title:j.a.get("psm.item_title1"),desc:j.a.get("psm.item_content1")},{title:j.a.get("psm.item_title2"),desc:j.a.get("psm.item_content2")},{title:j.a.get("psm.item_title3"),desc:j.a.get("psm.item_content3")}];return Object(D.jsx)(i.a,{children:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(O.a,{routeName:"psm",mountedActions:Ye,subNavProps:mt,mShowLogo:!1,mShowBottomNav:!1}),Object(D.jsxs)("div",{className:"page-psm",children:[Object(D.jsx)("div",{className:"page-psm-title",children:Object(D.jsx)(S.a,{title:j.a.get("psm.title"),subTitle:j.a.get("psm.title_des")})}),Object(D.jsxs)("section",{className:"page-psm-main",children:[Object(D.jsx)("div",{className:"page-psm-main-l",children:Object(D.jsx)("section",{className:"psm-swap-container",children:Object(D.jsxs)("section",{className:"psm-swap",children:[Object(D.jsxs)("section",{className:"psm-swap-box",children:[Object(D.jsxs)("div",{className:"swap-input-box swap-from",children:[lt(!0),Object(D.jsxs)("div",{className:"swap-input",children:[Object(D.jsx)(b.a,{onFocus:function(){return K("")},onBlur:function(){return K(j.a.get("psm.enter_amount"))},value:Ce,onChange:function(e){return $e(e.target.value)},placeholder:R}),ot(!0)]}),xe?Object(D.jsx)("div",{className:"swap-error-tip "+(xe?"":"vhide"),children:xe}):""]}),Object(D.jsx)("div",{className:"swap-arrow",onClick:function(){return nt()}}),Object(D.jsxs)("div",{className:"swap-input-box swap-to",children:[lt(!1),Object(D.jsx)("div",{className:"swap-input",children:Object(D.jsx)(b.a,{onFocus:function(){return W("")},onBlur:function(){return W(j.a.get("psm.enter_amount"))},onChange:function(e){return et(e.target.value)},value:Te,placeholder:Q})}),we?Object(D.jsx)("div",{className:"swap-error-tip "+(!xe&&we?"":"vhide"),children:we}):""]})]}),bt(),Object(D.jsx)("div",{className:"submit-btn ".concat((pe||xe||we||be)&&e.isConnected?" disabled ":""),onClick:function(){return e.isConnected?rt():e.setData({loginModalVisible:!0,loginModalStep:1})},children:e.isConnected?j.a.get("psm.swap"):j.a.get("psm.connect_wallet")})]})})}),Object(D.jsxs)("div",{className:"page-psm-main-r",children:[ut.map((function(e){return Object(D.jsxs)("div",{className:"psm-desc-card",children:[Object(D.jsx)("div",{className:"psm-desc-card-title",children:e.title}),Object(D.jsx)("div",{className:"psm-desc-card-desc",children:e.desc})]})})),Object(D.jsxs)("div",{className:"psm-des-jumper",children:[Object(D.jsx)("div",{className:"psm-des-item",onClick:function(){window.gtag("event","PSM",{type:"psm_white_paper_btn"})},children:Object(D.jsxs)("a",{className:"psm-des-btn",target:"mechanism",href:"en-US"===Re?g.a.mechanismLinkEn:g.a.mechanismLinkZn,children:[Object(D.jsx)("span",{children:j.a.get("psm.mechanism")}),Object(D.jsx)("img",{src:N,alt:"mechanism"})]})}),Object(D.jsxs)("div",{className:"psm-des-item psm-des-btn",onClick:function(){J(!0),window.gtag("event","PSM",{type:"psm_contract_btn"})},children:[Object(D.jsx)("span",{children:j.a.get("psm.contract_address")}),Object(D.jsx)("img",{src:N,alt:"conteacts"})]}),Object(D.jsx)("div",{className:"psm-des-item",onClick:function(){window.gtag("event","PSM",{type:"psm_audit_report_btn"})},children:Object(D.jsxs)("a",{className:"psm-des-btn",target:"audit_report",href:g.a.auditReportFile,children:[Object(D.jsx)("span",{children:j.a.get("psm.audit_report")}),Object(D.jsx)("img",{src:N,alt:"repor"})]})})]})]})]})]}),Object(D.jsx)(m.a,{closeIcon:Object(D.jsx)("img",{src:_,alt:""}),title:null,footer:null,centered:!0,maskStyle:{},open:B,className:"psm-detail-modal",onCancel:function(){return A(!1)},getContainer:function(){return document.querySelector(".psm-swap-container")},children:Object(D.jsxs)("section",{className:"psm-amount-modal-content",children:[Object(D.jsxs)("div",{className:"top",children:[Object(D.jsxs)("div",{className:"tip",children:[j.a.get("psm.smodal_swap_limit"),Object(D.jsx)(d.a,{title:j.a.get("psm.smodal_swap_limit_tip"),children:Object(D.jsx)("img",{src:h,alt:""})})]}),Object(D.jsx)("div",{className:"balance",children:null!==u&&void 0!==u&&u.totalConvertible?Object(x.t)(u.totalConvertible,{dp:U,cutZero:!0,miniText:"0.01"}):"--"})]}),Object(D.jsxs)("div",{className:"table",children:[Object(D.jsxs)("div",{className:"th tr",children:[Object(D.jsx)("div",{className:"td"}),Object(D.jsxs)("div",{className:"td",children:[j.a.get("psm.smodal_usdd_max"),Object(D.jsx)(d.a,{title:j.a.get("psm.smodal_swap_limit_des"),children:Object(D.jsx)("img",{src:h,alt:""})})]}),Object(D.jsx)("div",{className:"td",children:j.a.get("psm.smodal_usdd_swapped")}),Object(D.jsx)("div",{className:"td",children:j.a.get("psm.smodal_usdd_left")})]}),u.amountDataDetail.map((function(e,t){var c,a=u.amountDataDetail.length>1&&0===t,n=e.name.toLocaleLowerCase();return Object(D.jsxs)("div",{className:"tr",children:[Object(D.jsx)("div",{className:"td name "+(a?"":"link"),children:a?e.name:Object(D.jsx)("a",{href:g.a.tronscanUrl+"contract/"+(null===(c=u.poolData[n])||void 0===c?void 0:c.token),target:e.name,children:e.name})}),Object(D.jsx)("div",{className:"td exchangeCap",children:Object(x.t)(e.exchangeCap,{dp:P,cutZero:!0,miniText:"0.01"})}),Object(D.jsx)("div",{className:"td redeemed",children:Object(x.t)(e.redeemed,{dp:P,cutZero:!0,miniText:"0.01"})}),Object(D.jsx)("div",{className:"td convertible",children:Object(x.t)(e.convertible,{dp:P,cutZero:!0,miniText:"0.01"})})]},t)}))]})]})}),Object(D.jsx)(m.a,{closeIcon:Object(D.jsx)("img",{src:w,alt:""}),title:null,footer:null,centered:!0,maskStyle:{},open:q,className:"psm-contracts-modal",onCancel:function(){return J(!1)},getContainer:function(){return document.querySelector(".psm-swap-container")},children:dt()})]})}})}},906:function(e,t,c){"use strict";var a=c(5),n=c(3),s=c(26),r=c.n(s),i=c(911),l=c(10),o=function(e){var t,c=e.title,n=e.subTitle,s=e.isRevert,o="string"===typeof c;return Object(l.jsxs)("div",{className:i.page_title_wrap,children:[s&&n&&Object(l.jsx)("div",{className:i.page_title_sub,children:n}),c&&Object(l.jsx)("div",{title:c,className:r()((t={},Object(a.a)(t,i.page_title,!0),Object(a.a)(t,i.page_title_revert,s),Object(a.a)(t,i.page_title_ele,!o),t)),children:o?c.split("").map((function(e,t){return Object(l.jsx)("span",{className:i.page_title_ele,children:e},t)})):c}),n&&!s&&Object(l.jsx)("div",{className:i.page_title_sub,children:n})]})};t.a=Object(n.memo)(o)},911:function(e,t,c){e.exports={page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}}}]);