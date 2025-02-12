import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip } from '@heroui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const r = [{ name: "NAME", uid: "name" }, { name: "ACTIONS", uid: "actions" }], x = [{ id: "1", name: "Technology" }, { id: "2", name: "Health" }, { id: "3", name: "Finance" }, { id: "4", name: "Education" }];
function f() {
  const n = (t, a) => {
    const o = t[a];
    switch (a) {
      case "actions":
        return jsxs("div", { className: "flex gap-3", children: [jsx(Tooltip, { content: "Edit", children: jsx("button", { className: "text-blue-500 text-lg hover:text-blue-700", "aria-label": "Edit", children: jsx(FaEdit, {}) }) }), jsx(Tooltip, { color: "danger", content: "Delete", children: jsx("button", { className: "text-red-500 text-lg hover:text-red-700", "aria-label": "Delete", children: jsx(FaTrash, {}) }) })] });
      default:
        return o;
    }
  };
  return jsxs(Table, { isStriped: true, "aria-label": "Categories Table", children: [jsx(TableHeader, { children: r.map((t) => jsx(TableColumn, { children: t.name }, t.uid)) }), jsx(TableBody, { children: x.map((t) => jsx(TableRow, { children: r.map((a) => jsx(TableCell, { children: n(t, a.uid) }, a.uid)) }, t.id)) })] });
}
const N = function() {
  return jsx(Fragment, { children: jsx(f, {}) });
};

export { N as component };
//# sourceMappingURL=index-BDGrPjxy.mjs.map
