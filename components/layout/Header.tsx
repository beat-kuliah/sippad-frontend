"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, ChevronRight, LogOut, User, Settings } from "lucide-react";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    if (pathname === "/") {
      return [{ title: "Home", href: "/" }];
    }
    
    const paths = pathname.split("/").filter(Boolean);
    
    return [
      { title: "Home", href: "/" },
      ...paths.map((path, i) => {
        const href = `/${paths.slice(0, i + 1).join("/")}`;
        // Capitalize first letter and replace hyphens with spaces
        const title = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
        return { title, href };
      }),
    ];
  };
  
  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-green-500 dark:bg-green-700 px-4 sm:px-6">
      <Button
        variant="ghost"
        className="hover:bg-green-600 dark:hover:bg-green-800 text-white"
        size="icon"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      
      <div className="flex items-center gap-2 text-white">
        <span className="text-sm font-medium hidden md:inline-block">
          Sistem Informasi Pengelolaan Pendapatan Asli Daerah
        </span>
        <span className="text-sm font-medium md:hidden">
          SIP-PAD
        </span>
      </div>
      
      <div className="ml-auto flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-1 text-sm text-white">
          {breadcrumbs.map((breadcrumb, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
              <span className={i === breadcrumbs.length - 1 ? "font-medium" : ""}>
                {breadcrumb.title}
              </span>
            </div>
          ))}
        </nav>
        
        <ThemeToggle />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hover:bg-green-600 dark:hover:bg-green-800 text-white" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-green-600 dark:bg-green-800 text-white">
                  IV
                </AvatarFallback>
              </Avatar>
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Pengaturan</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Keluar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}