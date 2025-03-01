import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { REM, Righteous } from "next/font/google";
import StoreProvider from "./components/StoreProvider";
import ToastLayout from "./components/ToastLayout";

export const metadata: Metadata = {
  title: "Finbest - Financial App",
  description: "Finbest is a financial app that helps you manage your money.",
};

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
    <html lang="en">
      <StoreProvider>
        <body className={`${rem.className} ${righteous.className}`}>
          {children}
          <ToastLayout />
        </body>
      </StoreProvider>
    </html>
  );
}
