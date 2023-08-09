import { type NextPage } from "next";
import Head from "next/head";
import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="-mb-4 text-4xl font-semibold text-secondary-content lg:text-5xl">
        Work Experience
      </h1>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          Intern at <span className="text-accent">Doctor Anywhere</span>
        </h2>
        <h3 className="font-mono text-lg text-secondary">
          Jan 2022 - July 2022
        </h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>
            Developed automation tools using Google Apps Script, Electron,
            React, and Puppeteer, resulting in significant hourly workload
            reduction for the operations team.
          </li>
          <li>
            Conducted data analysis on customer transaction volumes utilizing
            Power Query and Pandas.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          Intern at <span className="text-accent">DSTA</span>
        </h2>
        <h3 className="font-mono text-lg text-secondary">
          Feb 2020 - March 2020
        </h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>
            Performed data analysis on the crowd levels of bus stops in
            Singapore using Python and Pandas.
          </li>
        </ul>
      </section>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="-mb-4 text-4xl font-semibold text-secondary-content lg:text-5xl">
        Education
      </h1>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          National University of Singapore
        </h2>
        <h3 className="font-mono text-lg text-secondary">
          Aug 2022 - May 2026
        </h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>Cumulative Average Point (CAP): 4.91/5.0 (as of Aug 2023)</li>
          <li>
            Awarded Top Student certificate for CS1101S Programming Methodology
            and CS2040S Data Structures and Algorithms.
          </li>
          <li>
            <span className="font-bold">Relevant Coursework:</span> Programming
            Methodology, Data Structures and Algorithms, Discrete Structures
          </li>
          <li>
            <span className="font-bold">Current Undertaking:</span> Software
            Engineering, Database Systems, Introduction to Computer Networks
          </li>
        </ul>
      </section>
    </div>
  );
};

const Extra: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="-mb-4 text-4xl font-semibold text-secondary-content lg:text-5xl">
        Extra-curricular Activities
      </h1>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          NUS College Management Committee
        </h2>
        <h3 className="font-mono text-lg text-secondary">Oct 2022 - Present</h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>
            Contributed to the development of NUS College&apos;s student life
            website using Next.js and ChakraUI.
          </li>
          <li>
            Collaborated as a UI/UX team member to create wireframes using
            Figma.
          </li>
          <li>
            Conducted user requirement gathering from the student body to ensure
            a user-centred design approach.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          ASEAN Business Youth Association
        </h2>
        <h3 className="font-mono text-lg text-secondary">
          July 2023 - Present
        </h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>
            Collaborated in a team of 4 to develop a static website using
            Next.js, TailwindCSS and Framer Motion.
          </li>
        </ul>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl text-secondary-content lg:text-3xl">
          LifeHack Organising Committee
        </h2>
        <h3 className="font-mono text-lg text-secondary">
          Jan 2023 - May 2023
        </h3>
        <ul className="list-inside list-disc space-y-2 text-lg text-secondary-content">
          <li>
            Developed a website using Next.js to promote LifeHack, an annual
            hackathon with 400 participants.
          </li>
        </ul>
      </section>
    </div>
  );
};

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Zhi Sheng's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-16 flex w-full flex-col gap-12 px-2 lg:w-[640px]">
        <WorkExperience />
        <Education />
        <Extra />
      </div>
    </>
  );
};

export default Resume;
