(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[4],{229:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return b}));var r=n(3),s=n(231),c=(n(0),n(111)),o=n(230),i=n.n(o),a=n(2),u=function(t){t.input;var e=t.meta,n=e.touched,r=e.error,s=t.children,c=n&&r;return Object(a.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:" "),children:[Object(a.jsx)("div",{children:s}),c&&Object(a.jsx)("span",{children:r})]})},j=function(t){var e=t.input,n=(t.meta,t.child,Object(s.a)(t,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},l=function(t){var e=t.input,n=(t.meta,t.child,Object(s.a)(t,["input","meta","child"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))},b=function(t,e,n,s){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(c.a,Object(r.a)({component:t,validate:e,name:n,placeholder:s},o))," ",i]})}},230:function(t,e,n){t.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},233:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));var r=function(t){if(!t)return"Filed is required"},s=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}}},235:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(62);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,s=!1,c=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(a){s=!0,c=a}finally{try{r||null==i.return||i.return()}finally{if(s)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},236:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(3),s=n(33),c=n(34),o=n(36),i=n(35),a=n(0),u=n.n(a),j=n(22),l=n(7),b=n(2),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(o.a)(a,e);var n=Object(i.a)(a);function a(){return Object(s.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(t,Object(r.a)({},this.props)):Object(b.jsx)(l.a,{to:"/login"})}}]),a}(u.a.Component);return Object(j.b)(d)(e)}},241:function(t,e,n){t.exports={avatar:"ProfileInfo_avatar__3xuFq",about:"ProfileInfo_about__ogyhT",contact:"ProfileInfo_contact__1N3gp",error:"ProfileInfo_error__rRsoU",status:"ProfileInfo_status__2G3BZ"}},299:function(t,e,n){t.exports={form:"MyPosts_form__2b1nv"}},300:function(t,e,n){t.exports={item:"Post_item__ihtu9"}},310:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n(33),c=n(34),o=n(36),i=n(35),a=n(0),u=n.n(a),j=n(22),l=n(235),b=n(48),d=n(241),f=n.n(d),h=n(38),O=n(2),p=function(t){var e=Object(a.useState)(!1),n=Object(l.a)(e,2),r=n[0],s=n[1],c=Object(a.useState)(t.status),o=Object(l.a)(c,2),i=o[0],u=o[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(O.jsxs)("div",{children:[!r&&Object(O.jsxs)("div",{className:f.a.status,children:[Object(O.jsx)("b",{children:"Status :"}),Object(O.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"-----"})]}),r&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{onChange:function(t){u(t.target.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(i)},value:i})})]})},x=n(112),v=n(229),m=Object(x.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,n=t.profile,r=t.error;return Object(O.jsxs)("form",{onSubmit:e,children:[Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"save"})}),r&&Object(O.jsx)("div",{className:f.a.error,children:Object(O.jsx)("p",{children:r})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Full name :"})," ",Object(v.c)(v.a,[],"fullName","Full name")]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Looking for a job :"})," ",Object(v.c)(v.a,[],"lokingForAJob","",{type:"checkbox"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Professional skills :"})," ",Object(v.c)(v.b,[],"lookingForAJobDescription","My professional skills")]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"About me :"})," ",Object(v.c)(v.b,[],"aboutMe","About me")]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Contacts :"})," ",Object.keys(n.contacts).map((function(t){return Object(O.jsx)("div",{children:Object(O.jsxs)("b",{children:[t," : ",Object(v.c)(v.a,[],"contacts."+t,t)]})})}))]})]})})),g=function(t){var e=t.profile,n=t.isOwner,r=t.goToEditMode;return Object(O.jsxs)("div",{children:[n&&Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:r,children:"edit"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Full name :"})," ",e.fullName]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Looking for a job :"})," ",e.lookingForAJob?"no":"yes"]}),e.lookingForAJob&&Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Professional skills :"})," ",e.lookingForAJobDescription]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"About me :"})," ",e.aboutMe]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Contacts :"})," ",Object.keys(e.contacts).map((function(t){return Object(O.jsx)(P,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},P=function(t){var e=t.contactTitle,n=t.contactValue;return Object(O.jsxs)("div",{className:f.a.contact,children:[Object(O.jsxs)("b",{children:[e," :"]})," ",n]})},y=function(t){var e=t.profile,n=t.status,r=t.updateStatus,s=t.isOwner,c=t.savePhoto,o=t.saveProfile,i=Object(a.useState)(!1),u=Object(l.a)(i,2),j=u[0],d=u[1];if(!e)return Object(O.jsx)(b.a,{});return Object(O.jsxs)("div",{className:f.a.avatar,children:[Object(O.jsx)("img",{src:e.photos.large||h.a,alt:"Ava"}),s&&Object(O.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&c(t.target.files[0])}}),j?Object(O.jsx)(m,{initialValues:e,profile:e,onSubmit:function(t){o(t).then((function(){d(!1)}))}}):Object(O.jsx)(g,{goToEditMode:function(){d(!0)},profile:e,isOwner:s}),Object(O.jsx)(p,{status:n,updateStatus:r})]})},_=n(61),S=n(111),k=n(233),A=n(299),C=n.n(A),w=n(300),F=n.n(w),I=function(t){return Object(O.jsxs)("div",{className:F.a.item,children:[Object(O.jsx)("img",{src:h.a,alt:"avatar"}),t.message,Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"Like"})," ",t.likeCounts]})]})},N=Object(k.a)(10),T=Object(x.a)({form:"profileAddNewPostText"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(S.a,{component:v.b,name:"newPostText",validate:[k.b,N],placeholder:"Enter your message..."})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Send"})})]})})),M=function(t){var e=t.posts.map((function(t){return Object(O.jsx)(I,{message:t.message,likeCounts:t.likeCounts},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"My post"}),Object(O.jsx)("div",{className:C.a.form,children:Object(O.jsx)(T,{onSubmit:function(e){t.addPost(e.newPostText)}})}),e]})},E=Object(j.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(_.a)(e))}}}))(M),J=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(y,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(O.jsx)(E,{})]})},U=n(7),D=n(236),L=n(37),V=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)(J,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),n}(u.a.Component);e.default=Object(L.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.g,savePhoto:_.e,saveProfile:_.f}),U.f,D.a)(V)}}]);
//# sourceMappingURL=4.08800a8c.chunk.js.map