(function(){"use strict";var t={19:function(t,o,e){var n=e(9242),r=e(3396),i=e(7139);const s=t=>((0,r.dD)("data-v-2a1a63d1"),t=t(),(0,r.Cn)(),t),d={class:"container-fluid mt-5"},l={class:"wrapper-todo m-auto py-5 px-4 rounded-2"},a=s((()=>(0,r._)("h2",{class:"text-center"},"TODO LIST",-1))),c={class:"input mt-4 mb-5"},u={class:"lists"},f={class:"action title-add",style:{display:"flex","align-items":"center"}},p=["onClick"],v=["onClick"];function b(t,o,e,s,b,h){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("div",l,[a,(0,r._)("div",c,[(0,r.wy)((0,r._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>b.newTodo=t)},null,512),[[n.nr,b.newTodo]]),(0,r._)("button",{type:"button",class:"btn btn-success",onClick:o[1]||(o[1]=(...t)=>h.addTodo&&h.addTodo(...t)),id:"btn-add"}," Add ")]),(0,r._)("div",u,[this.todos.length>0?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:o[2]||(o[2]=(...t)=>h.deleteAll&&h.deleteAll(...t)),class:"btn btn-danger mb-2 delete-all"}," Delete All ")):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(b.todos,((t,o)=>((0,r.wg)(),(0,r.iD)("div",{class:"list border border-1 rounded-2 p-2 my-2",key:o},[(0,r._)("div",{class:(0,i.C_)(["title-add w-75 p-2 my-2",{"done-task":t.done}])},(0,i.zw)(t.text),3),(0,r._)("div",f,[(0,r._)("button",{class:"done btn btn-primary mx-2",onClick:t=>h.toggleDone(o)},(0,i.zw)(t.done?"Undone":"Done"),9,p),(0,r._)("button",{class:"delete btn btn-danger",onClick:t=>h.removeTodo(o)}," Delete ",8,v)])])))),128))])])])}e(7658);var h={data(){return{show:!0,newTodo:"",todos:[]}},methods:{addTodo(){""!==this.newTodo.trim()&&(this.todos.push({text:this.newTodo}),this.newTodo="",this.saveToLocalStorage())},removeTodo(t){this.todos.splice(t,1),this.saveToLocalStorage()},toggleDone(t){this.todos[t].done=!this.todos[t].done,this.saveToLocalStorage()},deleteAll(){this.todos.splice(this.todos),this.saveToLocalStorage()},saveToLocalStorage(){localStorage.setItem("todos",JSON.stringify(this.todos))}},mounted(){const t=localStorage.getItem("todos");t&&(this.todos=JSON.parse(t))}},g=e(89);const m=(0,g.Z)(h,[["render",b],["__scopeId","data-v-2a1a63d1"]]);var y=m;e(2166);(0,n.ri)(y).mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var d=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(d=!1,i<s&&(s=i));if(d){t.splice(c--,1);var a=r();void 0!==a&&(o=a)}}return o}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,i,s=n[0],d=n[1],l=n[2],a=0;if(s.some((function(o){return 0!==t[o]}))){for(r in d)e.o(d,r)&&(e.m[r]=d[r]);if(l)var c=l(e)}for(o&&o(n);a<s.length;a++)i=s[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(19)}));n=e.O(n)})();
//# sourceMappingURL=app.58de0363.js.map