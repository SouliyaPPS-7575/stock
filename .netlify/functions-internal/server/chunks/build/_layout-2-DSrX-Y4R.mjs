import { jsxs, jsx } from 'react/jsx-runtime';
import { Link, Outlet } from '@tanstack/react-router';

const r = function() {
  return jsxs("div", { children: [jsx("div", { children: "I'm a nested layout" }), jsxs("div", { className: "flex gap-2 border-b", children: [jsx(Link, { to: "/layout-a", activeProps: { className: "font-bold" }, children: "Layout A" }), jsx(Link, { to: "/layout-b", activeProps: { className: "font-bold" }, children: "Layout B" })] }), jsx("div", { children: jsx(Outlet, {}) })] });
};

export { r as component };
//# sourceMappingURL=_layout-2-DSrX-Y4R.mjs.map
