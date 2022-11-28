import React from 'react'
import { FcIdea } from "react-icons/fc";
import { FaBrain,FaGripLinesVertical } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbRectangleVertical } from "react-icons/tb";
import Button from './Button.jsx'
import ObjRec from "/public/objRec.svg"
import Intrc from "/public/objinter.svg"
import BigIdea from "/public/bigId.svg"
import Creative from "/public/crtve.svg"
function OurObj() {
  return (
   
      <div className='h-[100vh] ourobjbg'>
        OurObj
        <div class="grid place-items-center h-screen text-white">
        <div class="grid grid-rows-2 grid-flow-col gap-1 w-[45%]">
          <div className='flex justify-center'>
        <div class=" grid place-items-center text-center ">
        <div class="grid grid-rows-2 ">
          
          <p className='ourobjtxt '> OUR OBJECTIVE</p>
            <p class="text-xl break-words pl-12 pr-12 font-light">The objective of the chapter to promote computer science as a field of education and foster a sense of innovation and creativity among computer enthusiasts.</p>
        </div>
</div>
</div>
<div className='flex justify-center'>
        <div class=" grid grid-cols-3 gap-10 w-full">
          
        <div class="w-full rounded border-2 border-blue-700 card-gradient">
  <div class="px-6 py-4">
  <div className='flex justify-center'><Intrc className="scale-85 mb-2"/></div>
  <div className='flex items-center justify-center'>
  <ObjRec className="scale-75"/>
    <div class="font-bold text-xl ml-4 text-center">Interactive</div></div>
    <p class="text-white text-base text-center font-light">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

<div class="w-full rounded border-2 border-blue-700 card-gradient">
  <div class="px-6 py-4">
  <div className='flex justify-center'><Creative className="scale-85 mb-4"/></div>
  <div className='flex items-center justify-center'>
  <ObjRec className="scale-75"/>
    <div class="font-bold text-xl ml-4 text-center">
    Creative</div></div>
    <p class="text-white text-base text-center font-light">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>
<div class="w-full rounded border-2 border-blue-700 card-gradient">
  <div class="px-6 py-4">
  <div className='flex justify-center'><BigIdea className="scale-85 mb-4"/></div>
  <div className='flex items-center justify-center'>
  <ObjRec className="scale-75"/>
    <div class="font-bold text-xl ml-4 text-center">Big Ideas</div></div>
    <p class="text-white text-base text-center font-light">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

</div>

</div>

</div>
  <Button message={"Learn More"} />
</div>
    </div>
  )
}

export default OurObj