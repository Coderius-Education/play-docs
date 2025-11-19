// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

const organizationName = "Coderius-Education";
const projectName = "play-docs";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "coderius-play",
	tagline: "Leer nog beter Python door het maken van games",
	url: `https://play.coderius.nl`,
	baseUrl: `/`,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "throw",
	favicon: "img/favicon.ico",
	// GitHub Pages adds a trailing slash by default that I don't want
	trailingSlash: false,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName, // Usually your GitHub org/username.
	projectName, // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "nl",
		locales: ["nl"],
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
					editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
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
				title: " ",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.png",
				},
				items: [
					{
						type: "doc",
						docId: "eerste-keer-python/IA",
						position: "left",
						label: "Start met coderius-play",
					},
          {
						href: '/docs/cheatsheet',
						label: 'Cheatsheet',
						position: 'left',
					},
					{
						href: '/docs/er_gaat_iets_mis',
						label: "Er gaat iets mis",
						position: "left"
					},
					{
						href: '/docs/voor-de-docent/bug',
						label: 'Bug gevonden?',
						position: 'right',
					},
					{
						href: `https://github.com/Corderius-College-Amersfoort/play/tree/major-refactors`,
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			footer: {
				copyright: `Licensed under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)`,
			},
		}),
};

module.exports = config;
