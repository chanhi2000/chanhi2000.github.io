import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as u,b as n,t as m,a as s,w as i,e as a,d as o}from"./app-B2dKc-qM.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},f=o(`<hr><h2 id="a-homebrew" tabindex="-1"><a class="header-anchor" href="#a-homebrew"><span>A. Homebrew</span></a></h2><h3 id="a1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#a1-prerequesite-s"><span>A1. Prerequesite(s)</span></a></h3><ul><li><code>terminal</code></li></ul><h3 id="a2-guide" tabindex="-1"><a class="header-anchor" href="#a2-guide"><span>A2. Guide</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="a3-configure" tabindex="-1"><a class="header-anchor" href="#a3-configure"><span>A3. Configure</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Install taps</span>
brew tap homebrew/cask-versions<span class="token punctuation">;</span>
brew tap homebrew/cask-fonts<span class="token punctuation">;</span>
brew tap oven-sh/bun<span class="token punctuation">;</span> <span class="token comment"># for macOS and Linux</span>

<span class="token comment"># Install formula</span>
brew <span class="token function">install</span> autojump amazon-ecs-cli awscli bat bat-extras bun bison <span class="token punctuation">\\</span>
  cheat cocoapods exiftool ffmpeg fizz flac <span class="token function">git</span> <span class="token punctuation">\\</span>
  hyperfine mas neofetch nvm openssl pixman <span class="token punctuation">\\</span>
  python rust scrcpy starship tmux tokei watchman <span class="token punctuation">\\</span>
  <span class="token function">wget</span> xz <span class="token function">zsh</span><span class="token punctuation">;</span>

<span class="token comment"># Install cask(s)</span>
brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> airflow alt-tab appcleaner cheatsheet  <span class="token punctuation">\\</span>
  dbeaver-community <span class="token function">docker</span> eul flipper font-jetbrains-mono <span class="token punctuation">\\</span>
  google-chrome grandperspective iina intellij-idea-ce notion <span class="token punctuation">\\</span>
  opencore-patcher oversight pennywise raycast resilio-sync <span class="token punctuation">\\</span>
  sf-symbols shottr spectacle sublime-merge sublime-text <span class="token punctuation">\\</span>
  the-unarchiver taskexplorer temurin11 transmission visual-studio-code <span class="token punctuation">\\</span>
  vlc wireshark<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="b-apps-from-app-store" tabindex="-1"><a class="header-anchor" href="#b-apps-from-app-store"><span>B. Apps from App Store</span></a></h2><h3 id="b1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#b1-prerequesite-s"><span>B1. Prerequesite(s)</span></a></h3><ul><li><code>App Store</code></li><li><code>mas</code></li></ul><h3 id="b2-guide" tabindex="-1"><a class="header-anchor" href="#b2-guide"><span>B2. Guide</span></a></h3><p>Install the following(s)</p>`,16),g={href:"https://apps.apple.com/us/app/xcode/id497799835",target:"_blank",rel:"noopener noreferrer"},y={href:"https://apps.apple.com/us/app/one-thing/id1604176982",target:"_blank",rel:"noopener noreferrer"},w={href:"https://apps.apple.com/us/app/particulars/id885120167",target:"_blank",rel:"noopener noreferrer"},_={href:"https://apps.apple.com/us/app/hidden-bar/id1452453066",target:"_blank",rel:"noopener noreferrer"},S={href:"https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960",target:"_blank",rel:"noopener noreferrer"},q={href:"https://apps.apple.com/us/app/cheetah-vmm/id1612199418",target:"_blank",rel:"noopener noreferrer"},A=o(`<h3 id="b3-use-mas-to-install" tabindex="-1"><a class="header-anchor" href="#b3-use-mas-to-install"><span>B3. Use <code>mas</code> to install</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 497799835: XCode</span>
