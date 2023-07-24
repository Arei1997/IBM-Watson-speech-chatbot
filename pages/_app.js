import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#6c757d",
    },
    success: {
      main: "#1cb452",
    },
    info: {
      main: "#3291ff",
    },
    warning: {
      main: "#f5a623",
    },
    danger: {
      main: "#f64a5b",
    },
    light: {
      main: "#f8f9fa",
      contrastText: "#000000",
    },
    dark: {
      main: "#212529",
      contrastText: "#fff",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
          padding: ".375rem 1rem",
        },
      },
    },
  },
});
