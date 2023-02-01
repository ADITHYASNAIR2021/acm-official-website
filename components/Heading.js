import React from 'react'

const Heading = (props) => {
    return (
        <div className='flex justify-center mb-20'>
            <div className="faculty-header-dot h-6 w-3 mr-3 mt-[15px] bg-gradient-to-t from-blue-700 to-blue-400 rounded-sm"></div>
            <div className='text-5xl font-bold text-center text-slate-100/80'>{props.heading}</div>
        </div>
    )
}

export default Heading