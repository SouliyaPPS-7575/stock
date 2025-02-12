import { jsxs, jsx } from 'react/jsx-runtime';
import { Await } from '@tanstack/react-router';
import { useState, Suspense } from 'react';
import { H as He } from '../nitro/nitro.mjs';
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
import '@heroui/link';
import '@heroui/navbar';
import '@heroui/theme';
import 'clsx';
import '@react-aria/visually-hidden';
import '@heroui/switch';
import 'pocketbase';
import '@heroui/modal';
import '@heroui/react';
import '@tanstack/react-query';
import 'react-toastify';
import '@tanstack/react-query-devtools';
import '@tanstack/router-devtools';
import 'react-icons/fa';
import '@cloudinary/url-gen/actions/resize';
import '@cloudinary/url-gen';
import '@heroui/form';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const O = function() {
  const [o, p] = useState(0), { deferredStuff: d, deferredPerson: s, person: e } = He.useLoaderData();
  return jsxs("div", { className: "p-2", children: [jsxs("div", { "data-testid": "regular-person", children: [e.name, " - ", e.randomNumber] }), jsx(Suspense, { fallback: jsx("div", { children: "Loading person..." }), children: jsx(Await, { promise: s, children: (t) => jsxs("div", { "data-testid": "deferred-person", children: [t.name, " - ", t.randomNumber] }) }) }), jsx(Suspense, { fallback: jsx("div", { children: "Loading stuff..." }), children: jsx(Await, { promise: d, children: (t) => jsx("h3", { "data-testid": "deferred-stuff", children: t }) }) }), jsxs("div", { children: ["Count: ", o] }), jsx("div", { children: jsx("button", { onClick: () => p(o + 1), children: "Increment" }) })] });
};

export { O as component };
//# sourceMappingURL=deferred-B47IHYAR.mjs.map
