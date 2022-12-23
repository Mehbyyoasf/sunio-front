(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[39],{1341:function(e,t,n){"use strict";var a=n(14),c=n(12),r=n(692),o=n(27),i=n.n(o),l=n(23),s=n(10),d=n(11),u=n(18),p=n(19),v=n(35),b=n(129),m=n(2),f=n(668),j=n.n(f),h=n(45),O=n(59),g=n(21),y=m.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.forceRender,o=e.className,l=e.style,s=e.children,d=e.isActive,u=e.role,p=m.useState(d||r),v=Object(g.a)(p,2),b=v[0],f=v[1];return m.useEffect((function(){(r||d)&&f(!0)}),[r,d]),b?m.createElement("div",{ref:t,className:i()("".concat(a,"-content"),(n={},Object(c.a)(n,"".concat(a,"-content-active"),d),Object(c.a)(n,"".concat(a,"-content-inactive"),!d),n),o),style:l,role:u},m.createElement("div",{className:"".concat(a,"-content-box")},s)):null}));y.displayName="PanelContent";var x=y,C=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],N=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"===typeof n&&n(a)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,c=t.prefixCls,r=t.collapsible;if(!n)return null;var o="function"===typeof a?a(e.props):m.createElement("i",{className:"arrow"});return o&&m.createElement("div",{className:"".concat(c,"-expand-icon"),onClick:"header"===r||"icon"===r?e.onItemClick:null},o)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,c=t.collapsible;return m.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===c?e.onItemClick:null},n)},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e){return!j()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,r=n.className,o=n.id,l=n.style,s=n.prefixCls,d=n.headerClass,u=n.children,p=n.isActive,v=n.destroyInactivePanel,b=n.accordion,f=n.forceRender,j=n.openMotion,g=n.extra,y=n.collapsible,N=Object(h.a)(n,C),k="disabled"===y,w="header"===y,I="icon"===y,P=i()((e={},Object(c.a)(e,"".concat(s,"-item"),!0),Object(c.a)(e,"".concat(s,"-item-active"),p),Object(c.a)(e,"".concat(s,"-item-disabled"),k),e),r),A={className:i()("".concat(s,"-header"),(t={},Object(c.a)(t,d,d),Object(c.a)(t,"".concat(s,"-header-collapsible-only"),w),Object(c.a)(t,"".concat(s,"-icon-collapsible-only"),I),t)),"aria-expanded":p,"aria-disabled":k,onKeyPress:this.handleKeyPress};w||I||(A.onClick=this.onItemClick,A.role=b?"tab":"button",A.tabIndex=k?-1:0);var E=null!==g&&void 0!==g&&"boolean"!==typeof g;return delete N.header,delete N.panelKey,delete N.onItemClick,delete N.showArrow,delete N.expandIcon,m.createElement("div",Object(a.a)({},N,{className:P,style:l,id:o}),m.createElement("div",A,this.renderIcon(),this.renderTitle(),E&&m.createElement("div",{className:"".concat(s,"-extra")},g)),m.createElement(O.b,Object(a.a)({visible:p,leavedClassName:"".concat(s,"-content-hidden")},j,{forceRender:f,removeOnLeave:v}),(function(e,t){var n=e.className,a=e.style;return m.createElement(x,{ref:t,prefixCls:s,className:n,style:a,isActive:p,forceRender:f,role:b?"tabpanel":null},u)})))}}]),n}(m.Component);N.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var k=N;function w(e){var t=e;if(!Array.isArray(t)){var n=Object(v.a)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var I=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=Object(l.a)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,c=a.props,r=c.prefixCls,o=c.openMotion,i=c.accordion,l=c.destroyInactivePanel,s=c.expandIcon,d=c.collapsible,u=e.key||String(t),p=e.props,v=p.header,b=p.headerClass,f=p.destroyInactivePanel,j=p.collapsible,h=null!==j&&void 0!==j?j:d,O={key:u,panelKey:u,header:v,headerClass:b,isActive:i?n[0]===u:n.indexOf(u)>-1,prefixCls:r,destroyInactivePanel:null!==f&&void 0!==f?f:l,openMotion:o,accordion:i,children:e.props.children,onItemClick:"disabled"===h?null:a.onClickItem,expandIcon:s,collapsible:h};return"string"===typeof e.type?e:(Object.keys(O).forEach((function(e){"undefined"===typeof O[e]&&delete O[e]})),m.cloneElement(e,O))},a.getItems=function(){var e=a.props.children;return Object(b.a)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var c=e.activeKey,r=e.defaultActiveKey;return"activeKey"in e&&(r=c),a.state={activeKey:w(r)},a}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!j()(this.props,e)||!j()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.style,o=t.accordion,l=i()((e={},Object(c.a)(e,n,!0),Object(c.a)(e,a,!!a),e));return m.createElement("div",{className:l,style:r,role:o?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=w(e.activeKey)),t}}]),n}(m.Component);I.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},I.Panel=k;var P=I,A=(I.Panel,n(128)),E=n(95),K=n(89),M=n(77),R=function(e){var t,n=m.useContext(E.b),o=n.getPrefixCls,l=n.direction,s=e.prefixCls,d=e.className,u=void 0===d?"":d,p=e.bordered,v=void 0===p||p,f=e.ghost,j=e.expandIconPosition,h=void 0===j?"start":j,O=o("collapse",s),g=m.useMemo((function(){return"left"===h?"start":"right"===h?"end":h}),[h]),y=i()("".concat(O,"-icon-position-").concat(g),(t={},Object(c.a)(t,"".concat(O,"-borderless"),!v),Object(c.a)(t,"".concat(O,"-rtl"),"rtl"===l),Object(c.a)(t,"".concat(O,"-ghost"),!!f),t),u),x=Object(a.a)(Object(a.a)({},K.a),{motionAppear:!1,leavedClassName:"".concat(O,"-content-hidden")});return m.createElement(P,Object(a.a)({openMotion:x},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):m.createElement(r.a,{rotate:t.isActive?90:void 0});return Object(M.a)(a,(function(){return{className:i()(a.props.className,"".concat(O,"-arrow"))}}))},prefixCls:O,className:y}),function(){var t=e.children;return Object(b.a)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var c=e.key||String(t),r=e.props,o=r.disabled,i=r.collapsible,l=Object(a.a)(Object(a.a)({},Object(A.a)(e.props,["disabled"])),{key:c,collapsible:null!==i&&void 0!==i?i:o?"disabled":void 0});return Object(M.a)(e,l)}return e}))}())};R.Panel=function(e){var t=m.useContext(E.b).getPrefixCls,n=e.prefixCls,r=e.className,o=void 0===r?"":r,l=e.showArrow,s=void 0===l||l,d=t("collapse",n),u=i()(Object(c.a)({},"".concat(d,"-no-arrow"),!s),o);return m.createElement(P.Panel,Object(a.a)({},e,{prefixCls:d,className:u}))};var S=R;t.a=S},1343:function(e,t,n){"use strict";var a=n(5),c=n(2),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},o=n(43),i=function(e,t){return c.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};i.displayName="CopyOutlined";t.a=c.forwardRef(i)},1627:function(e,t,n){},1628:function(e,t,n){},1671:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(21),r=n(2),o=n(27),i=n.n(o),l=n(649),s=(n(1627),n(57)),d=n(127),u=n(1),p=n(16),v=n.n(p),b=n.p+"static/media/qianbao.6253be4c.svg",m=n(9),f=Object(r.memo)((function(){var e=Object(s.d)((function(){return d.a.network})),t=function(){e.setData({loginModalVisible:!0,loginModalStep:1})};return Object(m.jsx)(s.a,{children:function(){return Object(m.jsxs)("div",{className:"s-login-wrap",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"s-login-img",src:b,alt:"login"})}),Object(m.jsx)("div",{className:i()({"s-login-middle":!0,"s-login-middle-no-login":!e.isConnected}),children:e.isConnected?Object(u.q)(e.defaultAccount,14,5):v.a.get("more_page.unconnectedWallet")}),Object(m.jsx)("div",{className:"s-login-right",children:e.isConnected?Object(m.jsx)("div",{className:"s-login-copy",onClick:function(){Object(u.p)({value:e.defaultAccount})}}):Object(m.jsx)("div",{className:"s-login-btn",onClick:t,children:v.a.get("header.connect_wallet")})})]})}})})),j=n(664),h=n.p+"static/media/view_arrow.09d5c99c.svg",O=n(645),g=n(710),y=(n(1628),n(26)),x=n(666),C=Object(r.memo)((function(e){var t=e.menu,n=e.onItemClick,a=Object(r.useCallback)((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:e.icon,alt:"icon",className:"more-page-nav-icon"}),Object(m.jsxs)("span",{className:"more-page-nav-text",children:[Object(m.jsx)("span",{children:e.text}),e.selectValue&&Object(m.jsx)("span",{className:"more-page-nav-desc",children:e.selectValue})]}),Object(m.jsx)("img",{src:h,alt:"arrow",className:"more-page-nav-arrow"})]})}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"more-page-menu",children:t.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j.a,{isCustom:e.isCustom,clsPrefix:"more-page",item:e,renderContent:a,handleClick:n},e.id)})}))})})}));t.default=Object(r.memo)((function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],u=Object(r.useCallback)((function(){o(!1)}),[]),p=O.i[0],v=Object(r.useCallback)((function(e){e.id===p.id&&o(!0)}),[]),b=Object(s.d)((function(){return d.a.network})),j=Object(r.useCallback)((function(e){!function(e){b.setData({lang:e}),window.localStorage.setItem("lang",e),window.location.search="?lang=".concat(e)}(e.value)}),[]),h=window.localStorage.getItem("lang"),N=Object(r.useMemo)((function(){var e;return[Object(a.a)(Object(a.a)({},p),{},{selectValue:null===(e=y.m[h])||void 0===e?void 0:e.name})]}),[h]),k=Object(r.useCallback)((function(e){Math.abs(e.diffY)>1&&o(!1)}),[]);return Object(x.a)(k),Object(m.jsxs)("div",{className:"more-page",children:[Object(m.jsx)(l.a,{routeName:"more_page"}),Object(m.jsxs)("div",{className:"more-page-content",children:[Object(m.jsx)(f,{}),Object(m.jsx)(C,{menu:O.h}),Object(m.jsx)(C,{menu:O.j}),Object(m.jsx)(C,{menu:N,onItemClick:v})]}),n&&Object(m.jsx)(g.a,{onClose:u,children:Object(m.jsx)("div",{className:"more-page-language",children:p.subRoutes.map((function(e){return Object(m.jsx)("div",{className:i()({"more-page-language-item":!0,"more-page-language-item-active":h===e.value}),onClick:function(){return j(e)},children:e.name},e.value)}))})})]})}))},668:function(e,t){e.exports=function(e,t,n,a){var c=n?n.call(a,e,t):void 0;if(void 0!==c)return!!c;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),l=0;l<r.length;l++){var s=r[l];if(!i(s))return!1;var d=e[s],u=t[s];if(!1===(c=n?n.call(a,d,u,s):void 0)||void 0===c&&d!==u)return!1}return!0}},692:function(e,t,n){"use strict";var a=n(5),c=n(2),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},o=n(43),i=function(e,t){return c.createElement(o.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};i.displayName="RightOutlined";t.a=c.forwardRef(i)}}]);