import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { AppProvider } from "./AppProvider.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import Navbar from "./components/Navbar.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <NextUIProvider>
        <ThemeProvider>
            <Navbar />
          {/* Theme Wrapper */}
          <div className={`text-foreground bg-background  flex justify-center items-center`}>
            <App />
          </div>
        </ThemeProvider>
      </NextUIProvider>
    </AppProvider>
  </StrictMode>
);
