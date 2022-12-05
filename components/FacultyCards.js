import Image from "next/image";

export default function FacultyCards(props) {
    const { image, name, position, mg } = props;

    return (
        <div
            className={`sm:w-52 md:w-60 lg:w-52 xl:w-64 xl:h-80 2xl:w-72 2xl:h-80 flex justify-start items-center flex-col ${mg}`}
        >
            <Image src={image} alt="faculty" />
            <p className="text-white sm:text-md md:text-lg lg:text-xl xl:text-2xl mt-3 whitespace-nowrap">
                {name}
            </p>
            <p className="text-slate-400 sm:text-sm md:text-md lg:text-lg xl:text-xl whitespace-nowrap">
                {position}
            </p>
        </div>
    );
}
