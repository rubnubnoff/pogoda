(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,n){"use strict";n.r(t);n(76),n(126);var a=n(5),s=n.n(a),c=n(43),o=n.n(c),r=n(23),i=n.n(r),p=n(72),u=n(69),l=n(70),d=n(73),b=n(71),f=n(74),k=(n(152),n(171),n(172),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(s)))).state={events:[],token:""},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(e.setState(function(e){return{events:[].concat(Object(p.a)(e.events),[t.detail.type])}}),t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;case"VKWebAppAccessTokenReceived":e.setState({token:t});break;case"vk-connect":console.log(t);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{}),i.a.send("VKWebAppGetAuthToken",{app_id:7087022,scope:"messages"})}},{key:"render",value:function(){return s.a.createElement("div",null,JSON.stringify(this.state.token))}}]),t}(s.a.Component));i.a.send("VKWebAppInit",{}),o.a.render(s.a.createElement(k,null),document.getElementById("root"))},75:function(e,t,n){e.exports=n(177)}},[[75,1,2]]]);
//# sourceMappingURL=main.1e7a1518.chunk.js.map