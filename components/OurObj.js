import React from 'react'
import { FcIdea } from "react-icons/fc";
import { FaBrain,FaGripLinesVertical } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbRectangleVertical } from "react-icons/tb";

function OurObj() {
  return (
   
      <div className='h-[100vh]'>
        OurObj
        <div class="grid place-items-center h-screen">
        <div class="grid grid-rows-2 grid-flow-col gap-1 w-[40%]">
          <div className='flex justify-center'>
        <div class=" grid place-items-center text-center bg-gray-300">
        <div class="grid grid-rows-2 ">
          
          <p className='text-4xl '> Our Objective</p>
            <p class="text-2xl break-words pl-12 pr-12">The objective of the chapter to promote computer science as a field of education and foster a sense of innovation and creativity among computer enthusiasts.</p>
        </div>
</div>
</div>
<div className='flex justify-center'>
        <div class="grid grid-cols-3 gap-5 w-full">
          
        <div class="w-full rounded border-2 border-blue-700 bg-sky-100">
  <div class="px-6 py-4">
  <div className='flex justify-center'><BsPeopleFill className='text-5xl md-10'/></div>
  <div className='flex items-center justify-center'>
  <FaGripLinesVertical className='text-2xl md-10'/>
    <div class="font-bold text-xl mb-2 text-center">Interactive</div></div>
    <p class="text-gray-700 text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  </div>

<div class="w-full rounded border-2 border-blue-700 bg-sky-100">
  <div class="px-6 py-4">
  <div className='flex justify-center'><FcIdea className='text-5xl md-10'/></div>
  <div className='flex items-center justify-center'>
  <FaGripLinesVertical className='text-2xl md-10'/>
    <div class="font-bold text-xl mb-2 text-center">
    Creative</div></div>
    <p class="text-gray-700 text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
 
</div>
<div class="w-full rounded border-2 border-blue-700 bg-sky-100">
  <div class="px-6 py-4">
  <div className='flex justify-center'><FaBrain className='text-5xl md-10'/></div>
  <div className='flex items-center justify-center'>
  <FaGripLinesVertical className='text-2xl md-10'/>
    <div class="font-bold text-xl mb-2 text-center">Big Ideas</div></div>
    <p class="text-gray-700 text-base text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  
</div>

</div>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
</div>

</div>
</div>
    </div>
  )
}

export default OurObj