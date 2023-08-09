import { type NextPage } from "next";
import Head from "next/head";

import { motion } from "framer-motion";
import Link from "next/link";

const paragraphStyles = "text-base-content text-xl leading-relaxed max-w-prose";

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
        className="mx-12 flex flex-col gap-2 px-4 lg:mx-2"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-4 font-mono text-3xl font-bold text-secondary-content">
          Hi there, I&apos;m
        </h2>
        <h1 className="mb-4 font-sans text-6xl font-bold text-secondary-content">
          Zhi Sheng
        </h1>
        <p className={paragraphStyles}>
          a second-year CS student at the National University of Singapore.
        </p>
        <p className={paragraphStyles}>
          I have experience working in various areas of web development, from
          creating automation tools to UI/UX design to building websites for
          different organisations.
        </p>
        <p className={paragraphStyles}>
          In my free time, I enjoy working on various programming{" "}
          <Link className="underline" href="/projects">
            projects
          </Link>{" "}
          to learn new technologies and experiment with different tools and
          techniques.
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
