import React from 'react'
import StudentCard from "./StudentCard";


const StudManage = () => {
  return (
    <div className='lg:h-[120vh] mt-10 p-10 backstudmanage pb-10'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-6 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/80'>Student Management</div>
      </div>
      <div className='flex justify-center '>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-32">
          <StudentCard 
            image={require("./../public/Students/stud1.png")}
            name="Akshit"
            position="Lorem Ipsum"
          />
          <StudentCard 
            image={require("./../public/Students/stud2.png")}
            name="Aby Stallin"
            position="Lorem Ipsum"
          />
          <StudentCard 
            image={require("./../public/Students/stud3.png")}
            name="Akash"
            position="Lorem Ipsum"
          />
          <StudentCard 
            image={require("./../public/Students/stud4.png")}
            name="Vipin"
            position="Lorem Ipsum"
          />
          <StudentCard
            image={require("./../public/Students/stud5.png")}
            name="Rizwan"
            position="Lorem Ipsum"
          />
          <StudentCard 
            image={require("./../public/Students/stud6.png")}
            name="Akash"
            position="Lorem Ipsum"
          />
        </div>
      </div>
    </div>
  )
}

export default StudManage