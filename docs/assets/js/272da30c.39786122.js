"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3665:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1},i="Write Program",p={unversionedId:"cpp/write-program",id:"cpp/write-program",title:"Write Program",description:"Write",source:"@site/docs/cpp/write-program.md",sourceDirName:"cpp",slug:"/cpp/write-program",permalink:"/webassembly-examples-eratosthenes/cpp/write-program",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/cpp/write-program.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"C++",permalink:"/webassembly-examples-eratosthenes/category/c-1"},next:{title:"Build WASM",permalink:"/webassembly-examples-eratosthenes/cpp/build-wasm"}},o={},m=[{value:"Write",id:"write",level:2},{value:"Build for Test",id:"build-for-test",level:2},{value:"Run and Test",id:"run-and-test",level:2}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-program"},"Write Program"),(0,a.kt)("h2",{id:"write"},"Write"),(0,a.kt)("p",null,"In C++, the Sieve of Eratosthenes can be written as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/cpp/src/prime.cpp\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'extern "C"')," is required."),(0,a.kt)("h2",{id:"build-for-test"},"Build for Test"),(0,a.kt)("p",null,"Build C++ program to executable file ",(0,a.kt)("inlineCode",{parentName:"p"},"main.exe"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"g++")," is used here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with optimization level -O3"',title:'"build',with:!0,optimization:!0,level:!0,'-O3"':!0},"g++ src/main.cpp src/prime.cpp -O3 -o main\n")),(0,a.kt)("p",null,"g++ command line arguments can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html#Invoking-GCC"},"3 GCC Command Options"),"."),(0,a.kt)("h2",{id:"run-and-test"},"Run and Test"),(0,a.kt)("p",null,"Now, lets's run ",(0,a.kt)("inlineCode",{parentName:"p"},"main.exe")," and test the function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke main function"',title:'"invoke',main:!0,'function"':!0},"main.exe 100000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 100000\nmax prime = 99991\nduration [ms] = 33\n")),(0,a.kt)("p",null,'The following table shows the calculated prime for given "N".'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"given N"),(0,a.kt)("th",{parentName:"tr",align:null},"prime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"997")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"9973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100000"),(0,a.kt)("td",{parentName:"tr",align:null},"99991")))))}u.isMDXComponent=!0}}]);