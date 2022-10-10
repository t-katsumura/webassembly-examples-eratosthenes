"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[571],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3575:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},l="Write Program",o={unversionedId:"c/write-program",id:"c/write-program",title:"Write Program",description:"Write",source:"@site/docs/c/write-program.md",sourceDirName:"c",slug:"/c/write-program",permalink:"/webassembly-examples-eratosthenes/c/write-program",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/c/write-program.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"C",permalink:"/webassembly-examples-eratosthenes/category/c"},next:{title:"Build WASM",permalink:"/webassembly-examples-eratosthenes/c/build-wasm"}},p={},s=[{value:"Write",id:"write",level:2},{value:"Build for Test",id:"build-for-test",level:2},{value:"Run and Test",id:"run-and-test",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-program"},"Write Program"),(0,a.kt)("h2",{id:"write"},"Write"),(0,a.kt)("p",null,"In C, ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"},(0,a.kt)("strong",{parentName:"a"},"Sieve of Eratosthenes"))," can be written as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/c/src/prime.c\n")),(0,a.kt)("h2",{id:"build-for-test"},"Build for Test"),(0,a.kt)("p",null,"Build C program to executable file ",(0,a.kt)("inlineCode",{parentName:"p"},"main.exe"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcc")," is used here to build for test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with optimization level O3"',title:'"build',with:!0,optimization:!0,level:!0,'O3"':!0},"gcc src/main.c src/prime.c -O3 -o main\n")),(0,a.kt)("p",null,"gcc command line options can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html#Invoking-GCC"},"3 GCC Command Options"),"."),(0,a.kt)("h2",{id:"run-and-test"},"Run and Test"),(0,a.kt)("p",null,"After building C program, test the code with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke and test prime function"',title:'"invoke',and:!0,test:!0,prime:!0,'function"':!0},"main.exe 100000\n")),(0,a.kt)("p",null,"This should shows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 100000\nmax prime = 99991\nduration [ms] = 33.996600\n")),(0,a.kt)("p",null,'The following table shows the calculated prime for given "N".'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"given N"),(0,a.kt)("th",{parentName:"tr",align:null},"prime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"997")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"9973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100000"),(0,a.kt)("td",{parentName:"tr",align:null},"99991")))))}u.isMDXComponent=!0}}]);