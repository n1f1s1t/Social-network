(this["webpackJsonpreact-k-1"]=this["webpackJsonpreact-k-1"]||[]).push([[3],{295:function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));var n=a(33),s=a(34),r=a(37),o=a(35),u=a(38),i=a(0),c=a.n(i),l=a(28),p=a(14),m=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(t,this.props):c.a.createElement(l.a,{to:"/Login"})}}]),a}(c.a.Component);return Object(p.b)(m)(e)}},296:function(t,e,a){},297:function(t,e,a){t.exports={myPostsBlock:"MyPosts_myPostsBlock__33-90",posts:"MyPosts_posts__3SAoW"}},298:function(t,e,a){t.exports={item:"Post_item__Il_y1"}},299:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__izYgt"}},300:function(t,e,a){"use strict";a.r(e);var n=a(33),s=a(34),r=a(37),o=a(35),u=a(38),i=a(0),c=a.n(i),l=(a(296),a(297)),p=a.n(l),m=a(298),f=a.n(m),d=function(t){return c.a.createElement("div",{className:f.a.item},c.a.createElement("img",{src:"https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,t.like," like")))},b=a(125),h=a(126),E=a(73),j=a(63),v=Object(E.a)(10),g=Object(h.a)({form:"ProfileAddNewPostForm"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(b.a,{name:"newPostText",component:j.b,placeholder:"Post message",validate:[E.b,v]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add Post")))})),O=c.a.memo((function(t){var e=t.posts.map((function(t){return c.a.createElement(d,{message:t.message,like:t.like})}));c.a.createRef();return c.a.createElement("div",{className:p.a.myPostsBlock},c.a.createElement("h3",null,"My Post"),c.a.createElement(g,{onSubmit:function(e){t.addPost(e.newPostText)}}),c.a.createElement("div",{className:p.a.posts},e))})),P=a(299),k=a.n(P),B=a(62),D=a(127),S=function(t){var e=Object(i.useState)(!1),a=Object(D.a)(e,2),n=a[0],s=a[1],r=Object(i.useState)(t.status),o=Object(D.a)(r,2),u=o[0],l=o[1];Object(i.useEffect)((function(){l(t.status)}),[t.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"-----")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},value:u})))},y=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{src:"https://opt-1313496.ssl.1c-bitrix-cdn.ru/upload/medialibrary/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%91%D0%B5%D0%BB%D0%B0%D0%B2%D0%B8%D0%BD.jpg"})),c.a.createElement("div",{className:k.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large}),c.a.createElement(S,{status:a,updateStatus:n}))):c.a.createElement(B.a,null)},_=a(93),x=a(14),w=Object(x.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(_.a)(e))}}}))(O),A=function(t){return c.a.createElement("div",null,c.a.createElement(y,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(w,null))},I=a(28),N=a(295),T=a(7),C=function(t){function e(){return Object(n.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(A,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(c.a.Component),M=Object(N.a)(C);Object(I.f)(M),e.default=Object(T.d)(Object(x.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:_.d,getStatus:_.c,updateStatus:_.e}),I.f)(C)}}]);
//# sourceMappingURL=3.2405f207.chunk.js.map