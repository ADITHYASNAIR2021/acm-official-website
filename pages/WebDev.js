import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import WebMentorManage from "../components/WebMentorManage";

const AI = () => {
  return (
    <>
      <Head>
        <title>WebDev - ACM Amritapuri</title>
      </Head>
      <Navbar />
      <div className="vh-200 bg-[#010912] first-div">
        <WebMentorManage />
      </div>
      <Footer />
    </>
  );
};

export default AI;