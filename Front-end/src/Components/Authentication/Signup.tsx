
import { FaUserTie } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

const Signup = () => {
    return (

        <div className="w-full flex justify-center items-center absolute top-0 z-10">
            <div className="2xl:w-[62.5%] xl:w-9/12 lg:w-10/12 w-[94%] lg:min-h-[38rem] md:min-h-[30rem] sm:min-h-[27rem] min-h-[32rem] flex flex-row rounded-2xl 2xl:mt-[9.5rem] xl:mt-28 sm:mt-14 mt-20">

                <div className="w-1/2 sm:block hidden">
                </div>
                <form className=" sm:w-1/2 w-full flex flex-col items-center ">

                    <div className="flex flex-col 2xl:mt-60 lg:mt-52 md:mt-44 sm:mt-40 mt-52 w-4/6 lg:space-y-3 ">
                        {/* br tag is block level element and span is a inline element so br cannnot be used inside the span element */}
                        <span className="relative ">
                            <label htmlFor="name" className="absolute lg:text-xl hover:cursor-pointer " ><FaUserTie /></label>
                            <input className="focus:outline-none border-b-2 border-gray-300 lg:px-11 px-7 w-full lg:text-base text-sm" placeholder="Your name" id="name" type="text" />
                        </span>
                        <br />

                        <span className="relative ">
                            <label htmlFor="email" className="absolute lg:text-2xl hover:cursor-pointer"><MdEmail /></label>
                            <input className="focus:outline-none border-b-2 border-gray-300 lg:px-11 px-7 w-full lg:text-base text-sm" placeholder="Your Email" type="email" name="email" id="email" />
                        </span>
                        <br />

                        <span className="relative ">
                            <label htmlFor="password" className="absolute lg:text-lg text-sm hover:cursor-pointer"><FaLock /></label>
                            <MdVisibility className="absolute right-1 lg:text-xl hover:cursor-pointer" />
                            <input className="focus:outline-none border-b-2 border-gray-300 lg:px-11 px-7 w-full lg:text-base text-sm" placeholder="Password" type="password" name="password" id="password" />
                        </span>
                        <br />

                        <span className="relative ">
                            <label htmlFor="cpassword" className="absolute lg:text-lg text-sm hover:cursor-pointer"><FaLock /></label>
                            <MdVisibility className="absolute right-1 lg:text-xl hover:cursor-pointer" />
                            <input className="focus:outline-none border-b-2 border-gray-300 lg:px-11 px-7 w-full lg:text-base text-sm" placeholder="Confirm Password" type="password" name="cpassword" id="cpassword" />
                        </span>
                        <br />

                    </div>
                    <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white lg:text-base text-sm font-bold py-3 px-4 rounded lg:mt-7 md:mt-5 sm:mt-4 mt-7">
                        Create Account
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Signup;
