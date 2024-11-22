import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./global_style.ts";
import { RoutesApplication } from "./configs/Routes/index.tsx";
import { checkLightThemeApplication } from "./utils/checkLightThemeApplication.ts";
import { LightTheme } from "./styles/Theme/LightTheme/index.tsx";
import { DarkTheme } from "./styles/Theme/DarkTheme/index.tsx";
import { Providers } from "./configs/Providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      theme={checkLightThemeApplication() ? LightTheme : DarkTheme}
    >
      <GlobalStyle />
      <Providers>
        <RoutesApplication />
      </Providers>
    </ThemeProvider>
  </StrictMode>
);
