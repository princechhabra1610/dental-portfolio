export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Dental Colors
                primary: {
                    50: '#f0fdfa',
                    100: '#ccfbf1',
                    500: '#0891b2',
                    600: '#0e7490',
                    700: '#155e75',
                    900: '#164e63',
                },
                secondary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    500: '#10b981',
                    600: '#059669',
                },
                accent: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                },
                background: "#fefefe",
                backgroundSoft: "#f8fafc",
                heading: "#0f172a",
                body: "#64748b",
                card: "#ffffff",
                borderSoft: "#e2e8f0",
                darkSection: "#0f172a",
            },
            backgroundImage: {
                'dental-gradient': 'linear-gradient(135deg, #0891b2 0%, #10b981 100%)',
                'hero-gradient': 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            },
            boxShadow: {
                soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                medium: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                glow: "0 0 0 1px rgba(8, 145, 178, 0.1), 0 4px 16px rgba(8, 145, 178, 0.12)",
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0%)' },
                    '50%': { transform: 'translateY(-5%)' },
                },
            },
        },
    },
    plugins: [],
}