import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as n,at as m,b as a,t as d,w as l,r as i,o as u,e as t}from"./app-6nZ4Bu4J.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},k={class:"header-anchor",href:"#frontmatter-title-관련"},h={class:"table-of-contents"};function g(p,s){const e=i("router-link"),o=i("TagLinks");return u(),r("div",null,[n("h1",b,[n("a",k,[n("span",null,d(p.$frontmatter.title)+" 관련",1)])]),n("nav",h,[n("ul",null,[n("li",null,[a(e,{to:"#a-install-package-s"},{default:l(()=>s[0]||(s[0]=[t("A. Install Package(s)")])),_:1})]),n("li",null,[a(e,{to:"#c-oh-my-zsh"},{default:l(()=>s[1]||(s[1]=[t("C. Oh-My-Zsh")])),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#c1-guide"},{default:l(()=>s[2]||(s[2]=[t("C1. Guide")])),_:1})]),n("li",null,[a(e,{to:"#c2-configure"},{default:l(()=>s[3]||(s[3]=[t("C2. Configure")])),_:1})])])])])]),s[4]||(s[4]=m(`<hr><h2 id="a-install-package-s" tabindex="-1"><a class="header-anchor" href="#a-install-package-s"><span>A. Install Package(s)</span></a></h2><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># enable</span></span>
<span class="line">dnf copr <span class="token builtin class-name">enable</span> gvalkov/vicinae</span>
<span class="line"></span>
<span class="line"><span class="token comment"># install</span></span>
<span class="line">dnf <span class="token function">install</span> vicinae</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="c-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#c-oh-my-zsh"><span>C. Oh-My-Zsh</span></a></h2><div class="hint-container note"><p class="hint-container-title">Prerequesite(s)</p><ul><li><code>terminal</code></li><li><code>zsh</code></li></ul></div><h3 id="c1-guide" tabindex="-1"><a class="header-anchor" href="#c1-guide"><span>C1. Guide</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># Install oh-my-zsh</span></span>
<span class="line"><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">## zsh-autosuggestion plugin</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">## zsh-syntax-highlighting</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install Starship.sh</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://starship.rs/install.sh <span class="token operator">|</span> <span class="token function">sh</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.config <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> ~/.config/starship.toml<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c2-configure" tabindex="-1"><a class="header-anchor" href="#c2-configure"><span>C2. Configure</span></a></h3><h4 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh"><span>ZSH</span></a></h4><div class="code-block-with-title"><div class="code-block-title-bar" data-title=".zshrc"><span>.zshrc</span></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># If you come from bash you might have to change your $PATH.</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/bin:<span class="token environment constant">$HOME</span>/.rd/bin:<span class="token environment constant">$HOME</span>/.local/bin:/usr/local/bin:/opt/homebrew/bin:/opt/hombrew/opt/nvm:/opt/homebrew/opt/openvpn/sbin:<span class="token environment constant">$PATH</span></span>
<span class="line"><span class="token comment"># for Rancher Desktop</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_HOST</span><span class="token operator">=</span>unix:///var/run/docker.sock</span>
<span class="line"><span class="token comment"># for Ghostty</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GHOSTTY_CONFIG</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/Library/Application\\ Support/com.mitchellh.ghostty/config&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Path to your oh-my-zsh installation.</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">ZSH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.oh-my-zsh&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Set name of the theme to load --- if set to &quot;random&quot;, it will</span></span>
<span class="line"><span class="token comment"># load a random theme each time oh-my-zsh is loaded, in which case,</span></span>
<span class="line"><span class="token comment"># to know which specific one was loaded, run: echo $RANDOM_THEME</span></span>
<span class="line"><span class="token comment"># See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</span></span>
<span class="line"><span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;agnoster&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Set list of themes to pick from when loading at random</span></span>
<span class="line"><span class="token comment"># Setting this variable when ZSH_THEME=random will cause zsh to load</span></span>
<span class="line"><span class="token comment"># a theme from this variable instead of looking in $ZSH/themes/</span></span>
<span class="line"><span class="token comment"># If set to an empty array, this variable will have no effect.</span></span>
<span class="line"><span class="token comment"># ZSH_THEME_RANDOM_CANDIDATES=( &quot;robbyrussell&quot; &quot;agnoster&quot; )</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to use case-sensitive completion.</span></span>
<span class="line"><span class="token comment"># CASE_SENSITIVE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to use hyphen-insensitive completion.</span></span>
<span class="line"><span class="token comment"># Case-sensitive completion must be off. _ and - will be interchangeable.</span></span>
<span class="line"><span class="token comment"># HYPHEN_INSENSITIVE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment one of the following lines to change the auto-update behavior</span></span>
<span class="line"><span class="token comment"># zstyle &#39;:omz:update&#39; mode disabled  # disable automatic updates</span></span>
<span class="line"><span class="token comment"># zstyle &#39;:omz:update&#39; mode auto      # update automatically without asking</span></span>
<span class="line"><span class="token comment"># zstyle &#39;:omz:update&#39; mode reminder  # just remind me to update when it&#39;s time</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to change how often to auto-update (in days).</span></span>
<span class="line"><span class="token comment"># zstyle &#39;:omz:update&#39; frequency 13</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line if pasting URLs and other text is messed up.</span></span>
<span class="line"><span class="token comment"># DISABLE_MAGIC_FUNCTIONS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to disable colors in ls.</span></span>
<span class="line"><span class="token comment"># DISABLE_LS_COLORS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to disable auto-setting terminal title.</span></span>
<span class="line"><span class="token comment"># DISABLE_AUTO_TITLE=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to enable command auto-correction.</span></span>
<span class="line"><span class="token comment"># ENABLE_CORRECTION=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line to display red dots whilst waiting for completion.</span></span>
<span class="line"><span class="token comment"># You can also set it to another string to have that shown instead of the default red dots.</span></span>
<span class="line"><span class="token comment"># e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting…%f&quot;</span></span>
<span class="line"><span class="token comment"># Caution: this setting can cause issues with multiline prompts in zsh &lt; 5.7.1 (see #5765)</span></span>
<span class="line"><span class="token comment"># COMPLETION_WAITING_DOTS=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line if you want to disable marking untracked files</span></span>
<span class="line"><span class="token comment"># under VCS as dirty. This makes repository status check for large repositories</span></span>
<span class="line"><span class="token comment"># much, much faster.</span></span>
<span class="line"><span class="token comment"># DISABLE_UNTRACKED_FILES_DIRTY=&quot;true&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Uncomment the following line if you want to change the command execution time</span></span>
<span class="line"><span class="token comment"># stamp shown in the history command output.</span></span>
<span class="line"><span class="token comment"># You can set one of the optional three formats:</span></span>
<span class="line"><span class="token comment"># &quot;mm/dd/yyyy&quot;|&quot;dd.mm.yyyy&quot;|&quot;yyyy-mm-dd&quot;</span></span>
<span class="line"><span class="token comment"># or set a custom format using the strftime function format specifications,</span></span>
<span class="line"><span class="token comment"># see &#39;man strftime&#39; for details.</span></span>
<span class="line"><span class="token comment"># HIST_STAMPS=&quot;mm/dd/yyyy&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Would you like to use another custom folder than $ZSH/custom?</span></span>
<span class="line"><span class="token comment"># ZSH_CUSTOM=/path/to/new-custom-folder</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Which plugins would you like to load?</span></span>
<span class="line"><span class="token comment"># Standard plugins can be found in $ZSH/plugins/</span></span>
<span class="line"><span class="token comment"># Custom plugins may be added to $ZSH_CUSTOM/plugins/</span></span>
<span class="line"><span class="token comment"># Example format: plugins=(rails git textmate ruby lighthouse)</span></span>
<span class="line"><span class="token comment"># Add wisely, as too many plugins slow down shell startup.</span></span>
<span class="line"><span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token function">git</span></span>
<span class="line">  autojump</span>
<span class="line">  poetry</span>
<span class="line">  zsh-autosuggestions</span>
<span class="line">  zsh-syntax-highlighting</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># User configuration</span></span>
<span class="line"><span class="token comment"># export MANPATH=&quot;/usr/local/man:$MANPATH&quot;</span></span>
<span class="line"><span class="token comment"># You may need to manually set your language environment</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Preferred editor for local and remote sessions</span></span>
<span class="line"><span class="token comment"># if [[ -n $SSH_CONNECTION ]]; then</span></span>
<span class="line"><span class="token comment">#   export EDITOR=&#39;vim&#39;</span></span>
<span class="line"><span class="token comment"># else</span></span>
<span class="line"><span class="token comment">#   export EDITOR=&#39;mvim&#39;</span></span>
<span class="line"><span class="token comment"># fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Compilation flags</span></span>
<span class="line"><span class="token comment"># export ARCHFLAGS=&quot;-arch x86_64&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Set personal aliases, overriding those provided by oh-my-zsh libs,</span></span>
<span class="line"><span class="token comment"># plugins, and themes. Aliases can be placed here, though oh-my-zsh</span></span>
<span class="line"><span class="token comment"># users are encouraged to define aliases within the ZSH_CUSTOM folder.</span></span>
<span class="line"><span class="token comment"># For a full list of active aliases, run \`alias\`.</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Example aliases</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">zshconf</span><span class="token operator">=</span><span class="token string">&quot;vi ~/.zshrc&quot;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">zshset</span><span class="token operator">=</span>source ~/.zshrc</span>
<span class="line"><span class="token comment"># alias ohmyzsh=&quot;mate ~/.oh-my-zsh&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Configure NVM</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span>  <span class="token comment"># This loads nvm</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span>  <span class="token comment"># This loads nvm bash_completion</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span>--openssl-legacy-provider <span class="token parameter variable">--max_old_space_size</span><span class="token operator">=</span><span class="token number">16384</span></span>
<span class="line"><span class="token comment"># 18이상일 경우</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># My alias</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># m3u8Get $1 $2 </span></span>
<span class="line"><span class="token comment"># $1: m3u8 file to download from</span></span>
<span class="line"><span class="token comment"># $2: output file name</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">m3u8Get</span><span class="token operator">=</span><span class="token string">&#39;f(){ ffmpeg -protocol_whitelist https,tls,tcp -allowed_extensions ALL -i $1 -bsf:a aac_adtstoasc -c copy $2; unset -f f; }; f&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">startKVM</span><span class="token operator">=</span><span class="token string">&#39;brew services start libvirt&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">stopKVM</span><span class="token operator">=</span><span class="token string">&#39;brew services stop libvirt&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> ghostty-config<span class="token operator">=</span><span class="token string">&quot;vi <span class="token variable">$GHOSTTY_CONFIG</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token function-name function">lg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin class-name">export</span> <span class="token assign-left variable">LAZYGIT_NEW_DIR_FILE</span><span class="token operator">=~</span>/.lazygit/newdir</span>
<span class="line"></span>
<span class="line">  lazygit <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token variable">$LAZYGIT_NEW_DIR_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $LAZYGIT_NEW_DIR_FILE<span class="token variable">)</span></span>&quot;</span></span>
<span class="line">    <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">$LAZYGIT_NEW_DIR_FILE</span> <span class="token operator">&gt;</span> /dev/null</span>
<span class="line">  <span class="token keyword">fi</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function-name function">ld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  ld <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment"># Configure Dev</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">PATH_DEV</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/<span class="token punctuation">..</span>/Shared/development</span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">cdd</span><span class="token operator">=</span><span class="token string">&#39;cd $PATH_DEV&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">cddi</span><span class="token operator">=</span><span class="token string">&#39;cd $PATH_DEV/ititcloud&#39;</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">cddc</span><span class="token operator">=</span><span class="token string">&#39;cd $PATH_DEV/chanhi2000&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># launch starship.sh</span></span>
<span class="line"><span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>starship init <span class="token function">zsh</span><span class="token variable">)</span></span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># launch fastfetch</span></span>
<span class="line">fastfetch</span>
<span class="line"></span>
<span class="line"><span class="token comment">### RANCHER DESKTOP</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:/Users/chlee/.rd/bin&quot;</span></span>
<span class="line"><span class="token comment">### pipx</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:/Users/chlee/.local/bin&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr>`,13)),a(o)])}const _=c(v,[["render",g]]),q=JSON.parse('{"path":"/devops/linux-fedora/env-setup.html","title":"Environment Setup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Environment Setup","description":"Linux - Fedora > Environment Setup","icon":"fas fa-toolbox","category":["Linux","Fedora","Environment Setup"],"tag":["linux","redhat","centos","yum","sh","bash","zsh","oh-my-zsh","ohmyzsh","apt-get","starship","pacman","jdk","jdk11","temurin","temurin11","docker","neofetch"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Environment Setup\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/linux-fedora/env-setup.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Environment Setup"}],["meta",{"property":"og:description","content":"Linux - Fedora > Environment Setup"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"neofetch"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"temurin11"}],["meta",{"property":"article:tag","content":"temurin"}],["meta",{"property":"article:tag","content":"jdk11"}],["meta",{"property":"article:tag","content":"jdk"}],["meta",{"property":"article:tag","content":"pacman"}],["meta",{"property":"article:tag","content":"starship"}],["meta",{"property":"article:tag","content":"apt-get"}],["meta",{"property":"article:tag","content":"ohmyzsh"}],["meta",{"property":"article:tag","content":"oh-my-zsh"}],["meta",{"property":"article:tag","content":"zsh"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"yum"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:tag","content":"redhat"}],["meta",{"property":"article:tag","content":"linux"}],[{"meta":null},{"property":"og:title","content":"Linux - Fedora > Environment Setup"},{"property":"og:description","content":"Environment Setup"},{"property":"og:url","content":"https://chanhi2000.github.io/devops/linux-fedora/env-setup.html"}]]},"git":{},"readingTime":{"minutes":3,"words":900},"filePathRelative":"devops/linux-fedora/env-setup.md"}');export{_ as comp,q as data};
