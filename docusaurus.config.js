// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Replace this regex '^ *// [^ ].*$\n' with '' to delete all docsaurus comments

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nyxian',
  tagline: 'Nyxian the native iOS app development IDE',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://nyxian.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ProjectNyxian', // Usually your GitHub org/user name.
  projectName: 'Website', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        url: 'https://nyxian.app',
        baseUrl: '/',
      },
      de: {
        url: 'https://de.nyxian.app',
        baseUrl: '/',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ProjectNyxian/Website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/ProjectNyxian/Website/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/social-card.jpg', // Todo: Create a social-card
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Nyxian',
        logo: {
          alt: 'Nyxian Logo',
          src: 'img/icon/light.png',
          className: 'logo',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/ProjectNyxian/Nyxian',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/installation',
              },
              {
                label: 'Credits',
                to: '/docs/credits',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ProjectNyxian/Nyxian',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VEMvDMJ8KB',
              },
            ],
          },
          {
            title: 'News',
            items: [
              {
                label: 'Blogs',
                to: '/blog',
              },
              {
                label: 'X (formerly Twitter)',
                href: 'https://x.com/cr4zyengineer',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:ceo@nyxian.app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ProjectNyxian. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
