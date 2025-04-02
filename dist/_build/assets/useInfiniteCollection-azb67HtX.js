import{Q as te,g as F,h as re,k as ne,m as oe,r as g,t as V,n,o as le,q,s as Z,v as z,w as $,x as H,j as x,z as ie,A as L,B as de,p as N}from"./client-CBIQp8gY.js";var ce=class extends te{constructor(e,r){super(e,r)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e){super.setOptions({...e,behavior:F()})}getOptimisticResult(e){return e.behavior=F(),super.getOptimisticResult(e)}fetchNextPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(e){return this.fetch({...e,meta:{fetchMore:{direction:"backward"}}})}createResult(e,r){const{state:i}=e,o=super.createResult(e,r),{isFetching:s,isRefetching:d,isError:u,isRefetchError:m}=o,c=i.fetchMeta?.fetchMore?.direction,p=u&&c==="forward",a=s&&c==="forward",f=u&&c==="backward",b=s&&c==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:ne(r,i.data),hasPreviousPage:re(r,i.data),isFetchNextPageError:p,isFetchingNextPage:a,isFetchPreviousPageError:f,isFetchingPreviousPage:b,isRefetchError:m&&!p&&!f,isRefetching:d&&!a&&!b}}};function ue(e,r){return oe(e,ce)}function ge(){const e=()=>()=>{};return g.useSyncExternalStore(e,()=>!0,()=>!1)}var D=V({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1},compoundVariants:[{showSkeleton:!0,disableAnimation:!1,class:{wrapper:["before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"]}}],compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),Q=V({slots:{base:["relative","inline-flex","shrink-0"],badge:["flex","z-10","flex-wrap","absolute","box-border","rounded-full","whitespace-nowrap","place-content-center","origin-center","items-center","text-inherit","select-none","font-regular","scale-100","opacity-100","subpixel-antialiased","data-[invisible=true]:scale-0","data-[invisible=true]:opacity-0"]},variants:{variant:{solid:{},flat:{},faded:{badge:"border-medium"},shadow:{}},color:{default:{},primary:{},secondary:{},success:{},warning:{},danger:{}},size:{sm:{badge:"px-1 text-tiny"},md:{badge:"px-1 text-small"},lg:{badge:"px-1 text-small"}},placement:{"top-right":{},"top-left":{},"bottom-right":{},"bottom-left":{}},shape:{circle:{},rectangle:{}},isInvisible:{true:{}},isOneChar:{true:{badge:"px-0"}},isDot:{true:{}},disableAnimation:{true:{badge:"transition-none"},false:{badge:"transition-transform-opacity !ease-soft-spring !duration-300"}},showOutline:{true:{badge:"border-2 border-background"},false:{badge:"border-transparent border-0"}}},defaultVariants:{variant:"solid",color:"default",size:"md",shape:"rectangle",placement:"top-right",showOutline:!0,isInvisible:!1},compoundVariants:[{variant:"solid",color:"default",class:{badge:n.solid.default}},{variant:"solid",color:"primary",class:{badge:n.solid.primary}},{variant:"solid",color:"secondary",class:{badge:n.solid.secondary}},{variant:"solid",color:"success",class:{badge:n.solid.success}},{variant:"solid",color:"warning",class:{badge:n.solid.warning}},{variant:"solid",color:"danger",class:{badge:n.solid.danger}},{variant:"shadow",color:"default",class:{badge:n.shadow.default}},{variant:"shadow",color:"primary",class:{badge:n.shadow.primary}},{variant:"shadow",color:"secondary",class:{badge:n.shadow.secondary}},{variant:"shadow",color:"success",class:{badge:n.shadow.success}},{variant:"shadow",color:"warning",class:{badge:n.shadow.warning}},{variant:"shadow",color:"danger",class:{badge:n.shadow.danger}},{variant:"flat",color:"default",class:{badge:n.flat.default}},{variant:"flat",color:"primary",class:{badge:n.flat.primary}},{variant:"flat",color:"secondary",class:{badge:n.flat.secondary}},{variant:"flat",color:"success",class:{badge:n.flat.success}},{variant:"flat",color:"warning",class:{badge:n.flat.warning}},{variant:"flat",color:"danger",class:{badge:n.flat.danger}},{variant:"faded",color:"default",class:{badge:n.faded.default}},{variant:"faded",color:"primary",class:{badge:n.faded.primary}},{variant:"faded",color:"secondary",class:{badge:n.faded.secondary}},{variant:"faded",color:"success",class:{badge:n.faded.success}},{variant:"faded",color:"warning",class:{badge:n.faded.warning}},{variant:"faded",color:"danger",class:{badge:n.faded.danger}},{isOneChar:!0,size:"sm",class:{badge:"w-4 h-4 min-w-4 min-h-4"}},{isOneChar:!0,size:"md",class:{badge:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,size:"lg",class:{badge:"w-6 h-6 min-w-6 min-h-6"}},{isDot:!0,size:"sm",class:{badge:"w-3 h-3 min-w-3 min-h-3"}},{isDot:!0,size:"md",class:{badge:"w-3.5 h-3.5 min-w-3.5 min-h-3.5"}},{isDot:!0,size:"lg",class:{badge:"w-4 h-4 min-w-4 min-h-4"}},{placement:"top-right",shape:"rectangle",class:{badge:"top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2"}},{placement:"top-left",shape:"rectangle",class:{badge:"top-[5%] left-[5%] -translate-x-1/2 -translate-y-1/2"}},{placement:"bottom-right",shape:"rectangle",class:{badge:"bottom-[5%] right-[5%] translate-x-1/2 translate-y-1/2"}},{placement:"bottom-left",shape:"rectangle",class:{badge:"bottom-[5%] left-[5%] -translate-x-1/2 translate-y-1/2"}},{placement:"top-right",shape:"circle",class:{badge:"top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2"}},{placement:"top-left",shape:"circle",class:{badge:"top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2"}},{placement:"bottom-right",shape:"circle",class:{badge:"bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2"}},{placement:"bottom-left",shape:"circle",class:{badge:"bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2"}}]});function me(e={}){const{onLoad:r,onError:i,ignoreFallback:o,src:s,crossOrigin:d,srcSet:u,sizes:m,loading:c}=e,p=ge(),a=g.useRef(p?new Image:null),[f,b]=g.useState("pending");g.useEffect(()=>{a.current&&(a.current.onload=l=>{h(),b("loaded"),r?.(l)},a.current.onerror=l=>{h(),b("failed"),i?.(l)})},[a.current]);const h=()=>{a.current&&(a.current.onload=null,a.current.onerror=null,a.current=null)},t=g.useCallback(()=>{if(!s)return"pending";if(o)return"loaded";const l=new Image;return l.src=s,d&&(l.crossOrigin=d),u&&(l.srcset=u),m&&(l.sizes=m),c&&(l.loading=c),a.current=l,l.complete&&l.naturalWidth?"loaded":"loading"},[s,d,u,m,r,i,c]);return le(()=>{p&&b(t())},[p,t]),o?"loaded":f}function fe(e){var r,i;const o=q(),s=(i=(r=e?.disableAnimation)!=null?r:o?.disableAnimation)!=null?i:!1,[d,u]=Z(e,Q.variantKeys),{as:m,children:c,className:p,content:a,classNames:f,...b}=d,h=m||"span",t=g.useMemo(()=>{var w;return((w=String(a))==null?void 0:w.length)===1||e?.isOneChar},[a,e?.isOneChar]),l=g.useMemo(()=>{var w;return((w=String(a))==null?void 0:w.length)===0},[a]),v=z(f?.badge,p),P=g.useMemo(()=>Q({...u,showOutline:e?.disableOutline?!e?.disableOutline:e?.showOutline,isOneChar:t,isDot:l}),[$(u),t,l]),S=()=>({className:P.badge({class:v}),"data-invisible":e.isInvisible,...b});return{Component:h,children:c,content:a,slots:P,classNames:f,disableAnimation:s,isInvisible:e?.isInvisible,getBadgeProps:S}}var K=H((e,r)=>{const{Component:i,children:o,content:s,slots:d,classNames:u,getBadgeProps:m}=fe({...e});return x.jsxs("div",{className:d.base({class:u?.base}),children:[o,x.jsx(i,{ref:r,...m(),children:s})]})});K.displayName="HeroUI.Badge";var ve=K;function be(e){var r,i;const o=q(),[s,d]=Z(e,D.variantKeys),{ref:u,as:m,src:c,className:p,classNames:a,loading:f,isBlurred:b,fallbackSrc:h,isLoading:t,disableSkeleton:l=!!h,removeWrapper:v=!1,onError:P,onLoad:S,srcSet:w,sizes:O,crossOrigin:R,...k}=s,C=me({src:c,loading:f,onError:P,onLoad:S,ignoreFallback:!1,srcSet:w,sizes:O,crossOrigin:R}),M=(i=(r=e.disableAnimation)!=null?r:o?.disableAnimation)!=null?i:!1,E=C==="loaded"&&!t,W=C==="loading"||t,U=e.isZoomed,G=m||"img",B=ie(u),{w:j,h:J}=g.useMemo(()=>({w:s.width?typeof s.width=="number"?`${s.width}px`:s.width:"fit-content",h:s.height?typeof s.height=="number"?`${s.height}px`:s.height:"auto"}),[s?.width,s?.height]),A=(!c||!E)&&!!h,_=W&&!l,y=g.useMemo(()=>D({...d,disableAnimation:M,showSkeleton:_}),[$(d),M,_]),X=z(p,a?.img),Y=(I={})=>{const se=z(X,I?.className);return{src:c,ref:B,"data-loaded":L(E),className:y.img({class:se}),loading:f,srcSet:w,sizes:O,crossOrigin:R,...k,style:{...k?.height&&{height:J},...I.style,...k.style}}},ee=g.useCallback(()=>{const I=A?{backgroundImage:`url(${h})`}:{};return{className:y.wrapper({class:a?.wrapper}),style:{...I,maxWidth:j}}},[y,A,h,a?.wrapper,j]),ae=g.useCallback(()=>({src:c,"aria-hidden":L(!0),className:y.blurredImg({class:a?.blurredImg})}),[y,c,a?.blurredImg]);return{Component:G,domRef:B,slots:y,classNames:a,isBlurred:b,disableSkeleton:l,fallbackSrc:h,removeWrapper:v,isZoomed:U,isLoading:W,getImgProps:Y,getWrapperProps:ee,getBlurredImgProps:ae}}var T=H((e,r)=>{const{Component:i,domRef:o,slots:s,classNames:d,isBlurred:u,isZoomed:m,fallbackSrc:c,removeWrapper:p,disableSkeleton:a,getImgProps:f,getWrapperProps:b,getBlurredImgProps:h}=be({...e,ref:r}),t=x.jsx(i,{ref:o,...f()});if(p)return t;const l=x.jsx("div",{className:s.zoomedWrapper({class:d?.zoomedWrapper}),children:t});return u?x.jsxs("div",{...b(),children:[m?l:t,g.cloneElement(t,h())]}):m||!a||c?x.jsxs("div",{...b(),children:[" ",m?l:t]}):t});T.displayName="HeroUI.Image";var we=T;function he({hasNextPage:e,isFetchingNextPage:r,fetchNextPage:i}){const o=g.useRef(null),s=g.useRef(null);return g.useEffect(()=>{if(!e||r)return;const d=u=>{u[0].isIntersecting&&i()};return s.current&&(o.current=new IntersectionObserver(d),o.current.observe(s.current)),()=>{o.current&&o.current.disconnect()}},[e,r,i]),s}const ye=({collection:e,pageSize:r=12,sort:i="created"})=>{const o=de(),s=async({pageParam:t=1})=>await N.collection(e).getList(t,r,{sort:i}),{data:d,fetchNextPage:u,hasNextPage:m,isFetchingNextPage:c,isLoading:p}=ue({queryKey:[e],queryFn:s,getNextPageParam:t=>t?.page<t?.totalPages?t.page+1:void 0,staleTime:1,initialPageParam:1}),a=g.useMemo(()=>d?.pages.flatMap(t=>t.items)??[],[d]),[f,b]=g.useState(a);g.useEffect(()=>{a!==f&&b(a)},[d,f]),g.useEffect(()=>{let t=!0;return(async()=>{try{await N.collection(e).subscribe("*",v=>{t&&(console.log("Realtime event:",v.action,v.record),o.invalidateQueries({queryKey:[e]}))})}catch(v){console.error("Realtime subscription failed:",v)}})(),()=>{t=!1,N.collection(e).unsubscribe()}},[e,o]);const h=he({hasNextPage:!!m,isFetchingNextPage:c,fetchNextPage:u});return{items:f,loadMoreRef:h,isLoading:p,isFetchingNextPage:c}};export{ve as b,we as i,ye as u};
