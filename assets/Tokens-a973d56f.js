import{j as e}from"./jsx-runtime-ba3e0b6a.js";import{u as t}from"./index-9882170a.js";import"./chunk-HLWAVYOI-bcf9e1f1.js";import{M as a}from"./index-fcb5bf34.js";/* empty css             */import"./iframe-2704422e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./get-b82f916e.js";import"./index-f8d5fa11.js";import"./index-356e4a49.js";function s(o){const n={code:"code",h1:"h1",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Docs/Design Tokens"}),`
`,e.jsx(n.h1,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.p,{children:`As modules are the building blocks of an app, and pages are building blocks of a module,
and components are the building blocks of a page, Design Tokens (simply "Tokens") are the
building blocks of a component. In other words, Tokens are the smallest anatomical element of
the UI, and usually encompasses styling for Spacing, Colors, Fonts, Borders, Shadows, and etc.`}),`
`,e.jsxs("div",{class:"anatomy app",children:[e.jsx(n.p,{children:"App"}),e.jsxs("div",{class:"anatomy modules",children:[e.jsx(n.p,{children:"Modules"}),e.jsxs("div",{class:"anatomy pages",children:[e.jsx(n.p,{children:"Pages + Submodules"}),e.jsxs("div",{class:"anatomy components",children:[e.jsx(n.p,{children:"Components"}),e.jsx("div",{class:"anatomy tokens",children:e.jsx(n.p,{children:"Tokens"})})]})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["Tokens are created under the ",e.jsx(n.code,{children:"_Tokens"}),` directory, and most often shared amongst many
pages and components. Tokens help to keep continuity of design within the app. Frontend engineers
work in strict coordination with Design to create Tokens. Any frivilous updates to
a Token without approval, review, and thorough testing, can cause issues in the layout of
the entire app.`]}),`
`,e.jsx(n.p,{children:`There should rarely if ever be a need for anyone outside of Frontend to create or update
Tokens. If such a situation arises because of a discrepancy in a mockup, then it should be
brought to the attention of Frontend or Design.`})]})}function j(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
