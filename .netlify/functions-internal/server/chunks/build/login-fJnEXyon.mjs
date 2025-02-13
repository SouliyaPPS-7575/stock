import { jsx, jsxs } from 'react/jsx-runtime';
import { k } from '../nitro/nitro.mjs';
import { Form, Input, Button } from '@heroui/react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';
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
import '@heroui/link';
import '@heroui/navbar';
import '@heroui/theme';
import 'clsx';
import '@react-aria/visually-hidden';
import '@heroui/switch';
import 'pocketbase';
import '@heroui/modal';
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

const V = function() {
  const p = useNavigate(), [a, r] = useState(null), i = useMutation({ mutationFn: async (e) => await k.collection("users").authWithPassword(e.email.trim(), e.password), onSuccess: (e) => {
    const o = e.token;
    o && k.authStore.save(o), p({ to: "/" }), toast.success("Login successful!"), r("Login successful");
  }, onError: (e) => {
    toast.error("Login failed. Please check your credentials."), console.error("Login Error:", e), r("Login failed");
  } });
  return jsx("div", { className: "flex items-center justify-center min-h-screen bg-gray-100", children: jsxs(Form, { className: "w-full max-w-sm flex flex-col gap-4", validationBehavior: "native", onReset: () => r("reset"), onSubmit: (e) => {
    e.preventDefault();
    const o = Object.fromEntries(new FormData(e.currentTarget));
    i.mutate(o);
  }, children: [jsx("h2", { className: "text-center text-2xl font-bold", children: "Login" }), jsx(Input, { isRequired: true, errorMessage: "Please enter a valid email", label: "Email", labelPlacement: "outside", name: "email", placeholder: "Enter your email", type: "email" }), jsx(Input, { isRequired: true, errorMessage: "Please enter your password", label: "Password", labelPlacement: "outside", name: "password", placeholder: "Enter your password", type: "password" }), jsxs("div", { className: "flex gap-2", children: [jsx(Button, { color: "primary", type: "submit", isLoading: i.isPending, children: i.isPending ? "Logging in..." : "Login" }), jsx(Button, { type: "reset", variant: "flat", children: "Reset" })] }), a && jsxs("div", { className: "text-small text-default-500", children: ["Action: ", jsx("code", { children: a })] })] }) });
};

export { V as component };
//# sourceMappingURL=login-fJnEXyon.mjs.map
