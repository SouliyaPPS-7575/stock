export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Souvenir Stock',
  description: 'Souvenir Stock Sale App',
  navItems: [
    {
      label: 'Products',
      href: '/public/products',
    },
  ],
  navMenuItems: [
    {
      label: 'Products',
      href: '/public/products',
    },
  ],
  links: {
    facebook: 'https://www.facebook.com',
  },
} as any;
