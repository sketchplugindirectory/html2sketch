(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47,43],{"0Owb":function(e,n,t){"use strict";function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,"a",(function(){return a}))},"6VBw":function(e,n,t){"use strict";var a=t("ODXe"),r=t("rePB"),o=t("Ff2n"),c=t("q1tI"),i=t.n(c),s=t("TSYQ"),l=t.n(s),u=t("VTBJ"),m=t("U8pU"),d=t("HXN9"),f=t("Kwbf"),p=t("Gu+u");function b(e,n){Object(f["a"])(e,"[@ant-design/icons] ".concat(n))}function y(e){return"object"===Object(m["a"])(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(m["a"])(e.icon)||"function"===typeof e.icon)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var a=e[t];switch(t){case"class":n.className=a,delete n.class;break;default:n[t]=a}return n}),{})}function g(e,n,t){return t?i.a.createElement(e.tag,Object(u["a"])(Object(u["a"])({key:n},v(e.attrs)),t),(e.children||[]).map((function(t,a){return g(t,"".concat(n,"-").concat(e.tag,"-").concat(a))}))):i.a.createElement(e.tag,Object(u["a"])({key:n},v(e.attrs)),(e.children||[]).map((function(t,a){return g(t,"".concat(n,"-").concat(e.tag,"-").concat(a))})))}function h(e){return Object(d["generate"])(e)[0]}function O(e){return e?Array.isArray(e)?e:[e]:[]}var T="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",k=!1,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;Object(c["useEffect"])((function(){k||(Object(p["insertCss"])(e,{prepend:!0}),k=!0)}),[])},C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function E(e){var n=e.primaryColor,t=e.secondaryColor;C.primaryColor=n,C.secondaryColor=t||h(n),C.calculated=!!t}function j(){return Object(u["a"])({},C)}var x=function(e){var n=e.icon,t=e.className,a=e.onClick,r=e.style,c=e.primaryColor,i=e.secondaryColor,s=Object(o["a"])(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),l=C;if(c&&(l={primaryColor:c,secondaryColor:i||h(c)}),w(),b(y(n),"icon should be icon definiton, but got ".concat(n)),!y(n))return null;var m=n;return m&&"function"===typeof m.icon&&(m=Object(u["a"])(Object(u["a"])({},m),{},{icon:m.icon(l.primaryColor,l.secondaryColor)})),g(m.icon,"svg-".concat(m.name),Object(u["a"])({className:t,onClick:a,style:r,"data-icon":m.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};x.displayName="IconReact",x.getTwoToneColors=j,x.setTwoToneColors=E;var S=x;function N(e){var n=O(e),t=Object(a["a"])(n,2),r=t[0],o=t[1];return S.setTwoToneColors({primaryColor:r,secondaryColor:o})}function z(){var e=S.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}N("#1890ff");var A=c["forwardRef"]((function(e,n){var t=e.className,i=e.icon,s=e.spin,u=e.rotate,m=e.tabIndex,d=e.onClick,f=e.twoToneColor,p=Object(o["a"])(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),b=l()("anticon",Object(r["a"])({},"anticon-".concat(i.name),Boolean(i.name)),t),y=l()({"anticon-spin":!!s||"loading"===i.name}),v=m;void 0===v&&d&&(v=-1);var g=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,h=O(f),T=Object(a["a"])(h,2),k=T[0],w=T[1];return c["createElement"]("span",Object.assign({role:"img","aria-label":i.name},p,{ref:n,tabIndex:v,onClick:d,className:b}),c["createElement"](S,{className:y,icon:i,primaryColor:k,secondaryColor:w,style:g}))}));A.displayName="AntdIcon",A.getTwoToneColor=z,A.setTwoToneColor=N;n["a"]=A},"9PZC":function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),r=t("q1tI"),o=t.n(r),c=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),i=t.n(c),s=o.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("xgFf")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)}));n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("p",null,"\u89e3\u6790 Tabs")),o.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport { useElements, TestLayout } from '@docs-utils';\nimport { Tabs } from 'antd';\nimport { AppleOutlined, AndroidOutlined } from '@ant-design/icons';\n\nconst { TabPane } = Tabs;\n\n/**\n *\n */\nexport default () => {\n  const { elements, ref } = useElements();\n\n  return (\n    <TestLayout elements={elements}>\n      <div ref={ref}>\n        <Tabs defaultActiveKey=\"2\">\n          <TabPane\n            tab={\n              <span>\n                <AppleOutlined />\n                Tab 1\n              </span>\n            }\n            key=\"1\"\n          >\n            Tab 1\n          </TabPane>\n          <TabPane\n            tab={\n              <span>\n                <AndroidOutlined />\n                Tab 2\n              </span>\n            }\n            key=\"2\"\n          >\n            Tab 2\n          </TabPane>\n        </Tabs>\n      </div>\n    </TestLayout>\n  );\n};\n",jsx:"import React from 'react';\nimport { useElements, TestLayout } from '@docs-utils';\nimport { Tabs } from 'antd';\nimport { AppleOutlined, AndroidOutlined } from '@ant-design/icons';\nconst { TabPane } = Tabs;\n/**\n *\n */\n\nexport default () => {\n  const { elements, ref } = useElements();\n  return (\n    <TestLayout elements={elements}>\n      <div ref={ref}>\n        <Tabs defaultActiveKey=\"2\">\n          <TabPane\n            tab={\n              <span>\n                <AppleOutlined />\n                Tab 1\n              </span>\n            }\n            key=\"1\"\n          >\n            Tab 1\n          </TabPane>\n          <TabPane\n            tab={\n              <span>\n                <AndroidOutlined />\n                Tab 2\n              </span>\n            }\n            key=\"2\"\n          >\n            Tab 2\n          </TabPane>\n        </Tabs>\n      </div>\n    </TestLayout>\n  );\n};\n"}},{path:"/_demos/tabs",CSSInDependencies:["antd/dist/antd.css"],dependencies:{antd:"4.7.2","@ant-design/icons":"4.2.2"},files:{}}),o.a.createElement(s,null)))}},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},iodu:function(e,n,t){"use strict";t.d(n,"a",(function(){return C})),t.d(n,"b",(function(){return E}));t("EpIQ");var a=t("bx4M"),r=(t("Jmwx"),t("BMrR")),o=(t("Y2jk"),t("zeV3")),c=(t("rO+z"),t("kPKH")),i=(t("L/Qf"),t("2/Rp")),s=(t("qNb/"),t("PArb")),l=t("tJVT"),u=t("q1tI"),m=t.n(u),d=t("ovOe"),f=t.n(d),p=t("WmNS"),b=t.n(p),y=(t("8/o9"),t("tsqr")),v=t("9og8"),g=t("+QRC"),h=t.n(g),O=t("/7QA");"undefined"!==typeof window&&(window.DUMI_HTML2SKETCH={nodeToSketchSymbol:O["nodeToSketchSymbol"],nodeToGroup:O["nodeToGroup"]});var T=()=>{var e=Object(u["useState"])(),n=Object(l["a"])(e,2),t=n[0],a=n[1],r=function(){var e=Object(v["a"])(b.a.mark((function e(n,t){var r,o,c,i,s;return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,console.groupCollapsed("[html2sketch]\u5f00\u59cb\u8f6c\u6362..."),!(n instanceof Array)){e.next=17;break}o=[],c=0;case 5:if(!(c<n.length)){e.next=14;break}return i=n[c],e.next=9,t(i);case 9:s=e.sent,o.push(s);case 11:c+=1,e.next=5;break;case 14:r=o,e.next=20;break;case 17:return e.next=19,t(n);case 19:r=e.sent;case 20:return console.groupEnd(),console.log("\u89e3\u6790\u7ed3\u679c:",r),h()(JSON.stringify(r)),a(r),e.next=26,y["b"].success("\u8f6c\u6362\u6210\u529f\ud83c\udf89 \u5df2\u590d\u5236\u5230\u526a\u5207\u677f");case 26:return e.abrupt("return",r);case 29:return e.prev=29,e.t0=e["catch"](0),e.next=33,y["b"].error("\u89e3\u6790\u5931\u8d25,\u8bf7\u68c0\u67e5 Console \u8f93\u51fa \ud83d\ude36");case 33:console.groupEnd(),console.groupEnd(),console.error("\u62a5\u9519\u5982\u4e0b:"),console.error(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(n,t){return e.apply(this,arguments)}}();return{sketchJSON:t,generateSymbol:function(){var e=Object(v["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r(n,function(){var e=Object(v["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["nodeToSketchSymbol"])(n);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}(),generateGroup:function(){var e=Object(v["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r(n,function(){var e=Object(v["a"])(b.a.mark((function e(n){return b.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["nodeToGroup"])(n);case 2:return e.abrupt("return",e.sent.toSketchJSON());case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()}},k=T,w=e=>{var n=e.elements,t=e.children,d=e.buttons,p=k(),b=p.sketchJSON,y=p.generateGroup,v=p.generateSymbol,g=Object(u["useState"])(!1),h=Object(l["a"])(g,2),O=h[0],T=h[1];return m.a.createElement("div",null,t,m.a.createElement(s["a"],{dashed:!0}),m.a.createElement(r["a"],{style:{zIndex:99999}},m.a.createElement(c["a"],{span:24},m.a.createElement(r["a"],{justify:"space-between"},m.a.createElement(c["a"],null,m.a.createElement(i["a"],{disabled:!b,onClick:()=>{T(!O)}},O?"\u9690\u85cf":"\u663e\u793a"," JSON")),m.a.createElement(c["a"],null,m.a.createElement(o["b"],null,null===d||void 0===d?void 0:d.map((e=>m.a.createElement(i["a"],{key:e.name,onClick:e.onClick},e.name))),m.a.createElement(i["a"],{onClick:()=>{y(n)}},"\u8f6c\u6362\u4e3a Group"),m.a.createElement(i["a"],{type:"primary",onClick:()=>{v(n)}},"\u8f6c\u6362\u4e3a Symbol"))))),O?m.a.createElement(c["a"],{span:24},m.a.createElement(a["a"],null,m.a.createElement(f.a,{name:"Sketch JSON",src:b||{}}))):null))},C=w,E=()=>{var e=Object(u["useRef"])(null),n=Object(u["useState"])([]),t=Object(l["a"])(n,2),a=t[0],r=t[1];return Object(u["useEffect"])((()=>{0===a.length&&e.current&&r(e.current)})),{ref:e,elements:a,setElements:r}}},xgFf:function(e,n,t){"use strict";t.r(n);t("AUBz");var a=t("ZTPi"),r=t("q1tI"),o=t.n(r),c=t("iodu"),i=t("z3K3"),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M448.3 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32-13.4 32-31.9.1-18.4-13.4-31.9-32-31.9zm393.9 96.4c-13.8-13.8-32.7-21.5-53.2-21.5-3.9 0-7.4.4-10.7 1v-1h-3.6c-5.5-30.6-18.6-60.5-38.1-87.4-18.7-25.7-43-47.9-70.8-64.9l25.1-35.8v-3.3c0-.8.4-2.3.7-3.8.6-2.4 1.4-5.5 1.4-8.9 0-18.5-13.5-31.9-32-31.9-9.8 0-19.5 5.7-25.9 15.4l-29.3 42.1c-30-9.8-62.4-15-93.8-15-31.3 0-63.7 5.2-93.8 15L389 79.4c-6.6-9.6-16.1-15.4-26-15.4-18.6 0-32 13.4-32 31.9 0 6.2 2.5 12.8 6.7 17.4l22.6 32.3c-28.7 17-53.5 39.4-72.2 65.1-19.4 26.9-32 56.8-36.7 87.4h-5.5v1c-3.2-.6-6.7-1-10.7-1-20.3 0-39.2 7.5-53.1 21.3-13.8 13.8-21.5 32.6-21.5 53v235c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 3.9 0 7.4-.4 10.7-1v93.5c0 29.2 23.9 53.1 53.2 53.1H331v58.3c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-58.2H544v58.1c0 20.3 7.5 39.1 21.4 52.9 13.8 13.8 32.8 21.5 53.2 21.5 20.4 0 39.2-7.5 53.1-21.6 13.8-13.8 21.5-32.6 21.5-53v-58.2h31.9c29.3 0 53.2-23.8 53.2-53.1v-91.4c3.2.6 6.7 1 10.7 1 20.3 0 39.2-7.5 53.1-21.3 13.8-13.8 21.5-32.6 21.5-53v-235c-.1-20.3-7.6-39-21.4-52.9zM246 609.6c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zm131.1-396.8c37.5-27.3 85.3-42.3 135-42.3s97.5 15.1 135 42.5c32.4 23.7 54.2 54.2 62.7 87.5H314.4c8.5-33.4 30.5-64 62.7-87.7zm39.3 674.7c-.6 5.6-4.4 8.7-10.5 8.7-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1zm202.3 8.7c-6.8 0-10.7-3.8-10.7-10.6v-58.2h21.2v60.1c-.6 5.6-4.3 8.7-10.5 8.7zm95.8-132.6H309.9V364h404.6v399.6zm85.2-154c0 6.8-3.9 10.6-10.7 10.6-6.8 0-10.7-3.8-10.7-10.6V374.5c0-6.8 3.9-10.6 10.7-10.6 6.8 0 10.7 3.8 10.7 10.6v235.1zM576.1 225.2c-18.6 0-32 13.4-32 31.9s13.5 31.9 32 31.9c18.6 0 32.1-13.4 32.1-32-.1-18.6-13.4-31.8-32.1-31.8z"}}]},name:"android",theme:"outlined"},l=s,u=t("6VBw"),m=function(e,n){return r["createElement"](u["a"],Object.assign({},e,{ref:n,icon:l}))};m.displayName="AndroidOutlined";var d=r["forwardRef"](m),f=a["a"].TabPane;n["default"]=()=>{var e=Object(c["b"])(),n=e.elements,t=e.ref;return o.a.createElement(c["a"],{elements:n},o.a.createElement("div",{ref:t},o.a.createElement(a["a"],{defaultActiveKey:"2"},o.a.createElement(f,{tab:o.a.createElement("span",null,o.a.createElement(i["a"],null),"Tab 1"),key:"1"},"Tab 1"),o.a.createElement(f,{tab:o.a.createElement("span",null,o.a.createElement(d,null),"Tab 2"),key:"2"},"Tab 2"))))}},z3K3:function(e,n,t){"use strict";var a=t("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-10.6 267c-14.3 19.9-28.7 35.6-41.9 45.7-10.5 8-18.6 11.4-24 11.6-9-.1-17.7-2.3-34.7-8.8-1.2-.5-2.5-1-4.2-1.6l-4.4-1.7c-17.4-6.7-27.8-10.3-41.1-13.8-18.6-4.8-37.1-7.4-56.9-7.4-20.2 0-39.2 2.5-58.1 7.2-13.9 3.5-25.6 7.4-42.7 13.8-.7.3-8.1 3.1-10.2 3.9-3.5 1.3-6.2 2.3-8.7 3.2-10.4 3.6-17 5.1-22.9 5.2-.7 0-1.3-.1-1.8-.2-1.1-.2-2.5-.6-4.1-1.3-4.5-1.8-9.9-5.1-16-9.8-14-10.9-29.4-28-45.1-49.9-27.5-38.6-53.5-89.8-66-125.7-15.4-44.8-23-87.7-23-128.6 0-60.2 17.8-106 48.4-137.1 26.3-26.6 61.7-41.5 97.8-42.3 5.9.1 14.5 1.5 25.4 4.5 8.6 2.3 18 5.4 30.7 9.9 3.8 1.4 16.9 6.1 18.5 6.7 7.7 2.8 13.5 4.8 19.2 6.6 18.2 5.8 32.3 9 47.6 9 15.5 0 28.8-3.3 47.7-9.8 7.1-2.4 32.9-12 37.5-13.6 25.6-9.1 44.5-14 60.8-15.2 4.8-.4 9.1-.4 13.2-.1 22.7 1.8 42.1 6.3 58.6 13.8-37.6 43.4-57 96.5-56.9 158.4-.3 14.7.9 31.7 5.1 51.8 6.4 30.5 18.6 60.7 37.9 89 14.7 21.5 32.9 40.9 54.7 57.8-11.5 23.7-25.6 48.2-40.4 68.8zm-94.5-572c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"}}]},name:"apple",theme:"outlined"},o=r,c=t("6VBw"),i=function(e,n){return a["createElement"](c["a"],Object.assign({},e,{ref:n,icon:o}))};i.displayName="AppleOutlined";n["a"]=a["forwardRef"](i)}}]);