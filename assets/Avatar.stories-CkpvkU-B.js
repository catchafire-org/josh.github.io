import{A as r}from"./Avatar-DOE3IyGi.js";import"./vue.esm-bundler-Bna1FZeA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={title:"Components"},e={args:{img:"https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg",size:"Sm",username:"The Rock"},argTypes:{size:{control:{type:"radio"},defaultValue:"Sm",options:["Sm","Md","Lg"]}},render:o=>({components:{AvatarComponent:r},setup(){return{args:o}},template:'<AvatarComponent v-bind="args" />'})};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    img: 'https://media.vanityfair.com/photos/5b46274a6520f70b78e5cfe5/5:3/w_1440,h_864,c_limit/The-Rock-2020-Potential-Run.jpg',
    size: 'Sm',
    username: 'The Rock'
  },
  argTypes: {
    size: {
      control: {
        type: 'radio'
      },
      defaultValue: 'Sm',
      options: ['Sm', 'Md', 'Lg']
    }
  },
  render: args => ({
    components: {
      AvatarComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<AvatarComponent v-bind="args" />'
  })
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const c=["Avatar"];export{e as Avatar,c as __namedExportsOrder,i as default};
