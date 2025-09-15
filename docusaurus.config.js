// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Transformer Lab",
  tagline:
    "With Transformer Lab, ML engineers, researchers, and developers can all collaborate to build and deploy advanced AI models—with provenance, reproducibility, evals, and transparency included.",
  favicon: "img/logo2.svg",

  // Set the production url of your site here
  url: "https://transformerlab.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "transformerlab", // Usually your GitHub org/user name.
  projectName: "transfomerlab-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  /* we need to add the following using links :
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"></link>
*/

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        rel: "stylesheet",
      },
    },
    {
      tagName: "link",
      attributes: {
        href: "https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/transformerlab/transformerlab-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All posts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/transformerlab/transformerlab-docs/tree/main/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/vars.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
        gtag: {
          trackingID: process.env.GTAG_TRACKING_ID || "G-XXXXXXXXXX",
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloud",
        path: "cloud",
        routeBasePath: "cloud",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/screenshot.png",
      navbar: {
        title: "Transformer Lab",
        logo: {
          alt: "Transfomer Lab Logo",
          src: "img/logo2.svg",
        },
        items: [
          {
            to: "/local",
            label: "Local",
            position: "left",
          },
          {
            to: "/cloud",
            label: "Cloud",
            position: "left",
          },
          // { to: "/about", label: "About", position: "left" },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          // { to: "/docs/download", label: "Download ↓", position: "right" },
          {
            href: "https://github.com/transformerlab/transformerlab-app",
            label: "GitHub",
            position: "right",
          },
          {
            to: "https://discord.gg/transformerlab",
            label: "Discord 💬",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/transformerlab",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/transformerlab",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/transformerlab",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Transformer Lab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "DNW29T8T7Z",
        apiKey: process.env.ALGOLIA_API_KEY || "API_KEY",
        indexName: "transformerlab",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
