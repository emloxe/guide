"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[881],{4566:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-1f997697",path:"/other/vscode.html",title:"vscode",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"格式化代码时，没有根据eslint格式",slug:"格式化代码时-没有根据eslint格式",children:[]},{level:2,title:"出现的问题",slug:"出现的问题",children:[]}],filePathRelative:"other/vscode.md",git:{updatedTime:1638927455e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},8322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(6252),r=n(5289);const s=(0,a.uE)('<h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h1><p>安装插件 eslint，prettier，vetur</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;[vue]&quot;: {\n&quot;editor.defaultFormatter&quot;: &quot;octref.vetur&quot;\n},\n&quot;vetur.format.defaultFormatter.html&quot;: &quot;prettier&quot;,\n&quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier-eslint&quot;,\n&quot;editor.formatOnSave&quot;: true,\n&quot;editor.tabSize&quot;: 2,\n&quot;javascript.preferences.quoteStyle&quot;: &quot;single&quot;,\n&quot;prettier.singleQuote&quot;: true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="格式化代码时-没有根据eslint格式" tabindex="-1"><a class="header-anchor" href="#格式化代码时-没有根据eslint格式" aria-hidden="true">#</a> 格式化代码时，没有根据eslint格式</h2><p>加入配置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  &quot;editor.codeActionsOnSave&quot;: {\n    &quot;source.fixAll.eslint&quot;: true\n  }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果发现格式化两次，说明刚刚以上配置和<code>&quot;editor.formatOnSave&quot;: true</code>,注释即可。</p><h2 id="出现的问题" tabindex="-1"><a class="header-anchor" href="#出现的问题" aria-hidden="true">#</a> 出现的问题</h2><p>有时候出现保存vue文件时，自动保存格式化时，js中单引号 格式成双引号 针对以上问题，可以在配置文件中加入<code>&quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier-eslint&quot;</code></p><p><img src="'+r+'" alt="images"></p>',10),u={},o=(0,n(3744).Z)(u,[["render",function(e,t){return s}]])},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},5289:(e,t,n)=>{e.exports=n.p+"assets/img/20210713a.20beb1ba.png"}}]);