import{p as o}from"./gitGraph-YCYPL57B-MEVJTYR7-DJ68L80p.js";import{m as e,t as s,aT as n,C as d,aU as p}from"./mermaid.esm.min-CeUiqvRt.js";import"./chunk-5ZJXQJOJ-B-gQ8U4d.js";import"./app-BOC_CZQO.js";var m={parse:e(async r=>{let a=await o("info",r);s.debug(a)},"parse")},g={version:p},v=e(()=>g.version,"getVersion"),f={getVersion:v},l=e((r,a,i)=>{s.debug(`rendering info diagram
`+r);let t=n(a);d(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${i}`)},"draw"),x={draw:l},u={parser:m,db:f,renderer:x};export{u as diagram};
