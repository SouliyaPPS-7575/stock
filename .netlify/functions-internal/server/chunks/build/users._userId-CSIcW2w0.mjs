import { jsxs, jsx } from 'react/jsx-runtime';
import { w as we } from '../nitro/nitro.mjs';
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
import '@tanstack/react-router';
import 'tiny-invariant';
import 'node:async_hooks';
import '@tanstack/router-devtools';
import 'react';
import 'redaxios';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const v = function() {
  const o = we.useLoaderData();
  return jsxs("div", { className: "space-y-2", children: [jsx("h4", { className: "text-xl font-bold underline", children: o.name }), jsx("div", { className: "text-sm", children: o.email })] });
};

export { v as component };
//# sourceMappingURL=users._userId-CSIcW2w0.mjs.map
