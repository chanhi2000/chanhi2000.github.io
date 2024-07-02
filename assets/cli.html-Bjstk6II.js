import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as d,c as u,a as s,t as b,b as l,w as e,e as v,d as n}from"./app-CtVGPIIl.js";const k={},h={id:"frontmatter-title-관련",tabindex:"-1"},g={class:"header-anchor",href:"#frontmatter-title-관련"},_={class:"table-of-contents"},f=s("hr",null,null,-1),x=s("h2",{id:"구동-종료",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#구동-종료"},[s("span",null,"구동/종료")])],-1),B=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# cubrid service 실행"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid `),s("span",{class:"token function"},"service"),n(` start
`),s("span",{class:"token comment"},"# @ cubrid master start"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid master start: success"),n(`
`),s("span",{class:"token comment"},"# @ cubrid broker start"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid broker start: success"),n(`
`),s("span",{class:"token comment"},"# @ cubrid manager server start"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid manager server start: success"),n(`

`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# cubrid service 종료"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid `),s("span",{class:"token function"},"service"),n(` stop
`),s("span",{class:"token comment"},"# @ cubrid broker stop"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid broker stop: success"),n(`
`),s("span",{class:"token comment"},"# @ cubrid manager server stop"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid manager server stop: success"),n(`
`),s("span",{class:"token comment"},"# @ cubrid master stop"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid master stop: success"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# cubrid server 구동"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid server start `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(`
`),s("span",{class:"token comment"},"# @ cubrid server start: <DB이름>"),n(`
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# This may take a long time depending on the amount of recovery works to do."),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# CUBRID R9.2"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid server start: success"),n(`

`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# cubrid server 종료"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid server stop `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(`
`),s("span",{class:"token comment"},"# @ cubrid server stop: <DB이름>"),n(`
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# Server <DB이름> notified of shutdown."),n(`
`),s("span",{class:"token comment"},"# This may take several minuts. Please wait."),n(`
`),s("span",{class:"token comment"},"# ++ cubrid server stop: success"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# cubrid broker 구동"),n(`
`),s("span",{class:"token comment"},"# "),n(`
cubrid broker start
`),s("span",{class:"token comment"},"# @ cubrid broker start"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid broker start: success"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# (이미 구동중일 경우) ++ cubrid broker is already running"),n(`

`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# cubrid broker 종료"),n(`
`),s("span",{class:"token comment"},"# "),n(`
cubrid broker stop
`),s("span",{class:"token comment"},"# @ cubrid broker stop"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid broker stop: success"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# (이미 종요되어 있을 경우) ++ cubrid broker is not running"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# cubrid manager 구동"),n(`
`),s("span",{class:"token comment"},"# "),n(`
cubrid manager start
`),s("span",{class:"token comment"},"# @ cubrid manager server start"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid manager server start: success"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# (이미 구동중일 경우) ++ cubrid manager server is already running"),n(`

`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# cubrid manager 종료"),n(`
`),s("span",{class:"token comment"},"# "),n(`
cubrid manager stop
`),s("span",{class:"token comment"},"# @ cubrid manager server stop"),n(`
`),s("span",{class:"token comment"},"# ++ cubrid manager server stop: success"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# (이미 종요되어 있을 경우) ++ cubrid manager server is not running"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),C=s("hr",null,null,-1),y=s("h2",{id:"데이터베이스-관리",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#데이터베이스-관리"},[s("span",null,"데이터베이스 관리")])],-1),z=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# cubrid database 생성"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid createdb `),s("span",{class:"token punctuation"},"\\"),n(`
  --db-volume-size`),s("span",{class:"token operator"},"="),n("512M "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token parameter variable"},"-F"),n(" /data "),s("span",{class:"token punctuation"},"\\"),n(`
  --log-volume-size`),s("span",{class:"token operator"},"="),n("200M "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token parameter variable"},"-L"),n(" /log "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(` ko_KR.utf8

`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# ======================== 옵션 ========================"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# -F  --file-path       초기 볼륨이 위치할 경로 지정"),n(`
`),s("span",{class:"token comment"},"# -L  --log-path        로그 볼륨이 위치할 경로 지정"),n(`
`),s("span",{class:"token comment"},"# -B  --lob-base-path   LOB파일이 저장될 위치 경로 지정"),n(`
`),s("span",{class:"token comment"},"# -r  --replace         DB가 이미 존재하는 경우 기존 데이터베이스를 삭제하고 재생성함."),n(`
`),s("span",{class:"token comment"},"#     --db-volume-size  생성되는 데이터베이스 볼륨의 크기를 바이트 단위로 지정한다."),n(`
`),s("span",{class:"token comment"},"#     --db-page-size    데이터베이스 페이지의 크기를 바이트 단위로 지정한다."),n(`
`),s("span",{class:"token comment"},"#     --log-volume-size 로그 볼륨의 크기를 지정한다."),n(`
`),s("span",{class:"token comment"},"#     --log-page-size   로그 볼륨의 페이지 크기를 바이트 단위로 지정한다."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),I=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# Cubrid DB Volume 추가"),n(`
`),s("span",{class:"token comment"},"#"),n(`
cubrid addvoldb `),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" data "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token parameter variable"},"-n"),n(" edudb_data_x001 "),s("span",{class:"token punctuation"},"\\"),n(`
  --db-volume-size 2G `),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(`
cubrid addvoldb `),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" index "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token parameter variable"},"-n"),n(" edudb_index_x002 "),s("span",{class:"token punctuation"},"\\"),n(`
  --db-volume-size 1G `),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(`
cubrid addvoldb `),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" temp "),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token parameter variable"},"-n"),n(" edudb_temp_x003 "),s("span",{class:"token punctuation"},"\\"),n(`
  --db-volume-size 1G `),s("span",{class:"token punctuation"},"\\"),n(`
  `),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(`
`),s("span",{class:"token comment"},"#"),n(`
`),s("span",{class:"token comment"},"# ======================== 옵션 ========================"),n(`
`),s("span",{class:"token comment"},"#"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),L=v(`<hr><h2 id="기타" tabindex="-1"><a class="header-anchor" href="#기타"><span>기타</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#</span>
<span class="token comment"># 실행중인 쿼리 조회</span>
<span class="token comment">#</span>
<span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> cubrid translist <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>접근 비밀번호<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>테이블스페이스명<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>IP주소<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
    --sort-key<span class="token operator">=</span><span class="token number">7</span> <span class="token parameter variable">--reverse</span>

<span class="token comment">#</span>
<span class="token comment"># 실행중인 쿼리 중지</span>
<span class="token comment">#</span>
cubrid killtran <span class="token punctuation">\\</span>
    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>접근 비밀번호<span class="token operator">&gt;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>액티브번호<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>테이블스페이스명<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>IP주소<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,4);function w(o,T){const c=r("router-link"),i=r("Tabs"),m=r("TagLinks");return d(),u("div",null,[s("h1",h,[s("a",g,[s("span",null,b(o.$frontmatter.title)+" 관련",1)])]),s("nav",_,[s("ul",null,[s("li",null,[l(c,{to:"#구동-종료"},{default:e(()=>[n("구동/종료")]),_:1})]),s("li",null,[l(c,{to:"#데이터베이스-관리"},{default:e(()=>[n("데이터베이스 관리")]),_:1})]),s("li",null,[l(c,{to:"#기타"},{default:e(()=>[n("기타")]),_:1})])])]),f,x,l(i,{id:"10",data:[{id:"Service"},{id:"Server"},{id:"Broker"},{id:"Manager Server"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Service")]),title1:e(({value:a,isActive:t})=>[n("Server")]),title2:e(({value:a,isActive:t})=>[n("Broker")]),title3:e(({value:a,isActive:t})=>[n("Manager Server")]),tab0:e(({value:a,isActive:t})=>[B]),tab1:e(({value:a,isActive:t})=>[D]),tab2:e(({value:a,isActive:t})=>[S]),tab3:e(({value:a,isActive:t})=>[A]),_:1}),C,y,l(i,{id:"28",data:[{id:"Database 생성"},{id:"Volume 추가"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Database 생성")]),title1:e(({value:a,isActive:t})=>[n("Volume 추가")]),tab0:e(({value:a,isActive:t})=>[z]),tab1:e(({value:a,isActive:t})=>[I]),_:1}),L,l(m)])}const P=p(k,[["render",w],["__file","cli.html.vue"]]),N=JSON.parse('{"path":"/data-science/cubrid/cli.html","title":"CLI","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"CLI","description":"Cubrid > CLI","icon":"fas fa-terminal","category":["Relational Database","DB","Cubrid","CLI"],"tag":["cli","csql","cubrid","cubrid-service","cubrid-broker","cubrid-manager"]},"headers":[{"level":2,"title":"구동/종료","slug":"구동-종료","link":"#구동-종료","children":[]},{"level":2,"title":"데이터베이스 관리","slug":"데이터베이스-관리","link":"#데이터베이스-관리","children":[]},{"level":2,"title":"기타","slug":"기타","link":"#기타","children":[]}],"git":{},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"data-science/cubrid/cli.md","excerpt":"\\n\\n<hr>\\n<h2>구동/종료</h2>\\n\\n<hr>\\n<h2>데이터베이스 관리</h2>\\n\\n<hr>\\n<h2>기타</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#</span>\\n<span class=\\"token comment\\"># 실행중인 쿼리 조회</span>\\n<span class=\\"token comment\\">#</span>\\n<span class=\\"token function\\">watch</span> <span class=\\"token parameter variable\\">-n</span> <span class=\\"token number\\">1</span> cubrid translist <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">-p</span> <span class=\\"token operator\\">&lt;</span>접근 비밀번호<span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">&lt;</span>테이블스페이스명<span class=\\"token operator\\">&gt;</span>@<span class=\\"token operator\\">&lt;</span>IP주소<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">\\\\</span>\\n    --sort-key<span class=\\"token operator\\">=</span><span class=\\"token number\\">7</span> <span class=\\"token parameter variable\\">--reverse</span>\\n\\n<span class=\\"token comment\\">#</span>\\n<span class=\\"token comment\\"># 실행중인 쿼리 중지</span>\\n<span class=\\"token comment\\">#</span>\\ncubrid killtran <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">-p</span> <span class=\\"token operator\\">&lt;</span>접근 비밀번호<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">\\\\</span>\\n    <span class=\\"token parameter variable\\">-i</span> <span class=\\"token operator\\">&lt;</span>액티브번호<span class=\\"token operator\\">&gt;</span> <span class=\\"token operator\\">&lt;</span>테이블스페이스명<span class=\\"token operator\\">&gt;</span>@<span class=\\"token operator\\">&lt;</span>IP주소<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>"}');export{P as comp,N as data};
