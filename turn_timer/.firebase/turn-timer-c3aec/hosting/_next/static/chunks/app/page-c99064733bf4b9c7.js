(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4038:(e,r,t)=>{Promise.resolve().then(t.bind(t,6238))},6238:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(5155),n=t(6046),i=t(2115),a=t(3857),o=t(3312),l=t(3900),d=t(5256),c=t(8209),u=t(4683),f=t(1812),x=t(3561),m=t(6329),h=t(1801);function g(e){let{id:r,name:t,onRemove:n}=e,{attributes:i,listeners:a,setNodeRef:l,transform:u,transition:f}=(0,x.gl)({id:r}),h={transform:m.Ks.Transform.toString(u),transition:f};return(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)("li",{ref:l,style:h,...i,...a,className:"flex-grow flex items-center space-x-2 bg-secondary p-2 rounded",children:[(0,s.jsx)(d.A,{size:16,className:"cursor-move"}),(0,s.jsx)("span",{className:"flex-grow",children:t})]}),(0,s.jsx)(o.$,{variant:"ghost",size:"sm",onClick:e=>{e.preventDefault(),e.stopPropagation(),n(r)},children:(0,s.jsx)(c.A,{size:16})})]})}function p(){let{players:e,addPlayer:r,removePlayer:t,reorderPlayers:n}=(0,h.O)(),[a,d]=(0,i.useState)(""),c=(0,f.FR)((0,f.MS)(f.AN),(0,f.MS)(f.uN,{coordinateGetter:x.JR})),m=()=>{a.trim()&&(r(a),d(""))};return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)(l.p,{type:"text",value:a,onChange:e=>d(e.target.value),placeholder:"Enter player name",onKeyDown:e=>{"Enter"===e.key&&m()}}),(0,s.jsx)(o.$,{onClick:m,children:(0,s.jsx)(u.A,{size:16})})]}),(0,s.jsx)(f.Mp,{sensors:c,collisionDetection:f.fp,onDragEnd:r=>{let{active:t,over:s}=r;if(t.id!==(null==s?void 0:s.id)){let r=e.findIndex(e=>e.id===t.id),i=e.findIndex(e=>e.id===(null==s?void 0:s.id)),a=[...e],[o]=a.splice(r,1);a.splice(i,0,o),n(a)}},children:(0,s.jsx)(x.gB,{items:e,strategy:x._G,children:(0,s.jsx)("ul",{className:"space-y-2",children:e.map(e=>(0,s.jsx)(g,{id:e.id,name:e.name,onRemove:t},e.id))})})})]})}function v(){let e=(0,n.useRouter)(),{players:r}=(0,h.O)();return(0,s.jsx)(a.A,{title:"Turn Timer",children:(0,s.jsxs)("div",{className:"space-y-8",children:[(0,s.jsx)(p,{}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(o.$,{size:"lg",onClick:()=>{r.length>0?e.push("/gameplay"):alert("Please add at least one player before starting the game.")},children:"Start Game"})})]})})}function b(){return(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(v,{})})}},3857:(e,r,t)=>{"use strict";t.d(r,{A:()=>u});var s=t(5155),n=t(8173),i=t.n(n),a=t(689),o=t(3474),l=t(6046),d=t(2115);function c(e){let{children:r,title:t}=e,n=(0,l.usePathname)(),d=(0,l.useSearchParams)().get("returnTo")||"/";return(0,s.jsxs)("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[(0,s.jsxs)("header",{className:"p-4 flex justify-between items-center border-b transition-colors duration-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold transition-colors duration-300",children:t}),"/settings"===n?(0,s.jsx)(i(),{href:d,className:"text-muted-foreground hover:text-foreground transition-colors duration-300",children:(0,s.jsx)(a.A,{size:24})}):(0,s.jsx)(i(),{href:"/settings?returnTo=".concat(n),className:"text-muted-foreground hover:text-foreground transition-colors duration-300",children:(0,s.jsx)(o.A,{size:24})})]}),(0,s.jsx)("main",{className:"p-4 transition-colors duration-300",children:r})]})}function u(e){return(0,s.jsx)(d.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(c,{...e})})}},3312:(e,r,t)=>{"use strict";t.d(r,{$:()=>d,r:()=>l});var s=t(5155),n=t(2115),i=t(2317),a=t(1027),o=t(1567);let l=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:a,asChild:d=!1,...c}=e,u=d?i.DX:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:n,size:a,className:t})),ref:r,...c})});d.displayName="Button"},3900:(e,r,t)=>{"use strict";t.d(r,{p:()=>a});var s=t(5155),n=t(2115),i=t(1567);let a=n.forwardRef((e,r)=>{let{className:t,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:r,...a})});a.displayName="Input"},1801:(e,r,t)=>{"use strict";t.d(r,{J:()=>a,O:()=>o});var s=t(5155),n=t(2115);let i=(0,n.createContext)(void 0);function a(e){let{children:r}=e,[t,a]=(0,n.useState)(()=>{{let e=sessionStorage.getItem("players");return e?JSON.parse(e):[]}});return(0,n.useEffect)(()=>{sessionStorage.setItem("players",JSON.stringify(t))},[t]),(0,s.jsx)(i.Provider,{value:{players:t,addPlayer:e=>{if(e.trim()){let r={id:Date.now().toString(),name:e.trim(),order:t.length};a([...t,r])}},removePlayer:e=>{a(t.filter(r=>r.id!==e))},reorderPlayers:e=>{a(e.map((e,r)=>({...e,order:r})))},resetPlayers:()=>{a([]),sessionStorage.removeItem("players")}},children:r})}function o(){let e=(0,n.useContext)(i);if(void 0===e)throw Error("usePlayers must be used within a PlayerProvider");return e}},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>i});var s=t(3463),n=t(9795);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[529,832,441,517,358],()=>r(4038)),_N_E=e.O()}]);