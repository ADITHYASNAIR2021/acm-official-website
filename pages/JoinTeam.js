import React from "react";
import Button2 from "../components/Button2";
import ObjRec from "/public/objRec.svg";
import Intrc from "/public/objinter.svg";
import BigIdea from "/public/bigId.svg";
import Creative from "/public/crtve.svg";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

function returnSVG(id) {
    switch (id) {
      case "1":
        return <Intrc className="scale-85 mb-2" />;
        break;
      case "2":
        return <Creative className="scale-85 mb-2" />;
        break;
      case "3":
        return <BigIdea className="scale-85 mb-2" />;
        break;
        case "4":
        return <Intrc className="scale-85 mb-2" />;
        break;
      case "5":
        return <Creative className="scale-85 mb-2" />;
        break;
      case "6":
        return <BigIdea className="scale-85 mb-2" />;
        break;
    }
  }
  const detArr=[
    {
        id:"1",
        title: "Interactive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id:"2",
        title: "dsfdsfctive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id:"3",
        title: "Interactive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id:"4",
        title: "Interactive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id:"5",
        title: "dsfdsfctive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    },
    {
        id:"6",
        title: "Interactive",
        desc:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    }
]
function JoinTeam() {
    
  return (
    <div className=" joinuspage pb-10 min-h-screen">
      <Navbar />
      <div className="grid first-div place-items-center  text-white">
        <div className="flex flex-col gap-y-24 xl:w-[90%] mt-5 mb-5">
          <div className="flex justify-center">
            <div className=" grid place-items-center text-center ">
              <div className="grid sm:grid-cols-3 sm:grid-rows-1  grid-rows-3 place-items-center">
                <div className="grid-rows-2 grid place-items-center sm:place-items-start">
                <p className="jointext "> JOIN</p>
                <p className="ourteam "> OUR TEAM</p>
                </div>
                <div className="flex items-center justify-center">
            <Button2 message={"GET IN TOUCH"} />
          </div>
                <p className="text-xl break-words pl-12 pr-12 font-light">
                  The objective of the chapter to promote computer science as a
                  field of education and foster a sense of innovation and
                  creativity among computer enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-24 w-3/4 sm:w-4/5">
            {detArr.map((pgdet) => (
                    <div className="w-full rounded border-2 border-blue-700 card-gradient" key={pgdet.id}>
                    <div className="px-6 py-4">
                      <div className="flex justify-center">
                      {returnSVG(pgdet.id)}
                      </div>
                      <div className="flex items-center justify-center">
                        <ObjRec className="scale-75" />
                        <div className="font-bold text-xl ml-4 text-center">
                          {pgdet.title}
                        </div>
                      </div>
                      <p className="text-white text-base text-center font-light">
                        {pgdet.desc}
                      </p>
                    </div>
                  </div>
                 ))}
              
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default JoinTeam;
