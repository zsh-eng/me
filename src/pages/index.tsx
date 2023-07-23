import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type LinkCardProps = {
  heading: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ heading }) => {
  return (
    <div className="group relative flex h-28 w-48 flex-col justify-center gap-2 bg-secondary-focus px-8 py-4 transition-all duration-300 hover:h-36 hover:w-60 hover:bg-secondary">
      <h2 className="z-10 w-full text-left text-4xl font-semibold text-secondary-content">
        {heading}
      </h2>
    </div>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className="grid h-[600px] w-full grid-cols-2 grid-rows-2 items-start gap-2 lg:w-[600px]">
      <Link className="place-self-end text-left" href="/about">
        <LinkCard heading="About" />
      </Link>
      <Link className="self-end" href="/">
        <LinkCard heading="Blog" />
      </Link>
      <Link className="justify-self-end text-left" href="/">
        <LinkCard heading="Resume" />
      </Link>
      <Link href="/projects">
        <LinkCard heading="Projects" />
      </Link>
    </div>
  );
};

const Home: NextPage = () => {
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
      <div className="flex flex-col pt-16 text-base-content lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col justify-center gap-6 px-4 lg:w-[400px] lg:px-0">
          <h1 className="text-5xl">
            Hello, I&apos;m <br />{" "}
            <span className="font-semibold text-info">Zhi Sheng</span>.
          </h1>
          <h2 className="text-2xl">
            I am a second-year Computer Science student at the National
            University of Singapore. <br />
            Welcome to my website.
          </h2>
        </div>
        <CardGrid />
      </div>
    </>
  );
};

export default Home;