<span class="token comment"># 1604176982: One Thing</span>
<span class="token comment"># 885120167: Particulars</span>
<span class="token comment"># 1452453066: Hidden Bar</span>
<span class="token comment"># 595191960: Copy Clip</span>
<span class="token comment"># 1612199418: Cheetah - Virtual Machines</span>
mas <span class="token function">install</span> <span class="token number">497799835</span> <span class="token punctuation">\\</span>
    <span class="token number">1604176982</span> <span class="token punctuation">\\</span>
    <span class="token number">885120167</span> <span class="token punctuation">\\</span>
    <span class="token number">1452453066</span> <span class="token punctuation">\\</span>
    <span class="token number">595191960</span> <span class="token punctuation">\\</span>
    <span class="token number">1612199418</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="c-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#c-oh-my-zsh"><span>C. Oh-My-Zsh</span></a></h2><h3 id="c1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#c1-prerequesite-s"><span>C1. Prerequesite(s)</span></a></h3><ul><li><code>terminal</code></li><li><code>zsh</code></li></ul><h3 id="c2-guide" tabindex="-1"><a class="header-anchor" href="#c2-guide"><span>C2. Guide</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Install oh-my-zsh</span>
<span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span><span class="token punctuation">;</span>
<span class="token comment">## zsh-autosuggestion plugin</span>
<span class="token function">git</span> clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-autosuggestions<span class="token punctuation">;</span>
<span class="token comment">## zsh-syntax-highlighting</span>
<span class="token function">git</span> clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM<span class="token operator">:-</span>~<span class="token operator">/</span>.oh-my-zsh<span class="token operator">/</span>custom}</span>/plugins/zsh-syntax-highlighting<span class="token punctuation">;</span>

<span class="token comment"># Install Starship.sh</span>
<span class="token function">curl</span> <span class="token parameter variable">-sS</span> https://starship.rs/install.sh <span class="token operator">|</span> <span class="token function">sh</span><span class="token punctuation">;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.config <span class="token operator">&amp;&amp;</span> <span class="token function">touch</span> ~/.config/starship.toml<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="c3-configure" tabindex="-1"><a class="header-anchor" href="#c3-configure"><span>C3. Configure</span></a></h3><h4 id="c3-i-zshrc" tabindex="-1"><a class="header-anchor" href="#c3-i-zshrc"><span>C3-i. <code>~/.zshrc</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># If you come from bash you might have to change your $PATH.</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/bin:/usr/local/bin:/opt/homebrew/bin:/opt/hombrew/opt/nvm:<span class="token environment constant">$PATH</span>

<span class="token comment"># Path to your oh-my-zsh installation.</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZSH</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.oh-my-zsh&quot;</span>

<span class="token comment"># Set name of the theme to load --- if set to &quot;random&quot;, it will</span>
<span class="token comment"># load a random theme each time oh-my-zsh is loaded, in which case,</span>
<span class="token comment"># to know which specific one was loaded, run: echo $RANDOM_THEME</span>
<span class="token comment"># See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes</span>
<span class="token assign-left variable">ZSH_THEME</span><span class="token operator">=</span><span class="token string">&quot;agnoster&quot;</span>

<span class="token comment"># Set list of themes to pick from when loading at random</span>
<span class="token comment"># Setting this variable when ZSH_THEME=random will cause zsh to load</span>
<span class="token comment"># a theme from this variable instead of looking in $ZSH/themes/</span>
<span class="token comment"># If set to an empty array, this variable will have no effect.</span>
<span class="token comment"># ZSH_THEME_RANDOM_CANDIDATES=( &quot;robbyrussell&quot; &quot;agnoster&quot; )</span>

<span class="token comment"># Uncomment the following line to use case-sensitive completion.</span>
<span class="token comment"># CASE_SENSITIVE=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line to use hyphen-insensitive completion.</span>
<span class="token comment"># Case-sensitive completion must be off. _ and - will be interchangeable.</span>
<span class="token comment"># HYPHEN_INSENSITIVE=&quot;true&quot;</span>

<span class="token comment"># Uncomment one of the following lines to change the auto-update behavior</span>
<span class="token comment"># zstyle &#39;:omz:update&#39; mode disabled  # disable automatic updates</span>
<span class="token comment"># zstyle &#39;:omz:update&#39; mode auto      # update automatically without asking</span>
<span class="token comment"># zstyle &#39;:omz:update&#39; mode reminder  # just remind me to update when it&#39;s time</span>

<span class="token comment"># Uncomment the following line to change how often to auto-update (in days).</span>
<span class="token comment"># zstyle &#39;:omz:update&#39; frequency 13</span>

