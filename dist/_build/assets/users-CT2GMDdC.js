import{R as a,j as s,L as n,O as i}from"./client-HT1YWBzE.js";const l=function(){const t=a.useLoaderData();return s.jsxs("div",{className:"p-2 flex gap-2",children:[s.jsx("ul",{className:"list-disc pl-4",children:[...t,{id:"i-do-not-exist",name:"Non-existent User",email:""}].map(e=>s.jsx("li",{className:"whitespace-nowrap",children:s.jsx(n,{to:"/users/$userId",params:{userId:String(e.id)},className:"block py-1 text-blue-800 hover:text-blue-600",activeProps:{className:"text-black font-bold"},children:s.jsx("div",{children:e.name})})},e.id))}),s.jsx("hr",{}),s.jsx(i,{})]})};export{l as component};
