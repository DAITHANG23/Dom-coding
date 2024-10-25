import type { Metadata } from "next";
import "./globals.css";
import { inter, red_hat_display } from "./fonts";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

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
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
