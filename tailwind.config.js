/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "Outfit", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                bg: {
                    page: "#f8fafc",
                    section: "#ffffff",
                    subtle: "rgba(241, 245, 249, 0.5)",
                },
                surface: {
                    card: "rgba(255, 255, 255, 0.7)",
                    nav: "rgba(255, 255, 255, 0.8)",
                    icon: "rgba(79, 70, 229, 0.1)",
                },
                border: {
                    DEFAULT: "rgba(226, 232, 240, 0.5)",
                    strong: "#cbd5e1",
                },
                text: {
                    primary: "#0f172a",
                    secondary: "#475569",
                    muted: "#94a3b8",
                    accent: "#4f46e5",
                },
                primary: {
                    DEFAULT: "#4f46e5",
                    700: "#4338ca",
                    500: "#6366f1",
                    50: "#eef2ff",
                },
                accent: {
                    DEFAULT: "#f43f5e",
                    600: "#e11d48",
                },
            },
            backdropBlur: {
                xs: "2px",
            },
            boxShadow: {
                premium: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)",
                glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.4s ease-out both',
                'fade-in':    'fadeIn 0.3s ease-out both',
                'slide-in':   'slideIn 0.3s ease-out both',
            },
            keyframes: {
                fadeInUp: { '0%':{ opacity:'0', transform:'translateY(16px)' }, '100%':{ opacity:'1', transform:'translateY(0)' } },
                fadeIn:   { '0%':{ opacity:'0' }, '100%':{ opacity:'1' } },
                slideIn:  { '0%':{ opacity:'0', transform:'translateX(-16px)' }, '100%':{ opacity:'1', transform:'translateX(0)' } },
            },
        },
    },
    plugins: [],
};
