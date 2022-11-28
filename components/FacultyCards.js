import Image from "next/image";

export default function FacultyCards(props) {
    const { image, name, position, mg } = props;

    return (
        <div
            className={`w-72 h-80 flex justify-start items-center flex-col ${mg}`}
        >
            <Image src={image} alt="faculty" />
            <p className="text-white text-xl mt-3">{name}</p>
            <p className="text-slate-400 text-lg">{position}</p>
        </div>
    );
}
