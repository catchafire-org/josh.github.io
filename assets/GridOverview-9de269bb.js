import{j as e}from"./jsx-runtime-ba3e0b6a.js";import{u as o}from"./index-9882170a.js";import"./chunk-HLWAVYOI-bcf9e1f1.js";import{M as r}from"./index-fcb5bf34.js";/* empty css             */import"./iframe-2704422e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./get-b82f916e.js";import"./index-f8d5fa11.js";import"./index-356e4a49.js";function s(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Grid/Overview"}),`
`,e.jsx(n.h1,{id:"grid-system",children:"Grid System"}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsxs(n.p,{children:["Catchafire's design grid is based on Bootstrap's grid system, which uses a series of containers, rows, and columns to layout and align content. It's built with ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",rel:"nofollow",children:"flexbox"})," and is fully responsive."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://getbootstrap.com/docs/4.6/layout/grid/",rel:"nofollow",children:"Read more on Bootstrap's grid system"})}),`
`,e.jsx(n.h2,{id:"page-sizes",children:"Page Sizes"}),`
`,e.jsxs(n.p,{children:["Page sizing is based on the standard ",e.jsx(n.code,{children:"960 / 12-column"})," grid provided by Bootstrap."]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://getbootstrap.com/docs/4.6/layout/grid/#grid-options",rel:"nofollow",children:"Read more on container widths per resolution"})}),`
`,e.jsx(n.h2,{id:"response-breakpoints",children:"Response Breakpoints"}),`
`,e.jsxs(n.p,{children:["Catchafire (using ",e.jsx(n.a,{href:"https://getbootstrap.com/docs/4.6/layout/overview/",rel:"nofollow",children:"Bootstrap v4"}),") primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`// Extra small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
`})}),`
`,e.jsx(n.p,{children:"Since Bootstrap provides us with source CSS in Sass, all media queries are available via mixins:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`// No media query necessary for xs breakpoint as it's effectively \`@media (min-width: 0) { ... }\`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Adjusting margins on tablet and above sizes for \`.caf-card .card\` elements
.caf-card{
  .card {
    margin: calculateRem(20px) calculateRem(10px) !important;

    @include media-breakpoint-up(md) {
      margin: calculateRem(10px) !important;
    }
  }
}

// Example: Overriding the width on large screens (992px)
.container-xl {
  @extend .container;
  max-width: 2000px;
  width: 100%;

  @include media-breakpoint-up(lg) {
    width: 90%;
  }
}
`})})]})}function f(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{f as default};
