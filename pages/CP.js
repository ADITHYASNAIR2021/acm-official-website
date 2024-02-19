import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import CPMentorManage from "../components/CPMentorManage";

const CP = () => {
  return (
    <>
      <Head>
        <title>CP - ACM Amritapuri</title>
      </Head>
      <Navbar />
      <div className="vh-200 bg-[#010912] first-div">
        <CPMentorManage />
      </div>
      <Footer />
    </>
  );
};
export default CP