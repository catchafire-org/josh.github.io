import{B as l}from"./BadgeCallout-Cvjwu9fO.js";import"./vue.esm-bundler-Bna1FZeA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Components/Badges"},e={argTypes:{label:{control:"text"},size:{control:{type:"radio"},options:["ids__badgeCallout--sizeL","ids__badgeCallout--sizeM","ids__badgeCallout--apply"]}},args:{label:"New",size:"ids__badgeCallout--sizeM"},render:n=>({components:{BadgeCalloutComponent:l},setup(){return{args:n}},template:'<BadgeCalloutComponent v-bind="args">{{ args.label }}</BadgeCalloutComponent>'})};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    label: {
      control: 'text'
    },
    size: {
      control: {
        type: 'radio'
      },
      options: ['ids__badgeCallout--sizeL', 'ids__badgeCallout--sizeM', 'ids__badgeCallout--apply']
    }
  },
  args: {
    label: 'New',
    size: 'ids__badgeCallout--sizeM'
  },
  render: args => ({
    components: {
      BadgeCalloutComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeCalloutComponent v-bind="args">{{ args.label }}</BadgeCalloutComponent>'
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const i=["BadgeCallout"];export{e as BadgeCallout,i as __namedExportsOrder,p as default};
