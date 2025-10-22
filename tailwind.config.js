/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "#881b1b",
                    700: "#6b1414",
                    500: "#a21f1f",
                },
                brand: {
                    DEFAULT: "#3182ce",
                },
                destructive: {
                    DEFAULT: "#e53e3e",
                },
                surface: {
                    primary: "#ffffff",
                    secondary: "#f7fafc",
                },
                text: {
                    primary: "#2d3748",
                    secondary: "#718096",
                },
            },
        },
    },
    plugins: [],
};
