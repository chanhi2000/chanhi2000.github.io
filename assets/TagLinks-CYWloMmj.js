import t from"./Profile-BKXMxDsC.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,c as a,o as r,g as s,b as c}from"./app-6nZ4Bu4J.js";const i={name:"TagLinks",components:{Profile:t}},p={class:"tags"};function m(_,f,g,l,d,k){const o=n("Profile");return r(),a("div",p,[s(` <router-link
      v-for="tag in $page.frontmatter.tags" :key="tag"
        :to="{ path: \`/tag/#\${tag}\` }"
      >
      #{{ tag }} 
    </router-link> `),c(o)])}const h=e(i,[["render",m],["__scopeId","data-v-7b415522"]]);export{h as default};
