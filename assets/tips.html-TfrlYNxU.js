import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,d as n,t as k,b as i,h as a,av as b,aw as v,r,o as g,e as s}from"./app-vQERoX8y.js";const h={},y={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},w={class:"hint-container info"};function E(o,e){const c=r("CodeTabs"),p=r("VPCard"),m=r("TagLinks");return g(),u("div",null,[n("h1",y,[n("a",f,[n("span",null,k(o.$frontmatter.title)+" 관련",1)])]),e[15]||(e[15]=n("nav",{class:"table-of-contents"},[n("ul")],-1)),e[16]||(e[16]=n("hr",null,null,-1)),i(c,{id:"7",data:[{id:"NET"},{id:"SLMGR"},{id:"POWERCFG"},{id:"BCDEDIT"},{id:"REG"},{id:"SFC"},{id:"Others"}],active:0,"tab-id":"batch"},{title0:a(({value:t,isActive:l})=>e[0]||(e[0]=[s("NET")])),title1:a(({value:t,isActive:l})=>e[1]||(e[1]=[s("SLMGR")])),title2:a(({value:t,isActive:l})=>e[2]||(e[2]=[s("POWERCFG")])),title3:a(({value:t,isActive:l})=>e[3]||(e[3]=[s("BCDEDIT")])),title4:a(({value:t,isActive:l})=>e[4]||(e[4]=[s("REG")])),title5:a(({value:t,isActive:l})=>e[5]||(e[5]=[s("SFC")])),title6:a(({value:t,isActive:l})=>e[6]||(e[6]=[s("Others")])),tab0:a(({value:t,isActive:l})=>e[7]||(e[7]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: Windows 사용자 조회")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"NET"),s(" USER")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: Windows 사용자 비밀번호 변경")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"NET"),s(" USER <LOGINID> <NEW_PASSWORD>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 관리자계정 비활성화 (`no`) / 활성화 (`yes`)")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"NET"),s(" USER administrator "),n("span",{class:"token parameter attr-name"},[s("/active"),n("span",{class:"token punctuation"},":")]),s("no")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:t,isActive:l})=>e[8]||(e[8]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 인증키 레지스트리 제거")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"SLMGR"),s(),n("span",{class:"token parameter attr-name"},"/cpky")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 인증키 제품키 제거")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"SLMGR"),s(),n("span",{class:"token parameter attr-name"},"/upk")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 제품키 시리얼 인증")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"SLMGR"),s(),n("span",{class:"token parameter attr-name"},"/ipk"),s(" <제품번호>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 제품키 인증상태 확인")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"SLMGR"),s(),n("span",{class:"token parameter attr-name"},"/dlv")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab2:a(({value:t,isActive:l})=>e[9]||(e[9]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: 최대 절전 모드 해제")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"POWERCFG"),s(),n("span",{class:"token parameter attr-name"},"/hibernate"),s(" off")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 전원설정 - 최고의 성능")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"POWERCFG"),s(" -duplicatescheme e9a42b02-d5df-448d-aa00-03f14749eb61")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab3:a(({value:t,isActive:l})=>e[10]||(e[10]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: 프리징 현상 해결")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"BCDEDIT"),s(),n("span",{class:"token parameter attr-name"},"/set"),s(" disabledynamictick yes")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 안전모드 F8 사용")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"BCDEDIT"),s(),n("span",{class:"token parameter attr-name"},"/set"),s(" {default} bootmenupolicy legacy")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 안전모드 F8 해지")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"BCDEDIT"),s(),n("span",{class:"token parameter attr-name"},"/set"),s(" {default} bootmenupolicy standard")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab4:a(({value:t,isActive:l})=>e[11]||(e[11]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 시리얼번호 확인")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"REG"),s(" query "),n("span",{class:"token string"},'"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\SoftwareProtectionPlatform"'),s(),n("span",{class:"token parameter attr-name"},"/v"),s(" BackupProductKeyDefault`")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우11 탐색기 버벅임 제거 ")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"REG"),s(" add "),n("span",{class:"token string"},'"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Shell Extensions\\Blocked"'),s(),n("span",{class:"token parameter attr-name"},"/v"),s(" {e2bf9676-5f8f-435c-97eb-11607a5bedf7} "),n("span",{class:"token parameter attr-name"},"/f")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우10 바탕화면 이미지 품질저하 문제 해결")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"REG"),s(" add "),n("span",{class:"token string"},'"HKEY_CURRENT_USER\\Control Panel\\Desktop"'),s(),n("span",{class:"token parameter attr-name"},"/v"),s(),n("span",{class:"token string"},'"JPEGImportQuality"'),s(),n("span",{class:"token parameter attr-name"},"/t"),s(" REG_DWORD "),n("span",{class:"token parameter attr-name"},"/d"),s(),n("span",{class:"token string"},'"100"'),s(),n("span",{class:"token parameter attr-name"},"/f")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab5:a(({value:t,isActive:l})=>e[12]||(e[12]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: 시스템 파일 검사기 도구")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"SFC"),s(),n("span",{class:"token parameter attr-name"},"/scannow")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab6:a(({value:t,isActive:l})=>e[13]||(e[13]=[n("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[n("pre",null,[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},":: DNS 캐시 삭제 (관리자 권한)")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"IPCONFIG"),s(),n("span",{class:"token parameter attr-name"},"/flushdns")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: C:\\Windows\\Installer\\$PatchCache$` 폴더 삭제")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"RMDIR"),s(),n("span",{class:"token parameter attr-name"},"/q"),s(),n("span",{class:"token parameter attr-name"},"/s"),s(),n("span",{class:"token variable"},"%WINDIR%"),s("\\Installer\\$PatchCache$")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 하드 디스크 정보 제거s")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"CIPHER"),s(),n("span",{class:"token parameter attr-name"},[s("/w"),n("span",{class:"token punctuation"},":")]),s("d:")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},":: 윈도우 업데이트 제거 (관리자 권한)")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token command"},[n("span",{class:"token keyword"},"WUSA"),s(),n("span",{class:"token parameter attr-name"},"/uninstall"),s(),n("span",{class:"token parameter attr-name"},[s("/KB"),n("span",{class:"token punctuation"},":")]),n("span",{class:"token number"},"4535996"),s(),n("span",{class:"token parameter attr-name"},"/norestart")])]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),e[17]||(e[17]=n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"명령어"),n("th",{style:{"text-align":"left"}},"설명")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"WSReset.exe")]),n("td",{style:{"text-align":"left"}},"윈도우 스토어 캐쉬 삭제")])])],-1)),n("div",w,[e[14]||(e[14]=n("p",{class:"hint-container-title"},"Window Environment Setup",-1)),i(p,b(v({title:"Windows > Environment Setup",desc:"Environment Setup",link:"/devops/windows/env-setup.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16)]),e[18]||(e[18]=n("hr",null,null,-1)),i(m)])}const S=d(h,[["render",E],["__file","tips.html.vue"]]),T=JSON.parse('{"path":"/programming/batchfile/tips.html","title":"Tips","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Tips","description":"Batchfile > Tips","icon":"fas fa-lightbulb","category":["Batchfile","Tips"],"tag":["cli","bat","batchfile","win","windows","windows-terminal","net","slmgr"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/batchfile/tips.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Tips"}],["meta",{"property":"og:description","content":"Batchfile > Tips"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"cli"}],["meta",{"property":"article:tag","content":"bat"}],["meta",{"property":"article:tag","content":"batchfile"}],["meta",{"property":"article:tag","content":"win"}],["meta",{"property":"article:tag","content":"windows"}],["meta",{"property":"article:tag","content":"windows-terminal"}],["meta",{"property":"article:tag","content":"net"}],["meta",{"property":"article:tag","content":"slmgr"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tips\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.66,"words":197},"filePathRelative":"programming/batchfile/tips.md","excerpt":"\\n\\n<hr>\\n\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">명령어</th>\\n<th style=\\"text-align:left\\">설명</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\"><code>WSReset.exe</code></td>\\n<td style=\\"text-align:left\\">윈도우 스토어 캐쉬 삭제</td>\\n</tr>\\n</tbody>\\n</table>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">Window Environment Setup</p>\\n</div>"}');export{S as comp,T as data};