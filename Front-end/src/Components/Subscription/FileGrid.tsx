import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineAudioFile } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { IoImages } from "react-icons/io5";
import { AiFillFilePpt } from "react-icons/ai";
import { BiSolidFileHtml } from "react-icons/bi";
import { FaFileZipper } from "react-icons/fa6";
import { MdMore } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/shadcn/ui/menubar"


interface mydata {
    size: number,
    birthtime: string,
    directory: boolean,
    file: boolean,
    symlink: boolean,
    name: string
}

interface myprops {
    fileobj: mydata,
    file_type: string
}
type IconComponentType = React.ComponentType<{ className?: string }>;

interface image {
    [key: string]: React.ComponentType;
}

const FileGrid = (props: myprops) => {

    const obj: image = {
        Videos: MdOndemandVideo,
        Audios: MdOutlineAudioFile,
        Images: IoImages,
        Documents: IoDocumentText,
    }
    const obj_more: image = {
        ppt: AiFillFilePpt,
        html: BiSolidFileHtml,
        zip: FaFileZipper,
        rest: MdMore
    }


    const { fileobj, file_type } = props;
    const [IconSelected, setIconSelected] = useState<IconComponentType | null>(null);
    useEffect(() => {
        if (file_type == "More") {
            if (fileobj.name.endsWith("ppt")) {
                const value = () => obj_more.ppt;
                setIconSelected(value);
            }
            else if (fileobj.name.endsWith("html")) {
                const value = () => obj_more.html;
                setIconSelected(value);
            }
            else if (fileobj.name.endsWith("zip")) {
                const value = () => obj_more.zip;
                setIconSelected(value);
            }
            else {
                const value = () => obj_more.rest;
                setIconSelected(value);
            }

        }
        else {
            const value = () => obj[file_type];
            setIconSelected(value);
            console.log("useeffect working");
        }
    }, [file_type])

    return (

        <div className="inline-block xl:w-40 lg:w-[9.5rem] md:w-36 sm:w-32 w-36 overflow-hidden shadow-lg bg-white rounded-lg">

            <div className="relative w-full xl:h-32 lg:h-28 md:h-[6.5rem] h-24  flex justify-center items-center">

                <Menubar className='absolute text-black right-3 top-3 text-xl'>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <HiDotsVertical className='absolute text-black right-0 top-0 text-xl' />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <FiDownload className='text-black mr-2' />   Download
                            </MenubarItem>
                            <MenubarItem>
                                <MdOutlineDriveFileRenameOutline className='text-black mr-2' />   Rename
                            </MenubarItem> <MenubarItem>
                                <MdDelete className='text-black mr-2' /> Delete
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>


                {IconSelected && <IconSelected className=" xl:text-7xl lg:text-6xl text-5xl text-black" />}
            </div>

            <div className="bg-gray-200">
                <div className="xl:pt-4 md:pt-3 pt-4 text-center font-Josefin text-base">
                    {fileobj.name.length > 17 ? fileobj.name.slice(0, 17) + "..." : fileobj.name}
                </div>
                <div className=" xl:pb-4 md:pb-3 pb-4 font-light text-center text-xs">
                    {fileobj.size.toFixed(3)}mb | {fileobj.birthtime.split('T')[0]}

                </div>
            </div>
        </div>
    )
}

export default FileGrid;

