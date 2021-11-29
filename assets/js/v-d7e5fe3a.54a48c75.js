"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[44],{891:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-d7e5fe3a",path:"/js/RegExp.html",title:"正则表达式",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[{level:3,title:"以指定字符结尾",slug:"以指定字符结尾",children:[]},{level:3,title:"字符串中是否包含指定字符",slug:"字符串中是否包含指定字符",children:[]}]}],filePathRelative:"js/RegExp.md",git:{updatedTime:1638163462e3,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},8349:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="以指定字符结尾" tabindex="-1"><a class="header-anchor" href="#以指定字符结尾" aria-hidden="true">#</a> 以指定字符结尾</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token string">&#39;jpg&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">$</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;123.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\nre<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;123.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果是判断&#39;.jpg&#39;结尾，<code>const type = &#39;\\.jpg&#39;;</code></p><h3 id="字符串中是否包含指定字符" tabindex="-1"><a class="header-anchor" href="#字符串中是否包含指定字符" aria-hidden="true">#</a> 字符串中是否包含指定字符</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;Visit Runoob!&quot;</span><span class="token punctuation">;</span> \n<span class="token keyword">const</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Runoob</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">&#39;Runoob&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',7),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);