const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/mdx-components.tsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "hsl(var(--color-black))",
      white: "hsl(var(--color-white))",
      blue: {
        50: "hsl(var(--color-blue-50), <alpha-value>)",
        100: "hsl(var(--color-blue-100), <alpha-value>)",
        200: "hsl(var(--color-blue-200), <alpha-value>)",
        300: "hsl(var(--color-blue-300), <alpha-value>)",
        400: "hsl(var(--color-blue-400), <alpha-value>)",
        500: "hsl(var(--color-blue-500), <alpha-value>)",
        600: "hsl(var(--color-blue-600), <alpha-value>)",
        700: "hsl(var(--color-blue-700), <alpha-value>)",
        800: "hsl(var(--color-blue-800), <alpha-value>)",
        900: "hsl(var(--color-blue-900), <alpha-value>)",
        950: "hsl(var(--color-blue-950), <alpha-value>)",
      },
      green: {
        50: "hsl(var(--color-green-50), <alpha-value>)",
        100: "hsl(var(--color-green-100), <alpha-value>)",
        200: "hsl(var(--color-green-200), <alpha-value>)",
        300: "hsl(var(--color-green-300), <alpha-value>)",
        400: "hsl(var(--color-green-400), <alpha-value>)",
        500: "hsl(var(--color-green-500), <alpha-value>)",
        600: "hsl(var(--color-green-600), <alpha-value>)",
        700: "hsl(var(--color-green-700), <alpha-value>)",
        800: "hsl(var(--color-green-800), <alpha-value>)",
        900: "hsl(var(--color-green-900), <alpha-value>)",
        950: "hsl(var(--color-green-950), <alpha-value>)",
      },
      violet: {
        50: "hsl(var(--color-violet-50), <alpha-value>)",
        100: "hsl(var(--color-violet-100), <alpha-value>)",
        200: "hsl(var(--color-violet-200), <alpha-value>)",
        300: "hsl(var(--color-violet-300), <alpha-value>)",
        400: "hsl(var(--color-violet-400), <alpha-value>)",
        500: "hsl(var(--color-violet-500), <alpha-value>)",
        600: "hsl(var(--color-violet-600), <alpha-value>)",
        700: "hsl(var(--color-violet-700), <alpha-value>)",
        800: "hsl(var(--color-violet-800), <alpha-value>)",
        900: "hsl(var(--color-violet-900), <alpha-value>)",
        950: "hsl(var(--color-violet-950), <alpha-value>)",
      },
      pink: {
        50: "hsl(var(--color-pink-50), <alpha-value>)",
        100: "hsl(var(--color-pink-100), <alpha-value>)",
        200: "hsl(var(--color-pink-200), <alpha-value>)",
        300: "hsl(var(--color-pink-300), <alpha-value>)",
        400: "hsl(var(--color-pink-400), <alpha-value>)",
        500: "hsl(var(--color-pink-500), <alpha-value>)",
        600: "hsl(var(--color-pink-600), <alpha-value>)",
        700: "hsl(var(--color-pink-700), <alpha-value>)",
        800: "hsl(var(--color-pink-800), <alpha-value>)",
        900: "hsl(var(--color-pink-900), <alpha-value>)",
        950: "hsl(var(--color-pink-950), <alpha-value>)",
      },
      red: {
        50: "hsl(var(--color-red-50), <alpha-value>)",
        100: "hsl(var(--color-red-100), <alpha-value>)",
        200: "hsl(var(--color-red-200), <alpha-value>)",
        300: "hsl(var(--color-red-300), <alpha-value>)",
        400: "hsl(var(--color-red-400), <alpha-value>)",
        500: "hsl(var(--color-red-500), <alpha-value>)",
        600: "hsl(var(--color-red-600), <alpha-value>)",
        700: "hsl(var(--color-red-700), <alpha-value>)",
        800: "hsl(var(--color-red-800), <alpha-value>)",
        900: "hsl(var(--color-red-900), <alpha-value>)",
        950: "hsl(var(--color-red-950), <alpha-value>)",
      },
      teal: {
        50: "hsl(var(--color-teal-50), <alpha-value>)",
        100: "hsl(var(--color-teal-100), <alpha-value>)",
        200: "hsl(var(--color-teal-200), <alpha-value>)",
        300: "hsl(var(--color-teal-300), <alpha-value>)",
        400: "hsl(var(--color-teal-400), <alpha-value>)",
        500: "hsl(var(--color-teal-500), <alpha-value>)",
        600: "hsl(var(--color-teal-600), <alpha-value>)",
        700: "hsl(var(--color-teal-700), <alpha-value>)",
        800: "hsl(var(--color-teal-800), <alpha-value>)",
        900: "hsl(var(--color-teal-900), <alpha-value>)",
        950: "hsl(var(--color-teal-950), <alpha-value>)",
      },
      yellow: {
        50: "hsl(var(--color-yellow-50), <alpha-value>)",
        100: "hsl(var(--color-yellow-100), <alpha-value>)",
        200: "hsl(var(--color-yellow-200), <alpha-value>)",
        300: "hsl(var(--color-yellow-300), <alpha-value>)",
        400: "hsl(var(--color-yellow-400), <alpha-value>)",
        500: "hsl(var(--color-yellow-500), <alpha-value>)",
        600: "hsl(var(--color-yellow-600), <alpha-value>)",
        700: "hsl(var(--color-yellow-700), <alpha-value>)",
        800: "hsl(var(--color-yellow-800), <alpha-value>)",
        900: "hsl(var(--color-yellow-900), <alpha-value>)",
        950: "hsl(var(--color-yellow-950), <alpha-value>)",
      },
      grey: {
        50: "hsl(var(--color-grey-50), <alpha-value>)",
        100: "hsl(var(--color-grey-100), <alpha-value>)",
        200: "hsl(var(--color-grey-200), <alpha-value>)",
        300: "hsl(var(--color-grey-300), <alpha-value>)",
        400: "hsl(var(--color-grey-400), <alpha-value>)",
        500: "hsl(var(--color-grey-500), <alpha-value>)",
        600: "hsl(var(--color-grey-600), <alpha-value>)",
        700: "hsl(var(--color-grey-700), <alpha-value>)",
        800: "hsl(var(--color-grey-800), <alpha-value>)",
        900: "hsl(var(--color-grey-900), <alpha-value>)",
        950: "hsl(var(--color-grey-950), <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsl(var(--accent-primary), <alpha-value>)",
        secondary: "hsl(var(--accent-secondary), <alpha-value>)",
        ternary: "hsl(var(--accent-ternary), <alpha-value>)",
      },
    },
    extend: {
      fontSize: {
        inherit: "inherit",
      },
      screens: {
        "2xl-only": { max: "1535px" },
        "xl-only": { max: "1279px" },
        "lg-only": { max: "1023px" },
        "md-only": { max: "767px" },
        "sm-only": { max: "639px" },
      },
      fontFamily: {
        sans: ["var(--font-family-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-family-mono)", ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
            "--tw-prose-heading-2": "var(--tw-prose-invert-heading-2)",
            "--tw-prose-heading-3": "var(--tw-prose-invert-heading-3)",
          },
        },
        DEFAULT: {
          css: {
            // Light mode colors
            "--tw-prose-body": theme("colors.grey.950 / 1"),
            "--tw-prose-bold": theme("colors.black"),
            "--tw-prose-bullets": theme("colors.grey.300 / 1"),
            "--tw-prose-captions": theme("colors.black"),
            "--tw-prose-code": theme("colors.black"),
            "--tw-prose-code-bg": theme("colors.grey.100 / 1"),
            "--tw-prose-counters": theme("colors.black"),
            "--tw-prose-heading-2": theme("colors.accent.DEFAULT / 1"),
            "--tw-prose-heading-3": theme("colors.pink.600 / 1"),
            "--tw-prose-headings": theme("colors.black"),
            "--tw-prose-hr": theme("colors.black"),
            "--tw-prose-lead": theme("colors.black"),
            "--tw-prose-links": theme("colors.blue.600 / 1"),
            "--tw-prose-pre-bg": theme("colors.grey.50 / 1"),
            "--tw-prose-pre-code": theme("colors.black"),
            "--tw-prose-quote-borders": theme("colors.grey.400 / 1"),
            "--tw-prose-quotes": theme("colors.grey.500 / 1"),
            "--tw-prose-td-borders": theme("colors.black"),
            "--tw-prose-th-borders": theme("colors.black"),

            // Dark mode colors
            "--tw-prose-invert-body": theme("colors.grey.50 / 1"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-bullets": theme("colors.grey.500 / 1"),
            "--tw-prose-invert-captions": theme("colors.white"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-code-bg": theme("colors.grey.950 / 1"),
            "--tw-prose-invert-counters": theme("colors.white"),
            "--tw-prose-invert-heading-2": theme("colors.accent.DEFAULT / 1"),
            "--tw-prose-invert-heading-3": theme("colors.pink.500 / 1"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-hr": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.blue.400 / 1"),
            "--tw-prose-invert-pre-bg": theme("colors.grey.950 / 1"),
            "--tw-prose-invert-pre-code": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.grey.600 / 1"),
            "--tw-prose-invert-quotes": theme("colors.grey.300 / 1"),
            "--tw-prose-invert-td-borders": theme("colors.white"),
            "--tw-prose-invert-th-borders": theme("colors.white"),

            /* Base styles */
            fontSize: theme("fluidFontSize[fluid-0]"),
            a: {
              textDecoration: "none",

              "&:hover, &:focus": {
                textDecoration: "underline",
                textUnderlineOffset: "0.5ex",
              },
            },

            /* Headings */
            h2: {
              fontSize: theme("fluidFontSize[fluid-2]"),
            },
            h3: {
              fontSize: theme("fluidFontSize[fluid-1]"),
            },
            "h4, h5": {
              fontSize: theme("fluidFontSize[fluid-0]"),
            },

            /* Anchor links */
            "h2 > .anchor-link": {
              color: "var(--tw-prose-heading-2)",

              "&::before": {
                content: "'# '",
              },
            },

            "h3 > .anchor-link": {
              color: "var(--tw-prose-heading-3)",
            },

            ":is(h4, h5, h6) > .anchor-link": {
              color: "var(--tw-prose-headings)",
            },

            /* ...Rest */
            code: {
              backgroundColor: "var(--tw-prose-code-bg)",
              padding: "0.15rem 0",
              borderRadius: theme("borderRadius.DEFAULT"),
              fontSize: theme("fluidFontSize[fluid--1]"),
            },

            img: {
              borderRadius: theme("borderRadius.lg"),
              boxShadow: theme("boxShadow.lg"),
            },

            "figure figcaption": {
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: theme("fluidFontSize[fluid--1]"),
              color: "var(--tw-prose-quotes)",
              borderLeftWidth: theme("spacing.1"),
              borderLeftColor: "var(--tw-prose-quote-borders)",
              paddingLeft: theme("spacing.4"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("css-modular-type/tailwind")({
      minStep: 3,
      maxRatio: 1.25,
      suffixType: "numbered",
    }),
    require("@tailwindcss/typography"),
  ],
};
