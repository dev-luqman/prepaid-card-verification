(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[399],{3726:function(s,e,c){Promise.resolve().then(c.bind(c,17))},17:function(s,e,c){"use strict";c.r(e);var n=c(7437),r=c(3027),a=c(5598),l=c(1574),t=c(8358),i=c(1590),d=c(7304),h=c(8027),o=c(1097),j=c(3550),x=c(6648),u=c(6463);e.default=()=>{let s=(0,u.useRouter)(),e=(0,u.useSearchParams)(),c=(0,u.usePathname)(),p="",m=e.get("sort");if(m){let s=m.split(","),e={};for(let c=0;c<s.length;c+=2)e[s[c]]=o.Tg[s[c+1]]||"0";p=Object.entries(e).map(s=>s.join(",")).join(",")}let g={query:e.get("q")||"",sort:p},{unresolvedCards:f,unresolvedCardsLoading:b,unresolvedCardsError:N}=(0,h.nV)({search:g.query,sort:g.sort}),_=n=>{let r=new URLSearchParams(e.toString()),a={};if(m){let s=m.split(",");for(let e=0;e<s.length;e+=2)a[s[e]]=s[e+1]}"asc"===a[n]?r.set("sort","".concat(n,",desc")):r.set("sort","".concat(n,",asc")),s.push("".concat(c,"?").concat(r.toString()))};return(0,n.jsxs)(l.Z,{showFilter:!1,searchPlaceholder:"Search by ID, Name, Location",handleSearch:n=>{let r=n.target.value,a=new URLSearchParams(e.toString());r?a.set("q",r):a.delete("q"),s.push("".concat(c,"?").concat(a.toString()))},children:[(0,n.jsx)(t.aG,{className:"mb-8",children:(0,n.jsxs)(t.Jb,{children:[(0,n.jsx)(t.bg,{}),(0,n.jsx)(t.gN,{children:(0,n.jsx)(t.At,{onClick:()=>s.push("/home/cards"),children:"Homepage"})}),(0,n.jsx)(t.bg,{}),(0,n.jsx)(t.gN,{children:(0,n.jsx)(t.AG,{children:"Unresolved Cards"})})]})}),b?(0,n.jsx)(r.Z,{}):(0,n.jsxs)(d.iA,{children:[(0,n.jsx)(d.xD,{children:(0,n.jsxs)(d.SC,{children:[(0,n.jsx)(d.ss,{children:"Holder Details"}),(0,n.jsxs)(d.ss,{className:"flex cursor-pointer items-center gap-2",onClick:()=>_("hub"),children:["Hub ",(0,n.jsx)(x.default,{src:a.Z,alt:"Sort Icon"})]}),(0,n.jsx)(d.ss,{children:"BG Card ID"}),(0,n.jsx)(d.ss,{children:"Card Pan"}),(0,n.jsx)(d.ss,{children:"Status"}),(0,n.jsx)(d.ss,{children:"Issuer ID"})]})}),(0,n.jsx)(d.RM,{children:null==f?void 0:f.data.map(s=>(0,n.jsxs)(d.SC,{children:[(0,n.jsx)(d.pj,{children:(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("div",{className:"h-[45px] w-[45px]",children:(0,n.jsx)(x.default,{src:s.image,alt:"".concat(s.name," image"),className:"h-full w-full rounded-[5px] object-cover",width:500,height:500})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:s.name}),(0,n.jsx)("p",{className:"opacity-80",children:s.ik_number})]})]})}),(0,n.jsx)(d.pj,{children:s.hub}),(0,n.jsx)(d.pj,{children:s.card_id}),(0,n.jsx)(d.pj,{children:s.card_pan}),(0,n.jsx)(d.pj,{children:(0,n.jsxs)("div",{className:"flex items-center justify-center gap-2 rounded-[8px] px-2 py-1 ".concat(o.l3[s.status].bgClass," "),children:[(0,n.jsx)(x.default,{src:o.l3[s.status].icon,alt:"".concat(o.l3[s.status].name," Icon"),className:"h-4 w-4"}),(0,n.jsx)("p",{children:o.l3[s.status].name})]})}),(0,n.jsx)(d.pj,{children:s.issuer_id}),(0,n.jsx)(d.pj,{children:(0,n.jsxs)(i.h_,{children:[(0,n.jsx)(i.$F,{className:"focus:outline-none",children:(0,n.jsx)(j.Z,{className:"w-17 h-5"})}),(0,n.jsx)(i.AW,{children:(0,n.jsx)(i.Xi,{className:"cursor-pointer focus:bg-[#54CC001A]",children:"View"})})]})})]},"".concat(s.unique_entity_id," ").concat(s.bank_card_id)))})]})]})}}},function(s){s.O(0,[124,950,840,444,575,336,370,574,809,971,23,744],function(){return s(s.s=3726)}),_N_E=s.O()}]);