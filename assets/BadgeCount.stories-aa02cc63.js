import{o as i,c as d,r as u,n as g}from"./vue.esm-bundler-37151b2a.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const r={props:{size:{type:String},variant:{type:String},status:{type:String}}};function l(t,p,n,C,m,b){return i(),d("a",{href:"",class:g(["ids__badgeCount",{[n.size]:n.size,[n.variant]:n.variant,[n.status]:n.status}])},[u(t.$slots,"default")],2)}const c=_(r,[["render",l]]);r.__docgenInfo={exportName:"default",displayName:"BadgeCount",description:"",tags:{},props:[{name:"size",type:{name:"string"}},{name:"variant",type:{name:"string"}},{name:"status",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["C:/Users/evilh/django_caf/frontend/src/_Components/BadgeCount/BadgeCount.vue"]};const z={title:"Components/Badges"},e={argTypes:{label:{control:"number"},size:{control:{type:"radio"},options:["ids__badgeCount--sizeM","ids__badgeCount--sizeS"]},variant:{control:{type:"radio"},options:["ids__badgeCount--regular","ids__badgeCount--system"]},status:{control:{type:"radio"},options:["ids__badgeCount--inactive","ids__badgeCount--active","ids__badgeCount--disabled"]}},args:{label:"13",size:"ids__badgeCount--sizeM",variant:"ids__badgeCount--regular",status:"ids__badgeCount--inactive"},render:t=>({components:{BadgeCountComponent:c},setup(){return{args:t}},template:'<BadgeCountComponent v-bind="args">{{ args.label }}</BadgeCountComponent>'})};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    label: {
      control: 'number'
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--sizeM', 'ids__badgeCount--sizeS']
    },
    variant: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--regular', 'ids__badgeCount--system']
    },
    status: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCount--inactive', 'ids__badgeCount--active', 'ids__badgeCount--disabled']
    }
  },
  args: {
    label: '13',
    size: 'ids__badgeCount--sizeM',
    variant: 'ids__badgeCount--regular',
    status: 'ids__badgeCount--inactive'
  },
  render: args => ({
    components: {
      BadgeCountComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCountComponent v-bind="args">{{ args.label }}</BadgeCountComponent>'
  })
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const B=["BadgeCount"];export{e as BadgeCount,B as __namedExportsOrder,z as default};
