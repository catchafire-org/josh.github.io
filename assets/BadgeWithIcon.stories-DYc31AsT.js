import{I as m}from"./Icons-CFG6EP7Z.js";import{a as d,o as t,c as p,j as g,f as u,h as C,t as f,n as a,d as _,r as h}from"./vue.esm-bundler-Bna1FZeA.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i={components:{Icons:m},props:{badgeClassName:{type:String},icon:{type:String},iconClassName:{type:String}},setup(){return{}}};function B(o,N,e,W,b,y){const l=d("Icons");return t(),p("div",{class:a(["ids__badgeWithIcon",e.badgeClassName])},[e.icon?(t(),g(l,{key:0,class:a(["caf-mr-1",e.iconClassName]),size:"Sm"},{default:u(()=>[C(f(e.icon),1)]),_:1},8,["class"])):_("",!0),h(o.$slots,"default")],2)}const x=I(i,[["render",B]]);i.__docgenInfo={exportName:"default",displayName:"BadgeWithIcon",description:"",tags:{},props:[{name:"badgeClassName",type:{name:"string"}},{name:"icon",type:{name:"string"}},{name:"iconClassName",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/ianneitchon/Desktop/work-repos/catchafire/frontend/src/_Components/BadgeWithIcon/BadgeWithIcon.vue"]};const T={title:"Components/Badges"},n={argTypes:{label:{control:"text"},badgeClassName:{control:"text"},icon:{control:"text"},iconClassName:{control:"text"}},args:{icon:"groups",label:"Good for groups"},render:o=>({components:{BadgeWithIconComponent:x},setup(){return{args:o}},template:'<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'})};var s,r,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    label: {
      control: 'text'
    },
    badgeClassName: {
      control: 'text'
    },
    icon: {
      control: 'text'
    },
    iconClassName: {
      control: 'text'
    }
  },
  args: {
    icon: 'groups',
    label: 'Good for groups'
  },
  render: args => ({
    components: {
      BadgeWithIconComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeWithIconComponent v-bind="args">{{ args.default }}</BadgeWithIconComponent>'
  })
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const w=["BadgeWithIcon"];export{n as BadgeWithIcon,w as __namedExportsOrder,T as default};
