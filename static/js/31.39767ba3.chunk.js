(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[31],{1054:function(e,t,a){"use strict";a(1067);var c=a(16),s=a.n(c),n=a(2);t.a=e=>Object(n.jsx)("div",{className:"tempalte-pageTab-nav",children:e.list.map((t=>Object(n.jsx)("div",{className:s()("tempalte-pageTab-nav-item",{"tempalte-pageTab-nav-active":e.activeKey===t.value}),onClick:()=>t.handler(t),children:t.label},t.value)))})},1057:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o}));var c=a(9),s=a.n(c);const n={row:{gutter:[{xs:8,sm:16,md:32},20]},colLeft:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:15}},colRight:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:9}}},l={1:{title:s.a.get("banner.title_deposit"),content:s.a.get("banner.desc_deposit"),tabTitle:s.a.get("header.deposit")},2:{title:s.a.get("banner.title_withdraw"),content:s.a.get("banner.desc_withdraw"),tabTitle:s.a.get("header.withdraw")},3:{title:s.a.get("banner.title_1"),content:s.a.get("banner.desc_1"),tabTitle:s.a.get("header.swap")}},o=[{label:l[1].tabTitle,value:"1"},{label:l[2].tabTitle,value:"2"},{label:l[3].tabTitle,value:"3"}]},1059:function(e,t,a){"use strict";var c=a(16),s=a.n(c),n=a(1080),l=a(2);t.a=e=>{const{checked:t,tokenLogo:a,symbol:c="",onChange:o,id:i=""}=e;return Object(l.jsxs)("div",{className:s()({[n.sun_check_button]:!0,[n.sun_check_active_button]:t}),onClick:()=>{o&&o(!t,i)},children:[a&&Object(l.jsx)("img",{src:a,alt:"",className:"token-logo"}),Object(l.jsx)("span",{children:c})]})}},1060:function(e,t,a){"use strict";var c=a(9),s=a.n(c),n=a(16),l=a.n(n),o=a(1910),i=a(1070),r=a(2);const b=[{key:.2,label:"0.2%"},{key:3,label:"3%"}],j=[{key:.005,label:"0.5%"},{key:.01,label:"1%"}];t.a=e=>{const{slippage:t,customSlippage:a,CUSTOM_SLIPPAGE:c,type:n="withdraw"}=e,d="withdraw"===n?b:j;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"mr-10",children:s.a.get("withdraw.slippage")}),Object(r.jsxs)("div",{className:l()(i.setting_btns),children:[Object(r.jsx)("div",{className:i.setting_btn_wrap,children:d.map((a=>Object(r.jsx)("button",{className:l()(t===a.key?i.active:""),onClick:()=>{return t=a.key,void(e.onChangeSlippage&&e.onChangeSlippage(t));var t},children:a.label})))}),Object(r.jsx)(o.a,{className:l()(i.setting_input,i.module_important,["ml-20"]),suffix:"%",value:a,onFocus:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(c)},onBlur:()=>{a||e.onChangeSlippage&&e.onChangeSlippage(String(d[0].key))},onChange:t=>{e.onChangeCustomSlippage&&e.onChangeCustomSlippage(t.target.value)}})]})]})}},1064:function(e,t,a){"use strict";var c=a(1),s=a(16),n=a.n(s),l=a(1068),o=a(2);const i=e=>{const{title:t,subTitle:a,isRevert:c}=e,s="string"===typeof t;return Object(o.jsxs)("div",{className:l.page_title_wrap,children:[c&&a&&Object(o.jsx)("div",{className:l.page_title_sub,children:a}),t&&Object(o.jsx)("div",{className:n()({[l.page_title]:!0,[l.page_title_revert]:c,[l.page_title_ele]:!s}),children:s?t.split("").map(((e,t)=>Object(o.jsx)("span",{className:l.page_title_ele,children:e},t))):t}),a&&!c&&Object(o.jsx)("div",{className:l.page_title_sub,children:a})]})};t.a=Object(c.memo)(i)},1067:function(e,t,a){},1068:function(e,t,a){e.exports={page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}},1070:function(e,t,a){e.exports={setting_wrap:"style_setting_wrap__L7ld9",setting_label:"style_setting_label__3qQrG",setting_btns:"style_setting_btns__zH_61",setting_btn_wrap:"style_setting_btn_wrap__uxT1B",setting_input:"style_setting_input__kvJzs",active:"style_active__10VTC",module_important:"style_module_important__PuwNO",info_text:"style_info_text__3K73H",setting_minutes:"style_setting_minutes__1mIXw"}},1072:function(e,t,a){},1075:function(e,t,a){},1076:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA/JJREFUWEfVWctqFUEQPeX7/X5tXIkIouBa/AkxgkYXgrhwIQiufaCuxYXoQsSNGkHFnxDXgiKIuHJlTIwmMYmJ8ci5Voe+k3tneuaOIVMwhCTT3aerTlWdnjb0YCQNwHIAKwEsA7AEwFL/qZn/AJj1n78B/AIwY2asuqwWLG0kBXCVPwJZxrSJKT1mpg2UslKASa4AsMG9GhaSBwVgJuNR/T/2uCKhTSoCwTRm1MymU1EnASapcK/3BUOoJ9xLWjTZSAbgayLqaMNjZiba5FohYA//ZgB6V9z7qcfMFNrKRlLeX+tPmHukiCa5gElqQlFAJi8ofKJAbUZSFNEaootMa8gpHa0rYJIbAShssnE9vWR33g692qwDoEc2YWY/Oo3pCDjj2e9mNlmbS3MmIrkawKY8T88D7Jzd4oMWDGzYRwb0tyyn2wB7NdjmCSYKjC2EZ7NrkFRFEj2U5ENx9cgCVjUQ+ZVg8m6pjkTyMIA9AAZSSlQ3ZzinRY0WFjMbCe/OAfamsNV39bVMNSCp5LwN4JxPfMPMrvQSHa8e2z3aw6G5xIBFBRX1UlQgeRDAUwD7I4A9A9ZcETWkP4b0txbgKNHUDOTdpKZA8jyAW1EN1XQDAM7WUVm8ucjLajKtBAyAxReVlCTvkhTXHwA4GnlVxf6CmT3shQo5CdiqzeYE3+G7UEbmagOSRwA8AbA7mvwNgBNm9qFOsB590VR0VdQHBVgKTMk2a2aDBR3pMoCrGcWljnTPtW4VvB/lgLyKRFIOVQsfFuBQ8yRoRnNKzTEAz6sgShhz2swe56wtrSFdMy7AofbmdjWSfQCeJSxe5ZUiwKFlTwmw6CBazGuDHRJAoA9UQZQzJoUSOuFILkwLcOCHylmhgK4ZbNJ0LhlU3mYFeJfX4y+p9TdplRpf8nq8Uy2jkYAbR4mkpPMG0w9gb43R1lTvzCy3XEbSoZV0qWXtFIBHNYMN0x3PAx2J+lZZS20c/xNwn5m9SG0cSa25Bkqolkrd6XAbTCfwa2Z2s0AStLVmKbZk8VOFEiT3uWY+FI3/DKDfzF4VgG0XP66IwpE+SV6WAU3yDIA7rgXC0JeumeeOPjl0CJT9Jy8dcGh9pQR8gWfU/6WZT0bv6ax4yczupmy6q4B30JWOSDmeuQ5AcjTYe9fMb1PAOqbg3fYjkv8zJJ9OyqUOoZ0AkIwB3wdw0cz0ATHJCg+hDrqnY36MxAWL6PDJzF4nofSXko75DlifVZvzISWTgPp1cX+qCmFr1MfACHRzPrd28fTi/qAdgVZTacaVQQS6OZcymdrajGuvbNH3E4C0guhS5WJRF4qTRTdGnZpN4bVXgcBZ8Kvbv7gRNO3rhp7CAAAAAElFTkSuQmCC"},1077:function(e,t,a){"use strict";var c=a(55);t.a=e=>{let{childPage:t}=e;const a=["deposit","withdraw","swap"],s=function(e,s){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const l=a[e-1],o=c.g[s?"".concat(s,"_").concat(l):l];o&&Object(c.a)({action:o(t),event_category:t,...n})};return{tabChangeLog:e=>s(e,"tab"),tabSubmitLog:(e,t)=>s(e,null,t)}}},1080:function(e,t,a){e.exports={sun_check_button:"style_sun_check_button__5diEB",sun_check_active_button:"style_sun_check_active_button__28IzL"}},1092:function(e,t,a){"use strict"},1967:function(e,t,a){"use strict";a.r(t),a.d(t,"renderTab",(function(){return de})),a.d(t,"usePoolTab",(function(){return pe}));var c=a(1954),s=a(1928),n=a(1930),l=a(69),o=a(1),i=a(9),r=a.n(i),b=(a(1072),a(1075),a(126)),j=a(1053),d=(a(1498),a(1910)),u=(a(1092),a(269)),p=a(1076),g=a(3),O=a(5),m=a(18),h=a(0),w=a(1059),x=a(1060),v=a(1055),f=a(271),_=a(2);function y(e){const[t,a]=Object(o.useState)(1),[c,s]=Object(o.useState)(1),[n,i]=Object(o.useState)(0),[j,y]=Object(o.useState)(1),[N,S]=Object(o.useState)(-1),[A,C]=Object(o.useState)(1),[P,k]=Object(o.useState)(.005),[T,K]=Object(o.useState)(""),[L,D]=Object(o.useState)(!0),[I,F]=Object(o.useState)(""),[B,V]=Object(o.useState)(!1),{twoKeyPools:U,twoKeyPoolIndex:E,twoKeyPoolKeys:M,twoKeyNewPoolContracts:R}=g.a,{stablePool:H}=R,q=Object(l.d)((()=>b.a.network)),J=Object(l.d)((()=>b.a.system)),Z=Object(l.d)((()=>b.a.twoKeyNewPool)),[Q,W]=Object(o.useState)(!1);Object(o.useEffect)((()=>{G({i:t,j:n,dx:c})}),[]);const z=e=>{let{...t}=e;V(!B),X({...t,exchangeFlags:!B})},G=async e=>{let{...a}=e;try{let e=void 0===a.i?t:a.i,s=void 0===a.j?n:a.j,l=void 0===a.dx?Object(h.fb)(c):Object(h.fb)(a.dx);if(!Object(h.a)(l).gt(0))return void y(0);let o=Object(h.a)(l).times(U[E[e]].precision)._toIntegerDown()._toHex(),i=null;if(i=await Object(O.S)(e,s,o,H),i.success){let e=Object(h.a)(i.value).div(U[E[s]].precision);y(Object(h.c)(Object(h.a)(e)._toFixed(U[E[s]].decimal,1))),C(Object(h.a)(i.value))}else y(0),C(1);a.notChangeRate||X({i:e,j:s,dx:l})}catch(s){console.log("getDyData: ",s)}},X=async e=>{let{...a}=e;try{let e=void 0===a.i?t:a.i,s=void 0===a.j?n:a.j,l=void 0===a.dx?Object(h.fb)(c):Object(h.fb)(a.dx),o=void 0===a.exchangeFlags?B:a.exchangeFlags,i=Object(h.a)(l).times(U[E[e]].precision)._toIntegerDown()._toHex(),r=null;if(!Object(h.a)(l).gt(0))return;if(r=await Object(O.S)(e,s,i,H),r.success){let e=Object(h.a)(r.value).div(U[E[s]].precision).div(l);S(o?Object(h.a)(1).div(Object(h.a)(e)._toFixed(4,1))._toFixed(4,1):e._toFixed(4,1))}}catch(s){console.log("getRateData: ",s)}},Y=e=>{let l=n;Number(e)!==Number(t)&&(l=t),a(l),i(e);let o=Object(h.fb)(c)._toFixed(U[E[l]].decimal,1);s(Object(h.c)(o)),G({j:e,i:l,dx:o})},$=e=>{!Q&&W(!0);const{valid:a,str:c}=Object(h.V)((""+e).replace(/,/g,""),U[E[t]].decimal);let n=Z.poolData&&Object(h.a)(Z.poolData[E[t]].balance).div(U[E[t]].precision)._toFixed(2,1);if(a){if(Object(h.a)(c).lte(0))return s(Object(h.c)(c)),y(0),void F(r.a.get("buysell.error_msg_1"));Object(h.a)(c).gt(n)&&F(r.a.get("buysell.error_msg_2")),s(Object(h.c)(c)),G({dx:c})}},ee=()=>{let{precision:e,balance:a,symbol:s}=Z.poolData[E[t]];return a=Object(h.a)(a).div(e),Object(h.fb)(c).eq(0)||Object(h.fb)(c).isNaN()?(F(r.a.get("error.e1")),!0):Object(h.fb)(c).gt(a)?(F(r.a.get("error.e2",{token:s})),!0):2===P&&(!T||Number(T)<.1||Number(T)>50)?(F(r.a.get("error.e5")),!0):(F(""),!1)};Object(o.useEffect)((()=>{Q&&ee()}),[t,n,c,P,T]);const te=()=>{let e=Z.poolData&&Object(h.a)(Z.poolData[E[t]].balance).div(U[E[t]].precision);$(e)},ae=e=>{!Q&&W(!0),k(e),2!==e&&K("")},ce=e=>{!Q&&W(!0);const{valid:t,str:a}=Object(h.V)(e,10);if(t)if(""===a)K("");else if(Object(h.a)(a).lte(100)){var c;let e=a,t=a.split(".");(null===(c=t[1])||void 0===c?void 0:c.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),K(e)}},se=()=>{const e=()=>{var e,a;let c=t,s=n;return B&&([c,s]=[s,c]),Object(_.jsx)(_.Fragment,{children:(null===(e=E[c])||void 0===e?void 0:e.toUpperCase())+"/"+(null===(a=E[s])||void 0===a?void 0:a.toUpperCase())})};return Object(_.jsxs)("p",{className:"exchang-rate-text mt-20",children:[Object(_.jsxs)("span",{className:"en-US"===window.localStorage.getItem("lang")?"er-en":"",children:[r.a.get("buysell.exchange_rate")+" ",Object(_.jsx)(e,{})]}),Object(_.jsx)("img",{style:{cursor:"pointer",margin:"0 6px"},className:"exchange-img",alt:"",src:p.a,onClick:z}),Object(_.jsxs)("span",{children:["(",r.a.get("buysell.including_fees"),"): ",-1===N?r.a.get("buysell.not_available"):N]})]})},ne=()=>{const a=async()=>{if(!I)try{let a=2!==P?P:T?Object(h.a)(T).div(100):0,s=Object(h.a)(A).times(Object(h.a)(1).minus(Object(h.a)(a)))._toIntegerDown()._toHex(),l=t,o=n,i=Object(h.fb)(c).times(U[E[l]].precision)._toIntegerDown()._toHex();const r={title:"notification.tip1",title2:"notification.tip1",title3:"notification.tip1",title4:"notification.tip1",obj:{fromValue:Object(h.u)(Object(h.fb)(c)),fromToken:E[l].toUpperCase(),toValue:Object(h.u)(Object(h.fb)(j)),toToken:E[o].toUpperCase()}};let b=await J.toExchange(l,o,i,s,r,[["twoKeyNewPool/updateCurrencyData"]],H);b&&(setTimeout((()=>{Z.getBalanceInfo()}),5e3),e.onSubmit&&e.onSubmit(b))}catch(a){console.log("sellSubmit: ",a)}};return Object(_.jsx)(_.Fragment,{children:I?Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("sell_btn")}):Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",info:r.a.get("sell_btn"),onClick:async()=>{if(q.isConnected){if(!Q&&W(!0),!I){if(ee())return}if(!I)try{let e=(await Object(O.Sb)(window.defaultAccount,[U[E[t]].token],[H]))[H].allowance;const{approveStatus:c}=Z.poolData[E[t]];if(e.gt(0)||c)a();else{const e={action:"approve",title:"deposit.approve_token",obj:{value:M[t].toUpperCase()},continuous:!0};if(!await J.approveToken(U[E[t]].token,H,e,[["twoKeyNewPool/getBalanceInfo"]]))return;Z.poolData[E[t]].approveStatus=2,a()}}catch(e){console.log("exchangeBefore: ",e)}}else F(r.a.get("buysell.error_msg_3"))}})})},le=e=>{let{direction:l="left"}=e,o=M,r=U;return Object(_.jsx)("div",{className:"flex start mb-16 pc-input-box",children:o.map((e=>{const o=m.a[e]||u.default,b="left"===l?t:n;return Object(_.jsx)(w.a,{id:e,checked:b===r[e].index,tokenLogo:o,symbol:r[e].symbol,onChange:(o,b)=>{"left"===l?(e=>{let l=t;Number(e)!==Number(n)&&(l=n),i(l),a(e);let o=Object(h.fb)(c)._toFixed(U[E[e]].decimal,1);s(Object(h.c)(o)),G({i:e,j:l,dx:o})})(r[e].index):Y(r[e].index)}})}))})},oe=()=>Object(_.jsx)("span",{className:"exchange-alt",onClick:()=>(()=>{!Q&&W(!0);let e=t,c=n,l=j;e!==c&&(a(c),i(e),s(l),G({i:c,j:e,dx:l,notChangeRate:!0}),X({no:1,i:c,j:e,dx:l}))})()}),ie=e=>{var a;let c="--";return c=null===(a=Z.poolData[E[t]])||void 0===a?void 0:a.balance,c=Object(h.a)(c).isNaN()?"--":Z.poolData[E[t]].balance.div(Z.poolData[E[t]].precision),Object(_.jsx)("span",{children:Z.poolData&&Object(h.u)(c)})},re=Object(f.a)(f.b);return Object(_.jsx)(l.a,{children:()=>Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"exchange-box",children:[Object(_.jsx)(le,{direction:"left"},"left"),Object(_.jsxs)("div",{className:"input-block",children:[Object(_.jsxs)("div",{className:"flex",children:[Object(_.jsx)("div",{className:"input-number",children:Object(_.jsx)(d.a,{className:"input",value:c,onChange:e=>$(e.target.value)})}),Object(_.jsx)("span",{className:"max-btn",onClick:te,children:r.a.get("sunSwapV3.swap.input_from_max")})]}),Object(_.jsxs)("div",{className:"mt-12 input-bottom-usd",children:[Object(_.jsx)("span",{children:r.a.get("sunSwapV3.swap.input_from_balance")})," ",ie(Z.poolData)]})]}),Object(_.jsxs)("div",{className:"flex",children:[Object(_.jsx)(oe,{}),!re&&Object(_.jsx)("div",{className:"flex start",children:Object(_.jsx)(x.a,{type:"exchange",slippage:P,customSlippage:T,CUSTOM_SLIPPAGE:2,onChangeSlippage:e=>{ae(Number(e))},onChangeCustomSlippage:e=>{k(2),ce(e)}})})]}),Object(_.jsx)(le,{direction:"right"},"right"),Object(_.jsxs)("div",{className:"input-block",children:[Object(_.jsx)("div",{className:"input-number",children:Object(_.jsx)(d.a,{disabled:!0,className:"input",value:j})}),Object(_.jsxs)("div",{className:"mt-12 input-bottom-usd",children:[Object(_.jsx)("span",{children:r.a.get("sunSwapV3.swap.input_from_balance")})," ",ie(Z.poolData)]})]}),Object(_.jsx)(se,{}),re&&Object(_.jsx)("div",{className:"flex start",children:Object(_.jsx)(x.a,{type:"exchange",slippage:P,customSlippage:T,CUSTOM_SLIPPAGE:2,onChangeSlippage:e=>{ae(Number(e))},onChangeCustomSlippage:e=>{k(2),ce(e)}})})]}),Object(_.jsx)(ne,{}),I&&Object(_.jsx)("div",{className:"error-content mt-12",children:Object(_.jsx)("div",{className:"error-tip",children:I})})]})})}a(1074);var N=a(1086),S=a(1084);const{Fee:A,ADMIN_FEE:C,twoKeyPoolKeys:P}=g.a;var k=e=>{const t=Object(l.d)((()=>b.a.twoKeyNewPool)),a=Object(l.d)((()=>b.a.network)),c=(e,t)=>{const a=Object(h.a)(e).times(t).div(1e18);return a.isNaN()?"--":Object(h.u)(a,2)},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let a=Object(h.a)(0);for(let c in e){const{userSwapBalance:s,priceKey:n}=e[c],l=t?t[n]:"--";a=a.plus(Object(h.a)(s).times(l))}return Object(h.u)(a)}catch(a){return console.log(a),"--"}},n=P.map((e=>t.poolData[e])).filter((e=>e)),o="".concat(r.a.get("buysell.2pool")," ").concat(r.a.get("pool.pool2_contract")),i="2USD LP ".concat(r.a.get("pool.token_contract2")),j=t.volData?t.volData.usdd2pv2vol24Hours:"";return Object(_.jsx)(l.a,{children:()=>Object(_.jsxs)("div",{children:[Object(_.jsx)(N.a,{poolTokens:n,totalSwapBalance:t.totalSwapBalance,adminFee:C,fee:A,virtualPrice:t.virtualPrice,dailyVol:j,poolContract:g.a.twoKeyNewPoolContracts.stablePool,poolName:o,lpTokenAddress:g.a.twoKeyNewPoolContracts.stable2USD,lpTokenName:i,aValue:t.A}),a.isConnected&&Object(h.a)(t.sharePer).gt(0)&&Object(_.jsx)(S.a,{sharePer:t.sharePer,usdBalance:s(t.poolData,t.volData),avgUsdBalance:c(t.userLpBalance,t.virtualPrice),userTotalBalance:t.userTotalBalance,myPoolTokens:n})]})})},T=a(1500),K=a(1038),L=a(167),D=a(1063),I=(a(1071),a(324)),F=a(1062),B=a(1057),V=a(1054),U=a(1058),E=a(1066),M=a(322);const{twoKeyPools:R,twoKeyPoolKeys:H,ALL_FEE:q,defaultSlippage:J,twoKeyNewPoolContracts:Z}=g.a,{stablePool:Q}=Z;var W=e=>{const{tabPaneKey:t,pageList:a}=e,c=Object(l.d)((()=>b.a.network)),i=Object(l.d)((()=>b.a.system)),d=Object(l.d)((()=>b.a.twoKeyNewPool)),[p,w]=Object(o.useState)((()=>{const e={};return H.map((t=>{e[t]=""})),e})()),[x,f]=Object(o.useState)(!1),[y,N]=Object(o.useState)(!0),[S,A]=Object(o.useState)(!1),[C,P]=Object(o.useState)("--"),[Z,W]=Object(o.useState)("--"),[z,G]=Object(o.useState)(!1),[X,Y]=Object(o.useState)(!1),[$,ee]=Object(o.useState)(!1);let te=null;Object(o.useEffect)((async()=>{await Promise.all([ie(p),ce()]),z&&le(p)}),[p]);const ae=async t=>{try{var a;e.onSubmit&&e.onSubmit();const c=[];H.map((e=>{c.push({...d.poolData[e],inputValue:t[e]?Object(h.fb)(t[e]).times(R[e].precision):Object(h.a)(0)})}));for(let e=0;e<c.length;e++){const{allowance:t=Object(h.a)(0),inputValue:a,token:s,symbol:n,approveStatus:l,id:o}=c[e];if(Object(h.a)(t).lt(a)&&!l){if(!await i.approveToken(s,Q,{title:"deposit.approve_token",obj:{value:n},continuous:!0},[["twoKeyNewPool/getBalanceInfo"]]))return;d.poolData[o].approveStatus=2}}const s=c.sort(((e,t)=>e.index-t.index)),n=s.length,l=s.map((e=>e.inputValue._toIntegerDown()._toHex()))||[];let o=null;if(d.lpTotalSupply.lte(0)&&await d.getUserLp(),d.lpTotalSupply.lte(0))o=Object(h.a)(1);else{const e=await Object(O.j)(l,!0,Q);if(!e.success)return;o=e.value}o=o.times(Object(h.a)(1).minus(Object(h.a)(q).times(n).div(Object(h.a)(4).times(n-1)).div(1e10)));const r=o.times(1-J)._toFixed(0,1),b={title:"actions.addLiq",obj:{detail:Object(h.A)(t,"usddNew")}};await i.addLiquidityTwoKeyPool(l,r,b,[["twoKeyNewPool/updateCurrencyData"]],{poolAddress:null===g.a||void 0===g.a||null===(a=g.a.twoKeyNewPoolContracts)||void 0===a?void 0:a.stablePool})&&de()}catch(c){console.log("deposit err: ",c)}},ce=async()=>{const e=[];for(let a in p){const{index:t,precision:c}=R[a],s=p[a].replace(/,/g,"");e[t]=Object(h.a)(s).isNaN()?0:Object(h.a)(s).times(c)._toIntegerDown()._toHex()}let t=null;if(d.lpTotalSupply.lte(0)&&await d.getUserLp(),d.lpTotalSupply.lte(0))t=Object(h.fb)(p.usdd).plus(Object(h.fb)(p.usdt));else{const a=await Object(O.j)(e,!0,Q);if(!a.success)return;t=a.value.div(1e18)}W(t)},se=async()=>{await Promise.all([d.getSwapBalance(),d.getVirtualPrice(),d.getVolData(),d.getA()])},ne=async()=>{await Promise.all([d.getUserLp(),d.getBalanceInfo()]);const e={};H.map((t=>{const{precision:a,balance:c,decimal:s}=d.poolData[t];e[t]=Object(h.c)(Object(h.a)(c).div(a)._toFixed(s,1))})),w(e),!z&&G(!0),te||(te=setInterval((async()=>{se(),d.getUserLp()}),c.defaultIntervalSec))};Object(o.useEffect)((async()=>(await Promise.all([ne(),se()]),()=>{clearInterval(te)})),[c.defaultAccount]);const le=e=>{const t=Object.keys(e),a=t.length;if(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object.keys(e),a=t.filter((t=>Object(h.fb)(e[t]).eq(0)||!e[t]));return t.length===a.length}(e))return A(r.a.get("error.e1")),!0;for(let c=0;c<a;c++){const a=t[c],s=e[a];if(!s&&(x||y))return A(r.a.get("error.e1")),!0;const{balance:n,precision:l,symbol:o}=d.poolData[a];if(Object(h.a)(n).div(l).lt(Object(h.fb)(s)))return A(r.a.get("error.e2",{token:o})),!0}return A(!1),!1},oe=e=>{ee(e.target.checked)},ie=async e=>{const t=await d.calcInclPrice(e);P(t)},re=(e,t)=>{const a=t,c={};c[e]=Object(h.c)(String(a).replace(/,/g,""));const{precision:s,swapBalance:n,balance:l}=d.poolData[e],o=Object(h.fb)(a).div(n).isNaN()?Object(h.a)(0):Object(h.fb)(a).div(n);H.filter((t=>t!==e)).map((e=>{const{balance:t=Object(h.a)(0),swapBalance:a,precision:s,decimal:n}=d.poolData[e];c[e]=Object(h.c)(o.times(a)._toFixed(n,1)),t.div(s).lt(Object(h.fb)(c[e]))&&(c[e]=Object(h.c)(t.div(s)._toFixed(n,1)))})),w(c)},be=async e=>{try{const t=e.target.checked;f(t),y&&N(!t),t&&re(H[0],p[H[0]])}catch(t){console.log(t)}},je=async e=>{try{const t=e.target.checked;N(t),x&&f(!t);const a={};H.map((e=>{const{balance:t,precision:c,decimal:s}=d.poolData[e];a[e]=Object(h.a)(t).isNaN()?0:Object(h.c)(t.div(c)._toFixed(s,1))})),w(a)}catch(t){console.log(t)}},de=()=>{ee(!1),Y(!1)},ue=Object(M.b)();return Object(_.jsx)(l.a,{children:()=>Object(_.jsxs)(s.a,{...B.a.row,children:[Object(_.jsxs)(n.a,{...B.a.colLeft,children:[Object(_.jsx)(V.a,{list:a,activeKey:t[0]}),Object(_.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{routeName:"2pool/deposit",mountedActions:ne,instantActions:se}),Object(_.jsx)(D.a,{title:"USDD 2pool "+r.a.get("banner.title_deposit"),desc:r.a.get("banner.desc_deposit")}),Object(_.jsx)(F.a,{})]}):null,c.isConnected?Object(_.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(_.jsxs)("div",{className:"add-liq",children:[Object(_.jsxs)("fieldset",{className:"currencies",children:[Object(_.jsx)("legend",{children:r.a.get("deposit.currencies")}),Object(_.jsx)("ul",{children:H.map((e=>{let{symbol:t="",balance:a="--",precision:c,decimal:s}=d.poolData[e];return a=Object(h.a)(a).div(c),Object(_.jsxs)("li",{children:[Object(_.jsxs)("div",{className:"cur-label",children:[Object(_.jsxs)("span",{className:"icon",children:[Object(_.jsx)("img",{src:m.a[e]?m.a[e]:u.default,alt:"",className:"token-logo"})," ",t]}),Object(_.jsx)("span",{className:"token-max",children:r.a.getHTML("deposit.token_max",{balance:Object(h.u)(a)})})]}),Object(_.jsx)(E.a,{value:p[e],onChange:t=>((e,t)=>{y&&N(!1);const{decimal:a}=R[t],{valid:c,str:s}=Object(h.V)((""+e.target.value).replace(/,/g,""),a);c&&(w({...p,[t]:Object(h.c)(s)}),x&&re(t,s))})(t,e),onMaxClick:()=>{((e,t,a)=>{if(Object(h.a)(t).isNaN())return;const c=Object(h.a)(t)._toFixed(a,1);w({...p,[e]:Object(h.c)(c)}),x&&re(e,c)})(e,a,s)}})]},e)}))})]}),!Object(h.a)(C).isNaN()&&Object(h.ab)(C,!0),Object(_.jsxs)("div",{className:"deposit-check",children:[Object(_.jsx)(T.a,{checked:x,onChange:be,children:r.a.get("deposit.ch1")}),Object(_.jsx)("br",{}),Object(_.jsx)(T.a,{checked:y,onChange:je,children:r.a.get("deposit.ch2")})]}),S?Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("deposit.action")}):Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",info:ue?r.a.get("not_available"):r.a.get("deposit.action"),onClick:()=>(async e=>{try{if(!S&&le(e))return;if(S)return;if(Object(h.a)(C).abs().gt(10))return Y(!0);await ae(e)}catch(t){console.log(t)}})(p),disabled:ue}),S&&Object(_.jsx)("div",{className:"error-content mt-12",children:Object(_.jsx)("div",{className:"error-tip",children:S})}),Object(h.a)(Z).gt(0)&&Object(_.jsxs)("div",{className:"error-content mt-12",children:[Object(_.jsxs)("div",{className:"error-tip",children:[r.a.getHTML("deposit.swap_detail",{value:Object(h.u)(Z,2),symbol:r.a.get("buysell.2pool")+" LP"})," "]}),Object(_.jsx)("div",{className:"error-tip",children:r.a.get("deposit.exchange_rate",{value:Object(h.u)(d.virtualPrice,6),symbol:r.a.get("buysell.2pool")+" LP"})})]})]})}):Object(_.jsx)(U.a,{}),Object(_.jsx)(I.a,{}),Object(_.jsx)(K.a,{title:r.a.get("deposit.high_slippage_title"),open:X,closable:!0,icon:null,onCancel:de,footer:null,width:400,className:"common-modal common-bg slippage-modal",children:Object(_.jsxs)("div",{className:"center",children:[Object(_.jsxs)("div",{className:"common-err-bg",children:[Object(_.jsx)("div",{children:r.a.get("deposit.high_tip1")}),Object(_.jsx)("div",{children:r.a.get("deposit.high_tip2",{value:Object(h.u)(Object(h.a)(C).abs(),3)})})]}),Object(_.jsx)(T.a,{checked:$,onChange:oe,children:r.a.get("deposit.confirm_slippage",{value:Object(h.u)(Object(h.a)(C).abs(),3)})}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{className:"btns flex",children:[Object(_.jsx)(L.a,{onClick:()=>Y(!1),type:"primary",children:r.a.get("cancel")}),Object(_.jsx)(L.a,{onClick:()=>ae(p),disabled:!$,children:r.a.get("deposit.anyway")})]})]})})]})]}),Object(_.jsx)(n.a,{...B.a.colRight,children:Object(_.jsx)(k,{})})]})})},z=a(328),G=a(1036);const{twoKeyPools:X,twoKeyPoolKeys:Y,ALL_FEE:$,twoKeyNewPoolContracts:ee,tokens:te}=g.a,{stablePool:ae,stableLp:ce,poly:se}=ee,ne="---",le="CUSTOM",oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t={};return Y.map((a=>{t[a]=e})),t};var ie=e=>{const{tabPaneKey:t,pageList:a}=e,[c=oe("--"),i]=Object(o.useState)(),[d,p]=Object(o.useState)("100.00"),[f,y]=Object(o.useState)(.2),[N,S]=Object(o.useState)(""),[A,C]=Object(o.useState)(!0),[P,T]=Object(o.useState)(!1),[K,L]=Object(o.useState)("--"),[I=oe(!1),M]=Object(o.useState)(),[R,H]=Object(o.useState)(!1),[q,J]=Object(o.useState)(!1),Z=Object(l.d)((()=>b.a.system)),Q=Object(l.d)((()=>b.a.twoKeyNewPool)),W=Object(l.d)((()=>b.a.network));let ee=null;Object(o.useEffect)((async()=>{q&&te()}),[c,d,f,N,I]),Object(o.useEffect)((()=>{me(c,P)}),[c]);const te=()=>d!==ne&&Object(h.fb)(d).gt(100)?(H(r.a.get("error.e3")),!0):(()=>{for(let e in c)if(Object(h.fb)(c[e]).gt(0)||"--"===c[e])return!1;return!0})()?(H(r.a.get("error.e4")),!0):f===le&&(je()||d===ne)&&(Object(h.a)(N).lt(.1)||Object(h.a)(N).gt(50)||Object(h.a)(N).isNaN())?(H(r.a.get("error.e5")),!0):(H(!1),!1),ie=async(e,t)=>{try{var a;const s=e.length,n=e.map((e=>e.inputValue.isNaN()?0:e.inputValue._toIntegerDown()._toHex()))||[],l=await Object(O.j)(n,!1,ae);if(!l.success)return;let o=l.value.times(Object(h.a)(1).plus(Object(h.a)($).times(s).div(4*(s-1))));const i=Object(h.a)(100).plus(t).div(100);if(o=o.times(i)._toIntegerDown(),A&&Object(h.a)(Q.userLpAllowance).lt(o)){if(!await Z.approveToken(ce,ae,{title:"deposit.approve_token",obj:{value:r.a.get("buysell.2pool")+" LP"},continuous:!0},[["twoKeyNewPool/getUserLp"]]))return;C(!1)}const b=o._toHex(),j={title:"actions.remove",obj:{detail:Object(h.A)(c,"usddNew")}};await Z.removeLiqImBalanceTwoKeyPool(n,b,j,[["twoKeyNewPool/updateCurrencyData"]],{poolAddress:null===g.a||void 0===g.a||null===(a=g.a.twoKeyNewPoolContracts)||void 0===a?void 0:a.stablePool})}catch(s){console.log(s)}},re=async(e,t)=>{try{var a;const s=await de(t,e,Object(h.fb)(d));if(!s)return;const{userLpBalance:n,lpTotalSupply:l,balances:o,userLpAllowance:i,minAmounts:b}=s,j=Object(h.fb)(d).div(100).times(n)._toIntegerDown();if(A&&Object(h.a)(i).lt(j._toIntegerDown())){if(!await Z.approveToken(ce,ae,{title:"deposit.approve_token",obj:{value:r.a.get("buysell.2pool")+" LP"},continuous:!0},[["twoKeyNewPool/getUserLp"]]))return;C(!1)}const u={title:"actions.remove",obj:{detail:Object(h.A)(c,"usddNew")}},p=j._toHex();await Z.removeLiquidityTwoKeyPool(p,b,u,[["twoKeyNewPool/updateCurrencyData"]],{poolAddress:null===g.a||void 0===g.a||null===(a=g.a.twoKeyNewPoolContracts)||void 0===a?void 0:a.stablePool})}catch(s){console.log(s)}},be=async(e,t,a)=>{try{var s;const n=await Object(O.tb)(t,e,se);if(!n.success)return;const{userLpBalance:l,userLpAllowance:o}=n,i=Object(h.fb)(d).div(100).times(l)._toIntegerDown();if(A&&Object(h.a)(o).lt(i._toIntegerDown())){if(!await Z.approveToken(ce,ae,{title:"deposit.approve_token",obj:{value:r.a.get("buysell.2pool")+" LP"},continuous:!0},[["twoKeyNewPool/getUserLp"]]))return;C(!1)}const b=i._toHex();let j=!1;for(let e in I)!0===I[e]&&(j=X[e].index);const u=await Object(O.t)(b,j,ae);if(!u.success)return;const p=u.value,m=e.length,w=p.times(Object(h.a)(1).minus(Object(h.a)($).times(m).div(4*(m-1)).div(1e10))),x=Object(h.a)(100).div(Object(h.a)(100).plus(a)),v=w.times(x)._toIntegerDown()._toHex(),f={title:"actions.remove",obj:{detail:Object(h.A)(c,"usddNew")}};await Z.removeLiqOneCoinTwoKeyPool(b,j,v,f,[["twoKeyNewPool/updateCurrencyData"]],{poolAddress:null===g.a||void 0===g.a||null===(s=g.a.twoKeyNewPoolContracts)||void 0===s?void 0:s.stablePool})}catch(n){console.log(n)}},je=()=>{for(let e in I)if(I[e])return e;return!1},de=async function(e,t,a){let c=arguments.length>3&&void 0!==arguments[3]&&arguments[3];try{const s=await Object(O.tb)(e,t,se);if(!s.success)return;const{userLpBalance:n,lpTotalSupply:l,balances:o,userLpAllowance:i}=s,r=[],b={};return t.map((e=>{const{index:t,id:s,decimal:i,precision:j}=e;let d=Object(h.fb)(a).div(100).times(o[t]);c||(d=Object(h.a)(.98).times(d)),r[t]=d.times(n).div(l)._toIntegerDown()._toHex(),b[s]=Object(h.c)(d.times(n).div(l).div(j)._toFixed(i,1))})),{userLpBalance:n,lpTotalSupply:l,balances:o,userLpAllowance:i,minAmounts:r,amountsStr:b}}catch(s){console.log(s)}},ue=async(e,t)=>{try{await Q.getUserLp();const{userLpBalance:a}=Q,{precision:c,decimal:s}=X[e],n=Object(h.fb)(t).div(100).times(a)._toIntegerDown(),l=X[e].index,o=n._toHex(),i=await Object(O.t)(o,l,ae);if(!i.success)return!1;const r=i.value;return Object(h.a)(r).div(c)._toFixed(s,1)}catch(a){console.log(a)}},pe=()=>{Q.getSwapBalance(),Q.getVirtualPrice(),Q.getVolData(),Q.getA()},ge=async()=>{await Promise.all([Q.getUserLp(),Q.getBalanceInfo()]);const e={};Y.map((t=>{const{userSwapBalance:a,decimal:c}=Q.poolData[t];e[t]=Object(h.c)(Object(h.a)(a)._toFixed(c,1))})),i(e),ee||(ee=setInterval((async()=>{pe(),await Q.getUserLp()}),W.defaultIntervalSec))};Object(o.useEffect)((()=>(ge(),pe(),()=>{clearInterval(ee)})),[]);const Oe=async(e,t)=>{!q&&J(!0);let a=Object(h.fb)(d);const s={},n={};if(e){T(!0);for(let e in I)e!==t&&(s[e]=!1,n[e]=0);M({...I,...s,[t]:e}),(d===ne||Object(h.fb)(d).lte(0))&&(a="100.00",p(a)),Object(h.a)(a).gt(100)&&(a=100);const l=await ue(t,a);l&&i({...c,...n,[t]:Object(h.c)(l)})}else p(ne),T(!1),M({...I,[t]:e})},me=async(e,t)=>{const a=await Q.calcInclPrice(e,!1,t);L(a)},he=async e=>{var t;!q&&J(!0);let a=e.target.value,s=a.split(".");if((null===(t=s[1])||void 0===t?void 0:t.length)>2&&(a="".concat(s[0]+"."+s[1].substr(0,2))),Object(h.a)(a).gt(100))return;const{valid:n,str:l}=Object(h.V)(a,10);if(d===ne)return(()=>{const e={},t={};Y.map((a=>{e[a]=0,t[0]=!1})),i(e),M(I),p(0)})();if(""===a)return p(""),(()=>{const e={};Y.map((t=>{e[t]=0})),i(e)})();if(n){p(Object(h.c)(l));const t=Object(h.a)(l).gt(100)?Object(h.a)(100):Object(h.a)(l);if(t.isNaN())return;if(!W.defaultAccount)return;const s=W.defaultAccount,n=je();if(n){const e=await ue(n,t);return e&&i({...c,[n]:Object(h.c)(e)})}if(l!==ne){const t=[];Y.map((e=>{t.push({...X[e]})}));const c=t.sort(((e,t)=>e.index-t.index)),n=await de(s,c,l,!0);if(a===e.target.value){const{amountsStr:e={}}=n;n&&i(e)}}}},we=e=>{!q&&J(!0),y(e),e!==ne&&S("")},xe=e=>{const{valid:t,str:a}=Object(h.V)(e,10);if(t)if(""===a)S("");else if(Object(h.a)(a).lte(100)){var c;let e=a,t=a.split(".");(null===(c=t[1])||void 0===c?void 0:c.length)>2&&(e="".concat(t[0]+"."+t[1].substr(0,2))),S(e)}},ve=e=>je()||d===ne?Object(_.jsx)("div",{className:"flex start mt-20",children:Object(_.jsx)(x.a,{slippage:e,customSlippage:N,CUSTOM_SLIPPAGE:le,onChangeSlippage:we,onChangeCustomSlippage:xe})}):Object(_.jsx)(_.Fragment,{});return Object(_.jsx)(l.a,{children:()=>Object(_.jsxs)(s.a,{...B.a.row,children:[Object(_.jsxs)(n.a,{...B.a.colLeft,children:[Object(_.jsx)(V.a,{list:a,activeKey:t[0]}),Object(_.jsxs)("div",{className:"pool-deposit",children:[e.isSinglePage?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{routeName:"3pool/withdraw",mountedActions:ge,instantActions:pe}),Object(_.jsx)(D.a,{title:"3pool "+r.a.get("banner.title_withdraw"),desc:r.a.get("banner.desc_withdraw")}),Object(_.jsx)(F.a,{})]}):null,W.isConnected?Object(_.jsx)("div",{className:e.isSinglePage?"window white":"window-for-tabs-pane",children:Object(_.jsxs)("div",{className:"add-liq withdraw-liq",children:[Object(_.jsxs)("div",{className:"flex",children:[r.a.get("withdraw.share_of_liq"),Object(_.jsx)(E.a,{placeholder:"100.00",value:d,onChange:he,showMax:!1,className:"flex-1 ml-20"})]}),Object(_.jsxs)("fieldset",{className:"currencies mt-35",children:[Object(_.jsx)("legend",{children:r.a.get("deposit.currencies")}),Object(_.jsx)("ul",{children:Y.map((e=>{const t=X[e],{symbol:a=""}=t;return Object(_.jsxs)("li",{children:[Object(_.jsx)("div",{className:"cur-label",children:Object(_.jsxs)("span",{className:"icon",children:[Object(_.jsx)("img",{src:m.a[e]?m.a[e]:u.default,alt:"",className:"token-logo"}),a]})}),Object(_.jsx)(E.a,{showMax:!1,value:c[e],onChange:t=>{(async(e,t)=>{!q&&J(!0);const{decimal:a}=X[t],{valid:s,str:n}=Object(h.V)((""+e.target.value).replace(/,/g,""),a);s&&i({...c,[t]:Object(h.c)(n)}),p(ne),T(!1);const l={};for(let c in I)l[c]=!1;M(l)})(t,e)}})]},e)}))})]}),Object(h.ab)(K),Object(_.jsxs)("fieldset",{children:[Object(_.jsxs)("legend",{className:"flex aic jcs pt20",children:[Object(_.jsx)("span",{className:"mr-10",children:r.a.get("withdraw.withdraw_text")}),Object(_.jsx)(z.a,{title:r.a.get("withdraw.tip"),children:Object(_.jsx)(G.a,{})})]}),Object(_.jsx)("div",{className:"withdraw-one mt-10",children:Y.map((e=>{const{symbol:t=""}=X[e];return Object(_.jsx)(w.a,{id:e,checked:I[e],tokenLogo:m.a[e]?m.a[e]:u.default,symbol:t,onChange:Oe})}))})]}),ve(f),R?Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",disabled:!0,info:r.a.get("withdraw.action")}):Object(_.jsx)(v.a,{styleName:"mt-40",type:"single",info:r.a.get("withdraw.action"),onClick:()=>(async t=>{try{if(!W.defaultAccount)return;if(!q&&J(!0),!R&&te(t))return;if(R)return;const a=W.defaultAccount,c=[];Y.map((e=>{c.push({...X[e],inputValue:Object(h.fb)(t[e]).times(X[e].precision)})}));const s=c.sort(((e,t)=>e.index-t.index)),n=f===le?N:f;return e.onSubmit&&e.onSubmit(),P?await be(s,a,n):d!==ne?await re(s,a):await ie(s,n)}catch(a){console.log(a)}})(c),disabled:R}),R&&Object(_.jsx)("div",{className:"error-content mt-12",children:Object(_.jsx)("div",{className:"error-tip",children:R})})]})}):Object(_.jsx)(U.a,{})]})]}),Object(_.jsx)(n.a,{...B.a.colRight,children:Object(_.jsx)(k,{className:W.isConnected?null:"window-for-tabs-pane"})})]})})},re=a(55),be=a(1077),je=a(1064);const de=e=>Object(_.jsx)("span",{children:ue[e].tabTitle}),ue={1:{title:r.a.get("banner.title_deposit"),content:r.a.get("banner.desc_deposit"),tabTitle:r.a.get("header.deposit")},2:{title:r.a.get("banner.title_withdraw"),content:r.a.get("banner.desc_withdraw"),tabTitle:r.a.get("header.withdraw")},3:{title:r.a.get("banner.title_1"),content:r.a.get("banner.desc_1"),tabTitle:r.a.get("header.swap")}},pe=()=>{let e=window.location.hash,[,t,a]=e.split("/");return t.includes("usdd_2pool")?t=r.a.get("buysell.2pool"):t.includes("usdd")&&(t="3pool"),e.indexOf("tab=swap")>-1?{title:t,tabKey:["3"]}:{title:t,tabKey:[{deposit:"1",withdraw:"2",swap:"3"}[a]||"1"]}},{tabChangeLog:ge,tabSubmitLog:Oe}=Object(be.a)({childPage:re.h.liquidity_2pool});t.default=()=>{const{title:e,tabKey:t}=pe(),[a,i]=Object(o.useState)(t);let d=null;const u=Object(l.d)((()=>b.a.twoKeyPool)),p=Object(l.d)((()=>b.a.network)),g=()=>{u.getSwapBalance(),u.getVirtualPrice(),u.getVolData(),u.getA()};Object(o.useEffect)((()=>(window.scrollTo(0,0),()=>{clearInterval(d)})),[]);const O=Object(o.useCallback)((e=>{let{value:t}=e;i(t),ge(t)}),[]),m=()=>{const e=window.localStorage.getItem("lang")||r.a.options.currentLocale,t=window.location.origin+window.location.pathname;window.location.href=t+"?lang=".concat(e,"#/sunCurve")},h=Object(o.useMemo)((()=>({shouldScroll:!0,navRightMoreShow:!0,navRightMoreClick:m})),[]),w=Object(o.useMemo)((()=>B.b.map((e=>({...e,handler:O})))),[O]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{mountedActions:async()=>{i("1"),u.getUserLp(),await u.getBalanceInfo(),d||(d=setInterval((async()=>{g(),u.getUserLp(),await u.getBalanceInfo()}),p.defaultIntervalSec))},instantActions:g,subNavProps:h}),Object(_.jsxs)("div",{className:"main-page-content",children:[Object(_.jsx)(je.a,{title:"".concat(e," ").concat(ue[a[0]].title),subTitle:ue[a[0]].content}),Object(_.jsx)("div",{className:"pool-tabs",children:Object(_.jsxs)(c.a,{activeKey:a[0],centered:!0,renderTabBar:()=>null,children:[Object(_.jsx)(c.a.TabPane,{tab:de("1"),children:Object(_.jsx)(W,{onSubmit:()=>Oe("1"),pageList:w,tabPaneKey:a})},"1"),Object(_.jsx)(c.a.TabPane,{tab:de("2"),children:Object(_.jsx)(ie,{onSubmit:()=>Oe("2"),pageList:w,tabPaneKey:a})},"2"),Object(_.jsx)(c.a.TabPane,{tab:de("3"),children:Object(_.jsxs)(s.a,{...B.a.row,children:[Object(_.jsxs)(n.a,{...B.a.colLeft,children:[Object(_.jsx)(V.a,{list:w,activeKey:a[0]}),p.isConnected?Object(_.jsx)("div",{className:" window-for-tabs-pane",children:Object(_.jsx)(y,{onSubmit:e=>Oe("3",{event_label:e,txid:e}),pageList:w,tabPaneKey:a})}):Object(_.jsx)(U.a,{})]}),Object(_.jsx)(n.a,{...B.a.colRight,children:Object(_.jsx)(k,{})})]})},"3")]})})]})]})}}}]);