import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type HomeProps = {
  setActiveIndex: (index: number) => void;
};

const LinkStyles =
  "text-white text-6xl font-mono font-thin mx-4 py-2 group-hover:opacity-30 hover:!opacity-100 z-10 ease-in duration-200";

const Home: NextPage<HomeProps> = ({ setActiveIndex }) => {
  return (
    <>
      <Head>
        <title>Zhi Sheng&apos;s Site</title>
        <meta
          name="description"
          content="Zhi Sheng's Personal Portfolio Site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="group peer relative z-20 ml-2 flex flex-col items-stretch justify-center sm:ml-0 sm:mr-[30%]">
        <Link
          href="/"
          className={LinkStyles}
          data-active-index={0}
          onMouseOver={() => setActiveIndex(0)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={LinkStyles}
          onMouseOver={() => setActiveIndex(1)}
        >
          About Me
        </Link>
        <Link
          href="/"
          className={LinkStyles}
          onMouseOver={() => setActiveIndex(2)}
        >
          Blog
        </Link>
        <Link
          href="/"
          className={LinkStyles}
          onMouseOver={() => setActiveIndex(3)}
        >
          Projects
        </Link>
      </div>
    </>
  );
};

export default Home;
