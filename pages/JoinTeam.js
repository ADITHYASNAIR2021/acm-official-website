import React from "react";
import Head from "next/head";
import Button2 from "../components/Button2";
import ObjRec from "/public/objRec.svg";
import Intrc from "/public/objinter.svg";
import BigIdea from "/public/bigId.svg";
import Creative from "/public/crtve.svg";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

const sendMail = () => {
  window.location.href='mailto:contact@aseam.acm.org';
}

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
        title: "Skill Enhancement",
        desc:"As a member of ACM, you can choose from a variety of technical SIGs to enhance your technical skills in your area of interest, where you can engage in hands-on workshops, hackathons, coding challenges, etc."
    },
    {
        id:"2",
        title: "Networking",
        desc:" We provide opportunities to network and build relationships with like-minded individuals who share a passion for technology , which can help students connect with employers or mentors in their field."
    },
    {
        id:"3",
        title: "Leadership",
        desc:"As an ACM member, you'll develop valuable skills like team management, event organization, volunteerism, and budgeting."
    },
    {
        id:"4",
        title: "Hands-on learning",
        desc:"At ACM, we offer various opportunities to develop your technical skills in a practical way through workshops, hackathons, coding competitions and more."
    },
    {
        id:"5",
        title: "Internships",
        desc:"Write your research paper under the guidance of a skilled mentor and boost your resume with excellent internship opportunities at ACM."
    },
    {
        id:"6",
        title: "Collaborative",
        desc:"ACM provides a collaborative environment where you can work with other like-minded individuals, share ideas, and learn from each other. This can be a great way to build your teamwork and leadership skills."
    }
]
function JoinTeam() {
    
  return (
    <div className="sm:text-left">
      <Head>
        <title>Join Us - ACM Amritapuri</title>
      </Head>
      <div className=" joinuspage pb-0 pt-20 min-h-screen overflow-x-hidden"> 
        <Navbar />
        <div className="grid place-items-center  text-white">
          <div className="flex flex-col gap-y-24 xl:w-[90%] mt-10 mb-5">
            <div className="flex lg:grid">
              <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 place-items-center text-center">
                <div className="flex lg:grid">
                  <p className="jointext flex items-center justify-center flex-wrap ">JOIN</p>
                  <p className="ourteam flex items-center justify-center flex-wrap ">OUR TEAM</p>
                </div>
                <div className="flex items-center justify-center pb-10 pt-6">
                    <Button2 message={"GET IN TOUCH"} buttonFunction={sendMail}/>
                </div>
                <p className="text-lg text-gray-300 flex-wrap px-12 text-center font-light lg:text-start">
                    The objective of the chapter to promote computer science as a
                    field of education and foster a sense of innovation and
                    creativity among computer enthusiasts.
                </p>
              </div>
            </div>
            <div className="flex justify-center pb-10">
              <div className=" grid grid-cols-1 lg:grid-cols-3 gap-12 w-3/4 md:w-4/5">
                {detArr.map((pgdet) => (
                  
                        <div className="w-full rounded border-2 border-blue-700 card-gradient" key={pgdet.id}>
                          <div className="px-6 py-4">
                            <div className="flex justify-center">
                              {returnSVG(pgdet.id)}
                            </div>

                            <div className="flex items-center justify-center ">
                              <ObjRec className="scale-75 mt-5" />
                              <div className="font-bold text-xl ml-4 text-center mt-5">
                                {pgdet.title}
                              </div>
                            </div>

                            <p className="text-white text-base text-justify font-light my-5 lg:text-justify ">
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
    </div>
  );
}

export default JoinTeam;