import { Link as HeroUILink } from '@heroui/link';
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/navbar';
import { link as linkStyles } from '@heroui/theme';
import { Link } from '@tanstack/react-router'; // TanStack Router Link
import clsx from 'clsx';

import { Logo } from 'src/components/layouts/icons';
import { ThemeSwitch } from 'src/components/layouts/theme-switch';
import { LogoutConfirmModal } from 'src/containers/LogoutConfirmModal';
import { siteConfig } from 'src/layouts/admin/site';
import { router } from 'src/router';
import { useState } from 'react';
import { useMenuContext } from '../MenuProvider';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const { isMenuOpen, setIsMenuOpen } = useMenuContext(); // Use the context

  // Use useRouterState to get the current location
  const handleMobileNavigation = (href: string) => {
    router.navigate({ to: href });
    setActiveItem(href); // Set the active item when it's clicked
    setIsMenuOpen(false); // This closes the menu
  };
  return (
    <HeroUINavbar
      maxWidth='xl'
      position='sticky'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <HeroUILink
            className='flex justify-start items-center gap-1'
            color='foreground'
            href='/admin/products'
          >
            <Logo />
            <p className='font-bold text-inherit'>Stock</p>
          </HeroUILink>
        </NavbarBrand>

        {/* Desktop */}
        <div className='hidden lg:flex sm:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item: any) => (
            <NavbarItem key={item.href}>
              <HeroUILink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium'
                )}
                color='foreground'
                as={Link} // Using TanStack Router Link for navigation
                to={item.href}
              >
                {item.label}
              </HeroUILink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Desktop */}
      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-8'>
          {/* <HeroUILink
            isExternal
            href={siteConfig.links.facebook}
            title='facebook'
          >
            <FacebookIcon className='text-default-500 mr-4' />
          </HeroUILink> */}
          <ThemeSwitch />
          <LogoutConfirmModal />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile */}
      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        {/* <HeroUILink isExternal href={siteConfig.links.facebook}>
          <FacebookIcon className='text-default-500' />
        </HeroUILink> */}
        <ThemeSwitch className='mr-3' />

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle className='z-50' />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item: any, index: number) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <HeroUILink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  // Changed text-primary to your desired color (e.g., text-blue-500)
                  'data-[active=true]:text-blue-500 data-[active=true]:font-medium',
                  'flex items-center gap-2',
                  // Update active color here as well
                  activeItem === item.href ? 'text-blue-500 font-medium' : '',
                  'font-bold'
                )}
                color='foreground'
                size='lg'
                as={Link}
                to={item.href}
                onPress={() => handleMobileNavigation(item.href)}
              >
                <span>{item.label}</span>
              </HeroUILink>
              {/* Divider */}
              {index !== siteConfig.navMenuItems.length - 1 && (
                <div className='border-b my-2'></div> // Divider added between menu items
              )}
            </NavbarMenuItem>
          ))}
        </div>
        <div className='border-b my-2' />
        <div className='mx-4 mt-1 flex flex-col gap-2'>
          <LogoutConfirmModal />
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
