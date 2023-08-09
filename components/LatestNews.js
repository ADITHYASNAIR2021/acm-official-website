import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Carousel, { CarouselItem } from "./Carousel";
import Button from "./Button";
import openHouse from "../public/images/latestNews/openHouse.jpg";
import coding from "../public/images/latestNews/coding.jpg";
import unity from "../public/images/latestNews/unity.jpg";
import fpv from "../public/images/latestNews/fpv.jpg";
import algoquest from "../public/images/latestNews/algoquest.jpg";

const newsbuttnFunction = () =>{
  window.location.href='/eventPage';
}

const LatestNews = () => {
  return (
    <>
      <div className="pt-[150px] pb-[50px]">
        <Heading heading="LATEST NEWS" />
      </div>
      <Carousel>
      <CarouselItem>
          <Image src={algoquest} alt="news 1" width="900" height="1200" />
          <p>Aug 10 from 14.00 PM to 16.30 PM (IST)</p>
          <span className="bookPrice">ALGOQUEST</span>
          <h2>ALGOQUEST</h2>
        </CarouselItem>
        <CarouselItem>
          <Image src={openHouse} alt="news 1" width="900" height="1200" />
          <p>May 23 from 16.30 PM to 18.00 PM (IST)</p>
          <span className="bookPrice">OPEN HOUSE</span>
          <h2>OPEN HOUSE</h2>
        </CarouselItem>
        <CarouselItem>
          <Image src={coding} alt="news 1" width="900" height="1200" />
          <p>May 5 & 6 from 10.00 AM to 15.30 PM (IST)</p>
          <span className="bookPrice">CODING</span>
          <h2>CODING</h2>
        </CarouselItem>
        <CarouselItem>
          <Image src={fpv} alt="news 1" width="900" height="1200" />
          <p>May 5 & 6 from 10.00 AM to 16.00 PM (IST)</p>
          <span className="bookPrice">FPV</span>
          <h2>FPV</h2>
        </CarouselItem>
        <CarouselItem>
          <Image src={unity} alt="news 1" width="900" height="1200" />
          <p>May 5 from 10.00 AM to 16.00 PM (IST)</p>
          <span className="bookPrice">UNITY</span>
          <h2>UNITY</h2>
        </CarouselItem>
      </Carousel>
      <div className="flex items-center justify-center text-white pb-[50px]">
        <Button message={"View more"} buttonFunction={newsbuttnFunction}/>
      </div>
    </>
  );
};

export default LatestNews;
