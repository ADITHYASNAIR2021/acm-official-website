import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import AIMentorManage from "../components/AIMentorManage";

const AI = () => {
  return (
    <>
      <Head>
        <title>AI - ACM Amritapuri</title>
      </Head>
      <div>
      <Navbar />
      <div className="vh-200 bg-[#010912] first-div">
        <AIMentorManage />
      </div>
      <Footer />
      </div>
    </>
  );
};

export default AI;
