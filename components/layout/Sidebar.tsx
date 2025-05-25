"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  FileText,
  Calendar,
  Calculator,
  BookOpen,
  Printer,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

type NavItem = {
  title: string;
  href?: string;
  icon: React.ReactNode;
  submenu?: NavItem[];
};

const navItems: NavItem[] = [
  {
    title: "Pendaftaran",
    icon: <FileText className="h-5 w-5" />,
    submenu: [
      {
        title: "Pendaftaran Baru",
        href: "/pendaftaran/baru",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Daftar Pendaftaran",
        href: "/pendaftaran/daftar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Pendataan",
    icon: <Calculator className="h-5 w-5" />,
    submenu: [
      {
        title: "Input Data",
        href: "/pendataan/input",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Daftar Data",
        href: "/pendataan/daftar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Penetapan",
    icon: <Calendar className="h-5 w-5" />,
    submenu: [
      {
        title: "Input Penetapan",
        href: "/penetapan/input",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Daftar Penetapan",
        href: "/penetapan/daftar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Penagihan",
    icon: <CircleDollarSign className="h-5 w-5" />,
    submenu: [
      {
        title: "Input Tagihan",
        href: "/penagihan/input",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Daftar Tagihan",
        href: "/penagihan/daftar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Pembayaran",
    icon: <CircleDollarSign className="h-5 w-5" />,
    submenu: [
      {
        title: "Input Pembayaran",
        href: "/pembayaran/input",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Daftar Pembayaran",
        href: "/pembayaran/daftar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Pembukuan",
    icon: <BookOpen className="h-5 w-5" />,
    submenu: [
      {
        title: "Jurnal Umum",
        href: "/pembukuan/jurnal",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Buku Besar",
        href: "/pembukuan/buku-besar",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
  {
    title: "Cetak",
    icon: <Printer className="h-5 w-5" />,
    submenu: [
      {
        title: "Cetak Laporan",
        href: "/cetak/laporan",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
      {
        title: "Cetak Bukti",
        href: "/cetak/bukti",
        icon: <CircleDollarSign className="h-4 w-4" />,
      },
    ],
  },
];

type NavItemWithSubMenuProps = {
  item: NavItem;
  pathname: string;
};

const NavItemWithSubMenu = ({ item, pathname }: NavItemWithSubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if any submenu item is active
  const isActive = item.submenu?.some(
    (subItem) => subItem.href && pathname === subItem.href
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive ? "bg-accent text-accent-foreground" : "hover:bg-muted"
        )}
      >
        <div className="flex items-center">
          <span className="mr-2">{item.icon}</span>
          <span>{item.title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.href || "#"}
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                pathname === subItem.href
                  ? "bg-accent text-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="mr-2">{subItem.icon}</span>
              <span>{subItem.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      id="sidebar"
      className={cn(
        "fixed inset-y-0 left-0 z-20 w-64 bg-card border-r transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">SIP-PAD</span>
        </Link>
      </div>

      <div className="py-4 space-y-1 overflow-y-auto h-[calc(100vh-8rem)]">
        {navItems.map((item) => (
          <div key={item.title} className="px-3 py-1">
            {item.submenu ? (
              <NavItemWithSubMenu item={item} pathname={pathname} />
            ) : (
              <Link
                href={item.href || "#"}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                )}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full border-t p-4 bg-card">
        <p className="text-xs text-muted-foreground text-center">v2.0</p>
      </div>
    </aside>
  );
}
