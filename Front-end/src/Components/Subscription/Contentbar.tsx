import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineSearch } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import { FaImages } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdMore } from "react-icons/md";


import { useEffect, useState } from "react";
import Categoriescard from "./Categoriescard";


const Contentbar = () => {
    const arra: { tag: String, img: React.ComponentType, size: Number }[] = [
        {
            tag: "Videos",
            img: IoVideocam,
            size: 0
        },
        {
            tag: "Audio",
            img: AiFillAudio,
            size: 0
        }, {
            tag: "Images",
            img: FaImages,
            size: 0
        }, {
            tag: "Documents",
            img: IoDocumentText,
            size: 0
        }, {
            tag: "More",
            img: MdMore,
            size: 0
        }
    ]
    const [elements, setelements] = useState<{ tag: String, img: React.ComponentType, size: Number }[]>(arra);

    return (
        <div className="h-[97%] w-full box-border border-b-2 border-white flex justify-center">
            <div className="w-[94%] h-full">


                <div className="h-[8%] flex items-center xl:justify-normal justify-center bg-gray-700 rounded-lg mb-7">

                    <div className="relative bg-white xl:h-12 sm:h-11 h-10 xl:w-4/6 sm:w-9/12 w-10/12 flex justify-center items-center rounded xl:ml-16">
                        <label htmlFor="search" className="absolute sm:text-2xl text-xl xs:left-4 left-3 xl:bottom-[0.85rem]  bottom-3 border-black">
                            <BiSearchAlt2 />

                        </label>
                        <input type="text" className="focus:outline-none font-Josefin xl:ml-0 ml-8 w-4/5 md:text-base sm:text-lg text-base" name="search" id="search" placeholder="Search by Name" />
                    </div>
                </div>

                <div className=" overflow-y-auto h-[92%]">

                    <h1 className="xl:text-3xl text-2xl font-bold mb-7">Categories:</h1>
                    <div className="grid 3xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 3xl:gap-x-10 gap-5 justify-items-center">
                        {elements.map((value) => {
                            return <Categoriescard key={String(value.tag)} item={value} />;
                        })}
                    </div>

                    <h1 className="xl:text-3xl text-2xl font-bold my-7">Recent Files:</h1>
                    <div className=""></div>
                </div>
            </div>c  
        </div>
    )
}

export default Contentbar;
