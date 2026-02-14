import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as s,b as t,at as b,t as v,w as e,r,o as k,e as n}from"./app-6nZ4Bu4J.js";const g={},h={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"};function x(p,a){const c=r("router-link"),o=r("Tabs"),m=r("TagLinks");return k(),d("div",null,[s("h1",h,[s("a",f,[s("span",null,v(p.$frontmatter.title)+" 관련",1)])]),s("nav",y,[s("ul",null,[s("li",null,[t(c,{to:"#구동-종료"},{default:e(()=>a[0]||(a[0]=[n("구동/종료")])),_:1})]),s("li",null,[t(c,{to:"#데이터베이스-관리"},{default:e(()=>a[1]||(a[1]=[n("데이터베이스 관리")])),_:1})]),s("li",null,[t(c,{to:"#기타"},{default:e(()=>a[2]||(a[2]=[n("기타")])),_:1})])])]),a[15]||(a[15]=s("hr",null,null,-1)),a[16]||(a[16]=s("h2",{id:"구동-종료",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#구동-종료"},[s("span",null,"구동/종료")])],-1)),t(o,{data:[{id:"Service"},{id:"Server"},{id:"Broker"},{id:"Manager Server"}],active:0},{title0:e(({value:l,isActive:i})=>a[3]||(a[3]=[n("Service")])),title1:e(({value:l,isActive:i})=>a[4]||(a[4]=[n("Server")])),title2:e(({value:l,isActive:i})=>a[5]||(a[5]=[n("Broker")])),title3:e(({value:l,isActive:i})=>a[6]||(a[6]=[n("Manager Server")])),tab0:e(({value:l,isActive:i})=>a[7]||(a[7]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid service 실행")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid "),s("span",{class:"token function"},"service"),n(" start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid master start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid master start: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid broker start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid broker start: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid manager server start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid manager server start: success")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid service 종료")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid "),s("span",{class:"token function"},"service"),n(" stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid broker stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid broker stop: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid manager server stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid manager server stop: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid master stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid master stop: success")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:e(({value:l,isActive:i})=>a[8]||(a[8]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid server 구동")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid server start "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid server start: <DB이름>")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# This may take a long time depending on the amount of recovery works to do.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# CUBRID R9.2")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid server start: success")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid server 종료")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid server stop "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid server stop: <DB이름>")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# Server <DB이름> notified of shutdown.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# This may take several minuts. Please wait.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid server stop: success")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab2:e(({value:l,isActive:i})=>a[9]||(a[9]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid broker 구동")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},"cubrid broker start"),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid broker start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid broker start: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# (이미 구동중일 경우) ++ cubrid broker is already running")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid broker 종료")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},"cubrid broker stop"),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid broker stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid broker stop: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# (이미 종요되어 있을 경우) ++ cubrid broker is not running")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab3:e(({value:l,isActive:i})=>a[10]||(a[10]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid manager 구동")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},"cubrid manager start"),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid manager server start")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid manager server start: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# (이미 구동중일 경우) ++ cubrid manager server is already running")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid manager 종료")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ")]),n(`
`),s("span",{class:"line"},"cubrid manager stop"),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# @ cubrid manager server stop")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ++ cubrid manager server stop: success")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# (이미 종요되어 있을 경우) ++ cubrid manager server is not running")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),a[17]||(a[17]=s("hr",null,null,-1)),a[18]||(a[18]=s("h2",{id:"데이터베이스-관리",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#데이터베이스-관리"},[s("span",null,"데이터베이스 관리")])],-1)),t(o,{data:[{id:"Database 생성"},{id:"Volume 추가"}],active:0},{title0:e(({value:l,isActive:i})=>a[11]||(a[11]=[n("Database 생성")])),title1:e(({value:l,isActive:i})=>a[12]||(a[12]=[n("Volume 추가")])),tab0:e(({value:l,isActive:i})=>a[13]||(a[13]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# cubrid database 생성")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid createdb "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  --db-volume-size"),s("span",{class:"token operator"},"="),n("512M "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token parameter variable"},"-F"),n(" /data "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  --log-volume-size"),s("span",{class:"token operator"},"="),n("200M "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token parameter variable"},"-L"),n(" /log "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">"),n(" ko_KR.utf8")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ======================== 옵션 ========================")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -F  --file-path       초기 볼륨이 위치할 경로 지정")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -L  --log-path        로그 볼륨이 위치할 경로 지정")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -B  --lob-base-path   LOB파일이 저장될 위치 경로 지정")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# -r  --replace         DB가 이미 존재하는 경우 기존 데이터베이스를 삭제하고 재생성함.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     --db-volume-size  생성되는 데이터베이스 볼륨의 크기를 바이트 단위로 지정한다.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     --db-page-size    데이터베이스 페이지의 크기를 바이트 단위로 지정한다.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     --log-volume-size 로그 볼륨의 크기를 지정한다.")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#     --log-page-size   로그 볼륨의 페이지 크기를 바이트 단위로 지정한다.")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:e(({value:l,isActive:i})=>a[14]||(a[14]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[s("pre",null,[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# Cubrid DB Volume 추가")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[n("cubrid addvoldb "),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" data "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token parameter variable"},"-n"),n(" edudb_data_x001 "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  --db-volume-size 2G "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">")]),n(`
`),s("span",{class:"line"},[n("cubrid addvoldb "),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" index "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token parameter variable"},"-n"),n(" edudb_index_x002 "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  --db-volume-size 1G "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">")]),n(`
`),s("span",{class:"line"},[n("cubrid addvoldb "),s("span",{class:"token parameter variable"},"-S"),n(),s("span",{class:"token parameter variable"},"-p"),n(" temp "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token parameter variable"},"-n"),n(" edudb_temp_x003 "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  --db-volume-size 1G "),s("span",{class:"token punctuation"},"\\")]),n(`
`),s("span",{class:"line"},[n("  "),s("span",{class:"token operator"},"<"),n("DB이름"),s("span",{class:"token operator"},">")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"# ======================== 옵션 ========================")]),n(`
`),s("span",{class:"line"},[s("span",{class:"token comment"},"#")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),a[19]||(a[19]=b(`<hr><h2 id="기타" tabindex="-1"><a class="header-anchor" href="#기타"><span>기타</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 실행중인 쿼리 조회</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token function">watch</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> cubrid translist <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>접근 비밀번호<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>테이블스페이스명<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>IP주소<span class="token operator">&gt;</span> <span class="token punctuation">\\</span></span>
<span class="line">    --sort-key<span class="token operator">=</span><span class="token number">7</span> <span class="token parameter variable">--reverse</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 실행중인 쿼리 중지</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line">cubrid killtran <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>접근 비밀번호<span class="token operator">&gt;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>액티브번호<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>테이블스페이스명<span class="token operator">&gt;</span>@<span class="token operator">&lt;</span>IP주소<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,4)),t(m)])}const C=u(g,[["render",x]]),A=JSON.parse('{"path":"/data-science/cubrid/cli.html","title":"CLI","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"CLI","description":"Cubrid > CLI","icon":"fas fa-terminal","category":["Relational Database","DB","Cubrid","CLI"],"tag":["cli","csql","cubrid","cubrid-service","cubrid-broker","cubrid-manager"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CLI\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/data-science/cubrid/cli.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"CLI"}],["meta",{"property":"og:description","content":"Cubrid > CLI"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"cubrid-manager"}],["meta",{"property":"article:tag","content":"cubrid-broker"}],["meta",{"property":"article:tag","content":"cubrid-service"}],["meta",{"property":"article:tag","content":"cubrid"}],["meta",{"property":"article:tag","content":"csql"}],["meta",{"property":"article:tag","content":"cli"}]]},"git":{},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"data-science/cubrid/cli.md"}');export{C as comp,A as data};
