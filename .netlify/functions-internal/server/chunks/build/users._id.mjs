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

const u = C("/api/users/$id")({ GET: async ({ request: e, params: r }) => {
  console.info(`Fetching users by id=${r.id}... @`, e.url);
  try {
    const o = await ae.get("https://jsonplaceholder.typicode.com/users/" + r.id);
    return u$1({ id: o.data.id, name: o.data.name, email: o.data.email });
  } catch (o) {
    return console.error(o), u$1({ error: "User not found" }, { status: 404 });
  }
} });

export { u as APIRoute };
//# sourceMappingURL=users._id.mjs.map
