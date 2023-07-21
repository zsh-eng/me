import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import Layout from "~/components/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <SessionProvider session={session} data-theme="dark">
      <Layout activeIndex={activeIndex}>
        <Component {...pageProps} setActiveIndex={setActiveIndex} activeIndex={activeIndex}/>
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
