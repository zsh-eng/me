import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type PropsWithChildren } from "react";
import React from "react";

type ProjectProps = {
  url: string;
  image?: string;
  alt: string;
  heading: string;
};

const Project: React.FC<PropsWithChildren<ProjectProps>> = ({
  url,
  heading,
  image,
  alt,
  children,
}) => {
  return (
    <section className="mb-4 flex flex-col items-center">
      <h2 className="mb-2 w-full text-3xl font-bold lg:w-[600px] lg:text-2xl">
        <a
          href={url}
          className="transition duration-300 hover:text-primary-focus"
        >
          {heading}
        </a>
      </h2>
      {image && (
        <div className="relative">
          <Image
            width={800}
            height={400}
            className="my-2"
            src={image}
            alt={alt}
          />
        </div>
      )}
      {children}
    </section>
  );
};

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="Projects" content="Zhi Sheng's Projects Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-8 flex h-2/3 w-full flex-col items-center gap-4 px-2 lg:w-1/2">
        <section className="lg:w-[600px]">
          <h1 className="mb-4 text-5xl font-semibold text-secondary-content">
            Projects
          </h1>
          <p className="text-xl">
            I have worked on various projects for school and in my own free
            time. I generally enjoy working on projects that help solve some
            problem in my life.
          </p>
        </section>

        <Project
          heading={"NUS College Student Life Website"}
          url="https://nusc.club"
          image="/projects/nusc.png"
          alt="NUSC Website"
        >
          <ul className="list-disc pl-6 text-lg lg:w-[600px]">
            <li>I worked on the UI/UX design of the page with Figma.</li>
            <li>I contributed to the frontend using Next.js and ChakraUI.</li>
            <li>I added unit tests with Jest and E2E tests with Cypress.</li>
          </ul>
        </Project>

        <Project
          heading="LifeHack 2023 Website"
          url="https://lifehack-website.web.app/"
          image="/projects/lifehack.png"
          alt="LifeHack 2023 Website"
        >
          <ul className="list-disc pl-6 text-lg lg:w-[600px]">
            <li>I developed the frontend in Next.js</li>
          </ul>
        </Project>

        <Project
          heading="CloudWeGo API Gateway"
          url="https://github.com/tim-pipi/cloudwego-api-gateway"
          image="/projects/nusc.png"
          alt="CloudWeGo API Gateway"
        >
          <ul className="list-disc pl-6 text-lg lg:w-[600px]">
            <li>I developed the frontend in Next.js</li>
            <li>
              I created an API Gateway using open-source libraries such as Hertz
              (HTTP Framework) and Kitex (RPC Framework) for Orbital 2023 (a
              summer Computer Science course for NUS students).
            </li>

            <li>I used Go to build the API Gateway and test it.</li>
            <li>Docker was used to containerise the application.</li>
          </ul>
        </Project>

        <Project
          heading="Obsidian Definitions"
          url="https://github.com/zsh-eng/obsidian-definitions"
          image="/projects/nusc.png"
          alt="Obsidian Definitions"
        >
          <ul className="list-disc pl-6 text-lg lg:w-[600px]">
            <li>
              Obsidian is a note-taking application that I frequently use.
            </li>
            <li>
              I created <span className="font-mono">obsidian-definitions</span>,
              a plugin which automatically creates links to existing files and
              headings when a markdown file is saved.
            </li>
          </ul>
        </Project>
      </div>
    </>
  );
};

export default Projects;
