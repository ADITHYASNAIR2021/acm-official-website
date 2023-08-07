import style from '../styles/style1.module.css'

const explore = () => {
  window.location.href='/projects';
}

const Landing = () => {
  return (
    <div className='h-[100vh] w-[100%] relative flex justify-center overflow-hidden bg-transparent first-div'>
      {/* For Bubble Animation */}
      <div className='bubble-wrapper z-[10]'>
            <div className="ellipse-1 animate-updown"></div>
            <div className="ellipse-2 animate-bounce"></div>
            <div className="ellipse-3 animate-downup"></div>
      </div>
      {/* Main Content Below */}
      <div className={`flex flex-wrap items-center flex-col justify-center z-20`} >
        <div className='text-landing'>
          <h1 className={`${style.acm_text}`}>ACM</h1>
          <h1 className={style.student_text}>Student Chapter</h1>
        </div>
        <div className={style.heading_sub_text}>

          <p>The objective of the chapter to promote computer science as</p>
          <p>a field of education and foster a sense of innovation and </p>
          <p>creativity among computer enthusiasts.</p>

        </div>
        <div>
          <button className={`${style.heading_button}`} onClick={explore} > Explore </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;