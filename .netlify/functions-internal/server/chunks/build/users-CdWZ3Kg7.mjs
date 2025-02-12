import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';
import { m as me } from '../nitro/nitro.mjs';
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
import 'react';
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const j = function() {
  const o = me.useLoaderData();
  return jsxs("div", { className: "p-2 flex gap-2", children: [jsx("ul", { className: "list-disc pl-4", children: [...o, { id: "i-do-not-exist", name: "Non-existent User", email: "" }].map((e) => jsx("li", { className: "whitespace-nowrap", children: jsx(Link, { to: "/users/$userId", params: { userId: String(e.id) }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: jsx("div", { children: e.name }) }) }, e.id)) }), jsx("hr", {}), jsx(Outlet, {})] });
};

export { j as component };
//# sourceMappingURL=users-CdWZ3Kg7.mjs.map
