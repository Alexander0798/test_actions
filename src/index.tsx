import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import { ErrorBoundary } from "app/providers/ErrorBoudary";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
);
