"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,w=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(w,s(s({ref:t},p),{},{components:n})):a.createElement(w,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var m=2;m<i;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:100,title:"Run WebAssembly",slug:"/run-webassembly"},s="Run WebAssembly",l={unversionedId:"run-wasm",id:"run-wasm",title:"Run WebAssembly",description:"Run on Browser",source:"@site/docs/run-wasm.md",sourceDirName:".",slug:"/run-webassembly",permalink:"/webassembly-examples-eratosthenes/run-webassembly",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/run-wasm.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100,title:"Run WebAssembly",slug:"/run-webassembly"},sidebar:"tutorialSidebar",previous:{title:"Run Raw JavaScript",permalink:"/webassembly-examples-eratosthenes/run-raw-javascript"}},o={},m=[{value:"Run on Browser",id:"run-on-browser",level:2},{value:"Run Standalone",id:"run-standalone",level:2},{value:"wasmtime",id:"wasmtime",level:3},{value:"wasmer",id:"wasmer",level:3},{value:"wasm3",id:"wasm3",level:3},{value:"Deno",id:"deno",level:3},{value:"wasmi",id:"wasmi",level:3},{value:"WAVM",id:"wavm",level:3}],p={toc:m};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-webassembly"},"Run WebAssembly"),(0,r.kt)("h2",{id:"run-on-browser"},"Run on Browser"),(0,r.kt)("p",null,"Now, let's run wasm on browser.",(0,r.kt)("br",{parentName:"p"}),"\n","First, confirm that these files are exist in the working directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index.html")," : sample html calling prime.wasm"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prime.wasm")," : wasm built for browsers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prime.js")," : glue javascript program")),(0,r.kt)("p",null,"Second, run a http server.",(0,r.kt)("br",{parentName:"p"}),"\n","Opening the index.html without running a server may not work because of the CORS policy of the browsers."),(0,r.kt)("p",null,"When using python, this command starts a http server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run a http server at port 8000"',title:'"Run',a:!0,http:!0,server:!0,at:!0,port:!0,'8000"':!0},"python -m http.server 8000\n")),(0,r.kt)("p",null,"Third, access to the server from your browser.",(0,r.kt)("br",{parentName:"p"}),"\n","Then the page of sample index.html is shown and primes can be calculated by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Run")," buttons."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run-wasm-on-browser.png",src:n(7020).Z,width:"620",height:"568"})),(0,r.kt)("p",null,"Many browsers support opening the wasm file in developer tools.",(0,r.kt)("br",{parentName:"p"}),"\n","This is an example of google chrome."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run-wasm-on-browser-devtool.png",src:n(5941).Z,width:"1054",height:"568"})),(0,r.kt)("h2",{id:"run-standalone"},"Run Standalone"),(0,r.kt)("p",null,"Now, let's run wasm standalone.",(0,r.kt)("br",{parentName:"p"}),"\n","Before to run, prepare wasm program built for standalone."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prime-standalone.wasm")," : wasm file built for standalone")),(0,r.kt)("p",null,"or"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"print_prime-standalone.wasm")," : wasm file built for standalone (this is made for ",(0,r.kt)("inlineCode",{parentName:"li"},"wavm")," runtime)")),(0,r.kt)("h3",{id:"wasmtime"},"wasmtime"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wasmtime.dev/"},"wasmtime")," is standalone runtime for WebAssembly.\nExecutable file can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bytecodealliance/wasmtime/releases"},"github releases"),"."),(0,r.kt)("p",null,"Command line options can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.wasmtime.dev/cli-options.html"},"CLI Options for wasmtime"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This command invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"prime()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasmtime"',title:'"invoke',prime:!0,function:!0,with:!0,'wasmtime"':!0},"wasmtime run prime_standalone.wasm --invoke prime 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"warning: using `--invoke` with a function that takes arguments is experimental and may break in the future\nwarning: using `--invoke` with a function that returns values is experimental and may break in the future\n9973\n")),(0,r.kt)("h3",{id:"wasmer"},"wasmer"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wasmer.io/"},"wasmer")," is also a famous standalone runtime for WebAssembly.\nExecutable files can be downloaded at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer/releases"},"github releases"),"."),(0,r.kt)("p",null,"Command line options can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.wasmer.io/ecosystem/wasmer/usage"},"CLI Usage"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This command invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"prime()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasmer"',title:'"invoke',prime:!0,function:!0,with:!0,'wasmer"':!0},"wasmer run --invoke prime prime_standalone.wasm -- 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"9973\n")),(0,r.kt)("h3",{id:"wasm3"},"wasm3"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasm3/wasm3"},"wasm3")," is an interpreter for WebAssembly.\nExecutable files can be downloaded at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasm3/wasm3/releases"},"github releases"),"."),(0,r.kt)("p",null,"wasm3 options can be found by the command ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm3 --help"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This command invokes the prime() function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasm3"',title:'"invoke',prime:!0,function:!0,with:!0,'wasm3"':!0},"wasm3 --func prime prime_standalone.wasm 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"Result: 9973\n")),(0,r.kt)("h3",{id:"deno"},"Deno"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno"},"Deno")," is also a runtime for WebAssembly which uses ",(0,r.kt)("a",{parentName:"p",href:"https://v8.dev/"},"V8"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Executable files can be downloaded at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/releases"},"github releases"),"."),(0,r.kt)("p",null,"First, we need to write a typescript to call functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Deno.ts"',title:'"Deno.ts"'},'const wasmCode = await Deno.readFile("./prime_standalone.wasm");\nconst wasmModule = new WebAssembly.Module(wasmCode);\nconst wasmInstance = new WebAssembly.Instance(wasmModule);\nconst prime = wasmInstance.exports.prime as CallableFunction;\n\nlet n = +Deno.args[Deno.args.length - 1];\n\nlet startTime = performance.now();\nlet maxPrime = prime(n);\nlet endTime = performance.now();\n\nconsole.log("given number =", n);\nconsole.log("max prime =", maxPrime);\nconsole.log("duration [ms] =", (endTime - startTime).toFixed(2));\n')),(0,r.kt)("p",null,"Then, run the command as follows.",(0,r.kt)("br",{parentName:"p"}),"\n","More command line options can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/manual@v1.8.3/getting_started/command_line_interface"},"Command line interface"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with Deno"',title:'"invoke',prime:!0,function:!0,with:!0,'Deno"':!0},"deno run --allow-read deno.ts -- 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 10000\nmax prime = 9973\nduration [ms] = 2.00\n")),(0,r.kt)("h3",{id:"wasmi"},"wasmi"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/wasmi"},"wasmi")," is an interpreter of WebAssembly written in Rust.",(0,r.kt)("br",{parentName:"p"}),"\n","We have to build ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmi_cli")," from source code because executable file is not distributed."),(0,r.kt)("p",null,"This is the command to invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"prime()")," function with wasme_cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function with wasmi"',title:'"invoke',prime:!0,function:!0,with:!0,'wasmi"':!0},"wasmi_cli prime_standalone.wasm prime 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"executing prime.wasm::prime(10000) ...\n9973\n")),(0,r.kt)("p",null,"More options can be seen with ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmi_cli --help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmi_cli run --help"),"."),(0,r.kt)("h3",{id:"wavm"},"WAVM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WAVM/WAVM"},"WAVM (WebAssembly Virtual Machine)")," is also a well known runtime for WebAssembly.",(0,r.kt)("br",{parentName:"p"}),"\n","Executable files can be downloaded at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WAVM/WAVM/releases"},"github releases"),"."),(0,r.kt)("p",null,"Unlike other runtime, WAVM does not print the returned value.",(0,r.kt)("br",{parentName:"p"}),"\n","So, print function should be in the source code to see the calculated result.",(0,r.kt)("br",{parentName:"p"}),"\n","Some sample program (not all) contain function named ",(0,r.kt)("inlineCode",{parentName:"p"},"print_prime")," for the purpose of this situation."),(0,r.kt)("p",null,"So, lets use ",(0,r.kt)("inlineCode",{parentName:"p"},"print_prime.wasm")," here."),(0,r.kt)("p",null,"This command invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"print_prime")," function and show the calculate result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke print_prime function with WAVM"',title:'"invoke',print_prime:!0,function:!0,with:!0,'WAVM"':!0},"wavm run --function=print_prime print_prime_standalone.wasm 10000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"max prime = 9973\n")),(0,r.kt)("p",null,"More options can be seen with ",(0,r.kt)("inlineCode",{parentName:"p"},"wavm --help")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"wavm run --help"),"."))}u.isMDXComponent=!0},5941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-wasm-on-browser-devtool-0416beb025674757fd81529b6cbedeac.png"},7020:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-wasm-on-browser-3e45f960ec61ebc41a59e486035d09cf.png"}}]);