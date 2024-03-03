import Button from "../Button";
import AmritaUni from '/public/Amrita-Uni.svg'
import Stats from '/public/Group 30.svg'

const joinbuttnFunction = () =>{
    window.location.href='https://aseam.acm.org/join/';
}

const AboutUs = () => {

    return (
        <div className="
                        w-[100%]
                        h-[100vh]
                        bg-[#020B14]
                        cs-1240:grid
                        cs-1240: grid-cols-2
                        flex 
                        flex-col
                        justify-center
                        items-center
                        "
        >
            <div className="
                    message 
                    flex 
                    flex-col 
                    justify-center
                    items-start
                    text-white
                    ml-[150px]
                    "
            >
                <h1 className="font-RedRose text-white text-4xl font-medium opacity-[77%]">ABOUT US</h1>
                <br></br>
                <p className="w-[70%] font-RedRose font-normal leading-[26px] opacity-[77%]">
                    We are a group of computer science enthusiasts promoting self-education and group-based learning through Student Interest Groups (SIGs) focused on topics such as AI, Cybersecurity, Game Dev, Competitive Programming, Blockchain Dev and more. Join us based on your expertise in a certain field and contribute to an SIG by contacting us.
                </p>
                <br></br>
                <Button message={"JOIN US"} buttonFunction={joinbuttnFunction}/>
            </div>
            <div className=" Image relative self-center cs-708:flex cs-708:flex-col cs-708:justify-center hidden" >
                <AmritaUni className="relative left-[10%]" />
                <Stats className="absolute bottom-[-10%] left-[10%]" />
            </div>
        </div>
    );
}

export default AboutUs;