<span class="token comment"># Uncomment the following line if pasting URLs and other text is messed up.</span>
<span class="token comment"># DISABLE_MAGIC_FUNCTIONS=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line to disable colors in ls.</span>
<span class="token comment"># DISABLE_LS_COLORS=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line to disable auto-setting terminal title.</span>
<span class="token comment"># DISABLE_AUTO_TITLE=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line to enable command auto-correction.</span>
<span class="token comment"># ENABLE_CORRECTION=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line to display red dots whilst waiting for completion.</span>
<span class="token comment"># You can also set it to another string to have that shown instead of the default red dots.</span>
<span class="token comment"># e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting...%f&quot;</span>
<span class="token comment"># Caution: this setting can cause issues with multiline prompts in zsh &lt; 5.7.1 (see #5765)</span>
<span class="token comment"># COMPLETION_WAITING_DOTS=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line if you want to disable marking untracked files</span>
<span class="token comment"># under VCS as dirty. This makes repository status check for large repositories</span>
<span class="token comment"># much, much faster.</span>
<span class="token comment"># DISABLE_UNTRACKED_FILES_DIRTY=&quot;true&quot;</span>

<span class="token comment"># Uncomment the following line if you want to change the command execution time</span>
<span class="token comment"># stamp shown in the history command output.</span>
<span class="token comment"># You can set one of the optional three formats:</span>
<span class="token comment"># &quot;mm/dd/yyyy&quot;|&quot;dd.mm.yyyy&quot;|&quot;yyyy-mm-dd&quot;</span>
<span class="token comment"># or set a custom format using the strftime function format specifications,</span>
<span class="token comment"># see &#39;man strftime&#39; for details.</span>
<span class="token comment"># HIST_STAMPS=&quot;mm/dd/yyyy&quot;</span>

<span class="token comment"># Would you like to use another custom folder than $ZSH/custom?</span>
<span class="token comment"># ZSH_CUSTOM=/path/to/new-custom-folder</span>

<span class="token comment"># Which plugins would you like to load?</span>
<span class="token comment"># Standard plugins can be found in $ZSH/plugins/</span>
<span class="token comment"># Custom plugins may be added to $ZSH_CUSTOM/plugins/</span>
<span class="token comment"># Example format: plugins=(rails git textmate ruby lighthouse)</span>
<span class="token comment"># Add wisely, as too many plugins slow down shell startup.</span>
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
  <span class="token function">git</span>
  autojump
  zsh-autosuggestions
  zsh-syntax-highlighting
<span class="token punctuation">)</span>

<span class="token builtin class-name">source</span> <span class="token variable">$ZSH</span>/oh-my-zsh.sh

<span class="token comment"># User configuration</span>

<span class="token comment"># export MANPATH=&quot;/usr/local/man:$MANPATH&quot;</span>

<span class="token comment"># You may need to manually set your language environment</span>
<span class="token comment"># export LANG=en_US.UTF-8</span>

<span class="token comment"># Preferred editor for local and remote sessions</span>
<span class="token comment"># if [[ -n $SSH_CONNECTION ]]; then</span>
<span class="token comment">#   export EDITOR=&#39;vim&#39;</span>
<span class="token comment"># else</span>
<span class="token comment">#   export EDITOR=&#39;mvim&#39;</span>
<span class="token comment"># fi</span>

<span class="token comment"># Compilation flags</span>
<span class="token comment"># export ARCHFLAGS=&quot;-arch x86_64&quot;</span>

<span class="token comment"># Set personal aliases, overriding those provided by oh-my-zsh libs,</span>
<span class="token comment"># plugins, and themes. Aliases can be placed here, though oh-my-zsh</span>
<span class="token comment"># users are encouraged to define aliases within the ZSH_CUSTOM folder.</span>
<span class="token comment"># For a full list of active aliases, run \`alias\`.</span>
<span class="token comment">#</span>
<span class="token comment"># Example aliases</span>
<span class="token comment"># alias zshconfig=&quot;mate ~/.zshrc&quot;</span>
<span class="token comment"># alias ohmyzsh=&quot;mate ~/.oh-my-zsh&quot;</span>

