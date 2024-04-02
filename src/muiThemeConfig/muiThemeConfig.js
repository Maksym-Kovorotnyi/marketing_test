import { createTheme, styled } from "@mui/material/styles";

export const Section = styled("section", {
  name: "MuiSection",
  slot: "Root",
  overridesResolver: (__, styles) => [styles.root],
})(({ backgroundColor }) => ({
  backgroundColor: backgroundColor || "initial",
}));

export const theme = createTheme({
  palette: {
    text: {
      primary: "#1D201F",
      secondary: "#fff",
    },
    background: {
      default: "#fff",
    },
    primary: {
      main: "#1D201F",
    },
    secondary: {
      main: "#FF3C00",
      light: "#f7f6f8",
      dark: "#F0F0F0",
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif",
    h1: {
      fontSize: 154,
      fontWeight: 400,
      letterSpacing: -8,
      lineHeight: "100%",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: 133,
      fontWeight: 400,
      lineHeight: "110%",
      letterSpacing: -1.5,
    },
    h3: {
      fontSize: 96,
      fontWeight: 400,
      lineHeight: "110%",
      letterSpacing: -1.5,
    },
    h4: {
      fontSize: 60,
      fontWeight: 400,
      lineHeight: "120%",
      letterSpacing: -0.5,
    },
    h5: {
      fontSize: 48,
      fontWeight: 400,
      lineHeight: "120%",
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: 32,
      fontStyle: "italic",
      fontWeight: 300,
    },
    subtitle2: {
      fontStyle: "italic",
      fontWeight: 400,
    },
    body1: {
      fontSize: "24px",
      fontWeight: 500,
    },
    body2: {
      fontSize: "24px",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "24px",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          maxWidth: "1920px",
          backgroundColor: "#fff",
          borderBottom: "1px solid rgb(29, 32, 31)",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "120px",
          paddingRight: "120px",
        },
      },
    },
    MuiSection: {
      styleOverrides: {
        root: {
          maxWidth: "1920px",
          borderBottom: "1px solid rgb(29, 32, 31);",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "120px",
          paddingRight: "120px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 500,
          fontSize: 14,
          width: "238px",
          height: "56px",
          padding: "16px 24px",
          borderRadius: "40px",
          backgroundColor: "#1D201F",
          color: "#fff",
          "&:hover": {
            color: "#1D201F",
            backgroundColor: "#FF3C00",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          "&:last-child": {
            paddingBottom: 2,
          },
        },
      },
    },
  },
});
