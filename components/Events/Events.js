import Button from "../Button";

const register = () => {
  window.location.href='https://aseam.acm.org/algoquest';
}

function Events() {
  return (
    <div className="event first-div mt-10 min-h-[500px] min-w-[80%] backdrop-blur-md backdrop-opacity-[0.49] grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 justify-center items-center rounded-xl ml-10 mr-10">
      <div className="event-wordings text-white ml-3 flex flex-col justify-center items-start">
        <h1 className="event-title text-3xl">ALGOQUEST</h1>
        <p className="event-details mt-3 max-w-[80%] text-justify">
          Embark on an exhilarating treasure hunt where clues are ingeniously
          crafted using DSA (Data Structures and Algorithms) concepts. Unleash
          your inner problem solver as you navigate through a series of
          captivating challenges, requiring the application of various
          algorithms. Each clue holds the key to unlock the next enigmatic
          location, leading you closer to the coveted treasure. Sharpen your
          algorithmic prowess and get ready for an immersive adventure filled
          with excitement and intellectual thrills!
        </p>
        <div className="registration mt-5 pb-4 pl-4 min-h-[100px] min-w-[100%] justify-self-end flex 2xl:flex-row flex-col 2xl:justify-evenly 2xl:items-center button-clip-shape">
          <p className="time-left text-3xl text-[#0466CF]">14:00:00</p>
          <p className="event-duration mt-2 mb-2 text-3xl">
            09/08/23 - 10/08/23
          </p>
          <Button message={"Register Now"} buttonFunction={register}/>
        </div>
      </div>
      <div className="image flex justify-center rounded-md">
        <image
          src="/images/algoquest.jpeg"
          alt="Event Image"
          className="rounded-2xl max-h-[50%] max-w-[50%]"
        />
      </div>
    </div>
  );
}

export default Events;
