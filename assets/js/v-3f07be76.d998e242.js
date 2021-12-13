"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[795],{6938:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3f07be76",path:"/vue/vuex.html",title:"vuex",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"v3",slug:"v3",children:[]},{level:2,title:"v4",slug:"v4",children:[]},{level:2,title:"参考文档",slug:"参考文档",children:[]}],filePathRelative:"vue/vuex.md",git:{updatedTime:1639363044e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},1678:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var t=a(6252);const e=(0,t._)("h1",{id:"vuex",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),(0,t.Uk)(" vuex")],-1),c=(0,t._)("h2",{id:"v3",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#v3","aria-hidden":"true"},"#"),(0,t.Uk)(" v3")],-1),o=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// 在目录下创建"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Vue "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Vuex "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vuex'"),(0,t.Uk)("\nVue"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"use"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("Vuex"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" store "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},[(0,t.Uk)("Vuex"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("Store")]),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  state"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    index"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    array"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"3"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  getters"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 用于计算相关属性"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function-variable function"},"arrayLen"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"state"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'array长度为：'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"+"),(0,t.Uk)(" state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  mutations"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"increment"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("state"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" arr")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// 变更状态"),(0,t.Uk)("\n      state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("index"),(0,t._)("span",{class:"token operator"},"++"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"push"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("arr"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  actions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 可异步，然后调用mutations"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"incrementAsync"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      commit\n    "),(0,t._)("span",{class:"token punctuation"},"}")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token function"},"commit"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'increment'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1000"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(" store"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"25"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"26"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"27"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"28"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"29"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"30"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"31"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"32"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"33"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"34"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"35"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"36"),(0,t._)("br")])],-1),p=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// vue2"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" store "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'./store'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token class-name"},"Vue"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("prototype"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$store "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" store"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Vue"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  store"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function-variable function"},"render"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"h"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"h"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("App"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"$mount"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'#app'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br")])],-1),l=(0,t._)("div",{class:"language-vue ext-vue line-numbers-mode"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      {{index}}\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      {{arrayLen}}\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("button")]),(0,t.Uk)("  "),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("default"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("clickHandle"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" 触发mutations  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("button")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("button")]),(0,t.Uk)("  "),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("default"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("clickHandle2"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" 触发actions  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("button")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("view")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    mapState"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    mapGetters\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vuex'"),(0,t.Uk)("\n\n  "),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"data"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    computed"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// 使用对象展开运算符将此对象混入到外部对象中"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token operator"},"..."),(0,t._)("span",{class:"token function"},"mapState"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token string"},"'index'"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n\n      "),(0,t._)("span",{class:"token comment"},"// 使用对象展开运算符将 getter 混入 computed 对象中"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token operator"},"..."),(0,t._)("span",{class:"token function"},"mapGetters"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token string"},"'arrayLen'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    methods"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"clickHandle"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$store"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"commit"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'increment'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"clickHandle2"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token keyword"},"this"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("$store"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"dispatch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'incrementAsync'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'异步触发完成'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"25"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"26"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"27"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"28"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"29"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"30"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"31"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"32"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"33"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"34"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"35"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"36"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"37"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"38"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"39"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"40"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"41"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"42"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"43"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"44"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"45"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"46"),(0,t._)("br")])],-1),u=(0,t._)("h2",{id:"v4",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#v4","aria-hidden":"true"},"#"),(0,t.Uk)(" v4")],-1),k=(0,t._)("p",null,"采用 setup 模式",-1),_=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// 在目录下创建"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" createStore "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vuex'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" store "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"createStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"state"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      index"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      array"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"3"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  getters"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 用于计算相关属性"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function-variable function"},"arrayLen"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"state"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'array长度为：'"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"+"),(0,t.Uk)(" state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  mutations"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"increment"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("state"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" arr")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token comment"},"// 变更状态"),(0,t.Uk)("\n      state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("index"),(0,t._)("span",{class:"token operator"},"++"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      state"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("array"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"push"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token operator"},"..."),(0,t.Uk)("arr"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  actions"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 可异步，然后调用mutations"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token function"},"incrementAsync"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      commit\n    "),(0,t._)("span",{class:"token punctuation"},"}")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token function"},"commit"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'increment'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1000"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(" store"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"25"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"26"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"27"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"28"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"29"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"30"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"31"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"32"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"33"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"34"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"35"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"36"),(0,t._)("br")])],-1),r=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" store "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'./store'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\napp"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"use"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("store"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"use"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("router"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"mount"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'#app'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br")])],-1),i=(0,t._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t._)("pre",{class:"language-javascript"},[(0,t._)("code",null,[(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useStore "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vuex'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" store "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useStore"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\nstore"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"dispatch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'incrementAsync'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"then"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  console"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"log"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'异步触发完成'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br")])],-1),b=(0,t._)("h2",{id:"参考文档",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),(0,t.Uk)(" 参考文档")],-1),m=(0,t._)("p",null,"https://vuex.vuejs.org/zh/guide/actions.html",-1),U=(0,t._)("p",null,"https://next.vuex.vuejs.org/zh/guide/",-1),d={},g=(0,a(3744).Z)(d,[["render",function(n,s){const a=(0,t.up)("CodeGroupItem"),d=(0,t.up)("CodeGroup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,c,(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,{title:"store/index.js",active:""},{default:(0,t.w5)((()=>[o])),_:1}),(0,t.Wm)(a,{title:"main.js"},{default:(0,t.w5)((()=>[p])),_:1}),(0,t.Wm)(a,{title:"组件中"},{default:(0,t.w5)((()=>[l])),_:1})])),_:1}),u,k,(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(a,{title:"store/index.js",active:""},{default:(0,t.w5)((()=>[_])),_:1}),(0,t.Wm)(a,{title:"main"},{default:(0,t.w5)((()=>[r])),_:1}),(0,t.Wm)(a,{title:"组件中"},{default:(0,t.w5)((()=>[i])),_:1})])),_:1}),b,m,U],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);