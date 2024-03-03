import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import GlitchMentorManage from "../components/GlitchMentorManage";

const AI = () => {
  return (
    <>
      <Head>
        <title>Glitch - ACM Amritapuri</title>
      </Head>
      <Navbar />
      <div className="vh-200 bg-[#010912] first-div">
        <GlitchMentorManage />
      </div>
      <Footer />
    </>
  );
};

export default AI;