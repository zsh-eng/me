import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type LinkCardProps = {
  heading: string;
  src: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ heading, src }) => {
  return (
    <div className="hover:bg-primary-secondary group relative flex h-28 w-48 flex-col justify-center gap-2 bg-secondary px-8 py-4 transition-all duration-300 hover:h-36 hover:w-60">
      <h2 className="z-10 w-full text-left text-4xl font-semibold text-secondary-content">
        {heading}
      </h2>
      <Image
        src={src}
        alt="keyboard"
        className="absolute z-0 scale-90 bg-cover opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-10"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className="grid h-[400px] w-full grid-cols-2 grid-rows-2 items-start gap-2 lg:h-screen lg:w-[600px]">
      <Link className="place-self-end text-left" href="/about">
        <LinkCard heading="About" src="/../public/person.jpg" />
      </Link>
      <Link className="self-end" href="/">
        <LinkCard heading="Blog" src="/../public/writing.jpg" />
      </Link>
      <Link className="justify-self-end text-left" href="/">
        <LinkCard heading="Resume" src="/../public/paper.jpg" />
      </Link>
      <Link href="/">
        <LinkCard heading="Projects" src="/../public/terminal.png" />
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
