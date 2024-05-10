import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"roboto-condensed": ["var(--font-roboto-condensed)"],
			},
			colors: {
				primary: {
					100: "#E0E4EF",
					200: "#C7D2DB",
					300: "#AEC0CC",
					400: "#95AFBD",
					500: "#3C4D82",
					600: "#293A7A",
					700: "#162762",
					800: "#0A144A",
					900: "#091B50",
				},
				secondary: {
					50: "#FDF2EE",
					100: "#FCE8DF",
					200: "#FBDDCE",
					300: "#F9D2BD",
					400: "#F7C7AC",
					500: "#CFAC48",
					600: "#C4A140",
					700: "#B99638",
					800: "#AE8B2F",
					900: "#A37F26",
				},
				accent: {
					100: "#F7F3E3",
					200: "#F2EED8",
					300: "#EBE9CD",
					400: "#E4E4C2",
					500: "#D9D9B6",
					600: "#D0D0A9",
					700: "#C7C79C",
					800: "#BEBE8F",
					900: "#FBBF24",
				},
				neutral: {
					50: "#F5F5F5",
					100: "#EBEBEB",
					200: "#909090",
					300: "#7A7A7A",
					400: "#646464",
					500: "#4B5563",
					600: "#3C404B",
					700: "#2D333A",
					800: "#1E242A",
					900: "#0F171E",
				},
			}
		},
	},
	plugins: [],
};
export default config;
