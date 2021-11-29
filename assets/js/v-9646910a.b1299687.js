"use strict";(self.webpackChunktutorial=self.webpackChunktutorial||[]).push([[688],{928:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-9646910a",path:"/other/axios.html",title:"axios",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"请求方法",slug:"请求方法",children:[]}],filePathRelative:"other/axios.md",git:{updatedTime:163816521e4,contributors:[{name:"ZWJ",email:"qwrtyp@live.cn",commits:1}]}}},8675:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1><h2 id="请求方法" tabindex="-1"><a class="header-anchor" href="#请求方法" aria-hidden="true">#</a> 请求方法</h2><p>需要携带的参数是<code>test: 123</code></p><p><strong>GET</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 成功</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 失败</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>POST</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>PUT</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>DELETE</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>data<span class="token operator">:</span> <span class="token punctuation">{</span> test<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',11),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}}}]);