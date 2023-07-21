import Image from "next/image";
import { type PropsWithChildren } from "react";

type LayoutProps = {
  activeIndex: number;
};

const Layout = ({ children, activeIndex }: PropsWithChildren<LayoutProps>) => {
  return (
    <main
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-base-100 sm:items-center"
      data-theme="synthwave"
    >
      {children}
    </main>
  );
};

export default Layout;
