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
	trailingSlash: false,

	organizationName, // Usually your GitHub org/username.
	projectName, // Usually your repo name.

	i18n: {
		defaultLocale: "nl",
		locales: ["nl"],
	},

	presets: [
		[
			"classic",
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: `https://github.com/${organizationName}/${projectName}/tree/master/`,
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		({
			navbar: {
				title: " ",
				logo: {
					alt: "Coderius Play Logo",
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
						href: `https://github.com/Coderius-Education/play/tree/master/`,
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
