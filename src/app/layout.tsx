import type { Metadata } from "next";
import "./globals.css";
import { inter, red_hat_display } from "./fonts";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Dom Coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${red_hat_display.variable}`}>
      <body className="container">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
