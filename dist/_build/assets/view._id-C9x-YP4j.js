import{aQ as x,aR as u,aS as h,j as e,f as g,d as f,e as p,aT as j,aU as w,aV as b,b as y}from"./client-CBIQp8gY.js";const C=function(){const{params:l}=x({from:u.id}),{id:r}=l,{data:a,isLoading:o,setSelectedImageIndex:n,selectedImageIndex:s,handleNext:c,handleBack:d}=h(r),i=()=>{console.log(`Added ${a?.name} to cart!`)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(g,{}),a&&e.jsx(f,{shadow:"lg",className:"w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8",children:e.jsxs(p,{className:"p-4 flex flex-col items-center",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-4 w-full max-w-4xl place-items-center text-center mx-auto",children:e.jsxs("div",{className:"flex flex-col justify-center items-center relative w-full",children:[e.jsx(j,{src:a?.imageurl?.[s]||"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Selected Product",className:"w-full h-auto max-w-[500px] max-h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"}),e.jsxs("div",{className:"flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4",children:[e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${s===0?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:d,disabled:s===0,children:e.jsx(w,{size:20})}),e.jsx("button",{className:`p-2 bg-gray-500 text-white rounded-full ${a?.imageurl&&s===a.imageurl.length-1?"opacity-50 cursor-not-allowed":"hover:bg-gray-400"}`,onClick:c,disabled:a?.imageurl&&s===a.imageurl.length-1,children:e.jsx(b,{size:20})})]})]})})}),e.jsx("br",{}),e.jsx("div",{className:"flex flex-wrap gap-2 justify-center items-center overflow-x-auto whitespace-nowrap w-full py-2",children:a?.imageurl?.length>0?a.imageurl.map((m,t)=>e.jsx("img",{src:m,alt:`Thumbnail ${t+1}`,className:`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer transition-all duration-300 ${s===t?"border-4 border-orange-400":"border border-gray-300"}`,onClick:()=>n(t)},t)):e.jsx("img",{src:"https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain",alt:"Default Thumbnail",className:"w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer"})}),e.jsx("br",{}),e.jsxs("div",{className:"flex flex-col justify-center items-center text-center space-y-4",children:[e.jsx("p",{className:"text-2xl font-bold text-gray-900",children:a?.name}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[e.jsxs("p",{className:"text-lg font-medium",children:["Quantity: ",a?.quantity]}),e.jsxs("p",{className:"text-lg font-medium",children:["Price: $",a?.price]})]}),e.jsx("p",{className:"max-w-md text-gray-600 leading-relaxed",children:a?.description}),e.jsx(y,{size:"sm",color:"primary",onPress:i,className:"w-full mt-1 px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105",children:"Add to Cart"})]})]})})]})};export{C as component};
