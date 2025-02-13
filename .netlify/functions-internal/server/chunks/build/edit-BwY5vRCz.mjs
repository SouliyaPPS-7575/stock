import { jsx, jsxs } from 'react/jsx-runtime';
import { l as ln, t as to } from '../nitro/nitro.mjs';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { h } from './useView-BC_GKDQJ.mjs';
import { Form } from '@heroui/form';
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal';
import { Input, Select, SelectItem, Button } from '@heroui/react';
import { useSearch } from '@tanstack/react-router';
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
import 'react';
import '@heroui/link';
import '@heroui/navbar';
import '@heroui/theme';
import 'clsx';
import '@react-aria/visually-hidden';
import '@heroui/switch';
import 'pocketbase';
import '@tanstack/react-query-devtools';
import '@tanstack/router-devtools';
import 'react-icons/fa';
import '@cloudinary/url-gen/actions/resize';
import '@cloudinary/url-gen';
import 'jsesc';
import 'isbot';
import 'react-dom/server';
import 'node:stream/web';

const R = (c) => ({ editProduct: useMutation({ mutationFn: (r) => to("products", c, r), onSuccess: () => {
  toast.success("Product created successfully!", { position: "top-right", autoClose: 2e3 }), history.back();
}, onError: (r) => {
  toast.error(`Failed to create product: ${r}`, { position: "top-right", autoClose: 2e3 });
} }), handleSubmit: (r) => {
  r.preventDefault();
} }), ae = function() {
  const i = useSearch({ from: "/products/edit", select: (a) => a.id }), { isOpen: d, onOpenChange: r } = useDisclosure({ defaultOpen: true, onClose: () => history.back() }), { editProduct: s, handleSubmit: l } = R(i), { data: t } = h(i);
  return jsx("div", { children: jsx(Modal, { isOpen: d, scrollBehavior: "inside", onOpenChange: r, backdrop: "opaque", classNames: { backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20" }, children: jsx(Form, { validationBehavior: "native", onSubmit: l, children: jsxs(ModalContent, { children: [jsx(ModalHeader, { className: "flex flex-col gap-1", children: "Create Products" }), jsxs(ModalBody, { children: [jsx(Input, { defaultValue: t == null ? void 0 : t.name, isRequired: true, required: true, errorMessage: "Please enter product name", name: "name", placeholder: "Enter product name" }), jsx(Input, { defaultValue: t == null ? void 0 : t.description, isRequired: true, required: true, errorMessage: "Please enter product description", name: "description", placeholder: "Enter product description" }), jsx(Input, { defaultValue: t == null ? void 0 : t.quantity, isRequired: true, required: true, errorMessage: "Please enter product quantity", name: "quantity", placeholder: "Enter product quantity", type: "number" }), jsx(Input, { defaultValue: t == null ? void 0 : t.price, isRequired: true, required: true, errorMessage: "Please enter product price", name: "price", placeholder: "Enter product price", type: "number" }), jsx(Select, { defaultSelectedKeys: t == null ? void 0 : t.category, isRequired: true, required: true, errorMessage: "Please select a category", name: "category", placeholder: "Select category", items: ln, "aria-label": "Select category", children: (a) => jsx(SelectItem, { children: a.label }) })] }), jsxs(ModalFooter, { children: [jsx(Button, { color: "danger", variant: "light", onPress: r, children: "Close" }), jsx(Button, { color: "primary", type: "submit", disabled: s.isPending, children: s.isPending ? "Creating..." : "Create" })] })] }) }) }) });
};

export { ae as component };
//# sourceMappingURL=edit-BwY5vRCz.mjs.map
