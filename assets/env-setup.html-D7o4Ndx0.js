import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,d as n,at as o,b as a,t as r,w as u,r as e,o as d,e as k}from"./app-6nZ4Bu4J.js";const m={},v={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"};function b(p,s){const t=e("router-link"),l=e("TagLinks");return d(),c("div",null,[n("h1",v,[n("a",y,[n("span",null,r(p.$frontmatter.title)+" 관련",1)])]),n("nav",g,[n("ul",null,[n("li",null,[a(t,{to:"#gitconfig"},{default:u(()=>s[0]||(s[0]=[k(".gitconfig")])),_:1})])])]),s[1]||(s[1]=o(`<h2 id="gitconfig" tabindex="-1"><a class="header-anchor" href="#gitconfig"><span><code>.gitconfig</code></span></a></h2><div class="code-block-with-title"><div class="code-block-title-bar" data-title="~/.gitconfig"><span>~/.gitconfig</span></div><div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml"><pre><code class="language-toml"><span class="line"><span class="token punctuation">[</span><span class="token table class-name">user</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">name</span> <span class="token punctuation">=</span> chanhi2000</span>
<span class="line">  <span class="token key property">email</span> <span class="token punctuation">=</span> chanhi2000@gmail<span class="token punctuation">.</span>com</span>
<span class="line"><span class="token punctuation">[</span>filter <span class="token string">&quot;lfs&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">process</span> <span class="token punctuation">=</span> git-lfs filter-process</span>
<span class="line">  <span class="token key property">required</span> <span class="token punctuation">=</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token key property">clean</span> <span class="token punctuation">=</span> git-lfs clean -- %f</span>
<span class="line">  <span class="token key property">smudge</span> <span class="token punctuation">=</span> git-lfs smudge -- %f</span>
<span class="line"><span class="token comment"># INCLUDES</span></span>
<span class="line"><span class="token comment"># --------</span></span>
<span class="line"><span class="token comment"># Local/Private config goes in the include</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">include</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">path</span> <span class="token punctuation">=</span> ~/<span class="token punctuation">.</span>gitconfig<span class="token punctuation">.</span>local</span>
<span class="line"><span class="token comment"># URL ALIASES</span></span>
<span class="line"><span class="token comment"># -----------</span></span>
<span class="line"><span class="token comment"># Alias for Dracula Org repositories</span></span>
<span class="line"><span class="token punctuation">[</span>url <span class="token string">&quot;https://github.com/dracula/&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">insteadOf</span> <span class="token punctuation">=</span> dracula://</span>
<span class="line"><span class="token comment"># COLORS</span></span>
<span class="line"><span class="token comment"># ------</span></span>
<span class="line"><span class="token comment"># Dracula Dark Theme</span></span>
<span class="line"><span class="token punctuation">[</span><span class="token table class-name">color</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">ui</span> <span class="token punctuation">=</span> auto</span>
<span class="line"><span class="token punctuation">[</span>color <span class="token string">&quot;branch&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">current</span> <span class="token punctuation">=</span> cyan bold reverse</span>
<span class="line">  <span class="token key property">local</span> <span class="token punctuation">=</span> white</span>
<span class="line">  <span class="token key property">plain</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">remote</span> <span class="token punctuation">=</span> cyan</span>
<span class="line"><span class="token punctuation">[</span>color <span class="token string">&quot;diff&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">commit</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">func</span> <span class="token punctuation">=</span> cyan</span>
<span class="line">  <span class="token key property">plain</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">whitespace</span> <span class="token punctuation">=</span> magenta reverse</span>
<span class="line">  <span class="token key property">meta</span> <span class="token punctuation">=</span> white</span>
<span class="line">  <span class="token key property">frag</span> <span class="token punctuation">=</span> cyan bold reverse</span>
<span class="line">  <span class="token key property">old</span> <span class="token punctuation">=</span> red</span>
<span class="line">  <span class="token key property">new</span> <span class="token punctuation">=</span> green</span>
<span class="line"><span class="token punctuation">[</span>color <span class="token string">&quot;grep&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">context</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">filename</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">function</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">linenumber</span> <span class="token punctuation">=</span> white</span>
<span class="line">  <span class="token key property">match</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">selected</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">separator</span> <span class="token punctuation">=</span></span>
<span class="line"><span class="token punctuation">[</span>color <span class="token string">&quot;interactive&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">error</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">header</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">help</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">prompt</span> <span class="token punctuation">=</span></span>
<span class="line"><span class="token punctuation">[</span>color <span class="token string">&quot;status&quot;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key property">added</span> <span class="token punctuation">=</span> green</span>
<span class="line">  <span class="token key property">changed</span> <span class="token punctuation">=</span> white</span>
<span class="line">  <span class="token key property">header</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">localBranch</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">nobranch</span> <span class="token punctuation">=</span></span>
<span class="line">  <span class="token key property">remoteBranch</span> <span class="token punctuation">=</span> cyan bold</span>
<span class="line">  <span class="token key property">unmerged</span> <span class="token punctuation">=</span> magenta bold reverse</span>
<span class="line">  <span class="token key property">untracked</span> <span class="token punctuation">=</span> red</span>
<span class="line">  <span class="token key property">updated</span> <span class="token punctuation">=</span> green bold</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>`,3)),a(l)])}const _=i(m,[["render",b]]),S=JSON.parse('{"path":"/programming/git/env-setup.html","title":"Environment Setup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Environment Setup","description":"Git > Environment Setup","icon":"fas fa-toolbox","category":["Git","Environment Setup"],"tag":["git","git-cli","bash","terminal","windows-terminal"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Environment Setup\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/git/env-setup.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Environment Setup"}],["meta",{"property":"og:description","content":"Git > Environment Setup"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"windows-terminal"}],["meta",{"property":"article:tag","content":"terminal"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"git-cli"}],["meta",{"property":"article:tag","content":"git"}],[{"meta":null},{"property":"og:title","content":"Git > Environment Setup"},{"property":"og:description","content":"Environment Setup"},{"property":"og:url","content":"https://chanhi2000.github.io/programming/git/env-setup.html"}]]},"git":{},"readingTime":{"minutes":0.6,"words":179},"filePathRelative":"programming/git/env-setup.md"}');export{_ as comp,S as data};
