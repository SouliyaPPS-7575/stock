import{u as m,r as p,a as x,y as o,p as i,j as e,F as f,i as l,b as c}from"./client-CYIrkiy-.js";const j=function(){const u=m(),[r,a]=p.useState(null),n=x({mutationFn:async s=>await i.collection("users").authWithPassword(s.email.trim(),s.password),onSuccess:s=>{const t=s.token;t&&i.authStore.save(t),u({to:"/admin/products"}),o.success("Login successful!"),a("Login successful")},onError:s=>{o.error("Login failed. Please check your credentials."),console.error("Login Error:",s),a("Login failed")}}),d=s=>{s.preventDefault();const t=Object.fromEntries(new FormData(s.currentTarget));n.mutate(t)};return e.jsx("section",{className:"flex flex-col items-center justify-center gap-1 py-1 md:py-0",children:e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:e.jsxs(f,{className:"w-full max-w-sm flex flex-col gap-4",validationBehavior:"native",onReset:()=>a("reset"),onSubmit:d,children:[e.jsx("h2",{className:"text-center text-2xl font-bold",children:"Login"}),e.jsx(l,{isRequired:!0,errorMessage:"Please enter a valid email",label:"Email",labelPlacement:"outside",name:"email",placeholder:"Enter your email",type:"email"}),e.jsx(l,{isRequired:!0,errorMessage:"Please enter your password",label:"Password",labelPlacement:"outside",name:"password",placeholder:"Enter your password",type:"password"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{color:"primary",type:"submit",isLoading:n.isPending,children:n.isPending?"Logging in...":"Login"}),e.jsx(c,{type:"reset",variant:"flat",children:"Reset"})]}),r&&e.jsxs("div",{className:"text-small text-default-500",children:["Action: ",e.jsx("code",{children:r})]})]})})})};export{j as component};
