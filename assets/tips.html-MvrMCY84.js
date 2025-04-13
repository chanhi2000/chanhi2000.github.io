import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,d as a,t as b,b as e,h as t,e as n,r as p,o as v}from"./app-BOC_CZQO.js";const h={},g={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},x={id:"download",tabindex:"-1"},j={class:"header-anchor",href:"#download"},F={id:"upload",tabindex:"-1"},A={class:"header-anchor",href:"#upload"};function E(m,s){const r=p("router-link"),o=p("FontIcon"),c=p("Tabs"),d=p("TagLinks");return v(),k("div",null,[a("h1",g,[a("a",f,[a("span",null,b(m.$frontmatter.title)+" 관련",1)])]),a("nav",y,[a("ul",null,[a("li",null,[e(r,{to:"#artifacts"},{default:t(()=>s[0]||(s[0]=[n("Artifacts")])),_:1}),a("ul",null,[a("li",null,[e(r,{to:"#download"},{default:t(()=>[e(o,{icon:"fas fa-download"}),s[1]||(s[1]=n("Download"))]),_:1})]),a("li",null,[e(r,{to:"#upload"},{default:t(()=>[e(o,{icon:"fas fa-upload"}),s[2]||(s[2]=n("Upload"))]),_:1})])])]),a("li",null,[e(r,{to:"#update-pom"},{default:t(()=>s[3]||(s[3]=[n("Update *.pom")])),_:1})])])]),s[18]||(s[18]=a("hr",null,null,-1)),s[19]||(s[19]=a("h2",{id:"artifacts",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#artifacts"},[a("span",null,"Artifacts")])],-1)),a("h3",x,[a("a",j,[a("span",null,[e(o,{icon:"fas fa-download"}),s[4]||(s[4]=n("Download"))])])]),s[20]||(s[20]=a("p",null,"From Maven Central",-1)),e(c,{id:"16",data:[{id:'<FontIcon icon="iconfont icon-shell"/>shell'},{id:'<FontIcon icon="fas fa-gears"/>cmd'}],active:0},{title0:t(({value:l,isActive:i})=>[e(o,{icon:"iconfont icon-shell"}),s[5]||(s[5]=n("shell"))]),title1:t(({value:l,isActive:i})=>[e(o,{icon:"fas fa-gears"}),s[6]||(s[6]=n("cmd"))]),tab0:t(({value:l,isActive:i})=>s[7]||(s[7]=[a("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-H"),n(),a("span",{class:"token string"},'"Accept: application/zip"'),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar"'),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"-o"),n(" kotlin-test-1.2.0.jar")]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),tab1:t(({value:l,isActive:i})=>s[8]||(s[8]=[a("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-H"),n(),a("span",{class:"token string"},'"Accept: application/zip"'),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"https://repo1.maven.org/maven2/org/jetbrains/kotlin/kotlin-test/1.2.0/kotlin-test-1.2.0.jar"'),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"-o"),n(" kotlin-test"),a("span",{class:"token number"},"-1"),n("."),a("span",{class:"token number"},"2"),n("."),a("span",{class:"token number"},"0"),n(".jar")])]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),_:1}),a("h3",F,[a("a",A,[a("span",null,[e(o,{icon:"fas fa-upload"}),s[9]||(s[9]=n("Upload"))])])]),s[21]||(s[21]=a("p",null,"to Local Nexus Repository",-1)),e(c,{id:"30",data:[{id:'<FontIcon icon="iconfont icon-shell"/>shell'},{id:'<FontIcon icon="fas fa-gears"/>cmd'}],active:0},{title0:t(({value:l,isActive:i})=>[e(o,{icon:"iconfont icon-shell"}),s[10]||(s[10]=n("shell"))]),title1:t(({value:l,isActive:i})=>[e(o,{icon:"fas fa-gears"}),s[11]||(s[11]=n("cmd"))]),tab0:t(({value:l,isActive:i})=>s[12]||(s[12]=[a("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token parameter variable"},"-u"),n(" admin:admin123 --upload-file "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/service/local/artifact/maven/content"'),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"r"),a("span",{class:"token operator"},"="),n("thirdparty "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"hasPom"),a("span",{class:"token operator"},"="),n("false "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"e"),a("span",{class:"token operator"},"="),n("jar "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"p"),a("span",{class:"token operator"},"="),n("jar "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"g"),a("span",{class:"token operator"},"="),n("org.jetbrains.kotlin "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"a"),a("span",{class:"token operator"},"="),n("kotlin-util-klib-metadata "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"v"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1.7"),n(".20 "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"-F"),n(),a("span",{class:"token assign-left variable"},"file"),a("span",{class:"token operator"},"="),n("@kotlin-util-klib-metadata-1.7.20.jar")]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),tab1:t(({value:l,isActive:i})=>s[13]||(s[13]=[a("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-v"),n(),a("span",{class:"token parameter attr-name"},"-u"),n(" admin:admin123 "),a("span",{class:"token parameter attr-name"},"--upload-file"),n(),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/service/local/artifact/maven/content"'),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"-F"),n(" r=thirdparty "),a("span",{class:"token parameter attr-name"},"-F"),n(" hasPom=false "),a("span",{class:"token parameter attr-name"},"-F"),n(" e=jar "),a("span",{class:"token parameter attr-name"},"-F"),n(" p=jar "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"-F"),n(" g=org.jetbrains.kotlin "),a("span",{class:"token parameter attr-name"},"-F"),n(" a=kotlin-util-klib-metadata "),a("span",{class:"token parameter attr-name"},"-F"),n(" v="),a("span",{class:"token number"},"1"),n("."),a("span",{class:"token number"},"7"),n("."),a("span",{class:"token number"},"20"),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"-F"),n(" file=@kotlin-util-klib-metadata"),a("span",{class:"token number"},"-1"),n("."),a("span",{class:"token number"},"7"),n("."),a("span",{class:"token number"},"20"),n(".jar")])]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),_:1}),s[22]||(s[22]=a("hr",null,null,-1)),s[23]||(s[23]=a("h2",{id:"update-pom",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#update-pom"},[a("span",null,[n("Update "),a("code",null,"*.pom")])])],-1)),s[24]||(s[24]=a("p",null,"in Local Nexus Repository",-1)),e(c,{id:"45",data:[{id:'<FontIcon icon="iconfont icon-shell"/>Shell'},{id:'<FontIcon icon="fas fa-gears"/>cmd'}],active:0},{title0:t(({value:l,isActive:i})=>[e(o,{icon:"iconfont icon-shell"}),s[14]||(s[14]=n("Shell"))]),title1:t(({value:l,isActive:i})=>[e(o,{icon:"fas fa-gears"}),s[15]||(s[15]=n("cmd"))]),tab0:t(({value:l,isActive:i})=>s[16]||(s[16]=[a("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token comment"},"# Delete all pom related files")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token parameter variable"},"-u"),n(" admin:admin123 "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"--request"),n(" DELETE "),a("span",{class:"token parameter variable"},"--silent"),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"')]),n(`
`),a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token parameter variable"},"-u"),n(" admin:admin123 "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"--request"),n(" DELETE "),a("span",{class:"token parameter variable"},"--silent"),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.md5"')]),n(`
`),a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token parameter variable"},"-u"),n(" admin:admin123 "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter variable"},"--request"),n(" DELETE "),a("span",{class:"token parameter variable"},"--silent"),n(),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.sha1"')]),n(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"# Upload All    ")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token function"},"curl"),n(),a("span",{class:"token parameter variable"},"-v"),n(),a("span",{class:"token parameter variable"},"-u"),n(" admin:admin123 "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    --upload-file kotlin-stdlib-1.3.11.pom "),a("span",{class:"token punctuation"},"\\")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"')]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),tab1:t(({value:l,isActive:i})=>s[17]||(s[17]=[a("div",{class:"language-batch line-numbers-mode","data-highlighter":"prismjs","data-ext":"batch","data-title":"batch"},[a("pre",null,[a("code",null,[a("span",{class:"line"},[a("span",{class:"token comment"},"REM Delete all pom related files")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-v"),n(),a("span",{class:"token parameter attr-name"},"-u"),n(" admin:admin123 "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"--request"),n(" DELETE "),a("span",{class:"token parameter attr-name"},"--silent"),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"')])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-v"),n(),a("span",{class:"token parameter attr-name"},"-u"),n(" admin:admin123 "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"--request"),n(" DELETE "),a("span",{class:"token parameter attr-name"},"--silent"),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.md5"')])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-v"),n(),a("span",{class:"token parameter attr-name"},"-u"),n(" admin:admin123 "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"--request"),n(" DELETE "),a("span",{class:"token parameter attr-name"},"--silent"),n(),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom.sha1"')])]),n(`
`),a("span",{class:"line"},[a("span",{class:"token comment"},"REM Upload All    ")]),n(`
`),a("span",{class:"line"},[a("span",{class:"token command"},[a("span",{class:"token keyword"},"curl"),n(),a("span",{class:"token parameter attr-name"},"-v"),n(),a("span",{class:"token parameter attr-name"},"-u"),n(" admin:admin123 "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token parameter attr-name"},"--upload-file"),n(" kotlin-stdlib"),a("span",{class:"token number"},"-1"),n("."),a("span",{class:"token number"},"3"),n("."),a("span",{class:"token number"},"11"),n(".pom "),a("span",{class:"token operator"},"^")]),n(`
`),a("span",{class:"line"},[n("    "),a("span",{class:"token string"},'"http://10.60.175.90:9880/nexus/content/repositories/thirdparty/org/jetbrains/kotlin/kotlin-stdlib/1.3.11/kotlin-stdlib-1.3.11.pom"')])]),n(`
`),a("span",{class:"line"})])]),a("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)])),_:1}),e(d)])}const R=u(h,[["render",E],["__file","tips.html.vue"]]),D=JSON.parse('{"path":"/devops/nexus/tips.html","title":"Tips","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Tips","description":"Nexus Repository > Tips","icon":"fas fa-lightbulb","category":["Nexus Repository","Tips"],"tag":["nexus","sonatype-nexus","docker","http","maven"],"head":[["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/nexus/tips.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Tips"}],["meta",{"property":"og:description","content":"Nexus Repository > Tips"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"nexus"}],["meta",{"property":"article:tag","content":"sonatype-nexus"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:tag","content":"maven"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tips\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Artifacts","slug":"artifacts","link":"#artifacts","children":[{"level":3,"title":"Download","slug":"download","link":"#download","children":[]},{"level":3,"title":"Upload","slug":"upload","link":"#upload","children":[]}]},{"level":2,"title":"Update *.pom","slug":"update-pom","link":"#update-pom","children":[]}],"git":{},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"devops/nexus/tips.md","excerpt":"\\n\\n<hr>\\n<h2>Artifacts</h2>\\n<h3></h3>\\n<p>From Maven Central</p>\\n\\n<h3></h3>\\n<p>to Local Nexus Repository</p>\\n\\n<hr>\\n<h2>Update <code>*.pom</code></h2>\\n<p>in Local Nexus Repository</p>\\n\\n"}');export{R as comp,D as data};
