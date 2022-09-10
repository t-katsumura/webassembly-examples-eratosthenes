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

    organizationName: "t-katsumura",
    projectName: "webassembly-examples-eratosthenes",

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
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
