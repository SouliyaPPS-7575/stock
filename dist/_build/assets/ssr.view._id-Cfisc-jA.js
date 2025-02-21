import{r as o,j as e,aU as u,aV as n,f as x,h,aD as g,aE as f,aF as p,b as j}from"./client-B_fdwK6j.js";const w=o.memo(()=>{const[s,r]=o.useState(0),a=u.useLoaderData();if(!a)return e.jsx(n,{children:"No product data available"});const d=()=>{r(t=>t<a?.imageurl?.length-1?t+1:t)},c=()=>{r(t=>t>0?t-1:t)},i=()=>{console.log(`Added ${a?.name} to cart!`)},m=o.memo(()=>a?.imageurl?.length>0?a?.imageurl?.map((t,l)=>e.jsx("img",{src:t,alt:`Thumbnail ${l+1}`,className:`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${s===l?"border-4 border-orange-400":"border border-gray-300"}`,onClick:()=>r(l)},l)):e.jsx("img",{src:"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Default Thumbnail",className:"w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"}));return e.jsx(x,{shadow:"lg",className:"w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8",children:e.jsxs(h,{className:"p-4 flex flex-col items-center",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("div",{className:"grid grid-cols-1 gap-4 w-full max-w-4xl place-items-center text-center mx-auto",children:e.jsxs("div",{className:"flex flex-col justify-center items-center relative w-full",children:[e.jsx(g,{src:a?.imageurl?.[s]||"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Selected Product",className:"w-full h-auto max-w-[500px] max-h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105",preview:!0}),a?.imageurl?.length>1&&e.jsxs("div",{className:"flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4",children:[e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${s===0?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:c,disabled:s===0,children:e.jsx(f,{size:20})}),e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${s===a?.imageurl?.length-1?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:d,disabled:s===a?.imageurl?.length-1,children:e.jsx(p,{size:20})})]})]})})}),e.jsx("div",{className:"flex flex-wrap gap-2 justify-center items-center overflow-x-auto whitespace-nowrap w-full py-2 mt-4",children:e.jsx(m,{})}),e.jsxs("div",{className:"flex flex-col justify-center items-center text-center space-y-4",children:[e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:a?.name}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("p",{className:"text-lg font-medium",children:["Quantity: ",a?.quantity]}),e.jsxs("p",{className:"text-lg font-medium",children:["Price: $",a?.price]})]}),e.jsx("p",{className:"max-w-md text-gray-600 leading-relaxed",children:a?.description}),e.jsx(j,{size:"sm",color:"primary",onPress:i,className:"w-full max-w-xs mt-1 px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105",children:"Add to Cart"})]})]})})});w.displayName="RouteComponent";const N=()=>e.jsx(n,{children:"Not found"});export{w as default,N as notFoundComponent};
