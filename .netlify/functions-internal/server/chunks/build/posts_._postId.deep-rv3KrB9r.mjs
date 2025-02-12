import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { b as be } from '../nitro/nitro.mjs';
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

const y = function() {
  const o = be.useLoaderData();
  return jsxs("div", { className: "p-2 space-y-2", children: [jsx(Link, { to: "/posts", className: "block py-1 text-blue-800 hover:text-blue-600", children: "\u2190 All Posts" }), jsx("h4", { className: "text-xl font-bold underline", children: o.title }), jsx("div", { className: "text-sm", children: o.body })] });
};

export { y as component };
//# sourceMappingURL=posts_._postId.deep-rv3KrB9r.mjs.map
