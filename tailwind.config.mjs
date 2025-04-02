const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/react/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs-extra': '0.625rem', // 10px
        'sm-extra': '0.875rem', // 14px
        'base-large': '1.125rem', // 18px
        '2xl-extra': '1.625rem', // 26px
        '3xl-extra': '2.5rem', // 40px
        hero: '4.5rem', // 72px, for hero text
      },
      // Add the custom `Phetsarath` font to the Tailwind configuration
      fontFamily: {
        lao: ['NotoSerifLao', 'serif'],
      },
      transitionDuration: {
        300: '300ms',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      prefix: 'heroui',
      layout: {
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '8px', // rounded-small
          medium: '12px', // rounded-medium
          large: '14px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            // Override colors for the light theme
            background: '#F5F5F5', // Light grayish background
            foreground: '#1a202c', // Dark text
            primary: '#DDCFBC', // Light green for primary color
            secondary: '#ff9800', // Orange for secondary
            accent: '#03a9f4', // Blue for accent
            success: '#DDCFBC', // Green for success
            error: '#f44336', // Red for errors
            warning: '#ff9800', // Yellow for warnings
          },
          layout: {
            disabledOpacity: '0.4', // Custom layout styles (optional)
            fonts: {
              sans: 'Phetsarath, sans-serif', // Set Phetsarath as the default global font
            },
          },
        },
        dark: {
          colors: {
            // Override colors for the dark theme
            foreground: '#F6EFD9', // Light text
            primary: '#795548', // Light green for primary color
            secondary: '#ff9800', // Orange for secondary
            accent: '#03a9f4', // Blue for accent
            success: '#795548', // Green for success
            error: '#f44336', // Red for errors
            warning: '#ff9800', // Yellow for warnings
          },
          layout: {
            disabledOpacity: '0.4', // Custom layout styles (optional)
            fonts: {
              sans: 'NotoSerifLao, sans-serif',
            },
          },
        },
      },
    }),
  ],
};
