import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as m,c as u,a as e,t as v,b as s,n as p,g as b,d as i,e as a}from"./app-CtVGPIIl.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},k=e("nav",{class:"table-of-contents"},[e("ul")],-1),_=e("hr",null,null,-1),x=a(`<p>정확히 이야기해서 git squash 라는 명령어는 없습니다. interactive rebase를 하는데 필요한 명령어 중 하나지요.</p><p>때때로 아래처럼 하나의 작업을 여러번에 걸쳐서 커밋을 할 때가 있습니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
<span class="token comment">#</span>
<span class="token comment"># d442427eae836f15e94f5df0445c70081df79a3e Task 3/3</span>
<span class="token comment"># 26395437be53e4e6e68f83aa98560ef93838aaa0 Task 2/3</span>
<span class="token comment"># 7c6535580a038e9dcfaa72a98e04848812da9aee Task 1/3</span>
<span class="token comment"># 2260a88777c247c31170ff6074d95569ac557afb Initial commit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),T=a(`<p>이럴때 사용하는것이 interactive rebase 입니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(최근 3개의 커밋을 interactive rebase 한다는 뜻입니다)</p><p>환경에 따라 다르겠지만 보통은 vi에디터가 뜨면서 다음과 같은 메세지를 볼 수 있습니다.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pick 7c65355 Task 1/3
pick 2639543 Task 2/3
pick d442427 Task 3/3

# Rebase 2260a88..d442427 onto 2260a88
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like &quot;squash&quot;, but discard this commit&#39;s log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 세줄을 다음과 같이 바꾸어 준 후 저장(:wq)를 누르면</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pick 7c65355 Task 1/3
squash 2639543 Task 2/3
squash d442427 Task 3/3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 vi창이 뜨면서 커밋 메세지를 rewrite 할 수 있습니다.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pick 7c65355 Task 1/3
Rebasing (3/3)
# This is a combination of 3 commits.
# The first commit&#39;s message is:
Task 1/3

# This is the 2nd commit message:

Task 2/3

# This is the 3rd commit message:

Task 3/3

# Please enter the commit message for your changes. Lines starting
# with &#39;#&#39; will be ignored, and an empty message aborts the commit.
# rebase in progress; onto 2260a88
# You are currently editing a commit while rebasing branch &#39;master&#39; on &#39;2260a88&#39;.
#
# Changes to be committed:
#       modified:   README.md
#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 다시 확인하면 이렇게 됩니다</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline
<span class="token comment">#</span>
<span class="token comment"># 9833ca676c5a24361c1cc36fb173746328dfac3a Task 1/3 ~ 3/3</span>
<span class="token comment"># 2260a88777c247c31170ff6074d95569ac557afb Initial commit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">참고</p><p>가능하면 이미 push하지 않은 작업만 squash 하는것을 추천합니다. push와 pull 작업이 살짝 번거로워 집니다</p><p><code>git push -f</code> / <code>git fetch &amp;&amp;; git merge --squash</code></p></div><hr>`,13);function q(t,y){const l=n("VPCard"),c=n("SiteInfo"),d=n("FontIcon"),o=n("TagLinks");return m(),u("div",null,[e("h1",h,[e("a",f,[e("span",null,v(t.$frontmatter.title)+" 관련",1)])]),s(l,p(b({title:"Git > Article(s)",desc:"Article(s)",link:"/programming/git/articles/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),k,_,s(c,{name:"git squash - 여러개의 커밋로그를 하나로 묶기| NHN Cloud Meetup",desc:"git squash - 여러개의 커밋로그를 하나로 묶기",url:"https://meetup.nhncloud.com/posts/39",logo:"https://meetup.nhncloud.com/resources/img/favicon.ico",preview:"/images/content/meetup.nhncloud.com/gitlogo.png"}),x,e("p",null,[i("여기서 Task 1/3~3/3 을 하나의 "),s(d,{icon:"iconfont icon-change"}),i("commit으로 묶어버리고 싶은 경우가 많죠.")]),T,s(o)])}const E=r(g,[["render",q],["__file","39.html.vue"]]),I=JSON.parse('{"path":"/explore/articles/meetup.nhncloud.com/39.html","title":"git squash - 여러개의 커밋로그를 하나로 묶기","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"git squash - 여러개의 커밋로그를 하나로 묶기","description":"Article(s) > git squash - 여러개의 커밋로그를 하나로 묶기","icon":"iconfont icon-git","category":["Git","Article(s)"],"tag":["blog","meetup.nhncloud.com","git","git-squash"],"head":[[{"meta":null},{"property":"og:title","content":"Article(s) > git squash - 여러개의 커밋로그를 하나로 묶기"},{"property":"og:description","content":"git squash - 여러개의 커밋로그를 하나로 묶기"},{"property":"og:url","content":"https://chanhi2000.github.io/explore/articles/meetup.nhncloud.com/39.html"}]],"prev":"/programming/git/articles/README.md","date":"2015-11-30T00:00:00.000Z","isOriginal":false,"cover":"/images/content/meetup.nhncloud.com/gitlogo.png"},"headers":[],"git":{},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"explore/articles/meetup.nhncloud.com/39.md","localizedDate":"2015년 11월 30일","excerpt":"\\n"}');export{E as comp,I as data};
