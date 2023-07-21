import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type LinkCardProps = {
  heading: string;
  src: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ heading, src }) => {
  return (
    <div className="group relative flex h-28 w-48 flex-col justify-center gap-2 bg-blue-900 px-8 py-4 transition-all duration-300 hover:h-36 hover:w-60 hover:bg-blue-700">
      <h2 className="z-10 w-full text-left text-4xl font-semibold text-gray-300">
        {heading}
      </h2>
      <Image
        src={src}
        alt="keyboard"
        className="absolute z-0 bg-cover opacity-0 duration-300 group-hover:opacity-10"
        fill
      />
    </div>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className="grid h-screen w-[600px] grid-cols-2 grid-rows-2 items-start gap-2">
      <div className="place-self-end text-left">
        <LinkCard heading="About" src="/../public/homepage-bg.jpg" />
      </div>
      <div className="self-end">
        <LinkCard heading="Blog" src="/../public/homepage-bg.jpg" />
      </div>
      <div className="justify-self-end text-left">
        <LinkCard heading="Resume" src="/../public/paper.jpg" />
      </div>
      <LinkCard heading="Projects" src="/../public/homepage-bg.jpg" />
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
      <div className="flex gap-8">
        <div className="flex w-[400px] flex-col justify-center gap-6">
          <h1 className="text-5xl">
            Hello, I&apos;m <br />{" "}
            <span className="text-blue-500">Zhi Sheng</span>.
          </h1>
          <h2 className="text-2xl">
            I am a second-year Computer Science student at the National
            University of Singapore. Welcome to my website.
          </h2>
        </div>
        <CardGrid />
      </div>
    </>
  );
};

export default Home;
