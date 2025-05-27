"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

type MainLayoutProps = {
  readonly children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  console.log("pathname", pathname === "/login");
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobile && sidebarOpen && !target.closest("#sidebar")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, sidebarOpen]);

  if (!mounted) {
    return null;
  }

  // return (
  //   <div className="flex h-screen flex-col">
  //     {pathname === "/login" ? (
  //       <>{children}</>
  //     ) : (
  //       <div className="flex flex-1 overflow-hidden">
  //         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
  //         <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
  //         <main className="flex-1 overflow-y-auto p-4 md:p-6 transition-all duration-300">
  //           {children}
  //         </main>
  //         <Footer />
  //       </div>
  //     )}
  //   </div>
  // );
  return (
    <div className="flex h-screen">
      {pathname === "/login" ? (
        <>{children}</>
      ) : (
        <>
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 flex flex-col">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </>
      )}
    </div>
  );
}
