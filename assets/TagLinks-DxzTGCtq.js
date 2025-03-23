import o from"./Profile-CG5HKfvy.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as a,c as r,g as s,b as c}from"./app-OBQjA9bb.js";const i={name:"TagLinks",components:{Profile:o}},_={class:"tags"};function p(m,f,g,l,d,k){const e=n("Profile");return a(),r("div",_,[s(` <router-link
      v-for="tag in $page.frontmatter.tags" :key="tag"
        :to="{ path: \`/tag/#\${tag}\` }"
      >
      #{{ tag }} 
    </router-link> `),c(e)])}const h=t(i,[["render",p],["__scopeId","data-v-7b415522"],["__file","TagLinks.vue"]]);export{h as default};
