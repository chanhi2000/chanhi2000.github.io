import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as m,o,c as s,F as p,a as u,b as h,h as _,e as d,t as f}from"./app-BOC_CZQO.js";const k={name:"ToCLocal",props:{basePath:{type:String,required:!0}},data(){return{items:[]}},setup(){},computed:{},methods:{async fetchItems(){const a=new RegExp(this.basePath+"(.*?.html)"),e=this.$router.options.routes.filter(t=>t.path.match(a)&&t.name!=null).map(t=>({link:t.path,name:t.meta.t}));console.log(`${e}`),this.items=e}},mounted(){this.fetchItems()}};function x(a,e,t,g,n,C){const c=m("router-link");return o(),s("ul",null,[(o(!0),s(p,null,u(n.items,(r,l)=>(o(),s("li",{key:l},[h(c,{to:{path:r.link}},{default:_(()=>[d(f(r.name),1)]),_:2},1032,["to"])]))),128))])}const L=i(k,[["render",x],["__file","ToCLocal.vue"]]);export{L as default};
