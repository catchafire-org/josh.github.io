import{B as r}from"./Badge-C58vNOHf.js";import"./vue.esm-bundler-Bna1FZeA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Badges"},e={argTypes:{default:{control:"text",description:"Slot content",defaultValue:"Badge"}},render:a=>({components:{BadgeComponent:r},setup(){return{args:a}},template:'<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'})};var n,t,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Badge'
    }
  },
  render: args => ({
    components: {
      BadgeComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<BadgeComponent v-bind="args">{{ args.default }}</BadgeComponent>'
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const m=["Badge"];export{e as Badge,m as __namedExportsOrder,g as default};
