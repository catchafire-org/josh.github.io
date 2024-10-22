import{o as c,c as i,d as t,r as l}from"./vue.esm-bundler-37151b2a.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const r={},d={class:"ids__fileAttachment"},_={class:"ids__fileAttachment--name",href:"",target:"_blank"},p=t("div",{class:"ids__fileAttachment--actions"},[t("a",{class:"ids__fileAttachment--actions-item",href:""},"Edit"),t("a",{class:"ids__fileAttachment--actions-item",href:""},"Remove")],-1);function h(n,A){return c(),i("div",d,[t("a",_,[l(n.$slots,"default")]),p])}const f=m(r,[["render",h]]);r.__docgenInfo={displayName:"FileAttachment",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["C:/Users/evilh/django_caf/frontend/src/_Components/FileAttachment/FileAttachment.vue"]};const g={title:"Components"},e={args:{label:"Filename.pdf"},render:n=>({components:{FileAttachmentComponent:f},setup(){return{args:n}},template:'<FileAttachmentComponent v-bind="args">{{ args.label }}</FileAttachmentComponent>'})};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const C=["FileAttachment"];export{e as FileAttachment,C as __namedExportsOrder,g as default};
