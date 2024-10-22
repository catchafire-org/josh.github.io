import{ae as e,af as i}from"./index-BHv4fTza.js";import{u as a}from"./index-CbwQlMLT.js";import"./chunk-NUUEMKO5-BYAc3-p6.js";/* empty css             */import"./iframe-u-xHYkr-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-DLgkWgLR.js";import"./index-DrFu-skq.js";function r(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Components/Reactivity"}),`
`,e.jsx(t.h1,{id:"reactivity",children:"Reactivity"}),`
`,e.jsxs(t.p,{children:["Vue updates the DOM through a process called ",e.jsx(t.a,{href:"https://v3.vuejs.org/guide/reactivity.html",rel:"nofollow",children:e.jsx(t.strong,{children:"Reactivity"})}),":"]}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:`Vue reads the template tag's content (html) and creates a virtual DOM,
which is basically a tree node representation of the real DOM.`}),`
`,e.jsx(t.li,{children:"Whenever any state or props gets updated in a component, the virtual DOM is updated to reflect this change."}),`
`,e.jsx(t.li,{children:`The virtual DOM is then compared to the real DOM. If they are different, then Vue will
rerender parts of the real DOM to match the virtual DOM.`}),`
`]}),`
`,e.jsx(t.p,{children:`This is Reactivity in Vue. It is important to know about Reactivity because unnecessary
rerendering or continuously rerendering can have an affect on browser performance.`}),`
`,e.jsx(t.h2,{id:"code-example",children:"Code example"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-xhtml",children:`<template>
  <div>
    <button @click="changeStatus()">Run</button>
    {status}
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    // alot of code is assumed and excluded to simplify this example
    setup(props) {
      const status = ref('Stopped') // state
      const changeStatus = () => {
        status.value = 'Running' // when this is changed, Reactivity is started.
      }

      return {
        changeStatus,
      }
    },
  }
<\/script>
`})})]})}function f(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{f as default};
