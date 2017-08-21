webpackJsonp([1],[,,,,,,,function(t,e,s){s(88);var a=s(2)(s(67),s(114),"data-v-3ea8ba35",null);t.exports=a.exports},function(t,e,s){s(90);var a=s(2)(s(68),s(116),"data-v-734e3687",null);t.exports=a.exports},,,,,,,function(t,e,s){"use strict";var a=s(9),n=s.n(a),o=s(121),i=s(106),r=s.n(i),c=s(105),d=s.n(c),m=s(108),u=(s.n(m),s(8)),l=s.n(u),v=s(7),p=s.n(v);n.a.use(o.a),e.a=new o.a({routes:[{path:"/boards",name:"Boards",component:r.a},{path:"/boards/:id",name:"Board",component:d.a},{path:"/",name:"Login",component:p.a},{path:"/register",name:"Register",component:l.a}]})},,,,,,,,,,,,,,,,,,function(t,e,s){s(85);var a=s(2)(s(69),s(111),"data-v-1e5d4269",null);t.exports=a.exports},,,,function(t,e,s){"use strict";var a=s(42),n=s.n(a),o=s(15),i=s(9),r=s.n(i),c=s(123);r.a.use(c.a);var d=n.a.create({baseURL:"https://youcankanban.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),m=n.a.create({baseURL:"https://youcankanban.herokuapp.com/",timeout:2e3,withCredentials:!0}),u={boards:[],activeBoard:{},activeLists:[],activeTasks:{},moveTask:{},error:{},user:{},comments:{}},l=function(t,e){t.error=e};e.a=new c.a.Store({state:u,mutations:{setBoards:function(t,e){t.boards=e},setActiveBoard:function(t,e){t.activeBoard=e},setUser:function(t,e){t.user=e||{}},setListTasks:function(t,e){r.a.set(t.activeTasks,e.listId,e.tasks)},setActiveLists:function(t,e){t.activeLists=e},setComments:function(t,e){r.a.set(t.comments,e.taskId,e.comments)},removeTask:function(t,e){var s=t.activeTasks[e.task.listId].indexOf(e.task);t.activeTasks[e.task.listId].splice(s,1)}},actions:{login:function(t,e){var s=t.commit;t.dispatch;m.post("login",e).then(function(t){s("setUser",t.data.data),o.a.push("/boards")}).catch(l)},register:function(t,e){var s=t.commit;t.dispatch;m.post("register",e).then(function(t){if(t.data.error)return l(t.data.error);s("setUser",t.data.data),o.a.push("/boards")}).catch(l)},getAuth:function(t){var e=t.commit;t.dispatch;m("authenticate").then(function(t){e("setUser",t.data.data),t.data.data?o.a.push("/boards"):o.a.push("/")}).catch(function(t){})},logout:function(t,e){t.commit,t.dispatch;m.delete("logout",e).then(function(t){o.a.push("/")}).catch(l)},clearError:function(){u.error={}},getBoards:function(t){var e=t.commit;t.dispatch;d("boards").then(function(t){e("setBoards",t.data.data)}).catch(l)},getBoard:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId).then(function(t){s("setActiveBoard",t.data.data)}).catch(l)},createBoard:function(t,e){var s=(t.commit,t.dispatch);d.post("boards/",e).then(function(t){s("getBoards")}).catch(l)},removeBoard:function(t,e){var s=(t.commit,t.dispatch);d.delete("boards/"+e._id).then(function(t){s("getBoards")}).catch(l)},getLists:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists").then(function(t){s("setActiveLists",t.data.data)}).catch(l)},createList:function(t,e){var s=(t.commit,t.dispatch);d.post("lists/",e).then(function(t){s("getLists",e.boardId)}).catch(l)},removeList:function(t,e){var s=(t.commit,t.dispatch);d.delete("lists/"+e._id).then(function(t){s("getLists",e)}).catch(l)},getTasks:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists/"+e.listId+"/tasks").then(function(t){var a={listId:e.listId,tasks:t.data.data};s("setListTasks",a)}).catch(l)},createTask:function(t,e){var s=(t.commit,t.dispatch);d.post("tasks/",e).then(function(t){s("getTasks",e)}).catch(l)},moveTask:function(t,e){var s=t.commit,a=t.dispatch;s("removeTask",e),e.task.listId=e.to,d.put("tasks/"+e.task._id,e.task).then(function(t){a("getTasks",{boardId:e.task.boardId,listId:e.task.listId})}).catch(l)},removeTask:function(t,e){var s=(t.commit,t.dispatch);d.delete("tasks/"+e._id).then(function(t){s("getTasks",e)}).catch(l)},createComment:function(t,e){var s=(t.commit,t.dispatch);d.post("comments",e).then(function(t){s("getComments",e)}).catch(l)},removeComment:function(t,e){var s=(t.commit,t.dispatch);d.delete("comments/"+e._id).then(function(){s("getComments",{boardId:e.boardId,taskId:e.taskId,listId:e.listId})})},getComments:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists/"+e.listId+"/tasks/"+e.taskId+"/comments").then(function(t){var a={taskId:e.taskId,comments:t.data.data};s("setComments",a)}).catch(l)}}})},,function(t,e,s){s(89);var a=s(2)(s(60),s(115),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),n=s.n(a),o=s(7),i=s.n(o),r=s(107),c=s.n(r);e.default={name:"app",components:{Error:c.a,Register:n.a,Login:i.a},mounted:function(){this.$store.dispatch("getAuth")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(110),n=s.n(a),o=s(104),i=s.n(o);e.default={name:"Board",data:function(){return{name:"",logo:i.a}},mounted:function(){this.$store.dispatch("getBoard",{boardId:this.$route.params.id}),this.$store.dispatch("getLists",{boardId:this.$route.params.id})},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.activeLists}},components:{List:n.a},methods:{createList:function(){this.$store.dispatch("createList",{name:this.name,boardId:this.$route.params.id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)}}}},function(t,e){throw new Error('Module build failed: SyntaxError: C:/SOURCE/codeworks/vue-lessons/vue-kanban/kanban/src/components/Boards.vue: Unexpected token, expected , (59:6)\n\n[0m [90m 57 | [39m      description[33m:[39m [32m""[39m[33m,[39m\n [90m 58 | [39m      collaborators[33m:[39m [32m""[39m\n[31m[1m>[22m[39m[90m 59 | [39m      logo\n [90m    | [39m      [31m[1m^[22m[39m\n [90m 60 | [39m    }\n [90m 61 | [39m  }[33m,[39m\n [90m 62 | [39m  mounted(){[0m\n')},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Error",computed:{error:function(){return this.$store.state.error}},methods:{clearError:function(){this.$store.dispatch("clearError")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(33),n=s.n(a),o=s(34);s.n(o);e.default={name:"List",data:function(){return{name:""}},mounted:function(){console.log("mounting: ",this.list._id),this.$store.dispatch("getTasks",{boardId:this.$route.params.id,listId:this.list._id})},computed:{tasks:function(){return this.$store.state.activeTasks[this.list._id]}},props:["list"],components:{Task:n.a},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,boardId:this.$route.params.id,listId:this.list._id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)},createTasks:function(t){var e=JSON.parse(t.dataTransfer.getData("text/javascript"));this.$store.dispatch("moveTask",{task:e,to:this.list._id}),console.log("it is alive!")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Comment",props:["comment"],computed:{},methods:{removeComment:function(t){this.$store.dispatch("removeComment",t)}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(33),n=s.n(a),o=s(34);s.n(o);e.default={name:"List",data:function(){return{name:""}},mounted:function(){console.log("mounting: ",this.list._id),this.$store.dispatch("getTasks",{boardId:this.$route.params.id,listId:this.list._id})},computed:{tasks:function(){return this.$store.state.activeTasks[this.list._id]}},props:["list"],components:{Task:n.a},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,boardId:this.$route.params.id,listId:this.list._id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)},createTasks:function(t){var e=JSON.parse(t.dataTransfer.getData("text/javascript"));this.$store.dispatch("moveTask",{task:e,to:this.list._id}),console.log("it is alive!")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(103),n=s.n(a);e.default={name:"Login",data:function(){return{user:{},logo:n.a}},computed:{},methods:{login:function(){this.$store.dispatch("login",this.user)}},components:{}}},function(t,e){throw new Error("Module build failed: SyntaxError: C:/SOURCE/codeworks/vue-lessons/vue-kanban/kanban/src/components/register.vue: Unexpected token, expected , (41:6)\n\n[0m [90m 39 | [39m    [36mreturn[39m{\n [90m 40 | [39m      user[33m:[39m {}\n[31m[1m>[22m[39m[90m 41 | [39m      logo\n [90m    | [39m      [31m[1m^[22m[39m\n [90m 42 | [39m    }\n [90m 43 | [39m  }[33m,[39m\n [90m 44 | [39m  computed[33m:[39m{}[33m,[39m[0m\n")},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(71),n=s.n(a),o=s(109),i=s.n(o);e.default={name:"Task",data:function(){return{name:"",boardId:"",listId:"",taskId:""}},mounted:function(){console.log("mounted: ",this.task._id),this.$store.dispatch("getComments",{boardId:this.$route.params.id,listId:this.task.listId,taskId:this.task._id})},props:["task","id"],components:{Comment:i.a},computed:{comments:function(){return this.$store.state.comments[this.task._id]}},methods:{removeTask:function(){this.$store.dispatch("removeTask",this.task)},moving:function(t){console.log("this is shifty"),t.dataTransfer.setData("text/javascript",n()(this.task))},createComment:function(){this.$store.dispatch("createComment",{name:this.name,boardId:this.$route.params.id,listId:this.task.listId,taskId:this.task._id}),this.name=""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(9),n=s.n(a),o=s(39),i=s.n(o),r=s(15),c=s(38),d=s.n(c),m=s(37),u=s(8),l=(s.n(u),s(7)),v=(s.n(l),d()("https://youcankanban.herokuapp.com"));v.on("CONNECTED",function(t){console.log(t),v.emit("update",{data:"blarg",boardId:"3289748320"})}),new n.a({el:"#app",store:m.a,router:r.a,template:"<App/>",components:{App:i.a}})},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,function(t,e,s){t.exports=s.p+"static/img/bananaBerry.3cae5b2.png"},function(t,e,s){t.exports=s.p+"static/img/bberrylogo.1cf8186.png"},function(t,e,s){s(91);var a=s(2)(s(61),s(117),"data-v-865059dc",null);t.exports=a.exports},function(t,e,s){s(87);var a=s(2)(s(62),s(113),"data-v-3c639f5e",null);t.exports=a.exports},function(t,e,s){s(86);var a=s(2)(s(63),s(112),"data-v-30395534",null);t.exports=a.exports},function(t,e,s){s(93);var a=s(2)(s(64),s(119),"data-v-ea4225bc",null);t.exports=a.exports},function(t,e,s){s(92);var a=s(2)(s(65),s(118),"data-v-b54c1daa",null);t.exports=a.exports},function(t,e,s){s(94);var a=s(2)(s(66),s(120),"data-v-f1f6edfc",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task",attrs:{draggable:"true"},on:{"!dragstart":function(e){t.moving(e)}}},[t._v("\n  "+t._s(t.task.name)+"   "),s("a",{on:{click:t.removeTask}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),s("div",{staticClass:"card"},[t._l(t.comments,function(t){return s("Comment",{staticClass:"well",attrs:{comment:t}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a comment..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.error.message?s("div",{staticClass:"custom-error",on:{click:t.clearError}},[t._v("\n    Error: "+t._s(t.error.message)+"\n  ")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row setcolor"},[s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:t.logo,alt:"bBerry"}})]),t._v(" "),s("div",{staticClass:"col-md-10"}),t._v(" "),s("div",{staticClass:"col-md-1"},[s("button",{staticClass:"button logout",on:{click:function(e){t.logout(t.user)}}},[t._v("logout")])])]),t._v(" "),s("div",{staticClass:"row setsize"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"boards"},[s("h1",[t._v("hello "+t._s(t.user.name)+",")]),t._v(" "),s("div",{staticClass:"well"},[s("h3",[t._v(" Choose a board to view:")]),t._v(" "),s("div",{staticClass:"well"},[s("ul",t._l(t.boards,function(e){return s("li",[s("router-link",{attrs:{to:"/boards/"+e._id}},[t._v(t._s(e.name)+"       ")]),s("a",{on:{click:function(s){t.removeBoard(e)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})])],1)}))])]),t._v(" "),t.boardForm?s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"board name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",require:"",placeholder:"description of board"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.toggleFalse}},[t._v("close this form")])])]):s("div",[s("button",{attrs:{type:"button"},on:{click:t.toggleTrue}},[t._v("add a board!")])])])])]),t._v(" "),s("div",{staticClass:"cole-md-3"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row topborder"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"}),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"row"}),t._v(" "),s("div",{staticClass:"row"},[s("h1",{staticClass:"pacifico"},[t._v("Welcome to")]),s("h1",{staticClass:"ubuntu"},[t._v("banana"),s("img",{attrs:{src:t.logo,alt:"Berry"}})])]),t._v(" "),s("div",{staticClass:"row"},[s("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",required:"",placeholder:"user email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",require:"",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("login")])])]),t._v(" "),s("div",{staticClass:"row"},[s("h5",[t._v("don't have an account?... register "),s("router-link",{attrs:{to:"/register"}},[t._v("here")]),t._v("!")],1)])]),t._v(" "),s("div",{staticClass:"col-md-2"})]),t._v(" "),s("div",{staticClass:"row bottom bumper"}),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row bottom"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h4",[t._v("bananaBerry is a simple Kanban board application that allows you visually plan and organize projects.")]),t._v(" "),s("div",{staticClass:"col-md-3"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("error"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:t.logo,alt:"bBerry"}})]),t._v(" "),s("div",{staticClass:"col-md-9"}),t._v(" "),s("div",{staticClass:"col-md-2"},[s("button",{staticClass:"button topmargin",on:{click:function(t){}}},[s("router-link",{attrs:{to:"/"}},[t._v("return to login")])],1)])]),t._v(" "),s("div",{staticClass:"row"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h2",[t._v("Register")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",required:"",placeholder:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||(t.user.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",required:"",placeholder:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",required:"",placeholder:"set password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("submit!")])])]),t._v(" "),s("div",{staticClass:"col-md-3"})]),t._v(" "),s("div",{staticClass:"row bottom"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:t.logo,alt:"bBerry"}})]),t._v(" "),s("div",{staticClass:"col-md-9"}),t._v(" "),s("div",{staticClass:"col-md-2"},[s("h5",[s("button",{attrs:{type:"button"}},[s("router-link",{attrs:{to:"/boards/"}},[t._v("return to boards list...")])],1)])]),t._v(" "),s("div",{staticClass:"row topline"},[s("h2",[t._v(t._s(t.board.name))])]),t._v(" "),s("div",{staticClass:"row"},[t._l(t.lists,function(t){return s("List",{staticClass:"col-md-3 boxA",attrs:{list:t}})}),t._v(" "),s("div",{staticClass:"col-md-3"},[s("form",{on:{submit:function(e){e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"title of new list..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)]),t._v(" "),s("div",{staticClass:"row bottom"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._v("\n  "+t._s(t.comment.name)+"    "),s("a",{on:{click:function(e){t.removeComment(t.comment)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(e){t.createTasks(e)}}},[s("div",{staticClass:"well"},[t._v("\n          "+t._s(t.list.name)+"      "),s("a",{on:{click:function(e){t.removeList(t.list)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),t._l(t.tasks,function(t,e){return s("Task",{key:e,staticClass:"well tasks",attrs:{task:t,"task-index":e,id:e}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a task..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(e){t.createTasks(e)}}},[s("div",{staticClass:"well"},[t._v("\n          "+t._s(t.list.name)+"      "),s("a",{on:{click:function(e){t.removeList(t.list)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),t._l(t.tasks,function(t,e){return s("Task",{key:e,staticClass:"well tasks",attrs:{task:t,"task-index":e,id:e}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a task..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},,,,,,function(t,e){}],[70]);
//# sourceMappingURL=app.fe913118bdacc02011cd.js.map