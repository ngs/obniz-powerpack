(this["webpackJsonpobniz-powerpack"]=this["webpackJsonpobniz-powerpack"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n(0),s=n.n(o),i=n(10),a=n.n(i),r=n(102),l=n(101),u=n(19),d=n(95),h=n(100),f=n(103),j=n(104),b="deviceId",v="accessToken",m=function(e){var t=e.onSubmit,n=s.a.useState(localStorage.getItem(b)),o=Object(u.a)(n,2),i=o[0],a=o[1],r=s.a.useState(localStorage.getItem(v)),l=Object(u.a)(r,2),h=l[0],m=l[1],p=function(){i&&t({deviceId:i,accessToken:h})};return Object(c.jsxs)(d.a,{container:!0,spacing:2,direction:"column",component:"form",onSubmit:function(e){e.preventDefault(),p()},children:[Object(c.jsx)(d.a,{item:!0,lg:!0,children:Object(c.jsx)(f.a,{label:"Device ID",placeholder:"XXXX-XXXX",required:!0,fullWidth:!0,value:i||"",onChange:function(e){return a(e.target.value)}})}),Object(c.jsx)(d.a,{item:!0,lg:!0,children:Object(c.jsx)(f.a,{label:"Access Token",placeholder:"",fullWidth:!0,value:h||"",onChange:function(e){return m(e.target.value)}})}),Object(c.jsx)(d.a,{item:!0,lg:!0,children:Object(c.jsx)(j.a,{type:"submit",fullWidth:!0,color:"primary",variant:"contained",children:"Connect"})})]})},p=n(105),k=function(e){var t=e.onChange,n=e.onDisconnect,o=s.a.useState(0),i=Object(u.a)(o,2),a=i[0],r=i[1];return Object(c.jsxs)(d.a,{container:!0,spacing:2,direction:"column",children:[Object(c.jsx)(d.a,{item:!0,lg:!0,children:Object(c.jsx)(p.a,{value:a,max:1e3,onChangeCommitted:function(){return t(a)},onChange:function(e,t){return r(t)}})}),Object(c.jsx)(d.a,{item:!0,lg:!0,children:Object(c.jsx)(j.a,{onClick:n,children:"Disconnect"})})]})},O=n(45),g=n(46),x=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(O.a)(this,e),this.deviceId=void 0,this.accessToken=void 0,this.onOpen=void 0,this.onClose=void 0,this.socket=null,this.freq=20,this.pulse=0,this.deviceId=t,this.accessToken=n}return Object(g.a)(e,[{key:"disconnect",value:function(){var e;null===(e=this.socket)||void 0===e||e.close()}},{key:"connect",value:function(){var e=this;this.socket=new WebSocket("wss://obniz.com/".concat(this.path)),this.socket.onmessage=function(t){var n,c=JSON.parse(t.data)[0].ws.redirect;console.info(c),null===(n=e.socket)||void 0===n||n.close(),e.socket=new WebSocket("".concat(c,"/").concat(e.path)),e.socket.onopen=function(){e.onOpen&&e.onOpen(),e.setPwm()},e.socket.onclose=function(){e.onClose&&e.onClose(),e.socket=null},window.onunload=function(){var t;null===(t=e.socket)||void 0===t||t.close()}}}},{key:"send",value:function(){if(this.socket){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.socket.send(JSON.stringify(t))}}},{key:"setPwm",value:function(){this.send({pwm0:{io:0,freq:this.freq}}),this.updateDisplay()}},{key:"updateDisplay",value:function(){this.send({display:{clear:!0,text:"Freq: ".concat(this.freq,"\nPluse: ").concat(this.pulse)}})}},{key:"setPulse",value:function(e){this.pulse=e,this.send({pwm0:{pulse:e}}),this.updateDisplay()}},{key:"setFreq",value:function(e){this.freq=e,this.send({pwm0:{freq:e}}),this.updateDisplay()}},{key:"path",get:function(){return"obniz/".concat(this.deviceId,"/ws/1").concat(this.accessToken?"?access_token=".concat(this.accessToken):"")}}]),e}(),y=n(99),w=Object(y.a)((function(e){return{root:{flexGrow:1,height:"100%"}}})),S=function(){var e=w(),t=s.a.useState(null),n=Object(u.a)(t,2),o=n[0],i=n[1],a=s.a.useState(!1),r=Object(u.a)(a,2),l=r[0],f=r[1];return Object(c.jsx)(d.a,{className:e.root,direction:"row",alignItems:"center",justify:"center",container:!0,children:o?l?Object(c.jsx)(d.a,{item:!0,xs:11,sm:8,children:Object(c.jsx)(k,{onChange:function(e){return null===o||void 0===o?void 0:o.setPulse(e)},onDisconnect:function(){return o.disconnect()}})}):Object(c.jsx)(h.a,{}):Object(c.jsx)(d.a,{item:!0,xs:11,sm:8,children:Object(c.jsx)(m,{onSubmit:function(e){var t,n=e.accessToken,c=e.deviceId;(t=c)?localStorage.setItem(b,t):localStorage.removeItem(b),function(e){e?localStorage.setItem(v,e):localStorage.removeItem(v)}(n);var o=new x(c,n);o.onOpen=function(){f(!0)},o.onClose=function(){i(null),f(!1)},o.connect(),i(o)}})})})},I=n(47),C=n.n(I),q=n(48),D=Object(q.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:C.a.A400},background:{default:"#fff"}}});a.a.render(Object(c.jsxs)(l.a,{theme:D,children:[Object(c.jsx)(r.a,{}),Object(c.jsx)(S,{})]}),document.querySelector("#root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.8e08e18f.chunk.js.map