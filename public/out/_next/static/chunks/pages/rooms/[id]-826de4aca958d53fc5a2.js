(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{8434:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var o=r(6459),i=r(1679),t=r(8466),u=r(1163),s=r(7294),a=r(2794),c=r(811),f=r(5893);function d(n){(0,o.Z)(n);var e,r=(0,u.useRouter)().query.id,d=(0,s.useContext)(a.J),_=(0,i.Z)(),m=_.isLoading;_.user;r&&(e="/api/rooms/"+r);var l=(0,t.Z)(e),v=l.data,h=l.error;return(0,s.useEffect)((function(){return d.connect(),d.emit("join room",r),function(){d.emit("leave room",r)}}),[]),h?(0,f.jsx)("div",{children:"error TODO"}):!v||m?(0,f.jsx)(c.a_,{}):(0,f.jsx)("div",{children:(0,f.jsx)(c.Zn,{title:v.name,room:v,children:(0,f.jsx)(c.ai,{messages:v.messages})})})}},4271:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rooms/[id]",function(){return r(8434)}])}},function(n){n.O(0,[774,914,115,811,888,179],(function(){return e=4271,n(n.s=e);var e}));var e=n.O();_N_E=e}]);