import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as d,c as r,b as n,t as k,a as s,w as e,d as l,e as t}from"./app-B2dKc-qM.js";const v={},m={id:"frontmatter-title-관련",tabindex:"-1"},b={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},h=l('<hr><h2 id="기본-명령어" tabindex="-1"><a class="header-anchor" href="#기본-명령어"><span>기본 명령어</span></a></h2><h3 id="기동-중지" tabindex="-1"><a class="header-anchor" href="#기동-중지"><span>기동/중지</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker-compose up -d</code></td><td style="text-align:left;">(<code>docker-compose.yml</code> 파일이 기본) docker-compose로 기동</td></tr><tr><td style="text-align:left;"><code>docker-compose down</code></td><td style="text-align:left;">(<code>docker-compose.yml</code> 파일이 기본) docker-compose로 구성한 모든 컨테이너 중지</td></tr></tbody></table><hr><h2 id="자주쓰는-docker-compose" tabindex="-1"><a class="header-anchor" href="#자주쓰는-docker-compose"><span>자주쓰는 docker-compose</span></a></h2><h3 id="구성요소" tabindex="-1"><a class="header-anchor" href="#구성요소"><span>구성요소</span></a></h3>',7),g=l(`<h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml"><span><code>docker-compose.yml</code></span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">node-network</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
  <span class="token key atrule">nexus</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">t2_proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">gitea</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> gitea/gitea<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> gitea
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> USER_UID=1000
      <span class="token punctuation">-</span> USER_GID=1000
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node<span class="token punctuation">-</span>network
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./gitea<span class="token punctuation">:</span>/data <span class="token comment"># persistent gitea database (sqlite3)</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span> 


  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jenkins
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins<span class="token punctuation">:</span>2.348<span class="token punctuation">-</span>alpine<span class="token punctuation">-</span>jdk8
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node<span class="token punctuation">-</span>network
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">ports</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> <span class="token string">&quot;8947:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;50000:50000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./jenkins<span class="token punctuation">:</span>/var/jenkins_home


  <span class="token key atrule">verdaccio</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> verdaccio
    <span class="token key atrule">image</span><span class="token punctuation">:</span> verdaccio/verdaccio<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node<span class="token punctuation">-</span>network
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">VERDACCIO_PORT</span><span class="token punctuation">:</span> <span class="token number">4873</span>
      <span class="token key atrule">NODE_ENV</span><span class="token punctuation">:</span> production
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;4873:4873&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./verdaccio/config<span class="token punctuation">:</span>/verdaccio/conf 
      <span class="token punctuation">-</span> ./verdaccio/storage<span class="token punctuation">:</span>/verdaccio/storage
      <span class="token punctuation">-</span> ./verdaccio/plugins<span class="token punctuation">:</span>/verdaccio/plugins


  <span class="token key atrule">nexus</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nexus
    <span class="token key atrule">image</span><span class="token punctuation">:</span> sonatype/nexus3<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nexus
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;8081:8081&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./nexus/data<span class="token punctuation">:</span>/nexus<span class="token punctuation">-</span>data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,3);function _(c,f){const a=o("router-link"),i=o("ShieldsGroup"),p=o("TagLinks");return d(),r("div",null,[n("h1",m,[n("a",b,[n("span",null,k(c.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[s(a,{to:"#기본-명령어"},{default:e(()=>[t("기본 명령어")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#기동-중지"},{default:e(()=>[t("기동/중지")]),_:1})])])]),n("li",null,[s(a,{to:"#자주쓰는-docker-compose"},{default:e(()=>[t("자주쓰는 docker-compose")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#구성요소"},{default:e(()=>[t("구성요소")]),_:1})]),n("li",null,[s(a,{to:"#docker-compose-yml"},{default:e(()=>[t("docker-compose.yml")]),_:1})])])])])]),h,s(i,{logos:"gitea,jenkins"}),g,s(p)])}const q=u(v,[["render",_],["__file","docker-compose.html.vue"]]),D=JSON.parse('{"path":"/g4e/devops-docker/docker-compose.html","title":"🚢Docker Compose","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"🚢Docker Compose","description":"Docker > 🚢Docker Compose","category":["Docker","🚢Docker Compose"],"tag":["sh","bash","cli","docker","docker-desktop","yml","yaml","docker-container","vm","docker-compose"]},"headers":[{"level":2,"title":"기본 명령어","slug":"기본-명령어","link":"#기본-명령어","children":[{"level":3,"title":"기동/중지","slug":"기동-중지","link":"#기동-중지","children":[]}]},{"level":2,"title":"자주쓰는 docker-compose","slug":"자주쓰는-docker-compose","link":"#자주쓰는-docker-compose","children":[{"level":3,"title":"구성요소","slug":"구성요소","link":"#구성요소","children":[]},{"level":3,"title":"docker-compose.yml","slug":"docker-compose-yml","link":"#docker-compose-yml","children":[]}]}],"git":{},"readingTime":{"minutes":0.55,"words":166},"filePathRelative":"g4e/devops-docker/docker-compose.md","excerpt":"\\n\\n<hr>\\n<h2>기본 명령어</h2>\\n<h3>기동/중지</h3>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">명령어</th>\\n<th style=\\"text-align:left\\">설명</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker-compose up -d</code></td>\\n<td style=\\"text-align:left\\">(<code>docker-compose.yml</code> 파일이 기본) docker-compose로 기동</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker-compose down</code></td>\\n<td style=\\"text-align:left\\">(<code>docker-compose.yml</code> 파일이 기본) docker-compose로 구성한 모든 컨테이너 중지</td>\\n</tr>\\n</tbody>\\n</table>"}');export{q as comp,D as data};
