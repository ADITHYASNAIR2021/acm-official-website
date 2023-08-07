import React from "react";
import Head from "next/head";
import ProjectsCard from "../components/ProjectsCard";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects - ACM Amritapuri</title>
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
          <ProjectsCard title="ACM TCM" desc="The ultimate platform for student attendance and club analytics, simplifying total club management." link="https://github.com/ACM-Amrita-Amritapuri/ACM-Attendance-Management-System"/>
          <ProjectsCard title="Autodeck" desc="our one-stop website for easy contact with auto drivers, fare knowledge, and fare splitting." link="https://github.com/Takashi069/autodeck"/>
          <ProjectsCard title="Apnicareer" desc="The ultimate job search engine and analytics platform for engineers, connecting job seekers and recruiters." link="https://github.com/akhil-s-kumar/apnicareer-webapp"/>
          <ProjectsCard title="Stitch Craft" desc="Fusing tradition and technology, connecting customers with local tailors for seamless and exquisite craftsmanship." link="https://github.com/kehshiba/stitchcraft"/>
          <ProjectsCard title="Trouver" desc="Discover local medical facilities in Amritapuri with ease. Find clinics, shops, and contribute information." link="https://github.com/NiranjanNR/Trouver"/>
          <ProjectsCard title="Cine Vault" desc="Your virtual treasure trove of movies, with trailers, ratings, and genres for the perfect film." link="https://github.com/abhinandarun-02/CineVault"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default projects;
