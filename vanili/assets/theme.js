/* LuxVanilla Tailwind theme. Loaded right after the Tailwind CDN script on every page.
   Black and gold from the logo, ivory light sections. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        black: '#0b0a08',    /* footer, deepest ground */
        charcoal: '#171511', /* dark section ground */
        ivory: '#f6f2ea',    /* light section ground */
        cream: '#fbf9f4',    /* cards and form fields */
        ink: '#1d1a16',      /* text on light */
        muted: '#6b6257',    /* secondary text on light */
        sand: '#cdbfa6',     /* secondary text on dark */
        gold: '#b08040',     /* logo gold: buttons, rules, accents */
        goldl: '#d2ac5c',    /* hover, gold text on dark */
        line: '#e3dccd'      /* rules on light */
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Garamond', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '"Source Sans Pro"', 'Helvetica Neue', 'sans-serif']
      },
      maxWidth: {
        wrap: '1200px'
      }
    }
  }
};
