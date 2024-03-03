import React from 'react'
import MentorCard from "./MentorCard";

const CPMentorManage = () => {
  return (
<div className='lg:h-[120vh] p-10 backstudmanage pb-10'>
      <div className='flex justify-center mb-20'>
        <div className="faculty-header-dot h-5 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
        <div className='text-5xl font-bold text-center text-slate-100/90'>SIG-CP Mentors</div>
      </div>
      <div className='flex justify-center '>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-8">

        <MentorCard 
            image={require("./../public/Students/maanav.png")}
            name="Maanav Thalapilly"
            position="SIG CP Lead"
            linkedin = "https://www.linkedin.com/in/maanav-thalapilly-4718ab24a/"
            Github = "https://github.com/MaanavT"
            instagram= "https://instagram.com/_maanav.mn_?utm_source=qr&igshid=YzU1NGVlODEzOA=="
            imageStyle={{ width: '205px', height: '219px' }}
          />

         <MentorCard
            image={require("./../public/Students/akarsh2.png")}
            name="AKARSH S NAIR"
            position="SIG CP MENTOR"
            instagram = "https://instagram.com/akarxh___?igshid=MWR4YmUzMTlqN2c3dg=="        
            linkedin = "https://in.linkedin.com/in/akarsh-s-nair-426530227"
            github = "https://github.com/akarshsnair"
            imageStyle={{ width: '205px', height: '219px' }}
          />

        <MentorCard
            image={require("./../public/Students/adithya.png")}
            name="ADITHYA S NAIR"
            position="MENTOR"
            instagram="https://www.instagram.com/nair.ji_"
            linkedin="https://www.linkedin.com/in/adithya-s-nair/"
            github="https://github.com/ADITHYASNAIR2021"
            imageStyle={{ width: '205px', height: '219px' }}
          />

          <MentorCard 
            image={require("./../public/Students/athul.png")}
            name="ATHUL GIREESH"
            position="MENTOR"
            instagram = "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/"
            linkedin = "https://www.linkedin.com/in/athul-gireesh-02b4a8227/"
            github = "https://github.com/Athulg19"
            imageStyle={{ width: '205px', height: '219px' }}
          />
          <MentorCard
            image={require("./../public/Students/athul.png")}
            name="HARI SANKAR"
            position="MENTOR"
            instagram = "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/"
            linkedin = "https://www.linkedin.com/in/athul-gireesh-02b4a8227/"
            github = "https://github.com/Athulg19"
            imageStyle={{ width: '205px', height: '219px' }}
          />
          <MentorCard
            image={require("./../public/Students/athul.png")}
            name="MEGHA MOHAN"
            position="MENTOR"
            instagram = "https://www.instagram.com/b_l_a_c_ks_a_n_t_a/"
            linkedin = "https://www.linkedin.com/in/athul-gireesh-02b4a8227/"
            github = "https://github.com/Athulg19"
            imageStyle={{ width: '205px', height: '219px' }}
          />

        </div>
      </div>
    </div>
  )
}

export default CPMentorManage