"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,b=c["".concat(i,".").concat(h)]||c[h]||u[h]||s;return a?r.createElement(b,o(o({ref:t},m),{},{components:a})):r.createElement(b,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8495:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1,slug:"/"},o="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"This repository shows examples of WebAssembly application in some languages.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/webassembly-examples-eratosthenes/",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"C",permalink:"/webassembly-examples-eratosthenes/category/c"}},i={},p=[{value:"Languages",id:"languages",level:2},{value:"Demos",id:"demos",level:2},{value:"Reference Implementation",id:"reference-implementation",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This repository shows examples of ",(0,n.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly")," application in some languages.",(0,n.kt)("br",{parentName:"p"}),"\n",'Sample application calculates the maximum prime below "N" for given "N".',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"},(0,n.kt)("strong",{parentName:"a"},"Sieve of Eratosthenes"))," which is an old but very simple algorithm is used for calculation."),(0,n.kt)("h2",{id:"languages"},"Languages"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WebAssembly Available")),(0,n.kt)("p",null,"These are the part of languages which can be compiled to WebAssembly."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/c"},(0,n.kt)("strong",{parentName:"a"},"C"))),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/c-1"},(0,n.kt)("strong",{parentName:"a"},"C++"))),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/go"},(0,n.kt)("strong",{parentName:"a"},"Go"))),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/rust"},(0,n.kt)("strong",{parentName:"a"},"Rust"))),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/assemblyscript"},(0,n.kt)("strong",{parentName:"a"},"AssemblyScript"))),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"/category/javascript"},(0,n.kt)("strong",{parentName:"a"},"JavaScript"))),(0,n.kt)("li",{parentName:"ul"},"\u23f3 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/java-jwebassembly"},(0,n.kt)("strong",{parentName:"a"},"Java"))),(0,n.kt)("li",{parentName:"ul"},"\u23f3 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/grain"},(0,n.kt)("strong",{parentName:"a"},"Grain"))),(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Elixir")),(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Julia")),(0,n.kt)("li",{parentName:"ul"},"\u274c ",(0,n.kt)("strong",{parentName:"li"},"Motoko"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WebAssembly Unavailable")),(0,n.kt)("p",null,"These languages cannot be compiled to WebAssembly directory.",(0,n.kt)("br",{parentName:"p"}),"\n","But, there are some projects compiling interpreters or runtime to WebAssembly which make these languages available on browsers.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/python"},(0,n.kt)("strong",{parentName:"a"},"Python"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Perl")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ruby")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"PHP")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"C#/.NET"))),(0,n.kt)("h2",{id:"demos"},"Demos"),(0,n.kt)("p",null,"Demos are available for these languages.",(0,n.kt)("br",{parentName:"p"}),"\n","The performance will depends on the environment. But generally, WebAssembly shows better performance than JavaScript for this type of calculation."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"WebAssembly does not always show better performance than JavaScript. It depends on the tasks.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/c/"},(0,n.kt)("strong",{parentName:"a"},"C"))," (Compiled with emcc)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/cpp/"},(0,n.kt)("strong",{parentName:"a"},"C++"))," (Compiled with em++)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/go/"},(0,n.kt)("strong",{parentName:"a"},"Go"))," (Compiled with Go)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/tinygo/"},(0,n.kt)("strong",{parentName:"a"},"Go"))," (Compiled with TinyGo)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/rust/"},(0,n.kt)("strong",{parentName:"a"},"Rust"))," (Compiled with wasm-pack)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/assemblyscript/"},(0,n.kt)("strong",{parentName:"a"},"AssemblyScript"))," (Compiled with asc)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/java-jwebassembly/"},(0,n.kt)("strong",{parentName:"a"},"Java"))," (Compiled with JWebAssembly)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/python/"},(0,n.kt)("strong",{parentName:"a"},"Python"))," (Using pyodide WASM interpreter)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/typescript/"},(0,n.kt)("strong",{parentName:"a"},"TypeScript"))," (Not WASM)"),(0,n.kt)("li",{parentName:"ul"},"\u2705 ",(0,n.kt)("a",{parentName:"li",href:"pathname:///webassembly-examples-eratosthenes/demos/raw-javascript/"},(0,n.kt)("strong",{parentName:"a"},"Raw JavaScript"))," (Not WASM)")),(0,n.kt)("h2",{id:"reference-implementation"},"Reference Implementation"),(0,n.kt)("p",null,"This is the Python implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"},(0,n.kt)("strong",{parentName:"a"},"Sieve of Eratosthenes")),".",(0,n.kt)("br",{parentName:"p"}),"\n","Demos in other languages are written to corresponds to this program as possible."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/python/prime.py\n")))}u.isMDXComponent=!0}}]);