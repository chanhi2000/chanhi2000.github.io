import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as m,c as d,a as s,t as u,b as n,w as a,e as o,d as t}from"./app-CtVGPIIl.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},f=o(`<hr><h2 id="a-homebrew" tabindex="-1"><a class="header-anchor" href="#a-homebrew"><span>A. Homebrew</span></a></h2><h3 id="a1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#a1-prerequesite-s"><span>A1. Prerequesite(s)</span></a></h3><ul><li><code>terminal</code></li></ul><h3 id="a2-guide" tabindex="-1"><a class="header-anchor" href="#a2-guide"><span>A2. Guide</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="a3-configure" tabindex="-1"><a class="header-anchor" href="#a3-configure"><span>A3. Configure</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Install taps</span>
brew tap homebrew/cask-versions<span class="token punctuation">;</span>
brew tap homebrew/cask-fonts<span class="token punctuation">;</span>
brew tap oven-sh/bun<span class="token punctuation">;</span> <span class="token comment"># for macOS and Linux</span>
brew tap mac-cleanup/mac-cleanup-py<span class="token punctuation">;</span> <span class="token comment"># mac-cleanup-py</span>

<span class="token comment"># Install formula</span>
brew <span class="token function">install</span> autojump amazon-ecs-cli awscli bat bat-extras bun bison <span class="token punctuation">\\</span>
  cheat cocoapods exiftool ffmpeg fizz flac <span class="token function">git</span> <span class="token punctuation">\\</span>
  hyperfine mas fastfetch nushell nvm openssl pixman <span class="token punctuation">\\</span>
  python rust scrcpy starship tmux tokei watchman <span class="token punctuation">\\</span>
  <span class="token function">wget</span> xz <span class="token function">zsh</span> mac-cleanup-py<span class="token punctuation">;</span>

<span class="token comment"># Install cask(s)</span>
brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> airflow alt-tab appcleaner chatgpt cheatsheet  <span class="token punctuation">\\</span>
  dbeaver-community rancher eul flameshot flipper font-jetbrains-mono <span class="token punctuation">\\</span>
  google-chrome grandperspective iina intellij-idea-ce jordanbaird-ice <span class="token punctuation">\\</span>
  maccy notion opencore-patcher oversight pennywise raycast <span class="token punctuation">\\</span>
  resilio-sync sf-symbols shottr spectacle sublime-merge sublime-text <span class="token punctuation">\\</span>
  the-unarchiver taskexplorer temurin11 transmission visual-studio-code <span class="token punctuation">\\</span>
  vlc wireshark<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="b-apps-from-app-store" tabindex="-1"><a class="header-anchor" href="#b-apps-from-app-store"><span>B. Apps from App Store</span></a></h2><h3 id="b1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#b1-prerequesite-s"><span>B1. Prerequesite(s)</span></a></h3><ul><li><code>App Store</code></li><li><code>mas</code></li></ul><h3 id="b2-guide" tabindex="-1"><a class="header-anchor" href="#b2-guide"><span>B2. Guide</span></a></h3><p>Install the following(s)</p>`,16),g=o(`<h3 id="b3-use-mas-to-install" tabindex="-1"><a class="header-anchor" href="#b3-use-mas-to-install"><span>B3. Use <code>mas</code> to install</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 497799835: XCode</span>
