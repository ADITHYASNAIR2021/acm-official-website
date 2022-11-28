import React from 'react'
import style from '../styles/style1.module.css'
function HomePage() {
  return (
    <div className={`${style.home_wallpare} h-[100vh] w-[100%] bg-slate-400 flex flex-wrap items-center flex-col justify-center`} >
      <div className=''>
        <h1 className={style.acm_text}>ACM</h1>
        <h1 className={style.student_text}>Student Chapter</h1>
      </div>
      <div className={style.heading_sub_text}>

        <p>The objective of the chapter to promote computer science as</p>
        <p>a field of education and foster a sense of innovation and </p>
        <p>creativity among computer enthusiasts.</p>

      </div>
      <div>
        <button className={style.heading_button}> Explore </button>

      </div>




    </div>
  )
}

export default HomePage