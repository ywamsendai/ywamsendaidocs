// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YWAM UofN Sendai Handbook',
  tagline: 'Know God and Make Him Known in Tohoku, Japan, and Beyond!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ywamsendai.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
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
            'https://github.com/ywamsendai/ywamsendaidocs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ywamsendai/ywamsendaidocs/',
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
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HANDBOOK',
        logo: {
          alt: 'YWAM Sendai Logo',
          src: 'img/ywamsendailogoblk.png',
          srcDark: 'img/ywamsendailogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
          // {to: '/blog', label: 'Blog', position: 'left'},
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What is YWAM Sendai?',
                to: '/docs/about/ywam',
              },
              {
                label: 'Community',
                to: '/docs/community/communication',
              },
              {
                label: 'Staff',
                to: '/docs/staff/join',
              },
              {
                label: 'Students',
                to: '/docs/students/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Chat',
                to: '/docs/community/communication',
              },
              {
                label: 'X',
                href: 'https://www.x.com/ywamsendai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Apply for DTS',
                to: '/docs/students/apply',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ywamsendai/ywamsendaidocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YWAM Sendai. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
