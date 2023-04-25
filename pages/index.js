import Head from "next/head";
import HomePage from "./HomePage";
import { useRef } from "react";
export default function Home() {
  const myRef = useRef();

  return (
    <div className="bg-[#010913]">
      <Head>
        <title>ACM Student Chapter - Amrita Amritapuri Campus</title>
        <meta name="description" content="The Association for Computing Machinery (ACM) student chapter at Amrita Vishwa Vidyapeetham Amritapuri Campus provides students with opportunities to enhance their coding skills in various domains including Machine Learning, Web Development, Competitive Programming, Game Development, Blockchain, and Web 3."/>
      </Head>
      <div ref={myRef}>
        <HomePage />
      </div>
    </div>
  );
}
