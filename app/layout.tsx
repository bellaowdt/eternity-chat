import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AppProvider, TanstackProvider } from "./providers";
import ToastProvider from "./providers/ToastProvider";
import { userAgent } from "next/server";
import { headers } from "next/headers";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import ConfirmAlertProvider from "./providers/ConfirmAlertProvider";
import { defaultTheme, globalStyles } from "@/config/theme";

export const metadata: Metadata = {
  title: "Eternity Chat",
  description: "Reconnect with Memories. Cherish the Moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const reqUserAgent = userAgent({ headers: headers() });
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <AppRouterCacheProvider>
            <ThemeProvider theme={defaultTheme}>
              <ToastProvider />
              <AppProvider userAgent={reqUserAgent}>
                <CssBaseline />
                <GlobalStyles styles={globalStyles} />
                <ConfirmAlertProvider>{children}</ConfirmAlertProvider>
              </AppProvider>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
