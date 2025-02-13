import { jsx, jsxs } from 'react/jsx-runtime';
import { R as Rn, k, Z } from '../nitro/nitro.mjs';
import { Button, Link, Badge, Card, CardBody, Image, CardFooter } from '@heroui/react';
import { useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo, useState, useEffect, useRef } from 'react';
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
import '@heroui/link';
import '@heroui/navbar';
import '@heroui/theme';
import 'clsx';
import '@react-aria/visually-hidden';
import '@heroui/switch';
import 'pocketbase';
import '@heroui/modal';
import 'react-toastify';
import '@tanstack/react-query-devtools';
import '@tanstack/router-devtools';
import 'react-icons/fa';
import '@cloudinary/url-gen/actions/resize';
import '@cloudinary/url-gen';
import '@heroui/form';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

function H({ products: t }) {
  return jsx("div", { className: "mb-20 z-0", children: t.length === 0 ? jsx("p", { className: "text-center text-gray-500 text-lg", children: "No products found" }) : jsx("div", { className: "gap-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", children: t.map((e, o) => {
    var _a, _b;
    return jsx("div", { className: "relative", children: jsx(Badge, { size: "lg", color: "primary", className: "px-2 py-1 text-xs sm:text-sm md:text-base font-bold rounded-full absolute top-3 right-3 z-10", content: e.quantity, children: jsxs(Card, { isPressable: true, shadow: "sm", onPress: () => {
      Z.navigate({ to: `/products/view/${e.id}` });
    }, className: "rounded-lg overflow-hidden relative", children: [jsx(CardBody, { className: "p-0", children: jsx(Image, { alt: e.name, src: ((_a = e == null ? void 0 : e.imageurl) == null ? void 0 : _a[0]) ? (_b = e == null ? void 0 : e.imageurl) == null ? void 0 : _b[0] : "https://th.bing.com/th/id/OIP.mhEjokf4cHBCeCsOqohUdwHaHa?rs=1&pid=ImgDetMain", className: "w-[140px] sm:w-[160px] md:w-[180px]object-cover h-[110px] sm:h-[160px] md:h-[180px] rounded-t-lg" }) }), jsxs(CardFooter, { className: "flex flex-col items-center px-1 py-1 space-y-1", children: [jsx("b", { className: "text-center w-full max-w-[100px] truncate", children: e.name }), jsxs("p", { className: "text-default-500 text-center w-full max-w-[100px] truncate", children: ["$", e.price] })] })] }) }) }, o);
  }) }) });
}
function O({ hasNextPage: t, isFetchingNextPage: e, fetchNextPage: o }) {
  const s = useRef(null), n = useRef(null);
  return useEffect(() => {
    if (!t || e) return;
    const a = (l) => {
      l[0].isIntersecting && o();
    };
    return n.current && (s.current = new IntersectionObserver(a), s.current.observe(n.current)), () => {
      s.current && s.current.disconnect();
    };
  }, [t, e, o]), n;
}
const Q = ({ collection: t, pageSize: e = 12, sort: o = "created" }) => {
  const s = useQueryClient(), n = async ({ pageParam: i = 1 }) => await k.collection(t).getList(i, e, { sort: o }), { data: a, fetchNextPage: l, hasNextPage: x, isFetchingNextPage: f, isLoading: b } = useInfiniteQuery({ queryKey: [t], queryFn: n, getNextPageParam: (i) => (i == null ? void 0 : i.page) < (i == null ? void 0 : i.totalPages) ? i.page + 1 : void 0, staleTime: 1, initialPageParam: 1 }), p = useMemo(() => {
    var _a;
    return (_a = a == null ? void 0 : a.pages.flatMap((i) => i.items)) != null ? _a : [];
  }, [a]), [y, N] = useState(p);
  useEffect(() => {
    N(p);
  }, [p]), useEffect(() => {
    let i = true;
    return (async () => {
      try {
        await k.collection(t).subscribe("*", (c) => {
          i && (console.log("Realtime event:", c.action, c.record), s.invalidateQueries({ queryKey: [t] }));
        });
      } catch (c) {
        console.error("Realtime subscription failed:", c);
      }
    })(), () => {
      i = false, k.collection(t).unsubscribe();
    };
  }, [t, s]);
  const v = O({ hasNextPage: !!x, isFetchingNextPage: f, fetchNextPage: l });
  return { items: y, loadMoreRef: v, isLoading: b, isFetchingNextPage: f };
}, fe = function() {
  const { items: e, loadMoreRef: o, isLoading: s, isFetchingNextPage: n } = Q({ collection: "products", pageSize: 12 });
  return s ? jsx(Rn, {}) : jsxs("div", { className: "p-2 z-0 min-h-screen", children: [jsx(H, { products: e }), n && jsx(Rn, {}), jsx("div", { ref: o, className: "h-10" }), jsx(Button, { color: "primary", className: "fixed bottom-20 right-4 p-4 rounded-full shadow-lg focus:outline-none z-10", as: Link, href: "/products/create", children: "+ Create" })] });
};

export { fe as component };
//# sourceMappingURL=index-BcSOJ4Op.mjs.map
