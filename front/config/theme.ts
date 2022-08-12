import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green?: Palette["primary"];
  }
  interface PaletteOptions {
    green?: PaletteOptions["primary"];
  }
  interface TypeBackground {
    secondary?: TypeBackground["default"];
  }
  interface TypeText {
    tertiary?: TypeText["primary"];
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#000E59",
    },
    secondary: {
      main: "#38B653",
    },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: "#ECEFF1",
    // },
    background: {
      default: "#F8F8F8",
      secondary: "#EEF0EF",
    },
    text: {
      primary: "#0E1210",
      secondary: "#5E6863",
      tertiary: "#B1B4BA",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {
      textTransform: "none",
    },
    caption: {},
    overline: {},
  },
  components: {
    MuiTextField: {
      defaultProps: { size: "small" },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
        size: "small",
        autoHighlight: true,
        selectOnFocus: true,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
