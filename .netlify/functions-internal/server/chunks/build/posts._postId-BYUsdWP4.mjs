import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { x as xe } from '../nitro/nitro.mjs';
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

const k = function() {
  const t = xe.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsx("h4", { className: "text-xl font-bold underline", children: t.title }), jsx("div", { className: "text-sm", children: t.body }), jsx(Link, { to: "/posts/$postId/deep", params: { postId: t.id }, activeProps: { className: "text-black font-bold" }, className: "block py-1 text-blue-800 hover:text-blue-600", children: "Deep View" })] });
};

export { k as component };
//# sourceMappingURL=posts._postId-BYUsdWP4.mjs.map
