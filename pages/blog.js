import React from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog - ACM Amritapuri</title>
      </Head>
      <Navbar />
      <div className="h-screen bg-[#010912] first-div">
        <h1 className="text-center text-6xl text-white py-[200px]">coming soon...</h1>
      </div>
      <Footer />
    </>
  );
};

export default blog;