<span class="token comment"># Configure NVM</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NVM_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.nvm&quot;</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/nvm.sh&quot;</span>  <span class="token comment"># This loads nvm</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm&quot;</span>  <span class="token comment"># This loads nvm bash_completion</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span>--openssl-legacy-provider <span class="token comment"># 18이상일 경우</span>

<span class="token comment"># My alias</span>
<span class="token comment">#</span>
<span class="token comment"># m3u8Get $1 $2 </span>
<span class="token comment"># $1: m3u8 file to download from</span>
<span class="token comment"># $2: output file name</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">m3u8Get</span><span class="token operator">=</span><span class="token string">&#39;f(){ ffmpeg -protocol_whitelist https,tls,tcp -allowed_exte    nsions ALL -i $1 -bsf:a aac_adtstoasc -c copy $2; unset -f f; }; f&#39;</span>

<span class="token comment"># launch starship.sh</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>starship init <span class="token function">zsh</span><span class="token variable">)</span></span>&quot;</span>

<span class="token comment"># launch neofetch</span>
neofetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c3-ii-config-starship-toml" tabindex="-1"><a class="header-anchor" href="#c3-ii-config-starship-toml"><span>C3-ii. <code>~/.config/starship.toml</code></span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>add_newline = true

<span class="token punctuation">[</span>battery<span class="token punctuation">]</span>
full_symbol = &quot;🔋 &quot;
charging_symbol = &quot;⚡️ &quot;
discharging_symbol = &quot;💀 &quot;

