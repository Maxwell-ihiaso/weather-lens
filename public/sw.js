if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const r=e=>t(e,c),o={module:{uri:c},exports:a,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),a)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"c84e62647869b0cb6fdbb0da8b856a16"},{url:"/_next/static/chunks/191-f7a11e3287b9990f.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/288-a04df0793e2724dd.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/472-48acaea75d0e5fa3.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/69b09407-95cedf62acb66d6a.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/703-d5116674b759e855.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/870fdd6f-e8a9e3389559c298.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/app/_not-found-33c8be49c273adbd.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/app/city/%5B...slug%5D/page-0b2f484197a42585.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/app/layout-d6a0f0fdc7b4e79a.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/app/page-0ebc09e55f92081a.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/fd9d1056-72ec3bafb1f6d71a.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/main-196a59eeb6f47884.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/main-app-f21ea32e026199fd.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-88e14893ad69480a.js",revision:"gc93BXyTPGzr1tNGAmn44"},{url:"/_next/static/css/0429ef48c633d7eb.css",revision:"0429ef48c633d7eb"},{url:"/_next/static/css/15902a1b7187cb87.css",revision:"15902a1b7187cb87"},{url:"/_next/static/css/6348566bbd18320c.css",revision:"6348566bbd18320c"},{url:"/_next/static/gc93BXyTPGzr1tNGAmn44/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/gc93BXyTPGzr1tNGAmn44/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/backdrop.avif",revision:"82339e73a0f77d829c8a67094cb19648"},{url:"/cloud.jfif",revision:"64808efb2829e3a3c2b93663795fdbf7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/project-design-flow.png",revision:"b0b5b3a2dbe26e3a91cb4f18ad637985"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
