
import { Avatar, AvatarFallback, AvatarImage } from "../../shadcn/ui/avatar"
import { FaCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Leftbar = () => {
    return (
        <div className="h-[94%] w-11/12 flex flex-col justify-between items-center">
            <div className="">
                <Avatar className="mx-auto mt-2">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex justify-center items-center mt-4">
                    <FaUser className=" mr-2 rounded-full text-xl" />
                    <span className="text-black font-Josefin 2xl:text-xl text-lg mt-1">My Cloud</span>
                </div>
            </div>

            <button className="bg-black hover:bg-gray-700 text-white font-Josefin py-3 px-3 rounded mb-2 w-11/12">
                Sign out
            </button>
        </div>
    )
}

export default Leftbar;
