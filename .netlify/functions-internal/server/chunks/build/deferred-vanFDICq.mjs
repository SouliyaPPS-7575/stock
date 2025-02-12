import { jsxs, jsx } from 'react/jsx-runtime';
import { Await } from '@tanstack/react-router';
import { useState, Suspense } from 'react';
import { _ as _e } from '../nitro/nitro.mjs';
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
import '@tanstack/router-devtools';
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const w = function() {
  const [i, m] = useState(0), { deferredStuff: s, deferredPerson: p, person: o } = _e.useLoaderData();
  return jsxs("div", { className: "p-2", children: [jsxs("div", { "data-testid": "regular-person", children: [o.name, " - ", o.randomNumber] }), jsx(Suspense, { fallback: jsx("div", { children: "Loading person..." }), children: jsx(Await, { promise: p, children: (e) => jsxs("div", { "data-testid": "deferred-person", children: [e.name, " - ", e.randomNumber] }) }) }), jsx(Suspense, { fallback: jsx("div", { children: "Loading stuff..." }), children: jsx(Await, { promise: s, children: (e) => jsx("h3", { "data-testid": "deferred-stuff", children: e }) }) }), jsxs("div", { children: ["Count: ", i] }), jsx("div", { children: jsx("button", { onClick: () => m(i + 1), children: "Increment" }) })] });
};

export { w as component };
//# sourceMappingURL=deferred-vanFDICq.mjs.map
