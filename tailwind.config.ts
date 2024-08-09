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
                bebas: ["Bebas Neue", "sans-serif"],
                nunito: ["Nunito Sans", "sans-serif"],
            },
            colors: {
                "aqua-green": {
                    DEFAULT: "#2AE2BD",
                    dark: "#22B394",
                    light: "#A8F7E4",
                },
                background: "#e6e6e6",
                color: {
                    light: "#575757",
                    dark: "#333333",
                },
            },
        },
    },
    plugins: [],
};
export default config;

