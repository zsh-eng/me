import Image from "next/image";
import { type PropsWithChildren } from "react";

type LayoutProps = {
  activeIndex: number;
};

const Layout = ({ children, activeIndex }: PropsWithChildren<LayoutProps>) => {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-gradient-to-r from-[#302b63] to-[#24243e] sm:items-center">
      {children}
    </main>
  );
};

export default Layout;
