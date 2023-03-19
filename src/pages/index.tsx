import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

type HomeProps = {
  setActiveIndex: (index: number) => void;
};

const LinkStyles =
  "text-white text-6xl font-mono font-thin mx-4 py-2 group-hover:opacity-30 hover:!opacity-100 z-10 ease-in duration-200";

type LinkProps = {
  href: string;
  text: string;
  onMouseOver: () => void;
};

const AnimatedLink: React.FC<LinkProps> = ({ href, text, onMouseOver }) => {
  return (
    <Link href={href} className={LinkStyles} onMouseOver={onMouseOver}>
      <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
        {text}
      </motion.div>
    </Link>
  );
};

const Home: NextPage<HomeProps> = ({ setActiveIndex }) => {
  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

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
      <AnimatePresence>
        <motion.div
          className="group peer relative z-20 ml-2 flex flex-col items-stretch justify-center sm:ml-0 sm:mr-[30%]"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }}
          variants={variants}
        >
          <AnimatedLink
            href="/about"
            onMouseOver={() => setActiveIndex(0)}
            text="About Me"
          />
          <AnimatedLink
            href="/"
            text="Contact"
            onMouseOver={() => setActiveIndex(1)}
          />
          <AnimatedLink
            href="/"
            text="Blog"
            onMouseOver={() => setActiveIndex(2)}
          />
          <AnimatedLink
            href="/"
            text="Projects"
            onMouseOver={() => setActiveIndex(3)}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
