const COLORS = {
    COMMON: {
      TRANSPARENT: "transparent",

      BURNT_GOLD: "#E9C46A",
      FADED_CLAY: "#D4A373",
      DUSTY_ORANGE: "#F4A261",
      RUSTY_ORANGE: '#E76F51', 
      FIRE_RUST: '#D8572A', 
      DUSTY_BURGUNDY: '#5D2E46', 
      

      METALLIC_STEEL: "#8D99AE",
      WASHED_TEAL: '#2A9D8F', 
      DEEP_NIGHT_BLUE: '#264653', 
    },


    TEXT: {
      PRIMARY: "#1A1A1A",
      SECONDARY: "#444444",
      DISABLED: "#B3B3B3",

      WHITE: '#FFFFFF',
      DUSTY_ORANGE: "#F4A261",
      METALLIC_STEEL: '#8D99AE',

      terracottaSoot: '#5A382C',
      dustyChocolate: '#7A6C5D',
      fadedGraphite: '#A99F94'
    },
    BUTTONS: {
      primary: '#E76F51',
      primaryActive: '#E87F6f',
      secondary: '#2D2D2D',
      accent: '#F4A261',

      primary2: '#D8572A',
      secondary2: '#2D2D2D',
      accent2: '#E9C46A',

      primaryL: '#D4A373',
      secondaryL: '#E1D5C9',
      accentL: '#2A9D8F',

      accentO: "#FCA311",
      warning_orange: '#FFA500'
    },
    SYSTEM: {
      ERROR: "#E63946",
      dustyCactus: '#8AAE92',
      washedTeal: '#2A9D8F',
      WARNING: "#FFA502",
      WAITING: "#FFAF5f",

      tankBorder: '#4A4A4A',
      ACTIVE: '#E63946',
      interactiveElement: '#2A9D8F',

      dustyBorder: '#C4BDB5',
      smolderingFire: '#E76F51',
      washedRose: '#B5838D'
    },
    BACKGROUNDS: {
      LIGHT: "#F9FBFD",
      DARK: "#1E272E",
      DUST: "#FFbF7f",
      DUST2: "#D9A566",
      FREEDOM_WIND: "#A8DADC",
      DUSTY_SKY: "#457B9D",

      absoluteBlack: '#1E1E1E',
      rustyCoal: '#2D2D2D',
      sandAccent: '#E9C46A',

      voidDark: '#121212',
      soot: '#1E1E1E',
      rustedMetal: '#2D2D2D',
      scorchedClay: '#3E2D2C',


      desertSand: '#F8F1E6',
      parchment: '#EDE0D4',
      dustyClay: '#E1D5C9',
      scorchedPlaster: '#D4C8BC',
    },
    greens: {
      rustyMalachite: '#5D8C7B',
      scorchedSage: '#6A9575',
      swampSteel: '#4A7869',
      dustyCactus: '#8AAE92',
      deepJade: '#3C5E54'
    },
    blues: {
      rustySky: '#4A708B',
      fadedDenim: '#6E8CA3',
      steelNight: '#3A506B',
      toxicCobalt: '#5D7A9E',
      sandyTeal: '#7D9DAC'
    }
} as const;
  
export default COLORS;

//DS
// Рекурсивный тип для извлечения значений
type NestedValueOf<T> = T extends object
  ? { [K in keyof T]: NestedValueOf<T[K]> }[keyof T]
  : T;

// Получение типа всех значений
export type ColorType = NestedValueOf<typeof COLORS>;


// Theme case
// type Theme = "light" | "dark";

// const LIGHT_THEME = {
//   BACKGROUND: "#FFFFFF",
//   TEXT: "#000000",
//   // ...
// } as const;

// const DARK_THEME = {
//   BACKGROUND: "#0F0F0F",
//   TEXT: "#F0F0F0",
//   // ...
// } as const;

// export const THEMES = {
//   light: LIGHT_THEME,
//   dark: DARK_THEME,
// } as const;

// export const getColors = (theme: Theme) => THEMES[theme];