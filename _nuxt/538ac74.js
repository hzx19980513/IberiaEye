(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1287:function(t,e,n){"use strict";n.r(e);var o={layout:"admin",created:function(){this.$store.dispatch("admin/task/getAll")}},r=n(57),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("a-row",[e("a-space",{staticClass:"float-right"},[e("a-button",{attrs:{type:"primary",ghost:""},on:{click:function(e){return t.$store.dispatch("admin/task/refreshAll")}}},[t._v("刷新")]),t._v(" "),e("a-button",{attrs:{type:"primary"},on:{click:function(e){return t.$store.dispatch("admin/task/refreshTask")}}},[t._v("重载")])],1)],1),t._v(" "),e("a-row",{attrs:{gutter:[16,16]}},[e("a-col",{attrs:{sm:24,md:12,xl:8}},[e("a-divider",[t._v(" 待处理（ "+t._s(t.$store.state.admin.task.data.free.length)+" ） ")]),t._v(" "),e("a-table",{staticClass:"rounded bg-white shadow",attrs:{scroll:{x:360},columns:t.$store.state.admin.task.table.column,"data-source":t.$store.state.admin.task.data.free,pagination:!1},scopedSlots:t._u([{key:"action",fn:function(text,n){return e("span",{},[e("a-button",{attrs:{ghost:"",size:"small",type:"primary"},on:{click:function(e){return t.$store.dispatch("admin/task/removeTask",{id:n.id})}}},[t._v("\n            移除\n          ")])],1)}}])})],1),t._v(" "),e("a-col",{attrs:{sm:24,md:12,xl:8}},[e("a-divider",[t._v(" 处理中（ "+t._s(t.$store.state.admin.task.data.lock.length)+" ）")]),t._v(" "),e("a-table",{staticClass:"rounded bg-white shadow",attrs:{scroll:{x:360},columns:t.$store.state.admin.task.table.column,"data-source":t.$store.state.admin.task.data.lock,pagination:!1},scopedSlots:t._u([{key:"action",fn:function(text,n){return e("span",{},[e("a-button",{attrs:{ghost:"",size:"small",type:"danger"},on:{click:function(e){return t.$store.dispatch("admin/task/unlockTask",{token:n.token})}}},[t._v("\n            释放\n          ")])],1)}}])})],1),t._v(" "),e("a-col",{attrs:{sm:24,md:12,xl:8}},[e("a-divider",[t._v(" 冷却中 （ "+t._s(t.$store.state.admin.task.data.freeze.length)+" ）")]),t._v(" "),e("a-table",{staticClass:"rounded bg-white shadow",attrs:{scroll:{x:280},columns:t.$store.state.admin.task.table.special,"data-source":t.$store.state.admin.task.data.freeze,pagination:!1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);