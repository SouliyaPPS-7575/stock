if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>i(s,r),u={module:{uri:r},exports:a,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(l(...s),a)))}}define(["./workbox-058ac6d3"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/__vite-browser-external-BIHI7g3E.js",revision:null},{url:"assets/app-DHGave7n.css",revision:null},{url:"assets/chunk-TE6SZS6W-CNTQbdMA.js",revision:null},{url:"assets/client-CBIQp8gY.js",revision:null},{url:"assets/client-GNLSjkBZ.css",revision:null},{url:"assets/client-H4sUvV4P.js",revision:null},{url:"assets/create-SIe1wxYM.js",revision:null},{url:"assets/edit._id-DSLeotbj.js",revision:null},{url:"assets/index-BeDUVjrt.js",revision:null},{url:"assets/index-CAqlA_4z.js",revision:null},{url:"assets/index-CFcXl8Rn.js",revision:null},{url:"assets/index-DQ3bPFF6.js",revision:null},{url:"assets/index-DycjtVQu.js",revision:null},{url:"assets/login-DTJXBlze.js",revision:null},{url:"assets/ssr.view._id-2LWoIvBC.js",revision:null},{url:"assets/ssr.view._id-Ctpz_cXj.js",revision:null},{url:"assets/ssr.view._id-LS6Yd3aT.js",revision:null},{url:"assets/ssr.view._id-RUwKbxch.js",revision:null},{url:"assets/useInfiniteCollection-azb67HtX.js",revision:null},{url:"assets/view._id-BgOmvVli.js",revision:null},{url:"assets/view._id-C9x-YP4j.js",revision:null},{url:"images/apple-touch-icon-180x180.png",revision:"10b5f88323fdad31bf50c90668d3e84a"},{url:"images/favicon.ico",revision:"89099cfae0775e3e086613bca3190493"},{url:"images/maskable-icon-512x512.png",revision:"126c55dc030a58db716758479c41c570"},{url:"images/pwa-192x192.png",revision:"14a23cc23a2f5a3157ac52e78135346c"},{url:"images/pwa-512x512.png",revision:"5a051418936d2f633fc164f78b1662e1"},{url:"images/pwa-64x64.png",revision:"e364fbdd8a3dde0c6167972af41c9dbf"},{url:"registerSW.js",revision:"6483703788e9d4fd5255cce011f568a7"},{url:"manifest.webmanifest",revision:"9bbfcdba6fe50eedcc7905e01240afaf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/"))),s.registerRoute(/\.(?:js|css|woff2?|png|jpg|jpeg|gif|svg|ico|webp|avif)$/i,new s.StaleWhileRevalidate({cacheName:"static-assets",plugins:[new s.ExpirationPlugin({maxEntries:200,maxAgeSeconds:2592e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute((({request:s})=>"navigate"===s.mode),new s.NetworkFirst({cacheName:"html-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/https:\/\/example-api.com\/.*/,new s.NetworkFirst({cacheName:"api-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET")}));
