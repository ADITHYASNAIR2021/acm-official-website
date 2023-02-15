import React from "react";
import Button from "./Button.jsx";
import ObjRec from "/public/objRec.svg";
import Intrc from "/public/objinter.svg";
import BigIdea from "/public/bigId.svg";
import Creative from "/public/crtve.svg";
function OurObj() {
  return (
    <div className=" ourobjbg pb-10">
      <div className="grid place-items-center  text-white">
        <div className="flex flex-col gap-y-24 xl:w-[60%]">
          <div className="flex justify-center">
            <div className=" grid place-items-center text-center ">
              <div className="grid grid-rows-2 ">
                <p className="ourobjtxt "> OUR OBJECTIVE</p>
                <p className="text-xl break-words pl-12 pr-12 font-light">
                  The objective of the chapter to promote computer science as a
                  field of education and foster a sense of innovation and
                  creativity among computer enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" grid grid-cols-1 sm:grid-cols-3 gap-10 w-3/4 sm:w-full">
              <div className="w-full rounded border-2 border-blue-700 card-gradient">
                <div className="px-6 py-4">
                  <div className="flex justify-center">
                    <Intrc className="scale-85 mb-2" />
                  </div>
                  <div className="flex items-center justify-center">
                    <ObjRec className="scale-75" />
                    <div className="font-bold text-xl ml-4 text-center">
                      Interactive
                    </div>
                  </div>
                  <p className="text-white text-base text-center font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>

              <div className="w-full rounded border-2 border-blue-700 card-gradient">
                <div className="px-6 py-4">
                  <div className="flex justify-center">
                    <Creative className="scale-85 mb-4" />
                  </div>
                  <div className="flex items-center justify-center">
                    <ObjRec className="scale-75" />
                    <div className="font-bold text-xl ml-4 text-center">
                      Creative
                    </div>
                  </div>
                  <p className="text-white text-base text-center font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
              <div className="w-full rounded border-2 border-blue-700 card-gradient">
                <div className="px-6 py-4">
                  <div className="flex justify-center">
                    <BigIdea className="scale-85 mb-4" />
                  </div>
                  <div className="flex items-center justify-center">
                    <ObjRec className="scale-75" />
                    <div className="font-bold text-xl ml-4 text-center">
                      Big Ideas
                    </div>
                  </div>
                  <p className="text-white text-base text-center font-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button message={"Learn More"} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default OurObj;
