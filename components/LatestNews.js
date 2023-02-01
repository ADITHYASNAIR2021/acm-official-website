import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import Carousel, { CarouselItem } from "./Carousel";
import Button from "./Button";

const LatestNews = () => {
  return (
    <>
      <div className="pt-[150px] pb-[50px]">
        <Heading heading="LATEST NEWS" />
      </div>
      <Carousel>
        <CarouselItem>
          <Image
            src={"/../public/images/latestNews/1.jpeg"}
            alt="news 1"
            width="900"
            height="1200"
          />
          <p>Dec 18 from 11.00AM to 12.00PM (IST)</p>
          <span class="bookPrice">ICPC CODING</span>
          <h2>ICPC CODING</h2>
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/../public/images/latestNews/1.jpeg"}
            alt="news 1"
            width="900"
            height="1200"
          />
          <p>Dec 18 from 11.00AM to 12.00PM (IST)</p>
          <span class="bookPrice">ICPC CODING</span>
          <h2>ICPC CODING</h2>
        </CarouselItem>
        <CarouselItem>
          <Image
            src={"/../public/images/latestNews/1.jpeg"}
            alt="news 1"
            width="900"
            height="1200"
          />
          <p>Dec 18 from 11.00AM to 12.00PM (IST)</p>
          <span class="bookPrice">ICPC CODING</span>
          <h2>ICPC CODING</h2>
        </CarouselItem>
      </Carousel>
      <div className="flex items-center justify-center text-white pb-[50px]">
        <Button message={"View more"} />
      </div>
    </>
  );
};

export default LatestNews;
