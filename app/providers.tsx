"use client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";

import { store } from "@/store";
import theme from "@/styles/theme";

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
          <div className={roboto.variable}>{children}</div>
        </ThemeProvider>
      </Provider>
    </AppRouterCacheProvider>
  );
}
