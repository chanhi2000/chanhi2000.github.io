import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,d as t,t as d,b as a,h as o,ax as h,r as i,o as m,e as l}from"./app-vQERoX8y.js";const u={},g={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"};function b(s,e){const n=i("router-link"),p=i("TagLinks");return m(),c("div",null,[t("h1",g,[t("a",f,[t("span",null,d(s.$frontmatter.title)+" 관련",1)])]),t("nav",y,[t("ul",null,[t("li",null,[a(n,{to:"#how-to-disable-opening-an-app-automatically-at-login-in-mac"},{default:o(()=>e[0]||(e[0]=[l("How to disable opening an app automatically at login in Mac")])),_:1})]),t("li",null,[a(n,{to:"#show-hidden-files-and-folders-on-mac"},{default:o(()=>e[1]||(e[1]=[l("Show hidden files and folders on Mac")])),_:1})])])]),e[2]||(e[2]=h(`<hr><h2 id="how-to-disable-opening-an-app-automatically-at-login-in-mac" tabindex="-1"><a class="header-anchor" href="#how-to-disable-opening-an-app-automatically-at-login-in-mac"><span>How to disable opening an app automatically at login in Mac</span></a></h2><div class="hint-container info"><p class="hint-container-title">Guide</p><ul><li>Go to <code>System Preferences</code> &gt; <code>Users &amp; Groups</code></li><li>Navigate to <code>Login Items</code> tab and select the App that you want to remove from automatically opening during login.</li><li>Click the minus sign at the bottom.</li></ul><p>Now after restarting Mac, the app will not open automatically.</p></div><hr><h2 id="show-hidden-files-and-folders-on-mac" tabindex="-1"><a class="header-anchor" href="#show-hidden-files-and-folders-on-mac"><span>Show hidden files and folders on Mac</span></a></h2><div class="hint-container info"><p class="hint-container-title">Guide</p><p>Hidden files and folders are by default not shown on your Mac. Here are the different ways you can show hidden files and folders.</p><ul><li>On Terminal Type below</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">defaults <span class="token function">write</span> com.apple.Finder AppleShowAllFiles <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">killall</span> Finder<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>`,7)),a(p)])}const k=r(u,[["render",b],["__file","tips.html.vue"]]),_=JSON.parse('{"path":"/devops/macos/tips.html","title":"Tips","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Tips","description":"macOS > Tips","icon":"fas fa-lightbulb","category":["macOS","Tips"],"tag":["sh","bash","zsh"],"head":[[{"meta":null},{"property":"og:title","content":"macOS > Tips"},{"property":"og:description","content":"Tips"},{"property":"og:url","content":"https://chanhi2000.github.io/devops/macos/tips.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/macos/tips.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Tips"}],["meta",{"property":"og:description","content":"macOS > Tips"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"zsh"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tips\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"How to disable opening an app automatically at login in Mac","slug":"how-to-disable-opening-an-app-automatically-at-login-in-mac","link":"#how-to-disable-opening-an-app-automatically-at-login-in-mac","children":[]},{"level":2,"title":"Show hidden files and folders on Mac","slug":"show-hidden-files-and-folders-on-mac","link":"#show-hidden-files-and-folders-on-mac","children":[]}],"git":{},"readingTime":{"minutes":0.47,"words":142},"filePathRelative":"devops/macos/tips.md","excerpt":"\\n\\n<hr>\\n<h2>How to disable opening an app automatically at login in Mac</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Guide</p>\\n<ul>\\n<li>Go to <code>System Preferences</code> &gt; <code>Users &amp; Groups</code></li>\\n<li>Navigate to <code>Login Items</code> tab and select the App that you want to remove from automatically opening during login.</li>\\n<li>Click the minus sign at the bottom.</li>\\n</ul>\\n<p>Now after restarting Mac, the app will not open automatically.</p>\\n</div>"}');export{k as comp,_ as data};