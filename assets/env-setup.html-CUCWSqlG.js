import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as n,t as u,b as a,h as t,ax as d,r as p,o as m,e as l}from"./app-BOC_CZQO.js";const k={},v={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"};function h(i,s){const e=p("router-link"),o=p("TagLinks");return m(),r("div",null,[n("h1",v,[n("a",b,[n("span",null,u(i.$frontmatter.title)+" 관련",1)])]),n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#apt"},{default:t(()=>s[0]||(s[0]=[l("apt")])),_:1})]),n("li",null,[a(e,{to:"#gnome-extension-s"},{default:t(()=>s[1]||(s[1]=[l("Gnome Extension(s)")])),_:1})])])]),s[2]||(s[2]=d(`<hr><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt"><span><code>apt</code></span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># cairo setup</span></span>
<span class="line"><span class="token function">sudo</span> add-apt-repository ppa:cairo-dock-team/ppa<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># ulauncher setup</span></span>
<span class="line"><span class="token function">sudo</span> add-apt-repository ppa:agornostal/ulauncher<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment"># temurin setup</span></span>
<span class="line"><span class="token function">wget</span> <span class="token parameter variable">-O</span> - https://packages.adoptium.net/artifactory/api/gpg/key/public <span class="token operator">|</span> apt-key <span class="token function">add</span> -<span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://packages.adoptium.net/artifactory/deb <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token parameter variable">-F</span><span class="token operator">=</span> <span class="token string">&#39;/^VERSION_CODENAME/{print$2}&#39;</span> /etc/os-release<span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> /etc/apt/sources.list.d/adoptium.list<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">curl</span> ffmpeg <span class="token punctuation">\\</span> </span>
<span class="line">  <span class="token function">git</span> gpg gnome-terminal gnupg <span class="token punctuation">\\</span></span>
<span class="line">  neofetch nvm openssl rustc <span class="token function">cargo</span> <span class="token punctuation">\\</span></span>
<span class="line">  scrcpy starship scrcpysnapd tmux <span class="token punctuation">\\</span></span>
<span class="line">  watchman xz <span class="token function">wget</span> <span class="token function">zsh</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> update<span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https cairo-dock cairo-dock-plug-ins <span class="token punctuation">\\</span></span>
<span class="line">   redshift xmonad gauke ulauncher temurin-11-jdk<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># install using snapd</span></span>
<span class="line"><span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--classic</span> code sublime-text sublime-merge<span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sudo</span> snap <span class="token function">install</span> dbeaver-ce <span class="token function">docker</span> notion-snap-reborn vlc<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Add docker to user/user group</span></span>
<span class="line"><span class="token function">sudo</span> addgroup <span class="token parameter variable">--system</span> <span class="token function">docker</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sudo</span> adduser <span class="token environment constant">$USER</span> <span class="token function">docker</span><span class="token punctuation">;</span></span>
<span class="line">newgrp <span class="token function">docker</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sudo</span> snap disable <span class="token function">docker</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">sudo</span> snap <span class="token builtin class-name">enable</span> <span class="token function">docker</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># install JetBrainsMono font</span></span>
<span class="line">/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/install_manual.sh<span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># install dash-to-dock</span></span>
<span class="line"><span class="token builtin class-name">cd</span> ~/<span class="token punctuation">;</span> <span class="token function">git</span> clone https://github.com/micheleg/dash-to-dock.git<span class="token punctuation">;</span></span>
<span class="line"><span class="token function">make</span> <span class="token parameter variable">-C</span> dash-to-dock <span class="token function">install</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://jonls.dk/redshift" target="_blank" rel="noopener noreferrer">redshift</a></li><li><a href="https://xmonad.org" target="_blank" rel="noopener noreferrer">xmonad</a></li><li><a href="https://dwm.suckless.org" target="_blank" rel="noopener noreferrer">dwm</a></li><li><a href="https://github.com/Guake/guake" target="_blank" rel="noopener noreferrer">guake</a></li><li><a href="https://micheleg.github.io/dash-to-dock/download.html" target="_blank" rel="noopener noreferrer">Dash to Dock</a></li><li><a href="https://glx-dock.org" target="_blank" rel="noopener noreferrer">Cairo-Dock</a></li><li><a href="https://i3wm.org" target="_blank" rel="noopener noreferrer">i3</a></li><li><a href="https://linuxjourney.com" target="_blank" rel="noopener noreferrer">linuxJourney</a></li></ul><hr><h2 id="gnome-extension-s" tabindex="-1"><a class="header-anchor" href="#gnome-extension-s"><span>Gnome Extension(s)</span></a></h2><ul><li><a href="https://extensions.gnome.org/extension/8/places-status-indicator/" target="_blank" rel="noopener noreferrer">place-status</a></li><li><a href="https://extensions.gnome.org/extension/6/applications-menu/" target="_blank" rel="noopener noreferrer">Application-menu</a></li></ul><hr>`,8)),a(o)])}const x=c(k,[["render",h],["__file","env-setup.html.vue"]]),_=JSON.parse(`{"path":"/programming/sh/env-setup.html","title":"Environment Setup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Environment Setup","description":"Linux - Debain > Environment Setup","icon":"fas fa-toolbox","category":["Linux","Debain","Environment Setup"],"tag":["sh","bash","zsh","oh-my-zsh","ohmyzsh","apt-get","snapd","starship","ubuntu","debian","pacman","jdk","jdk11","temurin","temurin11","docker","neofetch"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/sh/env-setup.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Environment Setup"}],["meta",{"property":"og:description","content":"Linux - Debain > Environment Setup"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"zsh"}],["meta",{"property":"article:tag","content":"oh-my-zsh"}],["meta",{"property":"article:tag","content":"ohmyzsh"}],["meta",{"property":"article:tag","content":"apt-get"}],["meta",{"property":"article:tag","content":"snapd"}],["meta",{"property":"article:tag","content":"starship"}],["meta",{"property":"article:tag","content":"ubuntu"}],["meta",{"property":"article:tag","content":"debian"}],["meta",{"property":"article:tag","content":"pacman"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"jdk11"}],["meta",{"property":"article:tag","content":"temurin"}],["meta",{"property":"article:tag","content":"temurin11"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"neofetch"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Environment Setup\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"apt","slug":"apt","link":"#apt","children":[]},{"level":2,"title":"Gnome Extension(s)","slug":"gnome-extension-s","link":"#gnome-extension-s","children":[]}],"git":{},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"programming/sh/env-setup.md","excerpt":"\\n\\n<hr>\\n<h2><code>apt</code></h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre><code><span class=\\"line\\"><span class=\\"token comment\\"># cairo setup</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> add-apt-repository ppa:cairo-dock-team/ppa<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># ulauncher setup</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> add-apt-repository ppa:agornostal/ulauncher<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># temurin setup</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">wget</span> <span class=\\"token parameter variable\\">-O</span> - https://packages.adoptium.net/artifactory/api/gpg/key/public <span class=\\"token operator\\">|</span> apt-key <span class=\\"token function\\">add</span> -<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"deb https://packages.adoptium.net/artifactory/deb <span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">awk</span> <span class=\\"token parameter variable\\">-F</span><span class=\\"token operator\\">=</span> <span class=\\"token string\\">'/^VERSION_CODENAME/{print$2}'</span> /etc/os-release<span class=\\"token variable\\">)</span></span> main\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">tee</span> /etc/apt/sources.list.d/adoptium.list<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> <span class=\\"token function\\">curl</span> ffmpeg <span class=\\"token punctuation\\">\\\\</span> </span>\\n<span class=\\"line\\">  <span class=\\"token function\\">git</span> gpg gnome-terminal gnupg <span class=\\"token punctuation\\">\\\\</span></span>\\n<span class=\\"line\\">  neofetch nvm openssl rustc <span class=\\"token function\\">cargo</span> <span class=\\"token punctuation\\">\\\\</span></span>\\n<span class=\\"line\\">  scrcpy starship scrcpysnapd tmux <span class=\\"token punctuation\\">\\\\</span></span>\\n<span class=\\"line\\">  watchman xz <span class=\\"token function\\">wget</span> <span class=\\"token function\\">zsh</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> update<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> <span class=\\"token function\\">apt-get</span> <span class=\\"token function\\">install</span> apt-transport-https cairo-dock cairo-dock-plug-ins <span class=\\"token punctuation\\">\\\\</span></span>\\n<span class=\\"line\\">   redshift xmonad gauke ulauncher temurin-11-jdk<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># install using snapd</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> snap <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">--classic</span> code sublime-text sublime-merge<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> snap <span class=\\"token function\\">install</span> dbeaver-ce <span class=\\"token function\\">docker</span> notion-snap-reborn vlc<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># Add docker to user/user group</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> addgroup <span class=\\"token parameter variable\\">--system</span> <span class=\\"token function\\">docker</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> adduser <span class=\\"token environment constant\\">$USER</span> <span class=\\"token function\\">docker</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">newgrp <span class=\\"token function\\">docker</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> snap disable <span class=\\"token function\\">docker</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">sudo</span> snap <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token function\\">docker</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># install JetBrainsMono font</span></span>\\n<span class=\\"line\\">/bin/bash <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/install_manual.sh<span class=\\"token variable\\">)</span></span>\\"</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># install dash-to-dock</span></span>\\n<span class=\\"line\\"><span class=\\"token builtin class-name\\">cd</span> ~/<span class=\\"token punctuation\\">;</span> <span class=\\"token function\\">git</span> clone https://github.com/micheleg/dash-to-dock.git<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">make</span> <span class=\\"token parameter variable\\">-C</span> dash-to-dock <span class=\\"token function\\">install</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{x as comp,_ as data};
