import { createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import { A, u } from './index-BJoWiIN4.mjs';
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
import 'tiny-invariant';
import 'node:async_hooks';
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const m = () => import('./deferred-BRTn-SDt.mjs'), p = A("app_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_server", (e) => o.__executeServer(e)), o = u({ method: "GET" }).validator((e) => e).handler(p, ({ data: e }) => ({ name: e, randomNumber: Math.floor(Math.random() * 100) })), c = A("app_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_server", (e) => n.__executeServer(e)), n = u({ method: "GET" }).validator((e) => e).handler(c, async ({ data: e }) => (await new Promise((a) => setTimeout(a, 1e3)), { name: e, randomNumber: Math.floor(Math.random() * 100) })), l = createFileRoute("/deferred")({ loader: async () => ({ deferredStuff: new Promise((e) => setTimeout(() => e("Hello deferred!"), 2e3)), deferredPerson: n({ data: "Tanner Linsley" }), person: await o({ data: "John Doe" }) }), component: lazyRouteComponent(m, "component", () => l.ssr) });

export { p as personServerFn_createServerFn_handler, c as slowServerFn_createServerFn_handler };
//# sourceMappingURL=deferred-BSOKIAHc.mjs.map
