(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[7],{229:function(t,r,e){"use strict";e.d(r,"b",(function(){return j})),e.d(r,"a",(function(){return b})),e.d(r,"c",(function(){return l}));var c=e(3),n=e(231),a=(e(0),e(111)),i=e(230),o=e.n(i),s=e(2),u=function(t){t.input;var r=t.meta,e=r.touched,c=r.error,n=t.children,a=e&&c;return Object(s.jsxs)("div",{className:o.a.formControl+" "+(a?o.a.error:" "),children:[Object(s.jsx)("div",{children:n}),a&&Object(s.jsx)("span",{children:c})]})},j=function(t){var r=t.input,e=(t.meta,t.child,Object(n.a)(t,["input","meta","child"]));return Object(s.jsx)(u,Object(c.a)(Object(c.a)({},t),{},{children:Object(s.jsx)("textarea",Object(c.a)(Object(c.a)({},r),e))}))},b=function(t){var r=t.input,e=(t.meta,t.child,Object(n.a)(t,["input","meta","child"]));return Object(s.jsx)(u,Object(c.a)(Object(c.a)({},t),{},{children:Object(s.jsx)("input",Object(c.a)(Object(c.a)({},r),e))}))},l=function(t,r,e,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a,Object(c.a)({component:t,validate:r,name:e,placeholder:n},i))," ",o]})}},230:function(t,r,e){t.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},233:function(t,r,e){"use strict";e.d(r,"b",(function(){return c})),e.d(r,"a",(function(){return n}));var c=function(t){if(!t)return"Filed is required"},n=function(t){return function(r){if(r.length>t)return"Max length is ".concat(t," symbols")}}},309:function(t,r,e){"use strict";e.r(r);e(0);var c=e(22),n=e(112),a=e(233),i=e(229),o=e(25),s=e(7),u=e(230),j=e.n(u),b=e(2),l=Object(n.a)({form:"login"})((function(t){var r=t.handleSubmit,e=t.error,c=t.captchaUrl;return Object(b.jsxs)("form",{onSubmit:r,children:[Object(i.c)(i.a,[a.b],"email","Email"),Object(i.c)(i.a,[a.b],"password","Password",{type:"password"}),Object(i.c)(i.a,[],"rememberMe",null,{type:"checkbox"},"remember me"),c&&Object(b.jsx)("img",{src:c,alt:"captcha"}),c&&Object(i.c)(i.a,[a.b],"captcha","Symbols from image"),e&&Object(b.jsx)("div",{className:j.a.formSummaryError,children:Object(b.jsx)("p",{children:e})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})})]})}));r.default=Object(c.b)((function(t){return{captchaUrl:t.auth.captchaUrl,isAuth:t.auth.isAuth}}),{login:o.c})((function(t){return t.isAuth?Object(b.jsx)(s.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(l,{onSubmit:function(r){t.login(r.email,r.password,r.rememberMe,r.captcha)},captchaUrl:t.captchaUrl})]})}))}}]);
//# sourceMappingURL=7.c50c5874.chunk.js.map