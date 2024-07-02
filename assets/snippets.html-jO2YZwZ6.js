import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as r,c as d,a as n,t as k,b as s,w as p,d as a,e as u}from"./app-CtVGPIIl.js";const q={},v={id:"frontmatter-title-관련",tabindex:"-1"},m={class:"header-anchor",href:"#frontmatter-title-관련"},b={class:"table-of-contents"},g=u('<hr><h2 id="💡how-to" tabindex="-1"><a class="header-anchor" href="#💡how-to"><span>💡How to</span></a></h2><p>Each snippet is defined under a snippet name and has a prefix, body and description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are: <code>$1</code>, <code>$2</code> for tab stops, <code>$0</code> for the final cursor position, and <code>${1:label}</code>, <code>${2:another}</code> for placeholders.</p><p>Placeholders with the same ids are connected.</p>',4),h={class:"hint-container info"},y={class:"hint-container-title"},f=n("code",null,"%APPDATA%\\Code\\User\\snippets",-1),$=n("code",null,"~/Application Support/Code/User/snippets",-1),_=n("h2",{id:"vuepress-components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-components"},[n("span",null,"Vuepress Components")])],-1),C={id:"markdown-json",tabindex:"-1"},V={class:"header-anchor",href:"#markdown-json"},j=n("code",null,"markdown.json",-1),w=u(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;UrlGithubRepo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;urlghr&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://github.com/\${1:repo}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create URL form for Github Repoistory&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMarkdownVidStack&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vpvs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;VidStack src=\\&quot;\${1:url}\\&quot; /&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create VidStack Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMarkdownYoutube&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vpy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;VidStack src=\\&quot;youtube/\${1:id}\\&quot; /&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create VidStack Youtube Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMarkdownYoutubeItem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vpyi&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;YoutubeItem channelName=\\&quot;\${1:channelName}\\&quot; channelId=\\&quot;\${2:channelId}\\&quot; id=\\&quot;\${3:id}\\&quot; title=\\&quot;\${4:title}\\&quot; /&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create YoutubeItem Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMarkdownGithubTags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vpgt&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;GithubTags tagItems=\\&quot;\${1:tagItems}\\&quot; /&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create &#39;GithubTags&#39; Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMarkdownYoutubeGroup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vpyg&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">&quot;## \${1:title}&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;[\${1:title}][\${2:channel}]&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;::: details \${3:목록}&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;:::&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
       <span class="token string">&quot;&lt;!-- \${1:title} --&gt;&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
     <span class="token string">&quot;---&quot;</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create YoutubeGroup Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressMyYouTubeItems&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmyti&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;MyYouTubeItems jsonName=\\&quot;yu-\${1:channelId}\\&quot; /&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create MyYouTubeItems Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressHorizImgCollection&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vhic&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;HorizImgCollections jsonFullPath=\\&quot;\${1:path}\\&quot; /&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create HorizImgCollections Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressTestStepsTable&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vtst&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;TestStepsTable &quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  jsonFullPath=\\&quot;\${1:path}\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  targetVersion=\\&quot;\${2:version}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create TestStepsTable Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressShield&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vshield&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;Shield logo=\\&quot;\${1:path}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create Shield Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressShieldsGroup&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vsg&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;ShieldsGroup logos=\\&quot;\${1:path}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create ShieldsGroup Vue Component&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressFontIcon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vfi&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;FontIcon icon=\\&quot;iconfont icon-\${1:name}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create FontIcon Vue Componenet&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressFontIconAwesome&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vfia&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;FontIcon icon=\\&quot;fas fa-\${1:name}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create FontIcon Vue Componenet (FontAwesome)&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressFontIconAwesomeBrand&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vfiab&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;&lt;FontIcon icon=\\&quot;fa-brands fa-\${1:name}\\&quot;/&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create FontIcon Vue Componenet (FontAwesome Brand)&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressVPCard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vvpc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\`\`\`component VPCard&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  \\&quot;title\\&quot;: \\&quot;\${2:title}\\&quot;,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  \\&quot;desc\\&quot;: \\&quot;\${3:desc}\\&quot;,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  \\&quot;link\\&quot;: \\&quot;\${1:link}\\&quot;,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  \\&quot;logo\\&quot;: \\&quot;\${4:logo}\\&quot;,&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;  \\&quot;background\\&quot;: \\&quot;rgba(\${5:r},\${6:g},\${7:b},0.2)\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\`\`\`\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create VPCard Vue Componenet&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;VuepressSiteInfo&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vsi&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;SiteInfo&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  name=\\&quot;\${2:title}\\&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  desc=\\&quot;\${3:desc}\\&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  url=\\&quot;\${1:link}\\&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  logo=\\&quot;\${4:logo}\\&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;  preview=\\&quot;\${5:preview}\\&quot;/&gt;\${0}&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create SiteInfo Vue Componenet&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;MdTdDoArticles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mtda&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;!-- TODO: 작성 (/explore/articles/\${1:domain}/\${2:link}.md) --&gt;\${0}&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create TODO Tag for writing articles&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;TgKbd&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tgkbd&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token string">&quot;&lt;kbd&gt;\${1:v}&lt;/kbd&gt;\${0}&quot;</span>
     <span class="token punctuation">]</span><span class="token punctuation">,</span>
     <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Create Keyboard tag&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),x={id:"json-json",tabindex:"-1"},I={class:"header-anchor",href:"#json-json"},S=n("code",null,"json.json",-1),T=u(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;jsonGhItem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ghItem&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		 <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span>
		 <span class="token string">&quot;  \\&quot;repo\\&quot;: \\&quot;\${1:repo}\\&quot;,&quot;</span><span class="token punctuation">,</span>
		 <span class="token string">&quot;  \\&quot;desc\\&quot;: \\&quot;\${2:desc}\\&quot;,&quot;</span><span class="token punctuation">,</span> 
		 <span class="token string">&quot;  \\&quot;officialSite\\&quot;: \\&quot;\${3:os}\\&quot;,&quot;</span><span class="token punctuation">,</span>
		 <span class="token string">&quot;  \\&quot;topics\\&quot;: [\${4:topic}]&quot;</span><span class="token punctuation">,</span>
		 <span class="token string">&quot;}&quot;</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Github Item as JSON&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;jsonYtItemAll&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ytItemAll&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  \\&quot;channel\\&quot;: {&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    \\&quot;id\\&quot;: \\&quot;\${1:channelId}\\&quot;,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    \\&quot;name\\&quot;: \\&quot;\${2:channelName}\\&quot;,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    \\&quot;profile\\&quot;: \\&quot;\${3:imgUrl}\\&quot;,&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    \\&quot;banner\\&quot;: \\&quot;\${4:bannerUrl}\\&quot;&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  },&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  \\&quot;videos\\&quot;: [&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;    \${0}&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;  ]&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;}&quot;</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YouTube Item as JSON&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,2);function F(i,G){const o=e("router-link"),t=e("FontIcon"),l=e("TagLinks");return r(),d("div",null,[n("h1",v,[n("a",m,[n("span",null,k(i.$frontmatter.title)+" 관련",1)])]),n("nav",b,[n("ul",null,[n("li",null,[s(o,{to:"#💡how-to"},{default:p(()=>[a("💡How to")]),_:1})]),n("li",null,[s(o,{to:"#vuepress-components"},{default:p(()=>[a("Vuepress Components")]),_:1}),n("ul",null,[n("li",null,[s(o,{to:"#markdown-json"},{default:p(()=>[s(t,{icon:"iconfont icon-json"}),a("markdown.json")]),_:1})]),n("li",null,[s(o,{to:"#json-json"},{default:p(()=>[s(t,{icon:"iconfont icon-json"}),a("json.json")]),_:1})])])])])]),g,n("div",h,[n("p",y,[s(t,{icon:"fas fa-folder-open"}),a("저장위치")]),n("ul",null,[n("li",null,[a("."),s(t,{icon:"fa-brands fa-windows"}),a("Windows: "),f]),n("li",null,[a("."),s(t,{icon:"fa-brands fa-apple"}),a("Mac: "),$])])]),_,n("h3",C,[n("a",V,[n("span",null,[s(t,{icon:"iconfont icon-json"}),j])])]),w,n("h3",x,[n("a",I,[n("span",null,[s(t,{icon:"iconfont icon-json"}),S])])]),T,s(l)])}const N=c(q,[["render",F],["__file","snippets.html.vue"]]),P=JSON.parse('{"path":"/tool/vscode/snippets.html","title":"Snippets","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Snippets","description":"VSCode > Snippets","icon":"fas fa-eye-dropper","category":["VSCode","Snippets"],"tag":["vscode","visual-studio-code","ide","snippets"]},"headers":[{"level":2,"title":"💡How to","slug":"💡how-to","link":"#💡how-to","children":[]},{"level":2,"title":"Vuepress Components","slug":"vuepress-components","link":"#vuepress-components","children":[{"level":3,"title":"markdown.json","slug":"markdown-json","link":"#markdown-json","children":[]},{"level":3,"title":"json.json","slug":"json-json","link":"#json-json","children":[]}]}],"git":{},"readingTime":{"minutes":1.71,"words":513},"filePathRelative":"tool/vscode/snippets.md","excerpt":"\\n\\n<hr>\\n<h2>💡How to</h2>\\n<p>Each snippet is defined under a snippet name and has a prefix, body and description.\\nThe prefix is what is used to trigger the snippet and the body will be expanded and inserted.\\nPossible variables are: <code>$1</code>, <code>$2</code> for tab stops, <code>$0</code> for the final cursor position, and <code>${1:label}</code>, <code>${2:another}</code> for placeholders.</p>"}');export{N as comp,P as data};
