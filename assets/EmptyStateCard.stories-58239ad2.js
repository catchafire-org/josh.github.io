import{g as j}from"./get-b82f916e.js";import{T as H}from"./Tile-1ff4cd6f.js";import{I as x}from"./Icons-4ac83a4b.js";import{S as N}from"./SectionDividerHeader-202a50de.js";import{a as d,o as n,c as o,d as s,f as u,g as p,k as M,n as r,e as i,t as g,l as B,F as I,p as L,j as G}from"./vue.esm-bundler-37151b2a.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const k={components:{Icons:x,SectionDividerHeader:N,Tile:H},props:{opts:{type:Object}},setup(){return{get:j,THEME:{LIGHT:"light"}}}},z={class:"container text-center ids--type-body caf-px-md-8"},D={class:"ids__marketing-emptyStateCard__icon__container caf-mb-5 d-flex justify-content-center"},P={class:"ids__marketing-emptyStateCard__icon"},V=["innerHTML"],W=["innerHTML"],Y={class:"row"},F=["href"],U={key:1,class:"col-md-6 text-md-left caf-pl-md-1"},q=["href"],A={class:"ids__marketing-tiles-title"},J={key:3,class:"row caf-px-md-1"};function K(a,Q,t,e,R,X){const v=d("Icons"),E=d("SectionDividerHeader"),w=d("Tile");return n(),o("div",{class:r(["ids__marketing-emptyStateCard ids__marketing--light container-fluid",(`${t.opts.theme}${e.get(t.opts,"content.class")}`,e.get(t.opts,"content.class")||"caf-pt-20 caf-pb-20")]),style:G(e.get(t.opts,"content.style"))},[s("div",z,[s("div",D,[s("div",P,[u(v,{size:"Sm",className:"material-symbols-outlined"},{default:p(()=>[M(" temp_preferences_custom ")]),_:1})])]),e.get(t.opts,"content.title")?(n(),o("h2",{key:0,class:r(["ids__marketing-title ids--type-display-medium caf-mb-2",{"caf-mb-5":!e.get(t.opts,"content.subtitle")}]),innerHTML:a.$sanitize(t.opts.content.title)},null,10,V)):i("",!0),e.get(t.opts,"content.subtitle")?(n(),o("p",{key:1,class:r(["ids__marketing-subtitle ids--type-title caf-mb-5",{"caf-mb-12":!e.get(t.opts,"content.cta")||!e.get(t.opts,"content.secondaryCta")}]),innerHTML:a.$sanitize(t.opts.content.subtitle)},null,10,W)):i("",!0),s("div",Y,[e.get(t.opts,"content.cta")?(n(),o("div",{key:0,class:r(["col-md-6",{"text-md-right caf-pr-md-1":e.get(t.opts,"content.secondaryCta")}])},[s("a",{class:r(["btn btn-selected caf-mb-md-0",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,e.get(t.opts,"content.secondaryCta"),t.opts.content.cta.class)]),href:t.opts.content.cta.url},g(t.opts.content.cta.label),11,F)],2)):i("",!0),e.get(t.opts,"content.secondaryCta")?(n(),o("div",U,[s("a",{class:r(["btn btn-secondary",(t.opts.theme!=="dark"&&t.opts.theme!=="blue"&&t.opts.content.cta.class,(t.opts.theme==="dark"||t.opts.theme==="blue")&&t.opts.content.cta.class,t.opts.content.cta.class)]),href:t.opts.content.secondaryCta.url},g(t.opts.content.secondaryCta.label),11,q)])):i("",!0)]),e.get(t.opts,"content.tilesHeader")?(n(),B(E,{key:2,class:"caf-mt-12 caf-mb-4",borderColor:t.opts.theme!==e.THEME.LIGHT?"ids--color-border-base-text-on-interactive":""},{default:p(()=>[s("div",A,g(t.opts.content.tilesHeader),1)]),_:1},8,["borderColor"])):i("",!0),e.get(t.opts,"content.tiles",[]).length?(n(),o("div",J,[(n(!0),o(I,null,L(t.opts.content.tiles,(c,T)=>(n(),o("div",{key:T,class:r(["caf-mb-4 caf-mb-md-0 caf-px-md-2",`col-md-${12/t.opts.content.tiles.length}`])},[u(w,{icon:c.icon,iconClassName:c.iconClassName,title:c.title,subtitle:c.subtitle,link:c.link},null,8,["icon","iconClassName","title","subtitle","link"])],2))),128))])):i("",!0)])],6)}const S=O(k,[["render",K]]);k.__docgenInfo={exportName:"default",displayName:"EmptyStateCard",description:"",tags:{},props:[{name:"opts",type:{name:"object"}}],sourceFiles:["C:/Users/evilh/django_caf/frontend/src/_Components/EmptyStateCard/EmptyStateCard.vue"]};const st={title:"Components/Empty State Card"},l={args:{opts:{theme:"light",content:{cta:{label:"Post a project",url:"/"},secondaryCta:{label:"Watch a seminar",url:"/"},subtitle:"Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.",title:"Your program is new. Be one of the first to get started!"}}},render:a=>({components:{EmptyStateCardComponent:S},setup(){return{args:a}},template:'<EmptyStateCardComponent v-bind="args" />'})},m={args:{opts:{theme:"light",content:{cta:{label:"Post a project",url:"/"},secondaryCta:{label:"Watch a seminar",url:"/"},subtitle:"Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.",title:"Your program is new. Be one of the first to get started!",tilesHeader:"Explore more program content here:",tiles:[{title:"Engagement Metrics",subtitle:"Comprehensive real-time reporting",link:"/",icon:"insert_chart",iconClassName:"material-symbols-outlined"},{title:"Success Stories",subtitle:"Collaborations from the community",link:"/",icon:"handshake",iconClassName:"material-symbols-outlined"}]}}},render:a=>({components:{EmptyStateCardComponent:S},setup(){return{args:a}},template:'<EmptyStateCardComponent v-bind="args" />'})};var b,h,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Post a project',
          url: '/'
        },
        secondaryCta: {
          label: 'Watch a seminar',
          url: '/'
        },
        subtitle: 'Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.',
        title: 'Your program is new. Be one of the first to get started!'
      }
    }
  },
  render: args => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var _,f,C;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    opts: {
      theme: 'light',
      content: {
        cta: {
          label: 'Post a project',
          url: '/'
        },
        secondaryCta: {
          label: 'Watch a seminar',
          url: '/'
        },
        subtitle: 'Soon this page will showcase metrics and stories from your programs activity. Get started today by posting a project, joining one of our educational webinars, or speaking to our in-house advisors.',
        title: 'Your program is new. Be one of the first to get started!',
        tilesHeader: 'Explore more program content here:',
        tiles: [{
          title: 'Engagement Metrics',
          subtitle: 'Comprehensive real-time reporting',
          link: '/',
          icon: 'insert_chart',
          iconClassName: 'material-symbols-outlined'
        }, {
          title: 'Success Stories',
          subtitle: 'Collaborations from the community',
          link: '/',
          icon: 'handshake',
          iconClassName: 'material-symbols-outlined'
        }]
      }
    }
  },
  render: args => ({
    components: {
      EmptyStateCardComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<EmptyStateCardComponent v-bind="args" />'
  })
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const rt=["TilesOff","TilesOn"];export{l as TilesOff,m as TilesOn,rt as __namedExportsOrder,st as default};
