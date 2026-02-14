import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,d as s,b as a,at as d,t as m,w as l,r as i,o as v,e as t}from"./app-6nZ4Bu4J.js";const k={},b={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},h={class:"table-of-contents"};function y(p,n){const e=i("router-link"),c=i("ShieldsGroup"),o=i("TagLinks");return v(),u("div",null,[s("h1",b,[s("a",g,[s("span",null,m(p.$frontmatter.title)+" 관련",1)])]),s("nav",h,[s("ul",null,[s("li",null,[a(e,{to:"#구성요소"},{default:l(()=>n[0]||(n[0]=[t("구성요소")])),_:1})]),s("li",null,[a(e,{to:"#docker-compose-gitlab-yml"},{default:l(()=>n[1]||(n[1]=[t("docker-compose-gitlab.yml")])),_:1})]),s("li",null,[a(e,{to:"#gitlab-runner-구성"},{default:l(()=>n[2]||(n[2]=[t("Gitlab Runner 구성")])),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#진행-시-입력-해야-할-값"},{default:l(()=>n[3]||(n[3]=[t("진행 시 입력 해야 할 값")])),_:1})])])])])]),n[4]||(n[4]=s("hr",null,null,-1)),n[5]||(n[5]=s("h2",{id:"구성요소",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#구성요소"},[s("span",null,"구성요소")])],-1)),a(c,{logos:"gitlab,docker"}),n[6]||(n[6]=d(`<hr><h2 id="docker-compose-gitlab-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-gitlab-yml"><span><code>docker-compose-gitlab.yml</code></span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code class="language-yaml"><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">common-network</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge</span>
<span class="line">    </span>
<span class="line"><span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">vol-gitlab-config</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">vol-gitlab-logs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">vol-gitlab-data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">vol-gitlabrunner-config</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">gitlab</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:15.9.6-ce.0&#39;</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> common<span class="token punctuation">-</span>network</span>
<span class="line">    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab.example.com&#39;</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">        external_url &#39;http://gitlab.example.com&#39;</span>
<span class="line">        gitlab_rails[&#39;artifacts_enabled&#39;] = true</span>
<span class="line">        gitlab_rails[&#39;artifacts_path&#39;] = &quot;/var/opt/gitlab/gitlab-rails/shared/artifacts&quot;</span></span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;1980:80&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;1922:22&quot;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;19443:443&quot;</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;vol-gitlab-config:/etc/gitlab&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;vol-gitlab-logs:/var/log/gitlab&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;vol-gitlab-data:/var/opt/gitlab&#39;</span></span>
<span class="line">    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> <span class="token string">&#39;256m&#39;</span></span>
<span class="line">  <span class="token key atrule">gitlab-runner</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-runner:alpine3.14-bleeding&#39;</span></span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitlab<span class="token punctuation">-</span>runner</span>
<span class="line">    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> common<span class="token punctuation">-</span>network</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;vol-gitlabrunner-config:/etc/gitlab-runner&#39;</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&#39;/var/run/docker.sock:/var/run/docker.sock&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">docker <code>bind mounts</code>를 구성할 경우 생기는 예외</p><p>Gitlab Runner 돌릴 시 빌드 된 artifacts 업로드 시도 중 아래와 같은 에러로그 배출</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">...</span>
<span class="line">Job ends with error &quot;WARNING: Uploading artifacts as &quot;archive&quot; to coordinator... failed&quot;</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mount된 volume이 있으나, runner는 찾지 못하기 때문에 발생하는 것으로 확인</p><p>그러므로 <strong>꼭 docker volume을 지정하여 관리</strong> 하도록 권고</p></div><hr><h2 id="gitlab-runner-구성" tabindex="-1"><a class="header-anchor" href="#gitlab-runner-구성"><span>Gitlab Runner 구성</span></a></h2><p>컨테이너로 sh접근 후 실행</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">docker</span> inspect <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;{{.NetworkSettings.Networks}}&#39;</span> gitlab <span class="token comment"># gitlab이 속해있는 network이름 찾기 (i.e. docker-compose_common-network)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab-runner /bin/bash <span class="token comment"># gitlab-runner 서버로 접근</span></span>
<span class="line"></span>
<span class="line">gitlab-runner register --non-interactive <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--url</span> http://gitlab <span class="token punctuation">\\</span></span>
<span class="line">  --registration-token GR1348941qg2LRSP-3Rp5xmyErEyF <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--executor</span> <span class="token function">docker</span> <span class="token punctuation">\\</span></span>
<span class="line">  --docker-image alpine:latest <span class="token punctuation">\\</span></span>
<span class="line">  --docker-volumes <span class="token string">&#39;/var/run/docker.sock:/var/run/docker.sock&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line">  --docker-network-mode docker-compose_common-network</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="진행-시-입력-해야-할-값" tabindex="-1"><a class="header-anchor" href="#진행-시-입력-해야-할-값"><span>진행 시 입력 해야 할 값</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Runtime platform                                    arch=amd64 os=linux pid=28 revision=21da6177 version=15.12.0~beta.41.g21da6177</span>
<span class="line">Running in system-mode.</span>
<span class="line"></span>
<span class="line">Enter the GitLab instance URL (for example, https://gitlab.com/):</span>
<span class="line">http://gitlab</span>
<span class="line">Enter the registration token:</span>
<span class="line">GR1348941XFBuSpcsKGBSHAxLv2FP</span>
<span class="line">Enter a description for the runner:</span>
<span class="line">[bc8b8ed5ef2d]:</span>
<span class="line">Enter tags for the runner (comma-separated):</span>
<span class="line"></span>
<span class="line">Enter optional maintenance note for the runner:</span>
<span class="line"></span>
<span class="line">WARNING: Support for registration tokens and runner parameters in the &#39;register&#39; command has been deprecated in GitLab Runner 15.6 and will be replaced with support for authentication tokens. For more information, see https://gitlab.com/gitlab-org/gitlab/-/issues/380872</span>
<span class="line">Registering runner... succeeded                     runner=GR1348941XFBuSpcs</span>
<span class="line">Enter an executor: docker-autoscaler, docker+machine, docker-ssh+machine, custom, docker, docker-windows, ssh, virtualbox, instance, docker-ssh, parallels, shell, kubernetes:</span>
<span class="line">docker</span>
<span class="line">Enter the default Docker image (for example, ruby:2.7):</span>
<span class="line"></span>
<span class="line">Enter the default Docker image (for example, ruby:2.7):</span>
<span class="line">node:16-alpine</span>
<span class="line">Runner registered successfully. Feel free to start it, but if it&#39;s running already the config should be automatically reloaded!</span>
<span class="line"></span>
<span class="line">Configuration (with the authentication token) was saved in &quot;/etc/gitlab-runner/config.toml&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,11)),a(o)])}const w=r(k,[["render",y]]),_=JSON.parse('{"path":"/devops/gitlab/docker-compose.html","title":"Docker Compose","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Docker Compose","description":"GitLab > Docker Compose","icon":"fa-brands fa-octopus-deploy","category":["GitLab","Docker Compose"],"tag":["sh","bash","cli","docker","docker-desktop","yml","yaml","docker-container","vm","docker-compose"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker Compose\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/gitlab/docker-compose.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Docker Compose"}],["meta",{"property":"og:description","content":"GitLab > Docker Compose"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"docker-compose"}],["meta",{"property":"article:tag","content":"vm"}],["meta",{"property":"article:tag","content":"docker-container"}],["meta",{"property":"article:tag","content":"yaml"}],["meta",{"property":"article:tag","content":"yml"}],["meta",{"property":"article:tag","content":"docker-desktop"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"sh"}]]},"git":{},"readingTime":{"minutes":1.29,"words":388},"filePathRelative":"devops/gitlab/docker-compose.md"}');export{w as comp,_ as data};
