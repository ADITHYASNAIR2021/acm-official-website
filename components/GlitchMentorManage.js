import React from 'react'
import MentorCard from "./MentorCard";

const GlitchMentorManage = () => {
  return (
<div className='lg:h-[120vh] p-10 backstudmanage pb-10'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-5 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/90'>SIG-GLITCH Mentors</div>
      </div>
      <div className='flex justify-center '>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8">

        <MentorCard 
            image={require("./../public/Students/kisore.jpg")}
            name="Kisor.G"
            position="SIG Glitch Lead"
            linkedin = "www.linkedin.com/in/kisor-g"
            instagram= "https://instagram.com/_kisor__"
            imageStyle={{ width: '205px', height: '219px' }}
          />


        </div>
      </div>
    </div>
  )
}

export default GlitchMentorManage