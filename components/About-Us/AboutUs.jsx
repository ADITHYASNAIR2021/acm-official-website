import Button from "../Button";
import AmritaUni from '/public/Amrita-Uni.svg'
import Stats from '/public/Group 30.svg'
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
                    ml-10
                    "
            >
                <h1 className="font-RedRose text-white text-4xl font-medium opacity-[77%]">ABOUT US</h1>
                <br></br>
                <p className="w-[70%] font-RedRose font-normal leading-[26px] opacity-[77%]">
                    We are a group of computer science enthusiasts from across the country, interested in 
                    various sub-disciplines. We believe in self-education and group-based learning, using 
                    subject-oriented tasks to advance through sharing and receiving knowledge with peers. Our student 
                    chapter consists of Student Interest Groups (SIGs) managed by students, focused on topics such as 
                    Artificial Intelligence, Cybersecurity, Game Development, Competitive Programming, Blockchain Development, and more. 
                    Your place in our group is based on your expertise and knowledge in a certain field. 
                    If you want to contribute to an SIG, please contact us.
                </p>
                <br></br>
                <Button message={"JOIN US"}/>    
            </div>
            <div className="
                Image 
                relative 
                self-center 
                cs-708:flex 
                cs-708:flex-col 
                cs-708:justify-center 
                hidden"
            >
                <AmritaUni className="relative left-[10%]" />
                <Stats className="absolute bottom-[-10%] left-[10%]" />
            </div>
        </div>
     );
}
 
export default AboutUs;