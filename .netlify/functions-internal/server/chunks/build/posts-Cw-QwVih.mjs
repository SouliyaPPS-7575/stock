import { notFound } from '@tanstack/react-router';
import ae from 'redaxios';
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
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const n = A("app_utils_posts_tsx--fetchPost_createServerFn_handler", "/_server", (t) => p.__executeServer(t)), a = A("app_utils_posts_tsx--fetchPosts_createServerFn_handler", "/_server", (t) => h.__executeServer(t)), p = u({ method: "GET" }).validator((t) => t).handler(n, async ({ data: t }) => (console.info(`Fetching post with id ${t}...`), await ae.get(`https://jsonplaceholder.typicode.com/posts/${t}`).then((e) => e.data).catch((e) => {
  throw console.error(e), e.status === 404 ? notFound() : e;
}))), h = u({ method: "GET" }).handler(a, async () => (console.info("Fetching posts..."), ae.get("https://jsonplaceholder.typicode.com/posts").then((t) => t.data.slice(0, 10))));

export { n as fetchPost_createServerFn_handler, a as fetchPosts_createServerFn_handler };
//# sourceMappingURL=posts-Cw-QwVih.mjs.map
