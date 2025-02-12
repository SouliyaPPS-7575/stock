import { warning, isRedirect, isNotFound } from '@tanstack/react-router';
import { f as f$1 } from '../nitro/nitro.mjs';
import N from 'tiny-invariant';

function F(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function _(...e) {
  return e.reduce((t, r) => {
    const n = F(r);
    for (const [a, s] of n.entries()) t.set(a, s);
    return t;
  }, new Headers());
}
const b = [];
function u(e, t) {
  const r = t || e || {};
  return typeof r.method > "u" && (r.method = "GET"), { options: r, middleware: (n) => u(void 0, Object.assign(r, { middleware: n })), validator: (n) => u(void 0, Object.assign(r, { validator: n })), handler: (...n) => {
    const [a, s] = n;
    Object.assign(r, { ...a, extractedFn: a, serverFn: s }), a.url || (console.warn(a), warning(false, "createServerFn must be called with a function that has a 'url' property. Ensure that the @tanstack/start-plugin is ordered **before** the @tanstack/server-functions-plugin."));
    const i = [...r.middleware || [], E(r)];
    return Object.assign(async (o) => v(i, "client", { ...a, method: r.method, data: o == null ? void 0 : o.data, headers: o == null ? void 0 : o.headers, context: {} }).then((d) => {
      if (d.error) throw d.error;
      return d.result;
    }), { ...a, __executeServer: async (o) => {
      const d = o instanceof FormData ? x(o) : o;
      return await v(i, "server", { ...a, ...d }).then((c) => ({ result: c.result, error: c.error, context: c.sendContext }));
    } });
  } };
}
function x(e) {
  const t = e.get("__TSR_CONTEXT");
  if (e.delete("__TSR_CONTEXT"), typeof t != "string") return { context: {}, data: e };
  try {
    return { context: f$1.parse(t), data: e };
  } catch {
    return { data: e };
  }
}
function O(e) {
  const t = /* @__PURE__ */ new Set(), r = [], n = (a) => {
    a.forEach((s) => {
      s.options.middleware && n(s.options.middleware), t.has(s) || (t.add(s), r.push(s));
    });
  };
  return n(e), r;
}
const f = async (e, t, r) => e({ ...t, next: async (n = {}) => {
  var _a, _b;
  return r({ ...t, ...n, context: { ...t.context, ...n.context }, sendContext: { ...t.sendContext, ...(_a = n.sendContext) != null ? _a : {} }, headers: _(t.headers, n.headers), result: n.result !== void 0 ? n.result : t.result, error: (_b = n.error) != null ? _b : t.error });
} });
function S(e, t) {
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
  const n = O([...b, ...e]), a = async (s) => {
    const i = n.shift();
    if (!i) return s;
    i.options.validator && (t !== "client" || i.options.validateClient) && (s.data = await S(i.options.validator, s.data));
    const o = t === "client" ? i.options.client : i.options.server;
    return o ? f(o, s, async (d) => {
      const l = i.options.clientAfter;
      if (t === "client" && l) {
        const c = await a(d);
        return f(l, { ...d, ...c }, (h) => h);
      }
      return a(d).catch((c) => {
        if (isRedirect(c) || isNotFound(c)) return { ...d, error: c };
        throw c;
      });
    }) : a(s);
  };
  return a({ ...r, headers: r.headers || {}, sendContext: r.sendContext || {}, context: r.context || {} });
}
function E(e) {
  return { _types: void 0, options: { validator: e.validator, validateClient: e.validateClient, client: async ({ next: t, sendContext: r, ...n }) => {
    var a;
    const s = await ((a = e.extractedFn) == null ? void 0 : a.call(e, { ...n, context: r }));
    return t(s);
  }, server: async ({ next: t, ...r }) => {
    var n;
    const a = await ((n = e.serverFn) == null ? void 0 : n.call(e, r));
    return t({ ...r, result: a });
  } } };
}
function H(e) {
  return e.replace(/^\/|\/$/g, "");
}
const A = (e, t, r) => {
  N(r, "\u{1F6A8}splitImportFn required for the server functions server runtime, but was not provided.");
  const n = `/${H(t)}/${e}`;
  return Object.assign(r, { url: n, functionId: e });
};

export { A, u };
//# sourceMappingURL=index-BJoWiIN4.mjs.map
