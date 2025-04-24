export const baseTheme = {
   fonts:{
    main: 'Inter Tight',
    minor: 'ST-SimpleSquare',
   },
    colors: {
      blue: '#5AA9F3',
      white: '#FFFFFF',
      grey: '#6C6C72',
      black: '#232233',
    },
  
    media: {
      megaLarge: '(max-width: 1400px)',
      extraLarge: '(max-width: 1140px)',
      large: '(max-width: 960px)',
      medium: '(max-width: 720px)',
      small: '(max-width: 540px)',
    },
  
    // in px
    sizes: {
      header: { height: 56 },
      container: { width: 1200 },
      footer: { height: 128 },
      modal: { width: 540 },
    },
  
    // in ms
    durations: {
      ms300: 300,
    },
  
    // z-index
    order: {
      header: 50,
      modal: 100,
    },
  }