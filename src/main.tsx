import React from "react";
import ReactDOM from "react-dom/client";

import { Routes } from "./routes";
import { MyContext } from "./myContext";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider value={{email:"rafael@gmail.com", name:"rafael"}}>
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
