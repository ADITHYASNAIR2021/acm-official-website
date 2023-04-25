import React from "react";
import Head from "next/head";
import ProjectsCard from "../components/ProjectsCard";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <div className="first-div bg-[#010912] pt-5 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-6 p-5">
          <div className="text-center">
            <h1 className="text-[70px] text-white font-bold">
              We build, We create!
            </h1>
            <p className="text-[20px] text-white opacity-70">
              explore the works done by our members.
            </p>
          </div>
        </div>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 p-5 my-2">
          <ProjectsCard title="ACM Student Management System" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." link="https://github.com/ACM-Amrita-Amritapuri/acm-official-website"/>
          <ProjectsCard title="Autodeck" desc="A directory of all the autodrivers around the Vallikavu region" link="https://github.com/Takashi069/autodeck"/>
          <ProjectsCard title="Noteworthy technology acquisitions 2021" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." link="https://github.com/ACM-Amrita-Amritapuri/acm-official-website"/>
          <ProjectsCard title="Noteworthy technology acquisitions 2021" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." link="https://github.com/ACM-Amrita-Amritapuri/acm-official-website"/>
          <ProjectsCard title="Noteworthy technology acquisitions 2021" desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." link="https://github.com/ACM-Amrita-Amritapuri/acm-official-website"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default projects;
