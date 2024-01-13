import ReactDOM from "react-dom/client";

import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider email={""} password={""}>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
);
