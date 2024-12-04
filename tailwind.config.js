/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      sm: {max: '480px'},
      md: {max: '600px'},
      lg: {max: '768px'},
      xl: {max: '900px'},
      '2xl': {max: '1024px'},
      '4xl': {max: '1200px'},
      '6xl': {max: '1920px'},
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        blue: {
          100: '#EAF3FA',
          150: '#F0F4F7',
          200: '#DEECF7',
          600: '#2F85C6',
          700: '#2D7EBC',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      border: '0 2px 5px -6px #000, 0 10px 10px -10px rgba(0,0,0,0.1)',
      backgroundImage: {
        'gradient-to-top': 'linear-gradient(to top, hsla(0, 0%, 100%, 0), hsla(0, 0%, 30%, 0.05))',
        'cover-to-top': 'linear-gradient(to top, HSLA(0, 0%, 0%, 0.8), HSLA(0, 0%, 0%, 0.5))',
        'linear-center': 'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25))',
      },
      boxShadow: {
        border: '0 2px 5px -6px #000, 0 10px 10px -10px rgba(0,0,0,0.1)',
        searchShadow: '0 2px 10px rgba(47,133,198,0.35)',
        'box-shadow': '0 2px 10px rgba(23,66,99,0.25)',
        'icon-blue': '0 0 5px -2px #2f85c6',
        icon: '0 0 5px rgba(128,128,128,0.35), 0 0 1px rgba(128,128,128,0.5);',
        'border-shadow-left': '-15px 0 20px -20px #7cb83d',
        'border-shadow-left-grey': '-15px 0 20px -20px #8c8c8c',
        icon: '0 0 5px rgba(128,128,128,0.35), 0 0 1px rgba(128,128,128,0.5)',
        'input-shadow': '0 2px 10px rgba(47, 133, 198, 0.35)',
        'input-shadow-yellow': '0 0 10px rgb(243,230,174)',
        'input-shadow-blue': '0 0 10px rgb(129,180,219)',
        'input-shadow-green': '0 0 10px rgb(147,201,147)',
        'input-shadow-red': '0 0 10px rgb(255,127,127)',
        'textarea-shadow-blue': '0 0 8px rgb(179,210,233)',
        'select-shadow-blue': '0 0 8px rgb(179,210,233)',
        'card-shadow': '0 0 30px -20px rgba(0,0,0,0.25)',
        'layout-shadow': '0 0 5px -4px #000, 1px 2px 15px 0 rgba(0,0,0,0.15)',
        'search-shadow': '0 2px 10px rgba(47,133,198,0.35)',
        'user-card-shadow': '0 10px 18px -6px rgba(0,0,0,0.2)',
        right: '10px 0 20px -20px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },

      plugins: [require('tailwindcss-animate')],
    },
  },
  plugins: [require('tailwindcss-animate')],
}
