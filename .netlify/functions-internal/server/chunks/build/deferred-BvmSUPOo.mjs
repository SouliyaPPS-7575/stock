import { jsxs, jsx } from 'react/jsx-runtime';
import { createFileRoute, Await, lazyRouteComponent } from '@tanstack/react-router';
import { useState, Suspense } from 'react';
import { c as l$1, a as h } from './deferred-B44SK-rK.mjs';
import 'tiny-invariant';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'node:async_hooks';
import '@tanstack/react-query';
import '@tanstack/react-router-with-query';
import '@heroui/react';
import '@heroui/link';
import '@heroui/navbar';
import '@heroui/theme';
import 'clsx';
import '@react-aria/visually-hidden';
import '@heroui/switch';
import 'pocketbase';
import '@heroui/modal';
import 'react-toastify';
import '@tanstack/react-query-devtools';
import 'react-icons/fa';
import '@cloudinary/url-gen/actions/resize';
import '@cloudinary/url-gen';
import '@heroui/form';
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const F = () => Promise.resolve().then(() => y), b = h("app_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_server", (e) => l.__executeServer(e)), l = l$1({ method: "GET" }).validator((e) => e).handler(b, ({ data: e }) => ({ name: e, randomNumber: Math.floor(Math.random() * 100) })), w = h("app_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_server", (e) => m.__executeServer(e)), m = l$1({ method: "GET" }).validator((e) => e).handler(w, async ({ data: e }) => (await new Promise((n) => setTimeout(n, 1e3)), { name: e, randomNumber: Math.floor(Math.random() * 100) })), p = createFileRoute("/deferred")({ loader: async () => ({ deferredStuff: new Promise((e) => setTimeout(() => e("Hello deferred!"), 2e3)), deferredPerson: m({ data: "Tanner Linsley" }), person: await l({ data: "John Doe" }) }), component: lazyRouteComponent(F, "component", () => p.ssr) }), x = function() {
  const [n, u] = useState(0), { deferredStuff: f, deferredPerson: h, person: d } = p.useLoaderData();
  return jsxs("div", { className: "p-2", children: [jsxs("div", { "data-testid": "regular-person", children: [d.name, " - ", d.randomNumber] }), jsx(Suspense, { fallback: jsx("div", { children: "Loading person..." }), children: jsx(Await, { promise: h, children: (t) => jsxs("div", { "data-testid": "deferred-person", children: [t.name, " - ", t.randomNumber] }) }) }), jsx(Suspense, { fallback: jsx("div", { children: "Loading stuff..." }), children: jsx(Await, { promise: f, children: (t) => jsx("h3", { "data-testid": "deferred-stuff", children: t }) }) }), jsxs("div", { children: ["Count: ", n] }), jsx("div", { children: jsx("button", { onClick: () => u(n + 1), children: "Increment" }) })] });
}, y = Object.freeze(Object.defineProperty({ __proto__: null, component: x }, Symbol.toStringTag, { value: "Module" }));

export { x as component };
//# sourceMappingURL=deferred-BvmSUPOo.mjs.map