<span class="token punctuation">[</span><span class="token punctuation">[</span>battery.display<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># &quot;bold red&quot; style and discharging_symbol when capacity is between 0% and 10%</span>
threshold = 10
style = &quot;bold red&quot;

<span class="token punctuation">[</span><span class="token punctuation">[</span>battery.display<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># &quot;bold yellow&quot; style and 💦 symbol when capacity is between 10% and 30%</span>
threshold = 30
style = &quot;bold yellow&quot;
discharging_symbol = &quot;💦&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="e-last-setup" tabindex="-1"><a class="header-anchor" href="#e-last-setup"><span>E. Last Setup</span></a></h2><h3 id="configure" tabindex="-1"><a class="header-anchor" href="#configure"><span>Configure</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### Disable Animation ###</span>
<span class="token comment">## Disable animations when opening and closing windows.</span>
defaults <span class="token function">write</span> NSGlobalDomain NSAutomaticWindowAnimationsEnabled <span class="token parameter variable">-bool</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">#defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool true;</span>

<span class="token comment">## Disable animations when opening a Quick Look window.</span>
defaults <span class="token function">write</span> <span class="token parameter variable">-g</span> QLPanelAnimationDuration <span class="token parameter variable">-float</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment">#defaults delete -g QLPanelAnimationDuration</span>

<span class="token comment">## Accelerated playback when adjusting the window size (Cocoa applications).</span>
defaults <span class="token function">write</span> NSGlobalDomain NSWindowResizeTime <span class="token parameter variable">-float</span> <span class="token number">0.001</span><span class="token punctuation">;</span>
<span class="token comment">#defaults write NSGlobalDomain NSWindowResizeTime -float 0.2;</span>

<span class="token comment">## Disable animation when opening the Info window in Finder (cmd⌘ + i).</span>
defaults <span class="token function">write</span> com.apple.finder DisableAllAnimations <span class="token parameter variable">-bool</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">#defaults write com.apple.finder DisableAllAnimations -bool false;</span>

<span class="token comment">## Disable animations when you open an application from the Dock.</span>
defaults <span class="token function">write</span> com.apple.dock launchanim <span class="token parameter variable">-bool</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">#defaults write com.apple.dock launchanim -bool true;</span>

<span class="token comment">## Make all animations faster that are used by Mission Control.</span>
defaults <span class="token function">write</span> com.apple.dock expose-animation-duration <span class="token parameter variable">-float</span> <span class="token number">0.1</span><span class="token punctuation">;</span>

<span class="token comment">## Disable the delay when you hide the Dock</span>
defaults <span class="token function">write</span> com.apple.Dock autohide-delay <span class="token parameter variable">-float</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">### Mail ###</span>
<span class="token comment">## Disable the animation when you sending and replying an e-mail</span>
defaults <span class="token function">write</span> com.apple.mail DisableReplyAnimations <span class="token parameter variable">-bool</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
defaults <span class="token function">write</span> com.apple.mail DisableSendAnimations <span class="token parameter variable">-bool</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">## Disable the standard delay in rendering a Web page.</span>
defaults <span class="token function">write</span> com.apple.Safari WebKitInitialTimedLayoutDelay <span class="token number">0.25</span><span class="token punctuation">;</span>


<span class="token comment">### Disable TimeMachine ###</span>
<span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token assign-left variable">debug.lowpri_throttle_enabled</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token comment"># sudo sysctl debug.lowpri_throttle_enabled=1;</span>


<span class="token comment">### Disable Spotlight search index ###</span>
<span class="token function">sudo</span> mdutil <span class="token parameter variable">-a</span> <span class="token parameter variable">-i</span> off<span class="token punctuation">;</span>

<span class="token comment">### Finder ###</span>
<span class="token comment">## Show hidden files ALWAYS</span>
defaults <span class="token function">write</span> com.apple.finder AppleShowAllFiles TRUE<span class="token punctuation">;</span>
<span class="token comment">## Display Files’ directory in the title bar</span>
defaults <span class="token function">write</span> com.apple.finder _FXShowPosixPathInTitle <span class="token parameter variable">-bool</span> YES<span class="token punctuation">;</span>
<span class="token function">killall</span> Finder<span class="token punctuation">;</span>

<span class="token comment">### Recent Files ###</span>
<span class="token comment">## Google Chrome</span>
defaults <span class="token function">write</span> com.google.keystone.agent checkinterval <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">## VLC</span>
defaults delete org.videolan.vlc.LSSharedFileList RecentDocuments<span class="token punctuation">;</span>
defaults <span class="token function">write</span> org.videolan.vlc NSRecentDocumentsLimit <span class="token number">0</span><span class="token punctuation">;</span>
defaults <span class="token function">write</span> org.videolan.vlc.LSSharedFileList RecentDocuments -dict-add MaxAmount <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">## QuickTime</span>
defaults delete com.apple.QuickTimePlayerX.LSSharedFileList RecentDocuments<span class="token punctuation">;</span>
defaults <span class="token function">write</span> com.apple.QuickTimePlayerX NSRecentDocumentsLimit <span class="token number">0</span><span class="token punctuation">;</span>
defaults <span class="token function">write</span> com.apple.QuickTimePlayerX.LSSharedFileList RecentDocuments -dict-add MaxAmount <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">killall</span> dock<span class="token punctuation">;</span>

<span class="token comment">### Change Screenshot Location ###</span>
defaults <span class="token function">write</span> com.apple.screencapture location ~/<span class="token punctuation">..</span>/Shared/Screenshots<span class="token punctuation">;</span>
<span class="token function">killall</span> SystemUIServer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,19);function x(c,C){const e=l("router-link"),t=l("ExternalLinkIcon"),p=l("TagLinks");return d(),u("div",null,[n("h1",b,[n("a",h,[n("span",null,m(c.$frontmatter.title)+" 관련",1)])]),n("nav",k,[n("ul",null,[n("li",null,[s(e,{to:"#a-homebrew"},{default:i(()=>[a("A. Homebrew")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#a1-prerequesite-s"},{default:i(()=>[a("A1. Prerequesite(s)")]),_:1})]),n("li",null,[s(e,{to:"#a2-guide"},{default:i(()=>[a("A2. Guide")]),_:1})]),n("li",null,[s(e,{to:"#a3-configure"},{default:i(()=>[a("A3. Configure")]),_:1})])])]),n("li",null,[s(e,{to:"#b-apps-from-app-store"},{default:i(()=>[a("B. Apps from App Store")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#b1-prerequesite-s"},{default:i(()=>[a("B1. Prerequesite(s)")]),_:1})]),n("li",null,[s(e,{to:"#b2-guide"},{default:i(()=>[a("B2. Guide")]),_:1})]),n("li",null,[s(e,{to:"#b3-use-mas-to-install"},{default:i(()=>[a("B3. Use mas to install")]),_:1})])])]),n("li",null,[s(e,{to:"#c-oh-my-zsh"},{default:i(()=>[a("C. Oh-My-Zsh")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#c1-prerequesite-s"},{default:i(()=>[a("C1. Prerequesite(s)")]),_:1})]),n("li",null,[s(e,{to:"#c2-guide"},{default:i(()=>[a("C2. Guide")]),_:1})]),n("li",null,[s(e,{to:"#c3-configure"},{default:i(()=>[a("C3. Configure")]),_:1})])])]),n("li",null,[s(e,{to:"#e-last-setup"},{default:i(()=>[a("E. Last Setup")]),_:1}),n("ul",null,[n("li",null,[s(e,{to:"#configure"},{default:i(()=>[a("Configure")]),_:1})])])])])]),f,n("ul",null,[n("li",null,[n("a",g,[a("XCode"),s(t)])]),n("li",null,[n("a",y,[a("One Thing"),s(t)])]),n("li",null,[n("a",w,[a("Particulars"),s(t)])]),n("li",null,[n("a",_,[a("Hidden Bar"),s(t)])]),n("li",null,[n("a",S,[a("Copy Clip"),s(t)])]),n("li",null,[n("a",q,[a("Cheetah - Virtual Machines"),s(t)])])]),A,s(p)])}const E=r(v,[["render",x],["__file","env-setup.html.vue"]]),D=JSON.parse('{"path":"/g4e/devops-os-mac/env-setup.html","title":"Environment Setup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Environment Setup","description":"macOS > Environment Setup","icon":"fas fa-toolbox","category":["macOS","Environment Setup"],"tag":["sh","bash","zsh","oh-my-zsh","ohmyzsh","homebrew","pacman","starship","dracula","dracula-theme","draculatheme","jdk","jdk11","temurin","temurin11","docker","neofetch"]},"headers":[{"level":2,"title":"A. Homebrew","slug":"a-homebrew","link":"#a-homebrew","children":[{"level":3,"title":"A1. Prerequesite(s)","slug":"a1-prerequesite-s","link":"#a1-prerequesite-s","children":[]},{"level":3,"title":"A2. Guide","slug":"a2-guide","link":"#a2-guide","children":[]},{"level":3,"title":"A3. Configure","slug":"a3-configure","link":"#a3-configure","children":[]}]},{"level":2,"title":"B. Apps from App Store","slug":"b-apps-from-app-store","link":"#b-apps-from-app-store","children":[{"level":3,"title":"B1. Prerequesite(s)","slug":"b1-prerequesite-s","link":"#b1-prerequesite-s","children":[]},{"level":3,"title":"B2. Guide","slug":"b2-guide","link":"#b2-guide","children":[]},{"level":3,"title":"B3. Use mas to install","slug":"b3-use-mas-to-install","link":"#b3-use-mas-to-install","children":[]}]},{"level":2,"title":"C. Oh-My-Zsh","slug":"c-oh-my-zsh","link":"#c-oh-my-zsh","children":[{"level":3,"title":"C1. Prerequesite(s)","slug":"c1-prerequesite-s","link":"#c1-prerequesite-s","children":[]},{"level":3,"title":"C2. Guide","slug":"c2-guide","link":"#c2-guide","children":[]},{"level":3,"title":"C3. Configure","slug":"c3-configure","link":"#c3-configure","children":[]}]},{"level":2,"title":"E. Last Setup","slug":"e-last-setup","link":"#e-last-setup","children":[{"level":3,"title":"Configure","slug":"configure","link":"#configure","children":[]}]}],"git":{},"readingTime":{"minutes":4.36,"words":1308},"filePathRelative":"g4e/devops-os-mac/env-setup.md","excerpt":"\\n\\n<hr>\\n<h2>A. Homebrew</h2>\\n<h3>A1. Prerequesite(s)</h3>\\n<ul>\\n<li><code>terminal</code></li>\\n</ul>\\n<h3>A2. Guide</h3>\\n<p>Copy and Paste the following to the Terminal Prompt</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>/bin/bash <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class=\\"token variable\\">)</span></span>\\"</span>\\n</code></pre></div>"}');export{E as comp,D as data};
