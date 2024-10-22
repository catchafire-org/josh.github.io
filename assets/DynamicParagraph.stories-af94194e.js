import{m as x,o as n,c as a,d as i,n as m,e as o,k as f,t as g,F as h,p as u,j as _}from"./vue.esm-bundler-37151b2a.js";import{g as b}from"./get-b82f916e.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const v={props:{opts:{type:Object}},setup(c){const r=x(()=>b(c,"opts.visible.bulletsPerRow",3));return{get:b,bulletsPerRow:r}}},w={class:"container text-center ids--type-body"},D=["innerHTML"],C={key:0},M=i("br",null,null,-1),T={key:2},B={class:"d-flex flex-column flex-md-row flex-wrap justify-content-center align-items-center caf-pl-md-15 caf-pr-md-0 caf-pl-10 caf-pr-10 caf-ml-10 caf-ml-md-0"},L=["href"],E=["src","alt"],H=["src","alt"],j={key:3,class:"row ids__marketing-bullets text-left"},N={key:0,class:"col-md-6 caf-px-3 caf-pl-md-30"},R={class:"caf-mb-0 ids--type-paragraph-small ids__marketing-bullets"},O=["innerHTML"],z={key:1,class:"col-md-6 caf-px-3 caf-pl-md-10"},F={class:"caf-mb-0 ids--type-paragraph-small ids__marketing-bullets"},I=["innerHTML"],S=["href"];function U(c,r,t,e,q,W){return n(),a("div",{class:m(["ids__marketing-dynamicParagraph ids__marketing--light container-fluid",`ids__marketing--${t.opts.theme} ${e.get(t.opts,"content.class","caf-pt-20 caf-pb-20")}`]),style:_(e.get(t.opts,"content.style"))},[i("div",w,[e.get(t.opts,"content.title")?(n(),a("h2",{key:0,class:m(["ids__marketing-title ids--type-marketing-xl-expressive caf-mb-4",{"caf-mb-8":!e.get(t.opts,"content.subtitle")}]),innerHTML:c.$sanitize(t.opts.content.title)},null,10,D)):o("",!0),e.get(t.opts,"content.subtitle")?(n(),a("p",{key:1,class:m(["ids__marketing-subtitle ids--type-paragraph-big",{"caf-mb-0":!e.get(t.opts,"content.logos")&&!e.get(t.opts,"content.bullets"),"caf-mb-9":e.get(t.opts,"content.logos")||e.get(t.opts,"content.bullets")}])},[f(g(t.opts.content.subtitle)+" ",1),!e.get(t.opts,"visible.shortText")&&e.get(t.opts,"content.subtitleExtra")?(n(),a("span",C,[M,f(" "+g(t.opts.content.subtitleExtra),1)])):o("",!0)],2)):o("",!0),e.get(t.opts,"content.logos")?(n(),a("div",T,[i("div",B,[(n(!0),a(h,null,u(t.opts.content.logos,(s,l)=>(n(),a("div",{key:l,class:"ids__marketing-logo caf-mb-10 caf-mr-10"},[s.link?(n(),a("a",{key:0,href:s.link,target:"_blank"},[i("img",{src:s.src,alt:s.alt,style:_(s.style),height:"50"},null,12,E)],8,L)):(n(),a("img",{key:1,src:s.src,alt:s.alt,style:_(s.style),height:"50"},null,12,H))]))),128))])])):(n(),a("div",j,[e.get(t.opts,"content.bullets")?(n(),a("div",N,[i("ul",R,[(n(!0),a(h,null,u(t.opts.content.bullets.slice(0,e.bulletsPerRow),(s,l)=>(n(),a("li",{key:l,class:"caf-mb-3",innerHTML:s},null,8,O))),128))])])):o("",!0),e.get(t.opts,"content.bullets")?(n(),a("div",z,[i("ul",F,[(n(!0),a(h,null,u(t.opts.content.bullets.slice(e.bulletsPerRow,e.bulletsPerRow*2),(s,l)=>(n(),a("li",{key:l,class:"caf-mb-3",innerHTML:s},null,8,I))),128))])])):o("",!0)])),e.get(t.opts,"content.cta")?(n(),a("a",{key:4,class:m(["btn btn-primary btn-marketing caf-mt-9 caf-mt-md-12",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,t.opts.content.cta.class)]),href:t.opts.content.cta.url,onClick:r[0]||(r[0]=s=>e.get(t.opts.tracking,"clickEvent")&&t.opts.tracking.clickEvent(s))},g(t.opts.content.cta.label),11,S)):o("",!0)])],6)}const V=P(v,[["render",U]]);v.__docgenInfo={exportName:"default",displayName:"DynamicParagraph",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["C:/Users/evilh/django_caf/frontend/src/_Blocks/Marketing/DynamicParagraph/DynamicParagraph.vue"]};const Q={title:"Blocks/Marketing"},d={args:{opts:{theme:"light",content:{title:"Usher in a new era of philanthropy",subtitle:"Many leaders of color create nonprofits as an instrument to serve and support their communities. When you provide, your foundation gains actionable insights on the unique needs of BIPOC-led and serving nonprofits."},visible:{shortText:!1}}},render:c=>({components:{DynamicParagraphComponent:V},setup(){return{args:c}},template:'<DynamicParagraphComponent v-bind="args" />'})};var y,p,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        title: 'Usher in a new era of philanthropy',
        subtitle: \`Many leaders of color create nonprofits as an instrument to serve and support their communities. When you provide, your foundation gains actionable insights on the unique needs of BIPOC-led and serving nonprofits.\`
      },
      visible: {
        shortText: false
      }
    }
  },
  render: args => ({
    components: {
      DynamicParagraphComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<DynamicParagraphComponent v-bind="args" />'
  })
}`,...(k=(p=d.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const X=["DynamicParagraph"];export{d as DynamicParagraph,X as __namedExportsOrder,Q as default};
