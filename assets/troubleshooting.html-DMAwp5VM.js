import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,d as n,t as m,b as s,h as i,ax as r,e as t,r as o,o as h}from"./app-vQERoX8y.js";const g={},v={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},_={class:"table-of-contents"},f={class:"hint-container warning"},x={class:"hint-container-title"};function k(d,e){const a=o("router-link"),l=o("FontIcon"),p=o("TagLinks");return h(),u("div",null,[n("h1",v,[n("a",b,[n("span",null,m(d.$frontmatter.title)+" 관련",1)])]),n("nav",_,[n("ul",null,[n("li",null,[s(a,{to:"#💀err-unsupported-dir-import"},{default:i(()=>e[0]||(e[0]=[t("💀ERR_UNSUPPORTED_DIR_IMPORT")])),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#원인"},{default:i(()=>e[1]||(e[1]=[t("원인")])),_:1})]),n("li",null,[s(a,{to:"#처리방법"},{default:i(()=>e[2]||(e[2]=[t("처리방법")])),_:1})]),n("li",null,[s(a,{to:"#참조"},{default:i(()=>e[3]||(e[3]=[t("참조")])),_:1})])])])])]),e[8]||(e[8]=r(`<hr><h2 id="💀err-unsupported-dir-import" tabindex="-1"><a class="header-anchor" href="#💀err-unsupported-dir-import"><span>💀ERR_UNSUPPORTED_DIR_IMPORT</span></a></h2><p><code>npm run dev</code> 실행 시 특정 모듈에서 발생</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[ERR_UNSUPPORTED_DIR_IMPORT]: Directory import &#39;&lt;프로젝트경로&gt;\\node_modules\\vuepress-plugin-mermaid-next\\lib\\shared\\theme&#39; is not supported resolving ES modules imported from &lt;프로젝트경로&gt;\\node_modules\\vuepress-plugin-mermaid-next\\lib\\node\\index.js</span>
<span class="line">   ... [생략] ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="원인" tabindex="-1"><a class="header-anchor" href="#원인"><span>원인</span></a></h3><p>말 그래도 경로 import를 지원하지 않음</p><p>문제파일 위치</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">└── 프로젝트 경로/</span>
<span class="line">    ├── 📁node_modules/</span>
<span class="line">    │   └── 📁vuepress-plugin-mermaid-next/</span>
<span class="line">    │        └── 📁lib/</span>
<span class="line">    │             ├── 📁shared/</span>
<span class="line">    │             │     └── 📁theme/</span>
<span class="line">    │             │           └── index.js</span>
<span class="line">    │             └── 📁node/ </span>
<span class="line">    │                  └── index.js</span>
<span class="line">    └── package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)),n("div",f,[n("p",x,[s(l,{icon:"fas fa-folder-open"}),e[4]||(e[4]=n("code",null,"vuepress-plugin-mermaid-next\\lib\\node\\",-1)),s(l,{icon:"fa-brands fa-js"}),e[5]||(e[5]=n("code",null,"index.js",-1)),e[6]||(e[6]=t(" 파일"))]),e[7]||(e[7]=r(`<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> markdownMermaid <span class="token keyword">from</span> <span class="token string">&#39;./markdown-it-mermaidx.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// ... [생략] ... </span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> Themes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../shared/theme&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>💀<code>export { Themes } from &#39;../shared/theme&#39;;</code> 를 지원하지 않음</p>`,2))]),e[9]||(e[9]=r('<h3 id="처리방법" tabindex="-1"><a class="header-anchor" href="#처리방법"><span>처리방법</span></a></h3><p><code>-–experimental-specifier-resolution=node</code> 플래그 사용</p><p><code>package.json</code> 파일에서 설정</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="참조" tabindex="-1"><a class="header-anchor" href="#참조"><span>참조</span></a></h3><ul><li><a href="https://weekendprojects.dev/posts/solved-node-err_unsupported_dir_import" target="_blank" rel="noopener noreferrer">[SOLVED] NODE err_unsupported_dir_import</a></li></ul><hr>',7)),s(p)])}const y=c(g,[["render",k],["__file","troubleshooting.html.vue"]]),T=JSON.parse(`{"path":"/programming/js-node/troubleshooting.html","title":"Troubleshooting","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Troubleshooting","description":"Node.js > Troubleshooting","icon":"fas fa-bug-slash","category":["Node.js","Troubleshooting"],"tag":["js","node","nodejs","troubleshooting","package-json","dependencies"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/js-node/troubleshooting.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Troubleshooting"}],["meta",{"property":"og:description","content":"Node.js > Troubleshooting"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"node"}],["meta",{"property":"article:tag","content":"nodejs"}],["meta",{"property":"article:tag","content":"troubleshooting"}],["meta",{"property":"article:tag","content":"package-json"}],["meta",{"property":"article:tag","content":"dependencies"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Troubleshooting\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"💀ERR_UNSUPPORTED_DIR_IMPORT","slug":"💀err-unsupported-dir-import","link":"#💀err-unsupported-dir-import","children":[{"level":3,"title":"원인","slug":"원인","link":"#원인","children":[]},{"level":3,"title":"처리방법","slug":"처리방법","link":"#처리방법","children":[]},{"level":3,"title":"참조","slug":"참조","link":"#참조","children":[]}]}],"git":{},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"programming/js-node/troubleshooting.md","excerpt":"\\n\\n<hr>\\n<h2>💀ERR_UNSUPPORTED_DIR_IMPORT</h2>\\n<p><code>npm run dev</code> 실행 시 특정 모듈에서 발생</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">[ERR_UNSUPPORTED_DIR_IMPORT]: Directory import '&lt;프로젝트경로&gt;\\\\node_modules\\\\vuepress-plugin-mermaid-next\\\\lib\\\\shared\\\\theme' is not supported resolving ES modules imported from &lt;프로젝트경로&gt;\\\\node_modules\\\\vuepress-plugin-mermaid-next\\\\lib\\\\node\\\\index.js</span>\\n<span class=\\"line\\">   ... [생략] ...</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{y as comp,T as data};