(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"NavBar_nav__1FWUI",item:"NavBar_item__2RAQQ",activeLink:"NavBar_activeLink__W7BJ4",avatar:"NavBar_avatar__2QNy-"}},142:function(e,t,n){},148:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(49),s=n.n(c),i=(n(142),n(33)),u=n(34),o=n(36),l=n(35),d=n(15),f=n(7),p=n(84),j=n.n(p),b=n(85),h=n.n(b),O=n(38),v=n(2),g=function(e){return Object(v.jsxs)("div",{className:h.a.avatar,children:[Object(v.jsx)("img",{src:O.a,alt:"avatar"}),e.name,Object(v.jsx)("img",{src:O.a,alt:"avatar"}),e.name,Object(v.jsx)("img",{src:O.a,alt:"avatar"}),e.name]})},m=function(){return Object(v.jsx)("div",{className:j.a.item,children:Object(v.jsx)(g,{})})},x=n(10),w=n.n(x),y=function(e){return Object(v.jsxs)("nav",{className:w.a.nav,children:[Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/profile",activeClassName:w.a.activeLink,children:"Profile"})}),Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/dialogs",activeClassName:w.a.activeLink,children:"Message"})}),Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/users",activeClassName:w.a.activeLink,children:"Users"})}),Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/music",activeClassName:w.a.activeLink,children:"Music"})}),Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/news",activeClassName:w.a.activeLink,children:"News"})}),Object(v.jsx)("div",{className:w.a.item,children:Object(v.jsx)(d.b,{to:"/settings",activeClassName:w.a.activeLink,children:"Settings"})}),Object(v.jsxs)("div",{className:w.a.item,children:[Object(v.jsx)(d.b,{to:"/friends",activeClassName:w.a.activeLink,children:"Friends"}),Object(v.jsx)(m,{})]})]})},_=n(86),C=n.n(_),S=function(){return Object(v.jsx)("footer",{className:C.a.footer,children:Object(v.jsx)("p",{children:"Friendly Chat \xa9 2021"})})},k=(n(148),n(3)),P=n(22),N=n(58),I=n.n(N),E=function(e){return Object(v.jsxs)("header",{className:I.a.header,children:[Object(v.jsx)("h1",{children:"FC"}),Object(v.jsx)("div",{className:I.a.loginBlock,children:e.isAuth?Object(v.jsxs)("div",{children:[e.login," - ",Object(v.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(v.jsx)(d.b,{to:"/login",children:"Login"})})]})},T=n(25),L=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)(E,Object(k.a)({},this.props))}}]),n}(a.a.Component),U=Object(P.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:T.d})(L),A="app/INITIALIZED_SUCCESS",F={initialized:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(k.a)(Object(k.a)({},e),{},{initialized:!0});default:return e}},G=n(48),R=function(e){return function(t){return Object(v.jsx)(a.a.Suspense,{fallback:Object(v.jsx)(G.a,{}),children:Object(v.jsx)(e,Object(k.a)({},t))})}},B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,312))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,310))})),H=a.a.lazy((function(){return n.e(6).then(n.bind(null,311))})),M=a.a.lazy((function(){return n.e(8).then(n.bind(null,306))})),W=a.a.lazy((function(){return n.e(9).then(n.bind(null,307))})),J=a.a.lazy((function(){return n.e(10).then(n.bind(null,308))})),Q=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,309))})),V=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(f.b,{path:"/",exact:!0,children:Object(v.jsx)(f.a,{to:"/profile"})}),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(U,{}),Object(v.jsx)(y,{}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(f.b,{path:"/profile/:userId?",render:R(D)}),Object(v.jsx)(f.b,{path:"/dialogs",render:R(B)}),Object(v.jsx)(f.b,{path:"/users",render:R(H)}),Object(v.jsx)(f.b,{path:"/music",render:R(M)}),Object(v.jsx)(f.b,{path:"/news",render:R(W)}),Object(v.jsx)(f.b,{path:"/settings",render:R(J)}),Object(v.jsx)(f.b,{path:"/login",render:R(Q)})]}),Object(v.jsx)(S,{})]})]})}):Object(v.jsx)(G.a,{})}}]),n}(a.a.Component),K=Object(P.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(T.b)());Promise.all([t]).then((function(){e({type:A})}))}}})(V),Y=n(37),Z=n(61),q=n(76),X={},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;return e},ee=n(83),te=n(89),ne=n(82),re=Object(Y.c)({profilePage:Z.b,dialogsPage:q.b,sidebar:$,usersPage:ee.a,auth:T.a,form:ne.a,app:z}),ae=Object(Y.e)(re,Object(Y.a)(te.a));s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(P.a,{store:ae,children:Object(v.jsx)(K,{})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n(5),a=n.n(r),c=n(9),s=n(3),i=n(27),u=n(8),o="auth/SET_USER_DATA",l="auth/GET_CAPTCHA_URL_SUCCESS",d={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},f=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},p=function(e){return{type:l,payload:{captchaUrl:e}}},j=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.email,i=r.login,t(f(c,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var o,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?s(j()):(10===o.data.resultCode&&s(O()),l=o.data.messages.length>0?o.data.messages[0]:"Some Error",s(Object(i.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(p(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:case l:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},38:function(e,t,n){"use strict";t.a=n.p+"static/media/user.2fda6558.png"},48:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.ff85086e.svg",a=n(88),c=n.n(a),s=n(2);t.a=function(e){return Object(s.jsx)("img",{className:c.a.color,src:r,alt:"preloader"})}},58:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(5),a=n.n(r),c=n(9),s=n(26),i=n(3),u=n(27),o=n(8),l="profile/ADD-POST",d="profile/SET_USER_PROFILE",f="profile/SET_STATUS",p="profile/DELETE_POST",j="profile/SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, how are you?",likeCounts:"15"},{id:2,message:"Good!",likeCounts:"9"},{id:3,message:"What are you doing?",likeCounts:"10"}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:f,status:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,o.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(v(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:4,message:t.newPostText,likeCounts:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case p:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case j:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26),a=n(3),c="dialogs/ADD-MESSAGE",s={messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"Good!"}],dialogs:[{id:1,name:"Illia"},{id:2,name:"Ivan"},{id:3,name:"Sasha"}]},i=function(e){return{type:c,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:4,message:t.newMessageBody};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(87),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1c5335d2-3d94-4faf-abf7-02bff099afe1"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t))},unfollow:function(e){return a.delete("follow/".concat(e))},follow:function(e){return a.post("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("/profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},83:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return C})),n.d(t,"f",(function(){return S}));var r=n(5),a=n.n(r),c=n(9),s=n(26),i=n(3),u=n(8),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="user/FOLLOW",d="user/UNFOLLOW",f="user/SET_USERS",p="user/SET_CURRENT_PAGE",j="user/SET_TOTAL_USERS_COUNT",b="user/TOGGLE_IS_FETCHING",h="user/TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:l,userId:e}},g=function(e){return{type:d,userId:e}},m=function(e){return{type:p,currentPage:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(m(e)),n.next=4,u.d.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((s=c.data.items,{type:f,users:s})),r((a=c.data.totalCount,{type:j,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.d.follow.bind(u.d),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.d.unfollow.bind(u.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case p:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},84:function(e,t,n){e.exports={item:"Friends_item__1dHUF"}},85:function(e,t,n){e.exports={avatar:"FriendsItem_avatar__2u_e_"}},86:function(e,t,n){e.exports={footer:"Footer_footer__1w0lV"}},88:function(e,t,n){e.exports={color:"Preloader_color__3wFOk"}}},[[228,2,3]]]);
//# sourceMappingURL=main.3d376d97.chunk.js.map