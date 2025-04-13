import{S as a}from"./Setup-BlWZlPgP.js";const l=a.axios,h=/https:\/\/github.com\//g,b="https://github.com",k="https://api.github.com",m="https://news.ycombinator.com",u="https://devo-platforms.burakkarakan.com",v=`${u}/github.json`,_=`${u}/hackernews.json`,e=`${a.BASEURL}/json/github`,E=`${a.BASEURL}/json/github-color.json`,U=["android","apl","assembly","awk","basic","batchfile","blade","c","clojure","common-lisp","cpp","crystal","cs","dart","dockerfile","elixir","elm","fortran","gdscript","go","haskell","hcl","haxe","java","js","js-react","js-svelte","js-vue","julia","jupyter-notebook","kotlin","lua","mdx","nextflow","objc","ocaml","prolog","php","pwsh","py","qml","r","ruby","rust","scala","scss","sh","solidity","sql","swift","tex","ts","ts-react","ts-vue","ts-svelte","wasm","v","vala","vdhl","verilog","vim-script","zig"].map(t=>`${e}/lang-${t}.json`),A=["c","cpp","cs","dart","dockerfile","go","java","android","haskell","js","jupyter-notebook","kotlin","lua","php","pwsh","py","ruby","rust","sh","swift","ts"].map(t=>`${e}/lang-${t}-tut.json`),B=["awesome-list","tutorial-basic","tutorial-devops","career-info","portfolio","free-books","free-images"].map(t=>`${e}/${t}.json`);let c=[];for(const t of[...U,...A,...B])l.get(t).then(o=>o.data??[]).then(o=>{c.push(...o)}).catch(o=>console.error(`failed to fetch ${t} ...`,o));const d=()=>c.map(t=>`/${t==null?void 0:t.repo}`),f=()=>c.map(t=>t==null?void 0:t.desc),g=t=>{var o,s,n,r;return t!=null&&t!=null&&((o=t==null?void 0:t.repo)==null?void 0:o.link)!=null&&((s=t==null?void 0:t.repo)==null?void 0:s.link)!=null&&((n=t==null?void 0:t.repo)==null?void 0:n.description)!=null&&((r=t==null?void 0:t.repo)==null?void 0:r.description)!=null&&(!d().includes(t.repo.link)||!f().includes(t.repo.description))},j=t=>{var o,s,n,r,i,p;return t!=null&&t!=null&&((o=t==null?void 0:t.repo)==null?void 0:o.link)!=null&&((s=t==null?void 0:t.repo)==null?void 0:s.link)!=null&&((n=t==null?void 0:t.repo)==null?void 0:n.description)!=null&&((r=t==null?void 0:t.repo)==null?void 0:r.description)!=null&&(!d().includes(`/${(i=t==null?void 0:t.repo)==null?void 0:i.link}`.replace(h,""))||!f().includes((p=t==null?void 0:t.repo)==null?void 0:p.description))};function R(){return l.get(E).then(t=>t.data).then(t=>t??{}).catch(t=>console.error("failed to fetch data",t))}function $(t=!1){return l.get(v).then(o=>o.data??[]).then(o=>t?o.filter(g):o).catch(o=>(console.error("failed to fetch data",o),[]))}function w(t=!1){return l.get(_).then(o=>o.data??[]).then(o=>t?o.filter(j):o).catch(o=>(console.error("failed to fetch data",o),[]))}function L(t=""){let o=(t==null?void 0:t.replace(/\s/g,""))??"";if(o==""){console.warn("no fullName FOUND!");return}let s=o.split("/");if(s.length!=2)if(s.length>2)o=o.split("/",2).join("/");else{console.warn(`invalid fullName ... ${o}`);return}return console.log("fetch ..."),l.get(`${k}/repos/${o}`).then(n=>n.data??{}).then(n=>n).catch(n=>(console.warn("Error:",n),{}))}function O(t){console.log("openAll ...")}const T={BASEURL_GITHUB:b,BASEURL_YCOMBINATOR:m,REGEX_GITHUB_BASEURL:h,reposToExclude:c,filterPredicate:g,filterHackernewsPredicate:j,fetchGitubColors:R,fetchGithubRepos:$,fetchHackernews:w,fetchGithubDetail:L,openAll:O};export{T as D};
