import { Navbar } from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Events from "../components/Events/Events";
import Heading from "../components/Heading";
import Button from "../components/Button";

function eventPage() {
    return (
        <>
            <Head>
                <title>Events - ACM Amritapuri</title>
            </Head>
            <div className="event-page h-[100vh] w-[100%] relative overflow-x-hidden">
                {/* Background Ellipses */}

                <div className="ellipse-1 animate-updown"></div>
                <div className="ellipse-2 animate-bounce"></div>
                <div className="ellipse-3 animate-downup"></div>

                {/* Main content of events page */}
                <Navbar isTransparent={true} />
                <Events />
                <div className="past-events mt-10 mb-10 min-h-fit flex flex-col">
                    <Heading heading="PAST EVENTS" />
                    <div className="slideshow grid md:grid-rows-1 md:grid-cols-3 grid-rows-1 grid-cols-1 place-items-center">
                        <img src="/images/pastEvents/1.jpg" alt="Event Image" className="rounded-md max-h-[70%] max-w-[70%]" />
                        <img src="/images/pastEvents/2.jpg" alt="Event Image" className="rounded-md max-h-[70%] max-w-[70%]" />
                        <img src="/images/pastEvents/3.jpg" alt="Event Image" className="rounded-md max-h-[70%] max-w-[70%]" />
                    </div>
                    <div className="view-more self-center text-white">
                        <Button message={"View More"} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default eventPage;
