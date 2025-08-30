// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'High Stakes Documentation',
  tagline: 'High Stakes Switzerland – Professional staking services hosted in Switzerland.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.highstakes.ch/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'High Stakes Switzerland', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: false,
          lastVersion: 'current',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/HighStakesSwitzerland/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ],
  ],
/**open links in a new tab by default*/
    markdown: {
    externalLinks: {
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
    },
  },

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      {
        navbar: {
          items: [
            {
              type: 'localeDropdown',
              position: 'left',
            },
            {
              type: 'html',
              value:
                  '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/hss-logo.png" alt="High Stakes Switzerland Logo"></div>High Stakes 🇨🇭 Docs</a>'
            },
            {
              href: 'https://github.com/HighStakesSwitzerland/',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository'
            },
            {
              type: 'docsVersionDropdown',
              position: 'right'
            }
          ]
        },
        footer: {
          style: 'light',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Loyalty Program',
                  to: '/loyalty-program/'
                },
                {
                  label: 'Stellee',
                  to: '/stellee/'
                },
                {
                  label: 'Staking Guides',
                  to: '/delegating/terra'
                }
              ]
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  href: 'https://discord.gg/W6hDHTVn7r'
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com/HighStakes_CH'
                },
                {
                  label: 'Telegram',
                  href: 'https://t.me/HighStakesSwitzerland'
                }
              ]
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Website',
                  href: 'https://highstakes.ch/'
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/HighStakesSwitzerland/docs/'
                }
              ]
            }
          ],
          copyright: `Copyright © ${new Date().getFullYear()} High Stakes 🇨🇭`
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true
        },
        prism: {
          theme: require('prism-react-renderer').themes.github,
          darkTheme: require('prism-react-renderer').themes.dracula,
        },
        algolia: false,
        /*
        announcementBar: {
          id: 'support_us',
          content: '',
          backgroundColor: '#3182ce',
          textColor: '#fff',
          isCloseable: true
        }

         */
      },
};

module.exports = config;
