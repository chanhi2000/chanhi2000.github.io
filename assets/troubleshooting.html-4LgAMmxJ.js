import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as s,t as d,b as n,h as t,ax as m,r as l,o as u,e as i}from"./app-vQERoX8y.js";const h={},v={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"};function f(o,e){const a=l("router-link"),r=l("TagLinks");return u(),p("div",null,[s("h1",v,[s("a",b,[s("span",null,d(o.$frontmatter.title)+" 관련",1)])]),s("nav",g,[s("ul",null,[s("li",null,[n(a,{to:"#💀github으로-push-오류"},{default:t(()=>e[0]||(e[0]=[i("💀Github으로 Push 오류")])),_:1})]),s("li",null,[n(a,{to:"#💀push-오류"},{default:t(()=>e[1]||(e[1]=[i("💀Push 오류")])),_:1})]),s("li",null,[n(a,{to:"#💀저장소-접근오류"},{default:t(()=>e[2]||(e[2]=[i("💀저장소 접근오류")])),_:1})])])]),e[3]||(e[3]=m(`<hr><h2 id="💀github으로-push-오류" tabindex="-1"><a class="header-anchor" href="#💀github으로-push-오류"><span>💀Github으로 Push 오류</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">remote: Support for password authentication was removed on August 13, 2021.</span>
<span class="line">remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>😥Password로 인증처리를 할 수 없도록 되어 있음</li><li>💊<a href="https://hyeo-noo.tistory.com/184" target="_blank" rel="noopener noreferrer">[Mac] GitHub push token 오류 해결</a></li></ul><hr><h2 id="💀push-오류" tabindex="-1"><a class="header-anchor" href="#💀push-오류"><span>💀Push 오류</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Git push: Missing or invalid credentials. fatal: Authentication failed for &#39;https://github.com/username/repo.git&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>😥The problem comes from the authentication handler of vscode.</p><p>To solve the problem:</p><ul><li>Open vscode <code>File</code> &gt; <code>Preferences</code> &gt; <code>Settings</code></li><li>Search for <code>git.terminalAuthentication</code></li><li>Uncheck the option</li></ul><div class="hint-container warning"><p class="hint-container-title">주의</p><p>I have set up credentials by using git config user.name &quot;your username&quot; and git config user.password &quot;your password&quot;, and could see these by running <code>git config --list</code>, what am I missing here?</p></div><p>Those are not &quot;credentials&quot;: they won&#39;t help authenticate you to a remote service like GitHub.</p><p>For HTTPS URLS <code>https://github.com/&lt;me&gt;/&lt;myRepo&gt;</code>, you would need to:</p><ul><li>use a credential helper (<code>git config --global credential.helper osxkeychain</code>)</li><li>update the credentials from the OSX Keychain</li></ul><p>There you would enter your actual credentials:</p><ul><li>your GitHub <a href="https://newbedev.com/drupal-8-get-user-account-from-user-page-code-example" target="_blank" rel="noopener noreferrer">user account</a> name</li><li>your GitHub <a href="https://newbedev.com/set-a-local-user-account-password-to-never-expire-windows-10-code-example" target="_blank" rel="noopener noreferrer">user account password</a> (or a PAT if you have 2FA activated)</li></ul><p>As detailed in &quot;<code>git push origin master</code> Missing or invalid credentials&quot;, and here:</p><div class="hint-container tip"><p class="hint-container-title">NOTE</p><p>If you work with the JSON-settings file, insert the following line into it:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line">git.terminalAuthentication<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="비밀정보" tabindex="-1"><a class="header-anchor" href="#비밀정보"><span>비밀정보</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> push origin main</span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># remote: error: GH013: Repository rule violations found for refs/heads/main.</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote: - GITHUB PUSH PROTECTION</span></span>
<span class="line"><span class="token comment"># remote:   ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴 붴붴붴붴?[K</span></span>
<span class="line"><span class="token comment"># K</span></span>
<span class="line"><span class="token comment"># remote:     Resolve the following violations before pushing again</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:     - Push cannot contain secrets</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:      (?) Learn how to resolve a blocked push</span></span>
<span class="line"><span class="token comment"># remote:      https://docs.github.com/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:      (?) This repository does not have Secret Scanning enabled, but is eligible. Enable Secret Scanning to view and manage detected secrets.</span></span>
<span class="line"><span class="token comment"># remote:      Visit the repository settings page, https://github.com/chanhi2000/crashcourse/settings/security_analysis</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:       ?붴?Amazon AWS Access Key ID ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴?[K</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># remote:        locations:</span></span>
<span class="line"><span class="token comment"># remote:          - commit: 5c1fe713d2d2b5eaa0f7936db177f7041c2ef07f</span></span>
<span class="line"><span class="token comment"># remote:            path: src/aws/art-of-aws/23C.md:158</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.</span></span>
<span class="line"><span class="token comment"># remote:        https://github.com/chanhi2000/crashcourse/security/secret-scanning/unblock-secret/2hopD8O4gJm6s8gxDT8rA4Ch6MU</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:       ?붴?Amazon AWS Secret Access Key ?붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴붴?[K</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"><span class="token comment"># remote:        locations:</span></span>
<span class="line"><span class="token comment"># remote:          - commit: 5c1fe713d2d2b5eaa0f7936db177f7041c2ef07f</span></span>
<span class="line"><span class="token comment"># remote:            path: src/aws/art-of-aws/23C.md:159</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.</span></span>
<span class="line"><span class="token comment"># remote:        https://github.com/chanhi2000/crashcourse/security/secret-scanning/unblock-secret/2hopD9dOwSBkDubY7SigY3iNqnf</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># remote:</span></span>
<span class="line"><span class="token comment"># To https://github.com/.../...</span></span>
<span class="line"><span class="token comment">#  ! [remote rejected]     main -&gt; main (push declined due to repository rule violations)</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><hr><h2 id="💀저장소-접근오류" tabindex="-1"><a class="header-anchor" href="#💀저장소-접근오류"><span>💀저장소 접근오류</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">remote: HTTP Basic: Access denied</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>😥원격저장소와 통신하는 커맨드를 실행 할 때 발생</li><li>💊아래 커맨드를 실행하여 기존 credential정보 제거 및 초기화</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--unset</span> credential.helper</span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> credential.helper</span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--unset</span> credential.helper</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,24)),n(r)])}const w=c(h,[["render",f],["__file","troubleshooting.html.vue"]]),x=JSON.parse('{"path":"/devops/github/troubleshooting.html","title":"Troubleshooting","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Troubleshooting","description":"Github > Troubleshooting","icon":"fas fa-bug-slash","category":["Github","Troubleshooting"],"tag":["troubleshooting","git","git-cli","http","credentials","git-credentials","bash"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/github/troubleshooting.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Troubleshooting"}],["meta",{"property":"og:description","content":"Github > Troubleshooting"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"troubleshooting"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"git-cli"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:tag","content":"credentials"}],["meta",{"property":"article:tag","content":"git-credentials"}],["meta",{"property":"article:tag","content":"bash"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Troubleshooting\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"💀Github으로 Push 오류","slug":"💀github으로-push-오류","link":"#💀github으로-push-오류","children":[]},{"level":2,"title":"💀Push 오류","slug":"💀push-오류","link":"#💀push-오류","children":[]},{"level":2,"title":"💀저장소 접근오류","slug":"💀저장소-접근오류","link":"#💀저장소-접근오류","children":[]}],"git":{},"readingTime":{"minutes":1.6,"words":481},"filePathRelative":"devops/github/troubleshooting.md","excerpt":"\\n\\n<hr>\\n<h2>💀Github으로 Push 오류</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">remote: Support for password authentication was removed on August 13, 2021.</span>\\n<span class=\\"line\\">remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{w as comp,x as data};