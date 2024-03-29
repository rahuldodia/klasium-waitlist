import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                interface: ["Inter", "sans-serif"],
            },
            screens: {
                "3xl": "1600px",
                "4xl": "1920px",
            },
            colors: {
                transparent: "transparent",
                white: "#FFFFFF",
                primary: {
                    light: "#365AD9",
                    dark: "#061D73",
                },
                secondary: "#7B8092",
                green: "#13BF5D",
            },
        },
    },
    plugins: [],
};
export default config;
