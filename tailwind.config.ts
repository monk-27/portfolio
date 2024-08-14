import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#030712", // 60%
                // secondary: "#FFC700", // 30%
                secondary: "#4CCD99", // 30%
                // tertiary: "#4CCD99" // 10%
                tertiary: "#FFC700" // 10%
            },
        },
    },
    plugins: [],
};
export default config;

