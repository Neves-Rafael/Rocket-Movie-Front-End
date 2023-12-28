import React from "react";
import ReactDOM from "react-dom/client";

// import { Routes } from "./routes";
import { SignIn} from "./pages/SignIn";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
);
