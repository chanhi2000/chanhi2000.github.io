import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,f as u,h as f,d as t,b as s,c as v,g as c,e as C}from"./app-vQERoX8y.js";const y={name:"Profile",data(){return{upHere:!1}},methods:{navigate(o=""){window.open(o)},doCopy(){if(!document.queryCommandSupported("copy"))return alert("복사하기가 지원되지 않는 브라우저입니다.");const o=document.createElement("textarea");o.value="chanhi2000@gmail.com",o.style.top=0,o.style.left=0,o.style.position="fixed",document.body.appendChild(o),o.focus(),o.select(),document.execCommand("copy"),document.body.removeChild(o),alert("클립보드에 이메일 주소가 복사되었습니다!")}}},_={class:"profile__content"},g={class:"profile__name"};function k(o,e,b,x,a,i){const r=l("FontIcon"),p=l("ClientOnly");return d(),u(p,null,{default:f(()=>[t("div",{class:"profile",onMouseover:e[4]||(e[4]=n=>a.upHere=!0),onMouseleave:e[5]||(e[5]=n=>a.upHere=!1)},[e[8]||(e[8]=t("img",{class:"profile__image",src:"https://avatars.githubusercontent.com/u/6296241?v=4"},null,-1)),t("div",_,[t("div",g,[e[6]||(e[6]=t("span",null,"이찬희 (MarkiiimarK)",-1)),t("a",{class:"profile__github",onClick:e[0]||(e[0]=n=>i.navigate("https://github.com/chanhi2000"))},[s(r,{icon:"iconfont icon-github"})]),t("a",{class:"profile-notion",onClick:e[1]||(e[1]=n=>i.navigate("https://markiiimark.notion.site/MarkiiimarK-Fullstack-DevOps-c231ae6c157d4baba89a3713c92449dd"))},[s(r,{icon:"iconfont icon-notion"})]),t("a",{class:"profile-mail",onClick:e[2]||(e[2]=(...n)=>i.doCopy&&i.doCopy(...n))},[s(r,{icon:"fas fa-envelope"})]),a.upHere?(d(),v("div",{key:0,class:"mail-box",onClick:e[3]||(e[3]=(...n)=>i.doCopy&&i.doCopy(...n))}," chanhi2000@gmail.com ")):c("v-if",!0)]),e[7]||(e[7]=t("div",{class:"profile__desc"},[C(" Never Stop Learning. Get Your Hands Dirty."),t("br"),c(" 블로그 제작 문의는 메일로 보내주세요!! ")],-1))])],32)]),_:1})}const B=m(y,[["render",k],["__scopeId","data-v-bf3ca1c4"],["__file","Profile.vue"]]);export{B as default};