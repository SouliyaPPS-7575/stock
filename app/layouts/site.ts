export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Souvenir Stock",
  description: "Souvenir Stock Sale App",
  navItems: [
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Categories",
      href: "/categories",
    },
    {
      label: "Users",
      href: "/users",
    },
  ],
  navMenuItems: [

    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Categories",
      href: "/categories",
    },
    {
      label: "Users",
      href: "/users",
    },
  ],
  links: {
    facebook: "https://www.facebook.com",
  },
} as any;
