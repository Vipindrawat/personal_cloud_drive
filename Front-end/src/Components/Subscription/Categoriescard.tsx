
import { useEffect } from "react";

interface propinterface {
    item: {
        tag: String;
        img: React.ComponentType<{ className?: string }>;
        size: Number;
    }
}
const Categoriescard = (props: propinterface) => {
    const { item } = props;


    return (
        <div>
            <div className="inline-block xl:w-40 lg:w-[9.5rem] md:w-36 sm:w-32 w-36 overflow-hidden shadow-lg bg-white rounded-lg">
                <div className="w-full xl:h-32 lg:h-28 md:h-[6.5rem] h-24 bg-gray-700 flex justify-center items-center">
                    <item.img className=" xl:text-7xl lg:text-6xl text-5xl text-white" />
                </div>
                <div className="xl:mt-4 md:mt-3 mt-4 xl:mb-1 text-center font-Josefin lg:text-xl text-lg">
                    {item.tag}
                </div>
                <div className="px-6 xl:mb-4 md:mb-3 mb-4 font-light text-center xl:text-sm text-xs">
                    0 files | {item.size.toString()} mb
                </div>
            </div>
        </div>
    )
}

export default Categoriescard;
