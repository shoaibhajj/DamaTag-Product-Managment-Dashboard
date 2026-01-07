"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { store } from "@/store";
import theme from "@/styles/theme";
import UIProvider from "./ui-provider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NuqsAdapter>
            <UIProvider>
              <div className={roboto.variable}>{children}</div>
            </UIProvider>
          </NuqsAdapter>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
