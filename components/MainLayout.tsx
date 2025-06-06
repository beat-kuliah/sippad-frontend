import { FC } from "react";
import { Logo } from "./Utils";
import Link from "next/link";
import useLogout from "./hooks/useLogout";

const MainLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="main-layout">
      <Header />
      <div className="content">{children}</div>
    </main>
  );
};

const Header = () => {
  const { logout } = useLogout();
  return (
    <header>
      <Link className="brand" href="/">
        <Logo />
      </Link>
      <button className="logout" onClick={logout} type="button">
        Logout
      </button>
    </header>
  );
};

export default MainLayout;
