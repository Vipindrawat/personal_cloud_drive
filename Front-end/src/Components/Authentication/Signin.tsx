import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

const Signin = () => {
    return (

        <div className="w-full flex justify-center items-center absolute top-0 z-10">
            <div className="2xl:w-[62.5%] xl:w-9/12 lg:w-10/12 w-[94%] lg:min-h-[38rem] md:min-h-[30rem] sm:min-h-[27rem] min-h-[32rem] flex flex-row rounded-2xl 2xl:mt-[9.5rem] xl:mt-28 sm:mt-14 mt-20">


                <div className="w-1/2 sm:block hidden">
                </div>
                <form className="sm:w-1/2 w-full flex flex-col items-center ">

                    <div className="flex flex-col 2xl:mt-64 lg:mt-56 md:mt-48 sm:mt-44 mt-56 w-4/6">

                        <span className="relative mb-4">
                            <label htmlFor="email" className="absolute md:text-2xl hover:cursor-pointer"><MdEmail /></label>
                            <input className="focus:outline-none border-b-2 border-gray-300 md:px-11 px-7 w-full md:text-base text-sm" placeholder="Your Email" type="email" name="email" id="email" />
                        </span>
                        <br />

                        <span className="relative">
                            <label htmlFor="password" className="absolute md:text-lg hover:cursor-pointer"><FaLock /></label>
                            <MdVisibility className="absolute right-1 md:text-xl hover:cursor-pointer" />
                            <input className="focus:outline-none border-b-2 border-gray-300 md:px-11 px-7 w-full md:text-base text-sm" placeholder="Password" type="password" name="password" id="password" />
                        </span>
                        <br />

                    </div>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-Josefin text-lg py-[0.62rem] px-9 rounded mt-7">
                        Log in
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Signin
