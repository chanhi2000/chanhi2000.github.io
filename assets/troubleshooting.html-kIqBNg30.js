import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as e,t as p,b as s,h as c,ax as d,r as t,o as u,e as m}from"./app-BOC_CZQO.js";const g={},v={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"};function y(a,n){const o=t("router-link"),i=t("TagLinks");return u(),r("div",null,[e("h1",v,[e("a",h,[e("span",null,p(a.$frontmatter.title)+" 관련",1)])]),e("nav",b,[e("ul",null,[e("li",null,[s(o,{to:"#repository-ssl-not-applied"},{default:c(()=>n[0]||(n[0]=[m("Repository SSL not applied")])),_:1})])])]),n[1]||(n[1]=d(`<hr><h2 id="repository-ssl-not-applied" tabindex="-1"><a class="header-anchor" href="#repository-ssl-not-applied"><span>Repository SSL not applied</span></a></h2><p>사용한 Gradle 버전: <code>7.2</code></p><div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre><code><span class="line">repositories <span class="token punctuation">{</span></span>
<span class="line">    maven <span class="token punctuation">{</span></span>
<span class="line">        url repo<span class="token punctuation">.</span>ons</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>리포 적용 했을 때 Gradle Sync 에 실패</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Using insecure protocols with respositories, without explicit opt-in, is unsupported, Switch maven repository ... [생략]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>아래와 같이 처리 <code>allowInsecureProtocol true</code> 플래그 추가하여 처리</p><div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre><code><span class="line">repositories <span class="token punctuation">{</span></span>
<span class="line">    maven <span class="token punctuation">{</span></span>
<span class="line">        url repo<span class="token punctuation">.</span>ons</span>
<span class="line">        allowInsecureProtocol <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,9)),s(i)])}const f=l(g,[["render",y],["__file","troubleshooting.html.vue"]]),x=JSON.parse('{"path":"/programming/gradle/troubleshooting.html","title":"Troubleshooting","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Troubleshooting","description":"Gradle > Troubleshooting","icon":"fas fa-bug-slash","category":["Gradle","Troubleshooting"],"tag":["gradle","groovy","idea","intellij-idea","intellij","insecure-protocols","https"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/gradle/troubleshooting.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Troubleshooting"}],["meta",{"property":"og:description","content":"Gradle > Troubleshooting"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"gradle"}],["meta",{"property":"article:tag","content":"groovy"}],["meta",{"property":"article:tag","content":"idea"}],["meta",{"property":"article:tag","content":"intellij-idea"}],["meta",{"property":"article:tag","content":"intellij"}],["meta",{"property":"article:tag","content":"insecure-protocols"}],["meta",{"property":"article:tag","content":"https"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Troubleshooting\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Repository SSL not applied","slug":"repository-ssl-not-applied","link":"#repository-ssl-not-applied","children":[]}],"git":{},"readingTime":{"minutes":0.22,"words":67},"filePathRelative":"programming/gradle/troubleshooting.md","excerpt":"\\n\\n<hr>\\n<h2>Repository SSL not applied</h2>\\n<p>사용한 Gradle 버전: <code>7.2</code></p>\\n<div class=\\"language-groovy line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"groovy\\" data-title=\\"groovy\\"><pre><code><span class=\\"line\\">repositories <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    maven <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        url repo<span class=\\"token punctuation\\">.</span>ons</span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{f as comp,x as data};
