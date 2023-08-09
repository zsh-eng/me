import { type NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Zhi Sheng's Personal Portfolio Site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col pt-16 font-mono text-2xl text-base-content lg:flex-row lg:gap-8">
        Under construction, please check back later!
      </div>
    </>
  );
};

export default Blog;
