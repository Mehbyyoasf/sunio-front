(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[59],{1788:function(e,t,a){},1856:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var c=a(4),n=a(0),s=a(2),r=a(22),i=a(3),l=a(824),j=a(21),b=a.n(j),o=(a(1788),a(10));function d(){return Object(o.jsx)("div",{className:"about",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:b.a.get("stakeeps.desc.title")}),Object(o.jsxs)("ul",{className:"mt-20",children:[Object(o.jsx)("li",{children:b.a.get("stakeeps.desc.content_1")}),Object(o.jsx)("li",{children:b.a.get("stakeeps.desc.content_2")}),Object(o.jsx)("li",{children:b.a.get("stakeeps.desc.content_3")}),Object(o.jsx)("li",{children:b.a.get("stakeeps.desc.content_4")})]})]})})}var u=a(826),O=a(1),p=a(70),x=a(5),k=a(168),h=a(268),f=a(147),m=a(807),g=Object(o.jsxs)("span",{children:[b.a.get("stakeeps.tokens.tip_1"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_2"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_3"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_4"),Object(o.jsx)("br",{})]}),v=Object(o.jsxs)("span",{children:[b.a.get("stakeeps.tokens.tip_5"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_6"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_7"),Object(o.jsx)("br",{}),b.a.get("stakeeps.tokens.tip_8"),Object(o.jsx)("br",{})]});function w(e){var t=x.a.tokens,a=x.a.defaultId,c=Object(p.d)((function(){return k.a.system})),r=window.localStorage.getItem("lang")||b.a.options.currentLocale,i=function(){var r=Object(s.a)(Object(n.a)().mark((function s(r){var i,l;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Object(O.a)(r).gt(0)){n.next=7;break}return i={title:"actions.claim_lp",obj:{value:Object(O.t)(r),symbol:e.data.symbol}},n.next=4,c.withdrawSSP(Object(O.a)(r).times(t[a].precision)._toHex(),i);case 4:(l=n.sent)&&setTimeout((function(){e.cb(!0)}),5e3),console.log(l);case 7:case"end":return n.stop()}}),s)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var t=Object(s.a)(Object(n.a)().mark((function t(a){var s,r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Object(O.a)(a).gt(0)){t.next=7;break}return s={title:"actions.claim_lp",obj:{value:Object(O.t)(a),symbol:e.data.symbol}},t.next=4,c.exitSSP(s);case 4:(r=t.sent)&&setTimeout((function(){e.cb(!e.init)}),5e3),console.log(r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var r=Object(s.a)(Object(n.a)().mark((function s(){var r,i;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={title:"actions.claim_all",obj:{value1:Object(O.t)(Object(O.a)(e.claimable[1]).div(Object(O.a)(10).pow(18))),symbol1:t[a].symbol,value2:Object(O.t)(Object(O.a)(e.claimable[3]).div(t.tusd.precision)),symbol2:t.tusd.symbol}},n.next=3,c.getReward(t[a].stake,r);case 3:(i=n.sent)&&setTimeout((function(){e.cb(!0)}),5e3),console.log(i);case 6:case"end":return n.stop()}}),s)})));return function(){return r.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"tokens"+("en-US"===r?" english ":""),children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:b.a.get("stakeeps.tokens.title")}),Object(o.jsxs)("strong",{children:[b.a.get("stakeeps.tokens.sub_title"),Object(o.jsx)(h.a,{title:g,trigger:["hover","click"],children:Object(o.jsx)(m.a,{})})]}),Object(o.jsxs)("p",{className:"mobile c-999",children:[b.a.get("stakeeps.tokens.available_withdraw_without_penalty"),":",Object(o.jsxs)("span",{children:[Object(O.t)(e.withdrawable.available)," ",a.toUpperCase()]})]}),Object(o.jsxs)("p",{className:"mobile c-999",children:[Object(o.jsxs)("span",{className:"ml-0",children:[b.a.get("stakeeps.tokens.available_withdraw"),": ",Object(O.t)(e.withdrawable.amount)," ",a.toUpperCase()]}),Object(o.jsxs)("span",{children:[b.a.get("stakeeps.tokens.early_exit")," ",Object(O.t)(e.withdrawable.penaltyAmount)," ",a.toUpperCase()]})]}),Object(o.jsxs)("div",{className:"token-buttons",children:[Object(o.jsxs)(f.a,{style:{marginRight:20},onClick:function(){return i(Object(O.a)(e.withdrawable.available))},disabled:!Object(O.a)(e.withdrawable.available).gt(0),children:[b.a.get("stakeeps.tokens.claim_available")," (",Object(O.t)(e.withdrawable.available,{miniText:.01})," ",a.toUpperCase(),")"]}),Object(o.jsxs)(f.a,{className:Object(O.a)(e.withdrawable.amount).gt(0)?"red-btn":"",onClick:function(){return l(Object(O.a)(e.withdrawable.amount))},disabled:!Object(O.a)(e.withdrawable.amount).gt(0),children:[b.a.get("stakeeps.tokens.claim_with_penalty")," (",Object(O.t)(e.withdrawable.amount,{miniText:.01})," ",a.toUpperCase(),")"]})]}),Object(o.jsxs)("strong",{children:[b.a.get("stakeeps.tokens.reward_text"),Object(o.jsx)(h.a,{title:v,trigger:["hover","click"],children:Object(o.jsx)(m.a,{})})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"token-buttons",children:[Object(o.jsxs)(f.a,{style:{marginRight:20},onClick:function(){return j()},disabled:!Object(O.a)(e.claimable[1]).gt(0)&&!Object(O.a)(e.claimable[3]).gt(0),children:[b.a.get("stakeeps.tokens.claim_text")," ",Object(O.t)(Object(O.a)(e.claimable[1]).div(t[a].precision),{miniText:.01})," ",a.toUpperCase()," ",b.a.get("stakeeps.tokens.reward_text")]}),Object(o.jsxs)(f.a,{onClick:function(){return j()},disabled:!Object(O.a)(e.claimable[1]).gt(0)&&!Object(O.a)(e.claimable[3]).gt(0),children:[b.a.get("stakeeps.tokens.claim_text")," ",Object(O.t)(Object(O.a)(e.claimable[3]).div(t.tusd.precision),{miniText:.01})," ","TUSD ",b.a.get("stakeeps.tokens.reward_text")]})]})]})})}function y(e){var t=window.localStorage.getItem("lang");return Object(o.jsx)("div",{className:"table",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:b.a.get("stakeeps.vesting_table.title")}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:b.a.get("stakeeps.vesting_table.amount")}),Object(o.jsx)("th",{children:b.a.get("stakeeps.vesting_table.penalty")}),Object(o.jsx)("th",{children:b.a.get("stakeeps.vesting_table.expiry")})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{style:{display:"none"},children:[Object(o.jsx)("td",{children:Object(o.jsx)("span",{})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{})})]}),e.earned&&e.earned.list.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(O.t)(Object(O.a)(e.amount).div(Object(O.a)(10).pow(18)))}),Object(o.jsx)("td",{children:Object(O.a)(e.amount).div(2*Object(O.a)(10).pow(18))._toFixed(2,1)}),Object(o.jsx)("td",{children:"zh-CN"===t?new Date(1e3*e.time).toLocaleDateString("zh"):new Date(1e3*e.time).toDateString()})]},e.time)}))]})]})]})})}function _(e){var t=x.a.tokens,a=window.localStorage.getItem("lang");return Object(o.jsx)("div",{className:"table",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:b.a.get("stakeeps.locked_table.title")}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:b.a.get("stakeeps.locked_table.amount")}),Object(o.jsx)("th",{children:b.a.get("stakeeps.locked_table.expiry")})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{style:{display:"none"},children:[Object(o.jsx)("td",{children:Object(o.jsx)("span",{})}),Object(o.jsx)("td",{children:Object(o.jsx)("span",{})})]}),0!=e.lockedData.length&&e.lockedData.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(O.t)(Object(O.a)(e.amount).div(t[e.id].precision))}),Object(o.jsx)("td",{children:"zh-CN"===a?new Date(1e3*e.time).toLocaleDateString("zh"):new Date(1e3*e.time).toDateString()})]},e.time+e.id)}))]})]})]})})}var S=a(1851);function N(e){var t=!1,a=Object(i.useState)(0),c=Object(r.a)(a,2),l=c[0],j=c[1],d=Object(i.useState)(""),u=Object(r.a)(d,2),x=u[0],h=u[1],m=Object(p.d)((function(){return k.a.system})),g=window.localStorage.getItem("lang")||b.a.options.currentLocale,v=function(){var a=Object(s.a)(Object(n.a)().mark((function a(){var c,s,r;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,c=e.data.allowance,s=e.data.symbol,!c.lt(Object(O.a)(l))||t){a.next=11;break}return r={action:"approve",title:"deposit.approve_token",obj:{value:s},continuous:!0},a.next=7,m.toApproveLP(e.data.token,e.data.stake,r);case 7:a.sent&&(t=!0,y()),a.next=12;break;case 11:y();case 12:a.next=16;break;case 14:a.prev=14,a.t0=a.catch(0);case 16:case"end":return a.stop()}}),a,null,[[0,14]])})));return function(){return a.apply(this,arguments)}}();Object(i.useEffect)((function(){"--"!==e.data.balance&&w(e.data.balance,"init")}),[e.init]);var w=function(t,a){var c=e.data,n=c.decimal,s=c.balance,r=c.symbol,i=Object(O.S)(t,n),l=i.valid,o=i.str;l&&(h(!1),(Object(O.a)(o).eq(0)||Object(O.a)(o).isNaN())&&"input"===a?h(b.a.get("error.e1")):Object(O.a)(o).gt(s)&&h(b.a.get("error.e2",{token:r})),j(o))},y=function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var a,c;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={title:e.locked?"actions.lock_lp":"actions.stake_lp",obj:{value:Object(O.t)(l),symbol:e.data.symbol}},t.next=4,m.stakeSSP(Object(O.a)(l).times(e.data.precision)._toIntegerDown()._toHex(),e.locked,a);case 4:(c=t.sent)&&setTimeout((function(){e.cb(!0)}),5e3),console.log(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"column ssp"+("en-US"===g?" english ":""),children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("legend",{children:e.title}),Object(o.jsxs)("div",{className:"st-title c-333 fw-bold",children:[b.a.get("stakeeps.lock.deposit_text"),":"]}),Object(o.jsxs)("p",{className:"c-999 fs-12",children:[b.a.get("stake.available_balance"),": ",Object(O.t)(e.data.balance)]}),Object(o.jsx)(S.a,{type:"text",value:l,onChange:function(e){return w(e.target.value,"input")}}),x&&Object(o.jsx)("div",{className:"red-error",children:x}),Object(o.jsx)("div",{className:"st-mix",children:Object(o.jsx)(f.a,{onClick:function(){return v()},disabled:x||!Object(O.a)(l).gt(0),className:"btn",children:b.a.get("stake.deposit")})}),Object(o.jsxs)("span",{className:"c-999 lh-24 fs-12",children:[e.locked?b.a.get("stakeeps.lock.desc"):b.a.get("stakeeps.stake.desc"),Object(o.jsx)("br",{}),e.locked?Object(o.jsxs)("div",{className:"apy lh-24 fs-12",children:[b.a.get("stake.apy"),":",Object(o.jsx)("span",{children:e.stakeApyData.unlocked.gte(0)?"".concat(Object(O.s)(e.stakeApyData.unlocked),"%"):"--"}),Object(o.jsx)("span",{children:b.a.get("stake.inAPY")})," +",Object(o.jsx)("span",{children:e.stakeApyData.locked.gte(0)?" ".concat(Object(O.s)(e.stakeApyData.locked),"%"):"--"}),Object(o.jsx)("span",{children:b.a.get("stake.inSUN")})]}):Object(o.jsxs)("div",{className:"apy lh-24 fs-12",children:[b.a.get("stake.apy"),":",Object(o.jsx)("span",{children:e.stakeApyData.unlocked.gte(0)?"".concat(Object(O.s)(e.stakeApyData.unlocked),"%"):"--"}),Object(o.jsx)("span",{children:b.a.get("stake.inAPY")})]})]}),Object(o.jsxs)("span",{className:"c-999 lh-24 fs-12",children:[e.locked?b.a.get("stakeeps.stake.total_locked"):b.a.get("stakeeps.stake.total_staked"),":"," ",Object(O.t)(e.totalStaked)," SUN"]})]})})}var D=a(16),A=a(829),C=a(28),T=a(27),U=a(1288);function I(){var e=x.a.tokens,t=x.a.startTipTime,a=x.a.defaultId,j=Object(p.d)((function(){return k.a.network})),h=Object(i.useState)(Object(T.l)()),f=Object(r.a)(h,2),m=f[0],g=f[1],v=Object(i.useState)(0),S=Object(r.a)(v,2),I=S[0],P=S[1],L=Object(i.useState)(!1),z=Object(r.a)(L,2),E=z[0],R=z[1],F=Object(i.useState)(0),H=Object(r.a)(F,2),J=H[0],Y=H[1],q=Object(i.useState)("-"),G=Object(r.a)(q,2),Q=G[0],V=G[1],B=Object(i.useState)("-"),K=Object(r.a)(B,2),M=K[0],W=K[1],X=Object(i.useState)({total:"",list:[]}),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(i.useState)(0),ae=Object(r.a)(te,2),ce=ae[0],ne=(ae[1],Object(i.useState)({unlocked:Object(O.a)(0),locked:Object(O.a)(0)})),se=Object(r.a)(ne,2),re=se[0],ie=se[1],le=Object(i.useState)([]),je=Object(r.a)(le,2),be=je[0],oe=je[1],de=Object(i.useState)(!0),ue=Object(r.a)(de,2),Oe=ue[0],pe=ue[1],xe=null,ke=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:he(!0),xe||(xe=setInterval(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:he(!1);case 1:case"end":return e.stop()}}),e)}))),j.defaultIntervalSec));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){return function(){clearInterval(xe)}}),[]);var he=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(),e.next=3,fe(t);case 3:return e.next=5,ge();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var t=Object(s.a)(Object(n.a)().mark((function t(s){var r,i,l;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.jb)(window.defaultAccount,m);case 2:return r=t.sent,g(Object(c.a)({},r)),s&&R(!E),t.next=7,Object(D.cc)(e[a].stake);case 7:return i=t.sent,V(Object(O.a)(i).div(Object(O.a)(10).pow(e[a].decimal))),t.next=11,Object(D.Qb)(e[a].stake);case 11:l=t.sent,W(Object(O.a)(l).div(Object(O.a)(10).pow(e[a].decimal))),ve();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),me=function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var c,s,r;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.hc)(e[a].stake,window.defaultAccount);case 2:return c=t.sent,P(c),t.next=6,Object(D.E)(e[a].stake,window.defaultAccount);case 6:return s=t.sent,Y(s),t.next=10,Object(D.G)(e[a].stake,window.defaultAccount);case 10:r=t.sent,ee(r);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ge=function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var c;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.Pb)(e[a].stake,window.defaultAccount,a);case 2:c=t.sent,oe(c.list);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ve=function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var c,s;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.d)();case 2:c=t.sent,console.log(c.data,"getStakeApyData"),s={},c.data.map((function(t){t.name===e[a].name&&(s.locked=Object(O.a)(t.apy).times(100)),t.name===e.ssptusd.name&&(s.unlocked=Object(O.a)(t.apy).times(100))})),ie(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),we=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:pe(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)(p.a,{children:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a,{routeName:"rewards",mountedActions:ke}),Object(o.jsx)(u.a,{title:b.a.get("banner.title_4"),desc:b.a.get("banner.desc_4"),link:!0}),Object(o.jsx)(A.a,{}),(new Date).getTime()<t&&Oe&&Object(o.jsx)(U.a,{cb:we}),Object(o.jsxs)("div",{id:"stakessp",children:[Object(o.jsx)(d,{}),j.isConnected&&Object(o.jsxs)("div",{className:"wrap",children:[Object(o.jsx)(N,{totalStaked:M,stakeApyData:re,data:m[a],title:b.a.get("stakeeps.lock.sub_title_ssp"),locked:!0,cb:he,init:E}),Object(o.jsx)(N,{totalStaked:Q,stakeApyData:re,data:m[a],title:b.a.get("stakeeps.stake.title"),locked:!1,cb:he,init:E}),Object(o.jsx)(w,{withdrawable:I,claimable:J,earned:$,cb:he,data:m[a]}),0!==$.list.length&&Object(o.jsx)(y,{earned:$,vestValue:ce}),0!==be.length&&Object(o.jsx)(_,{lockedData:be})]})]})]})}})}}}]);