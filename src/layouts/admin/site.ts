export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Souvenir Stock",
  description: "Souvenir Stock Sale App",
  navItems: [
    {
      label: "Products",
      href: "/admin/products",
    },
    {
      label: "Categories",
      href: "/admin/categories",
    },
    {
      label: "Users",
      href: "/admin/users",
    },
  ],
  navMenuItems: [

    {
      label: "Products",
      href: "/admin/products",
    },
    {
      label: "Categories",
      href: "/admin/categories",
    },
    {
      label: "Users",
      href: "/admin/users",
    },
  ],
  links: {
    facebook: "https://www.facebook.com",
  },
} as any;
