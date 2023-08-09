import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { type PropsWithChildren } from "react";

type WorkExperienceProps = {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date;
};

const WorkExperience: React.FC<PropsWithChildren<WorkExperienceProps>> = ({
  company,
  role,
  startDate,
  endDate,
}) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  };

  const bodyText = `${role}\t${formatDate(startDate)} - ${formatDate(endDate)}`;

  return (
    <div className="card card-side w-full max-w-[600px] rounded-none bg-base-100 shadow-xl">
      <figure className="">
        <Image
          height={200}
          width={200}
          src="/person.jpg"
          alt="Person"
          className="object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">{company}</h2>
        <h3 className="text-lg italic">{bodyText}</h3>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Watch</button>
        </div>
      </div>
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
      <div>
        <h1 className="mb-4 text-5xl font-semibold text-secondary-content">
          Experience
        </h1>
        <WorkExperience
          company="Doctor Anywhere"
          role="Intern"
          startDate={new Date(2023, 5, 1)}
          endDate={new Date(2023, 5, 1)}
        ></WorkExperience>
      </div>
    </>
  );
};

export default Resume;
