import { type NextPage } from "next";
import Head from "next/head";

import { motion } from "framer-motion";

const paragraphStyles = "text-white text-xl leading-relaxed max-w-prose";

const About: NextPage = () => {
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.section
        className="mx-2 flex flex-col gap-2 sm:mx-12"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-4 font-serif text-6xl text-white">Hi there!</h1>
        <p className={paragraphStyles}>
          My name is Zhi Sheng, and I&apos;m a first-year computer science
          undergraduate at the National University of Singapore.
        </p>
        <p className={paragraphStyles}>
          I have experience working in various areas of web development, from
          creating automation tools to UI/UX design to building websites for
          different organisations.
        </p>
        <p className={paragraphStyles}>
          In my free time, I enjoy exploring the latest web development
          technologies and experimenting with new tools and techniques to
          improve my skills.
        </p>
        <p className={paragraphStyles}>
          Thanks for stopping by and taking the time to learn more about me.
          Feel free to reach out if you have any questions or would like to
          connect!
        </p>
      </motion.section>
    </>
  );
};

export default About;
