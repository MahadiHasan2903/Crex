import "./globals.css";

import { Inter } from "next/font/google";

import Header from "@/lib/components/Layout/Header";
import Footer from "@/lib/components/Layout/Footer";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import AuthProvider from "@/lib/config/AuthProvider";
import MobileFooter from "@/lib/components/Layout/MobileFooter";
import ResponsiveFooter from "@/lib/utils/ResponsiveFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            {children}
            <ResponsiveFooter />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
