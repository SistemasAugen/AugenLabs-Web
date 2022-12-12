import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0094ff",
    },
    secondary: {
      main: "#222222",
      light: "#e0e0e0",
    },
    warning: {
      main: "#f8be00",
    },
    error: {
      main: red.A400,
    },
  },
  // breakpoints: {
  //   // sm, small: 600px
  //   // md, medium: 900px
  //   // lg, large: 1200px
  //   // xl, extra-large: 1536px
  //   values: {
  //     xs: 0,
  //     sm: 320,
  //     md: 425,
  //     lg: 1024,
  //     xl: 1440,
  //   },
  // },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 40,
          paddingLeft: 25,
          paddingRight: 25,
          textTransform: "none",
          fontWeight: "bold",
          fontsize: 14,
        },
        outlinedPrimary: {},
        containedSecondary: {},
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "primary",
          cursor: "pointer",
          "@media (max-width:600px)": {
            fontSize: 14,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          contained: {
            background: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#5c5c5c",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          fontSize: 18,
          fontWeight: 300,
          marginTop: "20px",
          marginBottom: "20px",
          "@media (max-width:600px)": {
            fontSize: 16,
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Raleway", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: "100",
      fontSize: 48,
      "@media (max-width:600px)": {
        fontSize: 36,
      },
    },
    h2: {
      fontWeight: "100",
      fontSize: 18,
      lineHeight: "21px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "100",
    },
  },
});

export default theme;
