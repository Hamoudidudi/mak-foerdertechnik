import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        container: { center: true, padding: '1rem', screens: { lg: '1024px', xl: '1200px', '2xl': '1320px' } },
        extend: {
            colors: {
                brand: {
                    50:'#eef5ff',100:'#dbeaff',200:'#b7d2ff',300:'#8ab6ff',
                    400:'#5a95ff',500:'#2f74ff',600:'#165ce6',700:'#1148b4',
                    800:'#103f95',900:'#0e347a'
                }
            },
            borderRadius: { xl: '14px', '2xl': '20px' },
            boxShadow: { soft: '0 6px 18px rgba(15, 23, 42, .06)' },
            transitionTimingFunction: { smooth: 'cubic-bezier(.22,.61,.36,1)' }
        }
    },
    plugins: [],
} satisfies Config;