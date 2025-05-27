import type { Metadata } from "next";
import "@/app/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { REM, Righteous } from "next/font/google";
import StoreProvider from "../../components/StoreProvider";
import ToastLayout from "../../components/ToastLayout";
import { ThemeProvider } from "../../components/theme/ThemeProvider";
import MainLayout from "../../components/layout/MainLayout";

const rem = REM({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <div className={`${rem.className} ${righteous.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
            <ToastLayout />
          </MainLayout>
        </ThemeProvider>
      </div>
    </StoreProvider>
  );
}
