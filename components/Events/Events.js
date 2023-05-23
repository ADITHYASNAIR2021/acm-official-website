import Button from "../Button";
function Events() {
  return (
    <div className="event first-div mt-10 min-h-[500px] min-w-[80%] backdrop-blur-md backdrop-opacity-[0.49] grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 justify-center items-center rounded-xl ml-10 mr-10">
      <div className="event-wordings text-white ml-3 flex flex-col justify-center items-start">
        <h1 className="event-title text-3xl">ACM OPEN HOUSE</h1>
        <p className="event-details mt-3 max-w-[80%] text-justify">
          ACM Open House is a dynamic platform showcasing the exceptional
          projects undertaken by club members in the fields of Web Development,
          Artificial Intelligence (AI), Glitch, Cyber Security, and Competitive
          Programming (CP). This event serves as a gateway to explore the
          cutting-edge advancements in these domains. With an engaging display
          of innovative solutions, ACM Open House provides a unique opportunity
          to witness the fusion of creativity and technical expertise. Join us
          to witness the future of technology and be inspired by the remarkable
          projects crafted by our talented club members.
        </p>
        <div className="registration mt-5 pb-4 pl-4 min-h-[100px] min-w-[100%] justify-self-end flex 2xl:flex-row flex-col 2xl:justify-evenly 2xl:items-center button-clip-shape">
          <p className="time-left text-3xl text-[#0466CF]">16:30:00</p>
          <p className="event-duration mt-2 mb-2 text-3xl">
            23/05/23 - 23/05/23
          </p>
          <Button message={"Register Now"} />
        </div>
      </div>
      <div className="image flex justify-center rounded-md">
        <img
          src="/images/openHouse.jpeg"
          alt="Event Image"
          className="rounded-2xl max-h-[50%] max-w-[50%]"
        />
      </div>
    </div>
  );
}

export default Events;
