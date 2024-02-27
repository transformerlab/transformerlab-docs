// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Transformer Lab",
  tagline: "Experiment with Large Language Models",
  favicon: "img/flask.svg",

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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/screenshot01.png",
      navbar: {
        title: "Transformer Lab",
        logo: {
          alt: "Transfomer Lab Logo",
          src: "img/flask.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "Documentation",
          },

          { to: "/blog", label: "Updates", position: "left" },
          { to: "/docs/download", label: "Download ↓", position: "right" },
          {
            href: "https://github.com/transformerlab",
            label: "GitHub",
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
                label: "Updates",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/transformerlab",
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
    }),
};

module.exports = config;
