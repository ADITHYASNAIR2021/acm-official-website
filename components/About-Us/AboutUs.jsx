import Button from "../Button";
import AmritaUni from '/public/Amrita-Uni.svg'
import Stats from '/public/Group 30.svg'
const AboutUs = () => {
    
    return ( 
        <div className="
                        w-[100%]
                        h-[100vh]
                        bg-[#020B14]
                        grid
                        grid-cols-2
                        
                        "
        >
            <div className="
                    message 
                    flex 
                    flex-col 
                    justify-center
                    items-start
                    text-white
                    ml-10
                    "
            >
                <h1 className="text-white text-4xl font-medium opacity-[77%]">ABOUT US</h1>
                <br></br>
                <p className="w-[70%] font-normal leading-[26px] opacity-[77%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.

                </p>
                <br></br>
                <Button message={"JOIN US"}/>    
            </div>
            <div className="Image relative self-center flex flex-col justify-center">
                <AmritaUni className="relative left-[10%]" />
                <Stats className="absolute bottom-[-10%] left-[10%]" />
            </div>
        </div>
     );
}
 
export default AboutUs;