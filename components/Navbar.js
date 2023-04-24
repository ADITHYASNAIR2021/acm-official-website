import Link from "next/link";
import { useState } from "react";
import logo from "../public/images/website_logo.png"
import Button from "./Button";
import Image from "next/image";

export const Navbar = ({isTransparent}) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    var properties = (isTransparent ? "sticky top-0 z-50 flex items-center flex-wrap bg-[#020B14] p-3 bg-transparent": "sticky top-0 z-50 flex items-center flex-wrap bg-[#020B14] p-3")
    return (
        <div className="bg-[#020B14]">
            <nav className={properties}>
                <div className="inline-flex items-center p-2 h-[60px] w-[200px]">
                    <Image src={logo} alt="acm logo" width={240} height={88} />
                </div>

                <button
                    className=" inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-rose-600 outline-none"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <div
                    className={`${active ? "" : "hidden"
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center text-white font-RedRose items-start justify-between flex flex-col lg:h-auto lg:space-x-10 ">
                        <Link
                            href="/"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/eventPage"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Events
                        </Link>
                        <Link
                            href="/JoinTeam"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Why join us?
                        </Link>
                        <Link
                            href="/"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Clubs
                        </Link>
                        <Link
                            href="/projects"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blog"
                            className="lg:inline-flex lg:w-auto w-full px-3 py-2 font-Poppins rounded text-white items-center justify-center hover:text-[#217EE3]"
                        >
                            Blogs
                        </Link>
                        <Button message={"JOIN US"} />
                    </div>
                </div>
            </nav>
        </div>
    );
};
