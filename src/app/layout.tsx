import type { Metadata } from "next";
import "./globals.css";
import { inter, red_hat_display } from "./fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";
import { Box, CssBaseline } from "@mui/material";
import Footer from "@/component/Footer/Footer";
import dynamic from "next/dynamic";
import BreadcrumbsComponent from "@/share/components/Breadcrumbs/Breadcrumbs";

export const metadata: Metadata = {
  title: "Dom Coding",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Header = dynamic(() => import("@/component/Header/Header"), {
    ssr: false,
  });

  return (
    <html
      lang="en"
      className={`${inter.variable} ${red_hat_display.variable}`}
      suppressHydrationWarning
    >
      <body className="container">
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <InitColorSchemeScript attribute="class" />
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Header />
            <BreadcrumbsComponent />
            <Box>{children}</Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
