import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FcVideoFile } from "react-icons/fc";
import { FcAudioFile } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
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

const FileList = (props: myprops) => {

    const obj: image = {
        Videos: FcVideoFile,
        Audios: FcAudioFile,
        Images: FcImageFile,
        Documents: FcDocument,
        More: MdMore
    }


    const { fileobj, file_type } = props;
    const [Selectedicon, setSelectedicon] = useState<IconComponentType | null>(null);
    useEffect(() => {
        const value = () => obj[file_type];
        setSelectedicon(value);
    }, [file_type])

    return (

        <div className='h-12 hover:bg-gray-300 border-b-[1.5px] border-gray-500 flex justify-between items-center font-Josefin lg:px-4 px-2 xl:text-base sm:text-sm text-xs'>
            <div className="flex w-[45%] items-center">
                {Selectedicon && <Selectedicon className="sm:text-2xl text-xl xl:pr-2 text-blue-500" />}
                <div className="">{fileobj.name}</div>
            </div>

            <div className="w-[26%]">{fileobj.size.toFixed(3)}mb</div>
            <div className="w-[26%] ">{fileobj.birthtime.split('T')[0]}</div>
            <div className="w-[3%] h-full hover:cursor-pointer border-blue-500 flex justify-center ">

                <Menubar className="w-full h-full">
                    <MenubarMenu >
                        <MenubarTrigger className='h-full w-full flex justify-center'>
                            <HiDotsVertical className='' />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <FiDownload className='text-black mr-2 p-1 ' />   Download
                            </MenubarItem>
                            <MenubarItem>
                                <MdOutlineDriveFileRenameOutline className='text-black mr-2' />   Rename
                            </MenubarItem> <MenubarItem>
                                <MdDelete className='text-black mr-2' /> Delete
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>

            </div>
        </div>
    )
}

export default FileList;

