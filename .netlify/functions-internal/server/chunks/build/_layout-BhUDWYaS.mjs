import { jsxs, jsx } from 'react/jsx-runtime';
import { Outlet } from '@tanstack/react-router';

const m = function() {
  return jsxs("div", { className: "p-2", children: [jsx("div", { className: "border-b", children: "I'm a layout" }), jsx("div", { children: jsx(Outlet, {}) })] });
};

export { m as component };
//# sourceMappingURL=_layout-BhUDWYaS.mjs.map