<span class="token comment"># 1604176982: One Thing</span>
<span class="token comment"># 885120167: Particulars</span>
<span class="token comment"># 1452453066: Hidden Bar</span>
<span class="token comment"># 595191960: Copy Clip</span>
<span class="token comment"># 1612199418: Cheetah - Virtual Machines</span>
<span class="token comment"># 1429033973: RunCat</span>
<span class="token comment"># 1635954549: ScanTexter - AI translation </span>
mas <span class="token function">install</span> <span class="token number">497799835</span> <span class="token punctuation">\\</span>
    <span class="token number">1604176982</span> <span class="token punctuation">\\</span>
    <span class="token number">885120167</span> <span class="token punctuation">\\</span>
    <span class="token number">1452453066</span> <span class="token punctuation">\\</span>
    <span class="token comment"># 595191960 \\</span>
    <span class="token number">1612199418</span> <span class="token punctuation">\\</span>
    <span class="token number">1429033973</span> <span class="token punctuation">\\</span>
    <span class="token number">1635954549</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="c-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#c-oh-my-zsh"><span>C. Oh-My-Zsh</span></a></h2><h3 id="c1-prerequesite-s" tabindex="-1"><a class="header-anchor" href="#c1-prerequesite-s"><span>C1. Prerequesite(s)</span></a></h3><ul><li><code>terminal</code></li><li><code>zsh</code></li></ul><h3 id="c2-guide" tabindex="-1"><a class="header-anchor" href="#c2-guide"><span>C2. Guide</span></a></h3><p>Copy and Paste the following to the Terminal Prompt</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Install oh-my-zsh</span>
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
<span class="token comment"># for Rancher Desktop</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOCKER_HOST</span><span class="token operator">=</span>unix:///var/run/docker.sock

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
<span class="token comment"># e.g. COMPLETION_WAITING_DOTS=&quot;%F{yellow}waiting…%f&quot;</span>
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

