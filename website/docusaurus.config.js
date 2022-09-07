// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// code block languages
// https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
// https://prismjs.com/#supported-languages

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WebAssembly Examples Eratosthenes",
  tagline: "",
  url: "https://t-katsumura.github.io",
  baseUrl: "/webassembly-examples-eratosthenes/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "t-katsumura", // Usually your GitHub org/user name.
  projectName: "webassembly-examples-eratosthenes", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "WebAssembly Examples Eratosthenes",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} WebAssembly Examples Eratosthenes, t-katsumura. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),

  themes: ["@saucelabs/theme-github-codeblock"],
};

module.exports = config;
