"use strict";var c=Object.defineProperty;var d=(n,t,e)=>t in n?c(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>(d(n,typeof t!="symbol"?t+"":t,e),e);Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s={text:"Hello, world!"};class p{constructor(t){l(this,"text");l(this,"container");l(this,"map");this.text=(t==null?void 0:t.text)||s.text,this.map=null}paragraphAdd(t){const e=document.createElement("p");e.innerText=t,this.container.appendChild(e)}flyButtonAdd({text:t,lnglat:e,zoom:o=10,speed:i=.8}){const a=document.createElement("input");a.type="button",a.value=t,a.addEventListener("click",()=>{var r;(r=this.map)==null||r.flyTo({center:e,zoom:o,speed:i})}),this.container.appendChild(a)}sampleControlAdd(){this.container.className="maplibregl-ctrl maplibregl-ctrl-group",this.container.id="sample-control",this.paragraphAdd(this.text),this.flyButtonAdd({text:"Fly to Sapporo",lnglat:[141.34,43.07]})}onAdd(t){return this.container=document.createElement("div"),this.map=t,this.sampleControlAdd(),this.container}onRemove(){var t;(t=this.container.parentNode)==null||t.removeChild(this.container),this.map=null}}exports.SampleControl=p;
//# sourceMappingURL=maplibre-gl-sample-control.cjs.map