<span class="token comment"># launch fastfetch</span>
fastfetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c3-ii-config-starship-toml" tabindex="-1"><a class="header-anchor" href="#c3-ii-config-starship-toml"><span>C3-ii. <code>~/.config/starship.toml</code></span></a></h4><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>add_newline = true

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
<span class="token comment">## Display Files&#39; directory in the title bar</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,19);function w(c,y){const e=l("router-link"),i=l("SiteInfo"),p=l("TagLinks");return m(),d("div",null,[s("h1",b,[s("a",h,[s("span",null,u(c.$frontmatter.title)+" 관련",1)])]),s("nav",k,[s("ul",null,[s("li",null,[n(e,{to:"#a-homebrew"},{default:a(()=>[t("A. Homebrew")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#a1-prerequesite-s"},{default:a(()=>[t("A1. Prerequesite(s)")]),_:1})]),s("li",null,[n(e,{to:"#a2-guide"},{default:a(()=>[t("A2. Guide")]),_:1})]),s("li",null,[n(e,{to:"#a3-configure"},{default:a(()=>[t("A3. Configure")]),_:1})])])]),s("li",null,[n(e,{to:"#b-apps-from-app-store"},{default:a(()=>[t("B. Apps from App Store")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#b1-prerequesite-s"},{default:a(()=>[t("B1. Prerequesite(s)")]),_:1})]),s("li",null,[n(e,{to:"#b2-guide"},{default:a(()=>[t("B2. Guide")]),_:1})]),s("li",null,[n(e,{to:"#b3-use-mas-to-install"},{default:a(()=>[t("B3. Use mas to install")]),_:1})])])]),s("li",null,[n(e,{to:"#c-oh-my-zsh"},{default:a(()=>[t("C. Oh-My-Zsh")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#c1-prerequesite-s"},{default:a(()=>[t("C1. Prerequesite(s)")]),_:1})]),s("li",null,[n(e,{to:"#c2-guide"},{default:a(()=>[t("C2. Guide")]),_:1})]),s("li",null,[n(e,{to:"#c3-configure"},{default:a(()=>[t("C3. Configure")]),_:1})])])]),s("li",null,[n(e,{to:"#e-last-setup"},{default:a(()=>[t("E. Last Setup")]),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#configure"},{default:a(()=>[t("Configure")]),_:1})])])])])]),f,n(i,{name:"Xcode on the Mac App Store",desc:"Developer Tools",url:"https://apps.apple.com/us/app/xcode/id497799835",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/47/47/8c/47478c1e-50ec-ef6a-6807-96abb72045a0/Xcode-85-220-0-4-2x-sRGB.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/c2/6e/fb/c26efb5d-797d-0524-b674-61244898bb51/82b353b3-9ce0-4320-b3cd-9bda6c896a99_Xcode15-01-Preview-Macro.png/1286x0w.webp"}),n(i,{name:"One Thing on the Mac App Store",desc:"Put one task in your menu bar",url:"https://apps.apple.com/us/app/one-thing/id1604176982",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/df/e0/43/dfe043d3-ff4d-6edf-9912-f7859dc1db65/AppIcon-0-0-85-220-0-4-0-2x.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/f5/47/c8/f547c84e-4ea9-d757-a63f-0feae9e9f2fe/fec70b04-3937-4bea-91ef-ff6fabd0238c_screenshot1.png/1286x0w.webp"}),n(i,{name:"Particulars on the Mac App Store",desc:"…",url:"https://apps.apple.com/us/app/particulars/id885120167",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a2/4e/f3/a24ef382-4865-2fc7-0d26-62a67d781023/AppIcon-0-85-220-4-0-0-2x-0-0.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/92/8b/ab/928babea-3471-56af-f6b1-76b622879c59/1f58e09c-b08b-4709-8c75-15efe573e782_Screenshot_2023-09-15_at_8.35.13_PM.png/1286x0w.webp"}),n(i,{name:"Hidden Bar on the Mac App Store",desc:"Hide menubar items",url:"https://apps.apple.com/us/app/hidden-bar/id1452453066",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/01/1d/27/011d2738-c5ab-6827-3059-3d64dbcfb4cd/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/87/ef/ee/87efee47-0191-bf71-9710-0474d7671f03/pr_source.png/1286x0w.webp"}),n(i,{name:"CopyClip - Clipboard History on the Mac App Store",desc:"Manage Your Clipboard",url:"https://apps.apple.com/us/app/copyclip-clipboard-history/id595191960",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7e/69/a4/7e69a465-b76c-cb88-c980-f8ac5bd69904/APPL.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/87/ef/ee/87efee47-0191-bf71-9710-0474d7671f03/pr_source.png/1286x0w.webp"}),n(i,{name:"Cheetah - Virtual Machines on the Mac App Store",desc:"A Lightweight VM Manager",url:"https://apps.apple.com/us/app/cheetah-virtual-machines/id1612199418",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/fe/5d/98/fe5d9890-f0d2-d1a9-651b-2c56dec82c34/AppIcon-85-220-4-0-0-2x-0-0.png/492x0w.webp ",preview:"https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/20/d8/38/20d8380b-2f5c-fff1-264e-c7cfb4fd3137/6b30a779-3113-4d87-9946-b33754201fc7_Screenshot_2023-08-21_at_19.27.24.png/1286x0w.webp"}),n(i,{name:"RunCat on the Mac App Store",desc:"Cat living in the menubar",url:"https://apps.apple.com/us/app/runcat/id1429033973",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/90/93/41/90934174-69f0-7621-e810-01cdeb17d62e/AppIcon-0-0-85-220-0-0-4-0-2x-0-0-0.png/460x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/64/6a/f0/646af098-2d40-5833-d318-1d71d3ef0f72/28c44356-7287-4db3-b672-dc3c921674ca_1.png/1286x0w.webp"}),n(i,{name:"GIPHY Capture. The GIF Maker on the Mac App Store",desc:"…",url:"https://apps.apple.com/us/app/giphy-capture-the-gif-maker/id668208984",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple115/v4/98/b7/63/98b76370-8dd8-e7ff-9832-87a404cc524c/AppIcon-0-0-85-220-0-0-0-0-4-0-0-0-2x-sRGB-0-0-0-0-0.png/460x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/b9/50/0f/b9500fe9-0107-a750-49be-caa47faf7a4a/pr_source.png/626x0w.webp"}),n(i,{name:"ScanTexter - AI translation on the App Store",desc:"Text extraction & translation",url:"https://apps.apple.com/us/app/scantexter-ai-translation/id1635954549",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5c/45/0b/5c450ba9-9f82-9e9d-8c30-a6ba950adf91/AppIcon-0-0-85-220-0-0-4-0-2x.png/492x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/63/d7/7e/63d77eba-8664-a173-6b45-33ee72128440/3db67eb9-a5de-4fa6-a90c-ae4754e8dbf8_previews1.png/1286x0w.webp"}),n(i,{name:"Dependencies ",desc:"Analyze, explore, and share",url:"https://apps.apple.com/us/app/dependencies/id1538972026",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/33/76/25/337625f1-0606-e27c-bf0a-200dacdcd653/AppIcon-0-0-85-220-0-0-4-0-2x-sRGB.png/230x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource114/v4/22/cf/1d/22cf1d7f-9297-4ee3-7f94-d1460a1bfcb6/e04c9b19-1505-4136-9646-c86c80f6667c_Dependencies_Mac_EN_3.png/313x0w.webp"}),n(i,{name:"MarkChart - Mermaid Preview 4+",desc:"Markdown diagrams",url:"https://apps.apple.com/us/app/markchart-mermaid-preview/id6475648822",logo:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bf/52/9d/bf529dcc-fdf8-1e8e-9e47-ea18496d1510/AppIcon-0-0-85-220-0-4-0-2x-P3.png/217x0w.webp",preview:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/8e/1e/85/8e1e8559-a164-fb75-ea13-0603a826fd03/0bf6f663-ef17-4000-964d-e605cfd45476_MarkChart_Mac_EN_1.png/217x0w.webp"}),g,n(p)])}const x=r(v,[["render",w],["__file","env-setup.html.vue"]]),q=JSON.parse('{"path":"/devops/macos/env-setup.html","title":"Environment Setup","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Environment Setup","description":"macOS > Environment Setup","icon":"fas fa-toolbox","category":["macOS","Environment Setup"],"tag":["sh","bash","zsh","oh-my-zsh","ohmyzsh","homebrew","pacman","starship","dracula","dracula-theme","draculatheme","jdk","jdk11","temurin","temurin11","docker","containerd","fastfetch"],"head":[[{"meta":null},{"property":"og:title","content":"macOS > Environment Setup"},{"property":"og:description","content":"Environment Setup"},{"property":"og:url","content":"https://chanhi2000.github.io/devops/macos/env-setup.html"}]]},"headers":[{"level":2,"title":"A. Homebrew","slug":"a-homebrew","link":"#a-homebrew","children":[{"level":3,"title":"A1. Prerequesite(s)","slug":"a1-prerequesite-s","link":"#a1-prerequesite-s","children":[]},{"level":3,"title":"A2. Guide","slug":"a2-guide","link":"#a2-guide","children":[]},{"level":3,"title":"A3. Configure","slug":"a3-configure","link":"#a3-configure","children":[]}]},{"level":2,"title":"B. Apps from App Store","slug":"b-apps-from-app-store","link":"#b-apps-from-app-store","children":[{"level":3,"title":"B1. Prerequesite(s)","slug":"b1-prerequesite-s","link":"#b1-prerequesite-s","children":[]},{"level":3,"title":"B2. Guide","slug":"b2-guide","link":"#b2-guide","children":[]},{"level":3,"title":"B3. Use mas to install","slug":"b3-use-mas-to-install","link":"#b3-use-mas-to-install","children":[]}]},{"level":2,"title":"C. Oh-My-Zsh","slug":"c-oh-my-zsh","link":"#c-oh-my-zsh","children":[{"level":3,"title":"C1. Prerequesite(s)","slug":"c1-prerequesite-s","link":"#c1-prerequesite-s","children":[]},{"level":3,"title":"C2. Guide","slug":"c2-guide","link":"#c2-guide","children":[]},{"level":3,"title":"C3. Configure","slug":"c3-configure","link":"#c3-configure","children":[]}]},{"level":2,"title":"E. Last Setup","slug":"e-last-setup","link":"#e-last-setup","children":[{"level":3,"title":"Configure","slug":"configure","link":"#configure","children":[]}]}],"git":{},"readingTime":{"minutes":6.18,"words":1854},"filePathRelative":"devops/macos/env-setup.md","excerpt":"\\n\\n<hr>\\n<h2>A. Homebrew</h2>\\n<h3>A1. Prerequesite(s)</h3>\\n<ul>\\n<li><code>terminal</code></li>\\n</ul>\\n<h3>A2. Guide</h3>\\n<p>Copy and Paste the following to the Terminal Prompt</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>/bin/bash <span class=\\"token parameter variable\\">-c</span> <span class=\\"token string\\">\\"<span class=\\"token variable\\"><span class=\\"token variable\\">$(</span><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class=\\"token variable\\">)</span></span>\\"</span>\\n</code></pre></div>"}');export{x as comp,q as data};
