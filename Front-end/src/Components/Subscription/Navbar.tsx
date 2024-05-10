import { FaCloud } from "react-icons/fa";
// import { PiDotsSixBold } from "react-icons/pi";
import { CgFormatJustify } from "react-icons/cg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../shadcn/ui/tooltip"

import { FaCloudUploadAlt } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <span className="flex items-center xl:space-x-4 space-x-2">
        <FaCloud className="text-4xl" />
        <span className="2xl:text-2xl text-xl font-bold">KV-CLOUD</span>
      </span>

      <span className="flex items-center xl:space-x-4 space-x-2">
        <FaCloudUploadAlt className="md:text-3xl text-2xl" />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger > <CgFormatJustify className=" md:text-3xl text-2xl" /></TooltipTrigger>
            <TooltipContent>
              <p> Display mode/all </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

      </span>
    </>
  )
}

export default Navbar
