(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{3773:(e,r,t)=>{Promise.resolve().then(t.bind(t,6254))},6254:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(5155),n=t(6046),o=t(2115),i=t(3857),a=t(3312);function d(){let e=(0,n.useRouter)();return(0,s.jsx)(i.A,{title:"Game History",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-[50vh] space-y-6 text-center",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"\uD83D\uDEA7 Work in Progress"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Game stats are work in progress!"}),(0,s.jsx)("div",{className:"pt-4",children:(0,s.jsx)(a.$,{onClick:()=>{e.push("/")},children:"Start New Game"})})]})})}function c(){return(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(d,{})})}},3857:(e,r,t)=>{"use strict";t.d(r,{A:()=>l});var s=t(5155),n=t(8173),o=t.n(n),i=t(689),a=t(3474),d=t(6046),c=t(2115);function u(e){let{children:r,title:t}=e,n=(0,d.usePathname)(),c=(0,d.useSearchParams)().get("returnTo")||"/";return(0,s.jsxs)("div",{className:"min-h-screen bg-background text-foreground transition-colors duration-300",children:[(0,s.jsxs)("header",{className:"p-4 flex justify-between items-center border-b transition-colors duration-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold transition-colors duration-300",children:t}),"/settings"===n?(0,s.jsx)(o(),{href:c,className:"text-muted-foreground hover:text-foreground transition-colors duration-300",children:(0,s.jsx)(i.A,{size:24})}):(0,s.jsx)(o(),{href:"/settings?returnTo=".concat(n),className:"text-muted-foreground hover:text-foreground transition-colors duration-300",children:(0,s.jsx)(a.A,{size:24})})]}),(0,s.jsx)("main",{className:"p-4 transition-colors duration-300",children:r})]})}function l(e){return(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(u,{...e})})}},3312:(e,r,t)=>{"use strict";t.d(r,{$:()=>c,r:()=>d});var s=t(5155),n=t(2115),o=t(2317),i=t(1027),a=t(1567);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,r)=>{let{className:t,variant:n,size:i,asChild:c=!1,...u}=e,l=c?o.DX:"button";return(0,s.jsx)(l,{className:(0,a.cn)(d({variant:n,size:i,className:t})),ref:r,...u})});c.displayName="Button"},1567:(e,r,t)=>{"use strict";t.d(r,{cn:()=>o});var s=t(3463),n=t(9795);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[529,441,517,358],()=>r(3773)),_N_E=e.O()}]);