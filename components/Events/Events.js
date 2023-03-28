import Button from "../Button";
function Events(){
    return(
            <div className="event mt-10 min-h-[500px] min-w-[80%] backdrop-blur-md backdrop-opacity-[0.49] grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 justify-center items-center rounded-xl ml-10 mr-10">
                <div className="event-wordings text-white ml-3 flex flex-col justify-center items-start">
                    <h1 className="event-title text-3xl">EVENT TITLE</h1>
                    <p className="event-details mt-3 max-w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="registration mt-5 pb-4 pl-4 min-h-[100px] min-w-[100%] justify-self-end flex 2xl:flex-row flex-col 2xl:justify-evenly 2xl:items-center button-clip-shape">
                        <p className="time-left text-3xl text-[#0466CF]">00:00:00</p>
                        <p className="event-duration mt-2 mb-2 text-3xl">00/00/00 - 00/00/00</p>
                        <Button message={"Register Now"}/>
                    </div>
                </div>
                <div className="image flex justify-center rounded-md">
                    <img src="/images/image1.png" alt="Event Image" className="rounded-2xl max-h-[90%] max-w-[90%]" />
                </div>
            </div>
    )
}

export default Events;