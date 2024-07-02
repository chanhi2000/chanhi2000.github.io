import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as v,c as k,a as n,t as b,b as e,n as g,g as h,d as s,w as o,e as c}from"./app-CtVGPIIl.js";const _={},f={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},x=n("nav",{class:"table-of-contents"},[n("ul")],-1),w=n("p",null,"최종 war를 Maven 저장소로 배포",-1),P=n("code",null,"./<war으로 묶어 줄 모듈>/",-1),j=n("code",null,"build.gradle",-1),S=n("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy","data-title":"groovy"},[n("pre",{class:"language-groovy"},[n("code",null,[s("plugins "),n("span",{class:"token punctuation"},"{"),s(`
    id `),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"java"')]),s(`
    id `),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"war"')]),s(`
    id `),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"maven-publish"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// ... "),s(`
dependencies `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

publishing `),n("span",{class:"token punctuation"},"{"),s(`
    publications `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"maven"),n("span",{class:"token punctuation"},"("),s("MavenPublication"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            groupId `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"<그룹ID>"')]),s(`
            artifactId `),n("span",{class:"token operator"},"="),s(" rootProject"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token comment"},"// 또는 최총 아티펙트명"),s(`
            version `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"버전명"')]),s(`
            from components`),n("span",{class:"token punctuation"},"."),s(`web

            pom `),n("span",{class:"token punctuation"},"{"),s(`
                name `),n("span",{class:"token operator"},"="),s(" rootProject"),n("span",{class:"token punctuation"},"."),s(`name
                description `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"..."')]),s(`
                url `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"..."')]),s(`
                licenses `),n("span",{class:"token punctuation"},"{"),s(`
                    license `),n("span",{class:"token punctuation"},"{"),s(`
                        name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"..."')]),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
                scm `),n("span",{class:"token punctuation"},"{"),s(`
                    connection `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token interpolation-string"},[n("span",{class:"token string"},'"..."')]),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    repositories `),n("span",{class:"token punctuation"},"{"),s(`
        maven `),n("span",{class:"token punctuation"},"{"),s(`
            url `),n("span",{class:"token operator"},"="),s(" repo"),n("span",{class:"token punctuation"},"."),s(`releaseUrl
            credentials `),n("span",{class:"token punctuation"},"{"),s(`
                username `),n("span",{class:"token operator"},"="),s(" project"),n("span",{class:"token punctuation"},"."),s("nexusUsername "),n("span",{class:"token comment"},"// gradle.properties에서 지정"),s(`
                password `),n("span",{class:"token operator"},"="),s(" project"),n("span",{class:"token punctuation"},"."),s("nexusPassword "),n("span",{class:"token comment"},"// gradle.properties에서 지정"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

publish`),n("span",{class:"token punctuation"},"."),s(`dependsOn war
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt","data-title":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token comment"},"// TODO: 작성"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),I=n("code",null,"./",-1),R=n("code",null,"gradle.properties",-1),A=c(`<div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># nexus</span>
<span class="token comment">#</span>
<span class="token comment"># 아래 내용은 배포할 서버마다 다르므로 값 부여 방법만 참고</span>
<span class="token key attr-name">nexusUsername</span><span class="token punctuation">=</span><span class="token value attr-value">admin</span>
<span class="token key attr-name">nexusPassword</span><span class="token punctuation">=</span><span class="token value attr-value">admin123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V=c(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gradlew <span class="token operator">&lt;</span>모듈명<span class="token operator">&gt;</span>:publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>`,2);function D(r,E){const p=t("VPCard"),a=t("FontIcon"),u=t("Tabs"),d=t("TagLinks");return v(),k("div",null,[n("h1",f,[n("a",y,[n("span",null,b(r.$frontmatter.title)+" 관련",1)])]),e(p,g(h({title:"Gradle > Snippets",desc:"Snippets",link:"/programming/gradle/snippets/README.md",logo:"/images/ico-wind.svg",background:"rgba(10,10,10,0.2)"})),null,16),x,w,n("blockquote",null,[n("p",null,[s("."),e(a,{icon:"fas fa-folder-open"}),P,e(a,{icon:"iconfont icon-gradle"}),j])]),e(u,{id:"15",data:[{id:'<FontIcon icon="iconfont icon-gradle"/>Groovy'},{id:'<FontIcon icon="iconfont icon-kotlin"/>Kotlin'}],active:0},{title0:o(({value:i,isActive:l})=>[e(a,{icon:"iconfont icon-gradle"}),s("Groovy")]),title1:o(({value:i,isActive:l})=>[e(a,{icon:"iconfont icon-kotlin"}),s("Kotlin")]),tab0:o(({value:i,isActive:l})=>[S]),tab1:o(({value:i,isActive:l})=>[T]),_:1}),n("blockquote",null,[n("p",null,[s("."),e(a,{icon:"fas fa-folder-open"}),I,e(a,{icon:"fas fa-file-lines"}),R])]),A,n("p",null,[s("."),e(a,{icon:"iconfont icon-shell"}),s("실행 시")]),V,e(d)])}const F=m(_,[["render",D],["__file","publish-to-repository.html.vue"]]),G=JSON.parse('{"path":"/programming/gradle/snippets/publish-to-repository.html","title":"아티팩트를 저장소로 배포","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"아티팩트를 저장소로 배포","description":"Snippets > 아티팩트를 저장소로 배포","icon":"fas fa-upload","category":["Gradle","Snippets"],"tag":["gradle","groovy","idea","intellij-idea","intellij","executable-jar","repository","maven-repository","upload"],"head":[[{"meta":null},{"property":"og:title","content":"Snippets > 아티팩트를 저장소로 배포"},{"property":"og:description","content":"아티팩트를 저장소로 배포"},{"property":"og:url","content":"https://chanhi2000.github.io/programming/gradle/snippets/publish-to-repository.html"}]],"prev":"/programming/gradle/snippets/README.md"},"headers":[],"git":{},"readingTime":{"minutes":0.66,"words":198},"filePathRelative":"programming/gradle/snippets/publish-to-repository.md","excerpt":"\\n"}');export{F as comp,G as data};
