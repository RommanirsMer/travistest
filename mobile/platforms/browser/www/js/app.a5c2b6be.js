(function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],m=0,d=[];m<i.length;m++)a=i[m],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b88":function(e,t,n){e.exports=n.p+"media/time_start_sound.13173728.mp3"},"245e":function(e,t,n){},2552:function(e,t,n){e.exports=n.p+"media/time_end_sound.7b6bbefe.mp3"},"42a0":function(e,t,n){},4708:function(e,t,n){"use strict";n("4e30")},"4e30":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=Object(r["createElementVNode"])("h1",null,"Time manager",-1),c={key:0,class:"citation"},a={key:1,class:"citation"},i=Object(r["createElementVNode"])("h2",{class:"h-title"},"Working time",-1),l=Object(r["createElementVNode"])("h2",{class:"h-title"},"Data Vizualisation",-1);function s(e,t,n,s,u,m){var d=Object(r["resolveComponent"])("User"),p=Object(r["resolveComponent"])("WorkingTime"),b=Object(r["resolveComponent"])("ChartManager"),f=Object(r["resolveComponent"])("Login"),O=Object(r["resolveComponent"])("Register");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[m.loggedIn?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[o,m.itsFriday?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h4",c,"thanks god it's friday")):Object(r["createCommentVNode"])("",!0),m.itsMonday?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h4",a,"small monday, big week")):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(d),i,(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(u.users,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"array-workingtime",key:e.id},[Object(r["createVNode"])(p,{user:e},null,8,["user"])])})),128)),l,Object(r["createVNode"])(b)],64)):Object(r["createCommentVNode"])("",!0),m.loggedIn?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createVNode"])(f),Object(r["createVNode"])(O)],64))])}var u={style:{width:"90vw",margin:"0 auto"}},m={class:"card"},d={class:"container"},p=Object(r["createElementVNode"])("label",{for:"chart-select"},"Choose a chart :",-1),b=Object(r["createElementVNode"])("option",{value:""},"--Please choose an option--",-1),f=Object(r["createElementVNode"])("option",{value:"template_bar_chart"},"Bar Chart",-1),O=Object(r["createElementVNode"])("option",{value:"template_doughnut_chart"},"Doughnut Chart",-1),h=Object(r["createElementVNode"])("option",{value:"template_line_chart"},"Line Chart",-1),j=[b,f,O,h];function g(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("DoughnutChart"),l=Object(r["resolveComponent"])("BarChart"),s=Object(r["resolveComponent"])("LineChart");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u,[Object(r["createElementVNode"])("div",m,[Object(r["createElementVNode"])("div",d,[p,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{class:"choice-chart",name:"charts",id:"chart-select","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.current_template=t})},j,512),[[r["vModelSelect"],e.current_template]]),"template_doughnut_chart"===e.current_template?(Object(r["openBlock"])(),Object(r["createBlock"])(i,{key:0,chartData:e.doughnutData},null,8,["chartData"])):Object(r["createCommentVNode"])("",!0),"template_bar_chart"===e.current_template?(Object(r["openBlock"])(),Object(r["createBlock"])(l,{key:1,chartData:e.barData},null,8,["chartData"])):Object(r["createCommentVNode"])("",!0),"template_line_chart"===e.current_template?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:2,chartData:e.lineData},null,8,["chartData"])):Object(r["createCommentVNode"])("",!0)])])])}var v=n("2909"),k=n("b48c"),E=n("9b4a");E["Chart"].register.apply(E["Chart"],Object(v["a"])(E["registerables"]));var V=Object(r["defineComponent"])({name:"ChartManager",components:{DoughnutChart:k["DoughnutChart"],BarChart:k["BarChart"],LineChart:k["LineChart"]},data:function(){return{current_template:"template_doughnut_chart"}},setup:function(){var e={labels:["Paris","Nîmes","Toulon","Perpignan","Autre"],datasets:[{data:[30,40,60,70,5],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED"]}]},t={labels:["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet"],datasets:[{data:[30,40,60,70,5,10,42],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED"]}],options:{scales:{y:{beginAtZero:!0}}}},n={labels:["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet"],datasets:[{label:"Workload",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]};return{doughnutData:e,barData:t,lineData:n}},methods:{getFormattedDoughnutData:function(){}}}),w=(n("74da"),n("6b0d")),N=n.n(w);const y=N()(V,[["render",g]]);var T=y,C={style:{width:"90vw",margin:"0 auto"}},B={class:"card"},_={class:"container"},D=Object(r["createElementVNode"])("h2",null,"User",-1),S={key:0},M={key:1},F=Object(r["createElementVNode"])("hr",{style:{"margin-top":"5vh","margin-bottom":"5vh"}},null,-1),U=Object(r["createElementVNode"])("cite",{style:{"margin-right":"5vh"}},"Not in this list above?",-1),x={key:0},A={key:1},I=Object(r["createElementVNode"])("label",{for:"username"},"Username",-1),W=Object(r["createElementVNode"])("label",{for:"email"},"Email",-1),P=Object(r["createElementVNode"])("label",{for:"password"},"Password",-1),L={action:"",method:"post"},$=Object(r["createElementVNode"])("label",{for:"username"},"Username",-1),R=["disabled"];function q(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("UserChip");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",C,[Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("div",_,["template_index"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[D,c.users?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",S,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.users,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("span",{key:e.id,style:{"margin-left":"0.25rem"}},[Object(r["createVNode"])(i,{user:e,withOption:!0,onChangeCurrentTemplate:t[0]||(t[0]=function(e){return a.goToTemplate(e)})},null,8,["user"])])})),128))])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",M," No user ")),F,U,Object(r["createElementVNode"])("button",{class:"info",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return a.goToTemplate({template:"template_create",user:null})}),["prevent"]))},"Add me!")],64)):Object(r["createCommentVNode"])("",!0),"template_create"===c.current_template||"template_update"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},["template_create"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h1",x,"Add User")):Object(r["createCommentVNode"])("",!0),"template_update"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h1",A,"Update User "+Object(r["toDisplayString"])(c.selected_user.username),1)):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("form",null,[Object(r["createElementVNode"])("div",null,[I,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.username=e}),required:""},null,512),[[r["vModelText"],c.form.username]])]),Object(r["createElementVNode"])("div",null,[W,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"email",id:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.email=e}),required:""},null,512),[[r["vModelText"],c.form.email]])]),Object(r["createElementVNode"])("div",null,[P,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.form.password=e}),required:""},null,512),[[r["vModelText"],c.form.password]])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{onClick:t[5]||(t[5]=Object(r["withModifiers"])((function(e){return a.goToTemplate({template:"template_index",user:null})}),["prevent"]))},"Back"),"template_create"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"success",onClick:t[6]||(t[6]=Object(r["withModifiers"])((function(e){return a.handleRegister()}),["prevent"]))},"Done")):Object(r["createCommentVNode"])("",!0),"template_update"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:1,class:"success",onClick:t[7]||(t[7]=Object(r["withModifiers"])((function(e){return a.updateUser(c.selected_user.id)}),["prevent"]))},"Done")):Object(r["createCommentVNode"])("",!0)])])],64)):Object(r["createCommentVNode"])("",!0),"template_delete"===c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:2},[Object(r["createElementVNode"])("h1",null,"Delete User "+Object(r["toDisplayString"])(c.selected_user.username),1),Object(r["createElementVNode"])("p",null,"Please retype the username "+Object(r["toDisplayString"])(c.selected_user.username)+" of user for confirm deletion",1),Object(r["createElementVNode"])("form",L,[Object(r["createElementVNode"])("div",null,[$,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.form.username=e}),required:""},null,512),[[r["vModelText"],c.form.username]])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{onClick:t[9]||(t[9]=Object(r["withModifiers"])((function(e){return a.goToTemplate({template:"template_index",user:null})}),["prevent"]))},"Back"),Object(r["createElementVNode"])("button",{class:"danger",disabled:""==!!c.form.username||c.form.username!=c.selected_user.username,onClick:t[10]||(t[10]=Object(r["withModifiers"])((function(e){return a.deleteUser(c.selected_user.id)}),["prevent"]))},"Delete",8,R)])])],64)):Object(r["createCommentVNode"])("",!0)])])])}var J=function(e){return Object(r["pushScopeId"])("data-v-0d94403e"),e=e(),Object(r["popScopeId"])(),e},z={class:"chip"},H={class:"chip-content"},Z={key:0,class:"dropdown"},G=J((function(){return Object(r["createElementVNode"])("a",{class:"btn"},[Object(r["createElementVNode"])("div",{class:"chip-close"},[Object(r["createElementVNode"])("svg",{class:"chip-svg rotating",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},[Object(r["createElementVNode"])("g",null,[Object(r["createElementVNode"])("path",{d:"M0,0h24v24H0V0z",fill:"none"}),Object(r["createElementVNode"])("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])])],-1)})),K={class:"dropdown-content"};function Q(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("Avatar");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",z,[Object(r["createVNode"])(i,{username:n.user.username},null,8,["username"]),Object(r["createElementVNode"])("div",H,Object(r["toDisplayString"])(n.user.username),1),n.withOption?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Z,[G,Object(r["createElementVNode"])("div",K,[Object(r["createElementVNode"])("a",{onClick:t[0]||(t[0]=Object(r["withModifiers"])((function(e){return a.passToParentEvent({template:"template_update",user:n.user})}),["prevent"])),href:"#"},"Edit"),Object(r["createElementVNode"])("a",{onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return a.passToParentEvent({template:"template_delete",user:n.user})}),["prevent"])),href:"#"},"Delete")])])):Object(r["createCommentVNode"])("",!0)])}n("d3b7"),n("25f0");function X(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"avatar",style:Object(r["normalizeStyle"])({background:a.randomColorByUsername()})},Object(r["toDisplayString"])(a.printFirstChar()),5)}var Y={name:"Avatar",props:["username"],methods:{printFirstChar:function(){return this.username.charAt(0)},randomColorByUsername:function(){for(var e=0,t=0;t<this.username.length;t++)e=this.username.charCodeAt(t)+((e<<5)-e);for(var n="#",r=0;r<3;r++){var o=e>>8*r&255;n+=("00"+o.toString(16)).substr(-2)}return n}}};n("4708");const ee=N()(Y,[["render",X],["__scopeId","data-v-e240c0b4"]]);var te=ee,ne={name:"UserChip",props:["user","withOption"],components:{Avatar:te},methods:{passToParentEvent:function(e){this.$emit("changeCurrentTemplate",e)},printFirstChar:function(e){return e.charAt(0)},randomColorByUsername:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var r="#",o=0;o<3;o++){var c=t>>8*o&255;r+=("00"+c.toString(16)).substr(-2)}return r}}};n("aa41");const re=N()(ne,[["render",Q],["__scopeId","data-v-0d94403e"]]);var oe=re,ce=n("d4ec"),ae=n("bee2"),ie=(n("99af"),n("bc3a")),le=n.n(ie),se="http://localhost:4000/api",ue=function(){function e(){Object(ce["a"])(this,e)}return Object(ae["a"])(e,[{key:"create",value:function(e){return le.a.post("".concat(se,"/users"),{user:{username:e.username,email:e.email}})}},{key:"findOne",value:function(e){return le.a.get("".concat(se,"/users/").concat(e))}},{key:"findAll",value:function(){return le.a.get("".concat(se,"/users"))}},{key:"update",value:function(e,t){return le.a.put("".concat(se,"/users/").concat(e),{user:{username:t.username,email:t.email}})}},{key:"delete",value:function(e){return le.a.delete("".concat(se,"/users/").concat(e))}}]),e}(),me=new ue,de={name:"User",components:{UserChip:oe},data:function(){return{current_template:"template_index",selected_user:null,users:[],form:{username:"",email:"",password:""}}},mounted:function(){this.getUsers()},methods:{resetFormState:function(){this.form.username="",this.form.email=""},createUser:function(){var e=this;return me.create(this.form).then((function(t){console.log(t),e.resetFormState(),e.getUsers(),e.goToTemplate({template:"template_index",user:null})})).catch((function(e){console.log(e)}))},handleRegister:function(){var e=this;this.$store.dispatch("auth/register",this.form).then((function(){e.resetFormState(),e.getUsers(),e.goToTemplate({template:"template_index",user:null})})).catch((function(e){console.log(e)}))},updateUser:function(e){var t=this;return me.update(e,this.form).then((function(e){console.log(e),t.resetFormState(),t.getUsers(),t.goToTemplate({template:"template_index",user:null})})).catch((function(e){console.log(e)}))},getUser:function(e){var t=this;return me.findOne(e).then((function(e){console.log(e),t.form.username=e.data.data.username,t.form.email=e.data.data.email})).catch((function(e){console.log(e)}))},getUsers:function(){var e=this;return me.findAll().then((function(t){console.log(t),e.users=t.data.data})).catch((function(e){console.log(e)}))},deleteUser:function(e){var t=this;return me.delete(e).then((function(e){console.log(e),t.resetFormState(),t.getUsers(),t.goToTemplate({template:"template_index",user:null})})).catch((function(e){console.log(e)}))},goToTemplate:function(e){this.resetFormState();var t=e.template,n=e.user;"template_update"===t&&this.getUser(n.id),this.selected_user=n,this.current_template=t}}};const pe=N()(de,[["render",q]]);var be=pe,fe=function(e){return Object(r["pushScopeId"])("data-v-20bc4033"),e=e(),Object(r["popScopeId"])(),e},Oe={class:"container-user-workingtime"},he={class:"card"},je={class:"clocks",id:"container"},ge={style:{width:"100%"}},ve={style:{width:"100%"}},ke=fe((function(){return Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,"Start"),Object(r["createElementVNode"])("td",null,"End"),Object(r["createElementVNode"])("td",null,"Time")],-1)})),Ee={class:"time"},Ve={class:"time"},we={style:{display:"flex","align-items":"center",width:"100%"}},Ne={key:0},ye={key:1},Te={style:{display:"flex","align-items":"center",width:"100%"}},Ce={style:{display:"flex","align-items":"center",width:"100%"}},Be={key:0},_e={key:1};function De(e,t,n,o,c,a){var i=Object(r["resolveComponent"])("UserChip"),l=Object(r["resolveComponent"])("ClockManager"),s=Object(r["resolveComponent"])("WorkingTimes");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Oe,[Object(r["createElementVNode"])("div",he,[Object(r["createElementVNode"])("div",je,[Object(r["createElementVNode"])("div",ge,[Object(r["createVNode"])(i,{user:n.user,withOption:!1},null,8,["user"])]),Object(r["createElementVNode"])("div",ve,[Object(r["createElementVNode"])("table",null,[ke,Object(r["createElementVNode"])("tr",null,[Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("span",Ee,Object(r["toDisplayString"])(c.workingTime.start.toFormat("T")),1)]),Object(r["createElementVNode"])("td",null,[Object(r["createElementVNode"])("span",Ve,Object(r["toDisplayString"])(c.workingTime.end.toFormat("T")),1)]),Object(r["createElementVNode"])("td",null,[Object(r["createVNode"])(l,{onEventClocks:t[0]||(t[0]=function(e){return a.setStart(e)}),user:n.user,clockIn:c.isActive,startDate:c.workingTime.start,ref:"clockManager"},null,8,["user","clockIn","startDate"])])])])]),Object(r["createElementVNode"])("div",we,[c.isActive?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ye,[Object(r["createElementVNode"])("button",{class:"danger",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(){return a.stopWorkingTime&&a.stopWorkingTime.apply(a,arguments)}),["prevent"]))},"End")])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Ne,[Object(r["createElementVNode"])("button",{class:"info",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){return a.startWorkingTime&&a.startWorkingTime.apply(a,arguments)}),["prevent"]))},"Start")]))]),Object(r["createElementVNode"])("div",Te,[Object(r["createElementVNode"])("button",{class:"danger",onClick:t[3]||(t[3]=function(){return a.resetWorkingTime&&a.resetWorkingTime.apply(a,arguments)})},"Reset")]),Object(r["createElementVNode"])("div",Ce,[Object(r["createElementVNode"])("button",{type:"button",class:Object(r["normalizeClass"])({active:c.iscollapsed}),onClick:t[4]||(t[4]=function(){return a.viewCollapse&&a.viewCollapse.apply(a,arguments)})},[c.iscollapsed?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Be," Close History ")):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",_e," Open History "))],2)])]),Object(r["createElementVNode"])("div",{class:Object(r["normalizeClass"])(["content",{activeClass:c.iscollapsed}])},[Object(r["createVNode"])(s,{user:n.user,ref:"workingTimes"},null,8,["user"])],2)])])}var Se=n("1315");function Me(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,Object(r["toDisplayString"])(a.output),1)}var Fe=n("1da1"),Ue=(n("fb6a"),n("96cf"),function(){function e(){Object(ce["a"])(this,e)}return Object(ae["a"])(e,[{key:"create",value:function(e,t){return le.a.post("".concat(se,"/clocks/").concat(e),{clock:{time:t.time,status:t.status}})}},{key:"findAll",value:function(e){return le.a.get("".concat(se,"/clocks/").concat(e))}}]),e}()),xe=new Ue,Ae={name:"ClockManager",props:["user","clockIn","startDate"],data:function(){return{clock:"00:00:00",clocks:null,isActive:this.clockIn,start:this.startDate}},mounted:function(){var e=this;return Object(Fe["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getLastClock();case 2:null!==(n=e.clocks)&&void 0!==n&&n.status&&(e.$emit("event-clocks",e.clocks.time),e.resetTimer(),e.start=e.clocks.time,e.isActive=!0),setInterval((function(){e.isActive&&(e.clock=Se["DateTime"].now().diff(Se["DateTime"].fromISO(e.start)).toFormat("hh:mm:ss"))}),1e3);case 4:case"end":return t.stop()}}),t)})))()},computed:{output:function(){return this.clock}},methods:{resetTimer:function(){this.clock="00:00:00",this.start=Se["DateTime"].now()},createClock:function(e){return xe.create(this.user.id,{time:Se["DateTime"].now().toISO(),status:e}).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e),e}))},getLastClock:function(){var e=this;return Object(Fe["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",xe.findAll(e.user.id).then((function(t){console.log(t),e.clocks=t.data.data.slice(1).pop()})).catch((function(e){return console.log(e),e})));case 1:case"end":return t.stop()}}),t)})))()}}};const Ie=N()(Ae,[["render",Me]]);var We=Ie,Pe=function(e){return Object(r["pushScopeId"])("data-v-0474e8bc"),e=e(),Object(r["popScopeId"])(),e},Le={style:{width:"90vw",margin:"0 auto"}},$e=Pe((function(){return Object(r["createElementVNode"])("h2",null,"History",-1)})),Re={class:"container"},qe={class:"clocks cardClock"},Je={class:"clocks-info"},ze=Object(r["createTextVNode"])(" Start:"),He={class:"time"},Ze=Object(r["createTextVNode"])(" End:"),Ge={class:"time"},Ke=Object(r["createTextVNode"])(" Time:"),Qe={class:"time"},Xe=["onClick"],Ye=["onClick"],et={key:0},tt=Pe((function(){return Object(r["createElementVNode"])("label",{for:"start"},"Start",-1)})),nt=Pe((function(){return Object(r["createElementVNode"])("label",{for:"end"},"End",-1)}));function rt(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Le,[$e,Object(r["createElementVNode"])("div",Re,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.workingTimes,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.id},["template_index"==c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:0},[Object(r["createElementVNode"])("div",qe,[Object(r["createElementVNode"])("div",Je,[Object(r["createElementVNode"])("p",null,[ze,Object(r["createElementVNode"])("span",He,Object(r["toDisplayString"])(a.formatDateFromISO(e.start).toFormat(" EEEE hh:mm:ss ")),1)]),Object(r["createElementVNode"])("p",null,[Ze,Object(r["createElementVNode"])("span",Ge,Object(r["toDisplayString"])(a.formatDateFromISO(e.end).toFormat(" EEEE hh:mm:ss ")),1)]),Object(r["createElementVNode"])("p",null,[Ke,Object(r["createElementVNode"])("span",Qe,Object(r["toDisplayString"])(a.getTime(a.formatDateFromISO(e.start),a.formatDateFromISO(e.end))),1)])])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{class:"danger",onClick:function(t){return a.deleteWorkingTime(e.id)}}," Delete ",8,Xe),Object(r["createElementVNode"])("button",{class:"warning",onClick:Object(r["withModifiers"])((function(t){return a.goToTemplate({template:"template_edit",workingTime:e})}),["prevent"])}," Update ",8,Ye)])],64)):Object(r["createCommentVNode"])("",!0)])})),128)),"template_edit"==c.current_template?(Object(r["openBlock"])(),Object(r["createElementBlock"])("form",et,[Object(r["createElementVNode"])("div",null,[tt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"time",id:"start",name:"start","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.start=e})},null,512),[[r["vModelText"],c.form.start]])]),Object(r["createElementVNode"])("div",null,[nt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"time",id:"end",name:"end","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.end=e})},null,512),[[r["vModelText"],c.form.end]])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{style:{background:"white",color:"black"},onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return a.goToTemplate({template:"template_index",workingTime:null})}),["prevent"]))}," Back "),Object(r["createElementVNode"])("button",{class:"success",onClick:t[3]||(t[3]=Object(r["withModifiers"])((function(){return a.updateWorkingTime&&a.updateWorkingTime.apply(a,arguments)}),["prevent"]))},"Done")])])):Object(r["createCommentVNode"])("",!0)])])}var ot=function(){function e(){Object(ce["a"])(this,e)}return Object(ae["a"])(e,[{key:"create",value:function(e,t){return le.a.post("".concat(se,"/workingtimes/").concat(e),{workingtime:{start:t.start,end:t.end}})}},{key:"update",value:function(e,t){return le.a.put("".concat(se,"/workingtimes/").concat(e),{workingtime:{start:t.start,end:t.end}})}},{key:"findAll",value:function(e){return le.a.get("".concat(se,"/workingtimes/").concat(e))}},{key:"findOne",value:function(e,t){return le.a.get("".concat(se,"/workingtimes/").concat(e,"/").concat(t))}},{key:"delete",value:function(e){return le.a.delete("".concat(se,"/workingtimes/").concat(e))}}]),e}(),ct=new ot,at={name:"WorkingTimes",props:["user"],data:function(){return{workingTimes:[],isActive:!0,isHidden:!0,current_template:"template_index",form:{start:null,end:null},selected_workingTime:null}},mounted:function(){this.getWorkingTimes()},methods:{getWorkingTimes:function(){var e=this;return ct.findAll(this.user.id).then((function(t){e.workingTimes=t.data.data})).catch((function(e){return console.log(e),e}))},getWorkingTime:function(e){var t=this;return ct.findOne(this.user.id,e).then((function(e){console.log(e.data.data),t.form.start=Se["DateTime"].fromISO(e.data.data.start).toFormat("H:mm:ss"),t.form.end=Se["DateTime"].fromISO(e.data.data.end).toFormat("H:mm:ss")})).catch((function(e){return console.log(e),e}))},updateWorkingTime:function(){var e=this;return ct.update(this.selected_workingTime.id,{start:this.form.start,end:this.form.end}).then((function(t){console.log(t),e.getWorkingTimes()})).catch((function(e){return console.log(e),e}))},deleteWorkingTime:function(e){var t=this;return ct.delete(e).then((function(){t.getWorkingTimes()})).catch((function(e){return console.log(e),e}))},getTime:function(e,t){return t.diff(e).toFormat("hh:mm:ss")},formatDateFromISO:function(e){return Se["DateTime"].fromISO(e)},resetFormState:function(){this.form.start=null,this.form.end=null},goToTemplate:function(e){this.resetFormState();var t=e.template,n=e.workingTime;this.current_template=t,this.selected_workingTime=n,"template_edit"===t&&this.getWorkingTime(n.id)}}};n("ec5b");const it=N()(at,[["render",rt],["__scopeId","data-v-0474e8bc"]]);var lt=it,st=n("1b88"),ut=n.n(st),mt=n("2552"),dt=n.n(mt),pt={name:"WorkingTime",props:["user"],components:{ClockManager:We,WorkingTimes:lt,UserChip:oe},data:function(){return{workingTime:{start:Se["DateTime"].now().set({hour:0,minute:0}),end:Se["DateTime"].now().set({hour:0,minute:0})},isActive:!1,iscollapsed:!1}},methods:{playStartSound:function(){var e=new Audio(ut.a);e.play()},playEndSound:function(){var e=new Audio(dt.a);e.play()},createWorkingTime:function(){var e=this;return ct.create(this.user.id,{start:this.workingTime.start.toISO(),end:this.workingTime.end.toISO()}).then((function(t){return e.$refs.workingTimes.getWorkingTimes(),t})).catch((function(e){return console.log(e),e}))},startWorkingTime:function(){this.resetTime(),this.workingTime.start=Se["DateTime"].now(),this.isActive=!0,this.playStartSound(),this.$refs.clockManager.createClock(!0),this.$refs.clockManager.isActive=!0},stopWorkingTime:function(){this.workingTime.end=Se["DateTime"].now(),this.isActive=!1,this.playEndSound(),this.createWorkingTime(),this.$refs.clockManager.createClock(!1),this.$refs.clockManager.isActive=!1},viewCollapse:function(){this.iscollapsed?this.iscollapsed=!1:this.iscollapsed=!0},resetWorkingTime:function(){this.resetTime(),this.isActive=!1,this.$refs.clockManager.isActive=!1},resetTime:function(){this.workingTime.start=Se["DateTime"].local(0),this.workingTime.end=Se["DateTime"].local(0),this.$refs.clockManager.resetTimer()},setStart:function(e){this.resetTime(),this.workingTime.start=Se["DateTime"].fromISO(e),this.isActive=!0}}};n("ad2a");const bt=N()(pt,[["render",De],["__scopeId","data-v-20bc4033"]]);var ft=bt,Ot={style:{width:"90vw",margin:"0 auto"}},ht={class:"card"},jt={class:"container"},gt=Object(r["createElementVNode"])("label",{for:"email"},"Email",-1),vt=Object(r["createElementVNode"])("label",{for:"password"},"Password",-1);function kt(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Ot,[Object(r["createElementVNode"])("div",ht,[Object(r["createElementVNode"])("div",jt,[Object(r["createElementVNode"])("form",null,[Object(r["createElementVNode"])("div",null,[gt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.email=e}),required:""},null,512),[[r["vModelText"],c.form.email]])]),Object(r["createElementVNode"])("div",null,[vt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.password=e}),required:""},null,512),[[r["vModelText"],c.form.password]])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return a.handleLogin()}),["prevent"]))},"Login")])])])])])}var Et={data:function(){return{form:{email:"",password:""},loading:!1}},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$store.dispatch("auth/login",this.form).then((function(){console.log("yes login in !")})).catch((function(){e.loading=!1,console.log("no login in !")}))}}};const Vt=N()(Et,[["render",kt]]);var wt=Vt,Nt={style:{width:"90vw",margin:"0 auto"}},yt={class:"card"},Tt={class:"container"},Ct=Object(r["createElementVNode"])("label",{for:"username"},"Username",-1),Bt=Object(r["createElementVNode"])("label",{for:"email"},"Email",-1),_t=Object(r["createElementVNode"])("label",{for:"password"},"Password",-1),Dt=Object(r["createElementVNode"])("label",{for:"passwordConfirmation"},"Password Confirmation",-1);function St(e,t,n,o,c,a){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Nt,[Object(r["createElementVNode"])("div",yt,[Object(r["createElementVNode"])("div",Tt,[Object(r["createElementVNode"])("form",null,[Object(r["createElementVNode"])("div",null,[Ct,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"username",id:"username","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.form.username=e}),required:""},null,512),[[r["vModelText"],c.form.username]])]),Object(r["createElementVNode"])("div",null,[Bt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"email",name:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.form.email=e}),required:""},null,512),[[r["vModelText"],c.form.email]])]),Object(r["createElementVNode"])("div",null,[_t,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",name:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.form.password=e}),required:""},null,512),[[r["vModelText"],c.form.password]])]),Object(r["createElementVNode"])("div",null,[Dt,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"password",name:"passwordConfirmation",id:"passwordConfirmation","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.form.passwordConfirmation=e}),required:""},null,512),[[r["vModelText"],c.form.passwordConfirmation]])]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("button",{onClick:t[4]||(t[4]=Object(r["withModifiers"])((function(e){return a.handleRegister()}),["prevent"]))},"Login")])])])])])}var Mt={data:function(){return{form:{username:"",email:"",password:"",passwordConfirmation:""}}},methods:{handleRegister:function(){this.$store.dispatch("auth/register",this.form).then((function(){console.log("yes login in !")})).catch((function(e){console.log(e)}))}}};const Ft=N()(Mt,[["render",St]]);var Ut=Ft,xt={name:"App",components:{User:be,WorkingTime:ft,ChartManager:T,Login:wt,Register:Ut},data:function(){return{users:[],current_template:"template_index"}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn},itsFriday:function(){return 5===Se["DateTime"].now().weekday},itsMonday:function(){return 1===Se["DateTime"].now().weekday}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return me.findAll().then((function(t){return e.users=t.data.data})).catch((function(e){return console.log(e),e}))}}};n("8a71");const At=N()(xt,[["render",s]]);var It=At,Wt=n("5502"),Pt=(n("e9c4"),function(){function e(){Object(ce["a"])(this,e)}return Object(ae["a"])(e,[{key:"login",value:function(e){return le.a.post("".concat(se,"/users/signin"),{email:e.email,password:e.password}).then((function(e){return e.data.data.token&&localStorage.setItem("user",JSON.stringify(e.data.data)),e.data.data}))}},{key:"register",value:function(e){return le.a.post("".concat(se,"/users/signup"),{user:{username:e.username,email:e.email,password:e.password}})}},{key:"logout",value:function(){localStorage.removeItem("user")}}]),e}()),Lt=new Pt,$t=JSON.parse(localStorage.getItem("user")),Rt=$t?{status:{loggedIn:!0},user:$t}:{status:{loggedIn:!1},user:null},qt={namespaced:!0,state:Rt,actions:{login:function(e,t){var n=e.commit;return Lt.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;Lt.logout(),t("logout")},register:function(e,t){var n=e.commit;return Lt.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}},Jt=Object(Wt["a"])({modules:{auth:qt}}),zt=Jt;Object(r["createApp"])(It).use(zt).mount("#app")},"74da":function(e,t,n){"use strict";n("baee")},"8a71":function(e,t,n){"use strict";n("e6df")},aa41:function(e,t,n){"use strict";n("245e")},ad2a:function(e,t,n){"use strict";n("d695")},baee:function(e,t,n){},d695:function(e,t,n){},e6df:function(e,t,n){},ec5b:function(e,t,n){"use strict";n("42a0")}});
//# sourceMappingURL=app.a5c2b6be.js.map