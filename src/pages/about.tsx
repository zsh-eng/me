import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

const paragraphStyles = "text-white text-xl leading-relaxed max-w-prose";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zhi Sheng{"'"}s Site</title>
        <meta
          name="description"
          content="Zhi Sheng's Personal Portfolio Site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden bg-gradient-to-r from-[#302b63] to-[#24243e] sm:items-center">
        <section className="mx-2 flex flex-col gap-2 sm:mx-12">
          <h1 className="mb-4 font-serif text-6xl text-white">Hi there!</h1>
          <p className={paragraphStyles}>
            My name is Zhi Sheng, and I'm a web developer with a passion for
            building user-friendly and intuitive web applications.
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
        </section>
      </main>
    </>
  );
};

export default About;
