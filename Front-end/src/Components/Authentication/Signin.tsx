import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import { useState } from "react";

const Signin = () => {
    const [signincred, setsignincred] = useState<{ signin_email: string, signin_password: string, email_error: string, password_error: string }>({ signin_email: "", signin_password: "", email_error: "", password_error: "" });
    const [signin_visibility, setsignin_visibility] = useState<string>("password");

    //passward visibility handler:
    const visibilityhandler = () => {
        setsignin_visibility(signin_visibility === "password" ? "" : "password");
    }

    // onchange handler for email:
    const emailRegex = /^\w+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsignincred({
            ...signincred,
            signin_email: event.target.value,
            email_error:
                event.target.value && !emailRegex.test(event.target.value)
                    ? 'Invalid email format .'
                    : '',
        });
    };
    // onchange handler for password:
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // checking if the email input field is empty or not:
        if (signincred.signin_email.length == 0) {
            setsignincred({
                ...signincred, signin_password: event.target.value, password_error: event.target.value && event.target.value.length < 5 ? `Password must be at least 5 characters .` : '', email_error: event.target.value && "Email is a Required field ."
            });
        }
        else {
            setsignincred({
                ...signincred,
                signin_password: event.target.value,
                password_error:
                    event.target.value && event.target.value.length < 5
                        ? `Password must be at least 5 characters .`
                        : '',
            });
        }
    };
    // form submit event handler:
    const formsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (

        <div className="w-full h-[100vh] flex justify-center items-center absolute top-0 z-10">
            <div className="2xl:w-[62.5%] xl:w-9/12 lg:w-10/12 w-[94%]2xl:min-h-[38rem] lg:min-h-[35rem] md:min-h-[30rem] sm:min-h-[27rem] min-h-[32rem] flex flex-row rounded-2xl ">
                {/* 2xl:min-h-[38rem] lg:min-h-[35rem] md:min-h-[30rem] sm:min-h-[27rem] min-h-[32rem] */}
                {/* lg:min-h-[38rem] md:min-h-[30rem] sm:min-h-[27rem] min-h-[32rem] */}
                {/* 2xl:mt-[9.5rem] xl:mt-28 sm:mt-14 mt-20 */}
                <div className="w-1/2 sm:block hidden">
                </div>
                <form onSubmit={formsubmit} className="sm:w-1/2 w-full flex flex-col items-center ">

                    <div className="flex flex-col 2xl:mt-56 lg:mt-48 md:mt-40 sm:mt-36 mt-48 lg:w-4/6 sm:w-9/12 w-5/6">

                        <div className="text-red-500 h-5 font-Josefin lg:text-sm sm:text-xs text-sm mx-auto"></div>
                        <span className="relative mb-2">
                            <label htmlFor="signin_email" className="absolute md:text-2xl hover:cursor-pointer"><MdEmail /></label>
                            <input className="focus:outline-none border-b-2 border-gray-300 md:px-11 px-7 w-full md:text-base text-sm font-Josefin" placeholder="Your Email" type="email" name="signin_email" id="signin_email" required value={signincred.signin_email} onChange={handleEmailChange} />
                        </span>
                        <div className={`text-red-500 h-5 font-Josefin lg:text-sm sm:text-xs text-sm xl:ml-6 md:ml-4 sm:ml-1.5 ml-5 `}> {signincred.email_error}</div>
                        <br />

                        <span className="relative mb-2">
                            <label htmlFor="signin_password" className="absolute md:text-lg hover:cursor-pointer"><FaLock /></label>
                            <MdVisibility className="absolute right-1 md:text-xl hover:cursor-pointer" onClick={visibilityhandler} />
                            <input className="focus:outline-none border-b-2 border-gray-300 md:px-11 px-7 w-full md:text-base text-sm font-Josefin" placeholder="Password" type={signin_visibility} name="signin_password" id="signin_password" required minLength={5} value={signincred.signin_password} onChange={handlePasswordChange} />
                        </span>
                        <div className="text-red-500 h-5 font-Josefin lg:text-sm sm:text-xs text-sm xl:ml-6 md:ml-4 sm:ml-1.5 ml-5">{signincred.password_error}</div>
                        <br />

                    </div>
                    <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-Josefin text-lg py-[0.62rem] px-9 rounded mt-3">
                        Log in
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Signin
