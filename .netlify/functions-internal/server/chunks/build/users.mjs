import ae from 'redaxios';
import { C } from '../nitro/nitro.mjs';
import { u as u$1 } from './json-Bq9mxVgN.mjs';
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
import 'react/jsx-runtime';
import '@tanstack/router-devtools';
import 'react';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const u = C("/api/users")({ GET: async ({ request: e }) => {
  console.info("Fetching users... @", e.url);
  const t = (await ae.get("https://jsonplaceholder.typicode.com/users")).data.slice(0, 10);
  return u$1(t.map((o) => ({ id: o.id, name: o.name, email: o.email })));
} });

export { u as APIRoute };
//# sourceMappingURL=users.mjs.map
