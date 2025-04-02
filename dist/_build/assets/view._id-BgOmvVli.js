import{aQ as x,aW as u,aS as g,j as e,f as h,d as f,e as p,aT as j,aU as b,aV as w,b as r,aX as y}from"./client-CBIQp8gY.js";import{c as N}from"./chunk-TE6SZS6W-CNTQbdMA.js";const k=function(){const{params:o}=x({from:u.id}),{id:l}=o,{data:a,isLoading:i,setSelectedImageIndex:c,selectedImageIndex:s,handleNext:d,handleBack:n}=g(l);return e.jsxs(e.Fragment,{children:[i&&e.jsx(h,{}),a&&e.jsxs(f,{shadow:"lg",className:"w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8",children:[e.jsxs(p,{className:"p-4 flex flex-col items-center",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-4xl place-items-center text-center mx-auto",children:e.jsxs("div",{className:"flex flex-col justify-center items-center relative w-full",children:[e.jsx(j,{src:a?.imageurl?.[s]||"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Selected Product",className:"w-full h-auto max-w-[500px] max-h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"}),e.jsxs("div",{className:"flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4",children:[e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${s===0?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:n,disabled:s===0,children:e.jsx(b,{size:20})}),e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${a?.imageurl&&s===a.imageurl.length-1?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:d,disabled:a?.imageurl&&s===a.imageurl.length-1,children:e.jsx(w,{size:20})})]})]})})}),e.jsx("br",{}),e.jsx("div",{className:"flex flex-wrap gap-2 justify-center items-center overflow-x-auto whitespace-nowrap w-full py-2",children:a?.imageurl?.length>0?a.imageurl.map((m,t)=>e.jsx("img",{src:m,alt:`Thumbnail ${t+1}`,className:`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${s===t?"border-4 border-orange-400":"border border-gray-300"}`,onClick:()=>c(t)},t)):e.jsx("img",{src:"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Default Thumbnail",className:"w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer"})}),e.jsx("br",{}),e.jsxs("div",{className:"flex flex-col justify-center items-center text-center space-y-4",children:[e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:a?.name}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("p",{className:"text-lg font-medium",children:["Quantity: ",a?.quantity]}),e.jsxs("p",{className:"text-lg font-medium",children:["Price: $",a?.price]})]}),e.jsx("p",{className:"max-w-md text-gray-600 leading-relaxed",children:a?.description})]})]}),e.jsxs(N,{className:"flex justify-center gap-4",children:[e.jsx(r,{variant:"solid",className:"bg-blue-500 hover:bg-blue-600 text-white border-blue-500",onPress:()=>y.navigate({to:"/admin/products/edit/$id",params:{id:l}}),children:"Edit"}),e.jsx(r,{variant:"solid",className:"bg-red-500 hover:bg-red-600 text-white border-red-500",onPress:()=>console.log("Delete product"),children:"Delete"})]})]})]})};export{k as component};
