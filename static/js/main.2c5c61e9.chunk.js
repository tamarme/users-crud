(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,n){},242:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(24),a=n.n(s),i=n(38),r=n(11),o=Object(c.createContext)(),u=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],u=Object(c.useState)(0),l=Object(i.a)(u,2),j=l[0],d=l[1],O=Object(c.useState)(!1),f=Object(i.a)(O,2),b=f[0],h=f[1];return Object(r.jsx)(o.Provider,{value:{response:s,setresponse:a,userid:j,setuserid:d,isModalOpen:b,setIsModalOpen:h},children:e.children})},l=(n(151),n(73)),j=n(244),d=n(45),O=n.n(d),f=function(e){var t="view/".concat(e);return new Promise((function(e,n){O.a.get(t).then((function(t){e(t)})).catch((function(e){n(e)}))}))},b=[{title:"User N",dataIndex:"id"},{title:"Firstname",dataIndex:"Firstname"},{title:"Lastname",dataIndex:"Lastname"}],h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(o),u=a.response,d=a.setuserid;return Object(c.useEffect)((function(){new Promise((function(e,t){O.a.get("/").then((function(t){e(t)})).catch((function(e){t(e)}))})).then((function(e){s(e.data.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{key:e.id})})))})).catch((function(e){console.log(e)}))}),[u]),Object(r.jsx)(j.a,{columns:b,dataSource:n,size:"small",rowSelection:{type:"radio",onChange:function(e){d(e)}}})},m=n(31),x=n(247),p=function(e){var t=Object(c.useContext)(o),n=t.isModalOpen,s=t.setIsModalOpen;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x.a,{header:!1,visible:n,onCancel:function(){s(!1)},footer:!1,children:e.children})})},C=n(245),I=n(246),g=function(){var e=Object(c.useState)({firstname:null,lastname:null}),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(o),u=a.userid,j=a.setresponse,d=a.setIsModalOpen,b=Object(c.useRef)(null);return Object(c.useEffect)((function(){u>0&&f(u).then((function(e){var t={id:e.data.id,firstname:e.data.Firstname,lastname:e.data.Lastname};s(t)})).catch((function(e){console.log(e)}))}),[u]),Object(c.useEffect)((function(){b.current&&(0===u?b.current.setFieldsValue({firstname:"",lastname:""}):b.current.setFieldsValue(n))}),[n,u]),Object(r.jsxs)(C.a,{ref:b,name:"basic",style:{display:"flex",flexDirection:"column"},initialValues:{firstname:n.firstname,lastname:n.lastname},onFinish:function(e){u>0?function(e){return new Promise((function(t,n){O.a.put("update",e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}(Object(l.a)(Object(l.a)({},e),{},{id:u})).then((function(e){j(e),d(!1)})).catch((function(e){console.log(e)})):function(e){return console.log(e),new Promise((function(t,n){O.a.post("add",e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}(e).then((function(e){j(e),d(!1)})).catch((function(e){console.log(e)}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(r.jsx)(C.a.Item,{name:"firstname",rules:[{required:!0,message:"Please input your firstname!"}],children:Object(r.jsx)(I.a,{type:"text",placeholder:"Firstname"})}),Object(r.jsx)(C.a.Item,{name:"lastname",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(r.jsx)(I.a,{type:"text",placeholder:"Lastname"})}),Object(r.jsx)(C.a.Item,{children:Object(r.jsx)(m.a,{type:"primary",htmlType:"submit",children:"SAVE"})})]})},E=function(){var e=Object(c.useState)({id:0,Firstname:"",Lastname:""}),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(o).userid;return Object(c.useEffect)((function(){f(a).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[a]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"User N:"})," ",n.id]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Firstname:"})," ",n.Firstname]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Lastname:"})," ",n.Lastname]})]})},v=function(){var e=Object(c.useContext)(o),t=e.userid,n=e.setuserid,s=e.setIsModalOpen,a=e.setresponse;return Object(r.jsxs)("div",{className:"delete-form",children:[Object(r.jsx)("p",{children:"Do you really want to delete selected user?"}),Object(r.jsxs)("div",{className:"delete-footer-buttons",children:[Object(r.jsx)(m.a,{type:"primary",onClick:function(){(function(e){var t="delete/".concat(e);return new Promise((function(e,n){O.a.delete(t).then((function(t){e(t)})).catch((function(e){n(e)}))}))})(t).then((function(e){a(e)})).catch((function(e){console.log(e)})),s(!1),n(0)},children:"Yes"}),Object(r.jsx)(m.a,{onClick:function(){return s(!1)},children:"No"})]})]})},y=function(){return Object(r.jsx)("p",{children:"Please, Select user!"})},F=function(){var e=Object(c.useState)("CREATE"),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(o),u=a.userid,l=a.setuserid,j=a.setIsModalOpen;return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(p,{children:function(e){return"CREATE"===e||"UPDATE"===e?Object(r.jsx)(g,{}):"READ"===e?Object(r.jsx)(E,{}):"DELETE"===e?Object(r.jsx)(v,{}):"NOTIFICATION"===e?Object(r.jsx)(y,{}):void 0}(n)}),Object(r.jsx)(m.a,{type:"primary",onClick:function(){j(!0),l(0),s("CREATE")},children:"Create"}),Object(r.jsx)(m.a,{onClick:function(){j(!0),s(u>0?"READ":"NOTIFICATION")},children:"Read"}),Object(r.jsx)(m.a,{onClick:function(){j(!0),s(u>0?"UPDATE":"NOTIFICATION")},children:"Update"}),Object(r.jsx)(m.a,{onClick:function(){j(!0),s(u>0?"DELETE":"NOTIFICATION")},danger:!0,children:"Delete"})]})},T=function(){return Object(r.jsxs)(u,{children:[Object(r.jsx)(F,{}),Object(r.jsx)(h,{})]})};O.a.defaults.baseURL="https://morning-ridge-50892.herokuapp.com/",O.a.defaults.headers.post["Content-Type"]="application/json",O.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",a.a.render(Object(r.jsx)(T,{}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.2c5c61e9.chunk.js.map