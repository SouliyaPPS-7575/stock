function o(e) {
  return e instanceof Headers ? new Headers(e) : Array.isArray(e) ? new Headers(e) : typeof e == "object" ? new Headers(e) : new Headers();
}
function d(...e) {
  return e.reduce((r, n) => {
    const s = o(n);
    for (const [a, t] of s.entries()) r.set(a, t);
    return r;
  }, new Headers());
}
function u(e, r) {
  return new Response(JSON.stringify(e), { ...r, headers: d({ "content-type": "application/json" }, r == null ? void 0 : r.headers) });
}

export { u };
//# sourceMappingURL=json-Bq9mxVgN.mjs.map
