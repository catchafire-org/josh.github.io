import{ae as e,af as o}from"./index-BHv4fTza.js";import{u as s}from"./index-CbwQlMLT.js";import"./chunk-NUUEMKO5-BYAc3-p6.js";/* empty css             */import"./iframe-u-xHYkr-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-DLgkWgLR.js";import"./index-DrFu-skq.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Components/Controlled vs Uncontrolled"}),`
`,e.jsx(n.h1,{id:"controlled-vs-uncontrolled",children:"Controlled vs Uncontrolled"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Controlled components"}),` are components that are within the Vue context.
This means that when the user interacts with these components (click, hover, etc),
and state or props are updated, Vue will start its `,e.jsx(n.a,{href:"https://v3.vuejs.org/guide/reactivity.html",rel:"nofollow",children:e.jsx(n.strong,{children:"Reactivity"})}),"."]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.strong,{children:"uncontrolled component"}),` is not within the Vue context. It doesn't have state associated
with it, so when the user interacts with it, Reactivity will not be started.`]}),`
`,e.jsx(n.p,{children:`For example, say we had an input field that does something after the user enters data.
Take a look at how a controlled and uncontrolled component will behave.`}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"controlled-example",children:"Controlled example"}),`
`,e.jsx(n.p,{children:"Here, the DOM gets rerendered on each keypress."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-xhtml",children:`<template>
  <div>
    <!-- Reactivity will run on every keypress -->
    <input
      @keypress="search()"
      v-model="searchInput"
    />
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup(props) {
      const searchInput = ref('') // state. We are reference a state value.
      // alot of code is assumed and excluded to simplify this example
      const search = () => {
        console.log(searchInput)
      }

      return {
        search,
      }
    },
  }
<\/script>
`})}),`
`,e.jsx(n.h2,{id:"uncontrolled-example",children:"Uncontrolled example"}),`
`,e.jsx(n.p,{children:"Here, the DOM will never get updated."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-xhtml",children:`<template>
  <div>
    <!-- Reactivity will NOT be run on every keypress -->
    <input
      @keypress="search()"
      ref="searchInput"
    />
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue'
  export default {
    // alot of code is assumed and excluded to simplify this example
    setup(props) {
      const searchInput = ref('') // not state, but called in a similar way. This time we are reference a DOM element.
      const search = () => {
        console.log(searchInput)
      }

      watchEffect(
        () => {
          // here we get notified that searchInput has updated, but Reactivity is not started.
          console.log(searchInput.value)
        },
        {
          flush: 'post',
        }
      )

      return {
        search,
      }
    },
  }
<\/script>
`})})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{f as default};
