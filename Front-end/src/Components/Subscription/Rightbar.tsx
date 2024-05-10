import { FaFileUpload } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { GrStorage } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";

const Rightbar = () => {
    return (
        <div className="w-11/12 h-[96%] flex flex-col justify-between">

            <div className="h-[70%] bg-gray-100 flex flex-col xl:justify-normal justify-center">
                <div className="3xl:h-72 h-64 flex flex-col justify-center items-center rounded">
                    <FaFileUpload className="h-36 w-full text-gray-800" />
                    <div className="text-xl font-bold text-center pt-2">Add new files</div>
                </div>

                <form action="" className="flex flex-col items-center">
                    <input type="file" className="border-2 border-gray-300 rounded file:bg-gray-800 file:border-none  file:text-white file:bottom-0 file:p-2 file:xl:text-base file:text-sm xl:text-base lg:text-sm text-xs file:rounded bg-white xl:w-11/12 w-[96%] p-1 font-Josefin lg:file:mr-4 file:mr-2" />

                    <div className="flex 3xl:my-5 my-3 items-center justify-center w-full">
                        <div className=" border-t-[1px] border-black xl:w-5/12 w-4/12 h-0"></div>
                        <span className="text-2xl font-Josefin px-2">or</span>
                        <div className="border-t-[1px] border-black xl:w-5/12 w-4/12 h-0"></div>
                    </div>

                    <div className="relative w-full flex justify-center">
                        <label htmlFor="link" className="xl:text-2xl text-xl absolute bottom-4 xl:left-8 left-3"><HiLink /></label>
                        <input type="text" className="border-2 border-black p-3 xl:pl-14 pl-9 xl:w-11/12 w-[96%] font-Josefin rounded xl:text-base text-sm" placeholder="Add upload link here" name="link" id="link" />
                    </div>

                    <button className="bg-black hover:bg-gray-900 text-white font-Josefin font-extrabold  py-3 px-4 rounded xl:mt-8 mt-6 w-10/12">
                        Add File
                    </button>
                </form>


            </div>

            <div className="bg-cyan-700 rounded-lg text-lg h-[28%] overflow-hidden">

                <div className="3xl:p-2 xl:p-1 p-2 flex flex-col items-center space-y-1">
                    <div className="flex justify-center items-center text-black rounded-lg 3xl:p-2 p-1 w-full">
                        <GrStorage className="font-bold mr-2 rounded text-white" />
                        <div className="text-center font-bold xl:text-2xl text-xl">Your Storage</div>
                    </div>

                    <div className="w-28 h-28 relative border-[6px] border-black rounded-full">
                        {/* <IoAdd className="absolute -left-[2.85rem] -top-[2.80rem] z-30 h-48 w-48 text-white" /> */}
                        <div className="absolute z-40 text-xl left-[1.85rem] top-9 font-bold">75%</div>
                        <div className="w-[88%] h-[88%] bg-blue-500 rounded-full absolute z-10 left-[0.35rem] top-[0.37rem] box-border border-[6px] border-black"></div>
                        <progress className="rounded-full custom-progress bg-gray-200 w-full h-full overflow-hidden  box-border" value="75" max="100">
                        </progress>
                    </div>

                    <p className="pt-1 ml-2 font-medium xl:text-lg lg:text-base text-sm"><span className="text-white">75gb</span> is used out of <span className="text-white">100gb</span></p>
                </div>
            </div>

        </div>
    )
}

export default Rightbar;
