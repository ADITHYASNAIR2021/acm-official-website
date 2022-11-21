import Head from "next/head";
import HomePage from "./HomePage";
import { useRef } from "react";

export default function Home() {

  const myRef = useRef()
 
  return (
    <div>

<div ref={myRef}>
  <HomePage  />
</div>
      
    </div>
  );
}
