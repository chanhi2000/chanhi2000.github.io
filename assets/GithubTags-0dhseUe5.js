import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as g,o as s,c as a,a as u,F as p,b as i}from"./app-vQERoX8y.js";const m={name:"GithubTags",props:{tagItems:{type:String,required:!0}},computed:{tags(){return this.tagItems.slice().split(";").map(t=>({tag:t,href:`https://github.com/topics/${t}`}))}}},_=["href"];function l(n,t,d,f,h,e){const o=g("Badge");return s(!0),a(p,null,u(Object.keys(e.tags),r=>(s(),a("a",{key:r,href:e.tags[r].href},[i(o,{type:"info",vertical:"middle",text:e.tags[r].tag},null,8,["text"])],8,_))),128)}const k=c(m,[["render",l],["__file","GithubTags.vue"]]);export{k as default};