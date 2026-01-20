import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Brand Colors
                primary: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c3d66',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                },
                // Neutral/Gray Colors
                neutral: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                // Status Colors
                success: {
                    50: '#f0fdf4',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                },
                warning: {
                    50: '#fffbeb',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                },
                error: {
                    50: '#fef2f2',
                    500: '#ef4444',
                    600: '#dc2626',
                    700: '#b91c1c',
                },
                info: {
                    50: '#f0f9ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                // Additional utility colors
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                },
                blue: {
                    50: '#f0f7ff',
                    100: '#e0effe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c3d66',
                },
            },
            fontFamily: {
                sans: ['Geist', 'Geist Fallback', 'system-ui', 'sans-serif'],
                mono: ['Geist Mono', 'Geist Mono Fallback', 'monospace'],
                heading: ['Geist', 'Geist Fallback', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                // Heading Sizes
                'heading-h1': ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }], // 40px
                'heading-h2': ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 32px
                'heading-h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
                'heading-h4': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 20px
                'heading-h5': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 18px
                'heading-h6': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px

                // Body Text Sizes
                'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
                'body-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
                'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
                'body-xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px

                // Label Sizes
                'label-lg': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }], // 16px
                'label-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }], // 14px
                'label-sm': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }], // 12px

                // Button Sizes
                'button-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }], // 18px
                'button-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '600' }], // 16px
                'button-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }], // 14px

                // Display/Hero Sizes
                'display-xl': ['3rem', { lineHeight: '3.5rem', fontWeight: '700' }], // 48px
                'display-lg': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }], // 36px

                // Standard sizes
                xs: ['0.75rem', { lineHeight: '1rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            spacing: {
                // Custom spacing scale
                '0.5': '0.125rem',
                '1.5': '0.375rem',
                '2.5': '0.625rem',
                '3.5': '0.875rem',
                '52.5': '13.125rem', // For sidebar width (210px)
                '100': '25rem',
                '104': '26rem',
                '108': '27rem',
                '112': '28rem',
            },
            borderRadius: {
                sm: '0.25rem',
                md: '0.375rem',
                lg: '0.5rem',
                xl: '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
                DEFAULT: '0.625rem', // 10px
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
                'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
                'none': 'none',
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '4': '4px',
                '8': '8px',
            },
            transitionDuration: {
                'DEFAULT': '150ms',
                '75': '75ms',
                '100': '100ms',
                '150': '150ms',
                '200': '200ms',
                '300': '300ms',
                '500': '500ms',
                '700': '700ms',
                '1000': '1000ms',
            },
            opacity: {
                '5': '0.05',
                '10': '0.1',
                '20': '0.2',
                '30': '0.3',
                '40': '0.4',
                '50': '0.5',
                '60': '0.6',
                '70': '0.7',
                '80': '0.8',
                '90': '0.9',
                '95': '0.95',
            },
        },
    },
    plugins: [],
};

export default config;
