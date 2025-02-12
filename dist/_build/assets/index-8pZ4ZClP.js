import{t as M,c as s,e as z,m as I,r as u,f as _,o as E,g as S,j as t,h as P,k,l as B,n as D,q as Q,p as y,L as j,b as q,s as F}from"./client-DU0zCAyp.js";import{c as L,a as A,b as H}from"./chunk-5PILOUBS-B9-PK6zT.js";import{Q as V,u as K}from"./useBaseQuery-BQzYFG3S.js";var O=M({slots:{base:["relative","inline-flex","shrink-0"],badge:["flex","z-10","flex-wrap","absolute","box-border","rounded-full","whitespace-nowrap","place-content-center","origin-center","items-center","text-inherit","select-none","font-regular","scale-100","opacity-100","subpixel-antialiased","data-[invisible=true]:scale-0","data-[invisible=true]:opacity-0"]},variants:{variant:{solid:{},flat:{},faded:{badge:"border-medium"},shadow:{}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{badge:"px-1 text-tiny"},md:{badge:"px-1 text-small"},lg:{badge:"px-1 text-small"}},placement:{"top-right":{},"top-left":{},"bottom-right":{},"bottom-left":{}},shape:{circle:{},rectangle:{}},isInvisible:{true:{}},isOneChar:{true:{badge:"px-0"}},isDot:{true:{}},disableAnimation:{true:{badge:"transition-none"},false:{badge:"transition-transform-opacity !ease-soft-spring !duration-300"}},showOutline:{true:{badge:"border-2 border-background"},false:{badge:"border-transparent border-0"}}},defaultVariants:{variant:"solid",color:"default",size:"md",shape:"rectangle",placement:"top-right",showOutline:!0,isInvisible:!1},compoundVariants:[{variant:"solid",color:"default",class:{badge:s.solid.default}},{variant:"solid",color:"primary",class:{badge:s.solid.primary}},{variant:"solid",color:"secondary",class:{badge:s.solid.secondary}},{variant:"solid",color:"success",class:{badge:s.solid.success}},{variant:"solid",color:"warning",class:{badge:s.solid.warning}},{variant:"solid",color:"danger",class:{badge:s.solid.danger}},{variant:"shadow",color:"default",class:{badge:s.shadow.default}},{variant:"shadow",color:"primary",class:{badge:s.shadow.primary}},{variant:"shadow",color:"secondary",class:{badge:s.shadow.secondary}},{variant:"shadow",color:"success",class:{badge:s.shadow.success}},{variant:"shadow",color:"warning",class:{badge:s.shadow.warning}},{variant:"shadow",color:"danger",class:{badge:s.shadow.danger}},{variant:"flat",color:"default",class:{badge:s.flat.default}},{variant:"flat",color:"primary",class:{badge:s.flat.primary}},{variant:"flat",color:"secondary",class:{badge:s.flat.secondary}},{variant:"flat",color:"success",class:{badge:s.flat.success}},{variant:"flat",color:"warning",class:{badge:s.flat.warning}},{variant:"flat",color:"danger",class:{badge:s.flat.danger}},{variant:"faded",color:"default",class:{badge:s.faded.default}},{variant:"faded",color:"primary",class:{badge:s.faded.primary}},{variant:"faded",color:"secondary",class:{badge:s.faded.secondary}},{variant:"faded",color:"success",class:{badge:s.faded.success}},{variant:"faded",color:"warning",class:{badge:s.faded.warning}},{variant:"faded",color:"danger",class:{badge:s.faded.danger}},{isOneChar:!0,size:"sm",class:{badge:"w-4 h-4 min-w-4 min-h-4"}},{isOneChar:!0,size:"md",class:{badge:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,size:"lg",class:{badge:"w-6 h-6 min-w-6 min-h-6"}},{isDot:!0,size:"sm",class:{badge:"w-3 h-3 min-w-3 min-h-3"}},{isDot:!0,size:"md",class:{badge:"w-3.5 h-3.5 min-w-3.5 min-h-3.5"}},{isDot:!0,size:"lg",class:{badge:"w-4 h-4 min-w-4 min-h-4"}},{placement:"top-right",shape:"rectangle",class:{badge:"top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2"}},{placement:"top-left",shape:"rectangle",class:{badge:"top-[5%] left-[5%] -translate-x-1/2 -translate-y-1/2"}},{placement:"bottom-right",shape:"rectangle",class:{badge:"bottom-[5%] right-[5%] translate-x-1/2 translate-y-1/2"}},{placement:"bottom-left",shape:"rectangle",class:{badge:"bottom-[5%] left-[5%] -translate-x-1/2 translate-y-1/2"}},{placement:"top-right",shape:"circle",class:{badge:"top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2"}},{placement:"top-left",shape:"circle",class:{badge:"top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2"}},{placement:"bottom-right",shape:"circle",class:{badge:"bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2"}},{placement:"bottom-left",shape:"circle",class:{badge:"bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2"}}]});function T(e){var a,r;const n=z(),i=(r=(a=e?.disableAnimation)!=null?a:n?.disableAnimation)!=null?r:!1,[d,o]=I(e,O.variantKeys),{as:f,children:g,className:m,content:c,classNames:h,...b}=d,x=f||"span",l=u.useMemo(()=>{var v;return((v=String(c))==null?void 0:v.length)===1||e?.isOneChar},[c,e?.isOneChar]),w=u.useMemo(()=>{var v;return((v=String(c))==null?void 0:v.length)===0},[c]),p=_(h?.badge,m),N=u.useMemo(()=>O({...o,showOutline:e?.disableOutline?!e?.disableOutline:e?.showOutline,isOneChar:l,isDot:w}),[E(o),l,w]),R=()=>({className:N.badge({class:p}),"data-invisible":e.isInvisible,...b});return{Component:x,children:g,content:c,slots:N,classNames:h,disableAnimation:i,isInvisible:e?.isInvisible,getBadgeProps:R}}var C=S((e,a)=>{const{Component:r,children:n,content:i,slots:d,classNames:o,getBadgeProps:f}=T({...e});return t.jsxs("div",{className:d.base({class:o?.base}),children:[n,t.jsx(r,{ref:a,...f(),children:i})]})});C.displayName="HeroUI.Badge";var U=C,$=class extends V{constructor(e,a){super(e,a)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,a){super.setOptions({...e,behavior:P()},a)}getOptimisticResult(e){return e.behavior=P(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,a){const{state:r}=e,n=super.createResult(e,a),{isFetching:i,isRefetching:d,isError:o,isRefetchError:f}=n,g=r.fetchMeta?.fetchMore?.direction,m=o&&g==="forward",c=i&&g==="forward",h=o&&g==="backward",b=i&&g==="backward";return{...n,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:B(a,r.data),hasPreviousPage:k(a,r.data),isFetchNextPageError:m,isFetchingNextPage:c,isFetchPreviousPageError:h,isFetchingPreviousPage:b,isRefetchError:f&&!m&&!h,isRefetching:d&&!c&&!b}}};function G(e,a){return K(e,$)}function J({products:e}){return t.jsx("div",{className:"mb-20 z-0",children:e.length===0?t.jsx("p",{className:"text-center text-gray-500 text-lg",children:"No products found"}):t.jsx("div",{className:"gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",children:e.map((a,r)=>t.jsx("div",{className:"relative",children:t.jsx(U,{size:"lg",color:"primary",className:"px-2 py-1 text-xs sm:text-sm md:text-base font-bold rounded-full absolute top-3 right-3 z-10",content:a.quantity,children:t.jsxs(L,{isPressable:!0,shadow:"sm",onPress:()=>{D.navigate({to:`/products/view/${a.id}`})},className:"rounded-lg overflow-hidden relative",children:[t.jsx(A,{className:"p-0",children:t.jsx("img",{alt:a.name,src:a?.imageurl?.[0]?a?.imageurl?.[0]:"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",className:"w-[140px] sm:w-[160px] md:w-[180px]object-cover h-[110px] sm:h-[160px] md:h-[180px] rounded-t-lg"})}),t.jsxs(H,{className:"flex flex-col items-center px-1 py-1 space-y-1",children:[t.jsx("b",{className:"text-center w-full max-w-[100px] truncate",children:a.name}),t.jsxs("p",{className:"text-default-500 text-center w-full max-w-[100px] truncate",children:["$",a.price]})]})]})})},r))})})}function W({hasNextPage:e,isFetchingNextPage:a,fetchNextPage:r}){const n=u.useRef(null),i=u.useRef(null);return u.useEffect(()=>{if(!e||a)return;const d=o=>{o[0].isIntersecting&&r()};return i.current&&(n.current=new IntersectionObserver(d),n.current.observe(i.current)),()=>{n.current&&n.current.disconnect()}},[e,a,r]),i}const X=({collection:e,pageSize:a=12,sort:r="created"})=>{const n=Q(),i=async({pageParam:l=1})=>await y.collection(e).getList(l,a,{sort:r}),{data:d,fetchNextPage:o,hasNextPage:f,isFetchingNextPage:g,isLoading:m}=G({queryKey:[e],queryFn:i,getNextPageParam:l=>l?.page<l?.totalPages?l.page+1:void 0,staleTime:1,initialPageParam:1}),c=u.useMemo(()=>d?.pages.flatMap(l=>l.items)??[],[d]),[h,b]=u.useState(c);u.useEffect(()=>{b(c)},[c]),u.useEffect(()=>{let l=!0;return(async()=>{try{await y.collection(e).subscribe("*",p=>{l&&(console.log("Realtime event:",p.action,p.record),n.invalidateQueries({queryKey:[e]}))})}catch(p){console.error("Realtime subscription failed:",p)}})(),()=>{l=!1,y.collection(e).unsubscribe()}},[e,n]);const x=W({hasNextPage:!!f,isFetchingNextPage:g,fetchNextPage:o});return{items:h,loadMoreRef:x,isLoading:m,isFetchingNextPage:g}},ae=function(){const{items:a,loadMoreRef:r,isLoading:n,isFetchingNextPage:i}=X({collection:"products",pageSize:12});return n?t.jsx(j,{}):t.jsxs("div",{className:"p-2 z-0 min-h-screen",children:[t.jsx(J,{products:a}),i&&t.jsx(j,{}),t.jsx("div",{ref:r,className:"h-10"}),t.jsx(q,{color:"primary",className:"fixed bottom-20 right-4 p-4 rounded-full shadow-lg focus:outline-none z-10",as:F,href:"/products/create",children:"+ Create"})]})};export{ae as component};
