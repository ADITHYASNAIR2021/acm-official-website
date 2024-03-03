import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import CyberMentorManage from "../components/CyberMentorManage";

const AI = () => {
  return (
    <>
      <Head>
        <title>Cyber - ACM Amritapuri</title>
      </Head>
      <Navbar />
      <div className="vh-200 bg-[#010912] first-div">
        <CyberMentorManage />
      </div>
      <Footer />
    </>
  );
};

export default AI;