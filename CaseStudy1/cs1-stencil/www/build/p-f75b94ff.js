let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?d(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,r.length>0&&(i.$=r),i},d=(e,t)=>({t:0,m:e,i:t,p:null,$:null,u:null}),y={},m=(e,t,n,l,s,o)=>{if(n!==l){let r=N(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=h(n),o=h(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else{const c=f(l);if((r||c&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&o||s)&&!c&&e.setAttribute(t,l=!0===l?"":l)}}},p=/\s/,h=e=>e?e.split(p):[],w=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||a,r=t.u||a;for(l in o)l in r||m(s,l,o[l],void 0,n,t.t);for(l in r)m(s,l,o[l],r[l],n,t.t)},b=(t,n,l)=>{let o,r,c=n.$[l],i=0;if(null!==c.i)o=c.p=s.createTextNode(c.i);else if(o=c.p=s.createElement(c.m),w(null,c,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.$)for(i=0;i<c.$.length;++i)r=b(t,c,i),r&&o.appendChild(r);return o},g=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=b(null,l,o),c&&(s[o].p=c,i.insertBefore(c,n)))},S=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.p.remove()},j=(e,t)=>e.m===t.m,v=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(w(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:j(i,f)?(v(i,f),i=t[++o],f=l[++r]):j(u,$)?(v(u,$),u=t[--c],$=l[--a]):j(i,$)?(v(i,$),e.insertBefore(i.p,u.p.nextSibling),i=t[++o],$=l[--a]):j(u,f)?(v(u,f),e.insertBefore(u.p,i.p),u=t[--c],f=l[++r]):(s=b(t&&t[r],n,r),f=l[++r],s&&i.p.parentNode.insertBefore(s,i.p));o>c?g(e,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&S(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&S(l,0,l.length-1)):e.i!==o&&(n.data=o)},M=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.h=t)))},k=(e,t)=>{if(e.t|=16,!(4&e.t))return M(e,e.g),X((()=>C(e,t)));e.t|=512},C=(e,t)=>{const n=e.S;let l;return t&&(l=L(n,"componentWillLoad")),T(l,(()=>O(e,n,t)))},O=async(n,l,o)=>{const r=n.j,c=r["s-rc"];o&&(e=>{const t=e.v,n=e.j,l=t.t,o=((e,t)=>{let n=u(t),l=B.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.j,o=n.M||d(null,null),r=(e=>e&&e.m===y)(l)?l:$(null,null,l);t=s.tagName,r.m=null,r.t|=4,n.M=r,r.p=o.p=s.shadowRoot||s,e=s["s-sc"],v(o,r)})(n,P(n,l)),c&&(c.map((e=>e())),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>x(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},P=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){V(t,e.j)}return t},x=e=>{const t=e.j,n=e.g;64&e.t||(e.t|=64,W(t),e.k(t),n||E()),e.h&&(e.h(),e.h=void 0),512&e.t&&Q((()=>k(e,!1))),e.t&=-517},E=()=>{W(s.documentElement),Q((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"cs1-stencil"}});return e.dispatchEvent(t),t})(l)))},L=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){V(e)}},T=(e,t)=>e&&e.then?e.then(t):t(),W=e=>e.classList.add("hydrated"),A=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;l.map((([e,[t]])=>{(31&t||2&n&&32&t)&&Object.defineProperty(s,e,{get(){return((e,t)=>q(this).O.get(t))(0,e)},set(t){((e,t,n)=>{const l=q(e),s=l.O.get(t),o=l.t,r=l.S;n=(e=>(null==e||f(e),e))(n),8&o&&void 0!==s||n===s||(l.O.set(t,n),r&&2==(18&o)&&k(l,!1))})(this,e,t)},configurable:!0,enumerable:!0})}))}return e},R=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let y,m=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),H(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),m?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=q(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(t,t.g=n);break}}(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=z(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(A(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){V(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!B.has(t)){const l=()=>{};((e,t,n)=>{let l=B.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,B.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,r=()=>k(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return q(this).L}};l.T=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,A(a,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),m=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(E,30)))},U=new WeakMap,q=e=>U.get(e),F=(e,t)=>U.set(t.S=e,t),H=(e,t)=>{const n={t:0,j:e,v:t,O:new Map};return n.L=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],U.set(e,n)},N=(e,t)=>t in e,V=(e,t)=>(0,console.error)(e,t),_=new Map,z=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=_.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(_.set(n,e),e[t])),V)},B=new Map,D=[],G=[],I=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?Q(K):o.raf(K))},J=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){V(e)}e.length=0},K=()=>{J(D),J(G),(n=D.length>0)&&o.raf(K)},Q=e=>r().then(e),X=I(G,!0);export{R as b,$ as h,r as p,F as r}