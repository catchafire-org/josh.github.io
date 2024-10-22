import{o as c,c as i,b as t,r as l}from"./vue.esm-bundler-Bna1FZeA.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r={},d={class:"ids__fileAttachment"},_={class:"ids__fileAttachment--name",href:"",target:"_blank"},p=t("div",{class:"ids__fileAttachment--actions"},[t("a",{class:"ids__fileAttachment--actions-item",href:""},"Edit"),t("a",{class:"ids__fileAttachment--actions-item",href:""},"Remove")],-1);function h(n,A){return c(),i("div",d,[t("a",_,[l(n.$slots,"default")]),p])}const f=m(r,[["render",h]]);r.__docgenInfo={displayName:"FileAttachment",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/ianneitchon/Desktop/work-repos/catchafire/frontend/src/_Components/FileAttachment/FileAttachment.vue"]};const g={title:"Components"},e={args:{label:"Filename.pdf"},render:n=>({components:{FileAttachmentComponent:f},setup(){return{args:n}},template:'<FileAttachmentComponent v-bind="args">{{ args.label }}</FileAttachmentComponent>'})};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Filename.pdf'
  },
  render: args => ({
    components: {
      FileAttachmentComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<FileAttachmentComponent v-bind="args">{{ args.label }}</FileAttachmentComponent>'
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const b=["FileAttachment"];export{e as FileAttachment,b as __namedExportsOrder,g as default};
