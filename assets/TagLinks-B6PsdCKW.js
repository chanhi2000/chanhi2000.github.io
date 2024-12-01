import o from"./Profile-C4740kdv.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as n,c as r,a as s,d as c}from"./app-DU87EthQ.js";const i={name:"TagLinks",components:{Profile:o}},_={class:"tags"};function p(m,f,l,d,g,k){const e=a("Profile");return n(),r("div",_,[s(` <router-link
      v-for="tag in $page.frontmatter.tags" :key="tag"
        :to="{ path: \`/tag/#\${tag}\` }"
      >
      #{{ tag }} 
    </router-link> `),c(e)])}const h=t(i,[["render",p],["__scopeId","data-v-5bcac35e"],["__file","TagLinks.vue"]]);export{h as default};
