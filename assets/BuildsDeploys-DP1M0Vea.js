import{ae as e,af as o}from"./index-BHv4fTza.js";import{u as t}from"./index-CbwQlMLT.js";import"./chunk-NUUEMKO5-BYAc3-p6.js";/* empty css             */import"./iframe-u-xHYkr-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./index-DLgkWgLR.js";import"./index-DrFu-skq.js";const r=""+new URL("build-BWSvlHAs.png",import.meta.url).href;function s(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Builds & Deploys"}),`
`,e.jsx(n.h1,{id:"builds--deploys",children:"Builds & Deploys"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"building-components",children:"Building components"}),`
`,e.jsxs(n.p,{children:["Vue components are built to the ",e.jsx(n.code,{children:"assets/frontend"}),` directory within Docker.
A gulp script then combines everything in `,e.jsx(n.code,{children:"assets"})," into bundled files."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["$ ",e.jsx(n.code,{children:"docker-compose exec vue npm run build"})]}),`
`,e.jsx(n.li,{children:"commit and push"}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"building-stories",children:"Building stories"}),`
`,e.jsx(n.p,{children:`Storybook is built in isolation from the main app, so in order to simplify things, we run the build
commands outside of Docker.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["change path in terminal to the ",e.jsx(n.code,{children:"frontend"})," directory"]}),`
`]}),`
`,e.jsx(n.p,{children:"Follow these steps if this is the first time deploying. Skip if not first time:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Send a request to the Frontend team requesting to be added to the following with read/write privileges:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["the github org: ",e.jsx(n.code,{children:"catchafire-org"})]}),`
`,e.jsxs(n.li,{children:["the github repo: ",e.jsx(n.code,{children:"catchafire-org.github.io"})]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Accept the invitations"}),`
`,e.jsx(n.li,{children:e.jsx(n.em,{children:e.jsxs(n.strong,{children:["❗IMPORTANT: make sure you're in the ",e.jsx(n.code,{children:"frontend"})," directory"]})})}),`
`,e.jsxs(n.li,{children:["Generate a ",e.jsx(n.a,{href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token",rel:"nofollow",children:e.jsx(n.strong,{children:"personal access token"})}),", and make sure to select ALL scopes"]}),`
`]}),`
`,e.jsx(n.p,{children:"Continue on to next steps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["$ ",e.jsx(n.code,{children:"yarn build-storybook"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["stories are built to ",e.jsx(n.code,{children:"frontend/storybook-static"}),`. If you face any issues building,
you can remove this folder and rebuild.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["$ ",e.jsx(n.code,{children:"yarn deploy-storybook"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NOTE:"})," if you get a permission error, then regenerate another personal access token, and make sure ALL scopes are selected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NOTE:"})," if you get prompted for a username and password, make sure the password is your access token"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["View ",e.jsx(n.code,{children:"https://catchafire-org.github.io/"})]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h5,{id:"note-there-may-be-an-update-delay-in-the-live-site-for-the-following-reasons",children:"Note: There may be an update delay in the live site for the following reasons:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Build Time: ",e.jsx("s",{children:"GitHub will run a jekyll build on its end, which can take some time"})," (added .nojekyll to stop file path issues during github deployment)."]}),`
`,e.jsx(n.li,{children:"Caching: GitHub Pages sets a max-age of 10 minutes, which means your browser will not check for updates 10 minutes since the last retrieval of the page."}),`
`]}),`
`,e.jsx(n.p,{children:"You can follow the build at https://github.com/catchafire-org/catchafire-org.github.io/actions"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"builds-overview",children:"Builds Overview"}),`
`,e.jsx("img",{src:r,alt:"Builds overview"})]})}function g(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
