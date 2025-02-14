import { warning, isRedirect, isNotFound, createFileRoute, lazyRouteComponent } from '@tanstack/react-router';
import $ from 'tiny-invariant';
import { f as f$1 } from '../nitro/nitro.mjs';
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
import 'node:async_hooks';
import 'react/jsx-runtime';
import 'react';
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
import 'react-icons/fa';
import '@cloudinary/url-gen/actions/resize';
import '@cloudinary/url-gen';
import '@heroui/form';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

function O(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function E(...e) {
  return e.reduce((t, r) => {
    const n = O(r);
    for (const [a, o] of n.entries()) t.set(a, o);
    return t;
  }, new Headers());
}
const H = [];
function l(e, t) {
  const r = t || e || {};
  return typeof r.method > "u" && (r.method = "GET"), { options: r, middleware: (n) => l(void 0, Object.assign(r, { middleware: n })), validator: (n) => l(void 0, Object.assign(r, { validator: n })), handler: (...n) => {
    const [a, o] = n;
    Object.assign(r, { ...a, extractedFn: a, serverFn: o }), a.url || (console.warn(a), warning(false, "createServerFn must be called with a function that has a 'url' property. Ensure that the @tanstack/start-plugin is ordered **before** the @tanstack/server-functions-plugin."));
    const d = [...r.middleware || [], N(r)];
    return Object.assign(async (s) => v(d, "client", { ...a, method: r.method, data: s == null ? void 0 : s.data, headers: s == null ? void 0 : s.headers, context: {} }).then((i) => {
      if (i.error) throw i.error;
      return i.result;
    }), { ...a, __executeServer: async (s) => {
      const i = s instanceof FormData ? j(s) : s;
      return await v(d, "server", { ...a, ...i }).then((c) => ({ result: c.result, error: c.error, context: c.sendContext }));
    } });
  } };
}
function j(e) {
  const t = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof t != "string") return { context: {}, data: e };
  try {
    return { context: f$1.parse(t), data: e };
  } catch {
    return { data: e };
  }
}
function C(e) {
  const t = /* @__PURE__ */ new Set(), r = [], n = (a) => {
    a.forEach((o) => {
      o.options.middleware && n(o.options.middleware), t.has(o) || (t.add(o), r.push(o));
    });
  };
  return n(e), r;
}
const f = async (e, t, r) => e({ ...t, next: async (n = {}) => {
  var _a, _b;
  return r({ ...t, ...n, context: { ...t.context, ...n.context }, sendContext: { ...t.sendContext, ...(_a = n.sendContext) != null ? _a : {} }, headers: E(t.headers, n.headers), result: n.result !== void 0 ? n.result : t.result, error: (_b = n.error) != null ? _b : t.error });
} });
function R(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const r = e["~standard"].validate(t);
    if (r instanceof Promise) throw new Error("Async validation not supported");
    if (r.issues) throw new Error(JSON.stringify(r.issues, void 0, 2));
    return r.value;
  }
  if ("parse" in e) return e.parse(t);
  if (typeof e == "function") return e(t);
  throw new Error("Invalid validator type!");
}
async function v(e, t, r) {
  const n = C([...H, ...e]), a = async (o) => {
    const d = n.shift();
    if (!d) return o;
    d.options.validator && (t !== "client" || d.options.validateClient) && (o.data = await R(d.options.validator, o.data));
    const s = t === "client" ? d.options.client : d.options.server;
    return s ? f(s, o, async (i) => {
      const u = d.options.clientAfter;
      if (t === "client" && u) {
        const c = await a(i);
        return f(u, { ...i, ...c }, (y) => y);
      }
      return a(i).catch((c) => {
        if (isRedirect(c) || isNotFound(c)) return { ...i, error: c };
        throw c;
      });
    }) : a(o);
  };
  return a({ ...r, headers: r.headers || {}, sendContext: r.sendContext || {}, context: r.context || {} });
}
function N(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: t, sendContext: r, ...n }) => {
    var a;
    const o = await ((a = e.extractedFn) == null ? void 0 : a.call(e, { ...n, context: r }));
    return t(o);
  }, server: async ({ next: t, ...r }) => {
    var n;
    const a = await ((n = e.serverFn) == null ? void 0 : n.call(e, r));
    return t({ ...r, result: a });
  } } };
}
function z(e) {
  return e.replace(/^\/|\/$/g, "");
}
const h = (e, t, r) => {
  $(r, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const n = `/${z(t)}/${e}`;
  return Object.assign(r, { url: n, functionId: e });
}, A = () => import('./deferred-BvmSUPOo.mjs'), p = h("app_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_server", (e) => w.__executeServer(e)), w = l({ method: "GET" }).validator((e) => e).handler(p, ({ data: e }) => ({ name: e, randomNumber: Math.floor(Math.random() * 100) })), _ = h("app_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_server", (e) => m.__executeServer(e)), m = l({ method: "GET" }).validator((e) => e).handler(_, async ({ data: e }) => (await new Promise((t) => setTimeout(t, 1e3)), { name: e, randomNumber: Math.floor(Math.random() * 100) })), P = createFileRoute("/deferred")({ loader: async () => ({ deferredStuff: new Promise((e) => setTimeout(() => e("Hello deferred!"), 2e3)), deferredPerson: m({ data: "Tanner Linsley" }), person: await w({ data: "John Doe" }) }), component: lazyRouteComponent(A, "component", () => P.ssr) }), I = Object.freeze(Object.defineProperty({ __proto__: null, personServerFn_createServerFn_handler: p, slowServerFn_createServerFn_handler: _ }, Symbol.toStringTag, { value: "Module" }));

export { h as a, l as c, I as d };
//# sourceMappingURL=deferred-B44SK-rK.mjs.map
