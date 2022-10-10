"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),b=a,d=c["".concat(l,".").concat(b)]||c[b]||u[b]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:3,title:"Run WASM"},i="Run WebAssembly",o={unversionedId:"javascript/run-wasm",id:"javascript/run-wasm",title:"Run WASM",description:"Run on Browser",source:"@site/docs/javascript/run-wasm.md",sourceDirName:"javascript",slug:"/javascript/run-wasm",permalink:"/webassembly-examples-eratosthenes/javascript/run-wasm",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/javascript/run-wasm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Run WASM"},sidebar:"tutorialSidebar",previous:{title:"Build WASM",permalink:"/webassembly-examples-eratosthenes/javascript/build-wasm"},next:{title:"RunWASM",permalink:"/webassembly-examples-eratosthenes/category/runwasm"}},l={},m=[{value:"Run on Browser",id:"run-on-browser",level:2},{value:"Run Standalone",id:"run-standalone",level:2},{value:"wasmtime",id:"wasmtime",level:3},{value:"wasmer",id:"wasmer",level:3},{value:"wasm3",id:"wasm3",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-webassembly"},"Run WebAssembly"),(0,a.kt)("h2",{id:"run-on-browser"},"Run on Browser"),(0,a.kt)("p",null,"Currently, there is no way to build JavaScript to WebAssembly for browsers."),(0,a.kt)("h2",{id:"run-standalone"},"Run Standalone"),(0,a.kt)("p",null,"Let's run JavaScript wasm standalone.",(0,a.kt)("br",{parentName:"p"}),"\n","First, prepare wasm program built for standalone environment.",(0,a.kt)("br",{parentName:"p"}),"\n","No html or javascript file needed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prime.wasm")," : wasm file built for browsers")),(0,a.kt)("h3",{id:"wasmtime"},"wasmtime"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime")," is standalone runtime for WebAssembly.",(0,a.kt)("br",{parentName:"p"}),"\n","Executable file can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bytecodealliance/wasmtime/releases"},"github releases"),"."),(0,a.kt)("p",null,"Command line options can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.wasmtime.dev/cli-options.html"},"CLI Options for wasmtime"),"."),(0,a.kt)("p",null,"This command invokes the entity function, or run()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasmtime"',title:'"invoke',prime:!0,function:!0,with:!0,'wasmtime"':!0},'echo "100000" | wasmtime prime.wasm\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 100000\nmax prime = 99991\nduration [ms] = 989\n0\n")),(0,a.kt)("h3",{id:"wasmer"},"wasmer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wasmer.io/"},"wasmer")," is also famous standalone runtime for WebAssembly."),(0,a.kt)("p",null,"Command line options can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.wasmer.io/ecosystem/wasmer/usage"},"CLI Usage"),".\nExecutable files can be downloaded at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer/releases"},"github releases"),".",(0,a.kt)("br",{parentName:"p"}),"\n","This command invokes the prime() function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasmer"',title:'"invoke',prime:!0,function:!0,with:!0,'wasmer"':!0},'echo "100000" | wasmer run  prime.wasm\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 100000\nmax prime = 99991\nduration [ms] = 890\n0\n")),(0,a.kt)("h3",{id:"wasm3"},"wasm3"),(0,a.kt)("p",null,"It seemed that the wasm built by javy cannot be run on wasm3."))}u.isMDXComponent=!0}}]);