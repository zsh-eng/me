import Image from "next/image";
import { type PropsWithChildren } from "react";

type LayoutProps = {
  activeIndex: number;
};

const Layout = ({ children, activeIndex }: PropsWithChildren<LayoutProps>) => {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-gradient-to-r from-[#302b63] to-[#24243e] sm:items-center">
      {children}
      <Image
        alt="pattern"
        src=""
        fill
        className="absolute z-10 opacity-10 duration-300 ease-out peer-hover:opacity-5"
        style={{
          backgroundPosition: `0% ${(activeIndex + 1) * -50}%`,
          backgroundImage: "url('/homepage-pattern.svg')",
          objectFit: "contain",
          height: "1200px",
        }}
      />
      <Image
        alt="keyboard"
        src=""
        fill
        className="absolute z-0 scale-105 opacity-10 duration-300 ease-out peer-hover:scale-100 peer-hover:opacity-5"
        style={{
          backgroundPosition: `center ${40 + (activeIndex + 1) * 5}%`,
          backgroundImage: "url('/homepage-bg.jpg')",
          backgroundSize: "auto 130vh",
          backgroundRepeat: "no-repeat",
        }}
      />
    </main>
  );
};

export default Layout;
