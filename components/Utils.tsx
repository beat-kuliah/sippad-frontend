import Image from "next/image";
import LogoImage from "@/public/logo.png";

export const Logo = () => {
  return (
    <div className="justify-items-center">
      <h1 className="text-7xl">SIPPAD</h1>
      <Image src={LogoImage} alt="LOGO" />
    </div>
  );
};
